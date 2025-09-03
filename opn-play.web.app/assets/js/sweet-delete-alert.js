document.addEventListener('DOMContentLoaded', function () {
    const deleteBtns = document.querySelectorAll('.event-delete-btn');
    deleteBtns.forEach(function(deleteBtn) {
        deleteBtn.addEventListener('click', function () {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                confirmButton: "btn btn-success mx-2",
                cancelButton: "btn btn-danger mx-2"
                },
                buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
                title: "Are you sure you want to delete?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "The event has been deleted.",
                        icon: "success"
                    }).then(() => {
                        // Close the Bootstrap modal after confirmation
                        const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('event-info-modal'));
                        modal.hide();
                    });
                // Add my event deletion logic here
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire({
                        title: "Cancelled",
                        text: "The event is safe.",
                        icon: "error"
                    });
                }
            });
        });
    });
});