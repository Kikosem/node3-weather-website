const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5bacaa2a877e5e60e3da5c41fb2cd6e5&query=' + latitude + ',' + longitude +'&units=f'
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined);
        }else{
            callback(undefined, body.current.weather_descriptions + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out")
            }
    })
}





module.exports = forecast