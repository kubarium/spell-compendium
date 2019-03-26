<template>
  <v-container grid-list-md fluid>
    <v-layout row wrap>
      <v-flex sm4 md4 lg3>
        <h1 class="title mb-3">Spell List</h1>
        <v-btn icon @click="print">
          <v-icon>print</v-icon>
        </v-btn>
        <v-sheet class="pa-2">
          <span v-if="$store.getters.grimoire.length == 0">No spell in your grimoire</span>
          <spell-list :spells="$store.getters.grimoire" mode="grimoire" v-else/>
        </v-sheet>
        <v-divider/>
        <v-sheet>
          <v-switch
            false-value="portrait"
            true-value="landscape"
            @change="$store.commit('toggleOrientation')"
            :label="$store.state.grimoire.orientation"
          ></v-switch>
        </v-sheet>
      </v-flex>
      <v-flex sm8>
        <h1 class="title mb-3">Spells To Print</h1>
        <v-sheet class="px-2">
          <cards/>
        </v-sheet>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SpellList from "./SpellList.vue";
import Cards from "./Cards.vue";
export default {
  name: "grimoire",
  components: { Cards, SpellList },
  methods: {
    print() {
      var iframe = document.createElement("iframe");
      ["width", "height", "right", "bottom", "border"].forEach(
        prop => (iframe.style[prop] = 0)
      );
      iframe.style.position = "fixed";
      iframe.onload = () => {
        //clean up after
        iframe.contentWindow.onafterprint = iframe.contentWindow.onbeforeunload = () =>
          document.body.removeChild(iframe);

        iframe.contentWindow.print();
      };

      //ready, go!
      window.cards = document.querySelector(".cards");
      iframe.srcdoc = `
        <html>
          <head>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
            <link href="//fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons" rel="stylesheet"/>
            <link href="${
              process.env.BASE_URL
            }colors.css?v=${Math.random()}" rel="stylesheet"/>
             <link href="${
               process.env.BASE_URL
             }indicator.css?v=${Math.random()}" rel="stylesheet"/>
            <link href="${
              process.env.BASE_URL
            }card.css?v=${Math.random()}" rel="stylesheet"/>
            <style>
              .cards {
                display: grid;
                outline: 1px solid #333;
              }
              .portrait {
                grid-template-columns: repeat(3, 1fr);
                width: 8.5in;
                height: 11in;
                padding: 0.25in 0.5in;
              }
              .landscape {
                width: 11in;
                height: 8.5in;
                grid-template-columns: repeat(4, 1fr);
                padding: 0.75in 0.5in;
              }
              
            </style>
          </head>
          <body class="cards ${this.$store.state.grimoire.orientation}">
            ${document.querySelector(".cards").innerHTML}
          </body>
        </html>
      `;

      document.body.appendChild(iframe);
    }
  }
};
</script>

<style>
</style>
