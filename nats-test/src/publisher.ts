import nats from 'node-nats-streaming';

const stan = nats.connect('audiophile', 'test', {
  url: 'http://localhost:4222',
});

const data = {
  id: '1',
  title: 'Audiophile',
  price: 400,
};

stan.on('connect', () => {
  console.log('Connected to NATS server');

  stan.publish('product:created', JSON.stringify(data), () => {
    console.log('Event published');
  });
});

stan.on('error', (err) => {
  console.error('NATS connection error:', err);
});
