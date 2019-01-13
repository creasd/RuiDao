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
//服务领域
var sw = document.querySelectorAll('.swiper-slide.sec'),
	hList = document.querySelectorAll('.swiper-slide.sec h3');
function service(){
	for(var i=0;i<sw.length;i++){
		sw[i].index=i;
		sw[i].onmouseover=function(){
			for(var j=0;j<hList.length;j++){
				hList[j].style.color="#333";
			}
				hList[this.index].style.color='#e5000c'
		}
	}
}
//合作伙伴
$(function(){
  	var aLi = $('.smlicon ul li');
 	var oImg;
  	aLi.hover(function(){
   		oImg = $(this).find('.imgBox');
    	oImg.stop().animate({
      		top:-100
    	},200)
  	},function(){
    	oImg.stop().animate({
      		top:0
    	},200);
  	})
})
//swiper
function swiper01(){
	var swiper = new Swiper('.em1',{
		spaceBetween: 30,
	    centeredSlides: true,
	    autoplay: {
	      delay: 2500,
	      disableOnInteraction: false,
	    },
	    pagination: {
	      el: '.em2',
	      clickable: true,
	  },
	})
}

function swiper02(){
    var swiper = new Swiper('.em3', {
      slidesPerView: 4,
      spaceBetween: 40,
      pagination: {
        el: '.em4',
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }
    });
}
function swiper03(){
	var res=["网站案例","网站营销","微信小程序"];
    var swiper = new Swiper('.tabs1', {
      pagination: {
        el: '.tabs2',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + res[index] + '</span>';
        },
      },
    });
}
function swiper04(){
	var swiper = new Swiper('.em5', {
      slidesPerView: 5,
      spaceBetween: 24,
      // init: false,
      pagination: {
        el: '.em6',
        clickable: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        762: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        500: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
}
navbar();
swiper01();
swiper02();
swiper03();
service();
swiper04()