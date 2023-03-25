

//chining here---------------------------

$(document).ready(function(){
  $("#startc").mouseenter(function(){
    $("#democ").css("color", "green").slideUp(2000).slideDown(2000);
  })
})

// animation here----------------------

$(document).ready(function(){
	$("#start").click(function(){
		var myAnimation = $("#demo");
        myAnimation.animate({fontSize: '50px'},2000);
        myAnimation.animate({letterSpacing: '10px'},2000);
        myAnimation.animate({fontSize: '70px'},3000);
        myAnimation.animate({letterSpacing: '2px'},1000);
        myAnimation.animate({letterSpacing: '50px'},3000);
        myAnimation.animate({letterSpacing: '5px'},2000);
        myAnimation.animate({fontSize: '90px'},3000);
        myAnimation.animate({backgroudColor: '#ffc'},3000);
    });

    $("#stop").click(function(){
		$("#demo").stop(true);
    });
});




// animation2 here----------------------

$(document).ready(function(){
	$("#start2").click(function(){
		var myAnimat = $("#demo2");
      myAnimat.animate({width: '300px'},2000);
      myAnimat.animate({height: '60px'},2000);
      myAnimat.animate({fontSize: '55px'},1000);
      myAnimat.animate({height: '90px'},2000);
      myAnimat.animate({width: '800px'},2000);
      myAnimat.animate({fontSize: '60px'},2000);
      myAnimat.animate({letterSpacing: '40px'},2000);
      myAnimat.animate({letterSpacing: '0px'},2000);
      myAnimat.animate({width: '300px'},2000);
      myAnimat.animate({fontSize: '55px'},1000);
      myAnimat.animate({height: '60px'},2000);
    });

    $("#stop2").click(function(){
		$("#demo2").stop(true);
    });
});


// callBack here----------------------


$(document).ready(function(){{
  $("#start3").click(function(){
    $("#demo3").hide(4000, function(){
      alert('collbac function here showing')
    });
  })
}})