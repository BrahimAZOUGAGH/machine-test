<template>
    <div class="product_list"> 
        <div>

            <b-row>
                <b-col lg="6" class="my-1">
                    <router-link :to="{ name: 'product-add' }" tag="div" class="mb-5">
                        <b-button pill variant="primary" text-variant="white"><b-icon-plus></b-icon-plus> Add new</b-button>
                    </router-link>
                </b-col>
                <b-col lg="6" class="my-1">
                    <b-form-group
                        label="Search"
                        label-for="filter-input"
                        label-cols-sm="3"
                        label-align-sm="right"
                        label-size="sm"
                        class="mb-0"
                    >
                        <b-input-group size="sm">
                                <b-form-input
                                id="filter-input"
                                v-model="filter"
                                type="search"
                                placeholder="Type to Search"
                            ></b-form-input>

                            <b-input-group-append>
                                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-table 
                striped 
                hover 
                :items="products" 
                :fields="fields"
                :filter="filter"
                :sort-by.sync="sortBy" 
                :sort-desc.sync="sortDesc"
                show-empty
            >
                <template #cell(name)="data">
                    <router-link :to="{ name: 'product-edit', params: { id: data.item.id } }">{{ data.item.name }}</router-link>
                </template>
                <template #cell(status)="data">
                    <b>{{ data.item.status ? 'Active' : 'Inactive' }}</b>
                </template>
                
                <template #empty="scope">
                    <h5 class="text-center">{{ scope.emptyText }}</h5>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
import ProductService from "../../Services/ProductService";

export default {
    name: 'ProductList',
    data() {
        return {
            sortBy: 'name',
            sortDesc: false,
            products: [],
            fields: [
                { key: 'id', sortable: true },
                { key: 'name', sortable: true },
                { key: 'category', sortable: true },
                { key: 'quantity', sortable: true },
                { key: 'status', sortable: false }
            ],
            filter: null
        };
    },
    methods: {
        retrieveProducts () {
            ProductService.getAll()
                .then(response => {
                    this.products = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
    },
    mounted () {
        this.retrieveProducts();
    }
}
</script>