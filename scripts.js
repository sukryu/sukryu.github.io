document.addEventListener("DOMContentLoaded", function() {
    var navToggle = document.getElementById("navToggle");
    var sideNav = document.getElementById("sideNav");
    var closeNav = document.getElementById("closeNav");
  
    navToggle.addEventListener("click", function() {
        sideNav.style.width = "250px";
    });
  
    closeNav.addEventListener("click", function() {
        sideNav.style.width = "0";
    });
  
    // Add smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
  
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
  
            // Close the side nav after clicking a link
            sideNav.style.width = "0";
        });
    });
  
    // Update date and time
    function updateTime() {
        var dateElement = document.getElementById("date");
        var now = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        dateElement.textContent = now.toLocaleDateString('en-US', options);
    }
    
    updateTime();
    setInterval(updateTime, 1000);
  });
  