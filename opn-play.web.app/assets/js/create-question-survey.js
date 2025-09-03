const QUESTION_TYPE_META = [
    { label: "Injury Report", value: "Injury Report", content_type: "none" },
    { label: "Multiple Choice", value: "Multiple Choice", content_type: "checkbox" },
    { label: "Single Choice", value: "Single Choice", content_type: "radio" },
    { label: "Free Text", value: "Free Text", content_type: "textarea" },
    { label: "Scale(1-10)", value: "Scale(1-10)", content_type: "scale", content_value: [1,2,3,4,5,6,7,8,9,10] },
    { label: "Scale(1-5)", value: "Scale(1-5)", content_type: "scale", content_value: [1,2,3,4,5] }
];

let surveyQuestions = [
    {id: 1, question: 'Report Injury', question_type: 'Injury Report', content_type: 'none', connect_data_point: 'Connect to data point'},
    {id: 2, question: 'Which areas did you train today?', question_type: 'Multiple Choice', content_type: 'checkbox', content_value:['Strength', 'Speed', ''], connect_data_point:'connect_data_point'},
    {id: 3, question: 'How was your overall match performance?', question_type: 'Single Choice', content_type: 'radio', content_value:['Below expectations'], connect_data_point:'connect_data_point'},
    {id: 4, question:'Additional comments about todays training', question_type: 'Free Text', content_type:'textarea', content_value:[''], connect_data_point:'connect_data_point'},
    {id: 5, question: 'Rate your energy level today', question_type: 'Scale(1-10)', content_type: 'scale', content_value:[1,2,3,4,5,6,7,8,9,10], connect_data_point:'connect_data_point'},
    {id: 6, question: 'How is your recovery status?', question_type: 'Scale(1-5)', content_type: 'scale', content_value:[1,2,3,4,5], connect_data_point:'connect_data_point'}
];

function initSortables() {

    new Sortable(document.getElementById('survey-questions-list'), {
      animation: 150,
      draggable: '.first-sort'
    });

    // Second level sortable
    document.querySelectorAll('.second-level').forEach(el => {
      new Sortable(el, {
        animation: 150,
        draggable: '.second-sort'
      });
    });

}

