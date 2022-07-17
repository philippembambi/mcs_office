<template>
    <div>
        <keep-alive>
          <component
                      v-bind:is="selectedCmp"
                      v-on:UserWasLogged="changeCmp($event)"
                      v-on:UserWasLoggedOut="disconnectUser"
                      >
          </component>
        </keep-alive>

    </div>
</template>

<script>
  import { eventBus} from './main';
  import Main from './Pages/Main.vue';
  import Login from './Pages/Admin/Login.vue';
  
  export default {
      data: function() {
          return {
              selectedCmp: 'app-login',
              user: {
                name : "felipe",
                email : ""
              },
              userState: "alive"
          }
      },
      components: {
          'app-main': Main,
          'app-login': Login
      },
      methods: {
          changeCmp(credentials) {
              localStorage.setItem('martappli-credentials-name', credentials.name);
              localStorage.setItem('martappli-credentials-TelorMail', credentials.email);
              this.selectedCmp = 'app-main';
              document.location.reload();
//              console.log(credentials);
          },
          retrieveLocalStrorage: function(){
              this.user.name = localStorage.getItem('martappli-credentials-name');
               this.user.email = localStorage.getItem('martappli-credentials-TelorMail');

              if(this.user.name != "" &&  this.user.email != null){
                  this.selectedCmp = 'app-main';
               }
               else{
                 this.selectedCmp = 'app-login';
               }
          },

          disconnectUser: function ($value) {
                    //alert($value + " deconnecté avec succès !");
                    this.userState = 'gone';
            //localStorage.clear();
          }
      },
      watch: {
          selectedCmp : function(){
                eventBus.$emit("UserDataWasSent", this.user.name);
                this.retrieveLocalStrorage();

          },
          userState : function($event){
            if(this.userState == 'gone')
            {
              this.user.name = $event;
              localStorage.clear();
              this.selectedCmp = 'app-login';
              document.location.reload();
            }
          }
      },
        created() {
               this.retrieveLocalStrorage();
        },

        activated() {
            
        },
  }
</script>

<style>

</style>
