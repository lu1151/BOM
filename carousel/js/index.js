window.addEventListener("load", function () {
  var arrowl = document.querySelector(".arrow-l");
  var arrowr = document.querySelector(".arrow-r");
  var focus = document.querySelector(".focus");
  var focusWidth = focus.offsetWidth;

  focus.addEventListener("mouseenter", function () {
    arrowl.style.display = "block";
    arrowr.style.display = "block";
    clearInterval(timer);
    timer = null;
  });

  focus.addEventListener("mouseleave", function () {
    arrowl.style.display = "none";
    arrowr.style.display = "none";
    timer = setInterval(function () {
      arrowr.click();
    }, 3000);
  });

  var ul = focus.querySelector("ul");
  var ol = focus.querySelector(".circle");

  for (var i = 0; i < ul.children.length; i++) {
    var li = document.createElement("li");
    li.setAttribute("index", i);
    ol.appendChild(li);

    li.addEventListener("click", function () {
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = "";
      }
      this.className = "current";
      var index = this.getAttribute("index");
      num = index;
      circle = index;
      slowDown(ul, -focusWidth * index);
    });
  }
  ol.children[0].className = "current";

  var liLast = ul.children[0].cloneNode(true);
  ul.appendChild(liLast);

  var circle = 0;
  var num = 0;
  var flag = true;

  arrowr.addEventListener("click", function () {
    if (flag) {
      flag = false;
      if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
      }
      num++;
      slowDown(ul, -focusWidth * num, function () {
        flag = true;
      });
      circle++;
      circle = circle == ol.children.length ? 0 : circle;
      circleChange();
    }
  });

  arrowl.addEventListener("click", function () {
    if (flag) {
      flag = false;
      if (num == 0) {
        num = ul.children.length - 1;
        ul.style.left = -num * focusWidth + "px";
      }
      num--;
      slowDown(ul, -focusWidth * num, function () {
        flag = true;
      });
      circle--;

      circle = circle < 0 ? ol.children.length - 1 : circle;

      circleChange();
    }
  });

  function circleChange() {
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = "";
    }
    ol.children[circle].className = "current";
  }

  var timer = setInterval(function () {
    arrowr.click();
  }, 3000);
});
