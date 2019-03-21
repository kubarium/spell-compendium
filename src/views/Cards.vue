<template>
  <div class="cards" :class="orientation">
    <card :data="spell" v-for="(spell, index) in bard" :key="index" />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import bard from "@/data/bard.json";
export default {
  name: "home",
  props: { orientation: String },
  data() {
    return {
      bard
    };
  },
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
}
.landscape {
  width: 11in;
  height: 8.5in;
  grid-template-columns: repeat(4, 1fr);
}
</style>
