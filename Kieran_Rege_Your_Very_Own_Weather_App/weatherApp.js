$(document).ready(function(){
    $('form').submit(function(){
        var apikey='662687b7b24bd888107908d02db45278';
        var city=$('input#city').val();
        $get('http://api.openweathermap.org/data/2.5/weather?q'+city+'&units=imperial&appid='+apikey, function(res){
            var string='';
            string+="<p>"+res['name']+": "+res['weather'][0]['description']+"</p>";
            string+="<p>"+"Temperature: "+res['main']['temp']+"</p>";
            $('#results').html(string);
        }, 'jsonp');
        return false;
    })
});