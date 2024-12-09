// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get references to form elements
    const productDropdown = document.getElementById("product");
    const quantityInput = document.getElementById("quantity");
    const totalPriceElement = document.getElementById("total-price");
    const orderForm = document.querySelector("form");
    const alertModal = document.getElementById("custom-alert");
    const alertMessage = document.getElementById("alert-message");
    const closeAlertButton = document.getElementById("close-alert");
  
    // Define product prices
    const prices = {
      cupcakes: 3.5,
      cookies: 2.0,
      cakes: 50.0,
    };
  
    // Calculate and update the total price
    function calculateTotal() {
      const product = productDropdown.value;
      const quantity = parseInt(quantityInput.value) || 0;
      const price = prices[product] || 0;
      const total = price * quantity;
      totalPriceElement.textContent = total.toFixed(2);
    }
  
    // Show the custom modal
    function showAlert(message) {
      alertMessage.textContent = message;
      alertModal.style.display = "flex";
    }
  
    // Handle form submission
    function handleSubmit(event) {
      event.preventDefault(); // Prevent form from submitting normally
  
      const product = productDropdown.options[productDropdown.selectedIndex].text;
      const quantity = parseInt(quantityInput.value) || 0;
      const total = totalPriceElement.textContent;
  
      if (quantity > 0) {
        // Show custom alert with the order details
        showAlert(`Thank you for your order! \n\n Product: ${product} \nQuantity: ${quantity} \n Total Price: $${total} \n\n Your order has been received.`);
      } else {
        showAlert("Please enter a valid quantity.");
      }
    }
  
    // Close the custom alert
    closeAlertButton.addEventListener("click", () => {
      alertModal.style.display = "none";
    });
  
    // Add event listeners
    productDropdown.addEventListener("change", calculateTotal);
    quantityInput.addEventListener("input", calculateTotal);
    orderForm.addEventListener("submit", handleSubmit);
  });
  