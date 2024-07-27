// const express = require('express');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.json()); // Parse JSON request bodies

// app.post('/api/saveLogin', (req, res) => {
//     const { username, password } = req.body;

//     // Validate input
//     if (!username || !password) {
//         return res.status(400).json({ success: false, message: 'Username and password are required' });
//     }

//     // Save the login information to a file
//     const loginData = `Username: ${username}, Password: ${password}\n`;
//     fs.appendFile(path.join(__dirname, 'logins.txt'), loginData, (err) => {
//         if (err) {
//             return res.status(500).json({ success: false, message: 'An error occurred while saving the data' });
//         }
//         res.status(200).json({ success: true, message: 'Login information saved!' });
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
// });
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    fs.readFile(path.join(__dirname, 'data.txt'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

