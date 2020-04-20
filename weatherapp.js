$('#zipcode').on('click', function(){
    var date = moment.utc().format(' YYYY-MM-DD hh:mm:ss');
    var stillUtc = moment.utc(date).toDate();
    var local = moment(stillUtc).local().format(' YYYY-MM-DD hh:mm:ss');

    let zipcode = $('#searchbox').val();
    $.get('https://api.openweathermap.org/data/2.5/weather?zip=' +zipcode + '&appid=28802535343b2c4cb27043e536734e4c',function(response){
        $('#searchbox').empty;
        let weatherDetails = {
            name: response.name,
            weather: response.weather[0].description,
            temp: Math.floor((response.main.temp - 273.15) * (9/5) + 32),
            // convertedTempToFahrenheit: Math.floor((temp - 273.15) * (9/5) + 32)
        };
        console.log(local)
        console.log(weatherDetails);
        $('#output1').append(weatherDetails.name + local)
        $('#output2').append(weatherDetails.weather)
        $('#output3').append(weatherDetails.temp)
    }
    )})
    
