<template>
    <div>
        <h2 v-if="isNew">Create </h2>
        <h2 v-if="!isNew">Edit </h2>
        <form>
            <div class="form-group">
                <label for="title"><strong>Title</strong></label>
                <input type="text" class="form-control" placeholder="Title"
                       v-model.trim="$v.title.$model"
                >
            </div>
            <div class="form-group">
                <label for="desc"><strong>Descritption</strong></label>
                <textarea class="form-control" placeholder="Description"
                          v-model.trim="$v.desc.$model"
                >
                </textarea>
            </div>

            <div class="form-group">
               <div class="row mb-2">
                   <div class="col-sm-12">
                       <img :src="imagePreview" v-if="imagePreview" alt="" height="200px">
                   </div>
               </div>
                <input type="file" ref="inputFile" style="display: none" @change.stop="uploadFile($event)">
                <button class="btn btn-warning"  type="button" @click.prevent="formInputTrigger">Upload</button>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input"
                       v-model="promo"
                >
                <label class="form-check-label" for="promo">Promo</label>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="$v.$invalid" @click.prevent="submit">Submit
            </button>
        </form>

    </div>
</template>

<script>
    import {required} from 'vuelidate/lib/validators'

    export default {
        name: "AdForm",
        data() {
            return {
                title: this.$store.getters.getAdById(this.id).title || '',
                desc: this.$store.getters.getAdById(this.id).desc || '',
                promo: this.$store.getters.getAdById(this.id).promo || false,
                image: null,
                imagePreview: this.$store.getters.getAdById(this.id).imgSrc || ''
            }
        },
        validations: {
            title: {
                required
            },
            desc: {
                required
            }
        },
        props: ['id'],
        computed: {
          isNew() {
              return this.$route.name === 'new'
          }
        },
        methods: {
            submit() {
                const ad = {
                    title: this.title,
                    desc: this.desc,
                    promo: this.promo
                };

                this.$store.dispatch('createAd').then(() => {
                    this.$router.push('/ads')
                })

                console.log(ad);

                this.title = '';
                this.desc = '';
                this.promo = false;
            },
            formInputTrigger() {
                this.$refs.inputFile.click();
            },
            uploadFile(event) {
                this.image = event.target.files[0];

                const reader = new FileReader();

                reader.onload = () => {
                    this.imagePreview = reader.result;
                };

                reader.readAsDataURL(this.image);
            }
        },
    }
</script>

<style scoped>

</style>
