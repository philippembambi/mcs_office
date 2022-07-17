<template>
  <div>

  <main id="main" class="main">

    <div class="pagetitle">
      <h1>{{  article.label  }}</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Article</a></li>
          <li class="breadcrumb-item">Vendre</li>
          <li class="breadcrumb-item active">{{ id_art }}</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section contact">

      <div class="row gy-4">

        <div class="col-xl-3">

          <div class="row">
            <div class="col-lg-12">
              <div class="info-box card">
                <i class="bi bi-cart4" style="font-size: 70px;"></i>
                <h3>Quantité en stock</h3>
                <p><a href="#"><h2>{{ article.qte  }}  <span style="font-size: 18px;">article (s)</span></h2></a></p>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="info-box card">
                <i class="bi bi-cart-check" style="font-size: 70px;"></i>
                <h3>Quantité vendue</h3>
                    <p><a href="#"><h2>{{ article.qte  }} <span style="font-size: 18px;">article (s)</span></h2></a></p>
              </div>
            </div>
          </div>

        </div>

        <div class="col-xl-9">
          <div class="card p-4">
                <form
          class="row"
          v-on:submit="addArticle"
          ref="formFields"
          name="formulaire"
          enctype="multipart/form-data"
        >
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Formulaire de vente</h5>

        <div class="col-xl-12">
          <div class="card p-4">
              <div class="row gy-4">

                <div class="col-md-6">
                  <input type="text" name="name" class="form-control" placeholder="Noms du client" required>
                </div>

                <div class="col-md-6 ">
                  <input type="email" class="form-control" name="email" placeholder="Téléphone" required>
                </div>


              </div>
          </div>

        </div>

                <!-- General Form Elements -->
                <div class="input-group mb-3">
                  <label for="qte" class="col-sm-3 col-form-label"
                    >Quantité à acheter</label
                  >
                  <span class="input-group-text" id="basic-addon1"
                    ><i class="bi bi-sort-numeric-up-alt"></i
                  ></span>
                  <input
                    type="number"
                    name="qte"
                    id="qte"
                    class="form-control"
                    placeholder="Entrer le nom de l'article"
                    aria-label="qte"
                    aria-describedby="basic-addon1"
                    required
                    value="1"
                    v-on:input="calculatePrice"
                  />
                </div>

                <div class="input-group mb-3">
                  <label class="col-sm-3 col-form-label">Prix total</label>
                  <span class="input-group-text">$</span>
                  <input
                    type="text"
                    name="total"
                    id="total"
                    class="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    required
                    disabled
                  />
                  <span class="input-group-text">.00</span>
                </div>

                <div>

                <div class="col-md-12">
                  <textarea class="form-control" name="message" rows="6" placeholder="Entrer un commentaire" required></textarea>
                </div>
    <br>
                <div class="row" style="margin-left: 270px; margin-right: 225px">
                  <button
                    type="submit"
                    v-on:click.prevent=""
                    class="btn btn-primary"
                  >
                  <i class="bi bi-check2-square" style="font-size: 25px;"></i>
                    Enregistrer
                  </button>
                </div>
                
                </div>
              </div>
            </div>
          </div>

        </form>

          </div>

        </div>

      </div>

    </section>

  </main><!-- End #main -->
</div>
</template>

<script>
import axios from "axios";
import { appConfig } from "../../main";

export default {
      data () {
    return {
        baseUrl: appConfig.basePath,
        id_art: this.$route.params.id,
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
    }
    },
    methods: {
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
            alert(e.message)
          this.errors.push(e);
        });

        },

        calculatePrice: function(e)
        {
            var qte = parseInt(e.target.value);
            document.getElementById("total").value = qte * parseInt(this.article.price)
        },
        initPrice: function()
        {   var qte =  document.getElementById("qte").value
            document.getElementById("total").value = parseInt(qte) * parseInt(this.article.price)
        }
    },
      watch: {
    '$route'(to, from){
      this.id_art = to.params.id;
    }
      },

    created()
    {
        this.retrieveArticle()
        
        setTimeout(() => {
            this.initPrice()
        }, 2000);
     },
}
</script>