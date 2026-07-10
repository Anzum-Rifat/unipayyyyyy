document.addEventListener('DOMContentLoaded', function() {
    
    // Steps
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const step4 = document.getElementById('step4');

    // Headers & Footers
    const headerMain = document.getElementById('header-main');
    const headerFinanzen = document.getElementById('header-finanzen');
    const mainFooter = document.getElementById('main-footer');
    const altFooter = document.getElementById('alt-footer');

    // Buttons
    const btnNext1 = document.getElementById('btnNext1');
    const btnNext2 = document.getElementById('btnNext2');
    const btnBack2 = document.getElementById('btnBack2');
    const btnBack3 = document.getElementById('btnBack3');
    const cardForm = document.getElementById('cardForm');
    const btnReturn = document.getElementById('btnReturn');

    // Data displays
    const customAmount = document.getElementById('customAmount');
    const displayAmount2 = document.getElementById('displayAmount2');
    const displayAmount3 = document.getElementById('displayAmount3');
    const finalAmount = document.getElementById('finalAmount');
    
    const displayMethod2 = document.getElementById('displayMethod2');
    const displayMethod3 = document.getElementById('displayMethod3');

    // State Variables
    let amount = "60.00";
    let selectedMethod = "MasterCard (3D Secure)";
    let redirectTimer = null;
    const redirectUrl = "https://my.uni-assist.de/";

    // Step 1 -> Step 2
    btnNext1.addEventListener('click', () => {
        amount = parseFloat(customAmount.value).toFixed(2);
        const selectedRadio = document.querySelector('input[name="method"]:checked');
        selectedMethod = selectedRadio ? selectedRadio.value : "MasterCard (3D Secure)";

        displayAmount2.textContent = amount;
        displayMethod2.textContent = selectedMethod;

        step1.style.display = 'none';
        step2.style.display = 'block';
    });

    // Step 2 -> Step 1 (Back)
    btnBack2.addEventListener('click', () => {
        step2.style.display = 'none';
        step1.style.display = 'block';
    });

    // Step 2 -> Step 3
    btnNext2.addEventListener('click', () => {
        displayAmount3.textContent = amount;
        
        let methodShort = selectedMethod.includes('MasterCard') ? 'Mastercard' 
                        : selectedMethod.includes('Visa') ? 'Visa' 
                        : 'PayPal';
        displayMethod3.textContent = methodShort;

        headerMain.style.display = 'none';
        headerFinanzen.style.display = 'flex';
        mainFooter.style.display = 'none';
        altFooter.style.display = 'block';

        step2.style.display = 'none';
        step3.style.display = 'block';
    });

    // Step 3 -> Step 2 (Back / Cancel)
    btnBack3.addEventListener('click', () => {
        headerFinanzen.style.display = 'none';
        headerMain.style.display = 'flex';
        altFooter.style.display = 'none';
        mainFooter.style.display = 'flex';

        step3.style.display = 'none';
        step2.style.display = 'block';
    });

    // Step 3 -> Step 4 (Form Submit / Success)
    cardForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        finalAmount.textContent = amount;

        // Hide Step 3 and Finanzen header
        step3.style.display = 'none';
        headerFinanzen.style.display = 'none';
        altFooter.style.display = 'none';
        
        // Return to Main Header and Show Success Panel (Step 4)
        headerMain.style.display = 'flex';
        mainFooter.style.display = 'flex';
        step4.style.display = 'block';

        // Auto-redirect after 4 seconds
        redirectTimer = setTimeout(() => {
            window.location.href = redirectUrl; 
        }, 4000);
    });

    // Manual Return Button on Success Page
    btnReturn.addEventListener('click', () => {
        if (redirectTimer) clearTimeout(redirectTimer);
        window.location.href = redirectUrl;
    });
});
