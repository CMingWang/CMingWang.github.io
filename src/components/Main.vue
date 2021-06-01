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
              <v-list-item v-for="(itm, i) in info" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="itm.ico"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-html="itm.txt"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group> </v-list
        ></v-row>
      </v-col>

      <v-col class="mb-5" cols="5">
        <h2 class="headline font-weight-bold mb-3">經典噁圖</h2>
        <p class="subheading font-weight-regular">下列各圖極為傷眼，請小心</p>

        <v-row justify="center">
          <v-carousel height="auto">
            <v-carousel-item
              v-for="i in 10"
              :key="i"
              :src="require(`../assets/${i}.jpg`)"
            ></v-carousel-item>
          </v-carousel>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">求學經歷</h2>
        <p class="subheading font-weight-regular">整整讀惹八年大學啊 ...</p>

        <v-row justify="center">
          <v-timeline>
            <v-timeline-item color="deep-purple" class="text-left">
              富台國小
            </v-timeline-item>
            <v-timeline-item color="indigo" class="text-right">
              龍岡國中
            </v-timeline-item>
            <v-timeline-item color="cyan" class="text-left">
              陽明高中（桃園）
            </v-timeline-item>
            <v-timeline-item color="lime" class="text-right">
              世新大學財金系 <br />
              （指考）
            </v-timeline-item>
            <v-timeline-item color="amber" class="text-left">
              中原大學特教系 <br />
              （轉學）
            </v-timeline-item>
            <v-timeline-item color="deep-orange" class="text-right">
              中原大學企管系 <br />
              （轉系）
            </v-timeline-item>
          </v-timeline>
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
    info: [
      { ico: "mdi-calendar", txt: "01/08, 1986" },
      {
        ico: "mdi-cellphone",
        txt: '<a href="tel:0980497079">0980 497 079</a>',
      },
      {
        ico: "mdi-home",
        txt:
          '<a href="https://goo.gl/maps/HXrXA5pT6UPCbkBx9">320 桃園市中壢區龍川二街 134 號</a> ',
      },
      { ico: "mdi-needle", txt: "B 型" },
      { ico: "mdi-ruler", txt: "168cm" },
      { ico: "mdi-weight", txt: "100 ~ 110kg" },
    ],
  }),
};
</script>
