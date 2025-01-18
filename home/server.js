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
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



