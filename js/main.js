$('.eb_slider_list').slick({
    autoplay:true,
    nextArrow:false,
    prevArrow:false,
    pauseOnHover:false,
    dots:true,
    fade: true,
  });

  //선택자.addEventListerner("click",function(){})
  //선택자.onclick.function(){}

  // add~~는 클릭말고도 여러가지할수있음. 

  let start_stop = function(cls,sli){
    let TF = true;
    cls.click(function(e){
    e.preventDefault();
    if(TF == true){
      cls.removeClass("on")
      TF = false;
    }else{
      cls.addClass("on")
      TF = true;
    }
    if(cls.hasClass("on")){ //선택자가 해당 클래스를 가지고있다면
      sli.slick("slickPlay")
    }else{
      sli.slick("slickPause")
    }
  })
  }
  let slide1 = start_stop($(".eb_slider .page_act"),$('.eb_slider_list'))
  let slide2 = start_stop($(".eb_slider2 .page_act"),$('.eb_slider2 .card'))


  /* let TF = true;
  $(".page_act").click(function(e){
    e.preventDefault();
    if(TF == true){
      $(".page_act").removeClass("on")
      TF = false;
    }else{
      $(".page_act").addClass("on")
      TF = true;
    }
    if($(".page_act").hasClass("on")){ //선택자가 해당 클래스를 가지고있다면
      $('.eb_slider_list').slick("slickPlay")
    }else{
      $('.eb_slider_list').slick("slickPause")
    }
  }) */

$('.card').slick({
  autoplay:true,
    nextArrow:false,
    prevArrow:false,
    pauseOnHover:false,
    dots:true
 });


 // life 버튼
 let tab =$(".life_menu ul li");
 let menu =$(".life_style ul li");

 tab.mouseover(function(){
  let target = $(this)
  let index = target.index();

  menu.css({opacity:0})
  menu.eq(index).css({opacity:1})
 })