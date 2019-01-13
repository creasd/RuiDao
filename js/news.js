var  lis = document.querySelectorAll('.move'),
	 lines= document.querySelectorAll('.nav-bar_ul_lines');
var step=2;
var t1,t2;
//导航条
function navbar(){
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;	
		lis[i].onmouseover=function(e){
			clearInterval(t1);
			// this.style.color='#e5000c';
			var _this = this;
			for(var j=0;j<lines.length;j++){
				lines[j].style.width=0+'px';
			}
			var x=0;
			t1 = setInterval(function(){
				x +=step;
				lines[_this.index].style.width=x+'px';
				if(x>=32){
					clearInterval(t1);
				}
			},20)
		}
		lis[i].onmouseout=function(e){
			clearInterval(t2);
			// this.style.color='#333';
			var _this = this;
			for(var j=0;j<lines.length;j++){
				lines[j].style.width=0+'px';
			}
			var x1=32;
			t2 = setInterval(function(){
				x1 -=step;
				lines[_this.index].style.width=x1+'px';
				if(x1<=0){
					clearInterval(t2);
				}
			},20)
		}
	}
}
//新闻轮播
function swiper_news(){
	var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
}

//初始化
navbar();swiper_news();