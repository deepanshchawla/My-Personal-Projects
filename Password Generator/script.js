const inputSlider = document.querySelector("[data-lengthSlider");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password = "";
let passwordLength = 10;
let checkCount = 0;

handleSlider();
//set strength circle to grey
setIndicator("#ccc");

//set password length
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

    const min = inputSlider.min;
    const max = inputSlider.max;
    // console.log(min, max);
    inputSlider.style.backgroundSize = `${((passwordLength-min)*100/(max-min))}% 100%`;
}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    //shadow
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}` ;
}

function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

function generateRandomNumber(){
    return getRndInteger(0,10);
}

function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123));
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91));
}

function generateSymbol(){
    let mini = 0, maxi = symbols.length;
    return symbols.charAt(getRndInteger(mini, maxi+1));
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(uppercaseCheck.checked)hasUpper = true;
    if(lowercaseCheck.checked)hasLower = true;
    if(numbersCheck.checked)hasNum = true;
    if(symbolsCheck.checked)hasSym = true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >=8){
        setIndicator("#0f0");
    }

    else if((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength>=6){
        setIndicator("#ff0");
    }

    else{
        setIndicator("#f00");
    }
}

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }

    catch(e){
        copyMsg.innerText = "failed";
    }
    //to make copy vala span visible
    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active")
    }, 2000);
}

inputSlider.addEventListener('input', (e)=>{
    passwordLength = e.target.value;
    handleSlider();
}) 

copyBtn.addEventListener('click',()=>{
    if(password.length>0){
        copyContent();
    }
})

let handleCheckboxChange = ()=>{
    checkCount = 0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked){
            checkCount++;
        }
    })

    //special condition
    if(password.length != checkCount){
        password.length = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change', handleCheckboxChange);
})

function shufflePassword(pswed){
    //fisher yates method
    for(let i = pswed.length-1; i>=0; i--){
        const j = Math.floor(Math.random()*(i+1));
        const temp = pswed[i];
        pswed[i] = pswed[j];
        pswed[j] = temp;
    }

    let str = "";
    pswed.forEach((el)=>(str+=el));
    return str;
}

generateBtn.addEventListener('click', ()=>{

    if(checkCount<=0){
        return;
    }

    if(passwordLength<checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    //lets start the journety to find new password

    //remove old password
    password = "";

    //lets put the stuff mentioned by checkboxes
    let funarr = [];
    if(uppercaseCheck.checked){
        funarr.push(generateUpperCase);
    }
    
    if(lowercaseCheck.checked){
        funarr.push(generateLowerCase);
    }
    
    if(numbersCheck.checked){
        funarr.push(generateRandomNumber);
    }
    if(symbolsCheck.checked){
        funarr.push(generateSymbol);
    }

    //compulsary addition
    for(let i = 0; i<funarr.length; i++){
        password+=(funarr[i]());
    }

    // console.log("compulsory addition done");

    //remaining addition
    for(let i = 0; i<passwordLength-funarr.length; i++){
        let randomIndex = getRndInteger(0,funarr.length);
        password+=(funarr[randomIndex]());
    }

    // console.log("remaining addition done");

    //shuffle the password
    password = shufflePassword(Array.from(password));
    passwordDisplay.value = password;
    calcStrength(password);
})