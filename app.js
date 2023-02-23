var r = document.querySelector(':root');

var websiteData = {
    "SP1" : {
        "learnMore": false,
        "hiddenHeight": 600,
        "showHeight": 1000,
        "buttonString": "Learn More"
    },
    "SP2" : {
        "learnMore": false,
        "hiddenHeight": 500,
        "showHeight": 1000,
        "buttonString": "Learn More"
    },
    "SP3" : {
        "learnMore": false,
        "hiddenHeight": 500,
        "showHeight": 1000,
        "buttonString": "Learn More"
    },
}

var buttonToID = {
    "SP1Button" : "SP1",
    "SP2Button" : "SP2",
    "SP3Button" : "SP3"
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
    r.style.setProperty("--extendHeight", websiteData[id]["showHeight"]+"px");
    if(document.getElementById(id).classList.contains("stow")) {
        document.getElementById(id).classList.remove("stow");
    }
    if(!document.getElementById(id).classList.contains("extend")) {
        document.getElementById(id).classList.add("extend");
    }
}

function hideContent(id) {
    //Switch to *Show* button
    document.getElementById(Object.keys(buttonToID).find(key => buttonToID[key] === id)).innerHTML = "<span>" + getStringById(id) + "</span>";
    r.style.setProperty("--stowHeight", websiteData[id]["hiddenHeight"]+"px");
    if(document.getElementById(id).classList.contains("extend")) {
        document.getElementById(id).classList.remove("extend");
    }
    if(!document.getElementById(id).classList.contains("stow")) {
        document.getElementById(id).classList.add("stow");
    }
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