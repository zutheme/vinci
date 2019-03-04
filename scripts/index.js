$('.single-item').slick({
    slidesToShow: 1,
    dots:true,
    slidesToScroll: 1,
    asNavFor: '.homepage__slider-footer',
    prevArrow:`<div class="homepage__pre-button"><img src="./assets/images/arrow.png"/></div>`,
    nextArrow:`<div class="homepage__next-button"><img src="./assets/images/arrow.png"/></div>`
});

$('.homepage__slider-footer').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.single-item'
});


$(".homepage__tab-panel").on("click" , function(e){
    var id = $(this).attr("data-id");
    $(".homepage__tab-panel").removeClass("active");
    $(this).addClass("active");
    $(".homepage__tab-content").hide();
    $("#" + id).show();
    $("#" + id).css("visibility","hidden");
    $('.single-item').slick('setPosition');
    $('.homepage__slider-footer').slick('setPosition');
    // $(".homepage__next-button.slick-arrow").click();
    setTimeout(function(){
        $("#" + id).css("visibility" ,"visible");
    },500)
});

$(".homepage__tab-panel[data-id='1']").click();