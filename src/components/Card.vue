<template>
  <div class="card druid">
    <article>
      <header>CONTROL FLAMES</header>
      <section>
        <div><label>Casting Time</label><span>1 action</span></div>
        <div><label>Range</label><span>60 feet</span></div>
      </section>
      <section>
        <div><label>Components</label><span>S</span></div>
        <div><label>Duration</label><span>Instantaneous or 1 hour (see below)</span></div>
      </section>
      <section class="description">
        You choose nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways:<br> • You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location.<br> • You instantaneously extinguish the flames within the cube.<br> • You double or halve the area of bright light and dim light cast by the flame, change its color or both . The change lasts for 1 hour.<br> • You cause simple shapes-such as the vague form of a creature, an inanimate object, or a location- to appear within the flames and animate as you like. The shapes last for 1 hour.<br> If you cast this spell multiple times, you can have up to three non-instantaneous effects created by it active at a time, and you can dismiss such an effect as an action.
      </section>
    </article>
    <footer>
      <b class="class srclass">Druid (XGE)</b>
      <b class="type srtype">Transmutation cantrip</b>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$druid: #60b85d;

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
  background: white;
  display: grid;
  text-align: center;
  grid-template-rows: auto auto auto 1fr;
  border-radius: 5px;
}
header {
  padding: 5px 0;
  font-size: 11pt;
}
section {
  display: grid;
  border-top: 2px solid $druid;
  grid-template-columns: 1fr 1fr;

  & div {
    display: grid;
    padding: 3px;
    font-size: 0.9rem;
  }

  & div:last-child {
    border-left: 2px solid $druid;
  }

  & label {
    color: $druid;
    text-transform: uppercase;
  }

  &:last-child {
    text-align: left;
    display: initial;
    padding: 3px;
  }
}

footer {
  color: white;
  display: grid;
  margin-top: 5px;
  grid-auto-flow: column;
  justify-content: space-between;
}
.druid {
  background-color: $druid;
}
</style>
