let calendar;

document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('full-calendar');
    const badgeDays = [
        { date: '2025-05-06', time: '09:00:00' },
        { date: '2025-05-09', time: '14:00:00' },
        { date: '2025-05-21', time: '10:00:00' },
        { date: '2025-05-23', time: '17:00:00' },
        { date: '2025-05-29', time: '15:00:00' },
    ];
    calendar = new FullCalendar.Calendar(calendarEl, {
        schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
        initialView: 'dayGridMonth',
        nowIndicator: true,
        slotLabelFormat: {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        },
        slotDuration: '01:00:00',
        slotMinTime: "00:00:00",
        slotMaxTime: "23:59:59",
        allDaySlot: false,
        editable: true,
        navLinks: true,
        selectable: true,
        selectMirror: true,
        initialDate: new Date(),
        firstDay: 1,
        dayMaxEventRows: 3,
        views: {
            timeGrid: {
                dayMaxEventRows: 3 // adjust to 6 only for timeGridWeek/timeGridDay
            }
        },
        headerToolbar: {
            left: 'title prev next',
            right: 'timeGridDay,timeGridWeek,dayGridMonth customButton fullScreenToggle'
        },
        events: [
            {
                title: 'Agility Drills',
                type: 'text',
                start: '2025-05-13T09:00:00',
                end: '2025-05-13T10:00:00',
                className: 'event-blue',
                extendedProps: {
                    icon: './assets/svg/event-blue.svg'
                }
            },
            {
                title: '',
                type: 'img',
                start: '2025-05-19T09:20:00',
                end: '2025-05-19T10:30:00',
                className: '',
                extendedProps: {
                    img: './assets/png/newport-county.png'
                }
            },
            {
                title: 'Strength & Conditioning',
                type: 'text',
                start: '2025-05-20T20:00:00',
                end: '2025-05-20T21:00:00',
                className: 'event-yellow',
                extendedProps: {
                    icon: './assets/svg/event-yellow.svg'
                }
            },
            {
                title: '',
                type: 'img',
                start: '2025-05-22T15:20:00',
                end: '2025-05-22T15:40:00',
                className: '',
                extendedProps: {
                    img: './assets/png/newport-county.png'
                }
            },
            {
                title: 'Agility Drills',
                type: 'text',
                start: '2025-05-24T09:00:00',
                end: '2025-05-24T10:00:00',
                className: 'event-blue',
                extendedProps: {
                    icon: './assets/svg/event-blue.svg'
                }
            },
            {
                title: 'Strength & Conditioning',
                type: 'text',
                start: '2025-05-24T11:00:00',
                end: '2025-05-24T11:30:00',
                className: 'event-purple',
                extendedProps: {
                    icon: './assets/svg/event-purple.svg'
                }
            },
            {
                title: 'Strength & Conditioning',
                type: 'text',
                start: '2025-05-24T13:00:00',
                end: '2025-05-24T13:20:00',
                className: 'event-purple',
                extendedProps: {
                    icon: './assets/svg/event-purple.svg'
                }
            },
            {
                title: 'Strength & Conditioning',
                type: 'text',
                start: '2025-05-24T13:00:00',
                end: '2025-05-24T13:30:00',
                className: 'event-purple',
                extendedProps: {
                    icon: './assets/svg/event-purple.svg'
                }
            },
            {
                title: 'Lunch',
                type: 'text',
                start: '2025-05-24T13:00:00',
                end: '2025-05-24T14:00:00',
                className: 'event-purple',
                extendedProps: {
                    icon: './assets/svg/event-purple.svg'
                }
            },
            {
                title: 'Team Meeting',
                type: 'text',
                start: '2025-05-24T16:30:00',
                end: '2025-05-24T17:00:00',
                className: 'event-purple',
                extendedProps: {
                    icon: './assets/svg/event-purple.svg'
                }
            },
            {
                title: 'East Hampton School Apperance',
                type: 'text',
                start: '2025-05-24T14:00:00',
                end: '2025-05-24T15:30:00',
                className: 'event-blue',
                extendedProps: {
                    icon: './assets/svg/event-blue.svg'
                }
            },
            {
                title: 'Strength & Conditioning',
                type: 'text',
                start: '2025-05-26T09:00:00',
                end: '2025-05-26T10:00:00',
                className: 'event-purple',
                extendedProps: {
                    icon: './assets/svg/event-purple.svg'
                }
            },
            {
                title: '',
                type: 'img',
                start: '2025-05-27T14:30:00',
                end: '2025-05-27T16:00:00',
                className: '',
                extendedProps: {
                    img: './assets/png/newport-county.png'
                }
            }
        ],
        customButtons: {
            customButton: {
                text: '+ Create Event',
                click: function() {
                    const modal = new bootstrap.Modal(document.getElementById('dual-modal-overlay'));
                    modal.show();
                }
            },
            fullScreenToggle: {
                text: '',
                click: function() {
                    const calendarEl = document.getElementById('full-calendar');
                    if (!document.fullscreenElement) {
                        if (calendarEl.requestFullscreen) {
                            calendarEl.requestFullscreen();
                        } else if (calendarEl.webkitRequestFullscreen) { 
                            calendarEl.webkitRequestFullscreen();
                        } else if (calendarEl.msRequestFullscreen) {
                            calendarEl.msRequestFullscreen();
                        }
                    } else {
                        if (document.exitFullscreen) {
                            document.exitFullscreen();
                        } else if (document.webkitExitFullscreen) {
                            document.webkitExitFullscreen();
                        } else if (document.msExitFullscreen) {
                            document.msExitFullscreen();
                        }
                    }
                }
            }
        },
        dayHeaderContent: function (args) {
            const viewType = args.view.type;
            if (viewType === 'timeGridWeek') {
                const date = args.date;
                const month = date.toLocaleString('default', { month: 'short' });
                const day = String(date.getDate()).padStart(2, '0');
                const weekday = date.toLocaleString('default', { weekday: 'short' });

                return {
                    html: `
                    <div class="custom-day-header">
                        <div class="month">${month}</div>
                        <div class="day">${day}</div>
                        <div class="weekday">${weekday}</div>
                    </div>
                    `
                };
            }
            if (viewType === 'dayGridMonth') {
                const date = args.date;
                const weekday = date.toLocaleString('default', { weekday: 'short' });

                return {html: `${weekday}`};
            }
        },
        dayCellContent: function(arg) {
            const dayNum = String(arg.date.getDate()).padStart(2, '0');
            if (arg.view.type === 'dayGridMonth') {
                return { html: `${dayNum}` };
            }
        return { html: '' };
        },
        eventContent: function(arg) {
            const type = arg.event.extendedProps.type || arg.event._def.extendedProps.type;
            const imgUrl = arg.event.extendedProps.img || './assets/png/newport-county.png';
            const viewType = arg.view.type;
            const iconUrl = arg.event.extendedProps.icon;
            
            if (type === 'img' && (viewType === 'dayGridMonth' || viewType === 'timeGridWeek')) {
                // Only show image
                return {
                    html: `<img src="${imgUrl}" class="event-img-only" alt="Event Image">`
                };
            } else if (type === 'text' && (viewType === 'dayGridMonth' || viewType === 'timeGridWeek' || viewType === 'timeGridDay')) {
                let html = '';
                if (arg.event.title) {
                    html += `<div class="event-title">${arg.event.title}</div>`;
                }
                if (iconUrl && viewType !== 'timeGridDay') {
                    html += `<img src="${iconUrl}" class="event-icon" alt="Event Icon">`;
                }
                return { html };
            } else {
                return {};
            }
        },
        eventClick: function(info) {
            // Prevent default browser navigation
            info.jsEvent.preventDefault();

            // Get event data
            const event = info.event;
            const ext = event.extendedProps || {};
            const type = ext.type || '';
            const iconUrl = ext.icon || '';
            const imgUrl = ext.img || './assets/png/newport-county.png';

            // Fill modal content
            document.getElementById('eventInfoTitle').textContent = event.title || 'Opposition Analysis';

            // Show modal (Bootstrap 5)
            const modal = new bootstrap.Modal(document.getElementById('event-info-modal'));
            modal.show();
        },
        eventDidMount: function(info) {
            if (info.view.type === 'dayGridMonth') {
                const dayCell = info.el.closest('.fc-daygrid-day');
                if (!dayCell) return;

                const eventParent = dayCell.querySelector('.fc-daygrid-day-events');
                // Get all event harnesses in this day cell
                const events = dayCell.querySelectorAll('.fc-daygrid-event-harness');
                
                if (events.length > 2) {
                    events.forEach(eventEl => {
                        const aTag = eventEl.querySelector('a.fc-event');
                        if (aTag) {
                            aTag.style.fontSize = '9px';
                            aTag.style.padding = '4px';
                            aTag.style.borderRadius = '4px';
                            aTag.style.maxHeight = '19px';
                        }
                        eventParent.style.marginTop = '-10px';
                    });
                }
            } else {
                const weekDayCell = info.el.closest('.fc-timegrid-col');
                if (!weekDayCell) return;
                // Get event's start hour (e.g., "13:00:00")
                const eventStart = info.event.start;
                let hour = eventStart.getHours() + 1; // push hour forward by 1
                
                if (hour < 10) hour = '0' + hour;
                
                const hourStr = `${hour}:00:00`;
                const slotSelector = `.fc-timegrid-slot[data-time="${hourStr}"]`;
                const slotEl = weekDayCell.querySelector(slotSelector);
                
                if (!slotEl) return;
                
                const slotRow = slotEl.closest('tr');
                
                if (!slotRow) return;
                
                const eventsInHour = slotRow.querySelectorAll('.fc-timegrid-event-harness');
                
                if(eventsInHour.length > 2) {
                    eventsInHour.forEach((eventEl, index) => {
                        const aTag = eventEl.querySelector('a.fc-event');
                        if (!aTag) return;
                        if (index < 2) {
                            aTag.style.padding = '3px';
                            aTag.style.borderRadius = '4px';
                            aTag.style.fontSize = '9px';
                        } else {
                            eventEl.style.display = 'none';
                        }
                    });
                    const moreCount = eventsInHour.length - 2;
                    let moreButton = slotRow.querySelector('.fc-more-indicator');
                    if (!moreButton) {
                        const moreDiv = document.createElement('div');
                        moreDiv.className = 'fc-more-indicator';
                        moreDiv.innerText = `+ ${moreCount}`;
                        slotRow.querySelector('.fc-timegrid-col-frame')?.appendChild(moreDiv);
                    }
                    // moreDiv.onclick = () => {
                        //     events.forEach((e, i) => {
                        //     if (i >= 2) e.style.display = 'flex';
                        //     });
                        //     moreDiv.style.display = 'none';
                        // };
                }
            }
        },
        moreLinkContent: function(args) {
            return `+${args.num}`;
        },
        datesSet: function(info) {
            // Run after calendar renders
            const currentMonth = info.start.getMonth();
            const viewType = info.view.type;

            document.querySelectorAll('.fc-timegrid-col[data-date]').forEach(col => {
                const dateStr = col.getAttribute('data-date');
                const colDate = new Date(dateStr);
                const colMonth = colDate.getMonth();

                // Clear previous styling
                col.style.backgroundColor = '';

                // Highlight if it's in a different month
                if (colMonth !== currentMonth) {
                    col.style.backgroundColor = '#F8F8FC80';
                }
            });

            if (viewType === 'timeGridDay') {
                document.querySelectorAll('.fc-timegrid-col-events').forEach(container => {
                    container.querySelectorAll('.fc-more-timegridday').forEach(el => el.remove());
                });

                document.querySelectorAll('.fc-timegrid-col-events').forEach(container => {
                    const harnesses = [...container.querySelectorAll('.fc-timegrid-event-harness')];

                    // Group by top offset (same timeslot)
                    const groups = {};
                    harnesses.forEach(harness => {
                        const top = harness.style.top || harness.style.inset?.split(" ")[0] || "0px";
                        if (!groups[top]) groups[top] = [];
                        groups[top].push(harness);
                    });

                    // Process each group
                    Object.entries(groups).forEach(([top, items]) => {
                    if (items.length > 1) {
                        // Show only first two
                        items.forEach((el, i) => {
                            el.style.display = i === 0 ? 'block' : 'none';
                        });

                        // Add +X badge
                        const more = document.createElement('div');
                        more.className = 'fc-more-timegridday';
                        more.innerText = `+${items.length - 1}`;
                        more.style.top = top;

                        container.appendChild(more);
                    }
                    });
                });
            }
        }
    });
    calendar.render();
    const createBtn = document.querySelector('.fc-fullScreenToggle-button');
    if (createBtn) {
        createBtn.innerHTML = `<img src="./assets/svg/maximize.svg" alt="expand" />`;
    }

    toggleAttachFiles();
});

const scheduleTabBtn = document.querySelector('button[data-bs-target="#pills-schedule"]');
if (scheduleTabBtn) {
    scheduleTabBtn.addEventListener('shown.bs.tab', function () {
        // Only re-render if the calendar element is visible
        const calendarEl = document.getElementById('full-calendar');
        if (calendar && calendarEl && calendarEl.offsetParent !== null) {
            calendar.render();
        }
    });
}


function toggleAttachFiles() {
    const toggle = document.getElementById('attendance-toggle');
    const checkbox = document.getElementById('attendance-checkbox');
    const attachSection = document.getElementById('attach-files-section');
    toggle.classList.toggle('active');
    checkbox.checked = toggle.classList.contains('active');
    if (checkbox.checked) {
        attachSection.classList.remove('d-none');
    } else {
        attachSection.classList.add('d-none');
    }
}