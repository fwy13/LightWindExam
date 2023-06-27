<template>
  <div id="app">
    <img src="../assets/logo.png" style="width: 150px;"/>
    <RouterLink to="/play">
      <ButtonComponent :name_btn = "'Play'"></ButtonComponent>
    </RouterLink>
    <RouterLink to="/setting">
      <ButtonComponent :name_btn = "'Setting'"></ButtonComponent>
    </RouterLink>
    <RouterLink to="/play">
      <ButtonComponent :name_btn = "'About'"></ButtonComponent>
    </RouterLink>
  </div>
</template>

<script>
import ButtonComponent from '../components/ButtonComponent.vue'
export default {
    name: 'VHome',
    components: {
        ButtonComponent
    },
    data() {
        return {
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body {
    display: flex;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    background-color: #0284c7;
    color: white;
}
a {
  text-align: center;
}
</style>