class ChartFactory{
	createChart(ctx,type,valueColumns,dataSets){
		console.log(type);
		if(type=="Bar"){
			var chart=new BarChart(ctx,valueColumns,dataSets);
            return chart;
		} else if (type=="Line"){
			var chart=new LineChart(ctx,valueColumns,dataSets);
			 return chart;

		}else if(type=="Stacked Bar"){
			var chart=new StackedBarChart(ctx,valueColumns,dataSets);
			return chart;

		}
		else if(type=="Pie"){
			var chart=new PieChart(ctx,valueColumns,dataSets);
			return chart;

		}
		else if(type=="Doughnut"){
            var chart=new DoughnutChart(ctx,valueColumns,dataSets);
            return chart;
		}
        else if(type=="polarArea"){
            var chart=new PolarAreaChart(ctx,valueColumns,dataSets);
            return chart;
        }
        else if(type=="heatMap"){
            var chart=new PolarAreaChart(ctx,valueColumns,dataSets);
            return chart;
        }
		else
		{
			console.log("invalid chart type input");
		}
	}
}


