

const sessionsData = [
    { sessionName: 'Strength', week: 1, dayOfWeek: 2, data: [] },
    { sessionName: 'Cardio', week: 1, dayOfWeek: 4, data: [] },
    { sessionName: 'Yoga', week: 2, dayOfWeek: 1, data: [] },
    { sessionName: 'Session Name', week: 2, dayOfWeek: 2, data: [] },
    { sessionName: 'Session Name', week: 3, dayOfWeek: 3, data: [] },
    { sessionName: 'Session Name', week: 3, dayOfWeek: 4, data: [] },
    { sessionName: 'Session Name', week: 2, dayOfWeek: 3, data: [] },
    { sessionName: 'Session Name', week: 4, dayOfWeek: 4, data: [] },
    { sessionName: 'Session Name', week: 3, dayOfWeek: 7, data: [] },
    { sessionName: 'Session Name', week: 5, dayOfWeek: 3, data: [] },
    { sessionName: 'Session Name', week: 5, dayOfWeek: 2, data: [] },
    { sessionName: 'Session Name', week: 4, dayOfWeek: 3, data: [] },
    { sessionName: 'Session Name', week: 2, dayOfWeek: 4, data: [] },
    { sessionName: 'Session Name', week: 4, dayOfWeek: 2, data: [] },
    { sessionName: 'Session Name', week: 1, dayOfWeek: 6, data: [] },
    { sessionName: 'Session Name', week: 4, dayOfWeek: 1, data: [] },
    { sessionName: 'Session Name', week: 5, dayOfWeek: 1, data: [] }
];

// Number of weeks and days (adjust as needed)
const NUM_WEEKS = 5;
const NUM_DAYS = 7;

// Helper: Get session for week/day
function getSessionFor(week, day) {
    return sessionsData.find(
        s => Number(s.week) === week && Number(s.dayOfWeek) === day
    );
}

