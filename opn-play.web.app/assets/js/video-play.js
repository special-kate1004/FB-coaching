$(document).on('click', '.video-play-icon', function () {
    const container = $(this).closest('.video-container');
    const video = container.find('video').get(0);

    container.find('.video-overlay').remove();

    if (video) {
        video.play();

        $(video).on('pause', function () {
            // Only show overlay if it was removed before
            if (!container.find('.video-overlay-container').length) {
                container.append(`
                <div class="w-100 h-100 d-flex align-items-center justify-content-center top-0 position-absolute bg-custom-neutral-gradient z-1 video-overlay-container">
                    <div class="d-flex align-items-center justify-content-center w-120 h-120 bg-custom-aqua radius-100 video-overlay"> 
                        <img src="./assets/svg/icon-play.svg" class="w-24 h-24 video-play-icon" alt="Video Play Icon">
                    </div>
                </div>
                `);
            }
        });
    }
});