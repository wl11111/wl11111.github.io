//初始化首页
//重磅推荐图片初始化
$.ajax({
	type:"get",
	url:"https://api.douban.com/v2/book/search?callback=?",
	async:true,
	dataType:'jsonp',
	data:{
		q:'月关',
		start:0,
      count: 3
	},
	success:function(data){
		if(data.books.length != 0){
			$('.t-fj1 img').attr('src',data.books[0].image);
			$('.t-fj2 img').attr('src',data.books[1].image);
			$('.t-fj3 img').attr('src',data.books[2].image);
			$('.t-fj1 h4').html(data.books[0].title);
			$('.t-fj2 h4').html(data.books[1].title);
			$('.t-fj3 h4').html(data.books[2].title);
			$('.t-fj1 p').html(data.books[0].author);
			$('.t-fj2 p').html(data.books[1].author);
			$('.t-fj3 p').html(data.books[2].author);
			$('.t-fj1').attr('id',data.books[0].id);
			$('.t-fj2').attr('id',data.books[1].id);
			$('.t-fj3').attr('id',data.books[2].id);
			$('.t-fj1').attr('title',data.books[0].title);
			$('.t-fj2').attr('title',data.books[1].title);
			$('.t-fj3').attr('title',data.books[2].title);
		}
	}
});
//重磅推荐列表初始化
$.ajax({
	type:"get",
	url:"https://api.douban.com/v2/book/search?callback=?",
	async:true,
	dataType:'jsonp',
	data:{
		q:'步步高升',
		start:0,
      count: 8
	},
	success:function(data){
		if(data.books.length != 0){
			var txt = '';
			for(var i=1;i<5;i++){
				txt += `<li id="${data.books[i].id}" title="${data.books[i].title}">
								<a href="javascript:;">
									<h4>${data.books[i].title}</h4>
									<p>${data.books[i].summary}</p>
								</a>
							</li>`;
			};
			$('.m-book-item').html(txt);
			//点击重磅推荐列表，跳转到书籍详情
			$('.m-book-item li').click(function(){
				window.location.href = 'html/bookdev.html#'+$(this).attr('id')+'/'+$(this).attr('title');
			})
		}
	}
});
//都市爽文，近身保镖
$.ajax({
	type:"get",
	url:"https://api.douban.com/v2/book/search?callback=?",
	async:true,
	dataType:'jsonp',
	data:{
		q:'近身保镖',
		start:0,
      count: 1
	},
	success:function(data){
		if(data.books.length != 0){
			var txt = `<a id="${data.books[0].id}" title="${data.books[0].title}" href="javascript:;" class="clearfix">
							<img src="${data.books[0].image}" alt="" />
							<h3>${data.books[0].title}</h3>
							<p class="single-f1">${data.books[0].author[0]}/都市生活</p>
							<p class="single-f2">乞丐机缘成为女神的保镖，从此踏入纸醉金迷的都市。</p>
						</a>`;
			
			$('.m-book-single').html(txt);
			//都市爽文，点击近身保镖，跳转到书籍详情
			$('.m-book-single a').click(function(){
				window.location.href = 'html/bookdev.html#'+$(this).attr('id')+'/'+$(this).attr('title');
			})
		}
	}
});
//经典排行榜初始化
$.ajax({
	type:"get",
	url:"https://api.douban.com/v2/book/search?callback=?",
	async:true,
	dataType:'jsonp',
	data:{
		q:'心里',
		start:0,
      count: 8
	},
	success:function(data){
		if(data.books.length != 0){
			var txt = '';
			for(var i=0;i<3;i++){
				txt += `<li id="${data.books[i].id}" title="${data.books[i].title}">
								<i>${i+1}</i>
								<a class="j-gap" href="javascript:;">
									<img src="${data.books[i].image}" />
								</a>
								<a class="j-gap2" href="javascript:;">
									<h4>${data.books[i].title}</h4>
									<p>${data.books[i].author}</p>
								</a>
							</li>`;
			};
			$('.m-book-list2').html(txt);
			//点击，跳转到书籍详情
			$('.m-book-list2 li').click(function(){
				window.location.href = 'html/bookdev.html#'+$(this).attr('id')+'/'+$(this).attr('title');
			})
		}
	}
});

