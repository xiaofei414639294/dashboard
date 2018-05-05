
class LineChart extends ChartConfiguration{
    
    
        chart(){
            this.type='line';
            
            myChart = new Chart(this.ctx, {
                type: this.type,
                data: this.data,
                options: null
            });
        }
	    
    
    
        setChartConfig(){

                var errdata = this.data.datasets[0].data;
                var crrdata = new Array(errdata.length);
                for (let k of crrdata.keys()) {
                    crrdata[k] = Number.parseFloat(errdata[k][0]);
                }
                this.data.datasets[0].data = crrdata;

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

                for(var i=0;i<max/5+1;i++){
                    if(step>i*5&&step<5*(i+1)) {
                        step=5*(i+1);
                        break;
                    }
                }

                max=step*10;
        }

        
        
        
}


