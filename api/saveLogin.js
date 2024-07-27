// const fs = require('fs');
// const path = require('path');

// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     const { username, password } = req.body;

//     // Path to save the login credentials
//     const filePath = path.join('/tmp', 'logins.txt');
    
//     // Save credentials to logins.txt
//     const logins = `Username: ${username}, Password: ${password}\n`;
//     fs.appendFile(filePath, logins, (err) => {
//       if (err) {
//         res.status(500).json({ success: false, message: 'Failed to save login credentials' });
//       } else {
//         res.status(200).json({ success: true, message: 'Login information saved!' });
//       }
//     });
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }
async function saveLogin(username, password) {
  try {
      const response = await fetch('/api/saveLogin', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
      });

      // Ensure the response is in JSON format
      const data = await response.json();
      if (data.success) {
          console.log('Login information saved!');
      } else {
          console.log('Failed to save login information:', data.message);
      }
  } catch (error) {
      console.error('Error:', error);
  }
}

// Example usage
saveLogin('testuser', 'testpass');
