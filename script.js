function carregar(){ 
var tl= window.document.getElementById('titulo')
var msg= window.document.getElementById('msg')
var img= window.document.getElementById('imagem')
var data= new Date()
var hora= data.getHours()
msg.innerHTML=`Agora são ${hora} horas!`
if(hora>= 0 && hora< 12){//BOM DIA!
    img.src='fotomanhã.jpg'
    tl.style.color='#8d6745'
    document.body.style.background='#efe4de'
} else if (hora>= 12 && hora< 18){//BOA TARDE!
    img.src='fototarde.jpg'
    document.body.style.background='#a1521f'
    tl.style.color='#55230c'
} else {//BOA NOTIE!
    img.src='fotonoite.jpg'
    document.body.style.background='#0c2140'
    tl.style.color='#1556b3'
}
}
