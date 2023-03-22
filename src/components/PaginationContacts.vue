<template>
    <div class="pagination_container">
        <button>&lt;&lt;</button>
        <button :disabled="isFirst">&lt;</button>
           <button class="pagination_item"
               v-for="(item) in numPages" 
               :key="item"
               @click="pageClick(item)"   
            >
                 {{ item }}
           </button>
        <button :disabled="isLast">&gt;</button>
        <button :disabled="isLast">&gt;&gt;</button>
    </div>
</template>

<script>
export default {
    name: 'PaginationContacts',
    props: {
        itemPage: {
            type:  Number,
            required: true
        },
        numPages: {
            type: Number,
            required: true
        }
    },
    computed: {
    },
    methods: {
        pageClick(item) {
            this.$emit('paginate', item) 
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination_item {
    padding: 5px;
    margin: 20px 3px;

    &:hover {
        background-color: #dd6262;
    }
}
</style>