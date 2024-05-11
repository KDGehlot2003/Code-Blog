document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        const question = accordion.querySelector('.question');
        const answer = accordion.querySelector('.accordion-content');

        question.addEventListener('click', () => {
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});



















// document.addEventListener("DOMContentLoaded", function() {
//     const accordions = document.querySelectorAll('.accordion');

//     accordions.forEach(accordion => {
//         const question = accordion.querySelector('.question');
//         const answer = accordion.querySelector('.accordion-content');

//         question.addEventListener('click', () => {
//             if (answer.style.maxHeight) {
//                 answer.style.maxHeight = null;
//                 answer.style.transition = 'max-height 0.3s ease-out, opacity 0.3s ease-out';
//                 // Add transition
//                 setTimeout(() => {
//                     answer.style.opacity = '0'; // Hide content after transition
//                 }, 300); // Set timeout to match transition duration
//             } else {
//                 answer.style.maxHeight = answer.scrollHeight + "px";
//                 answer.style.transition = 'max-height 0.3s ease-out, opacity 0.3s ease-out'; // Add transition
//                 setTimeout(() => {
//                     answer.style.opacity = '1'; // Show content after transition
//                 }, 10); // Set timeout to ensure transition starts after setting maxHeight
//             }
//         });
//     });
// });

