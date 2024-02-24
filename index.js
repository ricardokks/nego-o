
function coisa(){
var nome = document.getElementById('nome').value;
var senha = document.getElementById('senha').value;

nmslv = nome;
snslv = senha;

localStorage.setItem('nome',nmslv)
localStorage.setItem('senha',snslv)

document.getElementById('nome').value = '';
document.getElementById('senha').value = '';

console.log(nmslv)
console.log(snslv)

}

function zeru(){

nom = document.getElementById('nom').value;
senh = document.getElementById('senh').value;

nmslv = localStorage.getItem('nome')
snslv = localStorage.getItem('senha')


if (nom === nmslv && senh === snslv){

console.log('logado')

document.getElementById('nom').value = '';
document.getElementById('senh').value = '';

}else{
    console.log('algo esta errado')
    document.getElementById('nom').value = '';
    document.getElementById('senh').value = '';
}
}

