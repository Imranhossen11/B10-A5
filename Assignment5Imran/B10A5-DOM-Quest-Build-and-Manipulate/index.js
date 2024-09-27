function handleDonationToggole() {
    const donation_btn = document.getElementById('donation-btn');
    const history_btn = document.getElementById('history-btn');
    donation_btn.classList.add('bg-action');
    history_btn.classList.remove('bg-action');
    const history_container = document.getElementById('history-container');
    history_container.classList.add('hidden');
    const card_container = document.getElementById('card-container');
    card_container.classList.remove('hidden');

}


function hanadleHistoryToggle() {
    const history_btn = document.getElementById('history-btn');
    const donation_btn = document.getElementById('donation-btn');
    history_btn.classList.add('bg-action');
    donation_btn.classList.remove('bg-action');
    const history_container = document.getElementById('history-container');
    history_container.classList.remove('hidden');
    const card_container = document.getElementById('card-container');
    card_container.classList.add('hidden');

}

function createHistory(title, amount) {
    const history_container = document.getElementById('history-container');
    const div = document.createElement('div');
    div.classList.add('border', 'rounded-lg', 'w-2/3', 'mx-auto','mt-10','p-3');
    div.innerHTML = `
    <h3>${amount} Taka is Donated for ${title}</h3>
    <small>${Date()}</small>
    `
    history_container.appendChild(div);


}

function handleNoakhaliDonation(event) {
    event.preventDefault();
    let amount = document.getElementById('donationAmount').value;
    document.getElementById('donationAmount').value = '';
    amount = parseFloat(amount);
    let totalAmount = document.getElementById('totalAmount').innerText;
    totalAmount = parseFloat(totalAmount);

    if (isNaN(amount)) {
        alert('Invalid Amount! Amount must be positive number');
        return;
    }
    if (amount < 0) {
        alert('Amount must be positive');
        return;
    }
    if (amount > totalAmount) {
        alert('Insufficient Balance!');
        return;
    }

    let donatedAmount = document.getElementById('donatedAmount').innerText;
    donatedAmount = parseFloat(donatedAmount);
    document.getElementById('donatedAmount').innerText = donatedAmount + amount;
    document.getElementById('totalAmount').innerText = totalAmount - amount;
    const title = document.getElementById('naokhaliTitle').innerText;
    createHistory(title, amount);
    modal.showModal()
}
function handleFeniDonation(event) {
    event.preventDefault();
    let amount = document.getElementById('feniDonationAmount').value;
    document.getElementById('feniDonationAmount').value = '';
    amount = parseFloat(amount);
    let totalAmount = document.getElementById('totalAmount').innerText;
    totalAmount = parseFloat(totalAmount);

    if (isNaN(amount)) {
        alert('Invalid Amount! Amount must be positive number');
        return;
    }
    if (amount < 0) {
        alert('Amount must be positive');
        return;
    }
    if (amount > totalAmount) {
        alert('Insufficient Balance!');
        return;
    }

    let donatedAmount = document.getElementById('feniDonatedAnount').innerText;
    donatedAmount = parseFloat(donatedAmount);
    document.getElementById('feniDonatedAnount').innerText = donatedAmount + amount;
    document.getElementById('totalAmount').innerText = totalAmount - amount;
    const title = document.getElementById('feniTitle').innerText;
    createHistory(title, amount);
    modal.showModal()
}



function handleQuotaDonation(event) {
    event.preventDefault();
    let amount = document.getElementById('quotaDonationAmount').value;
    document.getElementById('quotaDonationAmount').value = '';
    amount = parseFloat(amount);
    let totalAmount = document.getElementById('totalAmount').innerText;
    totalAmount = parseFloat(totalAmount);

    if (isNaN(amount)) {
        alert('Invalid Amount! Amount must be positive number');
        return;
    }
    if (amount < 0) {
        alert('Amount must be positive');
        return;
    }
    if (amount > totalAmount) {
        alert('Insufficient Balance!');
        return;
    }

    let donatedAmount = document.getElementById('quotaDonatedAnount').innerText;
    donatedAmount = parseFloat(donatedAmount);
    document.getElementById('quotaDonatedAnount').innerText = donatedAmount + amount;
    document.getElementById('totalAmount').innerText = totalAmount - amount;
    const title = document.getElementById('quotaTitle').innerText;
    createHistory(title, amount);
    modal.showModal()
}

