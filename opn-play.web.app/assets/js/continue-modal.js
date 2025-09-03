const assignSessionBtn = document.querySelector('.assign-session-player-btn');
if (assignSessionBtn) {
    assignSessionBtn.addEventListener('click', function () {
        const newSessionModal = bootstrap.Modal.getInstance(document.getElementById('new-session-modal'));
        if (newSessionModal) newSessionModal.hide();

        const assignSessionPlayerModal = new bootstrap.Modal(document.getElementById('assign-session-player-modal'));
        assignSessionPlayerModal.show();
    });
}

const assignPhaseBtn = document.querySelector('.assign-phase-player-btn');
if (assignPhaseBtn) {
    assignPhaseBtn.addEventListener('click', function () {
        const newPhaseModal = bootstrap.Modal.getInstance(document.getElementById('new-phase-modal'));
        if (newPhaseModal) newPhaseModal.hide();

        const assignPhasePlayerModal = new bootstrap.Modal(document.getElementById('assign-phase-player-modal'));
        assignPhasePlayerModal.show();
    });
}

const assignSessionIndividualBtn = document.querySelector('.assign-session-individual-player-modal-btn');
if (assignSessionIndividualBtn) {
    assignSessionIndividualBtn.addEventListener('click', function () {
        const assignSessionModal = bootstrap.Modal.getInstance(document.getElementById('assign-session-player-modal'));
        if (assignSessionModal) assignSessionModal.hide();

        const assignSessionIndividualModal = new bootstrap.Modal(document.getElementById('assign-session-individual-player-modal'));
        assignSessionIndividualModal.show();
    });
}

const addRecordingModalBtn = document.querySelector('.add-recording-modal-btn');
if (addRecordingModalBtn) {
    addRecordingModalBtn.addEventListener('click', function () {
        const bodyFatsRecordingModal = bootstrap.Modal.getInstance(document.getElementById('body-fats-recording-modal'));
        if (bodyFatsRecordingModal) bodyFatsRecordingModal.hide();

        const addRecordingModal = new bootstrap.Modal(document.getElementById('add-recording-modal'));
        addRecordingModal.show();
    });
}

const assignDataPointModalBtn = document.querySelector('.assign-data-point-modal-btn');
if (assignDataPointModalBtn) {
    assignDataPointModalBtn.addEventListener('click', function () {
        const addRecordingModal = bootstrap.Modal.getInstance(document.getElementById('add-recording-modal'));
        if (addRecordingModal) addRecordingModal.hide();

        const assignDataPointModal = new bootstrap.Modal(document.getElementById('assign-data-point-modal'));
        assignDataPointModal.show();
    });
}

const assignDataPointPlayerModalBtn = document.querySelector('.assign-data-point-player-modal-btn');
if (assignDataPointPlayerModalBtn) {
    assignDataPointPlayerModalBtn.addEventListener('click', function () {
        const assignDataPointModal = bootstrap.Modal.getInstance(document.getElementById('assign-data-point-modal'));
        if (assignDataPointModal) assignDataPointModal.hide();

        const assignDataPointPlayerModal = new bootstrap.Modal(document.getElementById('assign-data-point-player-modal'));
        assignDataPointPlayerModal.show();
    });
}

const addNewDataPointModalBtn = document.querySelector('.add-new-data-point-modal-btn');
if (addNewDataPointModalBtn) {
    addNewDataPointModalBtn.addEventListener('click', function () {
        const testingDataPointsModal = bootstrap.Modal.getInstance(document.getElementById('testing-data-points-modal'));
        if (testingDataPointsModal) testingDataPointsModal.hide();

        const addNewDataPointModal = new bootstrap.Modal(document.getElementById('add-new-data-point-modal'));
        addNewDataPointModal.show();
    });
}

const addPlayersTimestampModalBtns = document.querySelectorAll('.add-players-timestamp-modal-btn');

addPlayersTimestampModalBtns.forEach(function(btn) {
    btn.addEventListener('click', function () {
        const testingDataPointsModal = bootstrap.Modal.getInstance(document.getElementById('training-session-modal'));
        if (testingDataPointsModal) testingDataPointsModal.hide();

        const addNewDataPointModal = new bootstrap.Modal(document.getElementById('add-players-timestamp-modal'));
        addNewDataPointModal.show();
    });
});

const wellnessSurveyTeamManagerDetailModalBtns = document.querySelectorAll('.wellness-survey-team-manager-detail-modal-btn');

wellnessSurveyTeamManagerDetailModalBtns.forEach(function(btn) {
    btn.addEventListener('click', function () {
        const wellnessSurveyTeamManagerModal = bootstrap.Modal.getInstance(document.getElementById('wellness-survey-team-manager-modal'));
        if (wellnessSurveyTeamManagerModal) wellnessSurveyTeamManagerModal.hide();

        const addNewDataPointModal = new bootstrap.Modal(document.getElementById('wellness-survey-team-manager-detail-modal'));
        addNewDataPointModal.show();
    });
});

const addNewMemberModalBtn = document.querySelectorAll('.add-new-member-modal-btn');

addNewMemberModalBtn.forEach(function(btn) {
    btn.addEventListener('click', function () {
        const addNewMemberModal = bootstrap.Modal.getInstance(document.getElementById('add-new-member-modal'));
        if (addNewMemberModal) addNewMemberModal.hide();

        const memberCreationNotifyModal = new bootstrap.Modal(document.getElementById('member-creation-notify-modal'));
        memberCreationNotifyModal.show();
    });
});