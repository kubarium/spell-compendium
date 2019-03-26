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
            class="indicator"
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
            class="indicator"
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
        <p class="description" v-html="spell.description"/>
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
      spellClass: this.spell.class.split(" ")[0]
    };
  },
  watch: {
    spell: function(val) {
      this.spellClass = val.class.split(" ")[0];
      this.updateCardDimensions();
    }
  },
  /* updated() {
    console.log(this.)
    console.log("updated");
  },
  */
  created() {
    this.updateCardDimensions();
  },
  methods: {
    updateCardDimensions() {
      let length = this.spell.description.length;
      if (this.spell.higherLevel) {
        length += this.spell.higherLevel.length;
      }
      if (this.spell.material) {
        length += this.spell.material.length;
      }
      console.log(length);
      if (length < 570) {
        this.wide = false;
        this.tall = false;
      } else if (length < 1000) {
        this.wide = true;
        this.tall = false;
      } else if (length < 1830) {
        this.wide = false;
        this.tall = true;
      } else {
        this.wide = true;
        this.tall = true;
      }
    }
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
