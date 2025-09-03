document.querySelectorAll('.player-select .dropdown-menu li').forEach(item => {
    item.addEventListener('click', function () {
        const name = this.getAttribute('data-name');
        const avatar = this.getAttribute('data-avatar');

        document.getElementById('selectedName').textContent = name;
        document.getElementById('selectedAvatar').src = avatar;
    });
});