const express = require('express');

const app = express();

const users = [
  { firstName: 'fnam1', lastName: 'lnam1', userName: 'username1' },
];

app.get('/', (req, res) => res.json(users));

app.get('/:userName', (req, res) => {
  const matchingUser = users.filter(
    (user) => req.params.userName === user.userName,
  );

  return res.json(matchingUser);
});

module.exports = app;
