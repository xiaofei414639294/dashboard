class PieChart extends ChartConfiguration{
    
    
    chart(){
            this.type='pie';
            if(myChart!=null) myChart.destroy();

            var myChart = new Chart(this.ctx, {
                type: this.type,
                data: this.data,
                options: null
            });
        }
    
    
    
    setChartConfig(){
                this.colorSet=[
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1",
                    "#4D5360",
                    
                    "#F7564A",
                    "#46CFBD",
                    "#FDC45C",
                    "#94AFB1",
                    "#4D6360",

                    "#17464A",
                    "#66BFBD",
                    "#1DB45C",
                    "#B49FB1",
                    "#6D5360",
                ];
                var dtst = this.data.datasets[0];
            dtst.backgroundColor = new Array(dtst.data.length);
            for(var i=0; i<dtst.data.length; i++){
                    console.log(arguments);
                    var random=Math.round(Math.random()*15);
                    console.log(this.data);
                    
                dtst.backgroundColor[i] = this.colorSet[random];

            }
        }
    
}
