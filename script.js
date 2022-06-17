//Function for on or off visible options
function OnOffselect(idSelect, idOption){
    $(idSelect).toggleClass('active');
    $(idOption).toggleClass('active');
}

//Function for replace text from options to headline select
function replace(idSelect, idOption, idOptions){
    let select = document.querySelector(idSelect+' p:first-of-type')
    let option = document.querySelector('.'+idOption)
    select.innerHTML = option.innerHTML;
    OnOffselect(idSelect, idOptions);
}

//Function fro first replace text from options to headline select
function firstReplace(idSelect, idOption){
    let select = document.querySelector(idSelect+' p:first-of-type')
    let option = document.querySelector(idOption)
    select.innerHTML = option.innerHTML;
}

$('.select_body').each(function(){
    let selectBody = '#'+$(this).attr('id') //We write down Id select (It is necessary to distinguish them from each other)
    firstReplace(selectBody+' .select', selectBody+' .options .option0')//Aplying frist replace function

    $(selectBody + ' .select').click(function(){ //Set click on header custom select
        OnOffselect(selectBody + ' .select', selectBody + ' .options')//Aplying on or off function
    })

    $(selectBody + ' .options .option').click(function(){ //Set click on option
        replace(selectBody + ' .select', $(this).attr('class').replace('option ', ''), selectBody + ' .options') //Aplying replace function
        $(selectBody + ' select').prop('selectedIndex', this.getAttribute('class').replace('option ', '').replace(/[^\d]/g, '')) //We look at which element we have selected and select the same element in the usual select
    })
})