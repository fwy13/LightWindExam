<template>
  <div class="container">
        <div class="header">
            <router-link to='/'>
                <button class="Return">Return</button>
            </router-link>
            
            <a>List Server</a>
        </div>  
        <div class="lists">
        <div v-for="(rooms, index) in Room" :key="index">
            <CardRooms :src_img="rooms.src" :name_exam="rooms.name" :limit="rooms.limit" :status="rooms.status" :statuss="rooms.statuss" :pass="rooms.pass"/>
        </div>
        </div>
    </div>
</template>
<script>
import CardRooms from './CardRooms.vue'
export default {
    data() {
        return {
            Room: {
                1: {
                    src: "https://i.ytimg.com/vi/ftkSZKaHilM/maxresdefault.jpg",
                    name: "IuNhu Room",
                    limit: "13/24",
                    status: "00:00:00",
                    statuss: "No",
                    pass: true
                },
                2: {
                    src: "https://i.ytimg.com/vi/ftkSZKaHilM/maxresdefault.jpg",
                    name: "IuNhu Room",
                    limit: "13/24",
                    status: "00:00:00",
                    statuss: "No",
                    pass: false
                },
                3: {
                    src: "https://i.ytimg.com/vi/ftkSZKaHilM/maxresdefault.jpg",
                    name: "IuNhu Room",
                    limit: "13/24",
                    status: "00:00:00",
                    statuss: "No",
                    pass: false
                },
                4: {
                    src: "https://i.ytimg.com/vi/ftkSZKaHilM/maxresdefault.jpg",
                    name: "IuNhu Room",
                    limit: "13/24",
                    status: "00:00:00",
                    statuss: "No",
                    pass: false
                },
                5: {
                    src: "https://i.ytimg.com/vi/ftkSZKaHilM/maxresdefault.jpg",
                    name: "IuNhu Room",
                    limit: "13/24",
                    status: "00:00:00",
                    statuss: "No",
                    pass: true
                }
            }
        }
    },
    props: ['rooms'],
    components: {
        CardRooms
    }
}
</script>

<style>
.container {
    width: 560px;
    height: 440px;
    background-color: #343541;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
}
.header {
    background-color: #20202b;
    display: flex;
    color: white;
    justify-content: space-between;
    border-radius: 8px;
    padding: 20px;
}
.header a {
    font-size: 25px;
    color: white;
}
.Return {
    position: relative;
    width: 85px;
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
    box-shadow: #D70000 0px 3px 2px,#000 0px 3px 5px;
}
.lists {
    overflow-y: scroll;
}
.lists::-webkit-scrollbar {
    background-color: #202324;
    color: #aba499;
    width: 10px;
}
.lists::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
}
.lists::-webkit-scrollbar-thumb:active {
    background-color: #484e51;
}
.lists::-webkit-scrollbar-thumb:hover {
    background-color: #575e62;
}

.lists::-webkit-scrollbar-thumb {
    background-color: #454a4d;
}
</style>