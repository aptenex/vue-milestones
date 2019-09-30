
<template lang="html">

    <section class="milestone-timeline">
        <h1>milestone-timeline Component</h1>
        <div class="viewport">
            <timeline-row :startDate="startDate" :endDate="endDate" :events="eventsMatchingRow(row)" :row="row" v-bind:key="row.id" v-for="row in orderedRows(state.rows)"></timeline-row>
        </div>
        <timeline-axis :now="now" :startDate="startDate" :endDate="endDate" ></timeline-axis>
    </section>


</template>

<script lang="js">
    import TimelineRow from "@/TimelineRow";
    import { store } from "@/Store";
    import TimelineAxis from "@/TimelineAxis";
    import _ from "lodash";
    import moment from "moment";
    export default  {
        name: 'milestone-timeline',
        props: [],
        mounted() {

        },
        components : {
            TimelineRow,
            TimelineAxis
        },
        data() {
            return {
                state : store.state,
                styles : store.styles
            }
        },
        provide() {
            return {
                viewport : {
                    startDate : this.startDate,
                    endDate : this.endDate
                }
            }
        },
        methods: {
            orderedRows : function(rows){
                return _.orderBy(rows, 'order', 'asc');
            },
            eventsMatchingRow: function(row) {
                return this.state.events.filter(event => event.row === row.id);
            }
        },
        computed: {
            now : function(){
                if(!this.state.now){
                    return new Date();
                }
                return typeof this.state.now.getMonth === 'function' ? this.state.now : new Date(this.state.now);
            },
            startDate : function(){
                return _.orderBy( this.state.events, e => new moment(e.date).format("YYYYMMDD"), ['asc'])[0].date;
            },
            endDate : function(){
                return _.orderBy( this.state.events, e => new moment(e.date).format("YYYYMMDD"), ['desc'])[0].date;
            }
        }
    }
</script>

<style scoped lang="less">
    .milestone-timeline {
        .viewport {
            overflow: hidden;
        }
    }
</style>
