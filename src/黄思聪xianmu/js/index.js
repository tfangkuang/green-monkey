//header 头部js
$(function(){
	if(typeof($.cookie('username'))!=="undefined"){
		$('.lis1').next().html("欢迎你:" + $.cookie("username"));
		$('.lis1').next().next().html("<a href='logout.html'>退出登录</a>");
		$('.lis1').html("<a href='#></a>");
	}else{
		$('.lis1').next().html("<a href='login.html'>登录</a>");
		$('.lis1').next().next().html("<a href='regist.html'>注册</a>");
	}
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
//sidebar gwc

$(".gwc_span").click(function() {
//	$(this).addClass("gwc_active");
	$(".minicart-cont").toggle();
})
		
//xiding
//$(window).scroll(function() {
//			var scrollTop = $(window).scrollTop();
//			var fixTop = $("#main").offset().top;
//			if(scrollTop > fixTop) {
//				$(".header").stop().show(500);
//			} else {
//				$(".header").stop().hide(500);
//			}
//		})
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

//楼梯效果代码
 $(function(){
            var flag = false;
           //对左边的span点击时产生高亮的样式
           $("#loutiNav ul li").click(function(){
            flag = true;
            $(this).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
            //当产生点击时，对于的楼梯的页面进行改变
            var index = $(this).index();
            var  _top = $(".louti").eq(index).offset().top;
            $("html,body").stop().animate({scrollTop: _top},1000,function(){
                flag = false;
            });
           })
           //监听事件，
           
           //遍历
           $(window).scroll(function(){
            if(!flag){
            var scrolltop  = $(window).scrollTop();
               $(".louti").each(function(){
                if(scrolltop>=$(this).offset().top - $(this).outerHeight()/2){
                    $("#loutiNav ul li").eq($(this).index()).find("span").addClass("active").parent().siblings().find("span").removeClass("active")
                    }
         
             })
        }
           })
            
        })
 //回到顶部的操作

$(".side-up").click(function() {
 $("html,body").stop().animate({scrollTop:0},1000)
})

//add-line 样式添加
$(".goods-list2 ul li ").mouseenter(function(){
	 
	 ($(this).children().parent().find("div").css("display","block"));
	})
$(".goods-list2 ul li ").mouseleave(function(){
	 
	 ($(this).children().parent().find("div").css("display","none"));
	})	
	
//tab 切换 右侧 ()

$(".tab-title").children().mouseenter(function(){
//	e.stopPropagation()
   
	$(this).addClass("active_3").siblings().removeClass("active_3");
//	e.stopPropagation()
	var index = $(this).index()
	var $tab_main = $(this).parent().next().find(".tab-main");
	$tab_main.eq(index).stop().slideUp(400).siblings().stop().slideDown(400);
	
})

// 透明度的改变
$(".li-bottom").mouseenter(function(){
	$(this).stop().animate({opacity:0.5},200)
})
$(".li-bottom").mouseleave(function(){
	$(this).stop().animate({opacity:1},200)
})






  