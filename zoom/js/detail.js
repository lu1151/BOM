window.addEventListener("load", function () {
  var focus = document.querySelector(".focus");
  var mask = document.querySelector(".mask");
  var big = document.querySelector(".big");
  focus.addEventListener("mouseover", function () {
    mask.style.display = "block";
    big.style.display = "block";
  });
  focus.addEventListener("mouseout", function () {
    mask.style.display = "none";
    big.style.display = "none";
  });

  focus.addEventListener("mousemove", function (e) {
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    var maskx = x - mask.offsetWidth / 2;
    var masky = y - mask.offsetHeight / 2;
    var maskH = focus.offsetHeight - mask.offsetHeight;
    var maskW = focus.offsetWidth - mask.offsetWidth;
    if (maskx <= 0) {
      maskx = 0;
    } else if (maskx >= maskW) {
      maskx = maskW;
    }
    if (masky <= 0) {
      masky = 0;
    } else if (masky >= maskH) {
      masky = maskH;
    }
    mask.style.left = maskx + "px";
    mask.style.top = masky + "px";

    var bigImg = document.querySelector(".bigImg");
    var bigW = bigImg.offsetWidth - big.offsetWidth;
    var bigH = bigImg.offsetHeight - big.offsetHeight;

    var bigx = (maskx * bigW) / maskW;
    var bigy = (masky * bigH) / maskH;
    bigImg.style.top = - bigy + "px";
    bigImg.style.left = - bigx + "px";
  });
});
