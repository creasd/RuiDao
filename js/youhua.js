// 顶部咨询栏
$('.con-head>div:nth-child(2)>a').bind({mouseover:function(){
	$(this).siblings('div').css('display','block');
},mouseout:function(){
	$(this).siblings('div').css('display','none');
}})	
// 顶部咨询栏结束
// 导航栏
window.onload=function(){
	var t1=document.createElement('div');
	t1.className='acti';
	$('.navbar-right>li')[1].appendChild(t1);
	$($('.navbar-right>li')[1]).children('a').css('color','rgb(229,0,12)');
	$($('.classify>ul>li')[1]).css('backgroundColor','rgb(229,0,12)');
	$($('.classify>ul>li')[1]).children('a').css('color','white');
}
$('.navbar-right>li').bind({mouseover:function(){
	if(this!=$('.navbar-right>li')[1]){
		var tmp=document.createElement('div');
		tmp.className='act';
		$(tmp).stop().animate({
			width:'40px'
		},500)
		this.appendChild(tmp);
	}
	$(this).children('a').css('color','rgb(229,0,12)');
},mouseout:function(){
	$('.act').stop().animate({
		width:'0px'
	},200,function(){
		$(this).remove();
	})
	$('.navbar-right>li>a').css('color','black');
	$($('.navbar-right>li')[1]).children('a').css('color','rgb(229,0,12)');
}})
// 导航栏结束
// 分类栏
$('.classify>ul>li').bind({mouseover:function(){
	$(this).css('backgroundColor','rgb(229,0,12)');
	$(this).children('a').css('color','white');
},mouseout:function(){
	$('.classify>ul>li').css('backgroundColor','white');
	$('.classify>ul>li').children('a').css('color','black');
	$($('.classify>ul>li')[1]).css('backgroundColor','rgb(229,0,12)');
	$($('.classify>ul>li')[1]).children('a').css('color','white');
}})
// 分类栏结束
// 解决栏
var swiper1 = new Swiper('.solve .swiper-container', {
  slidesPerView: 5,
  spaceBetween: 70,
  // init: false,
   pagination: {
        el: '.solve .swiper-pagination',
        clickable: true,
      },
  breakpoints: {
  	1130:{
  	  slidesPerView: 4,
      spaceBetween: 70,
  	},
    1024: {
      slidesPerView: 3,
      spaceBetween: 70,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  }
});
// 解决栏结束
// 选择栏
var swiper2 = new Swiper('.select .swiper-container', {
  slidesPerView: 5,
  spaceBetween: 70,
  // init: false,
   pagination: {
        el: '.select .swiper-pagination',
        clickable: true,
      },
  breakpoints: {
  	1130:{
  	  slidesPerView: 4,
      spaceBetween: 70,
  	},
    1024: {
      slidesPerView: 3,
      spaceBetween: 70,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  }
});
// 选择栏结束
// 分析栏
$('.teama>ul>li:first-child').click(function(){
	$(this).siblings().toggleClass('teama-active');
})
// 分析栏结束