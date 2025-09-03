const players = [
    {
        id: 1,
        name: "John Doe",
        role: "Staff",
        email: "email@login.com",
        phone: "+44070707070",
        avatar: "./assets/png/player-avatar.png"
    },
    {
        id: 2,
        name: "Nelson Jardim",
        role: "Goalkeeper",
        email: "email@login.com",
        phone: "+44070107170",
        avatar: "./assets/png/avatar-img-1.png"
    },
    {
        id: 3,
        name: "Antony Glennon",
        role: "Goalkeeper",
        email: "email@login.com",
        phone: "+44070101010",
        avatar: "./assets/png/avatar-img-2.png"
    },
    {
        id: 4,
        name: "Nelson Jardim",
        role: "Defender",
        email: "email@login.com",
        phone: "+44020102020",
        avatar: "./assets/png/avatar-img-3.png"
    },
    {
        id: 5,
        name: "Nelson Jardim",
        role: "Defender",
        email: "email@login.com",
        phone: "+44020202020",
        avatar: "./assets/png/no-profile-image.png"
    },
    {
        id: 6,
        name: "Nelson Jardim",
        role: "Defender",
        email: "email@login.com",
        phone: "+44020504010",
        avatar: "./assets/png/avatar-img-7.png"
    },
    {
        id: 7,
        name: "Michale Brown",
        role: "Midfield",
        email: "email@login.com",
        phone: "+44070202020",
        avatar: "./assets/png/avatar-img-3.png"
    },
    {
        id: 8,
        name: "David Khan",
        role: "Foward",
        email: "email@login.com",
        phone: "+44070102030",
        avatar: "./assets/png/avatar-img-3.png"
    },
    {
        id: 9,
        name: "Danyl Goodall",
        role: "Foward",
        email: "email@login.com",
        phone: "+44070347070",
        avatar: "./assets/png/avatar-img-3.png"
    }
    ];

const dashboardCards = [
    {
        type: "useful_links",
        title: "Useful links",
        items: [
        {
            id: 1,
            title: "Link title",
            url: "http://useful_link.com/main/?345j23dwl234"
        },
        {
            id: 2,
            title: "Link title",
            url: "http://useful_link.com/main/?345j23dwl234"
        },
        {
            id: 3,
            title: "Link title",
            url: "http://useful_link.com/main/?345js3dwl234"
        },
        {
            id: 4,
            title: "Another Link",
            url: "https://example.com/resource"
        }
        ]
    },
    {
        type: "group_manager",
        title: "Group Manager",
        items: [
        {
            id: 1,
            name: "Group Name",
            members: 12
        },
        {
            id: 2,
            name: "Group Name",
            members: 12
        },
        {
            id: 3,
            name: "Group Name",
            members: 12
        },
        {
            id: 4,
            name: "Group Name",
            members: 12
        },
        {
            id: 5,
            name: "Group Name",
            members: 12
        },
        {
            id: 6,
            name: "Group Name",
            members: 12
        },
        {
            id: 7,
            name: "Group Name",
            members: 12
        },
        {
            id: 8,
            name: "Group Name",
            members: 12
        },
        {
            id: 9,
            name: "Coaches",
            members: 5
        }
        ]
    },
    {
        type: "role_manager",
        title: "Role Manager",
        items: [
        {
            id: 1,
            name: "Role Name"
        },
        {
            id: 2,
            name: "Admin"
        },
        {
            id: 3,
            name: "Admin"
        },
        {
            id: 4,
            name: "Admin"
        },
        {
            id: 5,
            name: "Admin"
        },
        {
            id: 6,
            name: "Admin"
        },
        {
            id: 7,
            name: "Admin"
        }
        ]
    }
    ];
    
