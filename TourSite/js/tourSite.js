$(function(){
	console.log('文档准备就绪');
	var url = document.location.href;
	var filename = url.split('/').pop();
	console.log(filename);
	$a = $("[href$='.html']");
	$b = $("[href$='.html?region=0']");
	$c = $("[href$='.html?region=1']")
	console.log($a);
	// $navItem = $a.parent().addClass("active");
	$navItem1 = $a.parent("li").addClass("active");
	$navItem2 = $b.parents("li").addClass("active");
	$navItem3 = $c.parents("li").addClass("active");
	
	console.log($navItem1);
	console.log($navItem2);
	console.log($navItem3);
	
})

$(function(){
	// 激活弹出框
	$('#contactLink').popover({
		animation:true,
		html:true,
		// container:"body",
		content:"<img src='/TourSite/img/myWechat.png' style='width:100px;height:100px'>"
	});
	
})