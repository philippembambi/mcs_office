<template>
  <div>
    <main id="main" class="main">
     
      <section class="section dashboard">
        <div class="row">
                          <!-- Sales Card -->
          <div class="col-xxl-4 col-md-6">
            <div class="card info-card sales-card">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"
                  ><i class="bi bi-three-dots"></i
                ></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                   <li class="dropdown-header text-start">
                    <h6>Filtrer</h6>
                  </li>

                  <li><a class="dropdown-item" href="#">Cette semaine</a></li>
                  <li><a class="dropdown-item" href="#">Ce mois</a></li>
                  <li><a class="dropdown-item" href="#">Cette année</a></li>
                </ul>
              </div>

              <div class="card-body">
                <h5 class="card-title">Total Ventes <span>| Ce trimestre</span></h5>

                <div class="d-flex align-items-center">
                  <div
                    class="
                      card-icon
                      rounded-circle
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                  >
                    <i class="bi bi-cart-dash-fill"></i>
                  </div>
                  <div class="ps-3">
                    <h6>145 articles</h6>
                    <span class="text-success small pt-1 fw-bold">12%</span>
                    <span class="text-muted small pt-2 ps-1">de croissance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Sales Card -->

                    <!-- Revenue Card -->
          <div class="col-xxl-4 col-md-6">
            <div class="card info-card revenue-card">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"
                  ><i class="bi bi-three-dots"></i
                ></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                   <li class="dropdown-header text-start">
                    <h6>Filtrer</h6>
                  </li>

                  <li><a class="dropdown-item" href="#">Cette semaine</a></li>
                  <li><a class="dropdown-item" href="#">Ce mois</a></li>
                  <li><a class="dropdown-item" href="#">Cette année</a></li>
                </ul>
              </div>

              <div class="card-body">
                <h5 class="card-title">Entrées <span>| Ce trimestre</span></h5>

                <div class="d-flex align-items-center">
                  <div
                    class="
                      card-icon
                      rounded-circle
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                  >
                    <i class="bi bi-cart-plus-fill"></i>
                  </div>
                  <div class="ps-3">
                    <h6>264 articles</h6>
                    <span class="text-success small pt-1 fw-bold">8%</span>
                    <span class="text-muted small pt-2 ps-1">de croissance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Revenue Card -->

          <!-- Customers Card -->
          <div class="col-xxl-4 col-xl-12">
            <div class="card info-card customers-card">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"
                  ><i class="bi bi-three-dots"></i
                ></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filtrer</h6>
                  </li>

                  <li><a class="dropdown-item" href="#">Cette semaine</a></li>
                  <li><a class="dropdown-item" href="#">Ce mois</a></li>
                  <li><a class="dropdown-item" href="#">Cette année</a></li>
                </ul>
              </div>

              <div class="card-body">
                <h5 class="card-title">Clientèle <span>| Ce Trimestre</span></h5>

                <div class="d-flex align-items-center">
                  <div
                    class="
                      card-icon
                      rounded-circle
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                  >
                    <i class="bi bi-people-fill"></i>
                  </div>
                  <div class="ps-3">
                    <h6>544</h6>
                    <span class="text-danger small pt-1 fw-bold">12%</span>
                    <span class="text-muted small pt-2 ps-1">de croissance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Customers Card -->

        </div>
      </section>

      <section class="section">

        <div class="row">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Pôles Mcs</h5>

                <!-- Slides with captions -->
                <div
                  id="carouselExampleCaptions"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../images/ads1.jpg"
                        style="height: 250px"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h3>
                          Mcs It <br />
                          <span style="color: black; font-family: mart1">
                            Un bureau numérique pour vous
                          </span>
                        </h3>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <img
                        src="../images/online-3202912_1920.jpg"
                        style="height: 250px"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h3>
                          Mcs Shop <br />
                          <span style="color: black; font-family: mart1">
                            Le confort des achats
                          </span>
                        </h3>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../images/education-g1b863ff0f_1920.png"
                        style="height: 250px"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h3>
                          Mcs Prod <br />
                          <span style="color: black; font-family: mart1">
                            La production audio-visuelle
                          </span>
                        </h3>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <img
                        src="../images/online.png"
                        style="height: 250px"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h3>
                          Mcs Point Com <br /><br />
                          <span style="font-family: mart1">
                            Le meilleur de la communication digitale
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>

                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <!-- End Slides with captions -->
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Nos services</h5>

                <!-- Slides with captions -->
                <div
                  id="carouselExample"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 4"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide-to="1"
                      aria-label="Slide 5"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../images/online-shop-6401739_1920.png"
                        style="height: 250px"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h3>
                          <span style="color: black; font-family: mart1">
                            Ventes des consommables informatiques
                          </span>
                        </h3>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <img
                        src="../images/brainstorming-3170036_1920.jpg"
                        style="height: 250px"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h3>
                          <span style="font-family: mart1">
                            Accompagnement numérique
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>

                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <!-- End Slides with captions -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- End #main -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {},
};
</script>
