const getMainResults = () => {
    resetMainResults();

    const results = solveMain(getLetterWeight(), getPrioritySetting(), getSpecificLetterPrioritySetting());

    if(results.length > 0) {
        $("#mode_main table[name='results'] tr[name='heading']").show();
        addMainResults(sortResults(results));
    }
};

const sortResults = (results) => {
    return results.sort(function(a, b) {
        return b.weight - a.weight
    });
};

const addMainResults = (results) => {
    for(let i = 0; i < 5; i++) {
        if(results[i]) {
            $("#mode_main table[name='results']").append($(
                    `<tr name="result" data-ids=",${results[i].matchIndexes},">
                        <td>${results[i].word}</td>
                        <td>
                            <button name="use">Use</button>
                        </td>
                    </tr>`));
        }
    }

    $("#mode_main table[name='results']").removeClass("invisible");
};

const useResult = ($result) => {
    const idsUsed = $result.parent().parent().attr("data-ids");

    $("input[name='letter']").each(function() {
        const thisLetterId = $(this).parent().parent().attr("data-id");

        if(idsUsed.includes("," + thisLetterId + ",")) {
            resetLetter($(this));
            addDemandForNewLetter($(this));
        }
    });

    resetMainResults();
};

const addHighlights = ($result) => {
    const idsUsed = $result.parent().attr("data-ids");

    $("input[name='letter']").each(function() {
        const thisLetterId = $(this).parent().parent().attr("data-id");

        if(idsUsed.includes("," + thisLetterId + ",")) {
            $(this).addClass("highlight");
        }
    });
};

const resetHighlight = ($letter) => {
    $letter.removeClass("highlight");
};

const resetHighlights = () => {
    $("input[name='letter']").each(function() {
        resetHighlight($(this));
    });
};

const resetMainResults = () => {
    $("#mode_main table[name='results']").addClass("invisible");
    $("#mode_main tr[name='result']").remove();
};

const addDemandForNewLetter = ($letter) => {
    $letter.parent().parent().addClass("demand");
};

const resetDemandForNewLetters = () => {
    $("input[name='letter-input']").each(function() {
        $(this).parent().parent().removeClass("demand");
    });
};