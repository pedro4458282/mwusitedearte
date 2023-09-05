function openNav() {
    document.getElementById("mySidenav").classList.add('openNav');
}

function closeNav() {
    document.getElementById("mySidenav").classList.remove('openNav');
}


function openTab(tabName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

/************************************************************************/

const input = document.getElementById('filterInput');
const titles = document.querySelectorAll('.card h1');

input.addEventListener('keyup', e => {
    titles.forEach(title => {
        if (title.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
            title.closest('.card').style.display = 'block';
        } else {
            title.closest('.card').style.display = 'none';
        }
    });
});
