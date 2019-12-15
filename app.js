Vue.component('greeting', {

    template: '<p>iam reusable component  , iam {{ name}} <button v-on:click="changeName"> change name</button></p>',
    data: function () {
        return {
            name: 'alaa'
        }
    },
  methods:{
        changeName:function () {
            this.name ="reyad"

        }
  }

});
new Vue({
    el: '#vue-app1'
});

new Vue({
    el: '#vue-app2'
});
