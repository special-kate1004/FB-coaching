const chats = [
    {
        id: 1,
        name: "Antony Glennon",
        avatar: "./assets/png/chat-2.png",
        last: "Vivamus odio sagittis aliquet pretium mauris non nunc neque vitae. Sed.",
        lastTime: "1:30pm",
        unread: 0,
        role: "Defender",
        messages: [
            {from: "them", img: "./assets/png/chat-1.png", text: "Vivamus odio sagittis aliquet pretium mauris non nunc neque vitae. Sed.", time: "1:30pm"},
            {from: "me", text: "Vivamus odio sagittis aliquet pretium mauris non nunc neque vitae. Sed.", time: "1:30pm"},
            {from: "me", img: "./assets/png/default-avatar.png", text: "Vivamus odio sagittis aliquet pretium mauris non nunc neque vitae. Sed.", time: "1:30pm"}
        ]
    },
    {
        id: 2,
        name: "Morris Schiller",
        avatar: "./assets/png/chat-1.png",
        last: "At non id erat hendrerit laoreet a tellus justo. Sapien sapien fermentum.",
        lastTime: "1:30pm",
        unread: 0,
        role: "Defender",
        messages: [
            {from: "them", img: "./assets/png/chat-1.png", text: "Cursus nibh egestas pellentesque placerat nunc dictum vivamus fames. Amet posuere et nibh viverra blandit lorem. In facilisis tincidunt mattis in ultricies. Tortor habitasse quis tristique fames mauris. Odio dignissim pellentesque id mi lorem quis amet. Massa id tristique amet purus enim viverra. Nec purus commodo eget vestibulum.", time: "1:30pm"},
            {from: "me", text: "Vivamus odio sagittis aliquet pretium mauris non nunc neque vitae. Sed.", time: "1:30pm"},
            {from: "me", img: "", text: "Vivamus odio sagittis aliquet pretium mauris non nunc neque vitae. Sed.", time: "1:30pm"}
        ]
    },
    {
        id: 3,
        name: "Floyd Kovacek",
        avatar: "./assets/png/chat-3.png",
        last: "Cursus egestas cras aliquam porttitor ac a odio venenatis tortor. Dignissim.",
        lastTime: "1:30pm",
        unread: 0,
        role: "Goalkeeper",
        messages: [
            {from: "them", img: "./assets/png/chat-1.png", text: "Cursus egestas cras aliquam porttitor ac a odio venenatis tortor. Dignissim.", time: "1:30pm"}
        ]
    },
    {
        id: 4,
        name: "Group Name",
        avatar: "./assets/png/image-group.png",
        last: "Enim ut mattis pulvinar tristique odio diam non duis sagittis. Facilisis.",
        lastTime: "1:30pm",
        unread: 12,
        role: "group",
        messages: [
            {from: "them", img: "./assets/png/chat-1.png",  text: "Cursus nibh egestas pellentesque placerat nunc dictum vivamus fames. Amet posuere et nibh viverra blandit lorem. In facilisis tincidunt mattis in ultricies. Tortor habitasse quis tristique fames mauris. Odio dignissim pellentesque id mi lorem quis amet. Massa id tristique amet purus enim viverra. Nec purus commodo eget vestibulum.", time: "1:30pm"},
            {from: "me", text: "Vivamus odio sagittis aliquet pretium mauris non nunc neque vitae. Sed.", time: "1:30pm"},
            {from: "me", img: "", text: "Vivamus odio sagittis aliquet pretium mauris non nunc neque vitae. Sed.", textImg: "./assets/png/stadium.png", time: "1:30pm"}
        ]
    },
    {
        id: 5,
        name: "Miriam Bruen",
        avatar: "./assets/png/chat-1.png",
        last: "Sit donec massa proin amet consectetur. Curabitur quam mattis.",
        lastTime: "1:30pm",
        unread: 0,
        role: "Defender",
        messages: [
            {from: "them", text: "Sit donec massa proin amet consectetur. Curabitur quam mattis.", time: "1:30pm"}
        ]
    },
    {
        id: 6,
        name: "Lyle Dach",
        avatar: "./assets/png/chat-3.png",
        last: "Integer augue facilisis odio habitant arcu ac elementum netus. Quam.",
        lastTime: "1:30pm",
        unread: 0,
        role: "Goalkeeper",
        messages: [
            {from: "them", text: "Integer augue facilisis odio habitant arcu ac elementum netus. Quam.", time: "1:30pm"}
        ]
    }
];

