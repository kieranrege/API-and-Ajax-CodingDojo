$(document).ready(function(){
    for (var i=1; i<=10; i++){
        $('body').append('<img src="http://pokeapi.co/api/v2/pokemon/'+i+'/">');
    }
})