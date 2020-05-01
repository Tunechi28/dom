//traversing the dom
/*var itemList = document.querySelector('#items');

itemList.parentNode.style.backgroundColor ='#f4f4f4';
//parentNode and parentElement can be used interchangeably

//childNodes and children.... use children

itemList.children[1].style.backgroundColor = 'yellow';

//firstChild vs firstElementChild use the firstElementChild

itemList.firstElementChild.textContent='hello';


//nextElementSibling and previousElementSibling


//createElement

var newDiv = document.createElement('div')

console.log(newDiv);

newDiv.className = 'hello';
newDiv.id = "hello";

newDiv.setAttribute('title', 'hello')


newDivText = document.createTextNode('hello world');

newDiv.appendChild(newDivText)


var button = document.getElementById('button');

//button.addEventListener('click', buttonClick);

function buttonClick(){
  document.querySelector('#header-title').textContent ='I love Jesus';
  console.log('button clicked');
}

//button.addEventListener('click', runEvent);*/
//var box = document.querySelector('.box');
//addEventListener('mousemove',runEvent)
/*var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
itemInput.addEventListener('keydown',runEvent);

function runEvent(e){
  console.log(`Event Type: ${e.type}`);

  console.log(e.target.value);
  //output.innerHTML =`<h3>MouseX: ${e.offsetX}</h3><h3>MouseY: ${e.offsetY}</h3>`
  //box.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY}, 40)`;
}
*/

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//form submit Event

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItem);

function addItem(e){
e.preventDefault();
 //get input value

 var newItem = document.getElementById('item').value;
//create new li getElementById
var li = document.createElement('li');

li.className ='list-group-item';
//add textnode to li

li.appendChild(document.createTextNode(newItem));

//create delete buttonClick

var deleteButton = document.createElement('button');
deleteButton.className='btn btn-sm btn-danger float-right delete';
deleteButton.appendChild(document.createTextNode('X'));
li.appendChild(deleteButton);

itemList.appendChild(li);
}



function removeItem(e){
if(e.target.classList.contains('delete')){
  if(confirm('are you sure?')){
    var li = e.target.parentElement;
    itemList.removeChild(li);

  }
}
}




function filterItem(e){
 var text = e.target.value.toLowerCase();
 var items = document.getElementsByTagName('li');

Array.from(items).forEach(function(item){
var itemName = item.firstChild.textContent;
if(itemName.toLowerCase().indexOf(text)  != -1){
item.style.display = 'block';
}
  else{
    item.style.display ="none";
  }
})
}
