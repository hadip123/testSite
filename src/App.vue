<template>
  <v-app>
    <v-main>
      <!-- <router-view/> -->
      <div class="fisaghores">
      <v-text-field v-model="a" class="f-input" label="A"  solo-inverted rounded></v-text-field>
      <v-checkbox v-model="rA" label="رادیکالی؟"></v-checkbox>
      <v-text-field v-model="b" class="f-input" label="B" solo-inverted rounded></v-text-field>
      <v-checkbox v-model="rB " label="رادیکالی؟"></v-checkbox>
      <v-text-field v-model="c" class="f-input" label="C" solo-inverted rounded></v-text-field>
      <v-checkbox v-model="rC" label="رادیکالی؟"></v-checkbox>

      </div>
      <v-btn @click="btnA">get A</v-btn>
      <v-btn @click="btnA">get b</v-btn>
      <v-btn @click="btnA">get c</v-btn>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Fisaghores from './fiashghores';

export default Vue.extend({
  name: 'App',

  data: () => ({
    rA: false,
    rB: false,
    rC: false,
    a: '',
    b: '',
    c: '',
    //
  }),
  methods: {
    loadfda() {
      
    },
    btnA() {
      const f = new Fisaghores(parseInt(this.a), parseInt(this.b), parseInt(this.c));
      console.log(f.getA());
      
    },
    btnB() {},
    btnC() {},
  }
});
</script>
<style scoped>
.fisaghores {
  margin: 30px;

  display: flex;
}
.f-input {
  margin: 10px;
}
</style>