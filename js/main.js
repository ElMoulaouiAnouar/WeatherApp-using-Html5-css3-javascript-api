let weather = {
        //sign up to site openweathermap.org and get apikey 
            'apiKey': 'Your Key',
            fetchWeather:function(city,status){
                fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+this.apiKey
                ).then((response)=>response.json()).then((data)=>this.displayweather(data));
            },
            displayweather:function(data){
                const {name} = data;
                const {description,icon} = data.weather[0];
                const {temp,humidity} = data.main;
                const {speed,deg} = data.wind;
                //console.log(name,description,icon,temp,humidity,speed,deg);
                document.querySelector('.city_name').innerHTML = name;
                document.querySelector('.description').innerHTML = description;
                document.querySelector('.humidity').innerHTML = humidity;
                document.querySelector('.wind').innerHTML = speed;
                document.querySelector('.deg').innerHTML = Math.round(temp-273.15);
                document.querySelector('img').src = 'https://openweathermap.org/img/wn/'+icon+'.png';
            },
            search:function(){
                this.fetchWeather(document.querySelector('input').value);
            }
        }

        document.querySelector('button').addEventListener('click',function(){
            weather.search();
        });

        document.querySelector('input').addEventListener('keyup',function(e){
            if(e.key == 'Enter'){
                weather.search();
            }
        });
    

            weather.fetchWeather('Marrakesh, MA');