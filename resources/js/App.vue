<script>

import Header from './partials/Header.vue';

export default {
    name: 'App',
    components:{
        Header
    }
}
</script>

<template>

<Header />

<main class="container py-3">

    <router-view></router-view>
</main>


</template>

<style lang="scss">

@use '../scss/appVue.scss';

</style>
