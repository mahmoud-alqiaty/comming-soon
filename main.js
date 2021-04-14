var subscribe_form = document.querySelector('.subscribe-form')
var email = document.querySelector('.subscribe-form input')
var err_icon = document.querySelector('.subscribe-form .err-icon')
var send_btn = document.querySelector('.subscribe-form .btn')
var err_message = document.querySelector('.subscribe-form .err-message')

subscribe_form.addEventListener('submit', function(e){
    if(email.value==="" || email.value.search('@')<0){
        e.preventDefault()
        err_message.style.display = "block";
        err_icon.style.display = "inline-block";
    }
})
// subscribe_form.onsub
