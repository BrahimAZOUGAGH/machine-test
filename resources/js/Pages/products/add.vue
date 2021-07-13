<template>
    <div class="product_add">
        <h2 class="mb-5">Add new product</h2>
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
            <b-form-group id="input-group-1" label="Product Name:" label-for="input-1">
                <b-form-input
                    id="input-1"
                    v-model.trim="$v.product.name.$model"
                    placeholder="Enter product name"
                    :class="{ 'is-invalid': $v.product.name.$error }"
                ></b-form-input>
                <span v-if="$v.product.name.$dirty && !$v.product.name.required" class="text-danger">Product name is required</span>
            </b-form-group>

            <b-form-group id="input-group-2" label="Category :" label-for="input-2">
                <b-form-select
                    id="input-2"
                    v-model.trim="$v.product.category.$model"
                    :options="categories"
                    :class="{ 'is-invalid': $v.product.category.$error }"
                ></b-form-select>
                <span v-if="$v.product.category.$dirty && !$v.product.category.required" class="text-danger">Category is required</span>
            </b-form-group>

            <b-form-group id="input-group-3" label="Product Quantity:" label-for="input-3">
                <b-form-input
                    id="input-3"
                    v-model.trim="$v.product.quantity.$model"
                    placeholder="Enter product quantity"
                    type="number"
                    min="0"
                    :class="{ 'is-invalid': $v.product.quantity.$error }"
                ></b-form-input>
                <span v-if="$v.product.quantity.$dirty && !$v.product.quantity.required" class="text-danger">Product quantity is required</span>
            </b-form-group>

            <b-form-group label="Status">
                <b-form-radio v-model="product.status" value="1">Active</b-form-radio>
                <b-form-radio v-model="product.status" value="0">Inactive</b-form-radio>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>

<script>

import { required } from "vuelidate/lib/validators";
import ProductService from "../../Services/ProductService";

export default {
    name: 'ProductAdd',
    data() {
        return {
            product: {
                name: '',
                category: null,
                quantity: '',
                status: 0
            },
            categories: [
                { 
                    text: 'Select Category', 
                    value: null 
                }, 
                'Cars', 
                'Smartphone', 
                'Clothes', 
                'Food'
            ],
        };
    },
    validations: {
        product: {
            name: {
                required
            },
            category: {
                required
            },
            quantity: {
                required
            }
        }
    },
    methods: {
        onSubmit () {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                ProductService.create(this.product)
                    .then(response => {
                        console.log(response.data);
                        this.$router.push({ name: 'product-list' })
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        onReset () {
            this.product = {
                name: '',
                category: null,
                quantity: '',
                status: 0
            }
        }
    }
}
</script>