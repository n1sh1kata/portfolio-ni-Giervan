let clickEventListener = null;

function openNav() {

    document.getElementById("container-1").style.display = "block";
    console.log('openNav');

    if (clickEventListener) {
        document.removeEventListener('click', clickEventListener);
    }

    clickEventListener = function (event) {
        if (!event.target.closest('#container-1') && !event.target.closest('.minimize-button')) {
            closeNav();
        }
    };

    setTimeout(function () {
        document.addEventListener('click', clickEventListener);
    }, 100);
}

function openNav1() {
    document.getElementById("container-1").style.display = "block";
}

function closeNav() {
    document.getElementById("container-1").style.display = "none";
    console.log('closeNav');

    if (clickEventListener) {
        document.removeEventListener('click', clickEventListener);
        clickEventListener = null;
    }
}

window.addEventListener('resize', closeNav);