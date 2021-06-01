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

        <p class="subheading font-weight-regular">油脂、浪漫、溫馨 Na!!</p>
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
            </v-list-item-group>
          </v-list>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="5">
        <h2 class="headline font-weight-bold mb-3">經典噁圖</h2>
        <p class="subheading font-weight-regular">下列各圖極為傷眼，請小心</p>

        <v-slide initPos="bottom-to-top">
          <v-row justify="center">
            <v-lazy>
              <v-carousel height="auto">
                <v-carousel-item
                  v-for="i in photos"
                  :key="i"
                  :src="require(`../assets/${i}.jpg`)"
                ></v-carousel-item>
              </v-carousel>
            </v-lazy>
          </v-row>
        </v-slide>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">求學經歷</h2>
        <p class="subheading font-weight-regular">
          轉學又轉系，整整讀惹八年大學啊 ...
        </p>

        <v-slide initPos="bottom-to-top">
          <v-row justify="center">
            <v-timeline>
              <v-timeline-item
                v-for="(school, i) in schools"
                :key="i"
                :color="school.clr"
                :class="i & 1 ? 'text-right' : 'text-left'"
              >
                {{ school.txt }}
              </v-timeline-item>
            </v-timeline>
          </v-row>
        </v-slide>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">官司判決</h2>

        <v-row justify="center">
          <v-spacer></v-spacer>

          <v-slide initPos="left-to-right">
            <v-card elevation="24" color="success">
              <v-card-title>
                中壢簡易庭 105 年壢小字第 840 號民事判決
              </v-card-title>
              <v-card-subtitle> 民國 105 年 10 月 24 日 </v-card-subtitle>
              <v-card-text>
                清償借款 <strong><em>$21,273</em></strong>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  href="https://law.judicial.gov.tw/FJUD/data.aspx?ro=0&q=3b495c674b1180f6d6d2fc7f465b29f6&sort=DS&ot=in"
                  target="_blank"
                  color="info"
                >
                  連結
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-slide>

          <v-spacer></v-spacer>

          <v-slide initPos="right-to-left">
            <v-card elevation="24" color="warning">
              <v-card-title>
                臺灣桃園地方法院 109 年促字第 2928 號民事其他文書
              </v-card-title>
              <v-card-subtitle> 民國 109 年 12 月 22 日 </v-card-subtitle>
              <v-card-text>
                支付命令 <strong><em>$1088</em></strong>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  href="https://law.judicial.gov.tw/FJUD/data.aspx?ro=0&q=ca65f789e71832f3e38a8ff246d202de&sort=DS&ot=in"
                  target="_blank"
                  color="error"
                >
                  連結
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-slide>

          <v-spacer></v-spacer>
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
import SlideOnScroll from "../../node_modules/vue-slide-onscroll/src/components/TheSlideOnScroll";

export default {
  name: "Main",

  components: {
    "v-slide": SlideOnScroll,
  },

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
    schools: [
      { clr: "deep-purple", txt: "富台國小" },
      { clr: "indigo", txt: "龍岡國中" },
      { clr: "cyan", txt: "陽明高中（桃園）" },
      { clr: "lime", txt: "世新大學財金系" },
      { clr: "amber", txt: "中原大學特教系" },
      { clr: "deep-orange", txt: "中原大學企管系" },
    ],
  }),

  computed: {
    photos() {
      return [...Array(11).keys()].sort(() => Math.random() - 0.5);
    },
  },
};
</script>
