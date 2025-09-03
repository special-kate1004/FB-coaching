document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.sort-item-container');
    const addButton = document.querySelector('.add-testing-btn'); // add a class to your add button

    if(addButton) {
        addButton.addEventListener('click', (e) => {
        const newItem = document.createElement('div');
        newItem.classList.add('d-flex', 'align-items-center', 'bg-custom-gradient-primary', 'max-height-118', 'gap-40', 'border-custom-strong-neutral', 'p-20', 'radius-12', 'sort');

        newItem.innerHTML = `
            <div class="d-flex flex-grow-1 align-items-start gap-20">
                <img src="./assets/svg/icon-dots.svg" class="w-12" alt="Item Pickup Icon">
                <div class="w-100 d-grid grid-col-2 gap-20">
                    <div class="form-group d-flex flex-column gap-2">
                        <label class="fw-medium text-14">Test Name</label>
                        <input class="radius-8 text-14 p-20 border-gray max-height-60 radius-8" type="text" placeholder="Cardio Screening">
                    </div>
                    <div class="form-group d-flex flex-column gap-2">
                        <label class="fw-medium text-14">Complete Every</label>
                        <input class="radius-8 text-14 p-20 border-gray max-height-60 radius-8" type="text" placeholder="Cardio Screening">
                    </div>
                </div>
            </div>
            <button class="delete-btn d-flex align-items-center justify-content-center bg-white min-height-72 border-btn-neutral btn-custom-shadow px-20 radius-8">
                <img src="./assets/svg/icon-trash.svg" class="w-12 h-12" alt="Delete Icon">
            </button>
        `;

        container.appendChild(newItem);
        const elements = document.querySelectorAll('.sort');
        elements.forEach((item) => {
                const sortable = new Sortable(item);
            });
        });
    }
    else
    {
        const sortItems = document.querySelectorAll('.sort');

        if(sortItems.length) {
            sortItems.forEach((item) => {
                const sortable = new Sortable(item);
            });
        }
    }

    document.addEventListener('click', function (e) {
        if (e.target.closest('.delete-btn')) {
            const sortItem = e.target.closest('.sort');
            sortItem.remove();
        }
    });
});

