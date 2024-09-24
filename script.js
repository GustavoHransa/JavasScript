var itemCardSac = document.querySelector(".card-sac");
var BtnCardSac = itemCardSac.querySelector("button");
var contadorClick=0;

BtnCardSac.addEventListener('click',function(){
    contadorClick++;
    itemCardSac.classList.add('ativo');
    if(contadorClick > 1){
        itemCardSac.classList.remove('ativo');
        contadorClick =0;

    }
});
console.log(BtnCardSac);