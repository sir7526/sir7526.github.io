/*var myImage = document.querySelector('img');
var h2 = document.querySelector('h2');
myImage.onclick = function () {
    var imageSource = myImage.getAttribute('src');
    if(h2.innerHTML) {
        h2.innerHTML = '';
    }
    else {
        h2.innerHTML = imageSource;
    }
}
*/
var h2 = document.querySelector('h2');
var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myH3 = document.querySelector('h3');
myImage.onclick = function () {
    var imageSource = myImage.getAttribute('src');
    if (imageSource === 'images/baozou.jpg') {
        myImage.setAttribute('src','images/xiongmao.jpg');
       // h2.innerHTML = imageSource;
    }
    else {

        myImage.setAttribute('src','images/baozou.jpg');
       // h2.innerHTML = imageSource;
    }
}
/*myButton.onclick = function () {
    var myName = prompt('Please input your name:');
    localStorage.setItem('name',myName);
    myH3.innerHTML = 'Welcome to Baoman,'+ myName;
}
*/


function setUserName() {
    var myName = prompt('Please enter your name:');
    localStorage.setItem('name', myName);
    myH3.innerHTML = 'Welcome to Baoman, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myH3.innerHTML = 'Welcome to Baoman, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}