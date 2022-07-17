<template>
  <div>
  <main id="main" class="main">

    <div class="pagetitle">
      <h1>{{ article.label }}</h1>
      <nav>
        <ol class="breadcrumb">
           <li class="breadcrumb-item"><a href="#">Articles</a></li>
            <li class="breadcrumb-item">Détails</li>
            <li class="breadcrumb-item active">{{ id_art }}</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section profile">
      <div class="row">
        <div class="col-xl-4">

          <div class="card">
            <div class="card-body profile-card pt-6 d-flex flex-column align-items-center">

              <img :src="imgLinks + article.image_1 " id="articleImg" class="thumbanail" style="height: 150px;width: 100px;" alt="">

              <div class="social-links mt-2">
                <a href="#" class="twitter" @click="zoom_in"><i class="bi bi-zoom-in"></i></a>
                <a href="#" class="facebook" @click="zoom_out"><i class="bi bi-zoom-out"></i></a>
                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body profile-card pt-6 d-flex flex-column align-items-center">

              <img :src="imgLinks + article.image_2 " id="articleImg2" class="thumbanail" style="height: 150px;width: 100px;" alt="">

              <div class="social-links mt-2">
                <a href="#" class="twitter" @click="zoom_in2"><i class="bi bi-zoom-in"></i></a>
                <a href="#" class="facebook" @click="zoom_out2"><i class="bi bi-zoom-out"></i></a>
                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

        </div>

        <div class="col-xl-8">

          <div class="card">
            <div class="card-body pt-3">
              <!-- Bordered Tabs -->
              <ul class="nav nav-tabs nav-tabs-bordered">

                <li class="nav-item">
                  <button class="nav-link active" data-bs-toggle="tab"
                    data-bs-target="#profile-overview">Détails</button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Modifier</button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Historique des ventes</button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Stats Hebdomadaires</button>
                </li>

              </ul>
              <div class="tab-content pt-2">

                <div class="tab-pane fade show active profile-overview" id="profile-overview">
                  <h5 class="card-title">Description</h5>
                  <p class="small fst-italic" v-html="article.details" style="text-align: justify;"></p>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label ">Etiquette</div>
                    <div class="col-lg-9 col-md-8">{{ article.label }}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Catégorie</div>
                    <div class="col-lg-9 col-md-8">{{ article.category }}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Marque</div>
                    <div class="col-lg-9 col-md-8">{{ article.marque }}</div>
                  </div>  

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Prix unitaire</div>
                    <div class="col-lg-9 col-md-8">{{ article.price }} $</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Quantité en stock</div>
                    <div class="col-lg-9 col-md-8">{{ article.qte }}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Taille de l'Ecran</div>
                    <div class="col-lg-9 col-md-8">{{ article.pouce }} Pouces</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Capacité disque dur</div>
                    <div class="col-lg-9 col-md-8">{{ article.disk }} Go</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Mémoire RAM</div>
                    <div class="col-lg-9 col-md-8">{{ article.ram }} Go</div>
                  </div>

                </div>

                <div class="tab-pane fade profile-edit pt-3" id="profile-edit">

                  <!-- Profile Edit Form -->
                  <form           
                        ref="formFields"
                        name="formulaire"
                        enctype="multipart/form-data">

                    <div class="row mb-3">
                      <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Changer d'image</label>
                      <div class="col-md-8 col-lg-9">
                        <div class="pt-2">
                          <a href="#" class="btn btn-outline-primary" title="Upload new profile image"><i
                              class="bi bi-card-image" @click="setImage1"></i></a>
                              <span id="setimg1">Image 1</span>
                          <a href="#" class="btn btn-outline-danger" title="Remove my profile image"><i
                              class="bi bi-card-image" @click="setImage2"></i></a>
                              <span id="setimg2">Image 2</span>
                        </div>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="label" class="col-md-4 col-lg-3 col-form-label">Etiquette</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="label" type="text" class="form-control" id="label" :value="article.label">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Catégorie</label>
                      <div class="col-md-8 col-lg-9">

                        <select
                            class="form-select"
                            id="category"
                            name="category"
                            aria-label="Default select example"
                          >
                          <optgroup title="Selectionné" label="Valuer initiale">
                              <option :value="article.caterory_id" selected>{{ article.category }}</option>
                          </optgroup>
                          
                          <optgroup label="Autres options">
                          <option
                            v-for="(category, i) in categories.cat_name_array"
                            :value="i + 1"
                            v-bind:key="i"
                          >
                            {{ category }}
                          </option>
                          </optgroup>
                        </select>

                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="about" class="col-md-4 col-lg-3 col-form-label">Description</label>
                      <div class="col-md-8 col-lg-9">

                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button
                            class="btn btn-light btn-lg"
                            v-on:click.prevent="
                              bbcode('[paragraphe]', '[/paragraphe]')
                            "
                          >
                            P
                          </button>
                          <button
                            class="btn btn-light btn-lg"
                            v-on:click.prevent="bbcode('[gras]', '[/gras]')"
                          >
                            <i class="bi bi-type-bold"></i>
                          </button>
                          <button
                            class="btn btn-light btn-lg"
                            v-on:click.prevent="
                              bbcode('[taille1]', '[/taille1]')
                            "
                          >
                            <i class="bi bi-type-h1"></i>
                          </button>
                          <button
                            class="btn btn-light btn-lg"
                            v-on:click.prevent="
                              bbcode('[taille2]', '[/taille2]')
                            "
                          >
                            <i class="bi bi-type-h2"></i>
                          </button>
                          <button
                            class="btn btn-light btn-lg"
                            v-on:click.prevent="bbcode('[italic]', '[/italic]')"
                          >

                                                    <i class="bi bi-type-h3"></i>
                          </button>
                          <button
                            class="btn btn-light btn-lg"
                            v-on:click.prevent="
                              bbcode('[taille3]', '[/taille3]')
                            "
                          >


                            <i class="bi bi-type-italic"></i>
                          </button>
                          <button
                            class="btn btn-light btn-lg"
                            v-on:click.prevent="
                              bbcode('[souligne]', '[/souligne]')
                            "
                          >
                            <i class="bi bi-type-underline"></i>
                          </button>
                          <button
                            class="btn btn-light btn-lg"
                            v-on:click.prevent="bbcode('[barre]', '[/barre]')"
                          >
                            <i class="bi bi-type-strikethrough"></i>
                          </button>
                          <button
                            class="btn btn-light btn-lg"
                            v-on:click.prevent="bbcode('[lien=]', '[/lien]')"
                          >
                            <i class="bi bi-globe"></i>
                          </button>
                        </div>

                        <textarea name="desc" class="form-control" id="desc"
                          style="height: 100px" v-model="article.details">
                          
                          </textarea>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="company" class="col-md-4 col-lg-3 col-form-label">Marque</label>
                      <div class="col-md-8 col-lg-9">
                          <select
                        class="form-select"
                        id="mark"
                        name="mark"
                        aria-label="Default select example"
                        style="font-size: 14px;"
                      >
                        <option :value="article.id_marque" selected>Valeur initiale : {{ article.marque }}</option>
                        <option value="1">HP</option>
                        <option value="2">LENOVO</option>
                        <option value="3">ACER</option>
                        <option value="4">ASUS</option>
                        <option value="5">DELL</option>
                        <option value="6">MSI</option>
                        <option value="7">OMEN</option>
                        <option value="8">MAC</option>
                        <option value="9">SAMSUNG</option>
                        <option value="10">TECHNO</option>
                        <option value="11">ITEL</option>
                        <option value="12">NOKIA</option>
                        <option value="13">BLACKBERRY</option>
                        <option value="14">IPHONE</option>
                      </select>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Job" class="col-md-4 col-lg-3 col-form-label">Prix Unitaire</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="price" type="text" class="form-control" id="price" :value="article.price">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="quantity" class="col-md-4 col-lg-3 col-form-label">Quantité en Stock</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="quantity" type="text" class="form-control" id="quantity" :value="article.qte">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="pouce" class="col-md-4 col-lg-3 col-form-label">Taille de l'Ecran</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="pouce" type="text" class="form-control" id="pouce"
                          :value="article.pouce">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="disk" class="col-md-4 col-lg-3 col-form-label">Capacité disque dur</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="disk" type="text" class="form-control" id="disk" :value="article.disk">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="processor" class="col-md-4 col-lg-3 col-form-label">Processeur</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="processor" type="text" class="form-control" id="processor" :value="article.processeur">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="ram" class="col-md-4 col-lg-3 col-form-label">Mémoire RAM</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="ram" type="ram" class="form-control" id="ram" :value="article.ram">
                      </div>
                    </div>

                    <div class="row mb-3" style="display: none;">
                      <label for="Email" class="col-md-4 col-lg-3 col-form-label">Image 1</label>
                      <div class="col-md-8 col-lg-9">
                        <input type="file" name="img1" id="img1">
                      </div>
                    </div>

                    <div class="row mb-3" style="display: none;">
                      <label for="Email" class="col-md-4 col-lg-3 col-form-label">Image 2</label>
                      <div class="col-md-8 col-lg-9">
                        <input type="file" name="img2" id="img2">
                      </div>
                    </div>

                  <input type="hidden" name="old_img1" id="old_img1" :value="article.image_1">
                  <input type="hidden" name="old_img2" id="old_img2"  :value="article.image_2">
                  <input type="hidden" name="id_art" id="id_art" :value="id_art">
                  
                    <div class="text-center">
                      <button type="submit" class="btn btn-primary" id="submitingbtn" v-on:click.prevent="updateArticle">
                        <span style="width: 25px; height: 25px;" class="spinner-border spinner-border-sm" id="spinner" role="status" aria-hidden="true"></span>
                        Mettre à jour</button>
                    </div>

                  </form><!-- End Profile Edit Form -->

                    <div style="display: none;">
                      <button data-bs-toggle="modal" data-bs-target="#userConnectedModal" id="successBtn">Afficher popup</button>
                    </div>
                </div>
                  
                <div class="tab-pane fade pt-3" id="profile-settings">

                  <div class="card">
                    <div class="filter">
                      <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li class="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li><a class="dropdown-item" href="#">Client</a></li>
                        <li><a class="dropdown-item" href="#">Date d'achat</a></li>
                      </ul>
                    </div>

                    <div class="card-body">

                      <div class="search-bar">
                        <form
                          class="search-form d-flex align-items-center"
                          method="POST"
                          action="#"
                        >
                          <input
                            type="text"
                            name="query"
                            placeholder="Recherche"
                            title="Enter search keyword"
                          />
                          <button type="submit" title="Search">
                            <i class="bi bi-search"></i>
                          </button>
                        </form>
                      </div>

                      <!-- Table with stripped rows -->
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Client</th>
                            <th scope="col">Date achat</th>
                            <th scope="col">Quantité</th>
                            <th scope="col">Prix total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Brandon Jacob</td>
                            <td>Designer</td>
                            <td>28</td>
                            <td>2016-05-25</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Bridie Kessler</td>
                            <td>Developer</td>
                            <td>35</td>
                            <td>2014-12-05</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Ashleigh Langosh</td>
                            <td>Finance</td>
                            <td>45</td>
                            <td>2011-08-12</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Angus Grady</td>
                            <td>HR</td>
                            <td>34</td>
                            <td>2012-06-11</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Raheem Lehner</td>
                            <td>Dynamic Division Officer</td>
                            <td>47</td>
                            <td>2011-04-19</td>
                          </tr>
                        </tbody>
                      </table>
                      <!-- End Table with stripped rows -->

                    </div>
                  </div>
                </div>

                <div class="tab-pane fade pt-3" id="profile-change-password">
                    <div class="col-lg-12">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">A partir du <a href="#">Lundi 11-07-2022</a></h5>
                          <!-- Bar Chart -->
                          <canvas id="barChart" style="max-height: 400px;"></canvas>                  
                          <div class="alert alert-info alert-dismissible fade show" role="alert">
                              <i class="bi bi-info-circle me-1"></i>
                              Veillez rafraichir la page au cas où le graphique ne s'affcichait pas
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

              </div><!-- End Bordered Tabs -->

            </div>
          </div>

            <transition name="slide"
                        appear
                        enter-active-class="animated shake"
                        leave-active-class="animated bounce">
                        <div class="alert alert-info alert-dismissible" role="alert" v-if="showAlert">
                              <i class="bi bi-info-circle me-1"></i>
                              {{ axiosResponse.body  }}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
            </transition>
        </div>
      </div>
    </section>

  </main><!-- End #main -->

      <div class="modal fade" id="userConnectedModal" tabindex="-1">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">{{  axiosResponse.title  }}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="alert alert-info alert-dismissible fade show" role="alert">
                        <i class="bi bi-info-circle me-1"></i>
                          {{  axiosResponse.body }}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>
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
import { appConfig } from "../../main";
import axios from "axios";
export default {
  data () {
    return {
        id_art: this.$route.params.id,
        lang: this.$route.query.lang,
        imgLinks: appConfig.imageLink,
        baseUrl: appConfig.basePath,
        showAlert: false,
        apiData: [],
        categoryData: [],
        axiosResponse: {
                title: '',
                body: '',
                result: '',
                collection: []
              },
        errors: [],
        article: {
            id_marque: "",
            label: "",
            image_1: "",
            image_2: "",
            image_3: "",
            category: "",
            price: "",
            marque: "",
            qte: "",
            date_stock: "",
            details: "",
            disk: "",
            ram: "",
            processeur: "",
            pouce: "",
            caterory_id: ""
        },
        categories: {
            cat_name_array: [],
          },
      spinner: false,
    }
  },
  watch: {
    '$route'(to, from){
      this.id_art = to.params.id;
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
          },
          showAlert: function()
          {
              if(this.showAlert == true){
                setTimeout(() => {
                  this.showAlert = false
                }, 3000);
              }
          }
  },
  methods: {
        zoom_in: function(){
            document.getElementById('articleImg').style.height = "200px";
            document.getElementById('articleImg').style.width = "300px";
        },
        zoom_out: function(){
            document.getElementById('articleImg').style.height = "150px";
            document.getElementById('articleImg').style.width = "100px";
        },
        zoom_in2: function(){
            document.getElementById('articleImg2').style.height = "200px";
            document.getElementById('articleImg2').style.width = "300px";
        },
        zoom_out2: function(){
            document.getElementById('articleImg2').style.height = "150px";
            document.getElementById('articleImg2').style.width = "100px";
        },
        setImage1: function(e)
        {
          document.getElementById("img1").click();
          document.getElementById("img1").addEventListener('change', function (e) {
            document.getElementById("setimg1").innerHTML = e.target.value;
          })
        },
        setImage2: function(e)
        {
          document.getElementById("img2").click();
          document.getElementById("img2").addEventListener('change', function (e) {
            document.getElementById("setimg2").innerHTML = e.target.value;
          })
        },
        getParsedText: function()
        {
            axios.get(this.baseUrl + "index.php?action=PARSE_TEXTE&texte="+ this.article.details)
            .then((response) => {
              alert(response.data)
              this.article.details = response.data
        })
        .catch((e) => {
          this.errors.push(e);
        });

        },
        retrieveArticle: function()
        {
            axios
        .get(this.baseUrl + "index.php?action=FETCH_ARTICLE&id_art="+ this.id_art)
        .then((response) => {
          this.apiData.push(response.data);
          this.article.id_marque = this.apiData[0][0].id_marque
          this.article.label = this.apiData[0][0].tag
          this.article.price = this.apiData[0][0].price
          this.article.details = this.apiData[0][0].details
          this.article.qte = this.apiData[0][0].qte  
          this.article.image_1 = this.apiData[0][0].picture_1
          this.article.image_2 = this.apiData[0][0].picture_2
          this.article.image_3 = this.apiData[0][0].picture_3
          this.article.category = this.apiData[0][0].category
          this.article.marque = this.apiData[0][0].marque
          this.article.disk = this.apiData[0][0].storage
          this.article.pouce = this.apiData[0][0].pouce
          this.article.processeur = this.apiData[0][0].processor
          this.article.ram = this.apiData[0][0].ram
          this.article.date_stock = this.apiData[0][0].date_stock
          this.article.caterory_id = this.apiData[0][0].category_id

        })
        .catch((e) => {
          this.errors.push(e);
        });

        },

      fetchCategory: function () {
          axios
            .get(this.baseUrl + "index.php?action=GET_ART_CATEGORIES")
            .then((response) => {
              this.categoryData.push(response.data);
              var size = parseInt(this.categoryData[0].length);

              for (let i = 0; i < size; i++) {
                this.categories.cat_name_array.push(this.categoryData[0][i].label);
              }
            })
            .catch((e) => {
              this.errors.push(e);
              alert(e)
            });
    },

    bbcode: function (bbdebut, bbfin) {
      var input = window.document.formulaire.desc;
      input.focus();
      if (typeof document.selection != "undefined") 
      {
          var range = document.selection.createRange();
          var insText = range.text;
          range.text = bbdebut + insText + bbfin;
          range = document.selection.createRange();
          if (insText.length == 0) 
          {
              range.move("character", -bbfin.length);
          } 
          else {
              range.moveStart(
              "character",
              bbdebut.length + insText.length + bbfin.length
            );
          }
          range.select();
      } 
      else if (typeof input.selectionStart != "undefined") {
        var start = input.selectionStart;
        var end = input.selectionEnd;
        var insText = input.value.substring(start, end);
        input.value =
          input.value.substr(0, start) +
          bbdebut +
          insText +
          bbfin +
          input.value.substr(end);
        var pos;
        if (insText.length == 0) {
          pos = start + bbdebut.length;
        } else {
          pos = start + bbdebut.length + insText.length + bbfin.length;
        }
        input.selectionStart = pos;
        input.selectionEnd = pos;
      } else {
        var pos;
        var re = new RegExp("^[0-9]{0,3}$");
        while (!re.test(pos)) {
          pos = prompt("insertion (0.." + input.value.length + "):", "0");
        }
        if (pos > input.value.length) {
          pos = input.value.length;
        }
        var insText = prompt("Veuillez taper le texte");
        input.value =
          input.value.substr(0, pos) +
          bbdebut +
          insText +
          bbfin +
          input.value.substr(pos);
      }
    },

    populateChart: function(){
        var chartValues = [40, 20, 56, 46, 69, 78, 94]
          appConfig.values = chartValues
    },
    reloadPage: function(){
        document.location.reload()
    },
    updateArticle: function () {
      var formFields = new FormData(this.$refs.formFields);
      this.spinner = true;

      axios.post(this.baseUrl + "index.php?action=UPDATE_ARTICLE",
          formFields,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          if (response.status == 200) {
            this.spinner = false;
            this.axiosResponse.title = "Mise à jour";
            this.axiosResponse.body = response.data;
            this.retrieveArticle();
            this.fetchCategory();
            this.showAlert = ! this.showAlert
          }
                      
        })
        .catch((e) => {
          this.spinner = false;
            this.axiosResponse.title = "Une erreur est survenue";
            this.axiosResponse.body = e.message
            document.getElementById("successBtn").click();
        });
    },

  },
  created()
  {
    
    this.retrieveArticle()
    this.fetchCategory()
    this.populateChart()
  },
}
</script>

<style scoped>
#spinner{
  display: none;
}
.search-form input {
  border: 0;
  font-size: 14px;
  color: #012970;
  border: 1px solid rgba(1, 41, 112, 0.2);
  padding: 7px 38px 7px 8px;
  border-radius: 3px;
  transition: 0.3s;
  width: 100%;
}
.search-form input:focus, .header .search-form input:hover {
  outline: none;
  box-shadow: 0 0 10px 0 rgba(1, 41, 112, 0.15);
  border: 1px solid rgba(1, 41, 112, 0.3);
}
.search-form button {
  border: 0;
  padding: 0;
  margin-left: -30px;
  background: none;
}
.search-form button i {
  color: #012970;
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