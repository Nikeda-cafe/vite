<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import WordList from './WordList.vue';



import { reactive, ref } from 'vue';
const figures = ref([
  {id: 1, name: 'one'},
  {id: 2, name: 'two'},
  {id: 3, name: 'three'},
])

</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <HelloWorld msg="Vite + Vue" />
  <WordList :words=figures></WordList>
  <!-- <h1>{{state.name}} : {{state.score}}</h1>
  <input type="text" v-model="state.name">
  <button @click="scoreUp">カウントアップ</button>
  <ul>
  <li v-for="v in state.histories">
   {{v.userName}} : {{v.newDate}} : {{v.newScore}}
  </li>
  </ul> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
