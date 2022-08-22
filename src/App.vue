<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
// import WordList from './WordList.vue';

const aboutParams = {code: 'a', id:1}

// import { reactive, ref } from 'vue';
// const msg = ref('選択してください')
// const figures = ref([
//   {id: 1, name: 'one'},
//   {id: 2, name: 'two'},
//   {id: 3, name: 'three'},
// ]);
// const selectWord = (id,name) => {
//   msg.value = 'click'+ id+','+name
//   alert('click'+ id+','+name)
// }
// const show = ref(true)

</script>

<template>
  <router-link to="/">Home</router-link> | 
  <router-link :to="{name: 'About',params: {code: 'a', id: 1}}">About</router-link> | 
  <router-link :to="{name: 'About',params: aboutParams}">About</router-link>
  <router-view></router-view>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <HelloWorld msg="Vite + Vue" />
  <!-- <input type="checkbox" v-model="show">
  <transition>
    <p v-show="show">テスト</p>
  </transition>
  <h1>{{msg}}</h1>
  <WordList :words=figures @select-word="selectWord"></WordList> -->
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
.router-link-active{
  background-color: rgb(200,220,255);
}
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

.v-leave-active, .v-enter-active{
  transition: opacity .0s;
}
.v-enter-from, v-leave-to{
  opacity:0;
}
</style>
