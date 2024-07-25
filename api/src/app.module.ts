import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Kafka } from 'kafkajs';
import { KafkaProducer } from './kafka-producer';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'Kafka',
      useValue: new Kafka({
        brokers: [process.env.KAFKA || 'kafka:9092'],
        retry: {
          initialRetryTime: 100,
          retries: 1,
        },
      }),
    },
    KafkaProducer,
  ],
})
export class AppModule {}
