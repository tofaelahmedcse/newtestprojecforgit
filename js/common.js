;
(function ($) {
    $(function () {

        // Begin input common focus and blur for value.
        var input = $('input:text, input:password,input[type="email"],input[type="tel"],input[type="number"],input[type="search"], textarea'); function inputValueRemover(){ $(input).focus(function () { if (this.value == this.defaultValue) { this.value = ''; } }).blur(function () { if (!this.value) { this.value = this.defaultValue; $(this).parent().removeClass('active'); } else { $(this).parent().addClass('active'); } }); } function inputPlaceholderRemover(){ $(input).each(function () { var inputText = $(this).attr('placeholder'); $(this).focus(function () { if ($(this).val().length === 0) { $(this).attr('placeholder', ''); } }).blur(function () { if ($(this).val().length === 0) { $(this).attr('placeholder', inputText); $(this).parent().removeClass('active'); } else if ($(this).val().length > 0) { $(this).parent().addClass('active'); } }); }); } if($(input).length){ inputValueRemover(); } if($(input).attr('placeholder')){ inputPlaceholderRemover(); }
        // End input common focus and blur for value.



        //sticky-footer
        function stickyFooter(selector) {
            var getFooterHeight = $(selector).parents('body').find('footer').outerHeight();
            function stickyfun(selector) {
                if (selector.length && $(window).width() > 767) {
                    $(selector).parents('html').addClass('sticky');
                    $(selector).parents('html').find('.main-wrap').css({
                        'padding-bottom': getFooterHeight
                    });
                }
            }
            stickyfun(selector);
            $(window).resize(function () {
                var footerHeight = $('.sticky').find('footer').outerHeight();
                $('.sticky').find('.main-wrap').css({
                    'padding-bottom': footerHeight
                });
            });
        }

        //call like this
        //stickyFooter('.main-wrap');
        
        // phone navigation
        if($(window).width() < 992 ){
            $('.js-nav-bar').on('click', function(){
                $('body').toggleClass('navOpen');
                $('.nav-wrap').slideToggle();
            });
        }
        
        if($(window).width() < 768 ){
            $('.js-nav-bar').on('click', function(){
                $('body').toggleClass('navOpen');
                $('.js-shutter').slideToggle();
            });
        }
        
        
        $(".nav-wrap > ul > li").find(">ul").parent().addClass("subnav");
        
        $("#search-triger").click(function(){
            $("#search-field-wrap").slideToggle();
        })
        
        $(".nav-wrap > ul > li.subnav > a").click(function(e){
            $(this).parent().find("ul").slideToggle();
        })
        
        
    }) // End ready function.
    
    
    
    
})(jQuery)

