<template>
  <div
    class="card"
    :class="[`${spellClass}Background`,{
      wide: $store.state.tomeOfMagic.wide,
      tall: $store.state.tomeOfMagic.tall,
    }]"
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
      spellClass: this.spell.class.split(" ")[0]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$colors: (
  Bard: #8c5385,
  Cleric: #ffad46,
  Druid: #60b85d,
  Paladin: #3bafb1,
  Ranger: #857056,
  Sorcerer: #f83a22,
  Warlock: #8c5385,
  Wizard: maroon
);

@each $class, $color in $colors {
  .#{$class}Background {
    background-color: $color;
  }

  .#{$class}Color {
    color: $color;
  }
}

.card.wide {
  width: 5in;
}
.card.tall {
  height: 7in;
}

.card {
  height: 3.5in;
  width: 2.5in;
  display: grid;
  grid-template-rows: 1fr auto;
  margin: 1px;
  padding: 10px;
  font-size: 62.5%;
}
article {
  display: grid;
  text-align: center;
  grid-template-rows: auto auto auto 1fr;
  border-radius: 5px;
  overflow: hidden;
}
header {
  padding: 5px 0;
  font-size: 14px;
  font-weight: 400;
  background: white;
  text-transform: uppercase;
}

section {
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 2px;

  & .divided {
    display: grid;
    align-content: flex-start;
    padding: 3px;
    font-size: 9px;
    background: white;
  }

  & .divided:last-child {
    margin-left: 2px;
  }

  & label {
    font-size: 10px;
    font-weight: 700;
    padding-bottom: 2px;
    text-transform: uppercase;
  }

  &:last-child {
    text-align: left;
    display: grid;
    grid-auto-flow: row;
    grid-gap: 5px;
    grid-template-rows: auto 1fr;
    grid-template-columns: initial;
    background: white;
  }

  & p {
    margin: 0;
    padding: 3px;
  }

  & .material {
    margin-bottom: 3px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-auto-flow: column;
    grid-gap: 8px;
    align-self: flex-end;
    align-items: center;
  }

  & .description {
    /deep/ br {
      line-height: 15px;
    }
  }

  & .higherLevel {
    align-self: flex-end;
  }
  & .higherLevel h1 {
    color: white;
    text-align: center;
    padding: 2px;
    font-size: 10px;
    margin: 0;
  }
}
footer {
  color: white;
  display: grid;
  margin-top: 5px;
  grid-auto-flow: column;
  justify-content: space-between;
}

/* @media print {
  header {
    font-size: 12pt;
  }
} */
</style>
