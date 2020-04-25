$(document).ready(function(){
    console.log('Loaded');
    // $('#request1').click(function(){getWeather()});
    $('#request2').click(function(){secondWeather()});
    
    
});


// Get your location and weather
// function getWeather(){
//     var getIP = 'http://ip-api.com/json/';
//     var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
//     $.getJSON(getIP).done(function(location) {
//         $.getJSON(openWeatherMap, {
//             lat: location.lat,
//             lon: location.lon,
//             units: 'metric',
//             APPID: 'f0c85a8c7a8cf2de24a5653f555cd7e4'
//         }).done(function(result) {
//             console.log(result)
            
//             $("#weather-icon").attr("href",'http://openweathermap.org/img/wn/' + result.weather[0].icon + '@2x.png');
//             $('#icon1').attr('src', 'http://openweathermap.org/img/wn/' + result.weather[0].icon + '@2x.png');
//             $('#here6').html(JSON.stringify(result));
//             $('#temp').html('Temperature ' + result.main.temp + 'C');
//             $('#humid').html('Humidity ' + result.main.humidity + '%');
//             $('#name').html('City ' + result.name );
//             $('#clouds').html('Clouds ' + result.clouds.all + '%' );
//             $('#pres').html('Pressure ' + result.main.pressure + 'hPa' );
            
//             var date = new Date(result.sys.sunrise * 1000);
//             $('#sun').html('Sunrise ' + date.getHours() + ' hours ' + date.getMinutes()  + ' minut');
//             var date = new Date(result.sys.sunset * 1000);
//             $('#sunset').html('Sunset ' + date.getHours() + ' hours ' + date.getMinutes()  + ' minut');
//             $('#speed').html('Wind speed ' + (result.wind.speed * 18 / 5).toFixed(2) + ' km/hr' );
//             $('#deg').html('Wind direction ' + result.wind.deg + ' degrees &#8594' ).css('transform','rotate(' + (result.wind.deg - 90) + 'deg)');

//         })
//     })

// }

function secondWeather(){
    var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
    if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(function(position) {
            $.getJSON(openWeatherMap, {
                lat: position.coords.latitude,
                lon: position.coords.longitude,
                units: 'metric',
                APPID: 'f0c85a8c7a8cf2de24a5653f555cd7e4'
            }).done(function(result) {
                console.log(result);
                $("#weather-icon").attr("href",'http://openweathermap.org/img/wn/' + result.weather[0].icon + '@2x.png');
                $('#icon1').attr('src', 'http://openweathermap.org/img/wn/' + result.weather[0].icon + '@2x.png');
                $('#here6').html(JSON.stringify(result));
                $('#temp').html('Temperature ' + result.main.temp + 'C');
                $('#humid').html('Humidity ' + result.main.humidity + '%');
                $('#name').html('City ' + result.name );
                $('#clouds').html('Clouds ' + result.clouds.all + '%' );
                $('#pres').html('Pressure ' + result.main.pressure + 'hPa' );
                
                var date = new Date(result.sys.sunrise * 1000);
                $('#sun').html('Sunrise ' + date.getHours() + ' hours ' + date.getMinutes()  + ' minut');
                var date = new Date(result.sys.sunset * 1000);
                $('#sunset').html('Sunset ' + date.getHours() + ' hours ' + date.getMinutes()  + ' minut');
                $('#speed').html('Wind speed ' + (result.wind.speed * 18 / 5).toFixed(2) + ' km/hr' );
                $('#deg').html('Wind direction ' + result.wind.deg + ' degrees &#8594' ).css('transform','rotate(' + (result.wind.deg - 90) + 'deg)');
            })
        })
    }
}