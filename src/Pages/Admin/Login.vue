<template>

  <div>
      <main>
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

            <transition name="fade"
                        appear
                        enter-active-class="animated bounce"
                        leave-active-class="animated shake">

                        <div class="alert alert-danger alert-dismissible" role="alert" v-if="show">
                              <i class="bi bi-info-circle me-1"></i>
                              {{  axiosResponse.body }}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
            </transition>

            <transition name="slide"
                        appear
                        enter-active-class="animated bounce"
                        leave-active-class="animated shake">
                        <div class="alert alert-success alert-dismissible" role="alert" v-if="showConnected">
                              <i class="bi bi-info-circle me-1"></i>
                              Authentification effectuée avec succès !
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
            </transition>

              <div class="d-flex justify-content-center py-4">
                <a href="index.html" class="logo d-flex align-items-center w-auto">
                  <span class="d-none d-lg-block" style="font-family: mart1;">Authentification</span>
                </a>
              </div><!-- End Logo -->

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">S'authentifier</h5>
                    <p class="text-center small">Connectez-vous à l'espace d'administration</p>
                  </div>

                  <form ref="formFields" class="row g-3" id="form" name="form" novalidate>

                    <div class="col-12">
                      <label for="yourUsername" class="form-label">Téléphone ou E-mail</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" name="tel_mail" class="form-control" id="tel_mail" required>
                        <div class="invalid-feedback" id="tel_mail_error">Veillez remplir ce champ.</div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Mot de passe</label>
                      <input type="password" name="password" class="form-control" id="psw" required>
                      <div class="invalid-feedback" id="psw_error">Veillez entrer votre mot de passe !</div>
                    </div>

                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe">
                        <label class="form-check-label" for="rememberMe">Se souvenir de moi</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button id="submitingbtn" class="btn btn-primary w-100" style="font-size: 22px;font-family: Verdana;" v-on:click.prevent="apiSubmitting">
                        <span style="width: 25px; height: 25px;" class="spinner-border spinner-border-sm" id="spinner" role="status" aria-hidden="true"></span>
                         Login
                         </button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">Mot de passe oublié ? <a href="pages-register.html">Réinitialiser</a></p>
                    </div>
                  </form>

                  <div class="extraBtn">
                  <button type="reset">Réinitialiser</button>
                  <button data-bs-toggle="modal" data-bs-target="#userConnectedModal" id="successBtn">Afficher popup</button>
                  </div>

                </div>
              </div>

              <div class="credits">
                Copyrigth <a href="#">Groupe Mcs 2022</a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  </main><!-- End #main -->

      <div class="modal fade" id="userConnectedModal" tabindex="-1">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">{{  axiosResponse.title  }}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {{  axiosResponse.body }}
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Ok</button>
                    </div>
                  </div>
                </div>
      </div><!-- End Basic Modal-->
  </div>
</template>

