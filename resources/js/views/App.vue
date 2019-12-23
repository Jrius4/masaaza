<template>
    <div style="margin:0">
        <h1>Vue Router Demo App</h1>
        <p>
            <router-link :to="{name:'home'}">Home</router-link>
            <router-link :to="{name:'articles.index'}">Articles</router-link>
            <router-link :to="{name:'players'}">Players</router-link>
            <router-link :to="{name:'create-player'}">Create Player</router-link>
            <!-- <router-link :to="{name:'manage-players'}">Manager Players</router-link> -->
            <router-link :to="{name:'hello'}">Hello World</router-link>
        </p>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>

</template>
<script>
export default {

}
</script>
