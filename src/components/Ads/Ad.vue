<template>
    <div>
        <h2>{{ad.title}}</h2>

        <div class="card" style="width: 100%">
            <img :src="ad.imgSrc" class="card-img-top" alt="..." height="400px">
            <div class="card-body">
                <p class="card-text">{{ad.desc}}</p>
                <router-link :to="'/ads/' + ad.id + '/edit'" class="btn btn-warning">Edit</router-link>
                <a href="#" class="btn btn-success ml-2">Buy</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Ad",
        props: ['id'],
        computed: {
            ad() {
                return this.$store.getters.getAdById(this.id);
            }
        }
    }
</script>

<style scoped>

</style>