const permissionsList = [
    {
        icon: "./assets/svg/icon-home-success.svg",
        title: "Home",
        description: "Nunc vel pharetra nisl et orci. Id tempor turpis vulputate gravida turpis aenean montes. Convallis orci fusce in massa. In ac nibh."
    },
    {
        icon: "./assets/svg/icon-book-success.svg",
        title: "Training",
        description: "Sit cursus mauris facilisi a convallis. Turpis semper tristique pharetra purus habitant nec. Praesent ut ullamcorper amet vel."
    },
    {
        icon: "./assets/svg/icon-clock-success.svg",
        title: "Recovery",
        description: "Ultricies urna lectus ullamcorper enim. Odio lacus at congue mattis. Tristique lorem pellentesque donec vitae nec at sit quam."
    },
    {
        icon: "./assets/svg/icon-user-success.svg",
        title: "Players",
        description: "Ultrices morbi morbi in vivamus accumsan placerat suscipit. Lobortis massa fermentum et aliquam. Turpis in consectetur."
    },
    {
        icon: "./assets/svg/icon-tree-success.svg",
        title: "Integrations",
        description: "Ultrices morbi morbi in vivamus accumsan placerat suscipit. Lobortis massa fermentum et aliquam. Turpis in consectetur."
    },
    {
        icon: "./assets/svg/icon-doc-success.svg",
        title: "News",
        description: "Mattis faucibus sit vestibulum tellus tellus feugiat. Gravida felis interdum elementum integer eleifend sagittis. Morbi nam eget ac."
    },
    {
        icon: "./assets/svg/icon-calendar-success.svg",
        title: "Calendar",
        description: "Fermentum duis arcu nunc sit purus faucibus molestie vitae. Donec pulvinar lacus morbi donec nisl sagittis amet nunc. Nunc."
    },
    {
        icon: "./assets/svg/icon-message-success.svg",
        title: "Messages",
        description: "Sed eget adipiscing a malesuada hac. Elit pretium dui orci egestas est ultrices nulla adipiscing augue. Sem amet id."
    }
    ];

    // render html function
function staffCard(player) {
    return `
        <div class="d-flex flex-column position-relative align-items-start h-100 bg-custom-gradient-primary-not-hover p-20 gap-20 border-gray radius-12">
          <div class="d-flex align-items-center gap-12">
            <div class="d-flex align-items-center justify-content-center bg-white w-60 h-60 radius-100">
              <img src="${player.avatar}" class="w-100 h-100 radius-100" alt="Player Avatar">
            </div>
            <div class="d-flex flex-column align-items-start gap-8">
              <span class="d-flex align-items-center justify-content-center fw-bold max-height-20 bg-custom-gray text-12 text-strong-neutral p-6 radius-5 border-btn-success">Staff</span>
              <span class="fw-medium text-16 text-black line-height-100">${player.name}</span>
            </div>
          </div>
          <div class="w-100 d-flex flex-column align-items-start gap-8">
            <div class="w-100 d-flex align-items-center bg-white p-2 gap-8 radius-12">
              <div class="d-flex align-items-center justify-content-between w-32 h-32 bg-custom-gray p-10 gap-8 radius-8">
                <img src="./assets/svg/icon-send.svg" class="w-12 h-12" alt="Send Icon" />
              </div>
              <div class="d-flex flex-column align-items-start gap-1">
                <div class="fw-medium text-12 text-black line-height-100 opacity-0-5">Email</div>
                <div class="fw-medium text-12 text-black line-height-100">${player.email}</div>
              </div>
            </div>
            <div class="w-100 d-flex align-items-center bg-white p-2 gap-8 radius-12">
              <div class="d-flex align-items-center justify-content-between w-32 h-32 bg-custom-gray p-10 gap-8 radius-8">
                <img src="./assets/svg/icon-phone.svg" class="w-12 h-12" alt="Phone Icon" />
              </div>
              <div class="d-flex flex-column align-items-start gap-1">
                <div class="fw-medium text-12 text-black line-height-100 opacity-0-5">Mobile Number</div>
                <div class="fw-medium text-12 text-black line-height-100">${player.phone}</div>
              </div>
            </div>
          </div>
          <button class="d-flex align-items-center justify-content-center w-32 h-32 bg-white position-absolute top-9 end-9 border-gray p-2 radius-8 box-shadow-primary dropdown-toggle z-1" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-three-dots text-black"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-end bg-white p-2 gap-8">
            <li><button class="dropdown-item bg-white fw-medium text-14 line-height-100 py-12 radius-8" type="button">Role/Permissions</button></li>
            <li><button class="dropdown-item mt-2 bg-white fw-medium text-14 line-height-100 py-12 radius-8" type="button" data-bs-toggle="modal" data-bs-target="#new-edit-member-modal">Edit</button></li>
            <li><button class="dropdown-item mt-2 bg-white fw-medium text-14 line-height-100 py-12 radius-8" type="button">Resend Invite</button></li>
            <li><button class="dropdown-item mt-2 bg-white fw-medium text-14 line-height-100 py-12 radius-8" type="button">Delete</button></li>
          </ul>
        </div>
    `;
}