let currentChatId = chats[3].id; // Default to Morris Schiller

function renderChatList() {
    $('#chatList').empty();
    chats.forEach(chat => {
        $('#chatList').append(`
            <div class="chat-list-item d-flex align-items-center position-relative gap-12 p-3 bg-white line-height-80${chat.id === currentChatId ? ' active' : ''}" data-id="${chat.id}">
                <div class="position-relative">
                    <img src="${chat.avatar}" class="radius-100 w-80 h-80 img-object-fit" alt="${chat.name}">
                    <span class="position-absolute w-10 h-10 bg-custom-aqua radius-8 online-status"></span>
                </div>
                <div class="d-flex gap-1 align-items-center chat-list-response">
                    <div class="d-flex flex-column gap-1">
                        <div class="fw-medium text-16 mb-1${chat.id === currentChatId ? ' text-success' : ' text-black'}">${chat.name}</div>
                        <div class="text-14 line-height-140 mb-1 fw-normal text-custom-empty-neutral${chat.id === currentChatId ? ' chat-list-last-active' : ''}">${chat.last}</div>
                        <div class="chat-list-time w-50-px p-1 fw-normal text-12 bg-custom-cyan-neutral radius-4${chat.id === currentChatId ? ' chat-list-time-active' : ''}">${chat.lastTime}</div>
                    </div> 
                    ${chat.unread > 0 ? `<div class="d-flex h-20 align-items-center"><span class="chat-list-unread p-1 fw-normal radius-4 text-12 text-success bg-tab-success">${chat.unread}</span></div>` : ''}
                </div>
            </div>
        `);
    });
}

function renderChatHeader(chat) {
    $('#chatHeaderAvatar').attr('src', chat.avatar);
    $('#chatHeaderAvatar').removeClass('d-none');
    if (chat.name === 'Group Name') {
        $('#chatHeaderAvatar').addClass('d-none');
        $('#chatGroupAvatar').removeClass('d-none');
    } else {
        $('#chatGroupAvatar').addClass('d-none');
    }
    $('#chatHeaderName').text(chat.name);
    if (chat.role || chat.role !== '') {
        $('#chatHeaderRole').text(chat.role).show();
        $('#chatHeaderRole').removeClass('d-none');
    } else {
        $('#chatHeaderRole').hide();
        $('#chatHeaderRole').addClass('d-none');
    }
    
}

