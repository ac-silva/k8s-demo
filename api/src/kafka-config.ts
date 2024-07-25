import { Transport } from '@nestjs/microservices';

export const KafkaConfig = {
  name: 'PRODUCER_SERVICE',
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'app-gateway',
      brokers: [process.env.KAFKA || 'kafka:9092'],
    },
  },
};

export const TOPIC_NAME = process.env.KAFKA_TOPIC || 'my-first-topic';
