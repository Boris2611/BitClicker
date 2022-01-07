var clickTime;
var score = 0;
var click = 0.000001;

var clicksound = new Audio("coin.wav");
var unlocksound = new Audio("unlock.wav");
var winsound = new Audio("win.wav");



function clickBTC() {
    clicksound.play();

    score += click;
    score = parseFloat(Number(score).toFixed(7));
    document.getElementById("score").innerHTML = "BTC : " + score;
    document.getElementById("btc").id = "btcClicked";


    clearTimeout(clickTime);
    clickTime = setTimeout(clickBack, 50);




    if (score == 0.00001) {
        unlocksound.play();
        setInterval(autoClick, 5000);
        document.getElementById("item1").id = "item1Clicked";
        document.getElementById("item1locked").innerHTML = "Unlocked";
    }

    if (score == 0.0001) {
        unlocksound.play();
        setInterval(autoClick, 1000);
        document.getElementById("item2").id = "item2Clicked";
        document.getElementById("item2locked").innerHTML = "Unlocked";
    }
    
    if (score >= 0.0005 && score < 0.000503) {
        unlocksound.play();
        click = 0.00001;
        document.getElementById("item3").id = "item3Clicked";
        document.getElementById("item3locked").innerHTML = "Unlocked";
    }

    if (score >= 0.001 && score < 0.0011) {
        unlocksound.play();
        setInterval(autoClick, 100);
        document.getElementById("item4").id = "item4Clicked";
        document.getElementById("item4locked").innerHTML = "Unlocked";
    }

    if (score >= 0.01 && score < 0.011) {
        unlocksound.play();
        click = 0.0001;
        document.getElementById("item5").id = "item5Clicked";
        document.getElementById("item5locked").innerHTML = "Unlocked";
    }

    if (score >= 0.1 && score < 0.11) {
        unlocksound.play();
        setInterval(autoClick, 10);
        document.getElementById("item7").id = "item7Clicked";
        document.getElementById("item7locked").innerHTML = "Unlocked";
    }

    if (score >= 1.0 && score < 1.1) {
        winsound.play();
        click = 0.01;
        document.getElementById("item6").id = "item6Clicked";
        document.getElementById("item6locked").innerHTML = "Unlocked";
    }

    if (score >= 100.00 && score < 110.00) {
        winsound.play();
        click = 1;
        document.getElementById("item9").id = "item9Clicked";
        document.getElementById("item9locked").innerHTML = "Unlocked";
    }

}

function clickBack() {
    document.getElementById("btcClicked").id = "btc";
}

function autoClick() {
    score += click;
    score = parseFloat(Number(score).toFixed(7));
    document.getElementById("score").innerHTML = "BTC : " + score;

    if (score == 0.00001) {
        unlocksound.play();
        setInterval(autoClick, 5000);
        document.getElementById("item1").id = "item1Clicked";
        document.getElementById("item1locked").innerHTML = "Unlocked";
    }

    if (score == 0.0001) {
        unlocksound.play();
        setInterval(autoClick, 1000);
        document.getElementById("item2").id = "item2Clicked";
        document.getElementById("item2locked").innerHTML = "Unlocked";
    }
    
    if (score >= 0.0005 && score < 0.000503) {
        unlocksound.play();
        click = 0.00001;
        document.getElementById("item3").id = "item3Clicked";
        document.getElementById("item3locked").innerHTML = "Unlocked";
    }

    if (score >= 0.001 && score < 0.0011) {
        unlocksound.play();
        setInterval(autoClick, 100);
        document.getElementById("item4").id = "item4Clicked";
        document.getElementById("item4locked").innerHTML = "Unlocked";
    }

    if (score >= 0.01 && score < 0.011) {
        unlocksound.play();
        click = 0.0001;
        document.getElementById("item5").id = "item5Clicked";
        document.getElementById("item5locked").innerHTML = "Unlocked";
    }

    if (score >= 0.1 && score < 0.11) {
        unlocksound.play();
        setInterval(autoClick, 10);
        document.getElementById("item7").id = "item7Clicked";
        document.getElementById("item7locked").innerHTML = "Unlocked";
    }

    if (score >= 1.0 && score < 1.1) {
        winsound.play();
        click = 0.01;
        document.getElementById("item6").id = "item6Clicked";
        document.getElementById("item6locked").innerHTML = "Unlocked";
    }

    if (score >= 100.00 && score < 110.00) {
        winsound.play();
        click = 1;
        document.getElementById("item9").id = "item9Clicked";
        document.getElementById("item9locked").innerHTML = "Unlocked";
    }
}




