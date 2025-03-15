// SIMULAÇÃO DE ADIÇÃO DE PRODUTOS Á CESTA DO SITE.
const botoesAdicionar = document.querySelectorAll('.adicionar');
const listaPedido     = document.getElementById('lista-pedido');
const totalElemento   = document.getElementById('total');
let total             = 0;

botoesAdicionar.forEach(botao =>{
    botao.addEventListener('click', ()=>{
        const produto = botao.parentElement;

        const nome = produto.querySelector('h3').textContent;

        const preco = parseFloat(produto.querySelector('.preco').textContent.replace('R$', ''));

        const itemPedido = document.createElement('li');

        itemPedido.textContent = `${nome} = R$ ${preco.toFixed(2)}`;

        listaPedido.appendChild{itemPedido};

        totalElemento.textContent = `total: R$ ${total.toFixed(2)}`;

        total += preco;
    });
});

const botaoFinalizarPedido = document.getElementById('Finalizar-pedido');
botaoFinalizarPedido.addEventListener('click', () =>{
    alert('Pedido realizado com sucesso! (Simulação)');
});