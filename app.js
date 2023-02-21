
var learnMore1 = false;
var learnMore2 = false;
var learnMore3 = false;

function handleButtonClick(id) {
    switch (id) {
        case "learnMore1":
            learnMore1 = !learnMore1;
            if (learnMore1)
                hideTextButton(id);
            else
                showTextButton(id);
            break;
        case "learnMore2":
            learnMore2 = !learnMore2;
            if (learnMore2)
                hideTextButton(id);
            else
                showTextButton(id);
            break;
        case "learnMore3":
            learnMore3 = !learnMore3;
            if (learnMore3)
                hideTextButton(id);
            else
                showTextButton(id);
            break;
    }
}

function getStringById(id) {
    switch (id) {
        case "learnMore1":
            return "Learn More";
        case "learnMore2":
            return "Learn More";
        case "learnMore3":
            return "Learn More";
    }
}

function hideTextButton(id) {
    document.getElementById(id).innerHTML = "<span2> Hide </span2>";
}

function showTextButton(id) {
    document.getElementById(id).innerHTML = "<span>" + getStringById(id) + "</span>";
}

const observerL = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const observerR = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElementsL = document.querySelectorAll('.hiddenL');
const hiddenElementsR = document.querySelectorAll('.hiddenR');
hiddenElementsL.forEach((el) => observerL.observe(el));
hiddenElementsR.forEach((el) => observerR.observe(el));