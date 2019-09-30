<template lang="html">

  <section class="milestone-timeline">
      <active-event class="milestone-description" v-if="activeEvent" :event="activeEvent"></active-event>
      <div v-else class="milestone-description">
        Hover a milestone to show description of that event.
      </div>
      <div class="viewport">
          <timeline-row @active-event="activeEventBus"
                        :event="event"
                        :startDate="startDate"
                        :endDate="endDate"
                        :events="eventsMatchingRow(row)"
                        :row="row" v-bind:key="row.id"
                        v-for="row in orderedRows(state.rows)"></timeline-row>
      </div>
      <timeline-axis :events="state.events" :now="now" :startDate="startDate" :endDate="endDate"></timeline-axis>
  </section>


</template>

<script lang="js">

    import _ from 'lodash';
    import Moment from 'moment';
    import TimelineRow from '@/TimelineRow.vue';
    import Store from '@/Store';
    import TimelineAxis from '@/TimelineAxis.vue';
    import ActiveEvent from '@/ActiveEvent.vue';

    export default {
        name: 'milestone-timeline',
        props: ['event'],
        mounted() {
            if (!this.state.now) {
                this.now = new Date();
            } else {
                this.now = typeof this.state.now.getMonth === 'function' ? this.state.now : new Date(this.state.now);
            }
        },
        components: {
            ActiveEvent,
            TimelineRow,
            TimelineAxis,
        },
        data() {
            return {
                activeEvent: null,
                state: Store.state,
                styles: Store.styles,
                now: null,
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
            activeEventBus(event) {
              this.activeEvent = event;
              this.now = event.date;
            },
            orderedRows(rows) {
                return _.orderBy(rows, 'order', 'asc');
            },
            eventsMatchingRow(row) {
                return this.state.events.filter(event => event.row === row.id);
            },
        },
        computed: {
            startDate() {
                return _.orderBy(this.state.events, e => new Moment(e.date).format('YYYYMMDD'), ['asc'])[0].date;
            },
            endDate() {
                return _.orderBy(this.state.events, e => new Moment(e.date).format('YYYYMMDD'), ['desc'])[0].date;
            },
        },
    };
</script>

<style scoped lang="less">
  .milestone-description{
    text-align: left;
    min-height: 50px;
  }
  .milestone-timeline {
    .viewport {
      overflow: hidden;
    }
  }
</style>
