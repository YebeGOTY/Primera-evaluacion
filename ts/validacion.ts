document.getElementById('solicitarVisitaBtn')?.addEventListener('click', (event: Event) => {
    const confirmation = confirm('¿Está seguro de que desea solicitar una visita?');
    if (!confirmation) {
        event.preventDefault();
    }
});

const externalLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="http"]');
externalLinks.forEach(link => {
    link.addEventListener('click', (event: Event) => {
        const confirmation = confirm('Está a punto de salir del sitio web. ¿Desea continuar?');
        if (!confirmation) {
            event.preventDefault();
        }
    });
});