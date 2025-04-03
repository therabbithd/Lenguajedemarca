const prophilepic = document.getElementById('prophile');
prophilepic.addEventListener('mouseover',() => {
    prophilepic.style.border = '2px solid #000';
});
prophilepic.addEventListener('mouseout',() => {
    prophilepic.style.border = 'none';
});
const botoncol =  document.getElementById('col')
const nom = document.getElementById('fullname')
botoncol.addEventListener('click',function(){
    nom.style.color = "blue"
    debugger;
    nom.style.backgroundColor= "yellow"
    nom.innerHTML="<b>rojo</b>"
});
const botoncol2 = document.getElementById('col2')
botoncol2.addEventListener('click',function(){
    nom.style.color ="red"
    nom.style.backgroundColor="blue"
    nom.textContent="Guillermo Diañez Gomez"
});
const otr = document.getElementById('otro')
otr.addEventListener('click',function(){
    if(nom.style.color==''){
        nom.style.color="yellow"
    }
})

