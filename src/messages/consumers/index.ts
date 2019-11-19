/**
 * Sample Kafka Consumer Program
 */
const kafka = require('kafka-node');
const bp = require('body-parser');
const config = require('../../config/kafka');

const consumer = () => {
  try {
    const Consumer = kafka.HighLevelConsumer;
    const client = new kafka.Client(config.kafka_server);
    let consumer = new Consumer(
      client,
      [{ topic: config.kafka_topic, partition: 0 }],
      {
        autoCommit: true,
        fetchMaxWaitMs: 1000,
        fetchMaxBytes: 1024 * 1024,
        encoding: 'utf8',
        fromOffset: false
      }
    );
    consumer.on('message', message => {
      console.log('here');
      console.log(
        'kafka-> ',
        message.value
      );
    })
    consumer.on('error', err => {
      console.log('error', err);
    });
  }
  catch(e) {
    console.log(e);
  }
};

export default consumer;
