<template>
    <div v-if="data">
        <v-data-table
             v-model:items-per-page="itemsPerPage"
             :headers="headers"
             :items="data"
             item-value="userId"
             class="elevation-1"
        >


        </v-data-table>
    </div>

</template>


<script>

import getAllPosts from '../services/getAllPosts'
import { VDataTable } from 'vuetify/lib/components/index.mjs';
export default {
    components:{
        VDataTable
    },

    setup() {

        const { posts, error, load } = getAllPosts();
        load();
        return {
            posts, error, load, itemsPerPage: 10, headers: [
                {
                    title: "User Id",
                    align: "start",
                    sortable: false,
                    key: "userId"

                },
                {
                    title: "Title",
                    align: "start",
                    key: "title"

                },
                {
                    title: "Body",
                    align: "start",
                    key: "body"

                }
            ],
            data:posts
        };
    }


}
</script>