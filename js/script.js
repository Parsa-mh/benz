window.addEventListener('load',function (){
    document.querySelector('.preloader').classList.add('hidepreloader');
})

function a(){
    document.addEventListener('keyup',(event)=>{
        if(event.target.matches('.ss')){
            const value =event.target.value;
            const valuel =event.target.value.length;
            const max =event.target.getAttribute('data-max');
            const rimaining =max -valuel;
            console.log(rimaining);
            if(valuel>max){
                event.target.value =value.substr(0,max);
                return;
            }
            event.target.nextElementSibling.innerHTML =rimaining+ 'کاراکتر باقی مانده'

        }
    })
};


a()