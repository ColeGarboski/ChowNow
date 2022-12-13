import CreateAccount from './components/CreateAccountPage.vue';
import FoodMenu from './components/FoodMenu.vue';
import HomePage from './components/HomePage.vue';
import LogInScreen from './components/LogInScreen.vue';
import UserPage from './components/UserPage.vue';
import ForgotPasswordPage from './components/ForgotPasswordPage.vue';

export default [
    {path: '/', component: HomePage},
    {path: '/chow/:foodType', component: FoodMenu}, ///:posX/:posY/:foodType
    {path: '/create', component: CreateAccount},
    {path: '/login', component: LogInScreen},
    {path: '/users', component: UserPage},
    {path: '/forgot', component: ForgotPasswordPage},
]