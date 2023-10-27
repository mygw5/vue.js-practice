(function() {
  'use strict';

  var vm = new Vue({
    el: "#wrapper",
    data: {
        foods: "",
        food: {
            'fruits': ["りんご", "みかん", "ぶどう"],
            'vegetables': ["キャベツ", "じゃがいも", "なす"],
            'meats': ["鶏肉", "豚肉", "牛肉"]
        }
      },
      computed: {
        foodList() {
            return this.food[this.foods];
        }
      },
  });
})();