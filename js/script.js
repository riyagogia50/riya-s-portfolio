particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});


$(window).load(function() {
  window.setTimeout(function(){
    home();

    var right = Snap("#right");
    var rightCircle = right.circle("50%", "50%", 0).attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "3"
    });
    var rightArrow = right.path("M16.07,14.475 c-1.638-1.551-2.66-2.467-4.15-4.07c-1.491-1.603,0.559-4.789,2.953-2.713c2.953,2.474,7.022,6.305,7.022,6.305s2.154,1.597,0,3.672 c-2.154,2.074-5.263,5.026-6.704,6.623c-1.44,1.596-5.107,0.319-3.271-2.474c4.479-4.7,4.479-4.7,4.479-4.7 S17.707,16.026,16.07,14.475z").attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "2"
    });

    var bottom = Snap("#bottom");
    var bottomCircle = bottom.circle("50%", "50%", 0).attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "3"
    });
    var bottomArrow = bottom.path("M17.526,15.937 c1.551-1.638,2.467-2.661,4.07-4.151c1.603-1.491,4.788,0.559,2.713,2.953c-2.474,2.954-6.305,7.023-6.305,7.023 s-1.596,2.154-3.671,0c-2.074-2.154-5.026-5.263-6.623-6.704c-1.596-1.441-0.319-5.108,2.474-3.272c4.7,4.479,4.7,4.479,4.7,4.479 S15.976,17.573,17.526,15.937z").attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "2"
    });

    var left = Snap("#left");
    var leftCircle = left.circle("50%", "50%", 0).attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "3"
    });
    var leftArrow = left.path("M16.063,17.524 c1.638,1.551,2.661,2.467,4.151,4.07c1.491,1.603-0.559,4.788-2.953,2.713c-2.954-2.474-7.023-6.305-7.023-6.305 s-2.154-1.596,0-3.671c2.154-2.074,5.263-5.026,6.704-6.623c1.441-1.596,5.108-0.319,3.272,2.474c-4.479,4.7-4.479,4.7-4.479,4.7 S14.426,15.974,16.063,17.524z").attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "2"
    });

    var top = Snap("#top");
    var topCircle = top.circle("50%", "50%", 0).attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "3"
    });
    var topArrow = top.path("M14.476,16.062 c-1.551,1.639-2.467,2.661-4.07,4.151c-1.603,1.491-4.788-0.559-2.713-2.953c2.474-2.954,6.305-7.023,6.305-7.023 s1.596-2.154,3.671,0c2.074,2.154,5.026,5.263,6.623,6.704c1.596,1.441,0.319,5.108-2.474,3.272c-4.7-4.479-4.7-4.479-4.7-4.479 S16.026,14.425,14.476,16.062z").attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "2"
    });

    rightCircle.animate({
      r: 15
    }, 500, mina.easeinout,  function() {
      bottomCircle.animate({
        r: 15
      }, 500, mina.easeinout,  function() {
        leftCircle.animate({
          r: 15
        }, 500, mina.easeinout,  function() {
          topCircle.animate({
            r: 15
          }, 500, mina.easeinout);
        });
      });
    });

    window.setTimeout(function(){
      $("#right").attr("class", "nav done enable");
    }, 500);
    window.setTimeout(function(){
      $("#bottom").attr("class", "nav done");
    }, 1000);
    window.setTimeout(function(){
      $("#left").attr("class", "nav done");
    }, 1500);
    window.setTimeout(function(){
      $("#top").attr("class", "nav done");
    }, 2000);
  }, 1000);
})

function home () {
  
var t1 = Snap("#home_animation");
var homeCircle1 = t1.circle("30%", "50%", 0);
var homeCircle2 = t1.circle("60%", "45%", 0);
var homeCircle3 = t1.circle("70%", "55%", 0);
var homeCircle4 = t1.circle("53%", "52%", 0);
var homeCircle5 = t1.circle("43%", "51%", 0);

window.setTimeout(function(){animate()}, 1000);
function animate() {
  homeCircle1.attr({
    opacity: 1,
    r: 0
  })
  homeCircle2.attr({
    opacity: 1,
    r: 0
  })
  homeCircle3.attr({
    opacity: 1,
    r: 0
  })
  homeCircle4.attr({
    opacity: 1,
    r: 0
  })
  homeCircle5.attr({
    opacity: 1,
    r: 0
  })
  window.setTimeout(function(){
    homeCircle1.attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: 4
    });
    homeCircle1.animate({
      r: 50
    }, 300, mina.easeout, function() {
      homeCircle1.animate({
        r: 55,
        opacity: 0
      }, 100, function() {


      homeCircle2.attr({
        fill: "none",
        stroke: "#e8e8e0",
        strokeWidth: 4
      });
      homeCircle2.animate({
        r: 60
      }, 300, mina.easeout, function() {
        homeCircle2.animate({
          r: 75,
          opacity: 0
        }, 100, function () {




          homeCircle3.attr({
            fill: "none",
            stroke: "#e8e8e0",
            strokeWidth: 4
          });
          homeCircle3.animate({
            r: 30
          }, 300, function() {
            homeCircle3.animate({
              r: 45,
              opacity: 0
            }, 100, function() {





              homeCircle4.attr({
                fill: "none",
                stroke: "#e8e8e0",
                strokeWidth: 4
              });
              homeCircle4.animate({
                r: 40
              }, 400, function() {
                homeCircle4.animate({
                  r: 55,
                  opacity: 0
                }, 100, function() {






                  window.setTimeout(function(){
                    homeCircle5.attr({
                      fill: "none",
                      stroke: "#e8e8e0",
                      strokeWidth: 4
                    });
                    homeCircle5.animate({
                      r: 20
                    }, 300, function() {
                      homeCircle5.animate({
                        r: 35,
                        opacity: 0
                      }, 100, function(){animate()})
                    });
                  }, 1000);
                })
              });

            })
          });

        })
      });

      })
    });
  }, 2000);
}


} 