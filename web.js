$(document).ready(function()
{
	//PHẦN 1: Jquery cho PHẦN BACKGROUND khi đã onload()
	$('.boxmodal').addClass('hienra');

	$('.momo').addClass('hienra1');

	var x = setInterval(function()
	{
		$('.boxmodal').removeClass('hienra');

		$('.momo').removeClass('hienra1');

		clearInterval(x);

	},4000);



	$('button.btn.btn-danger, .momo').on('click',function()
	{
		$('.boxmodal').removeClass('hienra');

		$('.momo').removeClass('hienra1');
	});
	//Hết phần 1


	//Jquery cho tooltip(): 
	//Không sử dụng được chung với JqueryEasing
	//$('[data-toggle="tooltip"]').tooltip();
	


	//Jquery cho Easing:
	$('.col-md-9.col-xs-8 ul li#menu-item:nth-child(5) a').on('click',function()
	{
		$("html,body").animate({scrollTop: $('.session1').offset().top}, 1800,   "easeOutBack");
	});

	$('.col-md-9.col-xs-8 ul li#menu-item:nth-child(3) a').on('click',function()
	{
		$("html,body").animate({scrollTop: $('.session2').offset().top}, 1800,   "easeOutBack");
	});

	$('.col-md-9.col-xs-8 ul li#menu-item:nth-child(4) a').on('click',function(){
		$("html,body").animate({scrollTop: $('.session5').offset().top}, 1800, "easeOutBounce");
	});

	$('.col-md-9.col-xs-8 ul li#menu-item:nth-child(2) a').on('click',function(){
		$("html,body").animate({scrollTop: $('.session6').offset().top}, 1800, "easeInOutCubic");
	});

	$('.scrollToTop img').on('click',function()
	{
		$("html,body").animate({scrollTop:0},1800,"easeInOutExpo");
	})

	//Jquery cho Isotope:

	$('.content').isotope({
		itemSelector: 'li' 
	});

	$('#header1 nav ul li a').click(function()
	{
		//Lấy data của phần tử đang chọn
		var danhmuc= $(this).data('danhmucanh');

		//Lấy tên của phần tử
		var ten = $(this).text();

		//Gán vào h1
		$('.session3 h1').text(ten);


		//Cách 1: duyệt từng phần tử
		//$('.content ul li ').each(function()
		//{
		//	return false;
		//	if ($(this).hasClass(danhmuc)) 
		//	{
				//$(this).fadeIn(300);
		//	}
		//	else
		//	{
		//		$(this).fadeOut(300);
		//	}
		//});

		//Cách 2: Dùng filter của isotope
		if (danhmuc=='all') 
		{
			$('.session3 h1').text("Xem tất cả");
			$('.content').isotope({filter: '*'});
		}
		else
		{
			$('.session3 h1').text(ten);

			$('.content').isotope({filter:danhmuc});
		}



		return false;
		
	});

 
	TweenMax.staggerFrom($('.lopngoai'),2,{top:100,opacity:0},0.3)


	$('#colored-button .btn').click(function(){
		$(this).offset({top:2400})

		$('.containersession7 .loadmore').addClass('loadxuong');
	});

	/*
	Waves.attach('.col-md-7 col-xs-4 a', [ 'waves-light']);
	*/
	/*
	Snarl.setDefaultOptions({timeout: 5000});

	$('.btn btn-info').click(function()
	 {
        Snarl.addNotification({
            title: 'Snarl Notification',
            text: 'You clicked the Waves button!'
        });
    });
    */
});