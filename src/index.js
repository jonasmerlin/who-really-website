/* eslint-disable no-console */

import greeter from './greeter'

console.log($('#urlToUpload'));

console.log(greeter())

$('#urlButton').click(e => {
  e.preventDefault()
  // $.ajax({
  //     type: "POST",
  //     url: 'https://who-really.herokuapp.com/classification/portrait/url',
  //     crossDomain:true,
  //     success: function(data, status, xhr) {
  //         console.log(data);;
  //     }
  // })
  $.post( "https://who-really.herokuapp.com/classification/portrait/url", $( "#urlForm" ).serialize() )
  .done(data => {
   console.log(data);
  })
  replaceContent()
})

const replaceContent = function() {



  let midElement = $('.mid-part').empty(newBody)
  let newBody = $( "<div></div>" )
  .addClass( 'loading' )
  .on({
    touchstart: function( event ) {
      // Do something
    }
  })
  .appendTo( midElement )

  setTimeout(() => {
    midElement.empty()
    let newBody = $( "<div></div>", {
      text: 'Go to Google!'
    })
    .on({
      touchstart: function( event ) {
        // Do something
      }
    })
    .appendTo( midElement )
    .hide()
    .fadeIn( "slow" )
  }, 2000)

}
