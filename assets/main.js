$(document).on('ready', function () {
  setScreenHeight()
})

$(window).on('resize', function () {
  setScreenHeight()
})

function setScreenHeight () {
  $('.screen-height').height($(window).height())
}
