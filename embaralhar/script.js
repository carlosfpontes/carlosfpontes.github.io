function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function shuffleStimuli() {
    // Get form input values
    var numStimuli = document.getElementById("numStimuli").value;
    var stimulusNames = document.getElementById("stimulusNames").value.split(",");
    var numCombinations = document.getElementById("numCombinations").value;

    // Create array of stimuli
    var stimuli = [];
    for (var i = 0; i < numStimuli; i++) {
        stimuli.push(stimulusNames[i]);
    }

    // Shuffle stimuli and generate combinations
    var combinations = [];
    for (var i = 0; i < numCombinations; i++) {
        var shuffledStimuli = shuffle(stimuli.slice());
        combinations.push(shuffledStimuli);
    }

    // Display combinations in list
    var list = document.getElementById("combinationsList");
    list.innerHTML = "";
    for (var i = 0; i < combinations.length; i++) {
        var listItem = document.createElement("li");
        listItem.innerHTML = combinations[i].join(", ");
        list.appendChild(listItem);
    }

    // Show copy button
    var copyButton = document.getElementById("copyButton");
    copyButton.style.display = "block";
}

function copyToClipboard() {
    var list = document.getElementById("combinationsList");
    var text = "";
    for (var i = 0; i < list.children.length; i++) {
        text += list.children[i].innerHTML + "\n";
    }
    navigator.clipboard.writeText(text);
    alert("Copiado para a área de transferência!");
}
