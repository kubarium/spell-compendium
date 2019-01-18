<template>
  <span class="indicator">
    <em>{{indicator}}</em>
  </span>
</template>

<script>
export default {
  props: { type: String },
  data() {
    return {
      indicator: this.type === "concentration" ? "C" : "R"
    };
  }
};
</script>
<style lang="scss" scoped>
.indicator {
  color: white;
  width: 16px;
  height: 16px;
  margin-top: 4px;
  margin-left: 2px;
  position: absolute;
  display: grid;
  transform: rotate(-45deg);
  align-items: center;
}
em {
  font-style: normal;
  transform: rotate(45deg);
}
</style>
