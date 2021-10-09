const weapons = document.querySelectorAll('.weapon img') ;
const weaponImg = document.querySelector('.image-wrapper img') ;

weapons.forEach(weapon => {
    weapon.addEventListener('click' , function(){
        weaponImg.src = this.src ;
    })
})





