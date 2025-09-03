document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('session-search');
    const sessionList = document.getElementById('session-list');
    let sessions = [
        {
            "id": 1,
            "name": "Exercise Name",
            "tags": ["push"]
        },
        {
            "id": 2,
            "name": "Exercise Name",
            "tags": ["push"]
        },
        {
            "id": 3,
            "name": "Exercise Name",
            "tags": ["push"]
        },
        {
            "id": 4,
            "name": "Exercise Name",
            "tags": ["push"]
        },
        {
            "id": 5,
            "name": "Exercise Name",
            "tags": ["push"]
        },
        {
            "id": 6,
            "name": "Exercise Name",
            "tags": ["push"]
        },
        {
            "id": 7,
            "name": "Squat",
            "tags": ["push"]
        },
        {
            "id": 8,
            "name": "Squat",
            "tags": ["push"]
        }
    ];

    function renderSessions(data) {
        sessionList.innerHTML = '';
        if (data.length === 0) {
            sessionList.innerHTML = '<div class="text-center text-muted py-4">No sessions found.</div>';
            return;
        }
        data.forEach(session => {
            const tagsHtml = session.tags.map(tag =>
                `<span class="d-flex align-items-center fw-bold w-max-content bg-custom-purple p-6 text-12 text-cyan-purple border-btn-success radius-5 max-height-20">${tag}</span>`
            ).join(' ');
            const newItem = document.createElement('div');
            newItem.className = 'd-flex align-items-stretch bg-custom-gradient-primary max-height-118 gap-40 border-custom-strong-neutral p-20 radius-12 sort sortable cursor-grab max-height-83';
            newItem.innerHTML = `
                <div class="session-card d-flex flex-grow-1 align-items-center gap-20" data-tags="${session.tags.join(',')}">
                    <img src="./assets/svg/icon-dots.svg" class="w-12" alt="Item Pickup Icon">
                    <div class="d-flex flex-column gap-12">
                        ${tagsHtml}
                        <span class="fw-medium text-16 line-height-100 session-card-name">${session.name}</span>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-1">
                    <button class="delete-btn d-flex align-items-center justify-content-center h-100 bg-white border-btn-neutral btn-custom-shadow px-20 radius-8">
                        <img src="./assets/svg/icon-trash.svg" class="w-12 h-12" alt="Delete Icon">
                    </button>
                </div>`;
            sessionList.appendChild(newItem);
            new Sortable(newItem);
        });
    }

    // Filter sessions
    function filterSessions() {
        const query = searchInput.value.trim().toLowerCase();
        const filtered = sessions.filter(session =>
            session.name.toLowerCase().includes(query) ||
            session.tags.some(tag => tag.toLowerCase().includes(query))
        );
        renderSessions(filtered);
    }

    renderSessions(sessions);

    searchInput.addEventListener('input', filterSessions);
    // Optional: filter on search button click
    const searchBtn = searchInput.parentElement.querySelector('button');
    if (searchBtn) {
        searchBtn.addEventListener('click', filterSessions);
    }
});