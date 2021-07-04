$("input[name='letter-input']").on("keyup", function() {
    focusNextEmptyLetter($(this));
});

$("#mode_main div[name='gameplay']").on("click", "button[name='crystal']", function() {
    toggleEffect($(this), CRYSTAL);
});

$("#mode_main div[name='gameplay']").on("click", "button[name='plagued']", function() {
    toggleEffect($(this), PLAGUED);
});

$("#mode_main div[name='gameplay']").on("click", "button[name='avoid']", function() {
    toggleEffect($(this), AVOID);
});

$("#mode_main table[name='results']").on("mouseover", "td", function() {
    addHighlights($(this));
});

$("#mode_main table[name='results']").on("mouseout", "td", function() {
    resetHighlights();
});

$("#mode_main table[name='results']").on("click", "button", function() {
    useResult($(this));
});

$("#mode_main button[name='solve']").click(function() {
    popDetectedAchievements();
    resetDemandForNewLetters();
    getMainResults();
});

$("#main-mode-actions button[name='reset-action']").click(function() {
    resetLetters();
    resetDemandForNewLetters();
    resetMainResults();
});

$("#priority").change(function() {
    doesChosenPriorityNeedSpecifiedLetter() ? showSpecificLetterInput() : hideSpecificLetterInput();
});