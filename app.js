Vue.component('vue-menu-item', {
    template: `
        
    `,

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
        menuItem: {
            name:'Big Mac',
            restaurant:'McDonalds',
            foodType:'Burger',
            calories:600,
            location: {
                city:'Manchester',
                distanceFromUser:2, //Calculate me
            },
            locations: [ //Play with having multiple location objects within here
                '1',
                '2',
                
            ],
            description: 'mcdonalds new burger',

        },
        menuItems: [ //Will render a menu item component for each object within this dataset
            '1', 
            '2', 
            '3',
            '4',
            '5',
            '6',

        ],

    },
    methods: {
        
        
    },
    computed: {

    },
});

