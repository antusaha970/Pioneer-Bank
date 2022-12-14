// Function area
function updateSpan(id, forAdd) {
    const totalDeposit = document.getElementById(id).innerText;
    const totalDepositNumber = parseFloat(totalDeposit);
    const total = forAdd + totalDepositNumber;
    document.getElementById(id).innerText = total;
}

function getNumberFromInp(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

// Login area goes here
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";

    const transArea = document.getElementById('transition-area');
    transArea.style.display = "block";
})

// Deposit and balance calculation goes here
const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', function () {
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);

    updateSpan("totalDeposit", depositNumber);

    updateSpan("totalBalance", depositNumber);

    document.getElementById('depositAmount').value = "";
})


// Withdraw calculation goes here
const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function () {
    const withdrawAmounts = getNumberFromInp("withdrawAmount");
    updateSpan("withdrawAmountText", withdrawAmounts);
    updateSpan("totalBalance", -1 * withdrawAmounts);
    document.getElementById("withdrawAmount").value = "";

})