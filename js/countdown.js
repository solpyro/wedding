var weddingDay = new Date("2022-09-10T14:00:00.000+02:00").getTime();

var interval, element;

window.addEventListener('load', () => {
    element = document.getElementById("countdown");
    interval = setInterval(function() {
        var now = new Date().getTime();
        var d = weddingDay - now;
        
        var days = Math.floor(d/(1000*60*60*24));
        var hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
        var minutes = Math.floor((d%(1000*60*60))/(1000*60));
        var seconds = Math.floor((d%(1000*60))/1000);
        
        if(d < 0) {
            clearInterval(interval);
            //set 'now' message
        }
        
        element.innerHTML = days+" days, "+hours+" hours, "+minutes+" minutes, "+seconds+" seconds";		
    });
});