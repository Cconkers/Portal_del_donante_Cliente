<template>
  <div>
    <v-row justify="space-around">
      <v-card width="80%">
        <v-img class="mx-auto" :src="images.banner" max-height="200" max-width="600"></v-img>

        <v-form>
          <v-container class="d-flex flex-column">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="this.$store.state.user.donante.name"
                  label="Nombre"
                  hint="Cambiar nombre"
                  outline
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="this.$store.state.user.donante.lastName"
                  label="Apellido"
                  hint="Cambiar apellido"
                  outline
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="this.$store.state.user.email"
                  label="Correo Electrónico"
                  outline
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="this.$store.state.user.donante.phoneNumber"
                  label="Teléfono móvil"
                  hint="Cambiar número de teléfono móvil"
                  outline
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="this.$store.state.user.donante.phoneNumber2"
                  label="Teléfono fijo"
                  hint="Cambiar número de teléfono fijo"
                  outline
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="this.$store.state.user.documento"
                  label="Documento de identidad"
                  :hint="'Cambiar ' + this.$store.state.user.tipoDocumento"
                  outline
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="this.$store.state.user.donante.direccion"
                  label="Dirección"
                  hint="Cambiar dirección"
                  outline
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="this.$store.state.user.donante.cp"
                  label="Código Postal"
                  hint="Cambiar código postal"
                  outline
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  v-model="tipoCuota"
                  name="Cuota"
                  item-text="name"
                  label="Periodicidad de la cuota"
                  :items="aportacion"
                  :hint="
                    'Actualmente la periodicidad es ' +
                      this.$store.state.user.donante.tipoCuota
                  "
                  persistent-hint
                  outline
                ></v-select>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="this.$store.state.user.donante.cuota"
                  label="Cantidad de cuota en '€' "
                  :hint="
                    'Actualmente la couta es ' +
                      this.$store.state.user.donante.cuota +
                      '€'
                  "
                  persistent-hint
                  outline
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="this.$store.state.user.donante.selectorPais"
                  label="Pais"
                  hint="Cambiar país"
                  outline
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="this.$store.state.user.donante.provincia"
                  label="Provincia"
                  hint="Cambiar provincia"
                  outline
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="this.$store.state.user.donante.poblacion"
                  label="Población"
                  hint="Cambiar población"
                  outline
                ></v-text-field>
              </v-col>
              <v-col class="sendChangesBtn" cols="12" sm="6">
                <p>
                  Recuerde que se enviará una petición al administrador del
                  Portal del Donante para efectuar sus cambios en el caso de que
                  sean aprobados
                </p>
                <Modal></Modal>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
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
  data: () => ({
    tipoCuota: null,
    cuota: null,
    selectCuota: null,
    aportacion: [
      {
        id: 0,
        name: "Mensual",
      },
      {
        id: 1,
        name: "Trimestral",
      },
      {
        id: 2,
        name: "Semestral",
      },
      {
        id: 3,
        name: "Anual",
      },
    ],
    images: {
      banner: require("../assets/banner2.jpg"),
    },
  }),
};
</script>

<style scoped>
.sendChangesBtn {
  text-overflow: clip;
  margin: -2% 0% 5% 0%;
}
.row {
  align-items: center;
}
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
