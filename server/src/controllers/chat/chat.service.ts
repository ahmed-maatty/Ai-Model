import { ChatSession, GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

@Injectable()
export class ChatService {
  private readonly googleAI: GoogleGenerativeAI
  private readonly googleModel: GenerativeModel
  private chatSession: { [sessionId: string]: ChatSession } = {};
  constructor() {
    const apiKey: string = process.env.GEMINI_API_KEY || "error";
    const GEMINI_MODEL = "gemini-2.0-flash";
    this.googleAI = new GoogleGenerativeAI(apiKey);
    this.googleModel = this.googleAI.getGenerativeModel(
      {
        model: GEMINI_MODEL
      }
    )
  }

  private getChatSession(sessionId?: string) {
    const sessionIdToUse = sessionId ?? v4();
    let result = this.chatSession[sessionIdToUse];
    if (!result) {
      result = this.googleModel.startChat();
      this.chatSession[sessionIdToUse] = result
    }

    return {
      sessionId: sessionIdToUse,
      chat: result
    }
  }

  async generateText(data: { prompt: string, sessionId?: string }) {
    try {
      const {sessionId : Id , prompt} = data;
      const {sessionId , chat} = this.getChatSession(Id);
      const result = await chat.sendMessage(prompt);
      return {
        result : result.response.text(),
        sessionId
      }
    } catch (error) {
      console.log(error)
    }
  }
}