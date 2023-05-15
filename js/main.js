
$(document).ready(function(){
    // nav menu
    $('.header .main_menu:first').mouseenter(function(){
        $('.depth2 , .gnb_bg').stop().slideDown()
    })
    $('.header .main_menu:first').mouseleave(function(){
        $('.depth2 , .gnb_bg').stop().slideUp()
    })

    


    // brow 
    let browBox = $('.brow-boxs .box')

    browBox.mouseenter(function(){
        $(this).find('.slide').stop().slideDown()
    });
    browBox.mouseleave(function(){
        $(this).find('.slide').stop().slideUp()
    });

    // $('#brow .brow-boxs .box').mouseenter(function(){
    //     $('.box .slide').stop().slideDown()
    // })
    // $('#brow .brow-boxs .box').mouseleave(function(){
    //     $('.box .slide').stop().slideUp()
    // })


})

var swiper = new Swiper(".viausl_Swiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// best items - 모바일 swiper 
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
    
 //brow more - 모바일 
 $('.brow-boxs a').click(function(e){
    e.preventDefault();
    $(this).toggleClass('open')
    $(this).siblings('.brow-info').toggleClass('open')
    // $('.mb-nav').toggleClass('mb-nav-open')
    
})


  //brow more - 모바일 
  $('.btn').click(function(e){
    e.preventDefault();
    $('.btn').toggleClass('btn-open')
    $('.more').toggleClass('more-open')
    // $('.mb-nav').toggleClass('mb-nav-open')
    
})


// tabmenu 

$(function () {
    const tabAnchor = $('.tabs-nav li a'),
        tabPanel = $('.tabs-panel')

    //링크를 클릭했을 때 할일
    tabAnchor.click(function(e){
        e.preventDefault();
        //내가 클릭한 탭메뉴의 a태그만 active추가
        tabAnchor.removeClass('active');
        $(this).addClass('active');

        tabPanel.hide(); //display: none;
        let target = $(this).attr('href')
        $(target).show();//display : block;
        
        $('.tabs-panel').addClass('tabs-panel-open')
        $(this).removeClass('tabs-panel-open')
        // $(this).addClass('on').siblings().removeClass('on')

    })
    tabAnchor.eq(0).trigger("click")

});

//tab menu breakpoint 1432px 
$(function () {
    const tabAnchor2 = $('.mb-tabs li a'),
        tabPanel2 = $('.mb-tab-panel')

    //링크를 클릭했을 때 할일
    tabAnchor2.click(function(e){
        e.preventDefault();
        //내가 클릭한 탭메뉴의 a태그만 active추가
        tabAnchor2.removeClass('active');
        $(this).addClass('active');

        tabAnchor2.removeClass('on');
        $(this).addClass('on');

        tabPanel2.hide(); //display: none;
        let target = $(this).attr('href')
        $(target).show();//display : block;
        
        $('.mb-tab-panel').addClass('mb-tabs-panel-open')
        $(this).removeClass('mb-tabs-panel-open')
        // $(this).addClass('on').siblings().removeClass('on')

    })
    tabAnchor2.eq(0).trigger("click")

});

//moblie tabmenu 
$(document).ready(function() {
    
    $(".mb-tabs li ").click(function() {
      var idx = $(this).index();
      $(".mb-tabs li").removeClass("on");
      $(".mb-tabs li").eq(idx).addClass("on");
      $(".tab_cont > .tabname").hide();
      $(".tab_cont > .tabname").eq(idx).show();
    })
  });








  //모바일 메뉴 기능 
    //.mb-bt 를 저장해서 활용하자
    $('.mb-bt').click(function(e){
        e.preventDefault();
        // .mb-bt = this 로 대신사용 가능
        $('.mb-bt').toggleClass('mb-bt-open')
        $('.mb-menu-mask').toggleClass('mb-menu-mask-active')
        $('.mb-nav').toggleClass('mb-nav-open')
        $('.mb-menu>li').height(54)
    })
    //화면사이즈체크
    $(window).resize(function(){
        //윈도우 너비를 체크해줌
        let temp = $(window).width();
        // console.log(temp);
        if(temp > 1400){
            $('.mb-bt').removeClass('mb-bt-open')
        $('.mb-menu-mask').removeClass('mb-menu-mask-active')
        $('.mb-nav').removeClass('mb-nav-open')
        }else {
            $('.all-menu-wrapper').removeClass('all-menu-wrapper-active')
            $('.all-menu-mask').removeClass('all-menu-mask-active')
        }
        })
    //모바일 메뉴 펼치기
    //1. 모바일 메뉴 불러오기
    const mb_mainmenu = $('.mb-mainmenu')
    //2. 모바일 서브메뉴 불러오기
    const mb_submenu = $('.mb-submenu')
    //3. 펼쳐진 서브메뉴의 높이값
    // 모바일 하이트는 배열로 선언되어져있음  
    let mb_submenu_height = [];
    
    
    //4. 높이값 계산을 실행
    // 배열명.forEach(function(item,index){할일})    
        // $.each(배열명,function(index, item){할일})
        $.each(mb_submenu, function(index){
            //각가의 .mb-submenu로 가서 11의 갯수를 파악한다. 
            let count = $(this).find('li').length;
            // console.log(count)
            //최종결과저장 (51px * count +22)
            mb_submenu_height[index]=43*count+22;
        })
        // console.log(mb_submenu_height)
        let mb_li = $('.mb-menu > li')
        $.each(mb_mainmenu, function(index){
            $(this).click(function(e){
                e.preventDefault();
               
                //mb-mainmenu-open이 있으면 펼치고 없으면 닫기
                $(this).toggleClass('mb-mainmenu-open')
                $(this).parent().siblings().children().removeClass('mb-mainmenu-open')
                let active = $(this).hasClass('mb-mainmenu-open')
                if(active) { 
                    //클릭된 li>a (depth1)의 ul의 높이값을 temp에 저장
                    let temp = mb_submenu_height[index]
                    //해당요소의 높이부여
                    mb_li.eq(index).height(temp+43)
                    mb_li.eq(index).siblings().height(43);
                }else {
                    //클릭이 안된경우 
                    mb_li.eq(index).height(43)
                }
            })
        })
        //모바일 메뉴 배경을 클릭시 사라짐 
        const mb_menu_mask = $('.mb-menu-mask')
        mb_menu_mask.click(function(){
            //모바일 버튼 기능 초기화
            $('.mb-bt').removeClass('mb-bt-open')
            $('.mb-menu-mask').removeClass('mb-menu-mask-active')
            $('.mb-nav').removeClass('mb-nav-open')
            $('.mb-menu>li').height(54)
            $('.mb-mainmenu').removeClass('mb-mainmenu-open')
        })