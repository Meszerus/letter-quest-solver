$("input[name='letter-input']").on("keyup", function() {
    focusNextEmptyLetter($(this));
});

$("button[name='tile-effect']").on("click", function() {
    toggleEffect($(this));
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