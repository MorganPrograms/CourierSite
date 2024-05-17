function includeHTML() {
    var header = document.getElementById("header");
    var footer = document.getElementById("footer");

    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            header.innerHTML = data;
        });

    // Load footer.html
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            footer.innerHTML = data;
        });
}

includeHTML();
