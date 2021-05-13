const clicky = (ev) => {
    var choice = ev.currentTarget.id;
    if (choice == "project") {
        var elem = document.querySelector(".projects");
        const y = elem.getBoundingClientRect().top + window.pageYOffset - 75;
        window.scrollTo({ behavior: 'smooth', top: y });
    } if (choice == "contact") {
        window.scrollTo({ behavior: "smooth", top: document.body.scrollHeight });
    } if (choice == "intro") {
        window.scrollTo({ behavior: 'smooth', top: 0 });
    } if (choice == "res") {
        var elem = document.querySelector(".resume");
        const y = elem.getBoundingClientRect().top + window.pageYOffset - 75;
        window.scrollTo({ behavior: 'smooth', top: y });
    }
}
