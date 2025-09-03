// Sample members array (replace with your JSON/API)
const members = [
    { id: 1, name: "Antony Glennon", tags: "Defender", avatar: "./assets/png/avatar-nick-xl.png" },
    { id: 2, name: "Oliver Thompson", role: "Midfielder", avatar: "./assets/png/avatar-jacob-xl.png" },
    { id: 3, name: "Liam Johnson", role: "Striker", avatar: "./assets/png/avatar-anthony-xl.png" },
    { id: 4, name: "Ethan Williams", role: "Defender", avatar: "./assets/png/avatar-matthew-xl.png" },
    { id: 5, name: "Noah Brown", role: "Midfielder", avatar: "./assets/png/avatar-nick-xl.png" },
    { id: 6, name: "Lucas Davis", role: "Defender", avatar: "./assets/png/avatar-jacob-xl.png" },
    { id: 7, name: "Liam Johnson", role: "Midfielder", avatar: "./assets/png/avatar-anthony-xl.png" },
    { id: 8, name: "Ethan Williams", role: "Defender", avatar: "./assets/png/avatar-matthew-xl.png" }
];

// State arrays
let session_players = []; // Array of member objects
let individual_session_players = [];
let top_metric_session_players = [];

// Render functions
function renderSelectedPlayers() {
    const container = document.getElementById('selectedPlayersList');
    if (container) {
        if (session_players.length === 0) {
            container.innerHTML = `<div class="d-flex align-items-center justify-content-center h-100 w-100 radius-12 bg-custom-neutral h-680">
                <span class="text-center text-20 text-cyan-gray fw-medium">
                    Select players from the<br>right to add in the session
                </span>
            </div>`;
        } else {
            container.innerHTML = '';
            session_players.forEach(member => {
                const div = document.createElement('div');
                div.className = "d-flex align-items-center justify-content-between bg-custom-gradient-primary px-12 py-12 border-custom-strong-neutral radius-12 max-height-84";
                div.innerHTML = `
                    <div class="d-flex align-items-center gap-12">
                        <div class="d-flex align-items-center bg-avatar-success radius-100">
                            <img src="${member.avatar}" alt="${member.name}" class="w-60 h-60 radius-100 object-fit-cover">
                        </div>
                        <div class="d-flex flex-column gap-8">
                            <span class="fw-medium text-20 line-height-100">${member.name}</span>
                            <span class="d-flex align-items-center fw-bold w-max-content bg-custom-purple p-6 text-12 text-cyan-purple radius-5 max-height-20">${member.role}</span>
                        </div>
                    </div>
                    <button onclick="removePlayer(${member.id})" class="d-flex align-items-center justify-content-center bg-white px-20 py-12 border-btn-neutral radius-8 box-shadow-primary">
                        <img src="./assets/svg/icon-minus.svg" class="w-12 h-12" alt="Minus Icon">
                    </button>
                `;
                container.appendChild(div);
            });
        }
    }

    // Also update group-icon-members if present (for calendar.html)
    const groupIcons = document.getElementById('group-icon-members');
    if (groupIcons) {
        groupIcons.innerHTML = '';
        const maxVisible = 6;
        const visibleMembers = session_players.slice(0, maxVisible);
        const remainingMembers = session_players.slice(maxVisible);

        visibleMembers.forEach(member => {
            const wrapper = document.createElement('div');
            wrapper.className = "d-flex align-items-center justify-content-center h-60 w-60 radius-100 bg-white border-0 mr-minus-10";
            const img = document.createElement('img');
            img.src = member.avatar;
            img.alt = member.name;
            img.className = "h-57 w-57 radius-100 object-fit-cover cursor-pointer";
            img.onclick = () => window.removePlayer(member.id);
            wrapper.appendChild(img);
            groupIcons.appendChild(wrapper);
        });

        if (remainingMembers.length > 0) {
            // Create +N button
            const plusBtn = document.createElement('div');
            plusBtn.className = "d-flex align-items-center justify-content-center h-60 w-60 radius-100 bg-light border";
            plusBtn.style.cursor = "pointer";
            plusBtn.textContent = `+${remainingMembers.length}`;
            plusBtn.onclick = function(e) {
                e.stopPropagation();
                showRemainingPopup(remainingMembers, groupIcons);
            };
            groupIcons.appendChild(plusBtn);
        }

        // Remove any existing popup
        const oldPopup = document.getElementById('remaining-popup');
        if (oldPopup) oldPopup.remove();
    }
}

