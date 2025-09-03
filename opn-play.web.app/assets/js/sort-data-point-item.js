document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.sort-item-container');
    const addButton = document.querySelector('.add-testing-btn');

    if (addButton) {
        addButton.addEventListener('click', (e) => {
            const newItem = document.createElement('div');
            newItem.classList.add(
                'd-flex', 'flex-row', 'align-items-start',
                'bg-custom-gradient-primary', 'gap-20',
                'border-custom-strong-neutral', 'p-20', 'radius-12', 'sort'
            );

            newItem.innerHTML = `
                <img src="./assets/svg/icon-dots.svg" class="w-12" alt="Item Pickup Icon">
                <div class="w-100 d-flex flex-column gap-20">
                    <div class="d-flex align-items-center gap-40">
                        <div class="d-flex flex-grow-1 align-items-start gap-20">
                            <div class="w-100 d-grid grid-col-2 gap-20">
                                <div class="form-group d-flex flex-column gap-2">
                                    <label class="fw-medium text-14">Data Point Name</label>
                                    <input class="radius-8 text-14 p-20 border-gray max-height-60 radius-8" type="text" placeholder="VO2 Max">
                                </div>
                                <div class="form-group d-flex flex-column gap-2">
                                    <label class="fw-medium text-14">Measurement</label>
                                    <input class="radius-8 text-14 p-20 border-gray max-height-60 radius-8" type="text" placeholder="Units">
                                </div>
                            </div>
                        </div>
                        <button class="delete-btn d-flex align-items-center justify-content-center bg-white min-height-72 border-btn-neutral btn-custom-shadow px-20 radius-8">
                            <img src="./assets/svg/icon-trash.svg" class="w-12 h-12" alt="Delete Icon">
                        </button>
                    </div>

                    <button class="toggle-trigger d-flex align-items-center w-max-content px-12 py-12 gap-24 bg-custom-gradient-primary border-custom-strong-neutral radius-8">
                        <span class="fw-medium text-tab-primary text-12">Connect to Integration</span>
                        <div class="w-31 h-22 bg-custom-neutral rounded-1 position-relative custom-toggle">
                            <div class="position-absolute w-12 h-12 bg-custom-toggle-neutral radius-2-px top-4 left-4 toggle-indicator">
                            <input type="checkbox" class="integration-toggle-input d-none" name="integration_connected" value="1" autocomplete="off">
                            </div>
                        </div>
                    </button>

                    <div class="toggle-target d-none">
                        <div class="w-100 d-grid grid-col-2 gap-20">
                            <div class="form-group d-flex flex-column gap-2">
                                <label class="fw-medium text-14">Integration</label>
                                <input class="radius-8 text-14 p-20 border-gray max-height-60 radius-8" type="text" placeholder="Stat Sports - HR Polar">
                            </div>
                            <div class="form-group d-flex flex-column gap-2">
                                <label class="fw-medium text-14">Integration Point</label>
                                <input class="radius-8 text-14 p-20 border-gray max-height-60 radius-8" type="text" placeholder="Resting Heart Rate">
                            </div>
                        </div>
                    </div>
                </div>
            `;

            container.appendChild(newItem);

            const elements = document.querySelectorAll('.sort');
            elements.forEach((item) => {
                new Sortable(item);
            });
        });
    } else {
        const sortItems = document.querySelectorAll('.sort');
        if (sortItems.length) {
            sortItems.forEach((item) => {
                new Sortable(item);
            });
        }
    }

    document.addEventListener('click', function (e) {
        // Delete logic
        if (e.target.closest('.delete-btn')) {
            const sortItem = e.target.closest('.sort');
            sortItem.remove();
        }

        // Toggle logic - clicking the full toggle-trigger button
        if (e.target.closest('.toggle-trigger')) {
            const toggleWrapper = e.target.closest('.sort');
            const toggle = toggleWrapper.querySelector('.custom-toggle');
            const toggleTarget = toggleWrapper.querySelector('.toggle-target');
            const checkbox = toggle.querySelector('.integration-toggle-input');

            toggle.classList.toggle('active');
            toggleTarget.classList.toggle('d-none');
            if (checkbox) {
                checkbox.checked = toggle.classList.contains('active');
            }
            console.log('Toggle state:', checkbox.checked);
        }
    });
});