function memberCard(player) {
      // Role color class
    let roleClass = "bg-custom-success text-cyan-success";
    if (player.role === "Defender") roleClass = "bg-custom-purple text-cyan-purple";
    if (player.role === "Midfield") roleClass = "bg-custom-warning text-cyan-warning";
    if (player.role === "Forward") roleClass = "bg-custom-error text-cyan-error";
    return `
        <div class="d-flex position-relative align-items-start flex-column h-100 bg-custom-gradient-primary-not-hover p-1 border-gray radius-12">
          <div class="d-flex position-relative h-145 custom-img-card-container w-100">
            <div class="d-flex z-1 gap-3-5 pr-4">
              <div class="d-flex flex-column w-55-percent overflow-hidden pt-20 radius-bl-12">
                <img src="${player.avatar}" class="w-100 radius-bl-12 object-fit-cover object-position-center-minus-20-percent" alt="Player Avatar Image" />
              </div>
              <div class="d-flex flex-column max-w-75 gap-12 pt-40">
                <span class="d-flex align-items-center fw-bold w-max-content ${roleClass} p-6 text-12 radius-5 max-height-20">${player.role}</span>
                <span class="fw-medium text-white text-20">${player.name}</span>
              </div>
            </div>
            <button class="d-flex align-items-center justify-content-center position-absolute max-w-24 max-height-24 p-1 top-9 end-9 border-0 bg-btn-3-dots radius-5 dropdown-toggle z-1" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-three-dots text-white"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end bg-white p-2 gap-8">
              <li><button class="dropdown-item bg-white fw-medium text-14 line-height-100 py-12 radius-8" type="button">Role/Permissions</button></li>
              <li><button class="dropdown-item mt-2 bg-white fw-medium text-14 line-height-100 py-12 radius-8" type="button" data-bs-toggle="modal" data-bs-target="#new-edit-member-modal">Edit</button></li>
              <li><button class="dropdown-item mt-2 bg-white fw-medium text-14 line-height-100 py-12 radius-8" type="button">Resend Invite</button></li>
              <li><button class="dropdown-item mt-2 bg-white fw-medium text-14 line-height-100 py-12 radius-8" type="button">Delete</button></li>
            </ul>
          </div>
          <div class="w-100 d-flex flex-column align-items-start px-12 py-12 gap-8">
            <div class="w-100 d-flex align-items-center bg-white p-2 gap-8 radius-12">
              <div class="d-flex align-items-center justify-content-between w-32 h-32 bg-custom-gray p-10 gap-8 radius-8">
                <img src="./assets/svg/icon-send.svg" class="w-12 h-12" alt="Send Icon" />
              </div>
              <div class="d-flex flex-column align-items-start gap-1">
                <div class="fw-medium text-12 text-black line-height-100 opacity-0-5">Email</div>
                <div class="fw-medium text-12 text-black line-height-100">${player.email}</div>
              </div>
            </div>
            <div class="w-100 d-flex align-items-center bg-white p-2 gap-8 radius-12">
              <div class="d-flex align-items-center justify-content-between w-32 h-32 bg-custom-gray p-10 gap-8 radius-8">
                <img src="./assets/svg/icon-phone.svg" class="w-12 h-12" alt="Phone Icon" />
              </div>
              <div class="d-flex flex-column align-items-start gap-1">
                <div class="fw-medium text-12 text-black line-height-100 opacity-0-5">Mobile Number</div>
                <div class="fw-medium text-12 text-black line-height-100">${player.phone}</div>
              </div>
            </div>
          </div>
        </div>
    `;
}

