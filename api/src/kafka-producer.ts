import { Inject, Injectable } from '@nestjs/common';
import { Kafka, Message, Partitioners } from 'kafkajs';

@Injectable()
class KafkaProducer {
  constructor(@Inject('Kafka') private readonly kafkajs: Kafka) {}

  async send({ topic, messages }: { topic: string; messages: Message[] }) {
    const producer = this.kafkajs.producer({
      createPartitioner: Partitioners.DefaultPartitioner,
    });
    await producer.connect();
    await producer.send({ topic, messages });
    await producer.disconnect();
  }
}

export { KafkaProducer };
