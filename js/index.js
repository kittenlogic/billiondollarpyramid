 /* ================================================================
   Variables and Functions
   ================================================================ */   

  var cash = $("#audio0")[0];
  var death = $("#audio1")[0];
  var mantra = $("#audio2")[0];
  var wealth = $("#audio3")[0];
  var iamrich = $("#audio4")[0];
  var secret = $("#audio5")[0]; 
  var rainbow = $("#video6")[0]; 
  var belief = $("#video7")[0];
  var victim = $("#video8")[0];
  var employment = $("#audio9")[0];
  var lotto = $("#video10")[0];
  var theta = $("#video11")[0];
  var attractmoney = $("#video12")[0];
  var positive = $("#video13")[0];
  var seduction = $("#audio14")[0];
  var media = [cash, death, mantra, wealth, iamrich, secret, rainbow, belief, victim, employment, lotto, theta, attractmoney, positive, seduction];
  var cubes = ['.one', '.two', '.three', '.four', '.five', '.six'];
  var styles = ['a', 'b', 'c', 'd', 'e', 'f'];
  var program; 

  var pauseMedia = function(){
  for(var i=0; i < media.length; i++){
      media[i].pause(); 
    };
  }

  var hideVideo = function(){
    $("#video6, #video7, #video8, #video10, #video11, #video12, #video13").hide();
  }
  
  var changeBackground = function(bgClass, videoId){
    pauseMedia(); 
    hideVideo();
    $("body").removeClass().addClass("bg" + bgClass);
    $("#video" + videoId).show();
  }

  var swapBackground = function(bgClass){ 
    hideVideo();
    $("body").removeClass().addClass("bg" + bgClass);
  }

  var playMedia = function(source, vol){
    media[source].play();
    media[source].volume=vol;
  }

  var playProgram = function(){
    changeBackground(program, program);
    playMedia(program, 1);
    if (program == 5) {
      playMedia(4, 0.3);
    }  
  }

  var changeCube = function(x){
  if($(cubes[x]).children().hasClass(styles[x])) {
        $(cubes[x]).children().removeClass(styles[x]).addClass(styles[x]+('2'));
     } else if($(cubes[x]).children().hasClass(styles[x]+'2')) {
        $(cubes[x]).children().removeClass(styles[x]+'2').addClass(styles[x]+'3');
     } else if($(cubes[x]).children().hasClass(styles[x]+'3')) {
        $(cubes[x]).children().removeClass(styles[x]+'3').addClass(styles[x]+'4');
     } else if($(cubes[x]).children().hasClass(styles[x]+'4')) {
        $(cubes[x]).children().removeClass(styles[x]+'4').addClass(styles[x]+'5'); 
     } else if($(cubes[x]).children().hasClass(styles[x]+'5')) {
        $(cubes[x]).children().removeClass(styles[x]+'5').addClass(styles[x]+'6'); 
     } else if($(cubes[x]).children().hasClass(styles[x]+'6')) {
        $(cubes[x]).children().removeClass(styles[x]+'6').addClass(styles[x]); 
     };
  }
 
  var changeAllCubes = function(){
   for(var i=0; i < cubes.length; i++){
    changeCube(i);
   }
  };

  var cubeOnClick = function(i){
    $(cubes[i]).click(function(){
     changeCube(i);
    });
   }
  
 /* ================================================================
   .nav .help <select> listeners, behaviors and classes
   ================================================================ */ 

  $(function() {
    media[4].play();
    media[4].volume=.6; 
  });

  $("select").change(playProgram);

  $('.nav li:first-child').click(function(){
    changeAllCubes();         
  });

  $(".nav li:nth-child(2)").click(function(){
    pauseMedia(); 
    media[0].play();
  });

  $('.nav li:nth-child(3)').click(function(){
    pauseMedia();        
  });

  $('.nav li:last-child').click(function(){
    window.location.reload(false);       
  });

  $('.help').mouseenter(function(){
    $('#help').css( "overflow", "visible" );
    $('#help').children().addClass('move-up'); 
  });
 
  $('.help').mouseleave(function(){
    $('#help').children().removeClass('move-up');
  });

/* ================================================================
   Pyramid cube listeners, behaviors, and styles
   ================================================================ */

  cubeOnClick(0);
  cubeOnClick(1);
  cubeOnClick(2);
  cubeOnClick(3);
  cubeOnClick(4);
  cubeOnClick(5);

  $(".one").mouseenter(function() {
    //swapBackground(4);
    //playMedia(4, 0.3);
    //playMedia(5, 1);
  });

  $(".four").mouseenter(function() {
    //changeBackground(7, 7);
    //playMedia(7, 1);       
  });

  $(".three").mouseenter(function() {
    //swapBackground(3);  
    //playMedia(2, 1); 
  });

  $(".two").mouseenter(function() {
    //swapBackground(5); 
    //playMedia(3, 1);
  });

  $(".five").mouseenter(function() {
    //swapBackground(1);
    //playMedia(1, 1);
  });
 
  $(".six").mouseenter(function() {  
    //changeBackground(8, 8);
    //playMedia(8, 1);
    
  }); 


/* ================================================================
   For reference (refactored)
   ================================================================ 

  //before refactoring to make changeCube();

   if($('.one').children().hasClass('a')) {
      $('.one').children().removeClass('a').addClass('a2');
   } else if($('.one').children().hasClass('a2')) {
      $('.one').children().removeClass('a2').addClass('a3');
   } else if($('.one').children().hasClass('a3')) {
      $('.one').children().removeClass('a3').addClass('a4');
   } else if($('.one').children().hasClass('a4')) {
      $('.one').children().removeClass('a4').addClass('a');
   };

 //before refactoring to make cubeOnClick();

    $(".one").click(function(){
      changeCube(0);
    });
    $(".two").click(function(){
      changeCube(1);
    });
    $(".three").click(function(){
      changeCube(2);
    });
    $(".four").click(function(){
      changeCube(3);
    });
    $(".five").click(function(){
      changeCube(4);
    });
    $(".six").click(function(){
      changeCube(5);
    });
*/ 