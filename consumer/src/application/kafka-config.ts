import { Transport } from '@nestjs/microservices';

export const KafkaConfig = {
  name: 'CONSUMER_JOB',
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'app-gateway',
      brokers: [process.env.KAFKA || 'kafka:9092'],
    },
    consumer: {
      groupId: 'consumer',
    },
  },
};

export const TOPIC_NAME = process.env.KAFKA_TOPIC || 'my-first-topic';
