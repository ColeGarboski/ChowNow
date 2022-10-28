Vue.component('menuItem', {
    

    data: function(){
        return {
            name:'John',

        }
    }

});

var vueAppOne = new Vue({
    el: '#vue-app-one',
    data: {
        isActive: true,
        name:'',
        foodType:'',
        hasLocation: false,
        x: 0.0000000,
        y: 0.0000000,

    },
    methods: {
        ShowPosition: function(x, y) {
            this.x = x;
            this.y = y;
            console.log(x);
            console.log(y);
            this.hasLocation = true;
        },
        GetUserLocation: function(){
            navigator.geolocation.getCurrentPosition((position) => {
                this.ShowPosition(position.coords.latitude, position.coords.longitude)
            }
            )
        },
        LogUserData: function() {
            this.GetUserLocation();
            console.log(this.foodType);
        },
        ShowChowMenu: function() {
            this.LogUserData();
            this.isActive = false;
            vueAppTwo.isActive = true;
        }
        
    },
    computed: {

    },
});

var vueAppTwo = new Vue({
    el: '#vue-app-two',
    data: {
        isActive: false,
        isGlutenFree: false,
        isVegan: false,
        isForPets: false,

    },
    methods: {
        
        
    },
    computed: {

    },
});

