import { messages, type Message, type InsertMessage } from "@shared/schema";

// Storage interface
export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
  getAllMessages(): Promise<Message[]>;
  getMessageById(id: number): Promise<Message | undefined>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private messages: Map<number, Message>;
  private currentId: number;

  constructor() {
    this.messages = new Map();
    this.currentId = 1;
  }

  async createMessage(messageData: InsertMessage): Promise<Message> {
    const id = this.currentId++;
    const message: Message = { ...messageData, id };
    this.messages.set(id, message);
    return message;
  }

  async getAllMessages(): Promise<Message[]> {
    return Array.from(this.messages.values());
  }

  async getMessageById(id: number): Promise<Message | undefined> {
    return this.messages.get(id);
  }
}

export const storage = new MemStorage();
