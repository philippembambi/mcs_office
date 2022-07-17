<template>
  <div>
    <!-- ======= Header ======= -->
    <header id="header" class="header fixed-top d-flex align-items-center">
      <div class="d-flex align-items-center justify-content-between">
        <a href="index.html" class="logo d-flex align-items-center">
          <img src="../images/logo.png" alt="" style="height: 100px" />
          <span class="d-none d-lg-block"
            >{{ app_config.appname }}</span
          >
        </a>
        <i class="bi bi-list toggle-sidebar-btn"></i>
      </div>
      <!-- End Logo -->

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
      <!-- End Search Bar -->

      <nav class="header-nav ms-auto">
        <ul class="d-flex align-items-center">
          <li class="nav-item d-block d-lg-none">
            <a class="nav-link nav-icon search-bar-toggle" href="#">
              <i class="bi bi-search"></i>
            </a>
          </li>
          <!-- End Search Icon-->

          <li class="nav-item dropdown">
            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i class="bi bi-chat-left-text"></i>
              <span class="badge bg-success badge-number">1</span> </a
            ><!-- End Messages Icon -->

            <ul
              class="
                dropdown-menu dropdown-menu-end dropdown-menu-arrow
                messages
              "
            >
              <li class="dropdown-header">Messages personnels</li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="message-item">
                <a href="#">
                  <img
                    src="assets/img/messages-1.jpg"
                    alt=""
                    class="rounded-circle"
                  />
                  <div>
                    <h4>Maria Hudson</h4>
                    <p>
                      Velit asperiores et ducimus soluta repudiandae labore
                      officia est ut...
                    </p>
                    <p>4 hrs. ago</p>
                  </div>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="dropdown-footer">
                <a href="#">Affihcer plus</a>
              </li>
            </ul>
            <!-- End Messages Dropdown Items -->
          </li>
          <!-- End Messages Nav -->

          <li class="nav-item dropdown">
            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i class="bi bi-bell"></i>
              <span class="badge bg-primary badge-number">1</span> </a
            ><!-- End Messages Icon -->

            <ul
              class="
                dropdown-menu dropdown-menu-end dropdown-menu-arrow
                messages
              "
            >
              <li class="dropdown-header">Notifications en cours</li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="message-item">
                <a href="#">
                  <img
                    src="assets/img/messages-1.jpg"
                    alt=""
                    class="rounded-circle"
                  />
                  <div>
                    <h4>Maria Hudson</h4>
                    <p>
                      Velit asperiores et ducimus soluta repudiandae labore
                      officia est ut...
                    </p>
                    <p>4 hrs. ago</p>
                  </div>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li class="dropdown-footer">
                <a href="#">Afficher plus</a>
              </li>
            </ul>
            <!-- End Messages Dropdown Items -->
          </li>
          <!-- End Messages Nav -->

          <li class="nav-item dropdown pe-3">
            <a
              class="nav-link nav-profile d-flex align-items-center pe-0"
              href="#"
              data-bs-toggle="dropdown"
            >
              <img
                src="../images/user.png"
                alt="Profile"
                class="rounded-circle"
              />
              <span class="d-none d-md-block dropdown-toggle ps-2">
                {{ user.name }}
              </span> </a
            ><!-- End Profile Iamge Icon -->

            <ul
              class="
                dropdown-menu dropdown-menu-end dropdown-menu-arrow
                profile
              "
            >
              <li class="dropdown-header">
                <h6>{{ user.name }}</h6>
                <span>{{ user.email }}</span>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <i class="bi bi-gear"></i>
                  <span>Paramètres</span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li>
                <hr class="dropdown-divider" />
              </li>

              <li>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#basicModal"
                  v-on:click="exitApp"
                >
                  <i class="bi bi-box-arrow-right"></i>
                  <span>Se déconnecter</span>
                </a>
              </li>
            </ul>
            <!-- End Profile Dropdown Items -->
          </li>
          <!-- End Profile Nav -->
        </ul>
      </nav>
      <!-- End Icons Navigation -->
    </header>
    <!-- End Header -->
  </div>
</template>

<script>
import { eventBus } from "../main";
import App from "../App.vue";
export default {
  data: function () {
    return {
      user: {
        name: localStorage.getItem("martappli-credentials-name"),
        email: localStorage.getItem("martappli-credentials-TelorMail"),
      },
    };
  },
  mixins: [App],
  props: {
    email: {
      type: String,
      default: "Costa45@gmail.com",
    },
    app_config: Array
  },
  methods: {
    exitApp: function () {
      this.$emit("UserWasLoggedOut", this.user.name);
      //          localStorage.setItem('martappli-credentials-name', "init");
      //            eventBus.$emit("UserWasDisconnected", "Disconnection");
    },
  },
  created() {
    eventBus.$on("UserDataWasSent", (userData) => {
      this.userName = userData;
    });
  },

  activated() {},
};
</script>
