<template lang="html">

    <div @mouseenter="onMouseEnter"
         @mouseleave="onMouseLeave"
         v-tooltip="tooltip" :class="classes + ' axis-blip'" :style="pos">
        <div class="blip"></div>
    </div>

</template>

<script lang="js">
    import { VTooltip, VPopover, VClosePopover } from 'v-tooltip';
    import Moment from 'moment';
    import Vue from 'vue';
    import PositionRatio from './utils/PositionRatio';

    Vue.directive('tooltip', VTooltip);
    Vue.directive('close-popover', VClosePopover);
    Vue.component('v-popover', VPopover);
    export default {
        name: 'axis-blip',
        props: ['date', 'event', 'tooltip'],
        mounted() {
        },
        inject: ['bar'],
        data() {
            return {};
        },
        methods: {
            onMouseEnter() {
                this.$emit('update:active', true);
            },
            onMouseLeave() {
                this.$emit('update:active', false);
            },
        },
        computed: {
            classes() {
                const left = PositionRatio(this.barStart, this.barEnd, this.blipDate);
                if (left >= 100) {
                    return 'right-aligned';
                }
                if (left < 1) {
                    return 'left-aligned';
                }
                return 'center-aligned';
            },
            barStart() {
                return new Moment(this.bar.startDate);
            },
            barEnd() {
                return new Moment(this.bar.endDate);
            },
            blipDate() {
                return new Moment(this.date);
            },
            pos() {
                // I'm not sure if I should do this. My thinking is, the axis blip
                // can ONLY exist within a TimelineAxis
                // So it's a dependant on that element, so why bother passing props?
                const left = PositionRatio(this.barStart, this.barEnd, this.blipDate);
                if (left >= 100) {
                    return { right: `${0}%` };
                }
                return {
                    left: `${left}%`,
                };
            },
        },
    };
</script>

<style scoped lang="less">
    @import "less/_variables.less";

    .left-aligned {
        .date {
            text-align: left;
        }

        .blip {
            margin-left: -8px;
        }
        &.axis-blip {
            transform: translateX(0);
        }
    }

    .right-aligned {
        .blip {
            margin-right: -8px;
        }
        &.axis-blip {
            transform: translateX(0);
        }

        .date {
            right: 0px;
            text-align: right;
        }
    }

    .center-aligned {
        .date {
            text-align: center;
            position: absolute;
            left: -40px;
        }
    }

    .date {
        color: #AAA;
        width: 100px;
        text-align: center;
        font-size: 0.9em;
        position: absolute;
        bottom: 0px;
    }

    .axis-blip {
        position: absolute;
        height: 30px;
        z-index:2;

        top: -25%;
        transform: translateX(-8px);

        &:hover .blip {
            border-color: lighten(@blipBorder, 5%);
            background: darken(@blipBackground, 5%);
            border: 2px solid @primary;
            transform: scale(2.0);
        }

        .blip {
            box-sizing: content-box !important;
            border-radius: 10px;
            border: 3px solid @primary;
            box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 0.3);
            background: @blipBackground;
            height: 12px;
            width: 12px;
            transition: all;
            transition-duration: 0.4s;
            margin-top: -6px;


        }
    }



</style>
