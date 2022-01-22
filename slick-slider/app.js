//Copi code slick_slider https://kenwheeler.github.io/slick (or not /slick)
//jequyre
$(document).ready(function(){ //mục getting start
    $(".image-slider").slick({
        slidesToShow: 4, // hiện 4 ảnh
        slidesToScroll: 1, // 2 ảnh được lướt giữ lại 2
        infinite: true, // chạy vô tận
        //  infinite: false,// chạy cuôi dừng lại
        // arrows: false, // ẩn pre & next
        graggable: true,
        autoplay: true,  // tự động chạy
        autoplaySpeed: 2000, // 2000 là 2s
        //mũi tên arrow link: slick slider custom arrows -> https://stackoverflow.com/questions/29876185/change-the-arrow-buttons-in-slick-slider
         prevArrow:
             `<button type='button' class='slick-prev pull-left'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
         nextArrow:
             `<button type='button' class='slick-next pull-right'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
             /* đôi " " 2 phía thành ` ` --> vào link https://ionic.io/ionicons tìm arrow -> xóa <i></i> cũ
             ->copy 2 link prev : <ion-icon name="arrow-back-outline"></ion-icon>
                           next : <ion-icon name="arrow-forward-outline"></ion-icon>        
               thêm class slick-arrow để css mũi tên 
             */
        dots: true,/*thanh dấu chấm button để chuyển*/ 
        // responsive trên tablet & mobile ---------------------
        responsive:[
            {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 3,
                //   slidesToScroll: 3,
                //   infinite: true,
                //   dots: true
                },
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                //   slidesToScroll: 3,
                //   infinite: true,
                //   dots: true,
                  arrows: false, /*mất nút arrow trên mobile */ 
                  infinite: false, /*không cho chạy vô tận*/ 
                },
            },
        ]
        // ---------------------------------------------------------
    }); // bên trong
});//end function