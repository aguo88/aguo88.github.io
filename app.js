var r = document.querySelector(':root');

var websiteData = {
    "SP1": {
        "learnMore": false,
        "hiddenHeight": 600,
        "showHeight": 1000,
        "buttonString": "Learn More",
        "root": "--SP1",
        "learnMoreID": "SP1LM"
    },
    "SP2": {
        "learnMore": false,
        "hiddenHeight": 500,
        "showHeight": 1000,
        "buttonString": "Learn More",
        "root": "--SP2",
        "learnMoreID": "SP2LM"
    },
    "SP3": {
        "learnMore": false,
        "hiddenHeight": 500,
        "showHeight": 1000,
        "buttonString": "Learn More",
        "root": "--SP3",
        "learnMoreID": "SP3LM"
    },
}

var buttonToID = {
    "SP1Button": "SP1",
    "SP2Button": "SP2",
    "SP3Button": "SP3"
}

function handleButtonClick(buttonID) {
    switch (buttonID) {
        case "SP1Button":
        case "SP2Button":
        case "SP3Button":
            var id = buttonToID[buttonID];
            websiteData[id]["learnMore"] = !websiteData[id]["learnMore"];
            if (websiteData[id]["learnMore"])
                showContent(id);
            else
                hideContent(id);
            break;
    }
}

function getStringById(id) {
    return websiteData[id]["buttonString"];
}

function showContent(id) {
    // Switch to *Hide* button
    document.getElementById(Object.keys(buttonToID).find(key => buttonToID[key] === id)).innerHTML = "<span2> Hide </span2>";
    r.style.setProperty(websiteData[id]["root"], websiteData[id]["showHeight"] + "px");
    setTimeout(function () {
        document.getElementById(websiteData[id]["learnMoreID"]).style.display = "block";
    }, 1000);
    setTimeout(function () {
        document.getElementById(websiteData[id]["learnMoreID"]).classList.remove("hideLearnMore");
        document.getElementById(websiteData[id]["learnMoreID"]).classList.add("showLearnMore");
    }, 1100);
}

function hideContent(id) {
    //Switch to *Show* button
    document.getElementById(Object.keys(buttonToID).find(key => buttonToID[key] === id)).innerHTML = "<span>" + getStringById(id) + "</span>";
    document.getElementById(websiteData[id]["learnMoreID"]).classList.remove("showLearnMore");
    document.getElementById(websiteData[id]["learnMoreID"]).classList.add("hideLearnMore");
    setTimeout(function () {
        document.getElementById(websiteData[id]["learnMoreID"]).style.display = "none";
        r.style.setProperty(websiteData[id]["root"], websiteData[id]["hiddenHeight"] + "px");
    }, 1001);

}


const observerL = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        //  else {
        //     entry.target.classList.remove('show');
        // }
    });
});

const observerR = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
});

const observerOE = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('showOpacity');
        }
        // else {
        //     entry.target.classList.remove('contactMeShow');
        // }
    });
});


const observerHeaders = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.children[0].classList.add('showHeaderArrow');
            entry.target.children[1].classList.add('showHeaderText');
        }
        // else {
        //     entry.target.classList.remove('contactMeShow');
        // }
    });
});


const hiddenElementsL = document.querySelectorAll('.hiddenL');
const hiddenElementsR = document.querySelectorAll('.hiddenR');
const hideOpacityElements = document.querySelectorAll('.hideOpacity');
const hiddenHeaders = document.querySelectorAll('.hiddenHeader');

hiddenElementsL.forEach((el) => observerL.observe(el));
hiddenElementsR.forEach((el) => observerR.observe(el));
hideOpacityElements.forEach((el) => observerOE.observe(el));
hiddenHeaders.forEach((el) => observerHeaders.observe(el));