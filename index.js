const addForm=document.getElementById('addForm');
const itemList=document.getElementById('items');
//const deleteBtnsCollection=document.getElementsByClassName('btn btn-danger btn-sm float-right delete');
const filter=document.getElementById('filter')

//Form submit eventListener
addForm.addEventListener('submit',addItem)
//Delete eventListener
itemList.addEventListener('click',removeItem)
//Filter event
filter.addEventListener('keyup',filterItems)


function addItem(e){
  e.preventDefault();

  //Get input value
let newItem=document.getElementById('itemId').value;

//Create new li element and Delete Button Element
let li=document.createElement('li');
let btn=document.createElement('button')

//Add class for li and Button Element
li.className='list-group-item'
btn.className='btn btn-danger btn-sm float-right delete'

//Add text node with input value to new li item
textNodeItem=document.createTextNode(newItem)
li.appendChild(textNodeItem)

//add text node to Button  +  Add Button to new li item
//btn.textContent='X' Works Too

btnNode=document.createTextNode('X')
btn.appendChild(btnNode)

li.appendChild(btn)


//Add new li item to the itemlist
itemList.appendChild(li);

//Clear input
document.getElementById('itemId').value=''
}

function removeItem(e){
  e.preventDefault();
  if(e.target.classList.contains('delete')){
    if(confirm('You want to remove this item?')){

      var li=e.target.parentElement;
      itemList.removeChild(li)
    }
  }
}


//Filter Items
function filterItems(e){
  //convert text to lowercase
  var text=e.target.value.toLowerCase();
  
  //Get list
  var items=itemList.getElementsByTagName('li')
  //Convert to an array
  Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text)!=-1){
      item.style.display='block';
    }else{
      item.style.display='none';
    }
  });
}

//Second way to remove Btns But doesnt Work to new Items , need to find why 
//var btns=document.getElementsByClassName('btn btn-danger btn-sm float-right delete');
//console.log(btns)
//for(let i=0;i<btns.length;i++){
  //btns[i].addEventListener('click',function removeParentEvent(){
    //this.parentNode.remove();
  //})
//}
