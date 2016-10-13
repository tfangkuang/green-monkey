$(function(){
	$("#header .nav li").hover(function(){
	$(this).find(".down").slideDown(100);
	},function(){
	$(this).find(".down").slideUp(100);	
		})
//输入框animate效果
 var isclick = true ;
 if(true){
	isclick = false;
$(".search input[type='text']").focus(function(){
	$(this).stop().animate({width:200},1000);
	})
$(".search input[type='text']").blur(function(){
	$(this).stop().animate({width:150},1000,function(){isclick=true;});
	})
}
$(".nav_ul li").mouseover(function(){
	$(this).addClass("active_2").siblings().removeClass("active_2");
	})
$(".nav_ul li").mouseout(function(){
	$(this).removeClass("active_2");
	})
//xiala
$(".nav_ul li").hover(function(){
	$(this).find(".nav_down").slideDown(100);
	},function(){
	$(this).find(".nav_down").slideUp(100);	
		})
//side_down 定位
$(".sidebar-wrap ul li").hover(function(){
	$(this).find(".lajl").stop().animate({right:36},600);
	},function(){
	$(this).find(".lajl").stop().animate({right:-300},600);	
		})
	})
//遮罩部分
$('#cartBtn ').click(function(){
	$('.bg').fadeIn(200);
	$('.popup-body').fadeIn(400);
});
$('.popup-btn-close').click(function(e){ 
	e.stopPropagation();//这里是设置遮罩消失的
	$('.bg').fadeOut(800);
	$('.popup-body').fadeOut(800);
});


$(".plus").click(function() {
// console.log("123")
 var _plus = $("#Num")
  _plus.val(parseInt(_plus.val())+1)
  
})

$(".substract").click(function() {
// console.log("123")
var _increat = $("#Num")
_increat.val(parseInt(_increat.val())-1)
   if(parseInt(_increat.val())<1){
	_increat.val(1);
}
})


//function setTotal(){ 
//var s=0; 
//$(".goodsprice").each(function(){ 
//s+=parseInt($(".Num")).val())*parseFloat($(this).find('span[class*=price]').text()); 
//}); 
//$("#total").html(s.toFixed(2)); 
//} 
//setTotal(); 
//
//}) 