const socket = io('ws://127.0.0.1:6000')

/// this function sends a post request and waits for the response via socket
function otpRequest(){
    let number = numDoc.value;
    fetch('http://127.0.0.1:6000',{
        method : 'POST',
        body : JSON.stringify({
            To : '7550021083' 
        })
    }).then(console.log);

}

const numDoc = document.querySelector('#number-field')
const sendbutton = document.querySelector('#send-otp')
sendbutton.addEventListener('click',otpRequest);