function clubInfoCard() {
    return `
        <div class="d-flex flex-column align-items-center justify-content-end gap-40 radius-12 custom-club-container pt-40 px-20 pb-20">
          <div class="d-flex flex-column gap-12">
            <div class="position-relative">
              <img id="club-logo" src="./assets/png/club-logo.png" class="club-logo radius-100 object-fit-cover" alt="Club Logo">
              <input type="file" id="club-logo-change" accept="image/*" style="display:none;">
              <label for="club-logo-change" class="d-flex align-items-center justify-content-center bg-white position-absolute top-10 end-15 border-0 p-2 radius-100 box-shadow-primary cursor-pointer">
                <img src="./assets/svg/icon-camera.svg" class="w-14 h-14" alt="Camera Icon">
              </label>
            </div>
            <div class="d-flex flex-column gap-8">
              <span class="fw-medium text-white text-center opacity-0-5 line-height-100">Club Name</span>
              <div class="d-flex align-items-center gap-8">
                <span class="fw-medium text-20 text-white line-height-100">Prime City FC</span>
                <button class="d-flex align-items-center justify-content-center bg-transparent border-0" data-bs-toggle="modal" data-bs-target="#transfer-club-ownership-modal">
                  <img src="./assets/svg/icon-edit-white.svg" class="w-14 h-14" alt="Edit Icon">
                </button>
              </div>
            </div>
          </div>
          <div class="w-100 d-grid grid-col-2 gap-8">
            <div class="d-flex flex-column align-items-center bg-custom-gradient-primary-not-hover px-12 py-20 gap-1 radius-8">
              <span class="fw-medium text-12 text-black opacity-0-5 line-height-100">Total Members</span>
              <span class="fw-medium text-20 text-tab-primary line-height-100">23</span>
            </div>
            <div class="d-flex flex-column align-items-center bg-custom-gradient-primary-not-hover px-12 py-20 gap-1 radius-8">
              <span class="fw-medium text-12 text-black opacity-0-5 line-height-100">Total Players</span>
              <span class="fw-medium text-20 text-tab-primary line-height-100">15</span>
            </div>
          </div>
        </div>
    `;
}

