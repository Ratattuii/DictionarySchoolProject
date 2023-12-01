var palavras = [{
    tituloPt: "Tarefa",
    significadoPt: "Qualquer trabalho, manual ou intelectual, que se faz por obrigação ou voluntariamente. (substantivo)",
    tituloEn: "Assignment",
    significadoEn: "A task or piece of work assigned to someone as part of a job or course of study. (noun)",
    audioEn: "assets/music/Assignment.mp3"
},
{
    tituloPt: "Ferver",
    significadoPt: "Produzir ou entrar em estado de ebulição (falando de líquidos). (verbo)",
    tituloEn: "Simmer",
    significadoEn: "Stay just below the boiling point while being heated (water or food). (verb)",
    audioEn: "assets/music/Simmer.mp3"
},
{
    tituloPt: "Desmoronar",
    significadoPt: "Pôr ou vir abaixo, fazer ruir ou ruir; desmantelar(-se). (verbo)",
    tituloEn: "Crumble",
    significadoEn: "Break or fall apart into small fragments, especially over a period of time as part of a process of deterioration. (verb)",
    audioEn: "assets/music/Crumble.mp3"
},
{
    tituloPt: "Desmaiar",
    significadoPt: "Perder os sentidos; desfalecer. (verbo)",
    tituloEn: "Faint",
    significadoEn: "Lose consciousness for a short time because of a temporarily insufficient supply of oxygen to the brain. (verb)",
    audioEn: "assets/music/Faint.mp3"
},
{
    tituloPt: "Luto",
    significadoPt: "Sentimento de tristeza profunda pela morte de alguém. (substantivo)",
    tituloEn: "Mourning",
    significadoEn: "The expression of deep sorrow for someone who has died, typically involving following certain conventions such as wearing black clothes. (noun)",
    audioEn: "assets/music/Mourning.mp3"
},
{
    tituloPt: "Desejo",
    significadoPt: "Aspiração, querer, vontade. (substantivo)",
    tituloEn: "Crave",
    significadoEn: "Feel a powerful desire for (something). (verb)",
    audioEn: "assets/music/Crave.mp3"
},
{
    tituloPt: "Vagar",
    significadoPt: "Andar sem rumo certo, perambular, vaguear. (verbo)",
    tituloEn: "Wander",
    significadoEn: "Walk or move in a leisurely, casual, or aimless way. (verb)",
    audioEn: "assets/music/Wander.mp3"
},
{
    tituloPt: "Cemitério",
    significadoPt: "Espaço, terreno ou recinto em que se enterram e guardam cadáveres humanos. (substantivo)",
    tituloEn: "Graveyard",
    significadoEn: "A burial ground, especially one beside a church. (noun)",
    audioEn: "assets/music/Graveyard.mp3"
},
{
    tituloPt: "Calafrios",
    significadoPt: "Sensação de frio e tremores fortes, às vezes com bater de dentes, que precedem ou acompanham acessos de febre. (substantivo)",
    tituloEn: "Chills",
    significadoEn: "Make (someone) cold. (verb)",
    audioEn: "assets/music/Chills.mp3"
},
{
    tituloPt: "Lustre",
    significadoPt: "Espécie de grande castiçal, com muitos braços e lumes, suspenso do teto; candelabro. (substantivo)",
    tituloEn: "Chandelier",
    significadoEn: "A decorative hanging light with branches for several light bulbs or candles. (noun)",
    audioEn: "assets/music/Chandelier.mp3"
}
];

let cartoes;

let criarCartao = (palavra) => {

    let cartao = document.createElement('div');
    cartao.className = 'card shadow cursor-pointer p-10';

    let cartaoBody = document.createElement('div');
    cartaoBody.className = 'card-body';

    let titulo = document.createElement('h5');
    titulo.innerText = palavra.tituloEn;
    titulo.className = 'card-title';

    cartaoBody.appendChild(titulo);
    cartao.appendChild(cartaoBody);
    cartoes.appendChild(cartao);
    cartao.addEventListener("click", () => mostrarModal(palavra));
}

let mostrarModal = (palavra) => {
    
    if (palavra) {
        let modalContainer = document.getElementById('modal-container');

        modalContainer.innerHTML = '';

        let modalFade = document.createElement('div');
        modalFade.className = 'modal fade';
        modalFade.setAttribute('tabindex', '-1');
        modalFade.setAttribute('aria-labelledby', 'exampleModalLabel');
        modalFade.setAttribute('aria-hidden', 'true');

        let modalDialog = document.createElement('div');
        modalDialog.className = 'modal-dialog modal-dialog-centered';

        let modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        let headerPt = document.createElement('h1');
        headerPt.innerText = palavra.tituloPt;
        headerPt.className = 'modal-title fs-5 ps-2 pt-2';

        let bodyPt = document.createElement('p');
        bodyPt.innerText = palavra.significadoPt;
        bodyPt.className = 'modal-body';

        let headerEn = document.createElement('h1');
        headerEn.innerText = palavra.tituloEn;
        headerEn.className = 'modal-title fs-5 ps-2';

        let bodyEn = document.createElement('p');
        bodyEn.innerText = palavra.significadoEn;
        bodyEn.className = 'modal-body';

        let audio = document.createElement('audio');
        audio.id = 'botaoEn';
        audio.src = palavra.audioEn;
        audio.controls = true;

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
        modalContent.appendChild(audio);
        modalContent.appendChild(modalFooter);
        
        modalDialog.appendChild(modalContent);
        modalFade.appendChild(modalDialog);

        modalContainer.appendChild(modalFade);

        let modal = new bootstrap.Modal(modalFade);
        modal.show()
        console.log(modalContent.innerHTML);
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