function renderMessages(chat) {
    $('#chatMessages').empty();
    let prevTime = null;
    let shownTimes = {};
    let shownReTimes = {};

    chat.messages.forEach(msg => {
        if (msg.from === 'me') {
            let fileHtml = '';
            if (msg.img) {
                // Image preview
                fileHtml = `<img src="${msg.img}" class="img-object-fit me-2 mb-2 radius-8" style="max-width:180px;max-height:120px;" alt="Attachment">`;
            } else if (msg.fileName) {
                // File link for non-image
                fileHtml = `
                    <div class="mb-2">
                        <a href="${msg.fileUrl || '#'}" target="_blank" class="d-flex align-items-center text-decoration-none">
                            <i class="fa fa-paperclip me-2"></i>
                            <span>${msg.fileName}</span>
                        </a>
                    </div>
                `;
            }
            const isSingleLine = msg.text && msg.text.length <= 30;
            const isSameTime = prevTime === msg.time;
            prevTime = msg.time;

            let showAvatar = !shownTimes[msg.time];
            shownTimes[msg.time] = true;

            $('#chatMessages').append(`
                <div class="chat-message-row w-100 d-flex gap-8 sent justify-content-end" style="${(!showAvatar && isSameTime) ? 'margin-top:-18px;' : null}">
                    <div class="d-flex max-w-320 flex-column fw-normal p-20 gap-2 text-16 position-relative bg-aqua text-white border-custom-strong-neutral radius-tl-12 radius-br-12 radius-bl-12${isSingleLine ? ' single-line-msg' : ''}">
                        <div class="d-flex flex-column align-items-end gap-2">
                            ${fileHtml}
                            ${msg.text ? `<div>${msg.text}</div>` : ''}
                        </div>
                        <span class="d-flex align-items-center justify-content-center fw-normal w-50-px radius-4 p-1 text-12 text-custom-neutral-400 bg-message-sent text-nowrap">${msg.time}</span>
                    </div>
                    ${showAvatar ? `<img src="./assets/png/default-avatar.png" class="w-36 h-36 img-object-fit radius-100 chat-avatar-click" alt="Me">` : '<div class="w-36 h-36"></div>'}
                </div>
            `);
        } else {
            const isSingleLine = msg.text && msg.text.length <= 30;
            const isSameTime = prevTime === msg.time;
            prevTime = msg.time;
            
            let showAvatar = !shownReTimes[msg.time];
            shownReTimes[msg.time] = true;

            $('#chatMessages').append(`
                <div class="chat-message-row w-100 d-flex gap-8" style="${!showAvatar && isSameTime ? 'margin-top:-18px;' : null}">
                    <img src="${msg.img?msg.img:`./assets/png/image (8).png`}" class="w-36 h-36 img-object-fit radius-100 chat-avatar-click" alt="${chat.name}">
                    <div class="d-flex max-w-370 flex-column fw-normal bg-white p-20 text-16 gap-3 text-custom-empty-neutral radius-tr-12 radius-br-12 radius-bl-12${isSingleLine ? ' single-line-msg' : ''}" style="${isSameTime ? 'margin-top:-18px;' : ''}">
                        <div class="chat-message-bubble text-custom-empty-neutral">${msg.text}</div>
                        <span class="chat-list-time d-flex align-items-center justify-content-center fw-normal w-50-px radius-4 p-1 text-12 bg-custom-cyan-neutral text-nowrap">${msg.time}</span>
                    </div>
                </div>
            `);
        }
    });
    $('#chatMessages').scrollTop($('#chatMessages')[0].scrollHeight);
}

function switchChat(id) {
    currentChatId = id;
    const chat = chats.find(c => c.id === id);
    renderChatList();
    renderChatHeader(chat);
    renderMessages(chat);
}

