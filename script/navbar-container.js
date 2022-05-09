let div = document.querySelector('#ele');
    let cnt = 0;

    div.addEventListener('click', () => {
        if (cnt === 0) {
            document.querySelector('.nav-screen').style.display = 'block';
            div.style.backgroundColor = 'black';
            div.style.color = 'white';
            cnt++;
        }
        else {
            cnt = 0;
            document.querySelector('.nav-screen').style.display = 'none';
            div.style.backgroundColor = 'white';
            div.style.color = 'black';
        }

    });