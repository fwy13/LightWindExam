<template>
  <div class="app">
    <h1>Light Wind</h1>
    <ListsServer />
  </div>
</template>

<script>
import ListsServer from '@/components/ListsServer.vue'

export default {
  components: {
    ListsServer
  }
}
</script>

<style>
.app h1{
  text-align: center;
}
</style>