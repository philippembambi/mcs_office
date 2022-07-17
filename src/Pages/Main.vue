<template>
  <div>
      <app-header v-on:UserWasLoggedOut="main_disconnect" v-bind:app_config="config"></app-header>
      <app-menu v-on:CmpWasChanged="changeContent"></app-menu>

      <transition name="slide">
            <router-view></router-view>
      </transition>

      <app-footer v-bind:app_config="config"></app-footer>
  </div>

</template>

<script>

import Header from '../components/Header.vue';
import Menu from '../components/Menu.vue';
import Footer from '../components/Footer.vue';
import { appConfig } from "../main";

export default {
data () {
  return {
    config: appConfig
  }
},
components: {
          'app-header': Header,
          'app-menu' :  Menu,
          'app-footer': Footer,
      },
      methods: {
        main_disconnect : function(value) {
            this.$emit("UserWasLoggedOut", value)
        }
      },
      created(){

      }
}
</script>

<style>
    .fade-enter {
      opacity: 0;
    }
    .fade-enter-active {
      transition: opacity 1s;
    }
    .fade-leave {
        opacity: 1;
        transform: translateX(0);
    }
    .fade-leave-active {
      transition: opacity 1s;
      opacity: 0;
    }
    .slide-leave-active {
      animation: slide-out 1s ease-out forwards;
    }
    @keyframes slide-in {
      from {
        transform: translateY(20px);
      }
      to {
        transform: translateY(0);

      }
    }
    @keyframes slide-out {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(20px);

      }
    }
</style>
