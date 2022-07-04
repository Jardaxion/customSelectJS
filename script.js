//Function for on or off visible options
function OnOffselect(classSelect, classOption){
    document.querySelector(classSelect).classList.toggle('active');
    document.querySelector(classOption).classList.toggle('active');
}

//Function for replace text from options to headline select
function replace(classSelect, classOption, classOptions){
    let select = document.querySelector(classSelect+' p:first-of-type');
    let option = document.querySelector('.'+classOption);
    select.innerHTML = option.innerHTML;
    OnOffselect(classSelect, classOptions);
}

//Function fro first replace text from options to headline select
function firstReplace(classSelect, classOption){
    let select = document.querySelector(classSelect+' p:first-of-type')
    let option = document.querySelector(classOption)
    select.innerHTML = option.innerHTML
}
let i = 100;
document.querySelectorAll('.select_body').forEach(function(el){
    let selectBody = '#'+el.getAttribute('id')
    firstReplace(selectBody+' .select', selectBody+' .options .option0')

    document.querySelector(selectBody + ' .select').addEventListener('click', function(){
        OnOffselect(selectBody + ' .select', selectBody + ' .options')//Aplying on or off function
    })
  
    document.querySelector(selectBody + ' .options').style.zIndex = i;

    document.querySelectorAll(selectBody + ' .options .option').forEach(function(option){
        option.addEventListener('click', function(){
            replace(selectBody + ' .select', this.getAttribute('class').replace('option ', ''), selectBody + ' .options') //Aplying replace function
            document.querySelector(selectBody + ' select').selectedIndex = this.getAttribute('class').replace('option ', '').replace(/[^\d]/g, '') //We look at which element we have selected and select the same element in the usual select
        })
    })
    i--;
})