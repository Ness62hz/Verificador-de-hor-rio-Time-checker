function carregar(){
    var hora = new Date()
    var hr = hora.getHours()
    var res = window.document.getElementById('res')
    var foto = window.document.getElementById('foto')

    if (hr > 0 && hr < 12){
        res.innerHTML = `Agora são ${hr}:${hora.getMinutes()} da manhã`
        foto.src = 'manha.png'
        document.body.style.background = '#384e53'
    } else if (hr > 12 && hr < 18){
        res.innerHTML = `Agora são ${hr}:${hora.getMinutes()} da tarde`
        foto.src = 'tarde.png'
        document.body.style.background = '#ffc971'
    } else if (hr > 18){
        res.innerHTML = `Agora são ${hr}:${hora.getMinutes()} da noite`
        foto.src = 'noite.png'
        document.body.style.background = '#898178'
    }
}
