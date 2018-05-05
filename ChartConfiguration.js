
class ChartConfiguration{
	constructor(ctx,valueColumns,datasets){
		this.ctx=ctx;
		this.valueColumns=valueColumns;
		this.data={labels:[],datasets:[]};
		this.datasets=datasets;
		this.colorSet={
                    backgroundColor:[
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'],
                    borderColor:[
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'],
                    borderWidth:1
                }
	}


	chart(){
		console.alert("this function will be called by concrete class");
	}
	setChartConfig(){
		console.alert("this function will be called by concrete class");
	}



	parseDataSets(){
		for(var i=0;i<this.datasets.length;i++){
			this.data.labels.push(this.datasets[i].label);
		}
		
		for(i=0;i<this.valueColumns.length;i++){
			var data=[];
		    for(var j=0;j<this.datasets.length;j++){
               data.push(this.datasets[j].values[i]);
			}
			var dataset=new Dataset(this.valueColumns[i],data,null,'','');
			this.data.datasets.push(dataset);
		}
	}


		
}