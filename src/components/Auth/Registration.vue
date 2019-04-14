<template>
    <div>
        <h2>Registration</h2>

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
                       v-model.trim="$v.password.$model"
                >
                  <small class="form-text text-muted" v-if="!$v.password.required">Field is required</small>
                  <small class="form-text text-muted" v-if="!$v.password.minLength">Min length should be 4 symbols</small>
            </div>

            <div class="form-group">
                <label for="repassword">Re-Password</label>
                <input type="password" class="form-control"
                       placeholder="Re-Password"
                       :class="{'is-invalid': $v.repassword.$error}"
                       v-model.trim="$v.repassword.$model"
                >
                <small class="form-text text-muted" v-if="!$v.password.required">Field is required</small>
                <small class="form-text text-muted" v-if="!$v.repassword.sameAsPassword">Passwords not equal</small>
            </div>
            <button type="submit"
                    @click.prevent="submit"
                    class="btn btn-primary"
                    :disabled="$v.$invalid || loading">Submit</button>

        </form>
    </div>
</template>

<script>
    import {email, required, minLength, sameAs} from 'vuelidate/lib/validators'

    export default {
        name: "Registration",
        data() {
            return {
                email: '',
                password: '',
                repassword: ''
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
                    password: this.password,
                };

                this.$store.dispatch('registerUser', user)
                    .then(() => {
                        this.$router.push('/login')
                    })
                    .catch(e => {
                        console.log(e);
                    });
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
            },
            repassword: {
                required,
                sameAsPassword: sameAs('password')
            }
        }
    }
</script>

<style scoped>

</style>
