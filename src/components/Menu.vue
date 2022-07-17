<template>
  <div>
    <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar">
      <ul class="sidebar-nav" id="sidebar-nav">
        <router-link to="/Index" tag="li" class="nav-item"
          ><a class="nav-link"
            ><i class="bi bi-grid"></i><span>Dashboard</span></a
          ></router-link
        >

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#forms-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-cart-plus-fill"></i><span>Entrées en stock</span
            ><i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="forms-nav"
            class="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >

            <router-link
              to="/Article/Ajouter"
              tag="li"
              active-class="nav-link active"
              exact
              ><a
                ><i class="bi bi-tag" style="font-size: 15px;"></i><span>Ajouter un article</span></a
              >
            </router-link>

            <router-link
              to="/Article/All"
              tag="li"
              active-class="nav-link active"
              exact
              ><a
                ><i class="bi bi-tag" style="font-size: 15px;"></i
                ><span>Historique des entrées</span></a
              >
            </router-link>

            <transition
              name="fade"
              appear
              enter-active-class="animated bounce"
              leave-active-class="animated shake"
            >
              <router-link
                :to="{ name: 'editer', params: { id: 1 } }"
                tag="li"
                active-class="nav-link active"
                exact
              >
                <a><i class="bi bi-tag" style="font-size: 15px;"></i><span>Bilan journalier</span></a>
              </router-link>
            </transition>

            <router-link
              :to="{
                name: 'details',
                params: { id: 2 },
                query: { lang: 'fr', mode: 'dev' },
              }"
              tag="li"
              active-class="nav-link active"
              exact
              ><a
                ><i class="bi bi-tag" style="font-size: 15px;"></i><span>Bilan Hebdomadaire</span></a
              >
            </router-link>

            <router-link
              :to="{
                path: '/Article/Chart',
                query: { lang: 'fr', mode: 'dev' },
              }"
              tag="li"
              active-class="nav-link active"
              exact
              ><a><i class="bi bi-tag" style="font-size: 15px;"></i><span>Bilan mesnuel</span></a>
            </router-link>
          </ul>
        </li>
        <!-- End Forms Nav -->

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#charts-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-bag-plus-fill"></i><span>Ventes</span
            ><i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="charts-nav"
            class="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >

            <router-link
              to="/Article/Some"
              tag="li"
              active-class="nav-link active"
              exact
              ><a
                ><i class="bi bi-tag" style="font-size: 15px;"></i
                ><span>Nouvelle Vente</span></a
              >
            </router-link>

            <li>
              <a href="#">
                <i class="bi bi-tag" style="font-size: 15px;"></i><span>Historique des Ventes</span>
              </a>
            </li>

            <transition
              name="fade"
              appear
              enter-active-class="animated bounce"
              leave-active-class="animated shake"
            >
              <router-link
                :to="{ name: 'editer', params: { id: 1 } }"
                tag="li"
                active-class="nav-link active"
                exact
              >
                <a><i class="bi bi-tag" style="font-size: 15px;"></i><span>Bilan journalier</span></a>
              </router-link>
            </transition>

            <router-link
              :to="{
                name: 'details',
                params: { id: 2 },
                query: { lang: 'fr', mode: 'dev' },
              }"
              tag="li"
              active-class="nav-link active"
              exact
              ><a
                ><i class="bi bi-tag" style="font-size: 15px;"></i><span>Bilan Hebdomadaire</span></a
              >
            </router-link>

            <router-link
              :to="{
                path: '/Article/Details/3',
                query: { lang: 'fr', mode: 'dev' },
              }"
              tag="li"
              active-class="nav-link active"
              exact
              ><a><i class="bi bi-tag" style="font-size: 15px;"></i><span>Bilan mesnuel</span></a>
            </router-link>
          </ul>
        </li>
        <!-- End Charts Nav -->

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-house-fill"></i><span>Points de vente</span
            ><i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="components-nav"
            class="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#"> <i class="bi bi-tag" style="font-size: 15px;"></i><span>Aperçu</span> </a>
            </li>
            <li>
              <a href="#"> <i class="bi bi-tag" style="font-size: 15px;"></i><span>Ajouter</span> </a>
            </li>

            <li>
              <a href="#">
                <i class="bi bi-tag" style="font-size: 15px;"></i><span>Performance</span>
              </a>
            </li>
          </ul>
        </li>
        <!-- End Components Nav -->

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#tables-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-cpu-fill"></i><span>Service Bureautique</span
            ><i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="tables-nav"
            class="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i class="bi bi-tag" style="font-size: 15px;"></i><span>Articles de bureautique</span>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="bi bi-tag" style="font-size: 15px;"></i
                ><span>Enregistrer une prestation</span>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="bi bi-tag" style="font-size: 15px;"></i
                ><span>Historique des prestations</span>
              </a>
            </li>
          </ul>
        </li>
        <!-- End Tables Nav -->

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#icons-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-person-lines-fill"></i><span>Clientèle</span
            ><i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="icons-nav"
            class="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="icons-bootstrap.html">
                <i class="bi bi-tag" style="font-size: 15px;"></i><span>Liste exhaustive</span>
              </a>
            </li>
            <li>
              <a href="icons-remix.html">
                <i class="bi bi-tag" style="font-size: 15px;"></i><span>Catégoriser les clients</span>
              </a>
            </li>
            <li>
              <a href="icons-boxicons.html">
                <i class="bi bi-tag" style="font-size: 15px;"></i><span>Paniers d'utilisateurs</span>
              </a>
            </li>

            <li>
              <a href="icons-boxicons.html">
                <i class="bi bi-tag" style="font-size: 15px;"></i><span>Feedbacks clients</span>
              </a>
            </li>
          </ul>
        </li>
        <!-- End Icons Nav -->

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#delivery-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-twitch"></i><span>Partenariat</span
            ><i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="delivery-nav"
            class="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i class="bi bi-tag" style="font-size: 15px;"></i><span>Nos partenaires</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bi bi-tag" style="font-size: 15px;"></i><span>Feedbacks</span>
              </a>
            </li>
          </ul>
        </li>
        <!-- End Charts Nav -->

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#profiles-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-person-circle"></i><span>Profil admin</span
            ><i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="profiles-nav"
            class="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="icons-bootstrap.html">
                <i class="bi bi-tag" style="font-size: 15px;"></i><span>Déconnexion</span>
              </a>
            </li>
            <li>
              <a href="icons-remix.html">
                <i class="bi bi-tag" style="font-size: 15px;"></i><span>Ajouter un admin</span>
              </a>
            </li>
            <li>
              <a href="icons-boxicons.html">
                <i class="bi bi-tag" style="font-size: 15px;"></i><span>Paramètres avancés</span>
              </a>
            </li>
          </ul>
        </li>
        <!-- End Icons Nav -->

        <li class="nav-heading">Pages</li>

        <li class="nav-item">
          <a class="nav-link collapsed" href="users-profile.html">
            <i class="bi bi-pin-angle-fill"></i>
            <span>Signaler un problème</span>
          </a>
        </li>
        <!-- End Profile Page Nav -->

        <li class="nav-item">
          <a class="nav-link collapsed" href="pages-faq.html">
            <i class="bi bi-question-circle"></i>
            <span>Aide</span>
          </a>
        </li>
        <!-- End F.A.Q Page Nav -->

        <li class="nav-item">
          <a class="nav-link collapsed" href="pages-register.html">
            <i class="ri ri-android-fill"></i>
            <span>Bot marketeur</span>
          </a>
        </li>
        <!-- End Register Page Nav -->

        <li class="nav-item">
          <a class="nav-link collapsed" href="pages-contact.html">
            <i class="bi bi-envelope"></i>
            <span>Contact</span>
          </a>
        </li>
        <!-- End Contact Page Nav -->
      </ul>
    </aside>
    <!-- End Sidebar-->
  </div>
</template>

<script>
import Details from "../Pages/Articles/Details.vue";
export default {
  data: function () {
    return {};
  },
  methods: {
    switchCmp: function (cmp) {
      // alert(cmp);
      this.$emit("CmpWasChanged", cmp);
    },
    pushRouter: function (id) {
      this.$router.push({ path: "/Article/Details/" + id, component: Details });
    },
  },
  created() {},

  activated() {},
};
</script>

