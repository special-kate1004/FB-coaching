$(document).ready(function () {
	$(document).on("click", ".sidebar-open-btn", function () {
		$(".sidebar-container").removeClass("w-max-content").addClass("w-332");

		if($(".sidebar-tablet-container").hasClass("d-flex")) {
			$(".sidebar-tablet-container").removeClass("d-flex").addClass("d-none");
		}
		else {
			$(".sidebar-tablet-container").removeClass("d-md-flex");
		}

		$(".sidebar-desktop-container").removeClass("d-none d-xxl-flex").addClass("d-flex h-100 position-absolute start-0 bg-custom-primary");

		$(".main-content-container").removeClass("ml-md-80 main-content-container-sidebar-close").addClass("ml-332 main-content-container-sidebar-open");
	});

	$(document).on("click", ".sidebar-close-btn", function () {
		$(".sidebar-container").removeClass("w-332").addClass("w-max-content");

		if($(".sidebar-desktop-container").hasClass("d-flex h-100 position-absolute start-0 bg-custom-primary")) {
			$(".sidebar-desktop-container").removeClass("d-flex h-100 position-absolute start-0 bg-custom-primary").addClass("d-none d-xxl-flex");
		}
		else {
			$(".sidebar-desktop-container").removeClass("d-xxl-flex");
		}

		if($(".sidebar-tablet-container").hasClass("d-md-flex")) {
			$(".sidebar-tablet-container").removeClass("d-xxl-none");
		}
		else {
			$(".sidebar-tablet-container").removeClass("d-none").addClass("d-flex");
		}

		$(".main-content-container").removeClass("ml-332 main-content-container-sidebar-open").addClass("ml-md-80 main-content-container-sidebar-close");
	});
});