import express from 'express';
import fs from 'fs';
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/write', (req, res) => {
  const content = req.body.content || 'Default content';
  fs.writeFile('output.txt', content, (err) => {
    if (err) return res.status(500).send('Error writing to file');
    res.send('File written successfully!');
  });
});

app.get('/read', (req, res) => {
  fs.readFile('output.txt', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Hurray!! You got Error reading file');
    res.send(`File Content: ${data}`);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
