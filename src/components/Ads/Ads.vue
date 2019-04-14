<template>
    <div>
        <h2>Ads</h2>
        <div class="row">
            <div class="col-sm-12">
                <router-link :to="'/ads/new'" tag="a" class="btn btn-primary">Create</router-link>
            </div>
        </div>

        <br><br>

        <div class="row mt-2 " v-for="ad of ads" style="cursor: pointer">
            <router-link tag="div" class="col-sm-12" :to="'/ads/' + ad.id">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ad.title}}</h5>
                        <p class="card-text">{{ad.desc}}</p>
                    </div>
                </div>
            </router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Ads",
        computed: {
            ads() {
                return this.$store.getters.getAds;
            }
        }
    }
</script>

<style scoped>

</style>
