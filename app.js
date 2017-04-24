$(document).ready(function(){
  var fadeStart=100 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil=200 // 200px scroll or more will equiv to 0 opacity
    ,fading = $('.fading')

  $(window).on('scroll', function(){
    var offset = $(document).scrollTop()
      ,opacity=0
    ;
    if( offset<=fadeStart ){
      opacity=1;
    }else if( offset<=fadeUntil ){
      opacity=1-offset/fadeUntil;
    }
    fading.css('opacity',opacity);
    var hero = $('.hero')
    var logo = $('.logo')
    var nav = $('nav a')
    var heroPos = hero.offset().top
    var windowPos = $(window).scrollTop()
    var pos = heroPos - windowPos
    var header = $('header')
    if(pos < -10){
      header.css({'background-color': '#dabd87'})
      nav.css({'color' : '#4e2800'})
      logo.attr('src', 'img/tw_logo_dark.svg').css({'width' : '18%'})
    }
    else{
      header.css({'background-color': 'rgba(0,0,0,0)'})
      nav.css({'color' : 'white'})
      logo.attr('src', 'img/tw_logo_light.svg').css({'width' : '22.5%'})
    }
    console.log(pos)
  })
})
