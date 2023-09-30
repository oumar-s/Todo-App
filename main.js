let form = document.querySelector("form");
let list = document.getElementById("list");

// Add item
form.addEventListener('submit', addItem);
function addItem (e){
    e.preventDefault();
    let newItem = document.querySelector("input").value;
    let li = document.createElement('li');
    li.className = 'li';
    let button = document.createElement("button");
    button.append(document.createTextNode('X'));
    button.className = "delete";
    li.appendChild(document.createTextNode(newItem));
    li.append(button);
    list.appendChild(li);
    console.log(li);
};

// Remove item
list.addEventListener('click', removeItem);
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            list.removeChild(li);
        }
    }
}   
