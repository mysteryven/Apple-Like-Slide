let $imgs = $(imgs)
let $allButtons = $('#allButtons>span');
let len = $allButtons.length
let n = 0;
let timer;

init();
autoSlide();



// 工具函数
function init() {
  for (let i = 0; i < len; i++) {
    $allButtons.eq(i).on('click', (e)=> {
      let index = $(e.currentTarget).index();
      $(e.currentTarget).addClass('active').siblings('.active').removeClass('active')
      $imgs.css( {
        'transform': 'translateX(' + -920*index + 'px)'
      })
      n = index;
    })
  }
}
function autoSlide() {
  generatorTimer(); 
  $imgs.on('mouseenter', ()=>{
    window.clearInterval(timer);
  });
  $imgs.on('mouseleave', ()=> {
    generatorTimer();
  })
}
function generatorTimer() {
  timer = setInterval(()=>{
    n = getN(n)
    $allButtons.eq(n).click();
    n++;
  },3000) 
}

function getN(n) {
  return  n % len;
}
