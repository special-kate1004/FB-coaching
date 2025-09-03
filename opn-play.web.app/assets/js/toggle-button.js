document.addEventListener('click', function (e) {
    const trigger = e.target.closest('.toggle-trigger');
    if (trigger) {
        const toggle = trigger.querySelector('.custom-toggle');
        if (toggle) {
            // Toggle the .active class on the switch
            toggle.classList.toggle('active');
            // Optionally, toggle a class on the button itself for styling
            trigger.classList.toggle('active');
        }
    }
});