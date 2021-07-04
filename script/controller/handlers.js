$("input[name='achievement']").change(function() {
    updateAchievementArray($(this));
});

$("#configAchievementsAll").click(function() {
    updateAchievementTogglesAsBlanket(true);
});

$("#configAchievementsNone").click(function() {
    updateAchievementTogglesAsBlanket(false);
});

$("button[name='mode-change-action']").click(function() {
    resetSelectedPanel();
    changeSelectedPanel($(this));
});