import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { KafkaProducer } from './kafka-producer';
import { TOPIC_NAME } from './kafka-config';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';

class EventData {
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  name: string;
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  title: string;
  [key: string]: any;
}

class Event {
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  event: string;

  @ApiProperty({
    type: EventData,
    description: 'This is a required property',
  })
  data: EventData;
}

@ApiTags('Default')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly kafkaProducer: KafkaProducer,
  ) {}

  @Get()
  @ApiOkResponse()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/publish')
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    description: 'Created Succesfully',
    isArray: false,
    type: 'string',
  })
  async publishMessage(@Body() body: Event): Promise<string> {
    return this.kafkaProducer
      .send({
        topic: TOPIC_NAME,
        messages: [
          {
            key: '',
            value: JSON.stringify(body),
          },
        ],
      })
      .then(() => 'Message published')
      .catch(() => 'Message not published');
  }
}
