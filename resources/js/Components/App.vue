<template>
    <div class="container">
        <NavBar></NavBar>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {
        NavBar: () => import ('./NavBar.vue')
    }
}
</script>