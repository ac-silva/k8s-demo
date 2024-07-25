import { ClientsModule } from '@nestjs/microservices';
import { KafkaConfig } from './kafka-config';

export const createKafkaClient = (options = []) => {
  return ClientsModule.register([KafkaConfig, ...options]);
};
