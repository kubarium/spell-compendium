<template>
  <v-btn-toggle
    class="btn-group"
    mandatory
    v-model="$store.state.tomeOfMagic.level"
  >
    <v-btn
      flat
      :value="index"
      v-for="(level, index) in 10"
      :key="level"
      @click="$store.commit('changeLevel', index)"
    >
      {{ index }}
    </v-btn>
  </v-btn-toggle>
</template>

<style lang="scss" scoped>
.btn-group {
  width: 100%;

  & .v-btn {
    width: 10%;
  }
}
</style>
