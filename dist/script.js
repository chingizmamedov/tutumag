$(function() {
  
  $(".radio").click(function() {
    $('.radio').closest(".radio-label").css({
      border: '1px solid #F3F3F3',
      background: '#fff'
    })
    $('.radio:checked').closest(".radio-label").css({
      border: '1px solid #FC5800',
      background: '#FFF3ED'
    })
  })

  $('.radio-facecont').click(function() { 
    var faceData = $('.radio-facecont:checked').data('face')
    console.log('dacedata', '.' + faceData + '-face')
    $('.faces').hide();
    faceData !== undefined ?
      $('.' + faceData + '-face').show() :
      $('.fiz-face').show();
   })

  $('.additional-title').click(function() {
    $('.additional-content').slideToggle('slow')
  })

})