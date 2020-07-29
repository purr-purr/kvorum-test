
//  <!-- Скрипт скрытия уведомления .alert , при нажатии на кнопку .alert__close -->
        $(document).ready(function(){
            $(".alert__close").click(function(){
                $(".alert").toggleClass("hide"); return false;
            });
        });;



function print_doc(){
window.print() ;
}



// $(function() { 
//     var reCaptchaWidth = 302;
//     var containerWidth = $('.recaptcha').width(); 
//     if(reCaptchaWidth > containerWidth) {
//         var reCaptchaScale = containerWidth / reCaptchaWidth;
//         $('.g-recaptcha').css({
//             'transform':'scale('+reCaptchaScale+')',
//             'transform-origin':'left top'
//         });
//     }                
// });  


// function changeCapthaSize() {
//     var reCaptchaWidth = 302;
//     var containerWidth = $('.recaptcha').width();
//     if(reCaptchaWidth > containerWidth) {
//         var reCaptchaScale = containerWidth / reCaptchaWidth;
//         $('.g-recaptcha').css({
//             'transform':'scale('+reCaptchaScale+')',
//             'transform-origin':'center top'
//             });
// }
// };

// $(window).ready(function(){
// changeCapthaSize();
// });
// $(window).resize(function(){
// changeCapthaSize();
// });