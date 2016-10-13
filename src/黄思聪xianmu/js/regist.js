//function loadHtml(url, targetId) {
//	$.ajax({
//			url: url,
//			dataType: "html",
//			async: false,
//			success: function(msg) {
//				$("#"+targetId).html(msg);
//		}
//	})
//}

$(function() {
	
	$("#phone_btn").focus(function() {
		$(".phone").css("border","1px solid #661166")
		$(".pleae_phone").css("display","block")
		$(".pleae_phone2").css("display","none");
	})
	$("#phone_btn").blur(function() {
		
		$(".phone").css("border","1px solid #ccc")
		$(".pleae_phone").css("display","none")
		var name = $(this).val();
		var reg_p = /1[3|4|5|7|8]\d{9}/;  //1开头，第二位可能是3/4/5/7/8等的任意一个，在加上后面的\d表示数字[0-9]的9位
		if(!(reg_p).test(name)){
		$(".pleae_phone2").css("display","block");
		}else{
			$(".pleae_phone2").css("display","none");
		}
		
	})
	$("#phone_psw").focus(function() {
		$(".psw").css("border","1px solid #661166")
		$(".plese_psw").css("display","block")
		$(".plese_psw2").css("display","none");
	})
	$("#phone_psw").blur(function() {
		var user_zc = $(this).val();
		var user_psw = $(this).val();
		var reg_psw = /^[\x21-\x7E]{6,20}$/;
		if(!(reg_psw ).test(user_psw)){
			$(".plese_psw2").css("display","block");
		}else{
			$(".plese_psw2").css("display","none");
		}
		
		$(".psw").css("border","1px solid #ccc")
		$(".plese_psw").css("display","none")
	})
	$("#zc_shuru").focus(function() {
		$(".zc_psw").css("border","1px solid #661166")
		$(".zc").css("display","block")
	})
	$("#zc_shuru").blur(function() {
		$(".zc_psw").css("border","1px solid #ccc")
		$(".zc").css("display","none")
	})
	
	$("#result").click(function(e) {
		e.stopPropagation();
		if($("phone_btn").val()==$((/^[\x21-\x7E]{6,20}$/).test(phone_btn.val())))
		location.href="regist.html";

	})
	//手机号的正则^[1][358][0-9]{9}$
	//密码的正则^[\x21-\x7E]{6,20}$
	
})



//$("#re_name").blur(function(){
//		var username = $(this).val();
//
//if(!/[a-zA-Z0-9]{3,8}/.test(username)) {   //如果没有匹配到，那么就错误
//   $("#r_name").html("用户名格式错误!");
//   return false;
//}
//
//		var url = "register_do.php";
//		$.post(url,{name:username},function(result){
//			   if(result =='1'){
//                  $("#r_name").html("用户名存在!");
//                }else{
//                  $("#r_name").html("<font color=green>可以注册</font>"); 
//				  }
//			   if(username ==　""){
//					$("#r_name").html("<font color=red>用户名不能为空</font>");
//				  }
//	})