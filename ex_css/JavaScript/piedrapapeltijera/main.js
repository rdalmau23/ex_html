function jugar() {
    const opciones = ['🪨', '📋', '✂️'];
    
    let usuario1 = window.prompt("Turno Usuario 1:");
    let usuario2 = window.prompt("Turno Usuario 2:");

    if (!opciones.includes(usuario1) || !opciones.includes(usuario2)) {
        console.log('Elección inválida. Inténtalo de nuevo.');
        return;
    }

    if (usuario1 === usuario2) {
        console.log('Empate');
    } else if (
        (usuario1 === '✂️' && usuario2 === '📋') ||
        (usuario1 === '📋' && usuario2 === '🪨') ||
        (usuario1 === '🪨' && usuario2 === '✂️')
    ) {
        console.log('Ha ganado Usuario 1!!!');
    } else {
        console.log('Ha ganado Usuario 2!!!');
    }
}

jugar();
