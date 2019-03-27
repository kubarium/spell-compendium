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
            class="ritual"
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
            class="concentration"
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
        <p class="material" v-show="spell.material">
          <indicator
            :class="`${spellClass}Background`"
            type="material"
            :absolute="false"
          />
          <span>{{ spell.material }}</span>
        </p>
        <p
          class="description"
          v-html="
            spell.description.replace(/<br>/g, `<span class='break'></span>`)
          "
        />
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
      firstPass: false,
      secondPass: false,
      spellClass: this.spell.class.split(" ")[0]
    };
  },
  watch: {
    spell: function(val) {
      this.spellClass = val.class.split(" ")[0];
      this.resetDimensions();
    }
  },
  created() {
    this.$forceUpdate();
  },
  updated() {
    this.updateDimensions();
  },
  mounted() {
    this.updateDimensions();
  },
  methods: {
    resetDimensions() {
      this.firstPass = false;
      this.secondPass = false;
      this.tall = false;
      this.wide = false;
    },
    updateDimensions() {
      const article = this.$el.querySelector("article");
      //console.log(article.scrollHeight, article.clientHeight);
      //article.style.overflow = "hidden";
      if (article.scrollHeight > article.clientHeight) {
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
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
@import "@/styles/colors.scss";

@import "@/styles/card.scss";
</style>
