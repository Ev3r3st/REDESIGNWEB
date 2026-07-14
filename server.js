const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);

// Save document and return public link id
app.post('/api/documents', (req, res) => {
  const id = uuidv4();
  const file = path.join(DATA_DIR, `${id}.json`);
  const payload = {
    id,
    createdAt: new Date().toISOString(),
    public: true,
    ...req.body
  };
  fs.writeFileSync(file, JSON.stringify(payload, null, 2));
  res.json({ id, url: `/public/${id}` });
});

// Serve public document safely
app.get('/public/:id', (req, res) => {
  const id = req.params.id;
  const file = path.join(DATA_DIR, `${id}.json`);
  if (!fs.existsSync(file)) return res.status(404).send('Not found');
  const content = JSON.parse(fs.readFileSync(file));
  // Strip any sensitive fields
  delete content.admin;
  res.send(`<!doctype html><meta charset="utf-8"><title>${content.title||'Document'}</title><div id="app">${escapeHtml(JSON.stringify(content))}</div>`);
});

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

app.use(express.static(path.join(__dirname)));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server listening on', port));
