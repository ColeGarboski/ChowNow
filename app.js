var vueAppOne = new Vue({
    el: '#vue-app-one',
    data: {
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
        }
        //eyo
    },
    computed: {

    },
});

