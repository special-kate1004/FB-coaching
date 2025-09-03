const bodyParts = [
    { id: 5, value: 9 },   // Chest
    { id: 6, value: 3 },   // Abdomen
    { id: 19, value: 6 },  // Left Thigh front
    { id: 32, value: 15 },  // Lower Back
    { id: 24, value: 17 }, // Right Thigh
    { id: 28, value: 3 },  // Left Lower Leg
    { id: 30, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 10 },
    { id: 13, value: 4 },
    { id: 8, value: 5 },
    { id: 9, value: 77 },
    { id: 11, value: 34 },
    { id: 21, value: 27 },
    { id: 23, value: 44 },
    { id: 25, value: 34 },
    { id: 31, value: 30 },
    { id: 32, value: 15 },
    { id: 33, value: 45 }
];


// Mapping positions for 30 body parts (both front and back)
const bodyPartPositions = {
    1: { top: '4%', left: '50%', side: 'front' },  // Head
    2: { top: '5%', left: '50%', side: 'back' }, // Skull Back
    3: { top: '7%', left: '50%', side: 'front' }, // Face
    4: { top: '16%', left: '50%', side: 'front' }, // Neck
    5: { top: '25%', left: '50%', side: 'front' }, // Chest
    6: { top: '35%', left: '50%', side: 'front' }, // Abdomen
    7: { top: '23%', left: '20%', side: 'front' }, // Right Shoulder
    8: { top: '23%', left: '80%', side: 'front' }, // Left Shoulder
    9: { top: '31%', left: '13%', side: 'front' }, // Right Upper Arm
    10: { top: '31%', left: '87%', side: 'front' }, // Left Upper Arm
    11: { top: '36%', left: '88%', side: 'front' }, // Right Elbow
    12: { top: '36%', left: '12%', side: 'front' }, // Right Elbow
    13: { top: '46%', left: '9%', side: 'front' }, // Right Forearm
    14: { top: '46%', left: '91%', side: 'front' }, // Left Forearm
    15: { top: '52%', left: '6%', side: 'front' }, // Right Wrist
    16: { top: '52%', left: '94%', side: 'front' }, // Left Wrist
    17: { top: '57%', left: '5%', side: 'front' }, // Right Hand
    18: { top: '57%', left: '95%', side: 'front' }, // Left Hand
    19: { top: '60%', left: '30%', side: 'front' },  // Right Thigh front
    20: { top: '60%', left: '70%', side: 'front' },  // Left Thigh front
    21: { top: '50%', left: '30%', side: 'back' },  // Left Hip
    22: { top: '50%', left: '70%', side: 'back' },  // Right Hip
    23: { top: '60%', left: '30%', side: 'back' },  // Left Thigh
    24: { top: '60%', left: '70%', side: 'back' },  // Right Thigh
    25: { top: '70%', left: '30%', side: 'back' },  // Left Knee
    26: { top: '70%', left: '70%', side: 'back' },  // Right Knee
    27: { top: '80%', left: '24%', side: 'back' },  // Left Lower Leg
    28: { top: '80%', left: '76%', side: 'back' },  // Right Lower Leg
    29: { top: '96%', left: '30%', side: 'back' },  // Left Foot
    30: { top: '96%', left: '70%', side: 'back' },   // Right Foot
    31: { top: '25%', left: '60%', side: 'back' },  // Upper Back
    32: { top: '42%', left: '50%', side: 'back' },  // Lower Back
    33: { top: '30%', left: '50%', side: 'back' },  // Spine
};

function renderBodyParts(parts) {
    parts.forEach(part => {
        const position = bodyPartPositions[part.id];
        if (!position) return;

        const container = position.side === 'front'
            ? document.querySelector('.front-container')
            : document.querySelector('.back-container');

        const marker = document.createElement('span');
        marker.className = 'marker d-flex align-items-center justify-content-center position-absolute w-xxl-49 h-xxl-49 w-md-31 h-md-31 bg-custom-aqua text-xxl-14 text-9 text-cyan-neutral radius-100';
        marker.style.top = position.top;
        marker.style.left = position.left;
        marker.innerText = part.value + '%';

        container.appendChild(marker);
    });
}

// Run on load
renderBodyParts(bodyParts);