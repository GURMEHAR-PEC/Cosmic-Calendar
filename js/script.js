let p = fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/30.7%2C76.7?unitGroup=metric&key=ENTERYOURAPIKEY&contentType=json")

p.then((response) => {
        return response.json()
}).then((value2) => {
        let x=value2.days[0].dew
        console.log(x)
        console.log(value2)
})