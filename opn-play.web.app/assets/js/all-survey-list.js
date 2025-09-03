// 1. Mock JSON data
const surveys = [
    { id: 1, name: "Wellness Survey", active: true },
    { id: 2, name: "Injury Report", active: false },
    { id: 3, name: "Training Feedback", active: true },
    { id: 4, name: "Nutrition Check", active: false },
    { id: 5, name: "Survey Name", active: true },
    { id: 5, name: "Survey Name", active: true },
    { id: 5, name: "Survey Name", active: true },
    { id: 5, name: "Survey Name", active: true },
    { id: 5, name: "Survey Name", active: true },
    { id: 5, name: "Survey Name", active: true }
];

let editingSurveyId = null;

// 2. Render surveys
function renderSurveys() {
    const container = document.querySelector('.survey-lists');
    container.innerHTML = '';
    surveys.forEach(survey => {

    if (editingSurveyId === survey.id) {
        // Inline edit mode
        container.innerHTML += `
        <div class="d-flex p-20 justify-content-between align-items-center max-height-88 bg-custom-gradient-primary border-custom-strong-neutral radius-12" data-id="${survey.id}">
            <input type="text" id="edit-survey-input" class="form-control fw-medium text-16 line-height-100" value="${survey.name}" style="max-width: 250px;">
            <div class="d-flex justify-content-center align-items-center gap-8">
            <button class="btn btn-default" onclick="saveSurveyEdit(${survey.id})">Save</button>
            <button class="btn btn-white" onclick="cancelSurveyEdit()">Cancel</button>
            </div>
        </div>
        `;
    } else {
        container.innerHTML += `
        <div class="d-flex p-20 justify-content-between align-items-center max-height-88 bg-custom-gradient-primary border-custom-strong-neutral radius-12" data-id="${survey.id}">
            <span class="fw-medium text-16 line-height-100">${survey.name}</span>
            <div class="d-flex justify-content-center align-items-center gap-8">
            <button class="d-flex align-items-center px-12 py-12 gap-12 bg-green-light radius-8 toggle-trigger border-0 max-height-48" onclick="toggleActive(${survey.id})">
                <span class="fw-medium text-16 text-cyan-black text-nowrap">${survey.active ? "Survey Active" : "Inactive"}</span>
                <div class="w-31 h-22 bg-custom-neutral rounded-1 position-relative custom-toggle ${survey.active ? "active" : ""}">
                <div class="position-absolute w-12 h-12 bg-custom-toggle-neutral radius-2-px top-4 left-4 toggle-indicator"></div>
                </div>
            </button>
            <button class="d-flex align-items-center justify-content-center bg-white p-20 border-tab-empty max-w-52 max-height-48 box-shadow-primary radius-8" onclick="editSurvey(${survey.id})">
                <img src="./assets/svg/icon-edit.svg" class="w-12 h-12" alt="Edit Icon">
            </button>
            <button class="d-flex align-items-center justify-content-center bg-white p-20 border-tab-empty max-w-52 max-height-48 box-shadow-primary radius-8" onclick="deleteSurvey(${survey.id})">
                <img src="./assets/svg/icon-trash.svg" class="w-12 h-12" alt="Trash Icon">
            </button>
            </div>
        </div>
        `;
    }
    });
}

// 3. Delete function
function deleteSurvey(id) {
    const idx = surveys.findIndex(s => s.id === id);
    if (idx > -1) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
        confirmButton: "btn btn-success mx-2",
        cancelButton: "btn btn-danger mx-2"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Are you sure you want to delete this survey?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
        surveys.splice(idx, 1);
        renderSurveys();
        swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "The survey has been deleted.",
            icon: "success"
        });
        } else if (
        result.dismiss === Swal.DismissReason.cancel
        ) {
        swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "The survey is safe.",
            icon: "error"
        });
        }
    });
    }
}

function editSurvey(id) {
    editingSurveyId = id;
    renderSurveys();
    setTimeout(() => {
    document.getElementById('edit-survey-input').focus();
    }, 0);
}

function saveSurveyEdit(id) {
    const input = document.getElementById('edit-survey-input');
    const newName = input.value.trim();
    if (newName) {
    const survey = surveys.find(s => s.id === id);
    if (survey) {
        survey.name = newName;
    }
    }
    editingSurveyId = null;
    renderSurveys();
}

function cancelSurveyEdit() {
    editingSurveyId = null;
    renderSurveys();
}

// 5. Toggle active
function toggleActive(id) {
    const survey = surveys.find(s => s.id === id);
    if (survey) {
    survey.active = !survey.active;
    renderSurveys();
    }
}

// Initial render
renderSurveys();