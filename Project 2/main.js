    $(document).ready(function() {
      let taskId = 1; // variable use

      // Function to create a new task item
      function createTask(text, callback) {   // callback function used here
        const $li = $('<li></li>').hide();   // jQuery selector & method
        $li.html(`<span>${text}</span> <button class="delete-btn">Delete</button>`);
        $('#tasklist').append($li);
        $li.fadeIn(400, callback);           // jQuery animation + callback
      }

      // Event handler for adding a task
      $('#taskForm').on('submit', function(event) {
        event.preventDefault();
        const taskText = $('#taskinput').val().trim();

        if (taskText !== "") {
          createTask(taskText, function() {   // calling with a callback
            console.log(`Task ${taskId} added successfully!`);
          });
          $('#taskinput').val("");  // clear input
          taskId++;
        }
      });

      // Event delegation for delete button
      $('#tasklist').on('click', '.delete-btn', function() {
        $(this).parent().fadeOut(300, function() {
          $(this).remove();  // jQuery callback to remove after fade
        });
      });
    });
  