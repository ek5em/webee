const renderHeader = () => {
    const app = document.getElementById("app");
    const header = document.createElement("header");
    header.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="#/">Activity</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#/map">Map</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#/timer">Time</a>
            </li>
        </ul>
    </div>
</nav>
`;
    app.prepend(header);
};
