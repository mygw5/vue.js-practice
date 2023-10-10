(function() {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: "",
      todos: []
    },

    methods: {
      addItem: function(event) {
        event.preventDefault();
        if (this.newItem == "") return;
          this.todos.push ({
            item: this.newItem,
            isDone: false
        });

          this.newItem = "";
      },

      deleteItem: function(todo) {
        var index = this.todos.indexOf(todo);
        this.todos.splice(index, 1)
      }
    }
  });
})();