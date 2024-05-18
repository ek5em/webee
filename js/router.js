const routes = {
    "/": renderActivity,
    "/map": renderMap,
    "/timer": renderTimer,
};

const initRouter = () => {
    window.addEventListener("hashchange", () => {
        const path = window.location.hash.replace("#", "") || "/";
        const renderFunc = routes[path];
        if (renderFunc) {
            renderFunc();
        } else {
            renderError();
        }
    });
};
