var button = document.querySelector("#one");
var menu = document.querySelector("#menu");
var win = document.querySelector("#maintouch");
var rightclick = document.querySelector("#rightclick");

let isopen = false;


button.addEventListener("click", function() {
    event.stopPropagation();

    if (!isopen) {
        menu.style.bottom = "2%";
    }
    else{
        menu.style.bottom = "-100%";
    }
    isopen = !isopen;
})

win.addEventListener("click", function() {
    console.log("clicked");
    if(isopen){
        console.log("opened");
        menu.style.bottom = "-100%";
    }
});

win.addEventListener("contextmenu", function() {
    rightclick.style.display = "block";
    rightclick.style.left = event.pageX + "px";
    rightclick.style.top = event.pageY + "px";
    event.preventDefault();

    win.addEventListener("click", function() {
        rightclick.style.display = "none";
    });

});