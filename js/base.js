const form = document.getElementById("contato-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    form.reset();
    status.textContent = "Email enviado com sucesso!";
    status.style.color = "green";

    setTimeout(() => {
        status.textContent = "";
    }, 3000);
});