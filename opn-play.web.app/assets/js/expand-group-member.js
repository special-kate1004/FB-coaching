const groupMembers = [
    { img: './assets/png/image.png', name: 'Member 1' },
    { img: './assets/png/image-1.png', name: 'Member 2' },
    { img: './assets/png/image-2.png', name: 'Member 3' },
    { img: './assets/png/image-3.png', name: 'Member 4' },
    { img: './assets/png/image-4.png', name: 'Member 5' },
    { img: './assets/png/image-5.png', name: 'Member 6' },
    { img: './assets/png/image-6.png', name: 'Member 7' },
    { img: './assets/png/image-3.png', name: 'Member 8' },
    { img: './assets/png/image-4.png', name: 'Member 9' }
];

function renderGroupAvatars(members) {
    const maxVisible = 6;
    const groupAvatars = document.getElementById('groupAvatars');
    const expandBtn = document.getElementById('expandGroupBtn');
    groupAvatars.innerHTML = '';
    expandBtn.style.display = 'none';

    members.slice(0, maxVisible).forEach(m => {
        const img = document.createElement('img');
        img.src = m.img;
        img.alt = m.name;
        img.className = 'h-40 w-40 mr-minus-10';
        groupAvatars.appendChild(img);
    });

    if (members.length > maxVisible) {
        expandBtn.style.display = '';
        expandBtn.textContent = `+${members.length - maxVisible}`;
    }
}

function showExpandedMembers(members) {
    const maxVisible = 6;
    const expanded = document.getElementById('expandedMembers');
    expanded.innerHTML = members.map(m =>
        `<div class="d-flex align-items-center gap-2 mb-2">
            <img src="${m.img}" class="h-40 w-40 mr-2" alt="${m.name}">
            <span>${m.name}</span>
        </div>`
    ).join('');
    expanded.style.display = 'block';

    // Position under the + button
    const btn = document.getElementById('expandGroupBtn');
    const rect = btn.getBoundingClientRect();
    expanded.style.top = (rect.bottom + window.scrollY + 4) + 'px';
    expanded.style.width = '200px';
    expanded.style.left = 0;
    expanded.style.top = 0;
}

// Hide expanded on click outside
document.addEventListener('click', function(e) {
    const expanded = document.getElementById('expandedMembers');
    const btn = document.getElementById('expandGroupBtn');
    if (!expanded.contains(e.target) && e.target !== btn) {
        expanded.style.display = 'none';
    }
});

// Initial render
renderGroupAvatars(groupMembers);

// Expand on +x click
document.getElementById('expandGroupBtn').onclick = function(e) {
    e.stopPropagation();
    showExpandedMembers(groupMembers);
};