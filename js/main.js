Vue.component('watch', {
    template:   '<div class="timer-item timer" :class="{ active: isActive }">' +
                    '<div class="timer-item__count-time">' +
                        '<span class="hour">{{ hours }}</span>' + 
                        '<span>{{ hours ? \':\' : \'\' }}</span> ' +
                        '<span class="minute">{{ minutes }}</span>' +
                        '<span>:</span>' +
                        '<span class="seconds">{{ seconds }}</span>' +
                    '</div>' +
                    '<div class="timer-item__controls">' +
                        '<div class="start" v-if="!timer" @click="startTimer"></div>' +
                        '<div class="pause" v-if="timer" @click="stopTimer"></div>' +
                        '<div class="stop" v-if="resetButton" @click="resetTimer"></div>' +
                    '</div>' +
                '</div>',
    data() {
        return {
            timer: null,
            totalTime: (0 * 60),
            resetButton: true,
            isActive: false
        }
    },
    methods: {
        startTimer: function() {
            this.timer = setInterval(() => this.countup(), 1000); //1000ms = 1 second
            this.resetButton = true;
            this.isActive = true;
        },

        stopTimer: function() {
            clearInterval(this.timer);
            this.timer = null;
            this.resetButton = true;
            this.isActive = false;
        },

        resetTimer: function() {
            this.totalTime = 0;
            clearInterval(this.timer);
            this.timer = null;
            this.resetButton = true;
            this.isActive = false;
        },

        padTime: function(time) {
            return (time < 10 ? '0' : '') + time;
        },

        countup: function() {
            this.totalTime++;
        },

        calculateHours(time) {
            if(time < 1) {
                return '';
            } else {
                return      
            }
        }
    },

    computed: {
        hours: function() {
            const hours = Math.floor(this.totalTime / 3600);
            return (hours < 1 ? '' : hours);
        },

        minutes: function() {
            const minutes = Math.floor(this.totalTime / 60);
            return this.padTime(minutes);
        },

        seconds: function() {
            const seconds = this.totalTime - (this.minutes * 60);
            return this.padTime(seconds);
        }
    }
});

const time = new Vue({
    el: '#time',
    data() {

        return {
            watches: [{

            }]
        }
    },

    methods: {
        add() {
            this.watches.push({

            })
        }
    }
})