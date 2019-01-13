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
	$($('.classify>ul>li')[2]).css('backgroundColor','rgb(229,0,12)');
	$($('.classify>ul>li')[2]).children('a').css('color','white');
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
	$($('.classify>ul>li')[2]).css('backgroundColor','rgb(229,0,12)');
	$($('.classify>ul>li')[2]).children('a').css('color','white');
}})
// 分类栏结束