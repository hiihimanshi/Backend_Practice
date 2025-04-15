// implement Basic REST API with Express
import express from "express";
const app = express();
const PORT = 3000;
app.use(express.json());

// making a database
let users = [
    {id: 1, name: "John", age: 19},
    {id: 2, name: "Rose", age: 21}
];

// to get the data of users
app.get('/api/users',(req,res) => {
    res.json(users);
});

// get user by name
app.get('/api/users/:name',(req,res) => {
    const name  = req.params.name;
    const user = users.find(user=>user.name===name);
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    res.json(user);
});

// get user by id
app.get('/api/users/id/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (!user) {
      return res.status(404).json({ message: 'user not found' });
    }
    res.json(user);
});

// post/adding  a new user
app.post('/api/users',(req,res) => {
    const {name,age} = req.body;
    console.log("Received user:", req.body);
    if(!name || !age){
        return res.status(400).json({message:"Name & age are required"});
    }
    const newUser = {
        id: users.length+1,
        name,
        age
    }
    users.push(newUser);
    res.status(201).json(newUser);
    
});

// to delete a user
app.delete('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }
    const deletedUser = users.splice(userIndex, 1);
    res.json({ message: "User deleted", user: deletedUser[0] });
});

// to update users
app.put('/api/users/:id', (req,res) =>{
    const id = parseInt(req.params.id);
    const { name, age } = req.body;
    const user = users.find(user => user.id === id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    if(name) user.name = name;
    if(age) user.age = age;
    res.json({message: "user Updated",user});
});

app.listen(PORT, () =>{
    console.log(`server is running on http://localhost:${PORT}`)
});
