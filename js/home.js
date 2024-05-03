document.addEventListener('DOMContentLoaded', function() {
    const imgIcon = document.getElementById('imgIcon');
    const profileDrop = document.getElementById('profileDrop');

    // Toggling the dropdown with class for smoother transitions
    imgIcon.addEventListener('click', function() {
        profileDrop.classList.toggle('active'); // Use CSS for showing/hiding
    });

    // Hide the dropdown when clicking outside of the profile icon
    window.onclick = function(event) {
        if (event.target !== imgIcon && !profileDrop.contains(event.target)) {
            profileDrop.classList.remove('active');
        }
    };

    // Card sections hover effects
    const cardsections = document.querySelectorAll('.card-image');
    cardsections.forEach(function(cardsection) {
        cardsection.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
        });

        cardsection.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Navbar link underlining effects
    const underline_navbar = document.querySelectorAll('.home-navbar-links-li');
    underline_navbar.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textDecoration = 'underline';
        });

        link.addEventListener('mouseleave', function() {
            this.style.textDecoration = 'none';
        });
    });

    // Hover effect in rank table
    var tableRows = document.querySelectorAll(".ranking-section-table-row");
    tableRows.forEach(function(row) {
        var cells = Array.from(row.cells).slice(1);
        cells.forEach(function(cell) {
            var gapDiv = cell.querySelector(".gap");
            if (gapDiv) {
                gapDiv.addEventListener("mouseenter", function() {
                    this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
                    this.style.transform = 'scale(1.05)';
                    this.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
                });

                gapDiv.addEventListener("mouseleave", function() {
                    this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
                    this.style.transform = 'scale(1)';
                    this.style.boxShadow = 'none';
                });
            }
        });
    });
});
