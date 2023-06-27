<template>
    <div class="btn">
        <button>{{ name_btn }}</button>
    </div>
</template>

<script>
export default {
    props: ['name_btn']
}
</script>

<style>

.btn button {
    color: white;
    margin-top: 20px;
    position: relative;
    width: 100px;
    height: 40px;
    border: none;
    background-color: #20C75E;
    font-weight: bold;
    padding: 1em;
    text-transform: uppercase;
    transition: 0.2s;
    border-radius: 5px;
    opacity: 0.8;
    letter-spacing: 1px;
    box-shadow: #14A54A 0px 7px 2px, #000 0px 8px 5px;
    align-items: center;
}
  
.btn button:hover {
    opacity: 1;
}
  
.btn button:active {
    top: 4px;
}

</style>
