// const express = require('express');
// const app = express();

//* hello world api*
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.listen(3000, () => console.log('Server running on port 3000'));

//* get api to return users *
// const users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' }
// ];
// app.get('/users',(req,res) =>{
//     res.json(users)
// });
// app.listen(3000);

// *Basic POST API to Add a User*
// const express = require('express');
// const app = express();
// app.use(express.json()); 

// let users = []
// app.post('/users',(req,res) =>{
//     const user = req.body;
//     users.push(user)
//     res.status(201).send('User added');
// });
// app.listen(3000);

// get user by id
const express = require('express');
const app = express();
app.use(express.json()); 

const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
];
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
});
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    res.send('User deleted');
});
app.listen(3000);

  