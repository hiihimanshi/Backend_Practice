import express from 'express';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
const app = express();
const PORT = 3000;
const SECRET = 'myjwtsecret'; 
app.use(bodyParser.json());

const users = [
    // {username: 'Alice',  password:1234},
    // {username: 'Bob', password:5678}
];

app.post('/register',(req,res)=>{
    const{username,password}= req.body;
    const userExist = users.find(u=>u.username===username && u.password===password)
    if (userExist) return res.status(400).json({ message: 'User already exists' });
    users.push({username,password})
    res.status(201).json({message:'user registered successfully'})
})
app.post('/login',(req,res)=>{
    const{username,password}= req.body;
    const user = users.find(u=>u.username===username && u.password===password)
    if(!user) return res.status(401).json({message:'Invalid Credentials'});
    // create token
    const token = jwt.sign({username,password},SECRET,{expiresIn:'2h'})
    res.json({token})
})

function auth(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split('')[1];//bearer token
    if(!token) return res.status(401).json({message:'no token sent'})
    jwt.verify(token,SECRET,(error,user)=>{
        if(error) return res.status(403).json({message:'invalid/epired token'})
            req.user=user;
            next()
   })
}

app.get('/dashboard', auth, (req,res)=>{
    res.json({message:`hey! ${req.user.username}`, secretData:'20'})
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});