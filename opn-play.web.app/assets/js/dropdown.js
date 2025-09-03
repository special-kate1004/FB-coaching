$(".dropdown-container__btn").on("click", function(e) {
    const container = e.currentTarget.closest('.dropdown-container');
    $(container).toggleClass("show");
    var dropdownItem = container.currentTarget;
    $(dropdownItem)
        .addClass("active")
        .siblings()
        .removeClass("active");
});