var form = document.getElementById('addform');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit',addItem);

// Delete Event
itemList.addEventListener('click',removeItem);

// Filter Event
filter.addEventListener('keyup',filterItems);

// Add Item
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add Classname
    li.className = "list-group-item";
    //  Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //  Create del button element
    var deleteBtn = document.createElement('button');

    // Add Classname
    deleteBtn.className = "btn btn-danger btn-sm float-end";
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li)
}


//  Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e){
    // covert to lower case
    var text = e.target.value.toLowerCase();

    // Get li's
    var items = itemList.getElementsByTagName('li');
    // Convert to an array from HTMLCOLLECTION
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}