function renderDashboardCards(cards, containerSelector) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = 
        clubInfoCard() +
        cards.map(card => {
          return `
            <div class="d-flex flex-column bg-white p-20 gap-20 border-custom-strong-neutral radius-12 dashboard-card" data-type="${card.type}">
              <div class="d-flex align-items-center justify-content-between">
                <span class="fw-medium text-20 text-black line-height-100">${card.title}</span>
                <button class="d-flex align-items-center justify-content-center bg-custom-brand fw-medium border-0 radius-8 px-20 py-12 min-height-45 gap-1" data-bs-toggle="modal" data-bs-target="${getNewTypeModalId(card.type)}">
                  <img src="./assets/svg/icon-plus.svg" class="w-12 h-12" alt="Add Icon">
                  <span class="text-12 text-white text-nowrap line-height-100">${getButtonText(card.type)}</span>
                </button>
              </div>
              <div class="d-flex flex-column gap-8 custom-tab-content${getMaxHeight(card.type)}">
                ${card.items.map(item => {
                  if (card.type === "useful_links") {
                    return `
                      <div class="d-flex align-items-center justify-content-between max-height-76 bg-custom-gradient-primary-not-hover p-20 gap-20 border-custom-strong-neutral radius-12" data-id="${item.id}">
                        <div class="d-flex flex-grow-1 flex-column gap-12 overflow-hidden">
                          <span class="fw-medium text-16 text-black line-height-100">${item.title}</span>
                          <a href="${item.url}" class="fw-medium max-w-161 text-16 text-aqua text-decoration-underline text-truncate">${item.url}</a>
                        </div>
                        <div class="d-flex align-items-center gap-8">
                          <button class="d-flex align-items-center justify-content-center bg-white px-20 py-12 border-tab-empty max-w-52 box-shadow-primary radius-8">
                            <img src="./assets/svg/icon-edit.svg" class="w-12 h-12" alt="Edit Icon">
                          </button>
                          <button class="d-flex align-items-center justify-content-center bg-white px-20 py-12 border-tab-empty max-w-52 box-shadow-primary radius-8 event-delete-btn" data-type="useful_links" data-id="${item.id}">
                            <img src="./assets/svg/icon-trash.svg" class="w-12 h-12" alt="Trash Icon">
                          </button>
                        </div>
                      </div>
                    `;
                  }
                  if (card.type === "group_manager") {
                    return `
                      <div class="d-flex align-items-center justify-content-between max-height-76 bg-custom-gradient-primary-not-hover p-20 gap-20 border-custom-strong-neutral radius-12" data-id="${item.id}">
                        <div class="d-flex flex-grow-1 flex-column gap-12 overflow-hidden">
                          <span class="fw-medium text-16 text-black line-height-100">${item.name}</span>
                          <span class="fw-medium text-12 text-neutral line-height-100">${item.members} Members</span>
                        </div>
                        <div class="d-flex align-items-center gap-8">
                          <button class="d-flex align-items-center justify-content-center bg-white px-20 py-12 border-tab-empty max-w-52 box-shadow-primary radius-8">
                            <img src="./assets/svg/icon-edit.svg" class="w-12 h-12" alt="Edit Icon">
                          </button>
                          <button class="d-flex align-items-center justify-content-center bg-white px-20 py-12 border-tab-empty max-w-52 box-shadow-primary radius-8 event-delete-btn" data-type="group_manager" data-id="${item.id}">
                            <img src="./assets/svg/icon-trash.svg" class="w-12 h-12" alt="Trash Icon">
                          </button>
                        </div>
                      </div>
                    `;
                  }
                  if (card.type === "role_manager") {
                    return `
                      <div class="d-flex align-items-center justify-content-between max-height-76 bg-custom-gradient-primary-not-hover p-20 gap-20 border-custom-strong-neutral radius-12" data-id="${item.id}">
                        <div class="d-flex flex-grow-1 flex-column gap-12 overflow-hidden">
                          <span class="fw-medium text-16 text-black line-height-100">${item.name}</span>
                        </div>
                        <div class="d-flex align-items-center gap-8">
                          <button class="d-flex align-items-center justify-content-center bg-white px-20 py-12 border-tab-empty max-w-52 box-shadow-primary radius-8">
                            <img src="./assets/svg/icon-edit.svg" class="w-12 h-12" alt="Edit Icon">
                          </button>
                          <button class="d-flex align-items-center justify-content-center bg-white px-20 py-12 border-tab-empty max-w-52 box-shadow-primary radius-8 event-delete-btn" data-type="role_manager" data-id="${item.id}">
                            <img src="./assets/svg/icon-trash.svg" class="w-12 h-12" alt="Trash Icon">
                          </button>
                        </div>
                      </div>
                    `;
                  }
                  return "";
                }).join('')}
              </div>
            </div>
        `;
    }).join('');
}

