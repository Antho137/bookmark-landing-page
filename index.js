// code for the tabs in the page
const tabs = document.querySelector("#featuresTabs");
const tabNav = document.querySelectorAll(".tab-nav");
const contents = document.querySelectorAll(".content");

// clicking on specific target ID open the related tab which become active, and the already active one will be removed
tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabNav.forEach(btn => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        contents.forEach(content => {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
}

// code for the accordion in the page
let accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        }
        else {
            panel.style.display = "block";
        }
    });
}