var video = "https://www.youtube.com/embed/2zmfP9pi2cI?&autoplay=1&mute=1&playsinline=1&playsinline=1&controls=0&loop=1&disablekb=0&rel=0&start=40&enablejsapi=1&playlist=2zmfP9pi2cI";
switch(Math.floor(Math.random()*5)){
    case 0:
        var video = "https://www.youtube.com/embed/2zmfP9pi2cI?&autoplay=1&mute=1&playsinline=1&playsinline=1&controls=0&loop=1&disablekb=0&rel=0&start=40&enablejsapi=1&playlist=2zmfP9pi2cI";
        break;
    case 1:
        var video = "https://www.youtube.com/embed/rmUm9qo3E-A?&autoplay=1&mute=1&playsinline=1&playsinline=1&controls=0&loop=1&disablekb=0&rel=0&start=40&enablejsapi=1&playlist=rmUm9qo3E-A";
        break;
    case 2:
        var video = "https://www.youtube.com/embed/OHqWpLOxbqs?&autoplay=1&mute=1&playsinline=1&playsinline=1&controls=0&loop=1&disablekb=0&rel=0&start=40&enablejsapi=1&playlist=OHqWpLOxbqs";
        break;
    case 3:
        var video = "https://www.youtube.com/embed/k0RPJMkrX_8?&autoplay=1&mute=1&playsinline=1&playsinline=1&controls=0&loop=1&disablekb=0&rel=0&start=40&enablejsapi=1&playlist=k0RPJMkrX_8";
        break;
    case 4:
        var video = "https://www.youtube.com/embed/n5ksnw-9KyM?&autoplay=1&mute=1&playsinline=1&playsinline=1&controls=0&loop=1&disablekb=0&rel=0&start=40&enablejsapi=1&playlist=n5ksnw-9KyM";
        break;
}
document.getElementById('videoBackground').src = video;
function resize(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    var ph = h * 1.2, pw = w * 1.2;
    if(16/9 < w/h){
        ph = pw * 9 / 16;
    } else{
        pw = ph * 16 / 9;
    }
    var elem = document.getElementById('videoBackground')
    elem.style.width= pw + "px";
    elem.style.height= ph + "px";
}
resize();