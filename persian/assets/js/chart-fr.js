// JavaScript source code
    var ctx = document.getElementById('DoughnutChart').getContext('2d');
        var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',
            // The data for our dataset
            data: {
        labels: ['درآمد','مخارج','تعادل'],
                datasets: [{
        label: 'My First dataset',
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.69)',
                        'rgba(255, 99, 132, 0.72)',
                        'rgba(54, 162, 235, 0.74)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    data: [20, 30, 45]
                }]
            },

            // Configuration options go here
            options: {

        title: {
        display: true,
                    fontColor: '#abaeb3',
                    text: 'تیتر چارت',
                    fontSize: '14',

                }

            }
        });


    
    
        var ctx = document.getElementById('ScatterChart');
        var myChart = new Chart(ctx, {

            type: 'bar',
            data: {
            datasets: [{
            backgroundColor: 
        'rgba(75, 192, 192, 0.69)',
                    borderColor: 'rgba(75, 192, 192, 0.2)',
                    label: 'درآمد',
                    data: [20, 20, 30, 40],
                    // this dataset is drawn below
                    order: 1
                },
                    {
            backgroundColor:
        'rgba(255, 99, 132, 0.72)',
                        borderColor: 'rgba(255, 99, 132, 0.2)',
                        label: 'مخارج',
                        data: [20, 30, 40, 20],
                        // this dataset is drawn on top
                        order: 2
                    },
                    {
            backgroundColor:
        'rgba(54, 162, 235, 0.74)',
                        borderColor: 'rgba(54, 162, 235, 0.2)',
                        label: 'تعادل',
                        data: [30, 20, 25, 15],
                        type:'line',
                        // this dataset is drawn on top
                        order: 3

                    },


                ],
                labels: ['مهر', 'آبان', 'آذر', 'دی']
            },

            options: {
            scales: {
            xAxes: [{
            stacked: true
                    }],
                    yAxes: [{
            stacked: true
                    }]
                }
            }
        });
    