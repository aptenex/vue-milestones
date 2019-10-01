<template lang="html">

    <div class="axis-now">
        <div class="bar" :style="styles"></div>
        <div class="arrow" :style="arrowStyles">
            <div ref="nowLabel" :style="nowTransform + nowLabel" class="now-label">{{ date | toHuman
                }} ({{ date | absoluteDifference }})
            </div>
        </div>
    </div>

</template>

<script lang="js">
    import Moment from 'moment';
    import AxisBlip from '@/AxisBlip.vue';
    import PositionRatio from '@/utils/PositionRatio';
    import Position from './utils/Position';
    import InRect from './utils/InRect';
    import Inside from './utils/Inside';

    export default {
        name: 'axis-now',
        extends: AxisBlip,
        props: ['date'],
        filters: {
            absoluteDifference(date) {
                return new Moment(date).fromNow();
            },
            toHuman(date) {
                return new Moment(date).format('MMMM Do YYYY');
            },
        },
        watch: {
            date(val) {
                this.nowTransform = false;
                if (this.keepInside) {
                    this.$nextTick(() => {
                        if (!Inside(this.$refs.nowLabel, this.$parent.$el)) {
                            console.log('>>>', Position(this.$refs.nowLabel, this.$parent.$el));
                            this.nowTransform = Position(this.$refs.nowLabel, this.$parent.$el);
                        }
                    });
                }
            },
        },
        mounted() {
        },
        data() {
            return {
                keepInside: true,
                nowTransform: null,
            };
        },
        methods: {},
        computed: {
            nowLabel() {
                // eslint-disable-next-line no-unused-expressions
                this.date;
                if (!this.nowTransform) {
                    return ';left:-70px;';
                }
                return '';
            },
            arrowStyles() {
                const left = PositionRatio(this.barStart, this.barEnd, this.date);
                return `left: ${left}%;`;
            },
            styles() {
                const width = PositionRatio(this.barStart, this.barEnd, this.date);
                return `width: ${width}%;min-height: 6px;`;
            },
        },
    };
</script>

<style scoped lang="less">
    @import "less/_variables.less";

    @keyframes gradientBG {
        0% {
            background-position: 0% 10%;
        }
        50% {
            background-position: 10% 0%;
        }
    }

    .now-label {
        position: absolute;
        white-space: nowrap;
        top: 25px;
        color: #AAA;
        font-size: 0.9em;
    }

    .axis-now {
        position: relative;

        .bar {
            transition: all 0.3s ease-in-out;
            background-image: linear-gradient(90deg, @nowBgStart, @nowBgEnd 60%, transparent 60%, transparent 100%);
            background-size: 20px 1px;
            border: none;

            &:hover {
                animation: gradientBG 5s ease infinite;
            }
        }

        .arrow {
            z-index: 1;
            display: inline-block;
            border-top: 12px solid transparent;
            border-left: 12px solid transparent;
            border-right: 12px solid transparent;
            border-bottom: 14px solid @primary;
            position: absolute;
            margin-left: -11px;
            margin-top: 0px;
            // transition: all  0.3s ease-in-out;

        }

    }
</style>
