$(document).ready(function(){
    for (var i=1; i<=151; i++){
        $('#pokemon').append('<img src="http://pokeapi.co/api/v2/pokemon/'+i+'/">');
    }
    $(document).on("click", "img", function(){
        var id=this.id;
        $get("http://pokeapi.co/api/v2/pokemon/"+id, function(res){
            var string="";
            sring+='<div id="img"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'${id}'.png" id='${id}'></div>';
            string+='<h4>Name: ' + res['name'] + '</h4>';
            string+='<h4>Height:</h4>';
            string+=res['height'];
            string+='<h4>Weight:</h4>';
            string+=res['weight'];
            string+='<h4>Types:</h4>';
            string+='<ul>';
            for (var i=0; i<res['types'].length; i++){
                string+='<li>'+res['types'][i]['name']+'</li>';
            }
            string+='</ul>';
            $('#pokedex').html(string);
            $('html, body').animate({scrollTop: 0}, 600);
        });
    })
});