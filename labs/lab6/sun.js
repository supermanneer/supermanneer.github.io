/* 
ITMD 541-04 Graduate Student
            Name : Huan Liu 
Student Number: A20503484 
Live Url:  https://supermanneer.github.io/labs/lab6/sunrisesunset.html
Repo link: https://github.com/supermanneer/supermanneer.github.io/tree/main/labs/lab6
*/

/* 
New York 40.71427,-74.00597
San Francisco 37.77493,-122.41942
Chicago   41.85003,-87.65005
Washington D.C.  38.89511,-77.03637
Los Angeles 34.05223,-118.24368
California 36.77826,-119.41793
Texas 31.9686,-99.90181
Las Vegas 36.17497,-115.13722
Michigan 44.31484,-85.60236
Atlanta  33.749,-84.38798
*/



window.onload=function(){
    loadSelection();
};

let cityArray=[
    [1,'New York',40.71427,74.00597],
    [2,'San Francisco',37.77493,-122.41942],
    [3,'Chicago',41.85003,-87.65005],
    [4,'Washington D.C.',38.89511,-77.03637],
    [5,'Los Angeles',34.05223,-118.24368],
    [6,'California',36.77826,-119.41793],
    [7,'Texas',31.9686,-99.90181],
    [8,'Las Vegas',36.17497,-115.13722],
    [9,'Michigan',44.31484,-85.60236],
    [10,'Atlanta',33.749,-84.38798]
     ];
function loadSelection(){
 
var city=document.getElementById("city");
  for(var i=0;i<cityArray.length;i++){
    var option=document.createElement('option');
    option.text=cityArray[i][1];
    option.className="optionname";
    option.value=cityArray[i][0];
    city.appendChild(option);
  }
  
}
// when choose selection

function selectChange(obj){
    var showgeo=document.getElementById("showgeo");
    var latitude=cityArray[obj][2];
    var longtitude=cityArray[obj][3];
    var cityName=cityArray[obj][1];
  
    showSunInfor(cityName,latitude,longtitude);

}

function showSunInfor(cityName,latitude,longtitude){
    var color=getRandomColor();
    let today = new Date();
 
    let tomorrowDate =new Date(today);
    tomorrowDate.setDate(today.getDate() + 1);
    var tomorrow = tomorrowDate.toISOString().split('T')[0]; 
    showgeo.innerHTML=`Select City <span class="boldcity"> ${cityName} </span> at Latitude: ${latitude}, Longtitude: ${longtitude}`;
  
    const url=`https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longtitude}`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
     
     document.querySelector('#todaydate').innerHTML=`<span class="backspan" style="background:${color}">${data.results.date}</span>`
        document.querySelector('#todaysunrise').innerHTML=`<span class="backspan" style="background:${color}">${data.results.sunrise}</span>`
        document.querySelector('#todaysunset').innerHTML=`<span class="backspan" style="background:${color}">${data.results.sunset}</span>`
        document.querySelector('#todaydawn').innerHTML=`<span class="backspan" style="background:${color}">${data.results.dawn}</span>`
        document.querySelector('#todaydusk').innerHTML=`<span class="backspan" style="background:${color}">${data.results.dusk}</span>`
        document.querySelector('#todaysolarnoon').innerHTML=`<span class="backspan" style="background:${color}">${data.results.solar_noon}</span>`
        document.querySelector('#todaydaylength').innerHTML=`<span class="backspan" style="background:${color}">${data.results.day_length}</span>`
        document.querySelector('#todaytimezone').innerHTML=`<span class="backspan" style="background:${color}">${data.results.timezone}</span>`
  
    })
    .catch(error=>console.error('error',error));
 
    console.log(tomorrow);
    const tomorrowURL=`https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longtitude}&date=${tomorrow}`;
    fetch(tomorrowURL)
    .then(response=>response.json())
    .then(data=>{
     
 
 
     document.querySelector('#tomorrowdate').innerHTML=`<span class="backspan" style="background:${color}">${data.results.date}</span>`
        document.querySelector('#tomosunrise').innerHTML=`<span class="backspan" style="background:${color}">${data.results.sunrise}</span>`
        document.querySelector('#tomosunset').innerHTML=`<span class="backspan" style="background:${color}">${data.results.sunset}</span>`
        document.querySelector('#tomodawn').innerHTML=`<span class="backspan" style="background:${color}">${data.results.dawn}</span>`
        document.querySelector('#tomodusk').innerHTML=`<span class="backspan" style="background:${color}">${data.results.dusk}</span>`
        document.querySelector('#tomosolarnoon').innerHTML=`<span class="backspan" style="background:${color}">${data.results.solar_noon}</span>`
        document.querySelector('#tomodaylength').innerHTML=`<span class="backspan" style="background:${color}">${data.results.day_length}</span>`
        document.querySelector('#tomotimezone').innerHTML=`<span class="backspan" style="background:${color}">${data.results.timezone}</span>`
  
    })
    .catch(error=>console.error('error',error));
}

// get random color

function getRandomColor(){
    let r=Math.floor(Math.random()*256)+100;
    let g=Math.floor(Math.random()*256)+100;
    let b=Math.floor(Math.random()*256)+100;
    return `rgb(${r},${g},${b})`;
    
}

// find my location

function getLocation(){
    var city=document.getElementById("city");
if ("geolocation" in navigator) {
    // geolocation function support
    navigator.geolocation.getCurrentPosition(function(position) {
      // success get geolocation
      var latitude = position.coords.latitude; // latitude
      var longitude = position.coords.longitude; // longitude
      console.log("Latitude: " + latitude + ", Longitude: " + longitude);
      cityname="";
      city.value = '-1';
      showSunInfor(cityname,latitude,longitude);
    }, function(error) {
      // failure to get geolocation
      console.error("Error Code = " + error.code + " - " + error.message);
    });
  } else {
    // geo location not supported by browser
    console.log("Geolocation is not supported by this browser.");
  }
}
