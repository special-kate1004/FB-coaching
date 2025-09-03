const today = new Date();
const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

let wv = new WeekView('#calendar', { 
    minDate: firstDayOfMonth,
    maxDate: lastDayOfMonth,
    startDate: today, // Focus on today
    showHeader: false,
    days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    cellClass: {
        'today': date => date.toLocaleDateString() === today.toLocaleDateString(),
        'finalday': date => date.toLocaleDateString() === lastDayOfMonth.toLocaleDateString()
    },
    onSelect: date => { 
        // Handle date selection
    },
    scrollable: true // Enable horizontal scroll (if supported by the library)
});
