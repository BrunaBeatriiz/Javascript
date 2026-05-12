const express = require("express");
const cors = require("cors");


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let usuarios = [{
    id:1, nome:"Maria Lima", idade: 21, email: "maria@gmail.com"
},{
    id:2, nome:"Matheus", idade: 22, email: "matheus@gmail.com"
}];


//listar todos os usuários
app.get("/usuarios", (req,res) => {
    res.json(usuarios);
});


//get pelo id do usuario
app.get("/usuarios/:id", (req,res)=>{
    const id = Number(req.params.id);
    const usuario = usuarios.find(u => u.id === id);

    if(!usuario) return res.status(404).json({erro:"Usuário não encontrado"});
    res.json(usuario);
})

//post criar novo usuario
app.post("/usuarios", (req,res) => {
    const novoUsuario = {
        id:Date.now(),
        nome:req.body.nome,
        idade:req.body.idade,
        email:req.body.email
    };
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

//put atualizar usuarios existentes 
app.put("/usuarios/:id", (req,res) => {
    const id = Number(req.params.id);
    const index = usuarios.findIndex(u=> u.id === id);

    if(index === -1) return res.status(404).json({erro:"Usuário não encontrado"});

    usuarios[index] = {...usuarios[index], ...req.body};
    res.json(usuarios[index]);
})

//delete - remover o usuario

app.delete("/usuarios/:id", (req,res) => {
    const id = Number(req.params.id);
    usuarios = usuarios.filter(u => u.id !== id);
    res.status(204).end();
});


app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});