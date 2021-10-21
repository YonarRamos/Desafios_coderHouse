module.exports = {
  apps: [
    {
      name: 'app1',
      script: `dist/index.js`,
      args : `--port=8081` , 
      watch: true,
      autorestart: false,
      exec_mode : 'fork'
    },
    {
      name: 'app2',
      script: `dist/index.js`,
      args : `--port=8082` , 
      watch: true,
      autorestart: false,
      instances: 'max',
      exec_mode : 'cluster'
    },
  ],
};
