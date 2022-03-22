function getHTML (selector){
    return document.querySelector(selector)
}

const input = getHTML('input')
const btn = getHTML('button')

document.querySelector('ul').innerHTML = localStorage.getItem('etat')




btn.addEventListener('click', function (e){
    
   if(input.value =='') return 
 
    console.log(input.value)
    const li = document.createElement('li')
    li.innerHTML =
        `<input class="input" type="checkbox" >
        <p>${input.value}</p>
         <button class="btn">x</button>`
         document.querySelector('ul').appendChild(li)
    console.log(li);
    li.addEventListener('click', function (e){
        if (e.target.classList.contains('input')){
            console.log(e.target.checked);
            if (e.target.checked==''){ console.log("salut");
                e.target.checked = true;}else {
            e.target.checked = !e.target.checked}
        }
        
    })
    
    
    // document.querySelector('ul').innerHTML += 
    // `<li>
    //     <input type="checkbox">
    //     <p>${input.value}</p>
    //     <button class="btn">x</button>
    // </li>`
    localStorage.setItem('etat',document.querySelector('ul').innerHTML)
    input.value =''
})

