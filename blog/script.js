var btnLike = document.querySelector('#green')
var btnDislike = document.querySelector('#red')
console.log(btnLike)
console.log(btnDislike)
btnLike.onclick = likeColor
btnDislike.onclick = dislikeColor
var myList = document.getElementsByClassName("search-tags-item");
var i;

for (i=0;i<myList.length;i++) {
    var span = document.createElement("span");
    span.innerHTML = "x";
    myList[i].appendChild(span).setAttribute("class","close")
}

var close = document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none"
    }
}

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;   
    if(inputValue === '' || inputValue === ' ') {
        alert("Data cannot be empty!");
    } 
    else {
        document.getElementById("myUl").appendChild(li).setAttribute("class", "search-tags-item");
        li.innerHTML = inputValue;
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    span.innerHTML = "x";
    li.appendChild(span).setAttribute("class","close");
    for(i = 0; i < close.length; i++) {
        close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none"
      }
    }
}

function likeColor() {
    if (btnDislike.classList.contains('red')) {
        btnDislike.classList.remove('red')
    }

    this.classList.toggle('green')
}

function dislikeColor() {
    if (btnLike.classList.contains('green')) {
        btnLike.classList.remove('green')

    }
    this.classList.toggle('red')
}

function changeImage(element) {
    element.setAttribute("src",  
   "assets/fedyfezbr.jpg")
    };
    element.width = '1000px';
    
function changeImageBack(element) {
    element.setAttribute("src",  
   "assets/john.jpg")
}

function secondTitle(element) {
    element.innerHTML = "Create simple games and websites"
}

function backTitle(element) {
    element.innerHTML = "Get Programming Tips here!"
}
