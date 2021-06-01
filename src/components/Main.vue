<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <v-col cols="12">
        <!-- <v-img
          :src="require('../assets/')"
          class="my-3"
          contain
          height="200"
        /> -->
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          散戶中的霸主 - 王希銘 - 成功致富又快樂
        </h1>

        <p class="subheading font-weight-regular">油脂、浪漫 Na!!</p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">基本資料</h2>

        <v-row justify="center">
          <v-list>
            <v-list-item-group color="primary">
              <v-list-item v-for="(itm, i) in lst" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="itm.ico"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="itm.txt"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group> </v-list
        ></v-row>
      </v-col>

      <v-col class="mb-5" cols="5">
        <h2 class="headline font-weight-bold mb-3">經典噁圖</h2>

        <v-row justify="center">
          <v-carousel
            cycle="true"
            interval="4500"
            progress="true"
            height="auto"
          >
            <v-carousel-item
              v-for="i in 10"
              :key="i"
              :src="require(`../assets/${i}.jpg`)"
            ></v-carousel-item>
          </v-carousel>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3"></h2>

        <v-row justify="center"> </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Main",

  data: () => ({
    lst: [
      { ico: "mdi-calendar", txt: "01/08, 1986" },
      { ico: "mdi-cellphone", txt: "0980 497 079" },
      { ico: "mdi-home", txt: "320 桃園市中壢區龍川二街 134 號" },
      { ico: "mdi-needle", txt: "B 型" },
      { ico: "mdi-ruler", txt: "168cm" },
      { ico: "mdi-weight", txt: "100 ~ 110kg" },
    ],
  }),
};
</script>
