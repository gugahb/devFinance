const Modal = {
    open() {
        // Abrir moral
        // Adicionar a clase active ao modal
        document.querySelector('.modal-overlay')
        .classList.add('active')
    },
    close() {
        //Fechar o modal
        //remover a class active do modal
        document.querySelector('.modal-overlay')
        .classList.remove('active')
    }
}

/* treinando

function DoubleClick() {
    var Modal = document.querySelector('.modal-overlay');
    if (Modal.style.display === "none") {
        Modal.style.display = "active";
    }else {
        Modal.style.display = "none"
    }
}*/

