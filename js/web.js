$(function () {
    var bgdata = "";
    const domm = document.querySelector("#shopBanner");
    const swiperShop = new Swiper('#shopBanner .swiper', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 4000
        },

        pagination: {
            el: '#shopBanner .swiper-pagination',
            type: 'fraction'
        },

        navigation: {
            nextEl: '#shopBanner .swiper-button-next',
            prevEl: '#shopBanner .swiper-button-prev',
        },
        on: {
            // slideChange: function () {
            //     //이전 스와이퍼와 새로 들어오는 스와이퍼의 변화이벤트임 그래서 swiper 회전 2회때 2번 실행되어버림
            //     console.log(this.activeIndex);
            //     console.log("이벤트선정을 잘못된 것같아", this.realIndex);
            //     realIndex 가 내가 찾던 변수임을 확인 / 2번실행되는 것을 수정하려면 realIndexChange 이벤트를선정함
            // },
            // init: function () {

            //     domm.style.backgroundColor = this.slides[0].dataset.color;
            // },
            realIndexChange: function () { // realindex가 바뀔때마다이므로 찾던 이벤트이름은 이것이다.
                console.log("realIndexChange", this.realIndex);

                domm.classList = "realIndex" + this.realIndex;
            }
        }

    });

    // swiperShop.on('slideChange', function () {
    //     console.log(swiperShop.slides[this.realIndex].dataset.color, this, this.realIndex)

    // });

    var togglestatu = true; // var로 변수선언을 해줄것 다른 스코프에서 쓰일 예정이므로

    document.querySelector(".toggle").addEventListener("click", function () {

        this.classList.toggle('stop');
        // this가 태그객체임이 확인되어 그대로 클래스를 주었다가 빼았다가 함

        togglestatu = this.classList.contains('stop');
        // 클래스명이 포함되어 있으면 true, 아니면 false

        if (togglestatu) {
            swiperShop.autoplay.stop();
            // 반드시  swiper변수명을 var 로 수정할 껏
            // const 로 선언된 변수를 인식할 수가 없음 
            // 인식 범위가 넓은 var로 수정해야만 실행됨
        } else {
            swiperShop.autoplay.start();
        }

    })

})
