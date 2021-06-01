<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
        <v-toolbar-title>散戶中的霸主 - 王希銘 - 成功致富又快樂</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <Main/>
    </v-main>
  </v-app>
</template>

<script>
import Main from './components/Main';

export default {
  name: 'App',

  components: {
    Main,
  },

  data: () => ({
    //
  }),
};
</script>
