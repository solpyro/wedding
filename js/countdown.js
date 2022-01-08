var weddingDay = new Date("2022-09-10T14:00:00.000+02:00").getTime();

var interval, elementEn, elementEt;

window.addEventListener('load', () => {
    elementEn = document.getElementById("countdown-en");
    elementEt = document.getElementById("countdown-et");

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
        
        elementEn.innerHTML = `${days} ${plural(days,"day","s")}, ${hours} ${plural(hours, "hour","s")}, ${minutes} ${plural(minutes, "minute","s")}, ${seconds} ${plural(seconds, "second","s")}`;
        elementEt.innerHTML = `${days} ${plural(days, "päev","a")}, ${hours} ${plural(hours,"tund","i")}, ${minutes} ${plural(minutes,"minut","it")}, ${seconds}  ${plural(seconds, "sekund","it")}`;
    });
});

function plural(number, word, suffix) {
    if(number === 1)
        return word;
    return word+suffix;
}