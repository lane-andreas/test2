window.addEventListener("scroll", function () {
  var horizontalIn = document.querySelector(".horizontalIn");
  var horizontalOut = document.querySelector(".horizontalOut");
  var sectionTop = horizontalOut.offsetTop;
  var sectionHeight = horizontalOut.offsetHeight;
  var windowHeight = window.innerHeight;
  var sectionWidth = horizontalIn.clientWidth - window.innerWidth;

  var startScroll = sectionTop;
  var endScroll = sectionTop + sectionHeight - windowHeight;

  if (window.scrollY > startScroll && window.scrollY < endScroll) {
    var scrollPercent =
      (window.scrollY - startScroll) / (endScroll - startScroll);

    horizontalIn.animate(
      {
        transform: "translateX(" + -scrollPercent * sectionWidth + "px)",
      },
      { duration: 500, fill: "forwards" }
    );
  }
});
