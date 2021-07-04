const resetSelectedPanel = () => {
    $(".tabcontent").hide();
    $(".tablink").removeClass("active");
};

const changeSelectedPanel = ($tab) => {
    $tab.addClass("active");
    $("#mode_" + $tab.attr("name")).show();
};

const showMainModePanel = () => {
  $("nav button[name='main']").trigger("click");
};