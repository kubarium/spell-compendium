<template>
  <div
    class="card"
    :class="`${spellClass}Background`"
  >
    <article>
      <header>{{data.Name}}</header>
      <section>
        <div><label :class="`${spellClass}Color`">Casting Time</label><span>{{data.Time}}</span></div>
        <div><label :class="`${spellClass}Color`">Range</label><span>{{data.Range}}</span></div>
      </section>
      <section>
        <div><label :class="`${spellClass}Color`">Components</label><span>{{data.Components}}</span></div>
        <div><label :class="`${spellClass}Color`">Duration</label><span>{{data.Duration}}</span></div>
      </section>
      <section
        class="description"
        v-html="data.Description"
      >
      </section>
    </article>
    <footer>
      <b class="class srclass">{{data.Class}}</b>
      <b class="type srtype">{{data.School}}</b>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    data: Object
  },
  data() {
    return {
      spellClass: this.data.Class.split(" ")[0]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* $Bard: #8c5385;
$Cleric: #ffad46;
$Druid: #60b85d;
$Paladin: #3bafb1;
$Ranger: #857056;
$Sorcerer: #f83a22;
$Warlock: #8c5385;
$Wizard: maroon; */
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
  /* border-top: 2px solid $Druid; */
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

    /* border-left: 2px solid $Druid; */
  }

  & label {
    /* color: $Druid; */
    font-size: 10px;
    font-weight: 700;
    padding-bottom: 2px;
    text-transform: uppercase;
  }

  &:last-child {
    text-align: left;
    display: initial;
    padding: 3px;
    background: white;
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
