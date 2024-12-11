window.onscroll = function () { resizeNavbar() };

function resizeNavbar() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".navbar").classList.add("scrolled");
    } else {
        document.querySelector(".navbar").classList.remove("scrolled");
    }
}

function changeMap(url) {
    document.getElementById("mapIframe").src = url;
}

