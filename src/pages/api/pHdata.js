export default function handler(req, res) {
    if (req.method === 'POST') {
      // Process the pH data received from the request body
      const { pHValue } = req.body;
      
      // Store the pH data or perform any necessary operations
  
      // Respond with a success message
      res.status(200).json({ message: 'pH data received successfully' });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  