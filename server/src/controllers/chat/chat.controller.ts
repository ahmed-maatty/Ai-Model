import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService:ChatService){}
  @Post()
  startChat(@Body() data : { prompt: string, sessionId?: string }){
    return this.chatService.generateText(data)
  }
}
