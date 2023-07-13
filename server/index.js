const express = require('express');
const app = express();
//json
app.use(express.json());
//bcrypt
const bcrypt = require('bcrypt');
var cors = require('cors');
app.use(cors());
const port = 4000;
const users = []


app.get('/users',(req,res)=>{
    res.json(users)
})

app.post('/users',(req,res)=>{
    try{
        const salt = bcrypt.genSaltSync();
        const hashedpassword = bcrypt.hashSync(req.body.password, salt);
        const user = {
            name : req.body.name,
            password: hashedpassword
        }
        users.push(user)
        res.status(201).send()
    }
    catch{
        res.status(500).send()
    }
})

app.post('/users/login',async (req,res)=>{
    const user = users.find(user => user.name === req.body.name)
    if(user == null){
        return res.status(400).send('Cannot find user')
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password)){
            res.send('Success')
        }
        else{
            res.send('Not Allowed')
        }
    }
    catch{
        res.status(500).send()
    }
})

// app.post('/users/login', async (req, res) => {
//     const user = users.find(user => user.name === req.body.name)
//     if (user == null) {
//       return res.status(400).send('Cannot find user')
//     }
//     try {
//       if(await bcrypt.compare(req.body.password, user.password)) {
//         res.send('Success')
//       } else {
//         res.send('Not Allowed')
//       }
//     } catch {
//       res.status(500).send()
//     }
//   })

 app.listen(port, () => console.log(`Example app listening on port ${port}!`));
