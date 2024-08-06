document.getElementById('desplegable').addEventListener('click', function(event) {
    event.preventDefault(); 
    const loginDiv = document.querySelector('.login');
    if (loginDiv.style.display === 'none' || loginDiv.style.display === '') {
      loginDiv.style.display = 'block';
    } else {
      loginDiv.style.display = 'none';
    }
  });