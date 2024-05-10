let somaTotal = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = '$0';
function adicionar(){

    //recuperar valores, nome do produto, quantidade e valor
    let product = document.getElementById(`produto`).value;
    let name = product.split('-')[0];
    let value = product.split('R$')['1'];
    let qtd = document.getElementById('quantidade');
    
    //calcular o preco do, o subTotal 
    let soma = qtd.value * value;
    console.log(soma);

    let carrinho = document.getElementById("lista-produtos");
    
    //adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${qtd.value}x</span> ${name} <span class="texto-azul">R$${soma}</span>
  </section>`;
    //atualizar o valor total

    somaTotal = somaTotal + soma;
    let CampoTotal = document.getElementById('valor-total');
    CampoTotal.textContent = `R$ ${somaTotal}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    //limpar qtd, nome, preco
    somaTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = '$0';
}