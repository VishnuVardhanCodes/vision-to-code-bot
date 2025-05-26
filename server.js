const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Home Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// About Route
app.get('/about', (req, res) => {
    res.send('<h1>This is the About Page</h1>');
});

// ✅ API Route
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
