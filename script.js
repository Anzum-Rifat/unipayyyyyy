document.addEventListener('DOMContentLoaded', function() {
    
    const paymentForm = document.getElementById('paymentForm');

    paymentForm.addEventListener('submit', function(event) {
        // ফর্ম সাবমিট হয়ে পেজ রিলোড হওয়া বা সার্ভারে যাওয়া বন্ধ করবে
        event.preventDefault();

        // সাবমিট করার সাথে সাথে তোমার দেওয়া লিংকে রিডাইরেক্ট করে দেবে
        window.location.href = "https://my.uni-assist.de/";
    });

});