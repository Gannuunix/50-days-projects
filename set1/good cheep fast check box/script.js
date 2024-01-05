
let toggles = document.querySelectorAll('.toggle')
let good = document.querySelector('#good')
let cheap= document.querySelector('#cheap')
let fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theclickedOne){
    if(good.checked && cheap.checked && fast.checked){
        if(good === theclickedOne){
            fast.checked = false
        }

        if(cheap === theclickedOne){
            good.checked = false
        }

        if(fast === theclickedOne){
            cheap.checked = false
        }
    }
}