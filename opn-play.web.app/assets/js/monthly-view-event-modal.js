const sharedEvents = [
    {
        title: 'Strength & Power',
        start: '2025-05-15T10:00:00',
        end: '2025-05-15T11:00:00',
    },
    {
        title: 'Recovery',
        start: '2025-06-12T09:00:00',
        end: '2025-06-12T10:00:00',
    }

];

let startDate = null;
let endDate = null;

document.addEventListener('DOMContentLoaded', function () {

    function parseDateString(dateStr) {
        const [year, month, day] = dateStr.split('-').map(Number);
        return new Date(year, month - 1, day);
    }

    function formatDate(date) {
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    }

    const calendarThisEl = document.querySelector('.calendar-this-month');
    const calendarNextEl = document.querySelector('.calendar-next-month');

    const calendarThis = new FullCalendar.Calendar(calendarThisEl, {
        initialView: 'dayGridMonth',
        initialDate: new Date(),
        headerToolbar: { left: '', center: 'title', right: 'customPrev,customNext' },
        events: sharedEvents.map(e => ({ title: e.title, start: e.start, end: e.end, display: 'list-item', className: 'has-event' })),
        titleFormat: { month: 'long' },
        dayHeaderFormat: { weekday: 'narrow' },
        customButtons: {
            customPrev: { text: '', click: () => { calendarThis.prev(); refreshRangeHighlight(); applyMinDateLogic(); }},
            customNext: { text: '', click: () => { calendarThis.next(); refreshRangeHighlight(); applyMinDateLogic(); }}
        },
        dateClick: handleDateClick
    });

    const calendarNext = new FullCalendar.Calendar(calendarNextEl, {
        initialView: 'dayGridMonth',
        initialDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
        headerToolbar: { left: '', center: 'title', right: 'customPrev,customNext' },
        events: sharedEvents.map(e => ({ title: e.title, start: e.start, end: e.end, display: 'list-item', className: 'has-event' })),
        titleFormat: { month: 'long' },
        dayHeaderFormat: { weekday: 'narrow' },
        customButtons: {
            customPrev: { text: '', click: () => { calendarNext.prev(); refreshRangeHighlight(); applyMinDateLogic(); }},
            customNext: { text: '', click: () => { calendarNext.next(); refreshRangeHighlight(); applyMinDateLogic(); }}
        },
        dateClick: handleDateClick
    });

    calendarThis.render();
    calendarNext.render();

    function handleDateClick(info) {
        if (!startDate) {
            startDate = info.date;
            endDate = null;
        } else if (!endDate) {
            if (info.date < startDate) {
                startDate = info.date;
            } else {
                endDate = info.date;
                console.log(`start_date: '${formatDate(startDate)}', end_date: '${formatDate(endDate)}'`);
            }
        } else {
            startDate = info.date;
            endDate = null;
        }
        refreshRangeHighlight();
        applyMinDateLogic();
    }

    function refreshRangeHighlight() {
        clearSelectedClasses(calendarThisEl);
        clearSelectedClasses(calendarNextEl);

        if (!startDate) return;

        const rangeEnd = endDate || startDate;
        markRange(calendarThisEl, startDate, rangeEnd);
        markRange(calendarNextEl, startDate, rangeEnd);
    }

    function applyMinDateLogic() {
        if (!startDate || endDate) {
            resetDisabledDates();
            return;
        }

        const minEndDate = new Date(startDate);
        minEndDate.setDate(minEndDate.getDate() + 1);

        calendarNextEl.querySelectorAll('.fc-daygrid-day').forEach(dayEl => {
            const dateStr = dayEl.getAttribute('data-date');
            const currentDate = parseDateString(dateStr);
            if (currentDate < minEndDate) {
                dayEl.classList.add('fc-day-disabled');
                dayEl.style.pointerEvents = 'none';
                dayEl.style.opacity = '0.5';
            } else {
                dayEl.classList.remove('fc-day-disabled');
                dayEl.style.pointerEvents = '';
                dayEl.style.opacity = '';
            }
        });
    }

    function resetDisabledDates() {
        calendarNextEl.querySelectorAll('.fc-daygrid-day').forEach(dayEl => {
            dayEl.classList.remove('fc-day-disabled');
            dayEl.style.pointerEvents = '';
            dayEl.style.opacity = '';
        });
    }

    function clearSelectedClasses(container) {
        container.querySelectorAll('.fc-daygrid-day').forEach(el => {
            el.classList.remove('selected', 'in-range');
        });
    }

    function markRange(container, rangeStart, rangeEnd) {
        const startTime = rangeStart.getTime();
        const endTime = rangeEnd.getTime();
        container.querySelectorAll('.fc-daygrid-day').forEach(el => {
            const dateStr = el.getAttribute('data-date');
            const date = parseDateString(dateStr);
            const time = date.getTime();
            if (time === startTime || time === endTime) {
                el.classList.add('selected');
            } else if (time > startTime && time < endTime) {
                el.classList.add('in-range');
            }
        });
    }

    highlightEventDays(calendarThis, sharedEvents);
    highlightEventDays(calendarNext, sharedEvents);

    function highlightEventDays(calendar, events) {
        const dayEls = calendar.el.querySelectorAll('.fc-daygrid-day');
        dayEls.forEach(dayEl => {
            const dateStr = dayEl.getAttribute('data-date');
            if (events.some(e => e.start.startsWith(dateStr))) {
                dayEl.classList.add('event-day');
            } else {
                dayEl.classList.remove('event-day');
            }
        });
    }
});
