document.getElementById('payment-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Simulate the collection of data entered in the form
  const data = {
    name: document.getElementById('fullname').value,
    address: document.getElementById('address').value,
    email: document.getElementById('email').value,
    cardNumber: document.getElementById('card-number').value,
    expDate: document.getElementById('exp-date').value,
    cvv: document.getElementById('cvv').value
  };

  console.log("Simulated Stolen Data:", data);
  alert("Thanks for your purchase! (This is a simulation.)");
});
