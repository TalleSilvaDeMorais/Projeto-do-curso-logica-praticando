function adicionar(){
    //recuperar valores, nome do produto, quantidade e valor
    //calcular o preco do, o subTotal 
    //adicionar no carrinho
    //atualizar o valor total


    //recuperar valores, nome do produto, quantidade e valor
    let product = document.getElementById(`produto`).value;
    let name = product.split('-')[0];
    let value = product.split('R$')['1'];
    let qtd = document.getElementById('quantidade');

    let soma = qtd.value * value;
    console.log(soma);


}

function limpar(){
    //limpar qtd, nome, preco


}