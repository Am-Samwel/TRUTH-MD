const http = require('http');
const PORT = 5000;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TRUTH-MD Bot</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #0a0a0a, #1a1a2e);
      color: #fff;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .card {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(37,211,102,0.3);
      border-radius: 16px;
      padding: 48px 40px;
      text-align: center;
      max-width: 480px;
      width: 90%;
      box-shadow: 0 0 40px rgba(37,211,102,0.1);
    }
    .logo { font-size: 64px; margin-bottom: 16px; }
    h1 { font-size: 2rem; color: #25D366; margin-bottom: 8px; }
    .subtitle { color: #aaa; margin-bottom: 32px; font-size: 0.95rem; }
    .status {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(37,211,102,0.1);
      border: 1px solid rgba(37,211,102,0.4);
      border-radius: 24px;
      padding: 10px 24px;
      font-size: 0.9rem;
      color: #25D366;
      margin-bottom: 32px;
    }
    .dot {
      width: 8px; height: 8px;
      background: #25D366;
      border-radius: 50%;
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }
    .info { color: #888; font-size: 0.85rem; line-height: 1.6; }
    .session-warning {
      margin-top: 24px;
      padding: 12px 16px;
      background: rgba(255,165,0,0.1);
      border: 1px solid rgba(255,165,0,0.3);
      border-radius: 8px;
      color: #ffa500;
      font-size: 0.85rem;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">🤖</div>
    <h1>TRUTH-MD</h1>
    <p class="subtitle">WhatsApp Bot Relay</p>
    <div class="status">
      <div class="dot"></div>
      Bot is Running
    </div>
    <p class="info">
      The TRUTH-MD WhatsApp bot is active and processing messages.<br>
      Configure your SESSION_ID in the environment secrets to connect.
    </p>
    ${!process.env.SESSION_ID ? `<div class="session-warning">
      ⚠️ SESSION_ID is not set. The bot may not be connected to WhatsApp.
    </div>` : ''}
  </div>
</body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Status page running on http://0.0.0.0:${PORT}`);
});
