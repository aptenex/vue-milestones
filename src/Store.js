export const store = {
    styles : {
        axis : {
            "nowBgStart" : '#95e7f5',
            "nowArrowColor" : 'red',
        }
    },
    state: {
        events: [
            {
                date: "2019-08-01",
                title: "Booked Date ",
                row: 'payments'
            },
            {
                date: "2019-10-01",
                title: "Arrival Date ",
                row: 'base'
            },
            {
                date: "2019-10-07",
                title: "Departure Date ",
                row: 'base'
            },
            {
                date: "2019-12-25",
                title: "Pay Owner",
                row: 'base'
            },
            {
                date: "2019-08-01",
                title: "Deposit Due",
                row: 'base'
            },

            {
                date: "2019-09-01",
                title: "Balance Due",
                row: 'base'
            },

        ],
        rows: [
            {
                "id" : "booking",
                "title" : "Booking",
                "order" : 3
            },
            {
                "id" : "base",
                "title" : "Base",
                "order" : 0
            },
            {
                "id" : "payments",
                "title" : "Payments",
                "order" : 1
            }

        ]
    },
};