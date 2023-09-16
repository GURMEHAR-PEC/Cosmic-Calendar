function myfunction() {
    var checkbox = document.getElementById("location");
    checkbox.addEventListener("click", ()=>{
        const successCallback = (position) => {
            // Extract latitude and longitude from the position object
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
        
            console.log("Latitude: " + latitude);
            console.log("Longitude: " + longitude);
        
        
        
        };
        
        const errorCallback = (error) => {
            console.log(error);
        };
        
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    });
    

}

