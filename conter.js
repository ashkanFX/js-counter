let count = 0 ;
const value =document.querySelector('#value');
const  btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {

    btn.addEventListener('click',function (e) {
        const btn_selector = e.currentTarget.classList
        if(btn_selector.contains('decrease')){
            count--
        }else if (btn_selector.contains('increase')){
            count++
        }else {
            count=0
        }
        if (count > 0){
            value.style.color = 'green';
        }
        else if(count < 0 ) {
            value.style.color = 'red';
        }else {
            value.style.color = 'snow';
        }
        value.textContent = count;
    })
})

