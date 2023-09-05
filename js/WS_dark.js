    document.getElementById('toggle').addEventListener("click", function() {
        const body = document.querySelector("body");
        body.classList.toggle("dark-mode");

        const $WS_Title = document.querySelector('#WS_Title');
        const $WS_DarkMode = document.querySelector('#WS_DarkMode');
        if (body.classList.contains('dark-mode')) {
            $WS_Title.src = 'css/img/WSdark.png';
            $WS_DarkMode.src = 'css/img/WS_moon.png';
            localStorage.setItem('darkMode', 'true');
            localStorage.setItem('toggleSwitch', 'true');
            this.checked = true;
        } else {
            $WS_Title.src = 'css/img/WS.JPG';
            $WS_DarkMode.src = 'css/img/WS_sun.png';
            localStorage.setItem('darkMode', 'false');
            this.checked = false;
            localStorage.setItem('toggleSwitch', 'false');
        }
    });

    window.addEventListener("load", function() {
        const bodyElement = document.body;
        const $WS_Title = document.querySelector('#WS_Title');
        const $WS_DarkMode = document.querySelector('#WS_DarkMode');
        if (localStorage.getItem('darkMode') === "true") {
            bodyElement.classList.add("dark-mode");
            $WS_Title.src = 'css/img/WSdark.png';
            $WS_DarkMode.src = 'css/img/WS_moon.png';
            if (localStorage.getItem('toggleSwitch') === "true") {
                document.getElementById('toggle').checked = true;
            }
        } else {
            bodyElement.classList.remove("dark-mode");
            $WS_Title.src = 'css/img/WS.JPG';
            $WS_DarkMode.src = 'css/img/WS_sun.png';
            if (localStorage.getItem('toggleSwitch') === "false") {
                document.getElementById('toggle').checked = false;
            }
        }
    });