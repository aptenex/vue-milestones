<template lang="html">

    <section class="active-event" v-html="event.title">
        <span style="float:right;">{{event.description}}</span>
        {{event.title}} at {{event.date | toHuman}}

    </section>

</template>

<script lang="js">
    import Moment from 'moment';

    export default {
        name: 'active-event',
        props: ['event'],
        mounted() {

        },
        filters: {
            toHuman(date) {
                return new Moment(date).format('dddd, MMMM Do YYYY');
            },
        },
        data() {
            return {};
        },
        methods: {},
        computed: {},
    };
</script>

<style scoped lang="less">
    .active-event {

    }
</style>
