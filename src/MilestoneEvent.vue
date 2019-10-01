<template lang="html">

    <div
        :class="{ active: active,
                hover: hover,
                isActive: milestone.active,
                rightAligned : rightAligned,
                leftAligned : leftAligned }"
        :style="pos"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        class="milestone-event">
        <div class="milestone-card">
            {{milestone.title}}
        </div>

    </div>

</template>

<script lang="js">
    import Moment from 'moment';
    import PositionRatio from '@/utils/PositionRatio';

    export default {
        name: 'milestone-event',
        props: ['milestone', 'active'],
        mounted() {

        },
        data() {
            return {
                hover: false,
            };
        },
        methods: {
            onMouseEnter() {
                this.hover = true;
                this.activeEvent(this.milestone);
            },
            onMouseLeave() {
                this.hover = false;
            },
            activeEvent(item) {
                this.$emit('active-event', item);
            },
        },
        inject: ['viewport'],
        computed: {
            pos() {
                const left = PositionRatio(
                    this.viewport.startDate,
                    this.viewport.endDate,
                    this.eventDate,
                );

                if (left >= 100) {
                    return {right: `${0}%`};
                }
                return {
                    left: `${left}%`,
                };
            },
            leftAligned() {
                return !this.rightAligned;
            },
            rightAligned() {
                const left = PositionRatio(
                    this.viewport.startDate,
                    this.viewport.endDate,
                    this.eventDate,
                );

                if (left >= 100) {
                    return true;
                }
                return false;
            },
            eventDate() {
                return new Moment(this.milestone.date);
            },
            root() {
                return this.$root.$el;
            },
        },
    };
</script>

<style scoped lang="less">

    @import "less/_variables.less";

    .milestone-event {

        height: 140px;
        align-items: flex-start;
        display: flex;
        position: absolute;
        // border-left: 1px solid red;

        border-radius: 3px;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%);
        background-position-y: 10px;
        width: 1px;

        &.rightAligned .milestone-card {
            right: 0%;
        }

        .milestone-card {
            box-shadow: 0px 2px 3px 3px rgba(0, 0, 0, 0.04);
            padding: 10px;
            background: #CCC;
            border-radius: 3px;
            vertical-align: middle;
            display: flex;
            top: 0px;
            z-index: 1;
            position: absolute;
            white-space: nowrap;


        }

        &.hover .milestone-card {
            z-index: 10;
            box-shadow: 0px 2px 3px 3px rgba(0, 0, 0, 0.1);
        }
    }
</style>
