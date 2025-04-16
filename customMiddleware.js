import express from "express"
import morgan from "morgan"
const app = express()
const PORT = 3000

// built in middle ware
app.use(express.json())
// Third-party Middleware
app.use(morgan('dev'));
// custom middleware
app.use((req,res,next)=>{
    console.log(`[Custom Logger] ${req.method} - ${req.url}`);
    next();
})
// database
const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob' }
]
// GET all users
app.get('/users', (req, res) => {
    res.json(users);
});
// add a user
app.post('/users',(req,res)=>{
    const newUser = req.body
    if(!newUser.name && !newUser.id){
        throw Error('Name is required');
    }
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
})
// Error-handling Middleware
app.use((err, req, res, next) => {
    console.error(`something went wrong`);
    res.status(500).json({ error: err.message });
  });
// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});