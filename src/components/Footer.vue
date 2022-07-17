<template>
  <div>
      <!-- ======= Footer ======= -->
  <footer id="footer" class="footer">
    <div class="copyright">
      &copy; Copyright <strong><span>{{ app_config.appname }}</span></strong>. Tout droit réservé
    </div>
    <div class="credits">
      <!-- All the links in the footer should remain intact. -->
      <!-- You can delete the links only if you purchased the pro version. -->
      <!-- Licensing information: https://bootstrapmade.com/license/ -->
      <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
      <a href="#"> Mcs Groupe 2022</a>
    </div>
  </footer><!-- End Footer -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data: function(){
    return{
    }
  },
  props:{
      app_config: Array
  },
  created() {
          this.$on("AppNameSet", (data) => {
            alert("hello");
          });

        },

      activated(){
      }
}
</script>