<template>
  <span class="indicator" :class="{ absolute }">
    <em>{{ indicator }}</em>
  </span>
</template>

<script>
export default {
  props: { type: String, absolute: Boolean },
  data() {
    return {
      indicator: this.type[0].toUpperCase()
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/indicator.scss";
</style>
