function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        // BOM DIA!
        img.style.backgroundImage ="url(https://images.pexels.com/photos/209788/pexels-photo-209788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)";
        document.body.style.background = "#eb8b25";
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.style.backgroundImage = "url(https://images.pexels.com/photos/69224/pexels-photo-69224.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)";
        document.body.style.background = "#b0b6b4";
    } else {
        //BOA NOITE!
        img.style.backgroundImage = "url(https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)";
        document.body.style.background = "#173948";
    }
}

