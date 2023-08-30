// Navbar 
let navLink = document.querySelectorAll('.nav-link');

const width = window.innerWidth;
console.log(width);

if (width < 992) {
    navLink.forEach((obj) => {
        obj.addEventListener('click', function() {
            document.querySelector('button.navbar-toggler').click();
        })
    })
}
// End Navbar

// Skill Dropdown
let pemrograman = document.getElementById('pemrograman');
let framework = document.getElementById('framework');
let jaringan = document.getElementById('jaringan');

pemrograman.addEventListener('click', function(){
    document.querySelector('#pemrograman div.skill-detail').classList.toggle('show');
    document.querySelector('#pemrograman div div i.bi-chevron-down').classList.toggle('d-none');
    document.querySelector('#pemrograman div div i.bi-chevron-up').classList.toggle('d-none');
})

framework.addEventListener('click', function(){
    document.querySelector('#framework div.skill-detail').classList.toggle('show');
    document.querySelector('#framework div div i.bi-chevron-down').classList.toggle('d-none');
    document.querySelector('#framework div div i.bi-chevron-up').classList.toggle('d-none');
})

jaringan.addEventListener('click', function(){
    document.querySelector('#jaringan div.skill-detail').classList.toggle('show');
    document.querySelector('#jaringan div div i.bi-chevron-down').classList.toggle('d-none');
    document.querySelector('#jaringan div div i.bi-chevron-up').classList.toggle('d-none');
})
// End Skill Dropdown