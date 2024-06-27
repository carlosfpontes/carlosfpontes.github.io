$( document ).ready(function() {

    var is_iOS = /iPad|iPhone|iPod/.test(navigator.platform)
      , eventType = is_iOS ? 'touchend' : 'click'
    $('#startbutton').on(eventType, function() {
      $(this).fadeOut(200, function() { $('#controls').fadeIn(200) })
      Pd.start();
    })

    var patch
    $.get('patches/myPatch.pd', function(mainStr) {
      // Loading the patch
      patch = Pd.loadPatch(mainStr)
      $('#loading').fadeOut(200, function() { $('#startbutton').fadeIn() })
    })

})