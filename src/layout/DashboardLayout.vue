<template>
  <v-app>
    <v-navigation-drawer
      style="z-index:0; display: flex; position: fixed; background-color: #dc001b"
      height="100%"
      v-model="drawer"
      absolute
      app
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="#DC001B --text text--accent-4"
        >
          <v-list-item>
            <img
              style="display: block; margin: auto;"
              src="../assets/imagotipo_vertical_fondos policromáticos_RGB.png"
              width="50%"
            />
          </v-list-item>

          <v-list-item v-if="this.$store.state.user.is_admin">
            <v-list-item-icon>
              <i
                class="fas fa-house-user"
                style="font-size: 22px; color:white"
              ></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: '/BuscarDonantes' }"
              >Buscar Donantes</router-link
            >
          </v-list-item>

          <v-list-item v-if="this.$store.state.user.is_admin">
            <v-list-item-icon>
              <i
                class="fas fa-bullhorn"
                style="font-size: 22px; color: white"
              ></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ name: 'ComunicadosAdmin' }"
              >Comunicados</router-link
            >
          </v-list-item>

          <v-list-item v-if="this.$store.state.user.is_admin">
            <v-list-item-icon>
              <i
                class="far fa-file-alt"
                style="font-size: 22px; color: white"
              ></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ name: 'Peticion' }"
              >Peticiones</router-link
            >
          </v-list-item>

          <v-list-item
            class="menu-link"
            v-if="!this.$store.state.user.is_admin"
          >
            <v-list-item-icon>
              <i class="far fa-user" style="font-size: 22px; color: white"></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: '/' }"
              >Perfil</router-link
            >
          </v-list-item>

          <v-list-item
            class="menu-link"
            v-if="!this.$store.state.user.is_admin"
          >
            <v-list-item-icon>
              <i
                class="far fa-newspaper"
                style="font-size: 22px; color: white"
              ></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: '/news' }"
              >Noticias</router-link
            >
          </v-list-item>

          <v-list-item
            class="menu-link"
            v-show="
              this.$store.state.user.estado && !this.$store.state.user.is_admin
            "
          >
            <v-list-item-icon>
              <i
                class="fas fa-bullhorn"
                style="font-size: 22px; color: white"
              ></i>
            </v-list-item-icon>

            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: '/comunicados' }"
              >Comunicados</router-link
            >
          </v-list-item>

          <v-list-item
            class="menu-link"
            v-show="
              this.$store.state.user.estado && !this.$store.state.user.is_admin
            "
          >
            <v-list-item-icon>
              <i class="fas fa-hands" style="font-size: 22px; color: white"></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: '/donaciones' }"
              >Donaciones</router-link
            >
          </v-list-item>

          <v-list-item
            class="menu-link"
            v-if="
              this.$store.state.user.estado && !this.$store.state.user.is_admin
            "
          >
            <v-list-item-icon>
              <i
                class="fas fa-hand-holding-usd"
                style="font-size: 22px; color: white"
              ></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: 'DonacionesPuntuales' }"
              >Dona Ahora</router-link
            >
          </v-list-item>

          <v-list-item
            class="menu-link"
            v-if="!this.$store.state.user.is_admin"
          >
            <v-list-item-icon>
              <i class="far fa-bell" style="font-size: 22px; color: white"></i>
            </v-list-item-icon>

            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: 'Notificaciones' }"
              >Notificaciones</router-link
            >
          </v-list-item>

          <v-list-item
            class="menu-link"
            v-if="!this.$store.state.user.is_admin"
          >
            <v-list-item-icon>
              <i
                class="fas fa-question"
                style="font-size: 22px; color: white"
              ></i>
            </v-list-item-icon>
            <router-link
              style="color: white; font-family: MONTSERRAT"
              :to="{ path: 'Preguntas' }"
              >Preguntas</router-link
            >
          </v-list-item>

          <v-list-item class="menu-link">
            <v-list-item-icon>
              <i
                class="fas fa-sign-out-alt"
                style="font-size: 22px; color: white"
              ></i>
            </v-list-item-icon>
            <router-link
              @click="logout"
              :to="{ path: 'Login' }"
              style="
                color: white;
                font-family: MONTSERRAT;
              "
              >Cerrar Sesion</router-link
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="#DC001B" app>
      <v-app-bar-nav-icon @click="drawer = false">
        <i
          class="fas fa-align-justify"
          style="font-size: 30px; color: white"
        ></i>
      </v-app-bar-nav-icon>
      <v-btn
        text
        @click="($vuetify.theme.dark = !$vuetify.theme.dark), changeIcon()"
      >
        <v-icon :class="lightDark"></v-icon>
      </v-btn>

      <v-toolbar-title
        style=" z-index: 1; weight: 100%; font-family: MONTSERRAT; color: white"
        v-if="this.$store.state.user.is_admin"
        >Administrador</v-toolbar-title
      >

      <v-toolbar-title
        style="color: white; font-family: MONTSERRAT"
        v-if="!this.$store.state.user.is_admin"
      >
        {{ this.$store.state.user.donante.name }}
      </v-toolbar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
Vue.use(Vuetify);

import Vue from "vue";
import Vuetify from "vuetify/lib";

export default {
  created() {
    this.$store.dispatch("updateStateUser");
  },
  data: () => ({
    drawer: true,
    group: null,
    lightDark: "fas fa-sun",
  }),
  methods: {
    changeIcon() {
      let lightDarkIcon = document.getElementsByTagName('svg')[9];
      if (lightDarkIcon.classList.contains("fa-moon")) {
        lightDarkIcon.classList.remove("fa-moon");
        lightDarkIcon.classList.add("fa-sun");
      } else {
        lightDarkIcon.classList.remove("fa-sun");
        lightDarkIcon.classList.add("fa-moon");
      }
    },
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
* {
  box-shadow: none !important;
}
a:link,
a:visited,
a:active {
  text-decoration: none;
}
.v-list-item--link::before {
  transform: scaleX(0) !important;
  transform-origin: bottom right !important;
  opacity: 100% !important;
}
.v-list-item--link:hover::before {
  transform: scaleX(1) !important;
  transform-origin: bottom left !important;
  border-radius: 0px;
}
.v-list-item--link::before {
  content: " " !important;
  display: block !important;
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  inset: 0 0 0 0 !important;
  background: rgb(255, 123, 123);
  z-index: -1 !important;
  transition: transform 0.5s ease !important;
}
/* modo dark */
.mr-2 {
  color: white;
}
</style>
