const express =require('express');
const app =express();

app.use(express.json());

let users =[
    { id: 1, name:'mark', email:'mark@gamil.com' },
    { id: 1, name:'grace', email:'grace@gamil.com' }
];
//get user by id
express.application.get('api/user/:id',(req, res) => {
    const user =users.find((u) => u.id === parseInt(req.params.id));

if (!user){
    return res.satus(404).json({
        massage:'user not found'
    });
}
res.json(user)
});
app.listen(3000,()=>{
    console.log('server running on port 3000')
});