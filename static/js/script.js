/* 
==============================================
* Hugo Lime - v1.0
==============================================

* Demo: https://demo.uicard.io/hugo-lime-pro/
* Free Version: https://uicard.io/products/hugo-lime
* Premium Version: https://uicard.io/products/hugo-lime-pro

==============================================
* Coded By : UICardio https://uicard.io
==============================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
* Copyright 2018 UICardio
*/

$(document).ready(function(){
  
  //Activating tooltip
  $('[data-toggle="tooltip"]').tooltip();

  //Smooth scroll
  $('a').click(function(){
    var hash = $(this).attr('href').split('#')[1];
    $('html, body').animate({
        scrollTop: $('#' + hash).offset().top
    }, 500);
    return false;
  });

});