

$(function() {
	// 表格验证登录

$(".btn1").focus(function() {
	$(".login-text").css("border","1px solid #661166")
	$(".none-1").css("display","none");
})

$(".btn1").blur(function() {
	$(".login-text").css("border","1px solid #999")
	
})	



$(".btn2").focus(function() {
	$(".login-psw2").css("border","1px solid #661166")
	$(".none-2").css("display","none");
})
$(".btn2").blur(function() {
	$(".login-psw2").css("border","1px solid #999")

})

//登录（判断用户名和密码有问题时候的状态）
$(".zdlogin").click(function() {
	var userName = $.trim($(".btn1").val());  //trim 为去除空制符
	var psw = $.trim($(".btn2").val());  
	if(userName ==""&&psw==""){
		$(".none-1").css("display","block");
		$(".none-2").css("display","block");
	}else if(userName ==""){
	   $(".none-1").css("display","block");
	}else if(psw==""){
		$(".none-2").css("display","block");
	}
	return false;
})

//判断 登录成功的状态
$(".zdlogin").click(function(e) {
	e.preventDefault();
	var username = $(".btn1").val();
	var user_password = $(".btn2").val();
	$.ajax({
		type : "get", //同步
		url : "../data/userName.json",
		data :{name : username, psw :user_password},
		success:function(msg) {
			var userinfo = msg.data;
			var len = userinfo.length;
			var userExists = false;
			for(var i = 0 ;i<len ; i++){
				if(userinfo[i][0] == username && userinfo[i][1] == user_password){
					userExists = true;
					break;
				}
				if(userinfo[i][0] != username && userinfo[i][1] == user_password){
					alert('用户名错误，请重新输入');
					$(".btn").val("");
					return;
				}
				if(userinfo[i][0] == username && userinfo[i][1] != user_password){
					alert('密码错误,请重新输入');
					
					return;
				}
			}
			if(userExists){
//				window.location.href='../html/index.html'
//              alert("ok")
                $.cookie("username",username,{expires: 7 ,path:"/"});  //引入cookie 
                location.href="../html/index.html";
			}else{
			alert('用户名或密码错误');
//
			}
			
		}
	})
})
})

// $(function(){
// 	
 //记住用户名密码  
//  function Save() {  
//     
//  $(document).ready(function () {  
////      if ($.cookie("rmbUser") == "true") {  
////      $("#ck_rmbUser").attr("checked", true);  
////      $("#txt_username").val($.cookie("username"));  
////      $("#txt_password").val($.cookie("password"));  
////      }  
////  });  
////
////  //记住用户名密码  
////  function Save() {  
////      if ($("#ck_rmbUser").attr("checked")) {  
////          var str_username = $("#txt_username").val();  
////          var str_password = $("#txt_password").val();  
////          $.cookie("rmbUser", "true", { expires: 7 }); //存储一个带7天期限的cookie  
////          $.cookie("username", str_username, { expires: 7 });  
////          $.cookie("password", str_password, { expires: 7 });  
////      }  
////      else {  
////          $.cookie("rmbUser", "false", { expire: -1 });  
////          $.cookie("username", "", { expires: -1 });  
////          $.cookie("password", "", { expires: -1 });  
////      }  
//  };  
// })
