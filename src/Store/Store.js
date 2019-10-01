import Vue from 'vue';

export default Vue.observable({
        events: [
            {
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
                title: 'Departure Date ',
                row: 'base',
                onAxis: true,
            },
            {
                date: '2019-12-25',
                title: 'Pay Owner',
                row: 'payments',
            },
            {
                date: '2019-08-01',
                title: 'Deposit Due',
                row: 'payments',
            },

            {
                date: '2019-09-01',
                title: 'Balance Due',
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
    });
