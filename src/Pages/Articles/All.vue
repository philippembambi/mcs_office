<template>
  <div>
    <main id="main" class="main">

        <div class="pagetitle">
            <h1>Historique des entrées</h1>
            <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Pages</a></li>
                <li class="breadcrumb-item">Articles</li>
                <li class="breadcrumb-item active">Historique d'Entrées</li>
            </ol>
            </nav>
        </div>
      <!-- End Page Title -->

      <div id="wrapper">

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
          <!-- DataTales Example -->
          <div class="card shadow mb-4">

            <div class="card-header py-3">
              <div class="filter">
                      <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-grid" style="font-size: 20px;"></i></a>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li class="dropdown-header text-start">
                          <h6>Filtrer par</h6>
                        </li>
                        <li><a class="dropdown-item" @click="filterBy('tag', 'Libellé')" href="#"><i class="bi bi-tag"></i> Libellé</a></li>
                        <li><a class="dropdown-item" @click="filterBy('label', 'Catégorie')" href="#"><i class="bi bi-tag"></i> Catégorie</a></li>
                        <li><a class="dropdown-item" @click="filterBy('name', 'Marque')" href="#"><i class="bi bi-tag"></i> Marque</a></li>
                      </ul>
                      Filtrer par : <a href="#">{{ filterText }}</a>
              </div>
              <br>
              <div style="margin-left: 90%; margin-top: -3%">
               
              </div>
            </div>
            <div class="card-body" id="">

              <div class="search-bar">
                        <form
                          class="search-form d-flex align-items-center"
                          method="POST"
                          action="#"
                        >
                          <input
                            type="text"
                            name="filterText"
                            id="filterText"
                            placeholder="Recherche"
                            v-on:input="filterData"
                            title="Enter search keyword"
                          />
                          <button type="submit" title="Search">
                            <i class="bi bi-search" id="searchIcon"></i>
                            <i id="spinner" class="spinner-border spinner-border-sm"></i>
                          </button>
                        </form>
              </div>

              <div class="table-responsive" style="margin-top: 0.5%;">
                <table
                  class="table table-bordered datatable"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Image</th>
                      <th>Libellé</th>
                      <th>Catégorie</th>
                      <th>Prix</th>
                      <th>Marque</th>
                      <th>Date de mis en stock</th>
                       <th>Détails</th>
                      <th>Vente</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Id</th>
                      <th>Image</th>
                      <th>Libellé</th>
                      <th>Catégorie</th>
                      <th>Prix</th>
                      <th>Marque</th>
                      <th>Date de mis en stock</th>
                      <th>Détails</th>
                      <th>Vente</th>
                    </tr>
                  </tfoot>

                  <tbody>
                    <tr v-for="(article, i) in articles.array_label" 
                        :value="i + 1"
                        v-bind:key="i">

                      <td>{{  articles.array_id[i]  }}</td>
                      <td>
                          <img :src="imgLinks + articles.array_image[i] " 
                                :id="articles.array_id[i]" 
                                v-on:mouseover="zoom(articles.array_id[i])" 
                                v-on:mouseout="zoom_out(articles.array_id[i])" 
                                style="height: 100px;width: 70px;" alt="">
                      </td>
                      <td>{{ article   }}</td>
                      <td>{{  articles.array_categories[i]  }}</td>
                      <td>{{  articles.array_price[i]  }} $</td>
                      <td>{{  articles.array_marque[i]  }}</td>
                      <td>{{  articles.array_date_stock[i]  }}</td>
                      <td>
                        <button type="button" @click="openDetails(articles.array_id[i])" class="btn btn-primary btn-lg"><i class="bi bi-grid-fill"></i></button>
                      </td>
                      <td>
                        <button type="button" @click="SellArticle(articles.array_id[i])" class="btn btn-success"><i class="bi bi-cart-check-fill btn-lg"></i></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

                  <button
                    v-on:click.prevent=""
                    data-bs-toggle="modal"
                    data-bs-target="#zommImage"
                    id="zooming_img"
                  >
                    Afficher popup
                  </button>

    </main>

    <div class="modal fade" id="zommImage" tabindex="-1" style="height: 400px;">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body" style="margin-top: -2%;">
              <img :src="imgLinks + zoom_img" alt="" class="thumbnail" style="height: 300px;width: 100%;">
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import Details from './Details.vue'
import SellArticle from './Sell.vue'
import { appConfig } from "../../main"

