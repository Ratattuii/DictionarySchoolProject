var palavras = [{
    "tituloPt": "maçã",
    "significadoPt": "lorem ipsum",
    "tituloEn": "apple",
    "significadoEn": "lorem ipsa"
},
{
    "tituloPt": "carro",
    "significadoPt": "",
    "tituloEn": "car",
    "significadoEn": ""
}
];

let cartoes;

let criarCartao = (palavra) => {

    let cartao = document.createElement('div');
    cartao.className = 'card shadow cursor-pointer p-10';

    let cartaoBody = document.createElement('div');
    cartaoBody.className = 'card-body';

    let titulo = document.createElement('h5');
    titulo.innerText = palavra.tituloPt;
    titulo.className = 'card-title';

    cartaoBody.appendChild(titulo);
    cartao.appendChild(cartaoBody);
    cartoes.appendChild(cartao);
    cartao.addEventListener("click", () => mostrarModal(palavra));
}

let mostrarModal = (palavra) => {
    if (palavra) {
        let modalContainer = document.getElementById('modal-container');
        if (!modalContainer) {
            modalContainer = document.createElement('div');
            modalContainer.id = 'modal-container';
            document.body.appendChild(modalContainer);
        }

        modalContainer.innerHTML = '';

        let modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.setAttribute('tabindex', '-1');
        modal.setAttribute('aria-labelledby', 'exampleModalLabel');
        modal.setAttribute('aria-hidden', 'true');

        let modalDialog = document.createElement('div');
        modalDialog.className = 'modal-dialog modal-dialog-centered';

        let modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        let headerPt = document.createElement('h1');
        headerPt.innerText = palavra.tituloPt;
        headerPt.className = 'modal-title fs-5 ps-2 pt-2';

        let bodyPt = document.createElement('h6');
        bodyPt.innerText = palavra.significadoPt;
        bodyPt.className = 'modal-body';

        let headerEn = document.createElement('h1');
        headerEn.innerText = palavra.tituloEn;
        headerEn.className = 'modal-title fs-5 ps-2';

        let bodyEn = document.createElement('h6');
        bodyEn.innerText = palavra.significadoEn;
        bodyEn.className = 'modal-body';

        let modalFooter = document.createElement('div');
        modalFooter.className = 'modal-footer';

        let botaoSair = document.createElement('button');
        botaoSair.type = 'button';
        botaoSair.className = 'btn btn-secondary';
        botaoSair.setAttribute('data-bs-dismiss', 'modal');
        botaoSair.innerText = 'Sair';
        modalFooter.appendChild(botaoSair);

        
        modalContent.appendChild(headerPt);
        modalContent.appendChild(bodyPt);
        
        modalContent.appendChild(headerEn);
        modalContent.appendChild(bodyEn);
        modalContent.appendChild(modalFooter);
        
        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);

        modalContainer.appendChild(modal);

    
        let modalBootstrap = new bootstrap.Modal(modal);
        modalBootstrap.show();
    }
};


let iniciar = () => {
    if (cartoes) {
        document.getElementById('cartoes-container').replaceWith(cartoes);
        return;
    }

    cartoes = document.getElementById('cartoes-container');
    palavras.forEach((palavra) => {
        criarCartao(palavra);
    });
};

iniciar();