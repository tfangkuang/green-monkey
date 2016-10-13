//header 头部js
$(function(){
	$("#header .nav li").hover(function(){
	$(this).find(".down").slideDown(100);
	},function(){
	$(this).find(".down").slideUp(100);	
		})

  $(".nav_2 ul li").mouseover(function(){
	  $(this).addClass("active_2").siblings().removeClass("active_2");
	  
	  })

/*
<script type="text/javascript">
  $(function(){
  $("#div ul li").hover(function(){
    $(this).css("background","#333333").children("ul").show();
  },function(){
    $(this).css("background","#fff").children("ul").hide();
  })
 
  })
</script>

*/




//bannar 区域的js
 //手动控制轮播效果
$(".num li").mouseover(function(){
	$(this).addClass("active").siblings().removeClass("active");
	var index = $(this).index(); //索引
	curcount = index ;//让active的样式与图片轮播时同步
	$(".img li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
	})
 //自动控制轮播效果
 var curcount = 0;
 
 var temp= setInterval(move,2000);
     function move(){
	 curcount++;
	 if(curcount==5){  //当图片到第五章的时候，此时 图片应被拉回到第一张
		 curcount=0;
		 }
	 $(".num li").eq(curcount).addClass("active").siblings().removeClass("active");
	 $(".out li").eq(curcount).stop().fadeIn(2000).siblings().stop().fadeOut(2000);
	 }
   //鼠标移人移出的状态
	 $(".out").hover(function(){
		 clearInterval(temp);
		 },function(){
		 temp= setInterval(move,2000);
			 })
	$(".out .right").click(function(){
		move(); //相当于调用move函数
		})
	
	$(".out .left").click(function(){
		  curcount--;
		if(curcount==-1){
			curcount=4;
			}
	
		$(".num li").eq(curcount).addClass("active").siblings().removeClass("active");
		$(".out li").eq(curcount).stop().fadeIn(2000).siblings().stop().fadeOut(2000);
		})

})
//bannar 区域的js 结尾	