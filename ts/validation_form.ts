document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector('form[action="/contact/add"]') as HTMLFormElement;
    const paymentForm = document.querySelector('form[action="/payment/add"]') as HTMLFormElement;

    contactForm.addEventListener("submit", (event) => {
        const email = contactForm.querySelector('input[name="email"]') as HTMLInputElement;
        const name = contactForm.querySelector('input[name="name"]') as HTMLInputElement;
        const comment = contactForm.querySelector('textarea[name="comment"]') as HTMLTextAreaElement;

        if (!email.value.includes("@")) {
            alert("Por favor, ingrese un correo electrónico válido.");
            event.preventDefault();
        }

        if (name.value.trim().length === 0) {
            alert("El campo de nombres no puede estar vacío.");
            event.preventDefault();
        }

        if (comment.value.trim().length === 0) {
            alert("El campo de comentario no puede estar vacío.");
            event.preventDefault();
        }
    });

    paymentForm.addEventListener("submit", (event) => {
        const email = paymentForm.querySelector('input[name="email"]') as HTMLInputElement;
        const cardHolderName = paymentForm.querySelector('input[name="card_holder_name"]') as HTMLInputElement;
        const cardNumber = paymentForm.querySelector('input[name="card_number"]') as HTMLInputElement;
        const expirationMonth = paymentForm.querySelector('input[name="expiration_month"]') as HTMLInputElement;
        const expirationYear = paymentForm.querySelector('input[name="expiration_year"]') as HTMLInputElement;
        const cvv = paymentForm.querySelector('input[name="cvv"]') as HTMLInputElement;
        const amount = paymentForm.querySelector('input[name="amount"]') as HTMLInputElement;
        const currency = paymentForm.querySelector('input[name="currency"]') as HTMLInputElement;

        if (!email.value.includes("@")) {
            alert("Por favor, ingrese un correo electrónico válido.");
            event.preventDefault();
        }

        if (cardHolderName.value.trim().length === 0) {
            alert("El campo de titular de la tarjeta no puede estar vacío.");
            event.preventDefault();
        }

        if (!/^\d{16}$/.test(cardNumber.value)) {
            alert("El número de tarjeta debe contener 16 dígitos.");
            event.preventDefault();
        }

        if (!/^\d{1,2}$/.test(expirationMonth.value) || +expirationMonth.value < 1 || +expirationMonth.value > 12) {
            alert("Por favor, ingrese un mes de expiración válido (1-12).");
            event.preventDefault();
        }

        if (!/^\d{4}$/.test(expirationYear.value) || +expirationYear.value < new Date().getFullYear()) {
            alert("Por favor, ingrese un año de expiración válido.");
            event.preventDefault();
        }

        if (!/^\d{3,4}$/.test(cvv.value)) {
            alert("El código de seguridad (CVV) debe contener 3 o 4 dígitos.");
            event.preventDefault();
        }

        if (+amount.value <= 0) {
            alert("El monto a pagar debe ser mayor a 0.");
            event.preventDefault();
        }

        if (currency.value.trim().length === 0) {
            alert("El campo de moneda no puede estar vacío.");
            event.preventDefault();
        }
    });
});