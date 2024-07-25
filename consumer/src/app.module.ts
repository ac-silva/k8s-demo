import { Module } from '@nestjs/common';
import { AppController } from './application/app.controller';
import { AppService } from './app.service';
import { createKafkaClient } from './application/kafka-client';
import { ConfigModule } from '@nestjs/config';
import { Record } from './domain/record';
import { SequelizeConfig } from './application/sequelize-config';

@Module({
  imports: [createKafkaClient(), ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [
    AppService,
    SequelizeConfig,
    {
      provide: 'RECORD_REPOSITORY',
      useValue: Record,
    },
  ],
})
export class AppModule {}
