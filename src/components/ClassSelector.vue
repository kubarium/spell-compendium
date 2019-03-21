<template>
  <v-select
    :items="$store.state.tomeOfMagic.classes"
    :value="$store.state.tomeOfMagic.class"
    label="Select a Class"
    solo
    hide-details
    @input="$store.commit('changeClass', $event)"
    @change="$store.dispatch('rummageTome')"
  />
</template>
