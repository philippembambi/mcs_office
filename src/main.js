import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import {  routes  } from './router'
import axios from 'axios'
/*  Css imports */
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/remixicon/remixicon.css'
import './assets/css/style.css'
import './assets/css/custom.css'
import './assets/vendor/simple-datatables/simple-datatables'
import './assets/css/animate.css'
/*  Js imports */

import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import './assets/vendor/simple-datatables/simple-datatables'
import './assets/vendor/chart.js/chart.min.js'
import './assets/vendor/tinymce/tinymce'
import './assets/js/main.js'


/*  Objetcs exports */
export const eventBus = new Vue()
export const userName = localStorage.getItem('martappli-credentials-name')
export const userEmail = localStorage.getItem('martappli-credentials-TelorMail')

Vue.use(VueRouter)
export const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

export const appConfig = {
  appname: "Mcs Office",
  imageLink: "http://localhost:83/MartApi/img/",
  basePath: "http://localhost:83/MartApi/",
  values: [],

}

export const HTTP = axios.create({
  baseURL: 'http://localhost:83/MartApi/',
  headers: {
    'Content-type': 'application/x-www-form-urlencoded'
  },
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})

  new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
      labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      datasets: [{
        label: 'Bar Chart',
        data: [40, 20, 56, 46, 69, 78, 94],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });