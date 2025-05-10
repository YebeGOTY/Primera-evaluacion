let contactoData = null;
let pagoData = null;

document.addEventListener("DOMContentLoaded", () => {
    const contactoForm = document.forms[0];
    const pagoForm = document.forms[1];

    contactoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(contactoForm);
        contactoData = Object.fromEntries(formData);
        verificarYMostrarFactura();
    });

    pagoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(pagoForm);
        pagoData = Object.fromEntries(formData);
        verificarYMostrarFactura();
    });
});

function verificarYMostrarFactura() {
    if (contactoData && pagoData) {
        const factura = document.getElementById("factura");
        const facturaContent = document.getElementById("factura-content");

        facturaContent.innerHTML = `
            <strong>Nombre:</strong> ${contactoData.name}<br>
            <strong>Correo:</strong> ${contactoData.email}<br>
            <strong>Comentario:</strong> ${contactoData.comment}<br><br>
            <strong>Titular de la tarjeta:</strong> ${pagoData.card_holder_name}<br>
            <strong>Monto:</strong> ${pagoData.amount} ${pagoData.currency}<br>
        `;

        factura.style.display = "block";
    }
}
