<script>

import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'Blog',
    components:{
        ProjectCard
    },
    data(){
        return{
            baseUrl: 'http://127.0.0.1:8000/api/',
            projects: [],

            pagination:{
                current: null,
                last: null
            }
        }
    },
    methods:{
        getApi(page){
            this.pagination.current = page
            axios.get(this.baseUrl + 'projects', {
                params: {
                    page: this.pagination.current
                }
            })
                .then(res => {
                    this.projects = res.data.projects.data;
                    // this.pagination.current = res.data.projects.current_page;
                    this.pagination.last = res.data.projects.last_page;
                })
        },


    },
    mounted(){
        this.getApi(1);
    }

}
</script>

<template>

<h1 class="my-3">My Projects</h1>

<div class="row row-cols-lg-4 row-cols-1 row-cols-sm-2">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
</div>

<div class="d-flex justify-content-center paginator my-3">

    <button :disabled="pagination.current === 1"
    class="me-3 btn btn-secondary"
    @click="getApi(1)">
        <i class="fa-solid fa-angles-left"></i>
    </button>

    <button :disabled="pagination.current === 1"
    class="me-3 btn btn-secondary"
    @click="getApi(pagination.current - 1)">
        <i class="fa-solid fa-chevron-left"></i>
    </button>

    <button
    v-for="i in pagination.last" :key="i"
    class="me-3 btn btn-secondary"
    :disabled="pagination.current === i"
    @click="getApi(i)">{{ i }}</button>

    <button :disabled="pagination.current === pagination.last" class="me-3 btn btn-secondary"
    @click="getApi(pagination.current + 1)">
        <i class="fa-solid fa-chevron-right"></i>
    </button>

    <button :disabled="pagination.current === pagination.last" class="me-3 btn btn-secondary"
    @click="getApi(pagination.last)">
        <i class="fa-solid fa-angles-right"></i>
    </button>
</div>





</template>

<style lang="scss">




button{
        display: inline-block;
        min-width: 38px;
    }


</style>
