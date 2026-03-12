import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const BOT_NAME = 'TRUTH-MD';
const startTime = Date.now();

app.get('/', (req, res) => {
  const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);
  const hours = Math.floor(uptimeSeconds / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = uptimeSeconds % 60;
  const uptime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${BOT_NAME} Status</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #111;
      color: #fff;
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
    .card {
      background: #1a1a2e;
      border: 1px solid #25d366;
      border-radius: 16px;
      padding: 40px;
      text-align: center;
      max-width: 400px;
      width: 90%;
      box-shadow: 0 0 40px rgba(37,211,102,0.2);
    }
    .logo {
      font-size: 48px;
      margin-bottom: 10px;
    }
    h1 {
      font-size: 28px;
      color: #25d366;
      letter-spacing: 3px;
      margin-bottom: 6px;
    }
    .subtitle {
      color: #888;
      font-size: 13px;
      margin-bottom: 30px;
    }
    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #0d2818;
      border: 1px solid #25d366;
      border-radius: 20px;
      padding: 8px 20px;
      font-size: 14px;
      color: #25d366;
      margin-bottom: 24px;
    }
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #25d366;
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }
    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #222;
      font-size: 14px;
    }
    .info-row:last-child { border-bottom: none; }
    .info-label { color: #888; }
    .info-value { color: #fff; font-weight: 500; }
    .uptime-timer {
      font-family: monospace;
      font-size: 22px;
      color: #25d366;
      margin-top: 20px;
      letter-spacing: 2px;
    }
    .uptime-label {
      color: #555;
      font-size: 11px;
      margin-top: 4px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  </style>
  <meta http-equiv="refresh" content="10"/>
</head>
<body>
  <div class="card">
    <div class="logo">🤖</div>
    <h1>${BOT_NAME}</h1>
    <div class="subtitle">Advanced WhatsApp Bot</div>
    <div class="status-badge">
      <div class="dot"></div>
      Bot is Running
    </div>
    <div>
      <div class="info-row">
        <span class="info-label">Bot Name</span>
        <span class="info-value">${BOT_NAME}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Platform</span>
        <span class="info-value">Heroku</span>
      </div>
      <div class="info-row">
        <span class="info-label">Runtime</span>
        <span class="info-value">Node.js ${process.version}</span>
      </div>
    </div>
    <div class="uptime-timer" id="uptime">${uptime}</div>
    <div class="uptime-label">Connection Uptime</div>
  </div>
  <script>
    let seconds = ${uptimeSeconds};
    setInterval(() => {
      seconds++;
      const h = String(Math.floor(seconds / 3600)).padStart(2,'0');
      const m = String(Math.floor((seconds % 3600) / 60)).padStart(2,'0');
      const s = String(seconds % 60).padStart(2,'0');
      document.getElementById('uptime').textContent = h + ':' + m + ':' + s;
    }, 1000);
  </script>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`[web] Status page running on port ${PORT}`);
});
