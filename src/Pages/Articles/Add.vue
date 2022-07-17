<template>
  <div>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Ajouter un article</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Pages</a></li>
            <li class="breadcrumb-item">Articles</li>
            <li class="breadcrumb-item active">Ajouter</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Title -->

            <transition name="slide"
                        appear
                        enter-active-class="animated bounce"
                        leave-active-class="animated shake">
                        <div class="alert alert-info alert-dismissible" role="alert" v-if="showAlert">
                              <i class="bi bi-info-circle me-1"></i>
                              {{ axiosResponse.body }}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
            </transition>

      <div class="progress mt-3" id="progressbar">
        <div
          id="progressValue"
          class="progress-bar progress-bar-striped bg-success"
          role="progressbar"
          style="width: 25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <section class="section">
        <form
          class="row"
          v-on:submit="addArticle"
          ref="formFields"
          name="formulaire"
          enctype="multipart/form-data"
        >
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Description générale</h5>

                <!-- General Form Elements -->
                <div class="input-group mb-3">
                  <label for="inputEmail" class="col-sm-3 col-form-label"
                    >Libellé</label
                  >
                  <span class="input-group-text" id="basic-addon1"
                    ><i class="bi bi-tag-fill"></i
                  ></span>
                  <input
                    type="text"
                    name="label"
                    id="label"
                    class="form-control"
                    placeholder="Entrer le nom de l'article"
                    aria-label="Label"
                    aria-describedby="basic-addon1"
                    required
                  />
                </div>

                <div class="row mb-3">
                  <label class="col-sm-3 col-form-label">Catégorie</label>
                  <div class="col-sm-9">
                    <select
                      class="form-select"
                      id="category"
                      name="category"
                      aria-label="Default select example"
                      v-model="selected_category"
                    >
                      <option
                        v-for="(category, i) in categories.cat_name_array"
                        :value="i + 1"
                        v-bind:key="i"
                      >
                        {{ category }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="input-group mb-3">
                  <label class="col-sm-3 col-form-label">Prix Unitaire</label>
                  <span class="input-group-text">$</span>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    class="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    required
                  />
                  <span class="input-group-text">.00</span>
                </div>

                <div v-if="details_computer == true">

                  <div class="row mb-3">
                    <label class="col-sm-3 col-form-label">Marque</label>
                    <div class="col-sm-9">
                      <select
                        class="form-select"
                        id="mark"
                        name="mark"
                        aria-label="Default select example"
                        style="font-size: 14px;"
                      >
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

                   <div class="input-group mb-3">
                      <label for="quantity" class="col-sm-3 col-form-label"
                        >Quantité</label
                      >
                      <span class="input-group-text" id="basic-addon1"
                        ><i class="bi bi-sort-numeric-up-alt"></i
                      ></span>
                      <input
                        type="text"
                        name="quantity"
                        id="quantity"
                        class="form-control"
                        placeholder=""
                        aria-label="Quantity"
                        aria-describedby="basic-addon1"
                        required
                      />
                  </div>

                   <div class="input-group mb-3">
                  <label for="disk" class="col-sm-3 col-form-label"
                    >Disque Dur</label
                  >
                  <span class="input-group-text" id="basic-addon1"
                    ><i class="bi bi-cpu-fill"></i
                  ></span>
                  <input
                    type="text"
                    name="disk"
                    id="disk"
                    class="form-control"
                    placeholder=""
                    aria-label="Disk"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div class="input-group mb-3">
                  <label for="ram" class="col-sm-3 col-form-label"
                    >Mémoire RAM</label
                  >
                  <span class="input-group-text" id="basic-addon1"
                    ><i class="bi bi-cpu-fill"></i
                  ></span>
                  <input
                    type="text"
                    name="ram"
                    id="ram"
                    class="form-control"
                    placeholder=""
                    aria-label="Ram"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div class="input-group mb-3">
                  <label for="processor" class="col-sm-3 col-form-label"
                    >Processeur</label
                  >
                  <span class="input-group-text" id="basic-addon1"
                    ><i class="bi bi-cpu-fill"></i
                  ></span>
                  <input
                    type="text"
                    name="processor"
                    id="processor"
                    class="form-control"
                    placeholder=""
                    aria-label="Processor"
                    aria-describedby="basic-addon1"
                  />
                </div>


                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <!-- Advanced Form Elements -->
              
                    <div class="input-group mb-3" style="margin-top: 2%;">
                      <span class="input-group-text" id="basic-addon1">Taille d'écran</span>
                      <input type="text" class="form-control" name="pouce" id="pouce" placeholder="" aria-label="pouce" aria-describedby="basic-addon1">
                    </div>

                <div class="row mb-3">
                  <div class="col-lg-12">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">
                          Entrez la description de l'article
                        </h5>

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
                        <!-- TinyMCE Editor -->
                        <textarea
                          id="desc"
                          name="desc"
                          class="tinymce-editor form-control"
                          style="width: 100%"
                        >
                        </textarea
                        ><!-- End TinyMCE Editor -->
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="img1" class="col-sm-3 col-form-label"
                    >Image 1</label
                  >
                  <div class="col-sm-9">
                    <input
                      class="form-control"
                      type="file"
                      id="img1"
                      name="img1"
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="img2" class="col-sm-3 col-form-label"
                    >Image 2</label
                  >
                  <div class="col-sm-9">
                    <input
                      class="form-control"
                      type="file"
                      id="img2"
                      name="img2"
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="img3" class="col-sm-3 col-form-label"
                    >Image 3</label
                  >
                  <div class="col-sm-9">
                    <input
                      class="form-control"
                      type="file"
                      id="img3"
                      name="img3"
                    />
                  </div>
                </div>

                <div class="row" style="margin-left: 85px; margin-right: 85px">
                  <button
                    type="submit"
                    v-on:click.prevent="addArticles"
                    class="btn btn-primary"
                  >
                    Enregistrer
                  </button>
                </div>

                <div
                  class="row extraBtn"
                  style="margin-left: 85px; margin-right: 85px"
                >
                  <button
                    v-on:click.prevent=""
                    data-bs-toggle="modal"
                    data-bs-target="#userConnectedModal"
                    id="successBtn"
                  >
                    Afficher popup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <!-- End General Form Elements -->
      </section>
    </main>
    <!-- End #main -->

    <div class="modal fade" id="userConnectedModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ axiosResponse.title }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            {{ axiosResponse.body }}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- End Basic Modal-->
  </div>
</template>

<script>
import axios from "axios";
import { appConfig } from "../../main";

export default {
  data() {
    return {
      baseUrl: appConfig.basePath,
      details_computer: false,
      details_accesories: false,
      selected_category: 0,
      axiosResponse: {
        title: "",
        body: "",
        result: "",
        collection: [],
      },
      apiData: [],
      errors: [],
      categories: {
        cat_name_array: [],
      },
      progressValue: 0,
      showAlert: false
    };
  },
  watch: {
          showAlert: function()
          {
              if(this.showAlert == true){
                setTimeout(() => {
                  this.showAlert = false
                }, 3000);
          }
          },
    selected_category: function () {
      if (this.selected_category == 1 || this.selected_category == 2) {
        this.details_computer = true;
      } else {
        this.details_computer = false;
      }
    },
    progressValue: function () {
      document.getElementById("progressValue").style.width =
        this.progressValue + "%";
      document.getElementById("progressbar").style.display = "flex";

      setTimeout(() => {
        if (this.progressValue < 100) {
          var maxi = 5;
          var mini = 2;
          var degat = Math.max(Math.floor(Math.random() * maxi) + 1, mini);
          this.progressValue += degat;
          document.getElementById("progressValue").style.width =
            this.progressValue + "%";
          this.IncreaseProgressBar();
        }
      }, 500);
    },
  },
  methods: {
    IncreaseProgressBar: function () {
      this.progressValue += 5;
    },
    addArticle: function () {
      document.getElementById("progressbar").style.display = "flex";
    },
    bbcode: function (bbdebut, bbfin) {
      var input = window.document.formulaire.desc;
      input.focus();
      if (typeof document.selection != "undefined") {
        var range = document.selection.createRange();
        var insText = range.text;
        range.text = bbdebut + insText + bbfin;
        range = document.selection.createRange();
        if (insText.length == 0) {
          range.move("character", -bbfin.length);
        } else {
          range.moveStart(
            "character",
            bbdebut.length + insText.length + bbfin.length
          );
        }
        range.select();
      } else if (typeof input.selectionStart != "undefined") {
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
    addArticles: function () {
      var formFields = new FormData(this.$refs.formFields);
      this.progressValue += 1;
      axios
        .post(
          this.baseUrl + "index.php?action=ADD_ARTICLE",
          formFields,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          if (response.status == 200) {
            this.progressValue = 100;
            this.axiosResponse.title = response.data;
            this.axiosResponse.body =
              "Produit " +
              document.getElementById("label").value +
              " ajouté avec succès !";
            this.showAlert = true
            //document.getElementById("successBtn").click();
            document.formulaire.reset();
            setTimeout(() => {
              document.getElementById("progressbar").style.display = "none";
            }, 500);
          }
        })
        .catch((e) => {
            this.axiosResponse.title = "Une erreur est survenue";
            this.axiosResponse.body = e.message
            document.getElementById("successBtn").click();
        });
    },
    fetchCategory: function () {
      axios
        .get(this.baseUrl + "index.php?action=GET_ART_CATEGORIES")
        .then((response) => {
          this.apiData.push(response.data);
          var size = parseInt(this.apiData[0].length);
          for (let i = 0; i < size; i++) {
            this.categories.cat_name_array.push(this.apiData[0][i].label);
          }
        })
        .catch((e) => {
          this.errors.push(e);
          this.axiosResponse.title = "Une erreur a survenue";
          this.axiosResponse.body = e;
          document.getElementById("successBtn").click();
        });
    },
    async asyncRetrieving() {
      try {
        const response = await axios.get("https://myapi/data/");
        this.apiData = response.data;
      } catch (error) {
        this.errors.push(error);
      }
    },
    postData: function (form) {
      axios
        .post("https://myapi/data/post/", {
          body: this.form,
        })
        .then((response) => {})
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  mounted() {},
  created() {
    this.fetchCategory();
    this.fetchMarks();
  },
};
</script>

<style>
#progressbar {
  display: none;
  margin-bottom: 20px;
}
.extraBtn {
  display: none;
  visibility: hidden;
}
</style>
