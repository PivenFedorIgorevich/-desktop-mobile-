//определение устройства
document.querySelector('#out').innerHTML = navigator.userAgent;

console.log(navigator);

if (navigator.userAgent.match('iPhone') || navigator.userAgent.match('Android') || navigator.userAgent.match('iPad')){
alert('Mobile');
}
else {
    alert('Desktop');
}
