<template>
<div class="bg-image vh-100" :style="{backgroundImage: `url(${state.image})`}">
  <main class="container">
<div class="row">
  <div class="col-12">
    <h1>Choose day to retrieve pic for that day</h1>
    <form @submit.prevent="get">
            <!-- NOTE We bind to the state with v-model from our input -->
            <input class="mx-1" type="date" placeholder="YYYY-MM-DD" v-model="state.query">
            <button type="submit">Get Image</button>
    </form>
<!-- <img class="my-3" :src="`${state.image}`"> -->
  </div>
</div>
  </main>
</div>
</template>

<script>

import { computed, reactive } from 'vue'
import { imageService } from './Services/ImageService'
import { AppState } from './AppState'

export default {
  name: 'App',
  setup() {
    const state = reactive({
      query: '',
      image: computed(() => AppState.image)
    })
    return {
      state,
      async get() {
        try {
          await imageService.getImage(state.query)
        } catch (error) {
          console.error(error)
        }
      }
    }
  }

}
</script>

<style>

img{
  width: 100%;
}
.bg-image{
  background-repeat: no-repeat;
  background-size: cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
