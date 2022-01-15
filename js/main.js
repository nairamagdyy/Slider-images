var imgs = Array.from(document.querySelectorAll("#slider img"));
var fixedBox = document.getElementById("fixed-box");
var closeBtn = document.getElementById("close-btn"); //single tag
var leftBtn = document.getElementById("left-btn");
var rightBtn = document.getElementById("right-btn");
var smallBox = document.getElementById("small-box");
var index;

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (e) {
        fixedBox.style.display = "flex";
        imgSrc = e.target.src;
        console.log(imgSrc)
        smallBox.style.backgroundImage = `url(${imgSrc})`;
        index = imgs.indexOf(e.target);
        console.log(index)
    })
}

function slide(i) {
    index += i;
    if (index < 0) {
        index = (imgs.length) - 1;
    }
    if (index == imgs.length) {
        index = 0;
    }
    var imgSrc = imgs[index].src;
    smallBox.style.backgroundImage = `url(${imgSrc})`;
}

rightBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    slide(1);
});

leftBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    slide(-1);
});

document.addEventListener("keydown", function (e) {
    if (e.code == "ArrowRight")
        slide(1);

    else if (e.code == "ArrowLeft")
        slide(-1);

    else if (e.code == "Escape")
        fixedBox.style.display = "none";
});

closeBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    fixedBox.style.display = "none";
});

fixedBox.addEventListener("click", function (e) {
    e.stopPropagation();
    fixedBox.style.display = "none";
});
smallBox.addEventListener("click", function (e) {
    e.stopPropagation();
});

