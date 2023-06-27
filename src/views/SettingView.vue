<template>
  <div class="container">
        <router-link to="/">
            <button class="Return">Return</button>
        </router-link>
        <div class="setting">
            <div class="control">
                <button class="general btn">General</button>
                <button class="graphics btn">Graphics</button>
                <button class="audio btn">Audio</button>
                <button class="other btn">Other</button>
            </div>
            <div class="task">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VSetting'

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
:root {
    --bg: #15E600;
    --text-color: #fff;
    --shadow: #0CB800;
}
body {
    display: flex;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
}
.container {
    width: 560px;
    height: 440px;
}
.control {
    display: flex;
    justify-content: space-between;
}
.Return {
    margin-left: 42%;
}
.task {
    margin-top: 20px;
    width: 560px;
    height: 440px;
    background-color: #343541;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
}
.Return {
    margin-top: 20px;
    position: relative;
    width: 100px;
    height: 40px;
    border: none;
    background: #FF0000;
    color: var(--text-color);
    font-weight: bold;
    padding: 1em;
    text-transform: uppercase;
    transition: 0.2s;
    border-radius: 5px;
    opacity: 0.8;
    letter-spacing: 1px;
    box-shadow: #D70000 0px 7px 2px, #000 0px 8px 5px;
}
  
.Return:hover {
    opacity: 1;
}
  
.Return:active {
    top: 4px;
}

</style>