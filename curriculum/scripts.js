document.getElementById('form-contato').addEventListener('submit', function(event) {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        event.preventDefault();
    }
});

function openModal(image) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("imgModal");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}