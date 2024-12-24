
export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    news: {
      article: 'https://eventregistry.org/api/v1/article',
      event: 'https://eventregistry.org/api/v1/event'
    },
    apikey: '6dd78088-7079-4eb3-92f6-f0007e33e9bb'
  });
  