// step one

function pin(){
    let pin = generatePin();
    let pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return pin();
    }
}

function generatePin(){
    let random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('btn-generate').addEventListener('click',function(){
    let getPin = pin();
    
    let input = document.getElementById('input-field');
    input.value = getPin;
})

// step two

document.getElementById('calculator').addEventListener('click',function(event){
    let number = event.target.innerText;
    let inputTyped = document.getElementById('typed');
    let input = inputTyped.value;
    if(isNaN(number)){
        if(number === 'C'){
            inputTyped.value = '';
        }
        else if(number === '<'){
            let digit = input.split('');
            digit.pop();
            let joinDigit = digit.join('');
            inputTyped.value = joinDigit;
        }
    }
    else{
        let newInputValue = input + number;
        inputTyped.value = newInputValue;
    }
})

// step three

document.getElementById('submit').addEventListener('click',function(){
    let inputTyped = document.getElementById('typed');
    let value = inputTyped.value;

    let inputField = document.getElementById('input-field');
    let field = inputField.value;

    let unSuccess = document.getElementById('no');
    let success = document.getElementById('yes');
    if(field === value){
        
        success.style.display = 'block';
        unSuccess.style.display = 'none';
    }
    else{
       
       unSuccess.style.display = 'block';
       success.style.display = 'none';
    }
})