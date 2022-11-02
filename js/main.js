const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if (window.scrollY > 500){
        //배지 숨기기
        //gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        }); 

        // 스크롤 버튼 보이기!
        gsap.to(toTopEl, .2, {
            x: 0
        });
    } else{
        //배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        }); 

        // 스크롤 버튼 숨기기 !
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }

}, 300));
// _.throttle(함수, 시간)


toTopEl.addEventListener('click', function () {
    gsap.to(window, .5, {
        scrollTo: 0 // 0은 화면 맨첨을 .7초동안 위로 올라가게 만든다
    });
});




const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7초 뒤에 html순서대로 생김, 인덱스+1 하는 이유는 0*.7은 0이기 때문에
        opacity: 1
    })
});


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});
new Swiper('.promotion .swiper', {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 수
    spaceBetween: 10, // 슬라이드 사이 여백px
    centeredSlides: true, // 1번 슬라이드가 가운데(왼쪽이 아니라)
    loop: true,
    autoplay: {
        delay: 4000, // 5s
    },
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어
    },
    navigation: {
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }

});

new Swiper('.awards .swiper', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5, // 보여지는 슬라이드 갯수
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion  //느낌표는 반대라서 반복
    if (isHidePromotion) {
        // 숨김 처리!
        promotionEl.classList.add('hide')
    } else {
        // 보임 처리!
        promotionEl.classList.remove('hide')
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

// .querySelector 메소드  isHidePromotion 변수

function floatingObject(selector, delay, size){
    //gsap.to(요소, 시간 , 옵션);
    gsap.to(selector, //선택자
        random(1.5, 2.5), 
        { //옵션
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay) // 몇초 뒤에 애니메이션을 시작하겠다
    });
}
//위에 floatingObject(selector, delay, size) << 여기서 정확히 명시
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
        triggerHook: .8, // 스크롤 처음이0이고 끝이1일때 대충80퍼 지점
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