<script>
import axios from 'axios'
import { appConfig } from "../../main";

  export default {
      data: function() {
          return {
            show: false,
            showConnected: false,
              axiosResponse: {
                title: '',
                body: '',
                result: '',
                collection: []
              },
              credentials: {
                            id: "",
                            name: "",
                            sex: "",
                            phone: "",
                            email : ""
                           },
              form : {
                        tel_or_email : "",
                        psw : "",
                        validated_tel_or_email: false,
                        validated_psw: false
                     },
              spinner: false,
              baseUrl: appConfig.basePath,
          }
      },
      watch: {
          show: function(){
              if(this.show == true){
                setTimeout(() => {
                  this.show = false
                }, 2000);
              }
          },
          showConnected: function(){
               if(this.showConnected == true){
                setTimeout(() => {
                  this.showConnected = false
                  this.$emit('UserWasLogged', this.credentials);
                }, 2500);
              }
          },
          validated_tel_or_email: function(){
            if(this.validated_tel_or_email == true){
              document.getElementById("tel_mail_error").style.display = "none";
              document.getElementById("tel_mail").style.borderColor = "grey";
            }
          },
          spinner: function(){
            if(this.spinner == false){
              document.getElementById("spinner").style.display = "none";
              document.getElementById("submitingbtn").disabled= false;
            }
            if(this.spinner == true){
              document.getElementById("spinner").style.display = "inline-flex";
              document.getElementById("submitingbtn").disabled= true;
            }
          }
      },
      methods: {
        apiSubmitting: function(){
          this.spinner = true;
          if(this.validateForm() == true){
            var formFields = new FormData(this.$refs.formFields)
            axios.post(this.baseUrl + 'index.php?action=SIGNIN',
                    formFields,
                    {
                      headers: {
                            'Content-Type': 'multipart/form-data'
                          }
                    }
                    ).then(response =>{
                          this.spinner = false;
                          document.form.reset();
                          /*  Populating the collection */
                          this.axiosResponse.collection.push(response.data);
                          this.axiosResponse.result = this.axiosResponse.collection[0].api_response;
                          /* When connexion goes */
                          if(this.axiosResponse.result == "connected"){
                            /* Parsing api data */
                            this.credentials.id = this.axiosResponse.collection[0].id
                            this.credentials.name = this.axiosResponse.collection[0].name
                            this.credentials.sex = this.axiosResponse.collection[0].sex
                            this.credentials.phone = this.axiosResponse.collection[0].phone
                            this.credentials.email = this.axiosResponse.collection[0].email
                            /* Final actions  */
                            this.showConnected = true
                            //document.getElementById("successBtn").click();
                          }
                          else if(this.axiosResponse.result == "failed"){
                            this.axiosResponse.title = "Ereur de Connexion";
                            this.axiosResponse.body = "Mot de passe ou adresse email incorrect !";
                            //document.getElementById("successBtn").click();
                            this.show = true;
                          }
                          else{
                            this.axiosResponse.title = response.statusText;
                            this.axiosResponse.body = response.data;
                            //document.getElementById("successBtn").click();
                            this.show = true;
                          }
                      })
                    .catch(e =>{
                          this.spinner = false;
                              this.axiosResponse.title = "La connexion au serveur a échoué";
                              if(e.message == "Network Error"){
                                this.axiosResponse.body = e.message;
                                this.axiosResponse.body = "Vous êtes actuellement hors connexion, nous n'avions pas pu vous connecter au serveur."
                              }
                              else{
                                this.axiosResponse.body = e.message;
                              }
                              document.getElementById("successBtn").click();
                              this.errors.push(e)
                        })
          }
        },
        validateForm : function(){
          this.form.tel_or_email = document.getElementById("tel_mail").value;
          this.form.psw = document.getElementById("psw").value;
          if(this.form.tel_or_email == "" || this.form.psw == "")
          {
                  if(this.form.tel_or_email == ""){
                      document.getElementById("tel_mail_error").style.display = "inline";
                      document.getElementById("tel_mail").style.borderColor = "red";
                  }
                  if(this.form.psw == ""){
                    document.getElementById("psw_error").style.display = "inline";
                    document.getElementById("psw").style.borderColor = "red";
                  }
              this.spinner = false;
              return false
          }
          else{
              return true;
          }
        },

        submitForm : function () {
              var formResult = this.validateForm();
            if(formResult == true){
                if(this.form.tel_or_email == this.credentials.tel_or_email){
                      this.form.validated_tel_or_email = true;
                }
                else{
                      document.getElementById("tel_mail_error").innerHTML = "Téléphone ou email incorrect"
                      document.getElementById("tel_mail_error").style.display = "inline";
                      document.getElementById("tel_mail").style.borderColor = "red";
                    }
                if(this.form.psw == this.credentials.psw){
                      this.form.validated_psw = true;
                }
                else{
                      document.getElementById("psw_error").innerHTML = "Mot de passe incorrect"
                      document.getElementById("psw_error").style.display = "inline";
                      document.getElementById("psw").style.borderColor = "red";
                    }
                if(this.form.validated_tel_or_email == true && this.form.validated_psw == true)
                  {
                    this.form.validated_tel_or_email = "";
                    this.form.validated_psw = "";
                    document.getElementById("successBtn").click();
                    this.$emit('UserWasLogged', this.credentials);
                  }
            }
        }
      },
      created () {
        this.spinner = false;
      }
  }
</script>

<style scoped>
  .extraBtn{
    display: none;
    visibility: hidden;
  }
#spinner{
  display: none;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
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
