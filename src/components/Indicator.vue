<template>
  <span
    class="indicator"
    :class="{absolute}"
  >
    <em>{{indicator}}</em>
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
.indicator {
  color: white;
  width: 16px;
  height: 16px;
  margin-top: 4px;
  margin-left: 2px;
  display: grid;
  transform: rotate(-45deg);
  align-items: center;
  text-align: center;
}
.absolute {
  position: absolute;
}
em {
  font-style: normal;
  transform: rotate(45deg);
}
</style>
