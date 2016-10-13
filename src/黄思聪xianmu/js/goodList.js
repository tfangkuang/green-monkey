//
$(".goods-list li").mouseenter(function(){
		   	 $(this).css("border","1px solid #661166")
		   })
		    $(".goods-list li").mouseleave(function(){
		   	 $(this).css("border","1px solid #fff")
		   })
// baobao current样式
$(".zy_tab li").mouseenter(function(){
//	e.stopPropagation();
	$(this).addClass("current").siblings().removeClass("current");
	var index = $(this).index();
    var $zy_tab = $(this).parent().next().children();
// console.log(($zy_tab))
   $zy_tab.eq(index).stop().fadeIn(100).siblings().stop().fadeOut(100);
  })
//  console.log($zy_tab);


// 透明度的改变
$(".li-bottom").mouseenter(function(){
	$(this).stop().animate({opacity:0.5},200)
})
$(".li-bottom").mouseleave(function(){
	$(this).stop().animate({opacity:1},200)
})

$("#header .nav li").hover(function(){
	$(this).find(".down").slideDown(100);
	},function(){
	$(this).find(".down").slideUp(100);	
		})
//louti

//楼梯效果代码

  