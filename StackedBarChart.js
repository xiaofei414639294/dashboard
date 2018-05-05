class StackedBarChart extends ChartConfiguration{
	    

     chart(){
            this.type='bar';
             if(myChart!=null) myChart.destroy();
             console.log(this.data.datasets);
            myChart = new Chart(this.ctx, {
                type: this.type,
                data: this.data,

                options: {
                    title:{
                        display:true,
                        text:"Chart.js Bar Chart - Stacked"
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                            stacked: true,
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
            });
        }    
    
    
        setChartConfig(){

            for (let m of this.data.datasets.keys()) {
                var errdata = this.data.datasets[m].data;
                var crrdata = new Array(errdata.length);
                for (let n of crrdata.keys()) {
                    crrdata[n] = Number.parseFloat(errdata[n][0]);
                }
                this.data.datasets[0].data = crrdata;
            }

            for(var i=0;i<this.data.datasets.length;i++){
                var random=Math.round(Math.random()*5);
                this.data.datasets[i].backgroundColor=this.colorSet.backgroundColor[random];
                this.data.datasets[i].borderColor=this.colorSet.borderColor[random];
                this.data.datasets[i].borderWidth=this.colorSet.borderWidth;               
            }

            var max=0;
            for(var i=0;i<this.data.datasets.length;i++){
               var number=Math.max.apply(null,this.data.datasets[i].data);
                if(max<number) max=number;
            }
            var step= Math.round(max/10);

            for(var i=0;i<max+1;i++){
                if(step>i&&step<i+1) {
                    step=i+1;
                    break;
                }
            }

            max=step*10;
                this.options={
                    title:{
                        display:true,
                        text:"Stacked Bar Chart"
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                            stacked: true,
                        }],
                        yAxes: [{
                            ticks: {
                            beginAtZero:true,
                            steps:step,
                            max:max
                            },
                            stacked: true
                        }]
                    }
                }

            }

      
    
          
        
}


