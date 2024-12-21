const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Check if userId is defined and is a valid integer
  if (!userId || isNaN(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }

  const parsedUserId = parseInt(userId);
  const user = users.find(user => user.id === parsedUserId);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});