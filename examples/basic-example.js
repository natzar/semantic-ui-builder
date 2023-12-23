// Basic example of Semantic UI Builder - To-Do List Application

// Container for the to-do app
document.addEventListener('DOMContentLoaded', function () {
  var appContainer = new Container({ id: 'todo-app', class: 'ui segment' });

  // Header for the to-do app
  var header = new Header({ content: 'To-Do List' });
  appContainer.append(header);

  // Input for new to-do item
  var todoInput = new Input({ placeholder: 'Add new task...' });
  appContainer.append(todoInput);

  // Button to add new to-do item
  var addButton = new Button({
    content: 'Add',
    class: 'ui button',
    click: function() {
      var newItem = new Item({ content: todoInput.value });
      appContainer.append(newItem);
      todoInput.value = ''; // Clear input after adding
    }
  });
  appContainer.append(addButton);

  // Render the app
  appContainer.render();
});
