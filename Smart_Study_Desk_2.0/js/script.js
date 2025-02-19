// Open the modal
function preOrder() {
    document.getElementById('modal').style.display = "flex";
  }
  
  // Close the modal
  function closeModal() {
    document.getElementById('modal').style.display = "none";
  }
  
  // Close modal if clicked outside of the modal content
  window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
      closeModal();
    }
  }
  