function renderAllPlayers() {
    const container = document.getElementById('allPlayersList');
    if (!container) return;
    container.innerHTML = '';
    //const availableMembers = members.filter(member => !session_players.some(m => m.id === member.id));
    members.forEach(member => {
        const isSelected = session_players.some(m => m.id === member.id);
        const btnDisabled = isSelected ? 'disabled' : '';
        container.innerHTML += `
        <div class="d-flex align-items-center justify-content-between px-12 py-12 radius-12 max-height-84${ isSelected ? ' border-tab-success bg-mini-card-cyan-success':' bg-custom-gradient-primary border-custom-strong-neutral'}">
            <div class="d-flex align-items-center gap-12">
            <div class="d-flex align-items-center bg-avatar-success radius-100">
                <img src="${member.avatar}" alt="${member.name}" class="w-60 h-60 radius-100 object-fit-cover">
            </div>
            <div class="d-flex flex-column gap-8">
                <span class="fw-medium text-20 line-height-100">${member.name}</span>
                <span class="d-flex align-items-center fw-bold w-max-content bg-custom-purple p-6 text-12 text-cyan-purple radius-5 max-height-20">${member.tag}</span>
            </div>
            </div>
            <button onclick="addPlayer(${member.id})" class="btn d-flex align-items-center justify-content-center text-strong-teal bg-white px-20 py-12 radius-8${isSelected ? ' selected text-cyan-aqua bg-green-light':' box-shadow-primary border-btn-neutral'}">
                ${!isSelected ? '<img src="./assets/svg/add-plus.svg" class="w-12 h-12" alt="Add Icon">':'<i class="bi bi-check"></i>'}
            </button>
        </div>
        `;
    });
}

function renderAllPlayersForIndividualTab() {
    const container = document.getElementById('pills-individual-data-only-member-list');
    if (!container) return;
    container.innerHTML = '';
    members.forEach(member => {
        const isSelected = individual_session_players.some(m => m.id === member.id);
        container.innerHTML += `
        <div class="d-flex align-items-center justify-content-between px-12 py-12 radius-12 max-height-84${ isSelected ? ' border-tab-success bg-mini-card-cyan-success':' bg-custom-gradient-primary border-custom-strong-neutral'}">
            <div class="d-flex align-items-center gap-12">
                <div class="d-flex align-items-center bg-avatar-success radius-100">
                    <img src="${member.avatar}" alt="${member.name}" class="w-60 h-60 radius-100 object-fit-cover">
                </div>
                <div class="d-flex flex-column gap-8">
                    <span class="fw-medium text-20 line-height-100">${member.name}</span>
                    <span class="d-flex align-items-center fw-bold w-max-content bg-custom-purple p-6 text-12 text-cyan-purple radius-5 max-height-20">${member.role || member.tags || ''}</span>
                </div>
            </div>
            <button onclick="toggleIndividualPlayer(${member.id})" class="btn d-flex align-items-center justify-content-center text-strong-teal bg-white px-20 py-12 radius-8${isSelected ? ' selected text-cyan-aqua bg-green-light':' box-shadow-primary border-btn-neutral'}">
                ${!isSelected ? '<img src="./assets/svg/add-plus.svg" class="w-12 h-12" alt="Add Icon">':'<i class="bi bi-check"></i>'}
            </button>
        </div>
        `;
    });
}

function renderAllPlayersForTopMetric() {
    const container = document.getElementById('pills-top-3-metric-member-list');
    if (!container) return;
    container.innerHTML = '';
    members.forEach(member => {
        const isSelected = top_metric_session_players.some(m => m.id === member.id);
        container.innerHTML += `
        <div class="d-flex align-items-center justify-content-between px-12 py-12 radius-12 max-height-84${ isSelected ? ' border-tab-success bg-mini-card-cyan-success':' bg-custom-gradient-primary border-custom-strong-neutral'}">
            <div class="d-flex align-items-center gap-12">
                <div class="d-flex align-items-center bg-avatar-success radius-100">
                    <img src="${member.avatar}" alt="${member.name}" class="w-60 h-60 radius-100 object-fit-cover">
                </div>
                <div class="d-flex flex-column gap-8">
                    <span class="fw-medium text-20 line-height-100">${member.name}</span>
                    <span class="d-flex align-items-center fw-bold w-max-content bg-custom-purple p-6 text-12 text-cyan-purple radius-5 max-height-20">${member.role || member.tags || ''}</span>
                </div>
            </div>
            <button onclick="toggleTopMetricPlayer(${member.id})" class="btn d-flex align-items-center justify-content-center text-strong-teal bg-white px-20 py-12 radius-8${isSelected ? ' selected text-cyan-aqua bg-green-light':' box-shadow-primary border-btn-neutral'}">
                ${!isSelected ? '<img src="./assets/svg/add-plus.svg" class="w-12 h-12" alt="Add Icon">':'<i class="bi bi-check"></i>'}
            </button>
        </div>
        `;
    });
}