// Helper: Generate session HTML
function sessionSlotHTML(session) {
    if (!session) {
        // Empty slot
        return `<div class="bg-white min-h-168 min-w-168 p-14 border-gray sort sortable cursor-grab">
                </div>`;
    }
    // Filled slot
    return `
        <div class="bg-white p-14 border-gray sort sortable cursor-grab">
            <div class="d-flex align-items-center justify-content-center">
                <div class="d-flex flex-column bg-custom-gradient-primary border-custom-strong-neutral p-20 radius-12 position-relative gap-12" style="width: -webkit-fill-available;">
                    <img src="./assets/svg/icon-dots.svg" class="w-12 position-absolute top-10 end-10" alt="Item Pickup Icon">
                    <span class="d-flex align-items-center fw-bold w-max-content bg-custom-purple p-6 text-12 text-cyan-purple border-btn-success radius-5 max-height-20">push</span>
                    <span class="fw-medium text-14 line-height-100 session-name">${session.sessionName}</span>
                    <div class="d-flex flex-md-column flex-xxl-row align-items-center gap-1">
                        <button class="delete-btn d-flex align-items-center justify-content-center h-100 bg-white border-btn-neutral btn-custom-shadow px-20 py-12 radius-8">
                            <img src="./assets/svg/icon-edit.svg" class="w-12 h-12" alt="Edit Icon">
                        </button>
                        <button class="delete-btn d-flex align-items-center justify-content-center h-100 bg-white border-btn-neutral btn-custom-shadow px-20 py-12 radius-8">
                            <img src="./assets/svg/icon-trash.svg" class="w-12 h-12" alt="Delete Icon">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Main render function
function renderCalendarSessions(sessions) {
    const container = document.querySelector('.days-view-container');
    if (!container) return;
    let html = `<div class="d-flex align-items-center justify-content-center min-height-98 p-20">
                    <span class="fw-medium text-black text-20">Monday</span>
                </div>
                <div class="d-flex align-items-center justify-content-center min-height-98 p-20">
                    <span class="fw-medium text-black text-20">Tuesday</span>
                </div>
                <div class="d-flex align-items-center justify-content-center min-height-98 p-20">
                    <span class="fw-medium text-black text-20">Wednesday</span>
                </div>
                <div class="d-flex align-items-center justify-content-center min-height-98 p-20">
                    <span class="fw-medium text-black text-20">Thursday</span>
                </div>
                <div class="d-flex align-items-center justify-content-center min-height-98 p-20">
                    <span class="fw-medium text-black text-20">Friday</span>
                </div>
                <div class="d-flex align-items-center justify-content-center min-height-98 p-20">
                    <span class="fw-medium text-black text-20">Saturday</span>
                </div>
                <div class="d-flex align-items-center justify-content-center min-height-98 p-20">
                    <span class="fw-medium text-black text-20">Sunday</span>
                </div>`;
    for (let week = 1; week <= NUM_WEEKS; week++) {
        for (let day = 1; day <= NUM_DAYS; day++) {
            const session = sessions.find(
                s => Number(s.week) === week && Number(s.dayOfWeek) === day
            );
            html += sessionSlotHTML(session);
        }
    }
    container.innerHTML = html;
}

// Call this to render (on page load or after updating sessionsData)
renderCalendarSessions(sessionsData);

// --- Calendar Sessions Array Builder ---

// Helper: Get all session slots (bottom calendar grid)
function getCalendarSessionSlots() {
    // Select all session slots (cells) that can contain a session card
    // Each .bg-white.p-14.border-gray.sort.sortable.cursor-grab is a slot
    // They are ordered: week1-day1, week1-day2, ..., week5-day7 (if 5 weeks)
    // Find the grid for days (right side of week numbers)
    const grid = document.querySelector('.days-view-container');
    if (!grid) return [];

    // Get all slots (cells)
    const slots = Array.from(grid.querySelectorAll('.bg-white.p-14.border-gray.sort.sortable.cursor-grab'));
    return slots;
}

// Helper: Build calendarSessions array
function buildCalendarSessions() {
    const slots = getCalendarSessionSlots();
    const calendarSessions = [];
    // There are 7 days per week, and slots are in order
    slots.forEach((slot, idx) => {
        // If slot contains a session card, push its week/day
        const sessionCard = slot.querySelector('.bg-custom-gradient-primary.border-custom-strong-neutral');
        if (sessionCard) {
            // Calculate week and day
            // idx: 0 = week1-day1, 1 = week1-day2, ..., 6 = week1-day7, 7 = week2-day1, ...
            const week = Math.floor(idx / 7) + 1;
            const day = (idx % 7) + 1; // 1=Monday, 7=Sunday
            const sessionNameElem = sessionCard.querySelector('.session-name');
            const sessionName = sessionNameElem ? sessionNameElem.textContent.trim() : 'Session Name';
            calendarSessions.push({ week, day, sessionName, data: [] });
        }
    });
    return calendarSessions;
}

// --- Mutation Observer to watch for drag/drop changes ---
function observeCalendarGrid() {
    const grid = document.querySelector('.days-view-container');
    if (!grid) return;
    const observer = new MutationObserver(() => {
        // Log the updated sessions array
        window.calendarSessions = buildCalendarSessions();
        console.log('calendarSessions =', window.calendarSessions);
    });
    observer.observe(grid, { childList: true, subtree: true });
}

function editAndRemoveSessionHandler() {
    // Select all session slots
    const slots = getCalendarSessionSlots();
    slots.forEach((slot, idx) => {
        const sessionCard = slot.querySelector('.bg-custom-gradient-primary.border-custom-strong-neutral');
        if (sessionCard) {
            // Edit button
            const editBtn = sessionCard.querySelector('button img[alt="Edit Icon"]')?.closest('button');
            if (editBtn) {
                editBtn.onclick = function(e) {
                    e.stopPropagation();
                    // Example: prompt for new session name
                    let existingInput = sessionCard.querySelector('input.edit-session-input');
                    if (existingInput) {
                        existingInput.focus();
                        return;
                    }
                    
                    const titleSpan = sessionCard.querySelector('.session-name');
                    if (!titleSpan) return;

                    const currentName = titleSpan.textContent.trim();
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.value = currentName;
                    input.className = 'edit-session-input';
                    input.style.width = '100%';
                    input.style.fontSize = '14px';
                    titleSpan.replaceWith(input);
                    input.focus();

                    let saved = false;
                    function save() {
                        if (saved) return;  // prevent double save
                        saved = true;

                        const newName = input.value.trim() || 'Session Name';
                        const newSpan = document.createElement('span');
                        newSpan.className = 'session-name text-nowrap overflow-hidden w-112 text-14 line-height-100 fw-medium h-16 text-truncate';
                        newSpan.textContent = newName;
                        if (input.parentNode) {
                            input.replaceWith(newSpan);
                        }
                        window.calendarSessions = buildCalendarSessions();
                        console.log('calendarSessions =', window.calendarSessions);
                    }
                    
                    input.addEventListener('blur', save);
                    input.addEventListener('keydown', function (event) {
                        if (event.key === 'Enter') {
                            save();
                            input.blur();
                        }
                    });
                };
            }
            // Delete button
            const deleteBtn = sessionCard.querySelector('button img[alt="Delete Icon"]')?.closest('button');
            if (deleteBtn) {
                deleteBtn.onclick = function(e) {
                    e.stopPropagation();
                    // Remove the session card from the slot
                    sessionCard.parentElement.remove();
                    // Optionally update sessionsData if you want to persist
                    // Trigger observer manually if needed
                    window.calendarSessions = buildCalendarSessions();
                    console.log('calendarSessions =', window.calendarSessions);
                };
            }
        }
    });
}

const origRenderCalendarSessions = renderCalendarSessions;
renderCalendarSessions = function(sessions) {
    origRenderCalendarSessions(sessions);
    editAndRemoveSessionHandler();
};

// Initial call to attach handlers after first render
editAndRemoveSessionHandler();

// --- Initial setup ---
document.addEventListener('DOMContentLoaded', () => {
    // Build initial array and expose globally
    window.calendarSessions = buildCalendarSessions();
    console.log('calendarSessions =', window.calendarSessions);
    observeCalendarGrid();
});