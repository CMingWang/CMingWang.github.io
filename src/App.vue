<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>散戶中的霸主 - 王希銘 - 成功致富又快樂</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <Main />
    </v-main>

    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>CMingWang</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Main from "./components/Main";

export default {
  name: "App",

  components: {
    Main,
  },

  data: () => ({
    //
  }),
};
</script>
