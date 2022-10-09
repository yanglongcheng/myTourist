$(function(){
	var contentHtml = '<div class="card border-0" style="width: 18rem;">'
					+'<div class="card-body">'
					+'<h5 class="card-title">星级酒店</h5>'
					+'<a href="#" class="card-link">酒店维护</a>'
					+'<a href="#" class="card-link">添加酒店</a>'
					+'</div>'
					+'</div>'
					+'<div class="card border-0" style="width: 18rem;">'
					+'<div class="card-body">'
					+'<h5 class="card-title">民宿</h5>'
					+'<a href="#" class="card-link">民宿维护</a>'
					+'<a href="#" class="card-link">添加民宿</a>'
					+'</div>'
					+'</div>';
	$('#hotelManagement').popover({
		html:true,
		placement:'right',
		content: contentHtml		
	}).children().click(function(e) {
		e.preventDefault();
	})	
})

$(function(){
	var url = document.location.href;
	var array = url.split("/");
	var index = array.indexOf("TSMSys");
	var navName = array[index+1];
	var idSelector = "#" + navName;
	$(idSelector).children('.collapse').addClass("show").siblings().removeClass("bi-caret-right-fill").addClass("bi-caret-down-fill");
	console.log(navName);
	
	// 切换图标
	$('.collapse').on('hide.bs.collapse show.bs.collapse', function(e){
		var $this = $(this);
		$this.prev().toggleClass(["bi-caret-right-fill","bi-caret-down-fill"])
	})
})