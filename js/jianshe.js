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
	$($('.classify>ul>li')[0]).css('backgroundColor','rgb(229,0,12)');
	$($('.classify>ul>li')[0]).children('a').css('color','white');
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
	$($('.classify>ul>li')[0]).css('backgroundColor','rgb(229,0,12)');
	$($('.classify>ul>li')[0]).children('a').css('color','white');
}})
// 分类栏结束
// 建设栏
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 20,
  // init: false,
   pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  }
});
$('.swiper-slide').bind({mouseenter:function(){
	$(this).children('.hidd').stop().animate({
		top:'0'
	},300)
},mouseleave:function(){
	$(this).children('.hidd').stop().animate({
		top:'100%'
	},300)
}})
// 建设栏结束
// 合作栏
$('.teama>ul>li:first-child').click(function(){
	$(this).siblings().toggleClass('teama-active');
})
// 合作栏结束