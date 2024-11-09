import { registerVueControllerComponents } from '@symfony/ux-vue';
import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import { createApp } from 'vue';
import Authentication from './vue/controllers/views/authentication/authentication.vue';
import Dashboard from './vue/controllers/views/dashboard/dashboard.vue';
// import Reservation from './vue/controllers/views/dashboard/modules/reservation.vue';
import Reservation from './vue/controllers/views/reservation/reservation.vue';
import { createPinia } from 'pinia';


const pinia = createPinia();

const auth = createApp(Authentication);
auth.use(pinia)
auth.mount('#autenticacion');

const dashboard = createApp(Dashboard);
dashboard.use(pinia)
dashboard.mount('#panel');

const reservation = createApp(Reservation);
reservation.use(pinia);
reservation.mount('#reserva');


registerVueControllerComponents(require.context('./vue/controllers', true, /\.vue$/));