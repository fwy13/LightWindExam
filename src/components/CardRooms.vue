<template>
    <div class="room">
        <img :src="src_img" class="img_server">
        <span class="name_exam">{{ name_exam }}</span>
        <button class="join" :id="id_room">Join</button>
        <span :class="statuss" class="status">{{ status }}</span>
        <span class="limit">Limit: {{ limit}}</span>
        <i :class="{'fa-solid fa-lock-open': !pass}"></i>
        <i :class="{'fa-solid fa-lock': pass}"></i>
    </div>
</template>
<script>
export default {
    data() {
    },
    props: [
        'src_img',
        'name_exam',
        'limit',
        'status',
        'pass',
        'statuss'
    ]
}
</script>

<style >
.img_server {
    width: 150px;
    grid-area: img;
}
.name_exam {
    color: white;
    font-size: 20px;
    font-weight: 900;
    grid-area: name;
    text-align: center;
}
.fa-solid {
    grid-area: lock;
    color: white;
/*    margin: auto;*/
    margin-top: 30px;
}
.join {
    padding: 10px;
    grid-area: join;
    margin-top: 10px;
}
.status {
    font-weight: 900;
    grid-area: status;
    text-align: center;
    font-size: 20px;
}
.limit {
    font-size: 20px;
    color: white;
    grid-area: id;
    margin-top: 30px;

}
.No {
    color: #FF0000;
}
.Yes {
    color: #19CE26;
}
.room {
    display: grid;
    grid-template-areas: 
    'img name name status status status'
    'img id id lock lock join'
    ;
    gap: 5px;
    border-bottom: 2px solid rgb(41, 43, 47);
    border-top: 2px solid rgb(41, 43, 47);
    border-right: 2px solid rgb(41, 43, 47);
    padding: 10px;
    justify-items: end;
}
.join {
    position: relative;
    width: 60px;
    height: 40px;
    border: none;
    background: #24DBEC;
    color: #fff;
    padding: 1em;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.2s;
    border-radius: 5px;
    opacity: 0.8;
    letter-spacing: 1px;
    box-shadow: #08BED2 0px 7px 2px, #000 0px 8px 5px;
}
  
.join:hover {
    opacity: 0.9;
}
  
.join:active {
    top: 4px;
    box-shadow: #08BED2 0px 3px 2px,#000 0px 3px 5px;
}
</style>