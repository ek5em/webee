const routes = {
    "/": renderActivity,
    "/map": renderMap,
    "/timer": renderTimer,
};

const handleHashChange = () => {
    const path = window.location.hash.replace("#", "") || "/";
    const renderFunc = routes[path];
    if (renderFunc) {
        renderFunc();
    } else {
        renderError();
    }
    setActiveLink();
};

const setActiveLink = () => {
    const links = document.querySelectorAll(".dynamic-nav a");
    const path = window.location.hash.replace("#", "") || "/";
    links.forEach((link) => {
        if (link.getAttribute("href") === `#${path}`) {
            link.classList.add("bg-selected");
        } else {
            link.classList.remove("bg-selected");
        }
    });
};

const initRouter = () => {
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
};
