
class DoughnutChart extends ChartConfiguration{
    
    chart(){
        this.type='doughnut';
        if(myChart!=null) myChart.destroy();

        var myChart = new Chart(this.ctx, {
            type: this.type,
            data: this.data,
            options: null
        });
    }
    
    
    setChartConfig(){
        var dtst = this.data.datasets[0];
        dtst.backgroundColor = new Array(dtst.data.length);
        
        for(var i=0; i<dtst.data.length; i++){
            console.log(arguments);
            var random=Math.round(Math.random()*15);
            console.log(this.data);   
            dtst.backgroundColor[i] = this.colorSet.backgroundColor[random];

        }
    }

    
}




