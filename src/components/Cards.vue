<template>
  <div class="cards" :class="$store.state.grimoire.orientation">
    <card
      :spell="spell"
      v-for="(spell, index) in $store.getters.grimoire"
      :key="`grimoire-${index}`"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
export default {
  name: "cards",
  props: { orientation: String },
  components: {
    Card
  }
  /* created() {
    //console.log("cards created");
    this.updateDimensions();
  },
  updated() {
    //console.log("cards updated");
    //console.log(this.$refs.cards);
    this.updateDimensions();

  },
  mounted() {
    //console.log("cards mounted");
    this.updateDimensions();
  },
  methods: {
    updateDimensions() {
      window.sik = this;
      if (this.$children.length) {
        console.log(this.$children);
        this.$children.forEach(child => child.updateDimensions());
      }
    }
  } */
};
</script>

<style lang="scss">
@import "@/styles/cards.scss";
</style>