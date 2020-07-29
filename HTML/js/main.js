
//  <!-- Скрипт скрытия уведомления .alert , при нажатии на кнопку .alert__close -->
        $(document).ready(function(){
            $(".alert__close").click(function(){
                $(".alert").toggleClass("hide"); return false;
            });
        });;



function print_doc(){
window.print() ;
}
