const btn = document.getElementById("add-btn");
const input = document.querySelector("#inp");
let boxes = document.querySelectorAll(".box");
const box1 = document.querySelector("#box1");
let drag = null;

btn.onclick = () => {
    if(input.value !== "") {
      box1.innerHTML += `<p class="item" draggable="true">${input.value}</p>`;
      input.value="";
    }

     dragItem(); 
}

 function dragItem(){
    let items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.addEventListener('dragstart', function(){
            drag = item;
            item.style.opacity = "0.5";
        });
        item.addEventListener('dragend', function(){
            drag = null;
            item.style.opacity = "1";
        });
        boxes.forEach(box => {
            box.addEventListener('dragover', function(e){
             e.preventDefault();
             this.style.background = "green";
             this.style.color = "white";
        });
            box.addEventListener('dragleave', function(){
             this.style.background = "white";
             this.style.color = "black";
        });
            box.addEventListener('drop', function(){
             box.append(drag);
             this.style.background = "white";
             this.style.color = "black";
            })
        });
    });
} 