function renderQuestions() {
    const list = document.getElementById('survey-questions-list');
    list.innerHTML = '';
    surveyQuestions.forEach((q, idx) => {
    // Find meta for this question type
    const meta = QUESTION_TYPE_META.find(t => t.value === q.question_type) || {};
    
    // Question type select
    const typeSelect = `
        <select class="w-100 d-flex align-items-center bg-white text-12 text-select-primary show-tick selectpicker border-gray radius-8 min-height-60" onchange="setTimeout(() => updateQuestionType(${idx}, this.value), 100)">
        ${QUESTION_TYPE_META.map(t =>
            `<option value="${t.value}" ${q.question_type===t.value?'selected':''}>${t.label}</option>`
        ).join('')}
        </select>
    `;
    // Connect to Data Point input
    const connectInput = `
        <select class="w-100 d-flex align-items-center bg-custom-select-success text-12 text-select-primary selectpicker show-tick border-0 radius-8 min-height-60"
        onchange="surveyQuestions[${idx}].connect_data_point=this.value">
        <option value="Connect to Data Point" ${!q.connect_data_point || q.connect_data_point === 'Connect to Data Point' ? 'selected' : ''}>Connect to Data Point</option>
        <option value="Connected to Hours of Sleep" ${q.connect_data_point === 'Connected to Hours of Sleep' ? 'selected' : ''}>Connected to Hours of Sleep</option>
        </select>
    `;

    // Question input
    const questionInput = `<input type="text" class="fw-normal text-14 text-select-primary max-height-60 p-20 border-gray radius-8" placeholder="Question" value="${q.question||''}" 
        onchange="surveyQuestions[${idx}].question=this.value">`;

    // Content type rendering
    let contentHtml = '';
    if (q.content_type === 'checkbox' || q.content_type === 'radio') {

        const options = q.options || q.content_value || [];
        // Ensure checked state is tracked for each option
        if (!q._checked) q._checked = options.map(val => q.content_value && q.content_value.includes(val));
        contentHtml = `
        <div class="d-flex flex-column gap-1 second-level"> ${options.map((val, oidx) => {
            let checked = '';
            if (q.content_type === 'checkbox') {
                checked = q._checked && q._checked[oidx] ? 'checked' : '';
            } else if (q.content_type === 'radio') {
                checked = q.content_value && q.content_value[0] === val ? 'checked' : '';
            }
            return `
                <div class="d-flex align-items-center justify-content-between max-height-69 bg-custom-gradient-primary border-custom-strong-neutral p-12 gap-12 radius-12 second-sort">
                    <img src="./assets/svg/icon-six-dots.svg" class="w-12" alt="Grab Icon">
                    <input class="form-check-input w-20 h-20 custom-green-color"
                    type="${q.content_type}"
                    name="question_${idx}" ${checked}
                    onchange="
                        if('${q.content_type}'==='checkbox') {
                            surveyQuestions[${idx}]._checked = surveyQuestions[${idx}]._checked || [];
                            surveyQuestions[${idx}]._checked[${oidx}] = this.checked;
                        } else if('${q.content_type}'==='radio') {
                            if ('${val}' !== '') {
                                surveyQuestions[${idx}].content_value = ['${val}'];                    
                            }
                        }
                        renderQuestions();
                    "
                    >
                    <input type="text" class="form-control flex-grow-1 fw-normal text-12 text-select-primary p-14 h-45 border-gray" placeholder="Option" value="${val}"
                        onchange="
                            (surveyQuestions[${idx}].options || surveyQuestions[${idx}].content_value)[${oidx}] = this.value;
                            renderQuestions();
                        "
                    >
                </div>
            `;
        }).join('')}
        </div>
        <button type="button" class="d-flex align-items-center justify-content-center w-max-content bg-transparent p-12 border-0 gap-1" onclick="
            if(!surveyQuestions[${idx}].options) surveyQuestions[${idx}].options = surveyQuestions[${idx}].content_value ? [...surveyQuestions[${idx}].content_value] : [];
            surveyQuestions[${idx}].options.push('');
            if(surveyQuestions[${idx}]._checked) surveyQuestions[${idx}]._checked.push(false);
            renderQuestions();
        ">
            <img src="./assets/svg/icon-add-success.svg" alt="w-12 h-12" alt="Add Icon">
            <span class="fw-medium text-12 text-teal line-height-100">Add option</span>
        </button>
        `;
    } else if (q.content_type === 'textarea') {
        contentHtml = `<textarea class="form-control radius-8 text-16 p-18 border-gray" rows="3" id="notes" placeholder="Player's response will appear here...." oninput="surveyQuestions[${idx}].content_value[0]=this.value">${q.content_value && q.content_value[0] ? q.content_value[0] : ''}</textarea>`;
    } else if (q.content_type === 'scale') {
        let selected = Array.isArray(q.content_value) && q.content_value.length === 1 && typeof q.content_value[0] === 'number' ? q.content_value[0] : null;
        let scaleValues = meta.content_value || [];
        contentHtml = `<div class="d-grid gap-1${scaleValues.length > 5 ? ' grid-col-10' : ' grid-col-5'}">${scaleValues.map(val =>
        `<button type="button" class="d-flex align-items-center justify-content-center fw-medium text-16 border-btn-neutral min-height-60 box-shadow-primary radius-8${selected === val ? ' bg-custom-brand text-white' : ' bg-white text-tab-primary'}" onclick="selectScaleValue(${idx}, ${val})">${val}</button>`
        ).join('')}</div>`;
    }

    // Main question block
    const div = document.createElement('div');
    div.className = 'd-flex align-items-stretch bg-custom-gradient-primary gap-40 border-custom-strong-neutral p-20 radius-12 sort sortable cursor-grab first-sort';
    div.innerHTML = `
        <div class="d-flex flex-column flex-grow-1 align-items-stretch gap-20">
        <div class="d-flex align-items-start gap-20">
            <img src="./assets/svg/icon-six-dots.svg" class="w-12" alt="Grab Icon">
            <div class="d-flex flex-column flex-grow-1 gap-20">
            <div class="d-flex align-items-stretch gap-20">
                <div class="d-flex align-items-center flex-grow-1 gap-20">
                <div class="w-100 d-flex flex-column gap-2">
                    <label class="fw-medium text-14 text-black line-height-100" for="question">Question</label>
                    ${questionInput}
                </div>
                <div class="w-100 form-group d-flex flex-column gap-2">
                    <label class="fw-medium text-14 text-black line-height-100" for="date">Question Type</label>
                    ${typeSelect}
                </div>
                </div>
                <div class="form-group d-flex align-items-end max-w-172">
                ${connectInput}
                </div>
            </div>
            ${contentHtml}
            </div>
        </div>
        </div>
        <button class="d-flex align-items-center justify-content-center bg-white max-height-84 border-btn-neutral btn-custom-shadow px-20 radius-8 box-shadow-primary delete-btn" onclick="removeQuestion(${idx})">
            <img src="./assets/svg/icon-trash.svg" class="w-12 h-12" alt="Delete Icon">
        </button>
    `;
    list.appendChild(div);
    });
    initSortables();

    if (window.$ && $('.selectpicker').selectpicker) {
        $('.selectpicker').selectpicker('render');
    }
}

