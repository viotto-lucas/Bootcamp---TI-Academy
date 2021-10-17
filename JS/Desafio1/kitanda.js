window.onload = function () {
    let frutas = [
        {
            fruta: "Banana",
            preco: 3.5 
        },
        {
            fruta: "Morango",
            preco: 5.5
        },
        {
            fruta: "Abacaxi",
            preco: 12
        },
        {
            fruta: "Melancia",
            preco: 13.5
        },
        {
            fruta: "Kiwi",
            preco: 18
        },
    ]

    const produtos = document.querySelector("#produtos");//<ul>

    (() => {
        for (let frt of frutas) {
            const listLi = document.createElement('li');

            produtos.appendChild(listLi).textContent = `${frt['fruta']}`;
            //produtos.appendChild(listLi).textContent = `${frt.fruta}`;
            produtos.appendChild(listLi).setAttribute('data-preco', `${frt['preco']}`)
            //produtos.appendChild(listLi).setAttribute('data-preco', `${frt.preco}`)
        }
    })()

    const addFruta = document.querySelectorAll('#produtos');
    const cestaDoCliente = document.querySelector('#cestaDoCliente');
    const mostraTotalCompra = document.querySelector('#mostraTotalCompra');
    mostraTotalCompra.value = "0";

    addFruta.forEach(function (list) {
        list.addEventListener('click', function (elemento) {

            const cestasJaAdicionadas = document.querySelectorAll("#cestaDoCliente > li");
            let jaSelecionado = false;
            for (let cesta of cestasJaAdicionadas) {
                if (cesta.innerText == elemento.target.innerText) {
                    jaSelecionado = true
                }
            }

            if (!jaSelecionado) {
                let listLiCliente = document.createElement('li');

                cestaDoCliente.appendChild(listLiCliente).textContent = `${elemento.target.innerText}`;
                cestaDoCliente.appendChild(listLiCliente).setAttribute('data-preco', `${elemento.target.getAttribute('data-preco')}`)

                function calculo(idProduto, resultado) {
                    const cestas = document.querySelectorAll(`#${idProduto} > li`);
                    let subTotal = 0;

                    for (let cesta of cestas) {
                        subTotal += Number(cesta.getAttribute('data-preco'));
                    }

                    const total = document.querySelector(`#${resultado}`);
                    total.value = subTotal;
                }

                calculo('cestaDoCliente', 'mostraTotalCompra')
            } else {
                alert('Este item já foi adicionado na sua cesta')
            }
        })
    })

}