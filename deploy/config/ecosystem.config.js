// Fichier de configuration de pm2
const porduction_variables = {
  "NODE_ENV": "production",
  "TOKEN_SECRET_KEY": "QsrGY4n7nBGhsxW",
}
module.exports = {
  apps : [
    {
    name: "back",
    cwd: '/home/barto/www/nginx/backend/sources',
    script: '/home/barto/www/nginx/backend/sources/server.js',
    watch: true,
    ignore_watch : [
      "/home/barto/www/nginx/backend/pm2.log", 
      "/home/barto/www/nginx/backend/sources/node_modules", 
      "/home/barto/www/nginx/backend/sources/package-lock.json"
    ],
    instances : "max",
    exec_mode : "cluster",
    log_file: "/home/barto/www/nginx/backend/pm2.log",
    combine_logs: true,
    // log_date_format: "YYYY-MM-DD HH:mm Z",
    env: {
      ...porduction_variables,
      "CONNECTION_URL": "mongodb+srv://octopieu:uxBIEvh1k0INrIYr@cluster0.1n0zl.mongodb.net/octopieuData?retryWrites=true&w=majority",
      "PORT": 2500,
      "LISTENING_ADRESS": "127.0.0.1"
    }
    },
    {
      name: "betaback",
      cwd: '/home/barto/www/nginx/betabackend/sources',
      script: '/home/barto/www/nginx/betabackend/sources/server.js',
      watch: true,
      ignore_watch : [
        "/home/barto/www/nginx/betabackend/pm2.log", 
        "/home/barto/www/nginx/betabackend/sources/node_modules", 
        "/home/barto/www/nginx/betabackend/sources/package-lock.json"
      ],
      instances : "4",
      exec_mode : "cluster",
      log_file: "/home/barto/www/nginx/betabackend/pm2.log",
      // log_date_format: "YYYY-MM-DD HH:mm Z",
      combine_logs: true,
      env: {
        ...porduction_variables,
        "CONNECTION_URL": "mongodb+srv://octopieu:uxBIEvh1k0INrIYr@cluster0.1n0zl.mongodb.net/octopieuData?retryWrites=true&w=majority",
        "PORT": 3000,
        "LISTENING_ADRESS": "127.0.0.1"
      }
    }

],
};
