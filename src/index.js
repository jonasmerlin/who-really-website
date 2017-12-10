/* eslint-disable no-console */

import greeter from './greeter'

const midPart = $('.mid-part')
const forms = $('.forms')

$( '#fileForm' ).submit( function( event ) {
    event.preventDefault();

    const $form = $( this )
    const url = $form.attr( "action" )

    forms.detach()

    appendSpinnerTo( midPart )

    // source: http://portfolio.planetjon.ca/2014/01/26/submit-file-input-via-ajax-jquery-easy-way/
    let request = $.ajax( {
      url: url,
      type: 'POST',
      data: new FormData( this ),
      processData: false,
      contentType: false
    } )

    request.done( data => {
      console.log(data)
      midPart.empty()
      appendPortraitDescriptionTo( midPart, data )
    })

    request.fail( data => {
      midPart.empty()
      forms.appendTo( midPart )
      $(input).addClass('is-error')
      $(inputContainer + ' .form-input-hint').remove()
      appendInputHintTo( $(inputContainer), data.responseJSON.error )
    })

})

$( "#urlForm" ).submit(function( event ) {

  event.preventDefault();

  const $form = $( this )
  const url = $form.attr( "action" )

  forms.detach()

  appendSpinnerTo( midPart )

  let request = $.post( url, $form.serialize() );

  request.done( data => {
    console.log(data)
    midPart.empty()
    appendPortraitDescriptionTo( midPart, data )
  })

  request.fail( data => {
    midPart.empty()
    forms.appendTo( midPart )
    $('#urlInput').addClass('is-error')
    $('#urlInputContainer .form-input-hint').remove()
    appendInputHintTo( $('#urlInputContainer'), data.responseJSON.error )
  })

})

let appendPortraitDescriptionTo = (element, data) => {
  const text = `This portrait is clearly of a ${data.gender}, ${data.ethnicity} Person`
  let description = $( "<p></p>", {
    text: text
  } )
  description.appendTo( element )
  let linkBack = $( "<a></a>", {
    text: "I'm offended, let me try again."
  } )
  linkBack.click(e => {
    restoreOriginalForm()
  })
  linkBack.appendTo( element )
}

let appendSpinnerTo = element => {
  let spinner = $( "<div></div>" )
  spinner.addClass( 'loading' )
  spinner.appendTo( element )
}

let appendInputHintTo = (element, text) => {
  let inputHint = $( "<p></p>", {
    text: text
  } )
  inputHint.addClass('form-input-hint')
  inputHint.appendTo( element )
}

let restoreOriginalForm = () => {
  midPart.empty()
  midPart.append(forms)
}
