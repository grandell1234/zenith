module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:8080/'],
      startServerCommand: 'npm run preview -- --port=8080',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
