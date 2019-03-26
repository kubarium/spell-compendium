<template>
  <div class="cards" :class="$store.state.grimoire.orientation">
    <card :spell="spell" v-for="(spell, index) in $store.state.grimoire.spells" :key="index"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
export default {
  name: "home",
  props: { orientation: String },
  components: {
    Card
  }
};
</script>

<style lang="scss" scoped>
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