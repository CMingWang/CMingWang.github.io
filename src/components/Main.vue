<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <v-col cols="12">
        <v-avatar size="200">
          <v-img :src="require('../assets/logo.jpg')" class="my-3" contain />
        </v-avatar>
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          散戶中的霸主 - 王希銘 - 成功致富又快樂
        </h1>

        <v-chip class="ma-2" color="indigo">油脂</v-chip>
        <v-chip class="ma-2" color="cyan">浪漫</v-chip>
        <v-chip class="ma-2" color="warning">溫馨</v-chip>

        <p class="subheading font-weight-regular">
          王希銘，台灣桃園中壢人，自稱為唐唐症症的中囯人，是台灣網路知名人物，發跡於哈哈母特。祖父王漢樁國軍上校退役，其父王建勛即
          Kevin。曾養一隻狗，名為小翠兒，待遇非常惡劣，走得十分痛苦。經常在網路上消費前女友
          Nana,
          隨機騷擾陌生女網友的紀錄罄竹難書。
          為了滿足他暴食的慾望，屢次以各種理由借錢、騙錢。
          曾經在家樂福蔬果課、威尼斯影城及若干證券行服務，但都因故被解雇。
          住所因大門口長著一棵大樹而被戲稱為樹屋，原本是奶奶的，後來被叔叔買下但霸主仍然繼續住，還騙叔叔說剛結束三年感情會努力工作買回來。
          因為沒繳水費所以被停水，要洗澡就去健身房，廁所只能去外面，如果不想出門時大便就會拉在塑膠袋等垃圾車來丟，小便則直接灌溉樹叢。
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-parallax :src="require('../assets/parallax.jpg')">
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h2 class="headline font-weight-bold mb-3">基本資料</h2>

              <v-row justify="center">
                <v-list color="transparent">
                  <v-list-item-group color="primary lighten-3">
                    <v-list-item v-for="(itm, i) in info" :key="i">
                      <v-list-item-icon>
                        <v-icon v-text="'mdi-' + itm.ico"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title v-html="itm.txt"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-row>
            </v-col>
          </v-row>
        </v-parallax>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">經典噁圖</h2>
        <p class="subheading font-weight-regular">下列各圖極為傷眼，請小心</p>

        <v-slide initPos="bottom-to-top">
          <v-row justify="center">
            <v-col md="5">
              <v-carousel height="auto">
                <v-carousel-item
                  v-for="i in photos"
                  :key="i"
                  :src="require(`../assets/${i}.jpg`)"
                ></v-carousel-item>
              </v-carousel>
            </v-col>
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
          <v-col v-for="(j, i) in justices" :key="i">
            <v-slide :initPos="i & 1 ? 'right-to-left' : 'left-to-right'">
              <v-card elevation="24" :color="j.clr">
                <v-card-title v-text="j.title"></v-card-title>
                <v-card-subtitle v-text="j.subtitle"></v-card-subtitle>
                <v-card-text v-html="j.txt"></v-card-text>
                <v-card-actions class="justify-center">
                  <v-btn :href="j.link" target="_blank" :color="j.clr_btn">
                    連結
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-slide>
          </v-col>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">必看影片</h2>

        <v-row justify="center">
          <v-col v-for="y in youtubes" :key="y.id">
            <v-slide initPos="bottom-to-top">
              <v-card elevation="24" :color="y.clr">
                <v-card-title v-text="y.title"></v-card-title>
                <iframe
                  :src="'https://www.youtube.com/embed/' + y.id"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </v-card>
            </v-slide>
          </v-col>
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
      { ico: "calendar", txt: "01/08, 1986" },
      {
        ico: "cellphone",
        txt:
          '<a href="tel:0980497079" class="teal--text text--accent-2">0980 497 079</a>',
      },
      {
        ico: "home",
        txt:
          '<a href="https://goo.gl/maps/HXrXA5pT6UPCbkBx9" class="teal--text text--accent-2">320 桃園市中壢區龍川二街 134 號</a> ',
      },
      { ico: "needle", txt: "B 型" },
      { ico: "motorbike", txt: "MKP - 0988" },
      { ico: "id-card", txt: "H123345500" },
      { ico: "bank", txt: "808 1333979126112" },
    ],
    schools: [
      { clr: "deep-purple", txt: "富台國小" },
      { clr: "indigo", txt: "龍岡國中" },
      { clr: "cyan", txt: "陽明高中（桃園）" },
      { clr: "lime", txt: "世新大學財金系" },
      { clr: "amber", txt: "中原大學特教系" },
      { clr: "deep-orange", txt: "中原大學企管系" },
    ],
    justices: [
      {
        title: "中壢簡易庭 105 年壢小字第 840 號民事判決",
        subtitle: "民國 105 年 10 月 24 日",
        clr: "success",
        clr_btn: "info",
        txt: "清償借款 <strong><em>$21,273</em></strong>",
        link:
          "https://law.judicial.gov.tw/FJUD/data.aspx?ro=0&q=3b495c674b1180f6d6d2fc7f465b29f6&sort=DS&ot=in",
      },
      {
        title: "臺灣桃園地方法院 109 年促字第 2928 號民事其他文書",
        subtitle: "民國 109 年 12 月 22 日",
        txt: "支付命令 <strong><em>$1088</em></strong>",
        clr: "warning",
        clr_btn: "error",
        link:
          "https://law.judicial.gov.tw/FJUD/data.aspx?ro=0&q=ca65f789e71832f3e38a8ff246d202de&sort=DS&ot=in",
      },
    ],
    youtubes: [
      { title: "霸主汁妹下場被堵", id: "K5D7RV3gId4", clr: "deep-purple" },
      { title: "霸主樹屋廢墟開箱", id: "Uucqx-bV5TI", clr: "info" },
      { title: "粉絲詢問如廁秘辛", id: "KWdC_YJ3uGQ", clr: "success" },
      { title: "想知道內衣哪來的嗎？", id: "5pumusj1wNU", clr: "lime" },
      { title: "唐寶耍狠", id: "_Yn2EbdH0bg", clr: "error" },
      { title: "霸主女裝性感舞", id: "RCVndNIdrB0", clr: "amber" },
    ],
  }),

  computed: {
    photos() {
      return [...Array(13).keys()].sort(() => Math.random() - 0.5);
    },
  },
};
</script>

<style scoped>
.v-card__title {
  justify-content: center !important;
}
</style>
