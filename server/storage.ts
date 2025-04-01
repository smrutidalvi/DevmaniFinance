import { messages, type Message, type InsertMessage } from "@shared/schema";
import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
const { Pool } = pkg;
import { eq } from "drizzle-orm";

// Storage interface
export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
  getAllMessages(): Promise<Message[]>;
  getMessageById(id: number): Promise<Message | undefined>;
}

// PostgreSQL storage implementation
export class PostgresStorage implements IStorage {
  private db: ReturnType<typeof drizzle>;
  
  constructor() {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    
    this.db = drizzle(pool);
  }

  async createMessage(messageData: InsertMessage): Promise<Message> {
    // Add current timestamp for createdAt and ensure proper null handling
    const messageWithTimestamp = {
      ...messageData,
      phone: messageData.phone || null,
      service: messageData.service || null,
      createdAt: new Date().toISOString()
    };
    
    const result = await this.db.insert(messages)
      .values(messageWithTimestamp)
      .returning();
      
    return result[0];
  }

  async getAllMessages(): Promise<Message[]> {
    return await this.db.select().from(messages);
  }

  async getMessageById(id: number): Promise<Message | undefined> {
    const result = await this.db.select()
      .from(messages)
      .where(eq(messages.id, id));
      
    return result[0];
  }
}

// In-memory storage implementation (fallback if database isn't available)
export class MemStorage implements IStorage {
  private messagesMap: Map<number, Message>;
  private currentId: number;

  constructor() {
    this.messagesMap = new Map();
    this.currentId = 1;
  }

  async createMessage(messageData: InsertMessage): Promise<Message> {
    const id = this.currentId++;
    const message: Message = { 
      ...messageData, 
      id,
      phone: messageData.phone || null,
      service: messageData.service || null,
      createdAt: new Date().toISOString()
    };
    this.messagesMap.set(id, message);
    return message;
  }

  async getAllMessages(): Promise<Message[]> {
    return Array.from(this.messagesMap.values());
  }

  async getMessageById(id: number): Promise<Message | undefined> {
    return this.messagesMap.get(id);
  }
}

// Export PostgreSQL storage by default, with fallback to MemStorage
let storage: IStorage;

try {
  storage = new PostgresStorage();
  console.log("Using PostgreSQL database for storage");
  
  // Test database connection
  (async () => {
    try {
      await storage.getAllMessages();
      console.log("Successfully connected to the database");
    } catch (error) {
      console.error("Error connecting to the database:", error);
      console.log("Falling back to in-memory storage");
      storage = new MemStorage();
    }
  })();
} catch (error) {
  console.warn("Failed to connect to PostgreSQL database, using in-memory storage instead:", error);
  storage = new MemStorage();
}

export { storage };
