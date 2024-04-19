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