document.addEventListener('DOMContentLoaded', function() {
    
    const paymentForm = document.getElementById('paymentForm');
    const checkoutContainer = document.getElementById('checkoutContainer');
    const successPage = document.getElementById('successPage');
    const paymentAmountInput = document.getElementById('paymentAmount');
    const paidAmountDisplay = document.getElementById('paidAmount');

    paymentForm.addEventListener('submit', function(event) {
        // ফর্ম সাবমিট হয়ে পেজ রিলোড হওয়া বন্ধ করবে
        event.preventDefault();

        // ইনপুট করা টাকার পরিমাণ সাকসেস পেজে সেট করা
        paidAmountDisplay.textContent = paymentAmountInput.value;

        // পেমেন্ট পেজ হাইড করে সাকসেস পেজ দেখানো
        checkoutContainer.style.display = 'none';
        successPage.style.display = 'flex';

        // ৩ সেকেন্ড (৩০০০ মিলি-সেকেন্ড) পর তোমার দেওয়া লিংকে রিডাইরেক্ট করে দেবে
        setTimeout(function() {
            window.location.href = "https://my.uni-assist.de/";
        }, 3000);
    });

});
