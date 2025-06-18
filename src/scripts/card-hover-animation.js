function listenerCards(){
    const cardElements = document.querySelectorAll('.s-card');
    cardElements.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.classList.add('s-card--hovered');
            document.body.id = `${card.id}-hovered`;
        });

        card.addEventListener('mouseout', () => {
            card.classList.remove('s-card--hovered');
            document.body.id = ``;
        });
    })  
}


// Chama a função quando a página é carregada
document.addEventListener('DOMContentLoaded', listenerCards);