export default {
  data: function () {
    return {
        zoom_img: "",
        imgLinks: appConfig.imageLink,
        baseUrl: appConfig.basePath,
        apiData: [],
        errors: [],
        articles: {
            array_id: [],
            array_label: [],
            array_image: [],
            array_categories: [],
            array_price: [],
            array_marque: [],
            array_qte: [],
            array_date_stock: [],
        },
        filteredBy : "tag",
        filterValue: "",
        filterText: "Libellé",
        filteredData: [],
        spinner: false,
    };
  },
  watch: {
      spinner: function(){
            if(this.spinner == false){
              document.getElementById("spinner").style.display = "none";
              document.getElementById("searchIcon").style.display = "inline-flex";
            }
            if(this.spinner == true){
              document.getElementById("spinner").style.display = "inline-flex";
              document.getElementById("searchIcon").style.display = "none";
            }
  }
  },
  methods: {
      zoom_in: function(image)
      {
        this.zoom_img = image
                    document.getElementById("zooming_img").click();
      },
      zoom: function(id){
        document.getElementById(id).style.height = "120px";
        document.getElementById(id).style.width = "100px";
      },
      zoom_out: function(id)
      {
        document.getElementById(id).style.height = "100px";
        document.getElementById(id).style.width = "70px";
      },
      openDetails: function(val){
        this.$router.push({ path: "/Article/Details/" + val, component: Details });
      },
      SellArticle: function(val) {
        this.$router.push({ path: "/Article/Sell/" + val, component: SellArticle });
      },
        fetchArticles: function () {
      axios
        .get(this.baseUrl + "index.php?action=GET_ART_ARTICLES")
        .then((response) => {
          this.apiData.push(response.data);
          var size = parseInt(this.apiData[0].length);
            
          for (let i = 0; i < size; i++) {
            this.articles.array_label.push(this.apiData[0][i].tag);
            this.articles.array_image.push(this.apiData[0][i].picture_1);
            this.articles.array_price.push(this.apiData[0][i].price);
            this.articles.array_qte.push(this.apiData[0][i].qte);
            this.articles.array_marque.push(this.apiData[0][i].marque);
            this.articles.array_date_stock.push(this.apiData[0][i].date_stock);
            this.articles.array_id.push(this.apiData[0][i].id_art);
            this.articles.array_categories.push(this.apiData[0][i].categories);
          }
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    filterBy: function(key, value) {
      this.filteredBy = key
      this.filterText = value
    },
    filterData: function(e){
      this.spinner = true;
      this.filterValue =  e.target.value
      /* Empty the current table */
      this.filteredData = []
      this.articles.array_label = []
      this.articles.array_image = []
      this.articles.array_price = []
      this.articles.array_qte = []
      this.articles.array_marque = []
      this.articles.array_date_stock = []
      this.articles.array_id = []
      this.articles.array_categories = []
      axios
        .get(this.baseUrl + "index.php?action=FILTER_ARTICLES&key="+this.filteredBy + "&filterValue=" +this.filterValue)
        .then((response) => {
          this.filteredData.push(response.data);
           var size = parseInt(this.filteredData[0].length);
          for (let i = 0; i < size; i++) {
            this.articles.array_label.push(this.filteredData[0][i].tag);
            this.articles.array_image.push(this.filteredData[0][i].picture_1);
            this.articles.array_price.push(this.filteredData[0][i].price);
            this.articles.array_qte.push(this.filteredData[0][i].qte);
            this.articles.array_marque.push(this.filteredData[0][i].marque);
            this.articles.array_date_stock.push(this.filteredData[0][i].date_stock);
            this.articles.array_id.push(this.filteredData[0][i].id_art);
            this.articles.array_categories.push(this.filteredData[0][i].categories);
            //alert(this.filteredData[0][i].tag)
          }
          this.spinner = false;
        })
        .catch((e) => {
          this.errors.push(e);
          this.spinner = false;
        });

    }
  },
  created(){
    this.fetchArticles();
  }
};
</script>

<style scoped>
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
#spinner{
  display: none;
}
#zooming_img{
  display: none;
}
</style>