<template>
  <div
    class="card"
    :class="[
      `${spellClass}Background`,
      {
        wide,
        tall
      }
    ]"
  >
    <article ref="article">
      <header>{{ spell.name }}</header>
      <section>
        <div class="divided">
          <indicator
            class="indicator ritual"
            :class="`${spellClass}Background`"
            v-show="spell.ritual"
            type="ritual"
            :absolute="true"
          />
          <label :class="`${spellClass}Color`">Casting Time</label>
          <span>{{ spell.time }}</span>
        </div>
        <div class="divided">
          <label :class="`${spellClass}Color`">Range</label>
          <span>{{ spell.range }}</span>
        </div>
      </section>
      <section>
        <div class="divided">
          <label :class="`${spellClass}Color`">Components</label>
          <span>{{ spell.components }}</span>
        </div>
        <div class="divided">
          <indicator
            class="indicator concentration"
            :class="`${spellClass}Background`"
            v-show="spell.concentration"
            type="concentration"
            :absolute="true"
          />
          <label :class="`${spellClass}Color`">Duration</label>
          <span>{{ spell.duration }}</span>
        </div>
      </section>
      <section>
        <p
          class="description"
          v-html="
            spell.description.replace(/<br>/g, `<span class='break'></span>`)
          "
        />
        <p class="material" v-show="spell.material">
          <indicator
            class="indicator"
            :class="`${spellClass}Background`"
            type="material"
            :absolute="false"
          />
          <span>{{ spell.material }}</span>
        </p>
        <div class="higherLevel" v-show="spell.higherLevel">
          <h1 :class="`${spellClass}Background`">At Higher Levels</h1>
          <p v-html="spell.higherLevel"></p>
        </div>
      </section>
    </article>
    <footer>
      <b class="class srclass">{{ spell.class }}</b>
      <b class="type srtype">{{ spell.school }}</b>
    </footer>
  </div>
</template>

<script>
import Indicator from "./Indicator.vue";
export default {
  name: "Card",
  props: {
    spell: Object
  },
  components: { Indicator },
  data() {
    return {
      wide: false,
      tall: false,
      dimensionsUpdated: false,
      firstPass: false,
      secondPass: false,
      spellClass: this.spell.class.split(" ")[0]
    };
  },
  watch: {
    spell: function(val) {
      this.spellClass = val.class.split(" ")[0];
      //this.updateCardDimensions();
    }
  },
  updated() {
    const article = this.$el.querySelector("article");
    console.log(article);
    article.style.overflow = "hidden";
    //console.log(getComputedStyle(article).overflow);
    console.log(
      article.offsetHeight,
      article.scrollHeight,
      article.clientHeight
    );
    if (this.dimensionsUpdated) return;

    /* if (article.scrollHeight <= article.clientHeight) {
      this.wide = false;
      this.tall = false;
      return;
    } */
    /* if (article.scrollHeight > article.clientHeight * 3) {
      this.wide = true;
      this.tall = true;
      this.dimensionsUpdated = true;
      return;
    }
    if (article.scrollHeight > article.clientHeight * 2) {
      this.wide = false;
      this.tall = true;
      this.dimensionsUpdated = true;
      return;
    } */
    if (article.scrollHeight > article.clientHeight) {
      /* if(this.secondPass){

      } */
      if (this.firstPass) {
        if (this.secondPass) {
          this.tall = true;
          this.wide = true;
          return;
        } else {
          this.tall = true;
          this.wide = false;
          this.secondPass = true;
        }
      } else {
        this.wide = true;
        this.firstPass = true;
      }
      /* this.tall = false;
      this.dimensionsUpdated = true; */
      return;
    }
  },

  created() {
    //this.updateCardDimensions();
  },
  methods: {
    updateCardDimensions() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
@import "@/styles/colors.scss";

@import "@/styles/card.scss";

/* @media print {
  header {
    font-size: 12pt;
  }
} */
</style>
