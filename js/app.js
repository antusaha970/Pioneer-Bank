// All functions goes here
function updateSpanText(id, amountToAdd) {
    const totalDepositTxt = document.getElementById(id).innerText;
    const totalDepositNumber = parseFloat(totalDepositTxt);
    const total = amountToAdd + totalDepositNumber;
    document.getElementById(id).innerText = total;
}

// Login area functionality
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener('click', function () {
    if (document.getElementById("userEmail").value == "") {
        alert("Please enter your email and password correctly");
    }
    else {
        const userEmail = document.getElementById("userEmail").value;
        const loginArea = document.getElementById("loginArea");
        loginArea.style.display = "none";

        const numberSetupArea = document.getElementById("numberSetupArea");
        numberSetupArea.style.display = "block";

        const displayName = document.getElementById("displayName");
        displayName.innerText = "Welcome " + userEmail;
    }
})

// Number setup area functionality
const numberSetBtn = document.getElementById("numberSetBtn");
numberSetBtn.addEventListener('click', function () {
    if (document.getElementById("userNumber").value == "") {
        alert("Please enter your number");
    }
    else {
        const userNumber = document.getElementById("userNumber").value;
        const numberSetupArea = document.getElementById("numberSetupArea");
        numberSetupArea.style.display = "none";
        const transitionArea = document.getElementById("transition-area");
        transitionArea.style.display = "block";
        const displayNumber = document.getElementById("displayNumber");
        displayNumber.innerText = " " + userNumber;
    }
})

// Transition area goes here
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener('click', function () {
    if(document.getElementById("depositAmount").value == ""){
        alert("Please enter a minimum amount");
    }
    else
    {
    const depositAmount = document.getElementById("depositAmount").value;
    const depositAmountNumber = parseFloat(depositAmount);
    updateSpanText("totalDepositTxt", depositAmountNumber);
    updateSpanText("totalBalanceTxt", depositAmountNumber);
    document.getElementById("depositedTxt").innerText = "$"+depositAmountNumber + " is deposited";
    document.getElementById("depositAmount").value = "";
    }
})

const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener('click',function(){
    if(document.getElementById("withdrawAmount").value == ""){
        alert("Please enter a minimum amount");
    }
    else
    {
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);

    updateSpanText("withdrawAmountTxt",withdrawAmountNumber);
    updateSpanText("totalBalanceTxt",-1*withdrawAmountNumber);

    document.getElementById("withdrawAmount").value = ""
    }
})

