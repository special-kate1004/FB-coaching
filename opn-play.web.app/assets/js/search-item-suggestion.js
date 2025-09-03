const allTags = [
  "Knee Sprain", "Wrist Sprain", "Shoulder Sprain", "Thumb Sprain",
  "Elbow Sprain", "Ankle Sprain", "Neck Sprain", "Back Sprain", "Hip Sprain"
];

function initTagSelector(wrapperId) {
  const wrapper = document.getElementById(wrapperId);
  wrapper.innerHTML = `
    <div class="w-100 d-flex flex-column align-items-center gap-8">
      <div class="input-group bg-white pr-8 radius-8 border-gray min-height-75">
        <input class="form-control py-2 pl-20 border-0 p-0" type="text" placeholder="Search" id="${wrapperId}-input">
        <span class="input-group-append d-flex align-items-center justify-content-center">
          <button class="d-flex btn align-items-center bg-white border-0 ms-n5 min-w-40 min-height-40" type="button">
            <img src="./assets/svg/icon-search.svg" alt="Search Icon">
          </button>
        </span>
      </div>
      <div class="w-100 d-flex flex-wrap align-items-start gap-8 tag-list" id="${wrapperId}-list"></div>
    </div>
  `;

  const tagInput = document.getElementById(`${wrapperId}-input`);
  const tagList = document.getElementById(`${wrapperId}-list`);

  let selectedTags = [];
  let hasInteracted = false;

  function renderTagList(filter = "") {
    const matching = allTags.filter(tag =>
      tag.toLowerCase().includes(filter.toLowerCase())
    );

    const sorted = [
      ...selectedTags.filter(t => matching.includes(t)),
      ...matching.filter(t => !selectedTags.includes(t))
    ];

    tagList.innerHTML = "";

    sorted.forEach(tag => {
      const tagEl = document.createElement('div');
      tagEl.className = 'd-flex align-items-center justify-content-center text-16 text-tab-primary px-32 py-20 radius-8 border-tab-empty box-shadow-primary max-height-48 tag-suggestion';
      tagEl.textContent = tag;

      if (selectedTags.includes(tag)) {
        tagEl.classList.add('selected');
      }

      tagEl.addEventListener('click', () => {
        if (!selectedTags.includes(tag)) {
          selectedTags.unshift(tag);
        } else {
          selectedTags = selectedTags.filter(t => t !== tag);
          selectedTags.unshift(tag);
        }
        renderTagList(tagInput.value);
      });

      tagList.appendChild(tagEl);
    });

    tagList.style.display = sorted.length > 0 ? 'flex' : 'none';
  }

  tagInput.addEventListener('input', () => {
    hasInteracted = true;
    renderTagList(tagInput.value);
  });

  tagInput.addEventListener('focus', () => {
    if (hasInteracted || tagInput.value.trim().length > 0) {
      renderTagList(tagInput.value);
    }
  });
}

// ✅ Initialize multiple pickers
initTagSelector('injury-tags');
initTagSelector('illness-tags');
initTagSelector('medification-tags');