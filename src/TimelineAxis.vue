<template lang="html">

    <div class="timeline-axis">
        <axis-now :date="now"></axis-now>
        <axis-blip :date="startDate"></axis-blip>
        <axis-blip :date="endDate"></axis-blip>
        <axis-blip date="2017-01-02"></axis-blip>

    </div>

</template>

<script lang="js">
    import AxisBlip from "@/AxisBlip";
    import AxisNow from "@/AxisNow";

    export default {
        name: 'timeline-axis',
        props: ['startDate', 'endDate', 'now'],
        components: {
            AxisBlip,
            AxisNow,
        },
        mounted() {

        },
        provide() {
            return {
                bar : this
            }
        },


        data() {
            return {}
        },
        methods: {},
        computed: {}
    }
</script>

<style scoped lang="less">
    @blipBorder : darken(#01c88b, 16%);

    .timeline-axis {
        border-top: 2px solid @blipBorder;
        border-bottom: 2px solid @blipBorder;
        min-height: 5px;
        width: 100%;
        border-radius: 4px;

        position: relative;
        top:10px;
    }
</style>