function renderPermissions(list, containerSelector) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = list.map((item, idx) => `
        <div class="d-flex align-items-center bg-custom-gradient-primary-not-hover gap-40 border-custom-strong-neutral px-12 py-12 radius-12">
          <div class="d-flex align-items-stretch gap-12">
            <div class="d-flex align-items-center justify-content-center bg-white p-14 border-gray radius-8">
              <img src="${item.icon}" class="w-12 h-12" alt="${item.title} Icon">
            </div>
            <div class="d-flex flex-column gap-12">
              <span class="fw-medium text-20 text-black line-height-100">${item.title}</span>
              <span class="fw-medium text-12 text-black-light line-height-100">${item.description}</span>
            </div>
          </div>
          <div class="toggle-trigger p-1" style="position:relative;">
            <div class="w-35 h-22 bg-custom-neutral rounded-1 position-relative custom-toggle" style="cursor:pointer;">
              <input type="checkbox" class="permission-toggle position-absolute opacity-0 w-100 h-100 start-0 top-0 cursor-pointer" data-permission-index="${idx}">
              <div class="position-absolute w-14 h-14 bg-custom-toggle-neutral radius-2-px top-4 left-4 toggle-indicator"></div>
            </div>
          </div>
        </div>
    `).join('');
}

    // Render function
function renderPlayers(list) {
    const container = document.querySelector('.player-card-list');
    container.innerHTML = list.map(player =>
        player.role === "Staff" ? staffCard(player) : memberCard(player)
    ).join('');
}

function getButtonText(type) {
    if (type === "useful_links") return "New link";
    if (type === "group_manager") return "New group";
    if (type === "role_manager") return "New role";
    return "item";
}

function getMaxHeight(type) {
    if (type === "useful_links") return " max-height-300";
    if (type === "group_manager") return " max-height-400";
    if (type === "role_manager") return " max-height-400";
    return "";
}

function getNewTypeModalId(type) {
    if (type === "useful_links") return " #create-new-link-modal";
    if (type === "group_manager") return " #dual-modal-edit-group";
    if (type === "role_manager") return " #new-edit-role-modal";
    return "";
}

    // Filter function
function filterPlayers(query) {
    query = query.trim().toLowerCase();
    return players.filter(player =>
        player.name.toLowerCase().includes(query) ||
        player.role.toLowerCase().includes(query) ||
        player.email.toLowerCase().includes(query) ||
        player.phone.toLowerCase().includes(query)
    );
}

    // Event listeners
document.addEventListener('DOMContentLoaded', function () {
    renderPlayers(players);
    renderDashboardCards(dashboardCards, '.dashboard-cards-container');
    renderPermissions(permissionsList, '#permissions-list');

    // Search input
    document.querySelector('.search').addEventListener('input', function (e) {
    const filtered = filterPlayers(e.target.value);
        renderPlayers(filtered);
    });

    document.querySelector('.dashboard-cards-container').addEventListener('click', function (e) {
    const btn = e.target.closest('.event-delete-btn');
    if (!btn) return;

    const type = btn.getAttribute('data-type');
    const id = parseInt(btn.getAttribute('data-id'), 10);

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
            // Remove item from data and re-render
            const card = dashboardCards.find(c => c.type === type);
            if (card) {
                card.items = card.items.filter(item => item.id !== id);
                renderDashboardCards(dashboardCards, '.dashboard-cards-container');
            }
            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "The item has been deleted.",
                icon: "success"
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "The item is safe.",
                icon: "error"
            });
        }
    });
    });

    document.querySelector('.custom-club-container').addEventListener('change', function(e) {
        if (e.target && e.target.id === 'club-logo-change') {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(ev) {
                document.getElementById('club-logo').src = ev.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('permissions-list').addEventListener('change', function(e) {
    if (e.target.classList.contains('permission-toggle')) {
        // Gather all checked permissions
        const toggles = document.querySelectorAll('.permission-toggle');
        const selected = [];
        toggles.forEach((toggle, idx) => {
        if (toggle.checked) {
            selected.push(permissionsList[idx]);
        }
        });
        console.log('Selected permissions:', selected);
    }
    });
});