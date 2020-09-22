// TOGGLE HAM FUNCTION

document.querySelector('.ham').addEventListener('click', () => {
    var pressed = document.querySelector('.ham').classList.contains('change');

    if(pressed) {
        document.querySelector('.ham').classList.remove('change');
        document.querySelector('.content-container').style.display = 'flex';
        document.querySelector('.nav-links-container ul').style.display = 'none';
    }else {
        document.querySelector('.ham').classList.add('change');
        document.querySelector('.content-container').style.display = 'none';
        document.querySelector('.nav-links-container ul').style.display = 'block';
    }
});

// ON_SCREEN_RESIZE

window.addEventListener('resize', () => {
    var width = parseInt(window.innerWidth);
    if(width > 768) {
        document.querySelector('.content-container').style.display = 'flex';
        document.querySelector('.nav-links-container ul').style.display = 'flex';
    }    else {
        document.querySelector('.nav-links-container ul').style.display = 'none';
    }
})