window.onbeforeunload = function () {
    localStorage.removeItem('visited');
}

document.getElementsByClassName('U26fgb')[2].addEventListener('click',()=>{
    localStorage.removeItem('visited');
});
