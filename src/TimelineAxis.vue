<template lang="html">

    <div class="timeline-axis">
        <axis-now :date="now"></axis-now>
        <axis-blip :tooltip="`Start of Booking`" :date="startDate"></axis-blip>
        <axis-blip :tooltip="`End of Booking Lifecycle`" :date="endDate"></axis-blip>

        <axis-blip :date="event.date"
                   :event="event"
                   v-bind:key="event.title"
                   v-on:update:active="selectActiveEvent(event, $event)"
                   v-for="event in axisEvents"></axis-blip>

    </div>

</template>

<script lang="js">
    import AxisBlip from '@/AxisBlip.vue';
    import AxisNow from '@/AxisNow.vue';
    import EventBus from '@/EventBus';

    export default {
        name: 'timeline-axis',
        props: ['startDate', 'endDate', 'events', 'now'],
        components: {
            AxisBlip,
            AxisNow,
        },
        mounted() {

        },
        provide() {
            return {
                bar: this,
            };
        },


        data() {
            return {};
        },
        methods: {
            selectActiveEvent(event) {
                EventBus.$emit('activeEventChanged', event);
            },
            orderedRows(rows) {
                return _.orderBy(rows, 'order', 'asc');
            },
            eventsMatchingRow(row) {
                return this.events.filter(event => event.row === row.id);
            },
        },
        computed: {
            axisEvents() {
                return this.events.filter(event => event.onAxis);
            },
        },
    };
</script>

<style scoped lang="less">
    @import "less/_variables.less";

    .timeline-axis {
        // border-top: 2px solid @blipBorder;
        // border-bottom: 2px solid @blipBorder;
        min-height: 5px;
        width: 100%;
        border-radius: 4px;

        position: relative;
        top: 10px;
    }
</style>