function getSidebarHtml() {
    return `
        <div id="profileSidebar" class="chat-right h-auto d-flex flex-column custom-tab-content gap-8 position-relative max-w-296 p-12 radius-tr-12 radius-br-12 border-custom-strong-neutral bg-custom-neutral">
            <button id="closeSidebarBtn" class="btn btn-group-close position-absolute py-6 px-12">&times;</button>
            <div class="d-flex flex-column align-items-center border-custom-strong-neutral bg-white p-20 gap-20 radius-12">
                <div class="position-relative group-icon-hover">
                    <img id="groupIconImg" src="./assets/png/group.jpg" class="w-140 h-140 radius-100 object-fit-cover" alt="Group Icon">
                    <input type="file" id="groupIconInput" accept="image/*" style="display:none;">
                    <label for="groupIconInput" class="groupIconInput position-absolute w-100 top-50 start-50 translate-middle d-flex flex-column align-items-center justify-content-center" style="cursor:pointer;">
                        <img src="./assets/svg/camera.svg" class="h-32 w-32" alt="Camera Icon">
                        <span class="fw-medium text-white text-center text-16">Change<br>group icon</span>
                    </label>
                </div>
                <div class="d-flex flex-column gap-8">
                    <div class="d-flex gap-12">
                        <div class="fw-medium text-black text-20">Group Name</div>
                        <div class="d-flex align-items-center py-8 px-12 radius-5 border-tab-empty bg-white box-shadow-primary" onclick="editGroup()"><img src="./assets/svg/edit.svg" alt="edit"></div>
                    </div>
                    <div class="text-14 fw-normal text-muted line-height-140 text-custom-empty-neutral text-start mb-1">Cursus nibh egestas pellentesque placerat nunc dictum vivamus</div>
                    <a href="#" class="text-14 fw-normal line-height-140 text-decoration-none text-teal mt-minus-8 text-decoration-underline">Edit Description</a>
                </div>
            </div>
            <!-- Media -->
            <div class="media-slider position-relative w-100 min-height-160 overflow-hidden d-flex flex-column align-items-center border-custom-strong-neutral bg-white p-20 gap-12 radius-12">
                <div class="d-flex justify-content-between w-100 align-items-center mb-2">
                    <span class="fw-bold text-16">Media</span>
                    <div class="d-flex gap-8">
                        <span class="border-black-2 radius-5 p-6 bg-custom-gray fw-bold text-12 line-height-140 h-28">358</span>
                        <span class="d-flex align-items-center justify-content-center radius-5 px-12 py-8 fw-bold text-12 w-36 h-28 border-tab-empty line-height-140" onclick="slideMedia()">&#10095;</span>
                    </div>
                </div>
                <div class="position-relative w-100">
                    <div class="swiper mySwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img src="./assets/png/Rectangle-msg.png" class="w-70 h-70 radius-12 z-1 radius-12" alt="Season Card Background" />
                            </div>
                            <div class="swiper-slide">
                                <img src="./assets/png/Rectangle-msg-1.png" class="w-70 h-70 radius-12 z-1 radius-12" alt="Season Card Background" />
                            </div>
                            <div class="swiper-slide">
                                <img src="./assets/png/Rectangle-msg-2.png" class="w-70 h-70 radius-12 z-1 radius-12" alt="Season Card Background" />
                            </div>
                            <div class="swiper-slide">
                                <img src="./assets/png/Rectangle-msg-1.png" class="w-70 h-70 radius-12 z-1 radius-12" alt="Season Card Background" />
                            </div>
                            <div class="swiper-slide">
                                <img src="./assets/png/Rectangle-msg.png" class="w-70 h-70 radius-12 z-1 radius-12" alt="Season Card Background" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Members -->
            <div class="w-100 flex-1-0-0 d-flex flex-column align-items-center border-custom-strong-neutral bg-white p-20 gap-12 radius-12">
                <div class="d-flex justify-content-between w-100 align-items-center mb-2">
                    <span class="fw-bold text-16">Members</span>
                    <div class="d-flex gap-8">
                        <span class="border-black-2 radius-5 p-6 bg-custom-gray fw-bold text-12 line-height-140 h-28">12</span>
                        <span class="d-flex align-items-center justify-content-center radius-5 px-12 py-8 fw-bold text-12 w-36 h-28 border-tab-empty line-height-140">&#10095;</span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-8 custom-tab-content pr-25 mr-minus-20 max-h-232">
                    <!-- Members list (static for now) -->
                    <div class="d-flex flex-row align-items-center justify-content-between custom-card bg-custom-gradient-primary px-2 py-14 radius-12 max-height-48">
                        <div class="d-flex flex-row align-items-center gap-12">
                            <div class="max-w-32 max-height-32 bg-avatar-strong-purple radius-100">
                                <img src="./assets/png/avatar-nick.png" class="mini-avatar radius-100 object-fit-cover" alt="Player Avatar">
                            </div>
                            <span class="fw-medium text-12">Nick Townsend</span>
                        </div>
                        <span class="d-flex align-items-center fw-bold bg-custom-success p-6 text-12 text-cyan-success radius-5 max-height-20">Goalkeeper</span>
                    </div>
                    <div class="d-flex flex-row align-items-center justify-content-between custom-card bg-custom-gradient-primary px-2 py-14 radius-12 max-height-48">
                        <div class="d-flex flex-row align-items-center gap-12">
                            <div class="max-w-32 max-height-32 bg-avatar-success radius-100">
                                <img src="./assets/png/avatar-jacob.png" class="mini-avatar radius-100 object-fit-cover" alt="Player Avatar">
                            </div>
                            <span class="fw-medium text-12">Jacob Carney</span>
                        </div>
                        <span class="d-flex align-items-center fw-bold bg-custom-success p-6 text-12 text-cyan-success radius-5 max-height-20">Goalkeeper</span>
                    </div>
                    <div class="d-flex flex-row align-items-center justify-content-between custom-card bg-custom-gradient-primary px-2 py-14 radius-12 max-height-48">
                        <div class="d-flex flex-row align-items-center gap-12">
                            <div class="max-w-32 max-height-32 bg-avatar-success radius-100">
                                <img src="./assets/png/avatar-anthony.png" class="mini-avatar radius-100 object-fit-cover" alt="Player Avatar">
                            </div>
                            <span class="fw-medium text-12">Antony Glennon</span>
                        </div>
                        <span class="d-flex align-items-center fw-bold bg-custom-purple p-6 text-12 text-cyan-purple radius-5 max-height-20">Defender</span>
                    </div>
                    <div class="d-flex flex-row align-items-center justify-content-between custom-card bg-custom-gradient-primary px-2 py-14 radius-12 max-height-48">
                        <div class="d-flex flex-row align-items-center gap-12">
                            <div class="max-w-32 max-height-32 bg-avatar-warning radius-100">
                                <img src="./assets/png/avatar-matthew.png" class="mini-avatar radius-100 object-fit-cover" alt="Player Avatar">
                            </div>
                            <span class="fw-medium text-12">Matthew Baker</span>
                        </div>
                        <span class="d-flex align-items-center fw-bold bg-custom-purple p-6 text-12 text-cyan-purple radius-5 max-height-20">Defender</span>
                    </div>
                    <div class="d-flex flex-row align-items-center justify-content-between custom-card bg-custom-gradient-primary px-2 py-14 radius-12 max-height-48">
                        <div class="d-flex flex-row align-items-center gap-12">
                            <div class="max-w-32 max-height-32 bg-avatar-purple radius-100">
                                <img src="./assets/png/avatar-matthew.png" class="mini-avatar radius-100 object-fit-cover" alt="Player Avatar">
                            </div>
                            <span class="fw-medium text-12">Matthew Baker</span>
                        </div>
                        <span class="d-flex align-items-center fw-bold bg-custom-purple p-6 text-12 text-cyan-purple radius-5 max-height-20">Defender</span>
                    </div>
                    <div class="d-flex flex-row align-items-center justify-content-between custom-card bg-custom-gradient-primary px-2 py-14 radius-12 max-height-48">
                        <div class="d-flex flex-row align-items-center gap-12">
                            <div class="max-w-32 max-height-32 bg-avatar-purple radius-100">
                                <img src="./assets/png/avatar-nick.png" class="mini-avatar radius-100 object-fit-cover" alt="Player Avatar">
                            </div>
                            <span class="fw-medium text-12">Nick Townsend</span>
                        </div>
                        <span class="d-flex align-items-center fw-bold bg-custom-success p-6 text-12 text-cyan-success radius-5 max-height-20">Goalkeeper</span>
                    </div>
                    <div class="d-flex flex-row align-items-center justify-content-between custom-card bg-custom-gradient-primary px-2 py-14 radius-12 max-height-48">
                        <div class="d-flex flex-row align-items-center gap-12">
                            <div class="max-w-32 max-height-32 bg-avatar-success radius-100">
                                <img src="./assets/png/avatar-jacob.png" class="mini-avatar radius-100 object-fit-cover" alt="Player Avatar">
                            </div>
                            <span class="fw-medium text-12">Jacob Carney</span>
                        </div>
                        <span class="d-flex align-items-center fw-bold bg-custom-success p-6 text-12 text-cyan-success radius-5 max-height-20">Goalkeeper</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function showSidebar() {
    $('#profileSidebar').remove();
    $('.main-message-container').append(getSidebarHtml());
    setTimeout(() => {
        $('#profileSidebar').css({
            'transform': 'translateX(0)',
            'opacity': '1',
            'pointer-events': 'auto'
        });
        window.sidebarSwiper = new Swiper(".mySwiper", {
            slidesPerView: 4,
            centeredSlides: false,
            spaceBetween: 0,
            loop: true,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }, 10);
}

//media slider function
function slideMedia() {
    if (window.sidebarSwiper) {
        window.sidebarSwiper.slideNext();
    }
}

function editGroup() {
    var modal = new bootstrap.Modal(document.getElementById('dual-modal-edit-group'));
    modal.show();
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 0,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


$(function() {
    renderChatList();
    switchChat(currentChatId);
    
    $('#chatList').on('click', '.chat-list-item', function() {
        const id = Number($(this).data('id'));
        switchChat(id);
    });

    $('#sendBtn').on('click', function() {
        const val = $('#chatInput').val().trim();
        if (!val) return;
        const chat = chats.find(c => c.id === currentChatId);
        const d = new Date();
        let h = d.getHours();
        const m = d.getMinutes().toString().padStart(2, '0');
        const ampm = h >= 12 ? 'pm' : 'am';
        h = h % 12;
        h = h ? h : 12; // 0 should be 12
        const timeStr = `${h}:${m}${ampm}`;
        chat.messages.push({from: 'me', text: val, time: timeStr});
        $('#chatInput').val('');
        renderMessages(chat);
    });

    $('#attachImgBtn').on('click', function() {
        $('#fileInput').click();
    });

    $('#fileInput').on('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        const d = new Date();
        let h = d.getHours();
        const m = d.getMinutes().toString().padStart(2, '0');
        const ampm = h >= 12 ? 'pm' : 'am';
        h = h % 12;
        h = h ? h : 12; // 0 should be 12
        const timeStr = `${h}:${m}${ampm}`;
        reader.onload = function(ev) {
            const chat = chats.find(c => c.id === currentChatId);
            chat.messages.push({
                from: 'me',
                img: ev.target.result,
                text: $('#chatInput').val().trim(),
                time: timeStr
            });
            $('#chatInput').val('');
            renderMessages(chat);
        };
        reader.readAsDataURL(file);
    });

    $('#chatInput').on('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            $('#sendBtn').click();
        }
    });

    $('.main-message-container').on('change', '#groupIconInput', function(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(ev) {
            $('#groupIconImg').attr('src', ev.target.result);
        };
        reader.readAsDataURL(file);
    });

    // Use event delegation for sidebar open/close and group icon change
    $('.main-message-container').on('click', '#chatHeaderAvatar, .chat-avatar-click', function() {
        showSidebar();
    });

    $('.main-message-container').on('click', '#closeSidebarBtn', function() {
        $('#profileSidebar').css({
            'transform': 'translateX(120%)',
            'opacity': '0',
            'pointer-events': 'none'
        });
        setTimeout(() => $('#profileSidebar').remove(), 400);
    });

    $('#attachFileBtn').on('click', function() {
        $('#fileInput').val(''); // Reset input
        $('#fileInput').click();
    });

});