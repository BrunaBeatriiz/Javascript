let produtos = [
 {nome: "Mouse", categoria: "Eletrônicos", preco: 50},
 {nome: "Teclado", categoria: "Eletrônicos", preco: 120},
 {nome: "Camiseta", categoria: "Roupas", preco: 40},
 {nome: "Calça", categoria: "Roupas", preco: 80},
 {nome: "Monitor", categoria: "Eletrônicos", preco: 900}
];


let agrupados = {eletronicos: [],
  roupas: [],
};

produtos.forEach((item) => {
  if(item.categoria === "Eletrônicos"){
    agrupados.eletronicos.push(item);
  }else{
    agrupados.roupas.push(item);
  }
})

console.log(agrupados);

let agr = produtos.reduce((acc, item) => {
  if(!acc[item.categoria]){
    acc[item.categoria] = [];
  }

  acc[item.categoria].push(item);
  return acc;
}, {});

console.log("Reduce: ", agr);