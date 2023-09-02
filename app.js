function getPin(){
    // input section 
    let OTP = document.getElementById('input');
    let OTPElement = OTP.value;
    let OTPNumber = parseFloat(OTPElement);
    

    let pin = genratepin();
    let pinString = pin + '';
    let pinNumber = parseFloat(pinString)
    if(pinString.length === 4){
        console.log(typeof pinNumber)
        return OTP.value = pinNumber;
    }else{
      return getPin();
    }
    
}


function genratepin(){
    let Random = Math.round(Math.random()*10000)
    return Random;
}

document.getElementById('genarate-btn').addEventListener('click', function(){
    getPin()
    
})

document.getElementById('calculate').addEventListener('click', function(key){
      let Key = key.target.innerText;
      let Input = document.getElementById('input-field');
      let InputElement = Input.value;
      let InputTotal = InputElement + Key;

      if(isNaN(Key)){
        if(Key === 'C'){
          Input.value = '';
        }else if(Key === '<'){
          let Keysplit = InputElement.split('');
          Keysplit.pop();
          let keyJoin = Keysplit.join('');
          Input.value = keyJoin;
        }
      }else{
        Input.value = InputTotal;
      }
});


document.getElementById('Submit').addEventListener('click', function(){
      let OTPOne = document.getElementById('input');
      let OTPoneElement = OTPOne.value;
      let OTPONE = parseFloat(OTPoneElement)

      let OTPtwo = document.getElementById('input-field');
      let OTPtwoElement = OTPtwo.value;
      let OTPTWO = parseFloat(OTPtwoElement)

      // Notification section 
      let Pinwrong = document.getElementById('pin-wrong');
      let Pinsuccess = document.getElementById('pin-success');

      if(OTPONE === OTPTWO){
        alert('Your OTP is Successed')
        Pinsuccess.classList.add('pin-success-show');
        Pinwrong.classList.remove('pin-wrong-show')
      }else{
        Pinwrong.classList.add('pin-wrong-show');
        Pinsuccess.classList.remove('pin-success-show')
        alert('your OTP is wrong')
      }
      
})