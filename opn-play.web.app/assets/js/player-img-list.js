const players = [
    { name: "Nelson Jardim", position: "Staff", readiness: "Ready", img: "./assets/png/avatar-img-1.png" },
    { name: "Nelson Jardim", position: "Goalkeeper", readiness: "Ready", img: "./assets/png/avatar-img-1.png" },
    { name: "Jacob Carney", position: "Goalkeeper", readiness: "Ready", img: "./assets/png/avatar-img-6.png" },
    { name: "Antony Glennon", position: "Defender", readiness: "Ready", img: "./assets/png/avatar-img-5.png" },
    { name: "Matthew Baker", position: "Defender", readiness: "Injured", img: "./assets/png/avatar-img-4.png" },
    { name: "James Clarke", position: "Defender", readiness: "Ready", img: "./assets/png/avatar-img-4.png" },
    { name: "Ciaran Brennan", position: "Defender", readiness: "Ready", img: "./assets/png/avatar-img-7.png" },
    { name: "Joe Thomas", position: "Defender", readiness: "Ready", img: "./assets/png/avatar-img-2.png" },
    { name: "Joshua Seberry", position: "Defender", readiness: "Injured", img: "./assets/png/avatar-img-3.png" },
    { name: "Shane McLoughlin", position: "Defender", readiness: "Ready", img: "./assets/png/avatar-img-3.png" },
    { name: "Cameron Evans", position: "Defender", readiness: "Ready", img: "./assets/png/avatar-img-1.png" },
    { name: "Nelson Sanca", position: "Midfield", readiness: "Ready", img: "./assets/png/avatar-img-4.png" },
    { name: "Bryn Morris", position: "Midfield", readiness: "Ready", img: "./assets/png/avatar-img-5.png" },
    { name: "Oliver Greaves", position: "Midfield", readiness: "Injured", img: "./assets/png/avatar-img-3.png" },
    { name: "Cameron Antwi", position: "Midfield", readiness: "Ready", img: "./assets/png/avatar-img-2.png" },
    { name: "Nelson Jardim", position: "Staff", readiness: "Ready", img: "./assets/png/avatar-img-1.png" },
    { name: "Nelson Jardim", position: "Goalkeeper", readiness: "Ready", img: "./assets/png/avatar-img-1.png" },
    { name: "Jacob Carney", position: "Goalkeeper", readiness: "Ready", img: "./assets/png/avatar-img-6.png" },
    { name: "Antony Glennon", position: "Defender", readiness: "Ready", img: "./assets/png/avatar-img-5.png" },
    { name: "Matthew Baker", position: "Defender", readiness: "Injured", img: "./assets/png/avatar-img-4.png" },
    { name: "James Clarke", position: "Defender", readiness: "Ready", img: "./assets/png/avatar-img-4.png" },
    { name: "Ciaran Brennan", position: "Defender", readiness: "Ready", img: "./assets/png/avatar-img-7.png" },
    { name: "Joe Thomas", position: "Defender", readiness: "Ready", img: "./assets/png/avatar-img-2.png" },
    { name: "Joshua Seberry", position: "Defender", readiness: "Injured", img: "./assets/png/avatar-img-3.png" },
    { name: "Shane McLoughlin", position: "Defender", readiness: "Ready", img: "./assets/png/avatar-img-3.png" },
    { name: "Cameron Evans", position: "Defender", readiness: "Ready", img: "./assets/png/avatar-img-1.png" },
    { name: "Nelson Sanca", position: "Midfield", readiness: "Ready", img: "./assets/png/avatar-img-4.png" },
    { name: "Bryn Morris", position: "Midfield", readiness: "Ready", img: "./assets/png/avatar-img-5.png" },
    { name: "Oliver Greaves", position: "Midfield", readiness: "Injured", img: "./assets/png/avatar-img-3.png" },
    { name: "Cameron Antwi", position: "Midfield", readiness: "Ready", img: "./assets/png/avatar-img-2.png" }
];

let currentPage = 1;
const perPage = 16;


function getBadgeClass(position) {
    switch (position) {
        case "Goalkeeper":
            return "bg-custom-success text-cyan-success";
        case "Defender":
            return "bg-custom-purple text-cyan-purple";
        case "Midfield":
            return "bg-custom-warning text-cyan-warning";
        case "Staff":
            return "bg-custom-error text-cyan-error";
        default:
            return "bg-custom-success text-cyan-success";
    }
}

function getAvatarImg(player) {
    // Map player name or position to avatar image if you want, else use placeholder
    // Example: return "./assets/png/avatar-img-1.png";
    return player.img;
}

function getFilteredPlayers() {
const search = document.getElementById('searchInput').value.toLowerCase();
const posFilter = document.getElementById('positionFilter').value;
const readyFilter = document.getElementById('readinessFilter').value;

return players
    .filter(p => p.name.toLowerCase().includes(search))
    .filter(p => !posFilter || p.position === posFilter)
    .filter(p => !readyFilter || p.readiness === readyFilter);
}

function render() {
    const filtered = getFilteredPlayers();
    const start = (currentPage - 1) * perPage;
    const paginated = filtered.slice(start, start + perPage);

    const grid = document.getElementById('playersGrid');
    grid.innerHTML = '';

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="w-100 text-center text-muted py-40">No data found...</div>`;
    } else {
        paginated.forEach(player => {
            const card = document.createElement('div');
            card.className = 'd-flex w-100 position-relative p-1 max-height-145';
            card.innerHTML = `
                <img src="./assets/png/bg-avatar-card.png" class="mini-avatar-card position-absolute radius-12" alt="Avatar Card Background">
                <div class="d-flex z-1 gap-3-5">
                    <img src="${getAvatarImg(player)}" class="radius-bl-12" alt="Player Avatar Image">
                    <div class="d-flex flex-column max-w-75 gap-12 pt-40">
                        <span class="d-flex align-items-center fw-bold w-max-content ${getBadgeClass(player.position)} p-6 text-12 radius-5 max-height-20">${player.position}</span>
                        <span class="fw-medium text-white text-20">${player.name}</span>
                    </div>
                </div>
                <button class="d-flex align-items-center justify-content-center position-absolute max-w-24 max-height-24 top-9 end-9 border-0 bg-btn-3-dots radius-5">
                    <i class="bi bi-three-dots text-white"></i>
                </button>
            `;
            card.style.cursor = "pointer";
            card.onclick = () => {
                // Redirect to player detail page (customize as needed)
                window.location.href = `player-info.html`;
            };
            grid.appendChild(card);
        });
    }
    renderPagination(filtered.length);
}

function renderPagination(totalItems) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(totalItems / perPage);

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.className = 'px-27 py-14 cursor-pointer bg-white text-black radius-8 text-16 border-btn-neutral box-shadow-primary';
        if (i === currentPage) btn.classList.add('active');
        btn.onclick = () => {
            currentPage = i;
            render();
        };
        pagination.appendChild(btn);
    }
    // Add Next button
    if (totalPages > 1) {
        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next';
        nextBtn.className = 'px-27 py-14 cursor-pointer bg-white text-black radius-8 text-16 border-btn-neutral box-shadow-primary';
        if (currentPage >= totalPages) {
            nextBtn.disabled = true;
            nextBtn.classList.add('disabled');
        } else {
            nextBtn.onclick = () => {
                currentPage++;
                render();
            };
        }
        pagination.appendChild(nextBtn);
    }
}

function resetPagination() {
    currentPage = 1;
    render();
}

// Initial rendering
render();