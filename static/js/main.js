$(window).scroll(
  {
    previousTop: 0
  },
  function(){
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop){
      $(".header").show();
    } else {
      $(".header").hide();
    }
    this.previousTop = currentTop;
  }
);

(function() {
    $(".skills-prog li")
      .find(".skills-bar")
      .each(function(i) {
        $(this)
          .find(".bar")
          .delay(i * 150)
          .animate(
            {
              width:
                $(this)
                  .parents()
                  .attr("data-percent") + "%"
            },
            1000,
            "linear",
            function() {
              return $(this).css({
                "transition-duration": ".5s"
              });
            }
          );
      });
  
    $(".skills-soft li")
      .find("svg")
      .each(function(i) {
        var c, cbar, circle, percent, r;
        circle = $(this).children(".cbar");
        r = circle.attr("r");
        c = Math.PI * (r * 2);
        percent = $(this)
          .parent()
          .data("percent");
        cbar = (100 - percent) / 100 * c;
        circle.css({
          "stroke-dashoffset": c,
          "stroke-dasharray": c
        });
        circle.delay(i * 150).animate(
          {
            strokeDashoffset: cbar
          },
          1000,
          "linear",
          function() {
            return circle.css({
              "transition-duration": ".3s"
            });
          }
        );
        $(this)
          .siblings("small")
          .prop("Counter", 0)
          .delay(i * 150)
          .animate(
            {
              Counter: percent
            },
            {
              duration: 1000,
              step: function(now) {
                return $(this).text(Math.ceil(now) + "%");
              }
            }
          );
      });
  }.call(this));
  
$('.bar-percentage[data-percentage]').each(function () {
  var progress = $(this);
  var percentage = Math.ceil($(this).attr('data-percentage'));
  $({countNum: 0}).animate({countNum: percentage}, {
    duration: 2000,
    easing:'linear',
    step: function() {
      // What todo on every count
    var pct = '';
    if(percentage == 0){
      pct = Math.floor(this.countNum) + '%';
    }else{
      pct = Math.floor(this.countNum+1) + '%';
    }
    progress.text(pct) && progress.siblings().children().css('width',pct);
    }
  });
});