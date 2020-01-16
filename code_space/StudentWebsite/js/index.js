$(document).ready(function() {    
    var apiKey = "d9ae584606cf9392c90f4fd42505b9bd" // API Key        
    $.each(state_info, function (key, data) {
        var url =`https://api.darksky.net/forecast/${apiKey}/${data.lat},${data.lng}`;
        $.ajax({url:url, dataType:"jsonp"}).then(function(data) {

            var temperature = data.currently.temperature

            // Default color gray
            $('#'+ key).css('fill', "#808080");
            // Less than equal to 10
            if (temperature <= 10) {$('#'+ key).css('fill', "#6495ED");}
            // Between 11 and 20
            else if (temperature > 10 && temperature <= 20) {$('#'+ key).css('fill', "#7FFFD4");}
            // Between 21 and 30
            else if (temperature > 20 && temperature <= 30) {$('#'+ key).css('fill', "#0000FF");}
            // Between 31 and 40 
            else if (temperature > 30 && temperature <= 40) {$('#'+ key).css('fill', "#008B8B");}
            // Between 41 and 50
            else if (temperature > 40 && temperature <= 50) {$('#'+ key).css('fill', "#00BFFF");}
            // Between 51 and 60
            else if (temperature > 50 && temperature <= 60) {$('#'+ key).css('fill', "#F08080");}
            // Between 61 and 70
            else if (temperature > 60 && temperature <= 70) {$('#'+ key).css('fill', "#CD5C5C");}
            // Between 71 and 80
            else if (temperature > 70 && temperature <= 80) {$('#'+ key).css('fill', "#8B0000");}
            // Between 81 and 90
            else if (temperature > 80 && temperature <= 90) {$('#'+ key).css('fill', "#B22222");}
            // Above 90
            else if (temperature > 90) {$('#'+ key).css('fill', "#FF0000");}
            });
        });
    })
    

