$(document).ready(function () {
    $('.prevalent-table').DataTable({
        columnDefs: [
            { targets: 0, orderable: false }
        ],
        paging: false,
        searching: false,
        info: false,
        ordering: true,
        responsive: true
    });

    $('.sortable-table').DataTable({
        order: [],
        paging: false,
        searching: false,
        info: false,
        ordering: true,
        responsive: true
    });

    $('.ecg-modal-table').DataTable({
        columnDefs: [
            { targets: 2, orderable: false },
            { targets: 3, orderable: false }
        ],
        paging: false,
        searching: false,
        info: false,
        ordering: true,
        responsive: true
    });

    $('.phase-library-table').DataTable({
        columnDefs: [
            { targets: 2, orderable: false },
            { targets: 3, orderable: false },
            { targets: 4, orderable: false }
        ],
        paging: false,
        searching: false,
        info: false,
        ordering: true,
        responsive: true
    });

    $('.session-library-table').DataTable({
        columnDefs: [
            { targets: 2, orderable: false },
            { targets: 3, orderable: false },
            { targets: 4, orderable: false }
        ],
        paging: false,
        searching: false,
        info: false,
        ordering: true,
        responsive: true
    });

    if (!$.fn.DataTable.isDataTable('.player-data-table')) {
        $('.player-data-table').DataTable({
            columnDefs: [
                { targets: 1, orderable: false },
                { targets: 2, orderable: false }
            ],
            paging: false,
            searching: false,
            info: false,
            ordering: true,
            responsive: true
        });
    }
});