// Optional: pm2 gives the CPU-monitor's process.exit(1) something to be
// restarted BY in a real deployment (systemd/Docker's own restart policies
// work equally well - this is just the most common Node-land choice).
module.exports = {
  apps: [
    {
      name: 'node-assessment',
      script: './src/server.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
