
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
window.addEventListener("scroll", () => {
    let scroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.querySelector(".scrol").setAttribute("style", `width : ${scroll / height * 100}%`)
})  
