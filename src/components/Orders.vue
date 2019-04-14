<template>
    <div>
        <h2>Orders</h2>

        <div class="card mt-2" v-for="order of orders" :key="order.id">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="">
                            <label class="form-check-label" for="none">
                                Order done
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <p>
                            Name: {{order.name}}
                            <br>
                            Name: {{order.phone}}
                        </p>
                    </div>
                    <div class="col-sm-6">
                        <button class="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Orders",
        data() {
            return {
                orders: [
                    {id: '1', name: 'Vladimir', phone: '555-55-55', adId: '12', done: false},
                    {id: '2', name: 'Anton', phone: '777-55-55', adId: '12', done: false},
                ]
            }
        }
    }
</script>

<style scoped>

</style>
