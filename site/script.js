function abrirModal(element) {
    const title = element.dataset.title;
    const description = element.dataset.description;

    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;

    document.querySelector('.telaSobreposta').style.display = 'flex';
}

function fecharModal() {
    document.querySelector('.telaSobreposta').style.display = 'none';
}

