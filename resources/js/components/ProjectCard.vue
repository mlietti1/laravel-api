<script>

import { truncateText } from '../data/functions';

export default {
    name: 'ProjectCard',
    data(){
        return {
            truncateText,
            contentMaxLength: 100,

        }
    },
    props:{
        project: Object
    }
}
</script>

<template>

<div >
        <div class="card my-3">
            <img class="card-img-top" src="" alt="">
            <div class="card-body">
                <h5 class="card-title">{{ project.name }}</h5>

                <p v-if="project.type" class="type mb-3">{{ project.type.name }}</p>
                <p class="user">Author: {{ project.user.name }}</p>
                <span><strong>Client: </strong></span>
                <p>{{ project.client_name }}</p>

                <p v-html="truncateText(project.summary, contentMaxLength)" class="card-text"></p>

                <div class="tech" v-if="project.technologies.length">
                    <span v-for="technology in project.technologies" :key="technology.id">#{{ technology.name }} <span>  </span></span>
                </div>
                <div class="tech" v-else>NA</div>
                <a class="info-btn" href="#">more info...</a>

            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.card{
    border: 0px !important;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
}

.type {
    font-size: 0.8rem;
    color: rgb(15, 176, 123);
}

.user{
    font-size: 0.8rem;
}

.info-btn{
    display: block;
    text-align: right;
    text-decoration: none;
    color: #c187ff;
    font-size: 0.8rem;
    font-weight: 600;
    &:hover{
        color: #8d58c6;
    }
}

.tech{
    font-size: 0.8rem;
    color: grey;
    display: inline-block;
}

@media screen and (min-width: 576px ) {
    .card-text{
        min-height: 120px;
    }
    h5{
        min-height: 48px;
    }
}

@media screen and (min-width: 992px ) {
    .card-text{
        min-height: 144px;
    }
    h5{
        min-height: 48px;
    }

}

</style>
