const express = require("express");
const os = require("os");

const app = express();

const PORT = 3000;

let requestCount = 0;
const startTime = Date.now();

app.get("/", (req, res) => {
  requestCount++;

  const uptime = Math.floor((Date.now() - startTime) / 1000);

  res.send(`
    <html>
      <head>
        <title>ECS DevOps Demo</title>

        <style>
          body {
            font-family: Arial;
            background: #0f172a;
            color: white;
            padding: 40px;
          }

          .card {
            background: #1e293b;
            padding: 20px;
            border-radius: 10px;
            width: 500px;
          }

          h1 {
            color: #38bdf8;
          }

          p {
            margin: 10px 0;
          }

          a {
            color: #22c55e;
          }
        </style>
      </head>

      <body>
        <div class="card">
          <h1>🚀 ECS Fargate Application</h1>

          <p><strong>Status:</strong> Running</p>

          <p><strong>Hostname:</strong> ${os.hostname()}</p>

          <p><strong>Environment:</strong> Production</p>

          <p><strong>Total Requests:</strong> ${requestCount}</p>

          <p><strong>Uptime:</strong> ${uptime} seconds</p>

          <p><strong>Version:</strong> v1.0.0</p>

          <hr>

          <a href="/health">Health Check</a><br><br>

          <a href="/load">Generate CPU Load</a>
        </div>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/load", (req, res) => {
  const end = Date.now() + 5000;

  while (Date.now() < end) {}

  res.send("CPU spike generated");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
