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

function swiper03(){
  var pos_n = document.querySelector('.position_now');
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
  var  sp = document.querySelectorAll('.tabs2 span');
  for(var i=0;i<sp.length;i++){
    sp[i].index=i;
    sp[i].onclick=function(){
      pos_n.innerHTML = res[this.index];
    }
  }
}
swiper03();navbar();