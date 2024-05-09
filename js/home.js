document.addEventListener('DOMContentLoaded', function() {

    const mainContent = document.querySelector('.home-main-content'); // Assuming this is a parent that exists at load

    // Delegate hover events for card images
    mainContent.addEventListener('mouseenter', function(event) {
        if (event.target.closest('.card-image')) {
            const card = event.target.closest('.card-image');
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
        }
    }, true);

    mainContent.addEventListener('mouseleave', function(event) {
        if (event.target.closest('.card-image')) {
            const card = event.target.closest('.card-image');
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        }
    }, true);
    


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


// for search 
function openSearch() {
    fetch('search-results.html') // Path to your HTML file with the search results
        .then(response => response.text()) // Get the response text
        .then(html => {
            document.getElementById('result').innerHTML = html; // Insert the HTML
            showResults();
        })
        .catch(error => console.error('Error loading the search results:', error));
}

function showResults() {
    let oldContent = document.getElementById('topblogs');
    let newContent = document.getElementById('result');

    // Fade out old content
    oldContent.style.opacity = '0';
    setTimeout(() => {
        oldContent.style.display = 'none';

        // Ensure new content is styled for display
        newContent.style.display = 'flex';
        newContent.style.opacity = '0';

        // Fade in new content
        setTimeout(() => {
            newContent.style.opacity = '1';
        }, 10); // slight delay to ensure it starts visible
    }, 500); // match this with the CSS transition time
}



// notification dropdown 


function toggleNotificationsDropdown(event) {
    event.preventDefault(); // Stop the anchor tag from causing page jump
    var notificationsDropdown = document.getElementById('notificationsDropdown');
    
    // Toggle visibility and manage transitions
    if (notificationsDropdown.style.display === 'none' || notificationsDropdown.style.display === '') {
        notificationsDropdown.style.display = 'block';
        notificationsDropdown.style.opacity = '1';
        notificationsDropdown.style.transform = 'translateY(0)';
        notificationsDropdown.style.visibility = 'visible';
    } else {
        notificationsDropdown.style.opacity = '0';
        notificationsDropdown.style.transform = 'translateY(-20px)';
        // Delay hiding the dropdown to allow the opacity transition to finish
        setTimeout(function() {
            notificationsDropdown.style.display = 'none';
            notificationsDropdown.style.visibility = 'hidden';
        }, 500); // Match this timeout to your CSS transition time
    }

    event.stopPropagation(); // Prevent click event from propagating to the document
}

// Add this script inside your HTML or linked JavaScript file to handle clicking outside the dropdown
document.addEventListener('click', function(event) {
    var notificationsDropdown = document.getElementById('notificationsDropdown');
    if (!event.target.closest('#notificationButton') && notificationsDropdown.style.display === 'block') {
        notificationsDropdown.style.opacity = '0';
        notificationsDropdown.style.transform = 'translateY(-20px)';
        setTimeout(function() {
            notificationsDropdown.style.display = 'none';
            notificationsDropdown.style.visibility = 'hidden';
        }, 500); // Ensure this matches the CSS transition
    }
});
// JavaScript to toggle the dropdown menu when clicking the "Sort" button
document.addEventListener("DOMContentLoaded", function(event) {
    let sortBtn = document.getElementById("sortBtn");
    let sortDrop = document.getElementById("sortDrop");

    sortBtn.addEventListener("click", function() {
        if (sortDrop.style.display === "none") {
            sortDrop.style.display = "block";
        } else {
            sortDrop.style.display = "none";
        }
    });
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    let sortBtn = document.getElementById("sortBtn");
    let sortDrop = document.getElementById("sortDrop");
    if (!event.target.matches('#sortBtn') && !event.target.matches('.dropdownSort')) {
        sortDrop.style.display = "none";
    }
}