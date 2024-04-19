const nodeEnv = process.env.NODE_ENV || 'development';

export const config = {
  nodeEnv,
  baseUrl: process.env.BASE_URI || 'http://localhost',
  api: {
    port: process.env.PORT || 3000,
  },
  outward: {
    currency: {
      url: 'https://api.coinbase.com/v2/exchange-rates',
    },
  },
};