function showRemainingPopup(remainingMembers, parent) {
    // Remove any existing popup
    const oldPopup = document.getElementById('remaining-popup');
    if (oldPopup) oldPopup.remove();

    const popup = document.createElement('div');
    popup.id = 'remaining-popup';
    popup.style.position = 'absolute';
    popup.style.background = '#fff';
    popup.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
    popup.style.borderRadius = '12px';
    popup.style.padding = '16px';
    popup.style.zIndex = 9999;
    popup.style.display = 'flex';
    popup.style.gap = '12px';

    // Position the popup below the parent (+N button)
    const rect = parent.getBoundingClientRect();
    popup.style.top = (window.scrollY + rect.bottom + 8) + 'px';
    popup.style.left = (window.scrollX + rect.left + rect.width / 2 - popup.offsetWidth / 2) + 'px';

    remainingMembers.forEach(member => {
        const img = document.createElement('img');
        img.src = member.avatar;
        img.alt = member.name;
        img.className = "h-60 w-60 radius-100 object-fit-cover cursor-pointer";
        img.style.cursor = "pointer";
        img.onclick = () => {
            window.removePlayer(member.id);
            popup.remove();
        };
        popup.appendChild(img);
    });

    // Click outside to close
    function handleClickOutside(e) {
        if (!popup.contains(e.target)) {
            popup.remove();
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }
    setTimeout(() => { // Delay to avoid immediate close on open
        document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    document.body.appendChild(popup);
}

// Add/Remove logic
window.addPlayer = function(id) {
    const member = members.find(m => m.id === id);
    if (member && !session_players.some(m => m.id === id)) {
        session_players.push(member);
        renderSelectedPlayers();
        renderAllPlayers();
        renderAllPlayersForIndividualTab();
    }
};

window.removePlayer = function(id) {
    session_players = session_players.filter(m => m.id !== id);
    renderSelectedPlayers();
    renderAllPlayers();
    renderAllPlayersForIndividualTab();
};

window.toggleIndividualPlayer = function(id) {
    const member = members.find(m => m.id === id);
    const isSelected = individual_session_players.some(m => m.id === id);
    if (isSelected) {
        individual_session_players = individual_session_players.filter(m => m.id !== id);
    } else if (member) {
        individual_session_players.push(member);
    }
    renderAllPlayersForIndividualTab();
};

window.toggleTopMetricPlayer = function(id) {
    const member = members.find(m => m.id === id);
    const isSelected = top_metric_session_players.some(m => m.id === id);
    if (isSelected) {
        top_metric_session_players = top_metric_session_players.filter(m => m.id !== id);
    } else if (member) {
        top_metric_session_players.push(member);
    }
    renderAllPlayersForTopMetric();
};

const removeAllBtn = document.getElementById('removeAllBtn');
if (removeAllBtn) {
    removeAllBtn.onclick = function() {
        session_players = [];
        renderSelectedPlayers();
        renderAllPlayers();
        renderAllPlayersForIndividualTab();
    };
}

const addAllBtn = document.getElementById('addAllBtn');
if (addAllBtn) {
    addAllBtn.onclick = function() {
        session_players = [...members];
        renderSelectedPlayers();
        renderAllPlayers();
        renderAllPlayersForIndividualTab();
    };
}

const continueBtn = document.getElementById('continueBtn');
if (continueBtn) {
    continueBtn.onclick = function() {
        // Example: send only IDs to backend
        const ids = session_players.map(m => m.id);
        console.log('session_players:', ids);
        // You can send `ids` or `session_players` as needed
    };
}

// Initial render
if (document.getElementById('selectedPlayersList')) renderSelectedPlayers();
if (document.getElementById('allPlayersList')) renderAllPlayers();
if (document.getElementById('pills-individual-data-only-member-list')) renderAllPlayersForIndividualTab();
if (document.getElementById('pills-top-3-metric-member-list')) renderAllPlayersForTopMetric();