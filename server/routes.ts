import express, { type Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create an API router
  const apiRouter = express.Router();
  
  // Contact form submission endpoint
  apiRouter.post("/messages", async (req: Request, res: Response) => {
    try {
      // Validate request body against schema
      const messageData = insertMessageSchema.parse({
        ...req.body,
        createdAt: new Date().toISOString()
      });
      
      // Store the message
      const message = await storage.createMessage(messageData);
      
      // Return success response
      res.status(201).json({ 
        success: true,
        message: "Your message has been sent successfully!",
        data: message 
      });
    } catch (error) {
      console.error("Error submitting message:", error);
      
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false,
          message: "Validation error",
          errors: validationError.message 
        });
      }
      
      res.status(500).json({ 
        success: false,
        message: "An error occurred while submitting your message. Please try again later."
      });
    }
  });

  // Mount the API router under /api prefix
  app.use("/api", apiRouter);

  const httpServer = createServer(app);
  return httpServer;
}
