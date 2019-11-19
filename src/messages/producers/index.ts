/**
 * Sample Kafka Producer Program
 */
const kafka = require('kafka-node');
const bp = require('body-parser');
const config = require('../../config/kafka');

const producer = () => {
  try {
    const Producer = kafka.Producer;
    const client = new kafka.Client(config.kafka_server);
    const producer = new Producer(client);
    const kafka_topic = 'example';
    console.log(kafka_topic);
    let payloads = [
      {
        topic: kafka_topic,
        messages: config.kafka_topic
      }
    ];

    producer.on('ready', async () => {
      let push_status = producer.send(payloads, (err, data) => {
        if (err) {
          console.log('[kafka-producer -> ' + kafka_topic + ']: broker update failed');
        } else {
          console.log('[kafka-producer -> ' + kafka_topic + ']: broker update success');
        }
      });
    });

    producer.on('error', err => {
      console.log(err);
      console.log('[kafka-producer -> ' + kafka_topic + ']: connection errored');
      throw err;
    });
  }
  catch (e) {
    console.log(e);
  }
};

export default producer;
