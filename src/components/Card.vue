<template>
  <div
    class="card"
    :class="`${spellClass}Background`"
  >
    <article>
      <header>{{data.Name}}</header>
      <section>
        <div class="time">
          <indicator
            class="indicator"
            :class="`${spellClass}Background`"
            v-show="data.Ritual"
            type="ritual"
            :absolute="true"
          />
          <label :class="`${spellClass}Color`">Casting Time</label><span>{{data.Time}}</span>
        </div>
        <div><label :class="`${spellClass}Color`">Range</label><span>{{data.Range}}</span></div>
      </section>
      <section>
        <div><label :class="`${spellClass}Color`">Components</label><span>{{data.Components}}</span></div>
        <div class="duration">
          <indicator
            class="indicator"
            :class="`${spellClass}Background`"
            v-show="data.Concentration"
            type="concentration"
            :absolute="true"
          />
          <label :class="`${spellClass}Color`">Duration</label><span>{{data.Duration}}</span>
        </div>
      </section>
      <section class="description">
        <p
          class="material"
          v-show="data.Material"
        >
          <indicator
            class="indicator"
            :class="`${spellClass}Background`"
            type="material"
            :absolute="false"
          />
          <span>
            {{data.Material}}
          </span>
        </p>
        <p v-html="data.Description">
        </p>
      </section>
    </article>
    <footer>
      <b class="class srclass">{{data.Class}}</b>
      <b class="type srtype">{{data.School}}</b>
    </footer>
  </div>
</template>

<script>
import Indicator from "./Indicator.vue";
export default {
  name: "Card",
  props: {
    data: Object
  },
  components: { Indicator },
  data() {
    return {
      spellClass: this.data.Class.split(" ")[0]
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

.card {
  min-height: 3.5in;
  min-width: 2.5in;
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
}
section {
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 2px;

  & div {
    display: grid;
    align-content: flex-start;
    padding: 3px;
    font-size: 9px;
    background: white;
  }

  & div:last-child {
    margin-left: 2px;
  }

  & label {
    font-size: 10px;
    font-weight: 700;
    padding-bottom: 2px;
    text-transform: uppercase;
    grid-area: "label";
  }

  &:last-child {
    text-align: left;
    display: grid;
    grid-auto-flow: row;
    grid-gap: 5px;
    grid-template-rows: auto 1fr;
    grid-template-columns: initial;
    padding: 3px;
    background: white;
  }

  & p {
    margin: 0;
  }
}
.material {
  grid-template-columns: 1fr 100%;
  grid-auto-flow: column;
  grid-gap: 8px;
  display: grid;
  align-items: center;
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
