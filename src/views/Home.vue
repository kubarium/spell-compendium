<template>
  <div class="cards">
    <card msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "home",
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
