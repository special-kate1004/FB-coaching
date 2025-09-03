const sessionsByDate = {
    '2025-05-15': [
        {
            name: 'Nick Townsend',
            session: 'Team Technical 3',
            status: 'Complete',
            avatar: './assets/png/avatar-nick-bigger.png',
            date: '2025-09-15',
            statusContainerColor: 'bg-custom-success',
            statusTextColor: 'text-cyan-success'
        },
        {
            name: 'Antony Glennon',
            session: 'On Pitch Rehab 4',
            status: 'Incomplete',
            avatar: './assets/png/avatar-nick-bigger.png',
            date: '2025-09-15',
            statusContainerColor: 'bg-custom-error',
            statusTextColor: 'text-cyan-error'
        },
        {
            name: 'Cameran Evans',
            session: 'Team Technical 3',
            status: 'Complete',
            avatar: './assets/png/avatar-anthony-bigger.png',
            date: '2025-09-15',
            statusContainerColor: 'bg-custom-success',
            statusTextColor: 'text-cyan-success'
        },
        {
            name: 'Micheal Spellman',
            session: 'Team Technical 3',
            status: 'Complete',
            avatar: './assets/png/avatar-matthew-bigger.png',
            date: '2025-09-15',
            statusContainerColor: 'bg-custom-success',
            statusTextColor: 'text-cyan-success'
        },
        {
            name: 'Jacob Carney',
            session: 'Team Technical 3',
            status: 'Complete',
            avatar: './assets/png/avatar-jacob-2-bigger.png',
            date: '2025-09-15',
            statusContainerColor: 'bg-custom-success',
            statusTextColor: 'text-cyan-success'
        }
    ]
};

function renderSessionCard({ name, session, status, avatar, date, statusContainerColor, statusTextColor }) {
    const day = new Date(date).getDate();
    const month = new Date(date).toLocaleString('default', { month: 'short' }).toLowerCase();
    return `
        <a href="physical-performance-sc-session-editor.html" class="d-flex flex-row align-items-center justify-content-between p-2 custom-card bg-custom-gradient-primary max-height-58 radius-12">
            <div class="d-flex flex-row align-items-center justify-content-center gap-12">
                <div class="d-flex flex-column align-items-center justify-content-center bg-custom-breeze radius-5 min-w-40 min-height-42">
                    <span class="fw-bold text-14 text-black line-height-80">${day}</span>
                    <span class="fw-medium text-12 text-black line-height-80">${month}</span>
                </div>
                <div class="max-w-40 max-height-40 bg-avatar-purple radius-100">
                    <img src="${avatar}" class="small-avatar radius-100 object-fit-cover" alt="Player Avatar">
                </div>
                <div class="d-flex flex-column">
                    <span class="fw-medium text-12 text-start text-neutral">${name}</span>
                    <span class="fw-medium text-black text-16">${session}</span>
                </div>
            </div>
            <span class="d-flex align-items-center fw-bold ${statusContainerColor} p-6 text-12 ${statusTextColor} radius-5 max-height-20 border-btn-succes">${status}</span>
        </a>
    `;
}

function showSessionsFor(dateStr, container) {
    const list = sessionsByDate[dateStr] || [];
    container.innerHTML = list.map(renderSessionCard).join('') || `<p>No sessions for ${dateStr}</p>`;
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.monthly-calendar').forEach(calendarEl => {
        const sessionContainer = calendarEl.closest('.tab-pane').querySelector('.session-list'); // assumes the session list follows the calendar element

        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: '',
                center: '',
                right: ''
            },
            events: [
                {
                    title: '',
                    start: '2025-05-15',
                    display: 'list-item',
                    className: 'has-event'
                }
            ],
            dateClick: function (info) {
                showSessionsFor(info.dateStr, sessionContainer);
            }
        });

        calendar.render();
    });
});