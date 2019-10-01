<template lang="html">

    <section class="milestone-timeline">
        <active-event class="milestone-description" v-if="activeEvent"
                      :event="activeEvent"></active-event>
        <div v-else class="milestone-description">
            Hover a milestone to show description of that event.
        </div>
        <div class="viewport">
            <timeline-row
                          :startDate="startDate"
                          :endDate="endDate"
                          :events="eventsMatchingRow(row)"
                          :row="row" v-bind:key="row.id"
                          v-for="row in orderedRows(eventsData.rows)"></timeline-row>
        </div>
        <timeline-axis :events="eventsData.events" :now="now" :startDate="startDate"
                       :endDate="endDate"></timeline-axis>
    </section>


</template>

<script lang="js">

    import _ from 'lodash';
    import Moment from 'moment';
    import TimelineRow from '@/TimelineRow.vue';
    import TimelineAxis from '@/TimelineAxis.vue';
    import ActiveEvent from '@/ActiveEvent.vue';
    import EventBus from '@/EventBus';

    export default {
        name: 'milestone-timeline',
        props: ['eventsData'],
        mounted() {
            if (this.eventsData === undefined || this.eventsData.now === undefined) {
                this.now = new Date();
            } else {
                this.now = typeof this.eventsData.now.getMonth === 'function' ? this.eventsData.now : new Date(this.eventsData.now);
            }

            EventBus.$on('activeEventChanged', (timelineEvent) => {
                this.selectActiveEvent(timelineEvent)

                _.each(this.eventsData.rows, function (item) {
                    if (timelineEvent.key === item.key) {
                        itme.active = true;
                    } else {
                        item.active = false;
                    }
                });

                timelineEvent.active = true;
            });
        },
        components: {
            ActiveEvent,
            TimelineRow,
            TimelineAxis,
        },
        data() {
            return {
                activeEvent: null,
                now: null
            };
        },
        provide() {
            return {
                viewport: {
                    startDate: this.startDate,
                    endDate: this.endDate,
                },
            };
        },
        methods: {
            selectActiveEvent(event) {
                this.activeEvent = event;
                this.now = event.date;
            },
            orderedRows(rows) {
                return _.orderBy(rows, 'order', 'asc');
            },
            eventsMatchingRow(row) {
                return this.eventsData.events.filter(event => event.row === row.id);
            },
        },
        computed: {
            startDate() {
                return _.orderBy(this.eventsData.events, e => new Moment(e.date).format('YYYYMMDD'), ['asc'])[0].date;
            },
            endDate() {
                return _.orderBy(this.eventsData.events, e => new Moment(e.date).format('YYYYMMDD'), ['desc'])[0].date;
            },
        },
    };
</script>

<style scoped lang="less">
    .milestone-description {
        text-align: left;
        min-height: 50px;
    }

    .milestone-timeline {
        .viewport {
            overflow: hidden;
        }
    }
</style>
