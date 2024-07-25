import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TOPIC_NAME } from './kafka-config';
import { Record as RecordModel } from 'src/domain/record';

@Controller()
export class AppController {
  constructor(
    @Inject('RECORD_REPOSITORY')
    private readonly repository: typeof RecordModel,
  ) {}

  @MessagePattern(TOPIC_NAME)
  async readMessage(@Payload() message: Record<string, string | number>) {
    await this.repository.create({
      data: JSON.stringify(message),
    });

    console.log('Received message:', message);
  }
}
