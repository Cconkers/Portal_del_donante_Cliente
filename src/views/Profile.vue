<template>
  <div>
    <Modal></Modal>

<v-row justify="space-around">
<v-card width="80%">
    <v-img :src="images.banner" max-height="200" max-width="600"> </v-img>
    <v-list>
      <!-- Nombre y Apellido-->
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-account
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Nombre</v-list-item-title>
          <v-list-item-subtitle>{{
            this.$store.state.user.donante.name
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
          </v-list>
              <v-list>
      <v-divider></v-divider>
    <v-list-item>
        <v-list-item-icon class="mr-5">
          <v-icon color="indigo">
            mdi-account
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Apellido</v-list-item-title>
          <v-list-item-subtitle>{{
            this.$store.state.user.donante.lastName
          }}</v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>

      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-icon class="mr-5">
          <v-icon color="indigo">
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Correo Electrónico</v-list-item-title>
          <v-list-item-subtitle>{{
            this.$store.state.user.email
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <!-- Teléfono móvil -->
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-cellphone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Móvil</v-list-item-title>
          <v-list-item-subtitle>{{
            this.$store.state.user.donante.phoneNumber
          }}</v-list-item-subtitle>
        </v-list-item-content>

        <!-- Teléfono fijo -->
        <v-list-item-icon class="mr-5">
          <v-icon color="indigo">
            mdi-phone-classic
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Teléfono Fijo</v-list-item-title>
          <v-list-item-subtitle>{{
            this.$store.state.user.donante.phoneNumber2
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item>
        <!-- DNI -->
        <v-list-item-icon class="mr-5">
          <v-icon color="indigo">
            fa-passport
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Tipo documento</v-list-item-title>
          <v-list-item-subtitle>{{
            this.$store.state.user.tipoDocumento
          }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item-title>Número de documento</v-list-item-title>
          <v-list-item-subtitle>{{
            this.$store.state.user.documento
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <!-- Dirección -->
        <v-list-item-icon class="mr-5">
          <v-icon color="indigo">
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Direción</v-list-item-title>
          <v-list-item-subtitle>{{
            this.$store.state.user.donante.direccion
          }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item-title>Código Postal</v-list-item-title>
          <v-list-item-subtitle>{{
            this.$store.state.user.donante.cp
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            fa-money-check
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Tipo de cuota</v-list-item-title>
          <v-list-item-subtitle>{{
            this.$store.state.user.donante.tipoCuota
          }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon class="mr-5">
          <v-icon color="indigo">
            mdi-currency-eur
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Cuota</v-list-item-title>
          <v-list-item-subtitle
            >{{ this.$store.state.user.donante.cuota }}€</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            fa-globe-europe
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>País</v-list-item-title>
          <v-list-item-subtitle>{{
            this.$store.state.user.donante.selectorPais
          }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-flag-variant
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Provincia</v-list-item-title>
          <v-list-item-subtitle>{{
            this.$store.state.user.donante.provincia
          }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon color="indigo">
            fa-map-pin
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Población</v-list-item-title>
          <v-list-item-subtitle>{{
            this.$store.state.user.donante.poblacion
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
    </v-card>
    </v-row>
  </div>
</template>
<script>
import Modal from "../components/Modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      images: {
        banner: require("../assets/banner2.jpg"),
      },
    };
  },
};
</script>

<style>
.titulo {
  color: white;
}
#icon {
  margin-left: 5%;
}
.h2 {
  display: flex;
  margin-bottom: 5px;
  margin-top: 20px;
}

@media screen and (max-width: 600px) {
}
</style>
