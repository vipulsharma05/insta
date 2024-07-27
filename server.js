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
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/saveLogin', (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    // Save the login information to a file
    const loginData = `Username: ${username}, Password: ${password}\n`;
    fs.appendFile(path.join(__dirname, 'logins.txt'), loginData, (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'An error occurred while saving the data' });
        }
        res.status(200).json({ success: true, message: 'Login information saved!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

