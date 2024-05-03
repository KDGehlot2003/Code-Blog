const imgIcon=document.getElementById('imgIcon');
const profileDrop=document.getElementById('profileDrop');
imgIcon.addEventListener('click',function(){
    if(profileDrop.style.display==='none'){
        profileDrop.style.display='block';
    }else{
        profileDrop.style.display='none';
    }
});

window.onclick=function(event){
    if(event.target!==imgIcon){
        if(profileDrop.style.display==='block'){
            profileDrop.style.display='none';
        }
    }
};

const cardsections = document.querySelectorAll('.card-image');
cardsections.forEach(function(cardsection) {
    cardsection.addEventListener('mouseenter', function() {
        
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        this.style.transform = 'scale(1.05)';
        
        this.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
    });

    cardsection.addEventListener('mouseleave', function() {
        
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
});

const underline_navbar = document.querySelectorAll('.home-navbar-links-li');
underline_navbar.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.textDecoration = 'underline'; 
    });

    link.addEventListener('mouseleave', function() {
        this.style.textDecoration = 'none';
    });
});