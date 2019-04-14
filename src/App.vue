<template>
    <div id="app">


        <div class="container">

            <ul class="nav">
                <router-link :to="link.url" class="nav-item" active-class="active" exact tag="li" v-for="link of links"
                             :key="link.title">
                    <a class="nav-link">{{ link.title }}</a>
                </router-link>
                <li class="nav-item" v-if="isUserLoggedIn">
                    <a href="" class="nav-link" @click.prevent="logout">Logout</a>
                </li>
            </ul>
            <hr>
            <div class="alert alert-danger" role="alert" v-if="error">
                <strong>{{error}}</strong>
                <button type="button" class="close" aria-label="Close" @click="clearError">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
            }
        },
        computed: {
            error() {
                return this.$store.getters.error;
            },
            isUserLoggedIn() {
                return this.$store.getters.isUserLoggedIn;
            },
            links() {
                if(this.isUserLoggedIn) {
                    return [
                        {title: 'Home', url: '/'},
                        {title: 'Orders', url: '/orders'},
                        {title: 'Ads', url: '/ads'},
                    ]
                } else{
                    return [
                        {title: 'Login', url: '/login'},
                        {title: 'Registrations', url: '/registration'},
                    ]
                }
            }
        },
        methods: {
            clearError() {
                this.$store.dispatch('clearError');
            },
            logout() {
                this.$store.dispatch('logoutUser')
                    .then(() => {
                        this.$router.push('/login')
                    })
                    .catch(e =>{
                        console.log(e);
                    })
            }
        }
    }
</script>

<style lang="scss">
    .active {
        font-weight: bold;
    }
</style>
