
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: false, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
	    dynamicBullets: true,
		dynamicMainBullets: 2
    },
       on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
      } ,
	},
  });        
  
  
//   //左右灯笼
//   $("img:nth-child(3)").slideToggle(2000);
//   $("img:nth-child(4)").slideToggle(2000);
// 