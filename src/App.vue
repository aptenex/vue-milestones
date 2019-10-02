<template>
    <milestone-timeline id="app" :eventsData="eventsData">
    </milestone-timeline>
</template>

<script>
    import MilestoneTimeline from './MilestoneTimeline.vue';

    export default {
        name: 'app',
        components: {
            MilestoneTimeline,
        },
        data() {
            return {
                eventsData: {
                    events: [
                        {
                            key: 'booked',
                            date: '2019-08-01',
                            title: 'Booked Date ',
                            row: 'booking',
                        },
                        {
                            key: 'arrival',
                            date: '2019-10-01',
                            title: 'Arrival Date ',
                            description: 'The gueest is arriving',
                            row: 'base',
                            onAxis: true,
                        },
                        {
                            key: 'departure',
                            date: '2019-10-07',
                            title: 'Departure Dates',
                            row: 'base',
                            onAxis: true,
                        },
                        {
                            key: 'owner-due-date',
                            date: '2019-12-25',
                            title: 'Pay Owner',
                            row: 'payments',
                        },

                    ],
                    rows: [
                        {
                            id: 'booking',
                            title: 'Booking',
                            order: 3,
                        },
                        {
                            id: 'base',
                            title: 'Base',
                            order: 0,
                        },
                        {
                            id: 'payments',
                            title: 'Payments',
                            order: 1,
                        },
                    ],
                },
            };
        },
    };
</script>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        padding-left: 200px;
        padding-right: 200px;
    }
</style>
