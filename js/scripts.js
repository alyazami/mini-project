function newItem() {
    // Adding a new item to the list of items
    let inputValue = $('#input').val();
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      let li = $('<li></li>');
      li.append(inputValue);
      $('#list').append(li);
    }
  
    // Crossing out an item from the list of items
    function crossOut() {
      li.toggleClass("strike");
    }
    $(document).on("dblclick", "li", crossOut);
  
    // Adding the delete button "X"
    let crossOutButton = $('<crossOutButton>X</crossOutButton>');
    li.append(crossOutButton);
    crossOutButton.on("click", deleteListItem);
  
    // Adding CLASS DELETE (DISPLAY: NONE) from the css
    function deleteListItem() {
      li.addClass("delete");
    }
  
    // Reordering the items
    $('#list').sortable();
  }
  