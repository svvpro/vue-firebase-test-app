<template>
    <div>
        <h2>Login</h2>

        <form>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control"
                       placeholder="Enter email"
                       :class="{'is-invalid': $v.email.$error}"
                       v-model.trim="$v.email.$model"
                >

                <small class="form-text text-muted" v-if="!$v.email.required">Field is required</small>
                <small class="form-text text-muted" v-if="!$v.email.email">Wrong format</small>


            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control"
                       placeholder="Password"
                       :class="{'is-invalid': $v.password.$error}"
                       v-model.trim="$v.password.$model"
                >
                <small class="form-text text-muted" v-if="!$v.password.required">Field is required</small>
                <small class="form-text text-muted" v-if="!$v.password.minLength">Min length should be 4 symbols</small>
            </div>
            <button type="submit"
                    @click.prevent="submit"
                    class="btn btn-primary"
                    :disabled="$v.$invalid || loading">Login
            </button>
        </form>
    </div>
</template>

<script>
    import {email, required, minLength} from 'vuelidate/lib/validators'

    export default {
        name: "Login",
        data() {
            return {
                email: '',
                password: ''
            }
        },
        computed: {
          loading() {
              return this.$store.getters.loading;
          }
        },
        methods: {
            submit() {
                const user = {
                    email: this.email,
                    password: this.password
                };

                this.$store.dispatch('loginUser', user)
                    .then(() => {
                        this.$router.push('/')
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(4)
            }
        },
        created() {
            if (this.$route.query['loginError']) {
                this.$store.dispatch('setError', 'Please log in to access this page')
            }
        }
    }
</script>

<style scoped>

</style>
