var subscribe_form = document.querySelector('.subscribe-form')
var email = document.querySelector('.subscribe-form input')
var err_icon = document.querySelector('.subscribe-form .err-icon')
var send_btn = document.querySelector('.subscribe-form .btn')
var err_message = document.querySelector('.subscribe-form .err-message')

email.onfocus = function(){
    this.parentElement.style.border = "2px solid hsl(0, 93%, 68%)"
}
email.onblur = function(){
    this.parentElement.style.border = "0.5px solid hsl(0, 36%, 70%)"
}

subscribe_form.addEventListener('submit', function(e){
    if(email.value==="" || email.value.search('@')<0){
        e.preventDefault()
        err_message.style.display = "block";
        err_icon.style.display = "inline-block";
    }
})
