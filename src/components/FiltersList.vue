<template>
    <div>блядище</div>
    <!-- <div>
        <pre>{{ categoriesList }}</pre>
    </div> -->
    <ul>
        <li v-for="category in categoriesList" @click="handleClick(category)" :key="category">{{ category }}</li>
    </ul>
</template>

<script>
export default {
    name: 'FiltersList',
    props: {
        categoriesList: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        handleClick(val) {
            console.log(val, 'zalupa')
            this.$emit('categoryClick', val)
        },
    },
}
</script>

<style lang="scss" scoped></style>
