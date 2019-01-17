<template>
  <div class="cards">
    <card
      :data="spell"
      v-for="(spell,index) in bard"
      :key="index"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import bard from "@/data/bard.json";
export default {
  name: "home",
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
  width: 11in;
  height: 8.5in;
  grid-template-columns: repeat(4, 1fr);
}
</style>
