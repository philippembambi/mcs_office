<template>
<div class="col-sm-4">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title"><strong>Cmp-P Adminstrateur</strong></h3>
          </div>
          <div class="panel-body">

    <label for="inputEmail">Connectez-vous avec votre Adresse Email</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-on:input="submitAdmin">
         <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me" v-on:click="keepConnecting"> Se souvenir de moi
          </label>
        </div>
     <!--   <button v-on:click="printdata" class="btn btn-lg btn-primary btn-block">Se connecter</button>-->
<hr>
     <strong>{{ donnees.infoAfter }}</strong>

 * <h4><span style="color: red;">{{ donnees.TotalClient }}</span> enregistrés</h4>
 
</div>
<app-customer 
             v-bind:TurnConnection="donnees.connected" 
             v-on:clientadded="donnees.TotalClient = $event"
             v-on:clientremoved="donnees.TotalClient = $event">
</app-customer>

</div>
</div>
</template>

<script>
import Customer from './Customer.vue';
export default {
    data: function() {
        return {
            donnees: {
           info: '',
           infoAfter: '',
           connected: 'Off',
           AdminList: {nom: 'philippembambi413@gmail.com'},
           cookies: false,
           TotalClient: 0
            }
        }
    },
    methods: {
        submitAdmin: function(event) {
   if(event.target.value == this.donnees.AdminList.nom || this.donnees.cookies == true)
   {
this.donnees.cookies = false;       
this.donnees.info = 'Admin connecté avec succès !';
this.donnees.connected = 'ON';
this.printdata();
   }

   else 
   {
       this.donnees.info = 'Aucune correspondance !';
       this.donnees.connected = 'Off';
       this.printdata();
   }         
        },

        printdata: function() {
            this.donnees.infoAfter = this.donnees.info
            return this.donnees.infoAfter
        },

    keepConnecting: function(event) {
if(this.donnees.connected == 'ON')
{
 this.donnees.cookies = true;
 alert('cookies créés avec succès');
           }
 else 
 {
     this.donnees.cookies = false;
 }          
                  }

    },

    components: {
        'app-customer': Customer
    },
    activated() {
    console.log("Le composant parent Admin est activé !");
  },
  deactivated() {
    console.log("Le composant parent Admin est désactivé !");
  },
  destroyed() {
    console.log("Le composant parent Admin est détruit !");
  }
}
</script>

<style>

</style>