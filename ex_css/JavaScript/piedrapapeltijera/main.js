function jugar(usuario1, usuario2){
    
    let opciones = ['🪨', '📋', '✂️'];
    window.prompt(Elige)

    if(usuario1 == usuario2){
        console.log('empate')
    } else if(
        (usuario1 == '✂️' && usuario2 == '📋') ||
        (usuario1 == '📋' && usuario2 == '🪨') ||
        (usuario1 == '🪨' && usuario2 == '✂️')
    ){
        console.log('Ha ganado usuario 1!!!')
    } else{
        console.log('Ha ganado usuario 2!!!')
    }
    
}