function resetSurveyModal() {
    // Reset surveyQuestions to initial state
    surveyQuestions = [
        {id: 1, question: 'Report Injury', question_type: 'Injury Report', content_type: 'none', connect_data_point: 'Connect to data point'},
        {id: 2, question: 'Which areas did you train today?', question_type: 'Multiple Choice', content_type: 'checkbox', content_value:['Strength', 'Speed', ''], connect_data_point:'connect_data_point'},
        {id: 3, question: 'How was your overall match performance?', question_type: 'Single Choice', content_type: 'radio', content_value:['Below expectations'], connect_data_point:'connect_data_point'},
        {id: 4, question:'Additional comments about todays training', question_type: 'Free Text', content_type:'textarea', content_value:[''], connect_data_point:'connect_data_point'},
        {id: 5, question: 'Rate your energy level today', question_type: 'Scale(1-10)', content_type: 'scale', content_value:[1,2,3,4,5,6,7,8,9,10], connect_data_point:'connect_data_point'},
        {id: 6, question: 'How is your recovery status?', question_type: 'Scale(1-5)', content_type: 'scale', content_value:[1,2,3,4,5], connect_data_point:'connect_data_point'}
    ];

    // Reset input fields
    document.getElementById('survey_title').value = '';
    document.getElementById('required_completion_time').value = '';
    document.getElementById('push_notification_time').value = '';
    // Reset selectpicker
    $('.selectpicker').val([]).selectpicker('refresh');

    renderQuestions();
}

window.selectScaleValue = function(idx, val) {
    surveyQuestions[idx].content_value = [val];
    renderQuestions();
};

window.addOption = function(idx) {
    surveyQuestions[idx].content_value.push('');
    renderQuestions();
};
window.removeOption = function(idx, oidx) {
    surveyQuestions[idx].content_value.splice(oidx, 1);
    renderQuestions();
};
window.removeQuestion = function(idx) {
    surveyQuestions.splice(idx, 1);
    renderQuestions();
};
window.updateQuestionType = function(idx, val) {
    const meta = QUESTION_TYPE_META.find(t => t.value === val);
    if (!meta) return;
    surveyQuestions[idx].question_type = meta.value;
    surveyQuestions[idx].content_type = meta.content_type;

    if (!surveyQuestions[idx].connect_data_point) {
        surveyQuestions[idx].connect_data_point = "Connect to Data Point";
    }

    if (meta.content_type === 'checkbox' || meta.content_type === 'radio') {
        surveyQuestions[idx].content_value = [''];
    } else if (meta.content_type === 'scale') {
        surveyQuestions[idx].content_value = [...meta.content_value];
    } else if (meta.content_type === 'textarea') {
        surveyQuestions[idx].content_value = [''];
    } else {
        delete surveyQuestions[idx].content_value;
    }
    renderQuestions();
};

document.getElementById('add-question-btn').onclick = function() {
    // Default to "Report Injury"
    surveyQuestions.push({
        id: Date.now(),
        question: 'Report Injury',
        question_type: 'Injury Report',
        content_type: 'none',
        connect_data_point: 'Connect to data point'
    });
    renderQuestions();
};

document.getElementById('log-survey-array-btn').onclick = function() {
    surveyQuestions.forEach(q => {
    if (q.content_type === 'checkbox') {
        const options = q.options || q.content_value || [];
        q.content_value = options.filter((val, oidx) => q._checked && q._checked[oidx]);
    }
    if (q._checked) {
        delete q._checked;
    }
    // For radio, content_value is already up to date
    });
    console.log(JSON.stringify(surveyQuestions, null, 2));
};
// Initial render
renderQuestions();
// Attach to modal show event
$('#create-survey-modal').on('show.bs.modal', resetSurveyModal);