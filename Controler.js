class Controler{
	constructor(view,data){
		this.view=view;
		this.data=data;
		this.columnSelectedDf;
		this.columns=data.df.listColumns();
		this.originDf=data.df;
	}
	

	//add and delete the value then call the valueDataSets from the view
	addValue(){
		var valueDataSet={selection:'',deleteButton:'',breakLine:''};
 		 valueDataSet.breakLine=document.createElement("br");
		 this.view.chartSettingDiv.appendChild(valueDataSet.breakLine);
		valueDataSet.selection=this.view.createSelection(this.columns,this.view.chartSettingDiv);
	    valueDataSet.deleteButton=this.view.createButton(" - ","deleteValue(this)",this.view.chartSettingDiv);
		this.view.valueDataSets.push(valueDataSet);
	} 



	deleteValue(button){
		for(var i=0;i<this.view.valueDataSets.length;i++){
			if(this.view.valueDataSets[i].deleteButton==button){
				this.view.chartSettingDiv.removeChild(this.view.valueDataSets[i].selection);
				this.view.chartSettingDiv.removeChild(this.view.valueDataSets[i].deleteButton);
				this.view.chartSettingDiv.removeChild(this.view.valueDataSets[i].breakLine);
				this.view.valueDataSets.splice(i,1);
				break;
			}
		}
}


	//user select the colomes from the original dataset 
	selectColumns(){
			this.data.df=this.originDf;
			var originColumn=this.originDf.listColumns();
			for(var i=0;i<this.view.checkboxes.length; i++){
				if(this.view.checkboxes[i].checked==false) {           
					this.data.df=this.data.df.drop(originColumn[i]);
				}
			}
			this.columnSelectedDf=this.data.df;
			this.data.df.show();
			this.data.notifyObservers();        
    }

	
   // add and delete the filter
	addFilterRows(){
		this.view.createFilter(this.columns);

    }

	deleteFilterRows(button){
			view.deleteFilter(button);
	}

	

//user can choose the max, min, avg,count values
	groupby(){
		var selectedColumn1=this.view.groupbySelection1.value;
		var selectedColumn2=this.view.groupbySelection2.value;
		var operation=this.view.groupbyOperation.value;
 
		 if(operation=='Max'){
			 this.data.df = this.data.df.groupBy(selectedColumn1).aggregate(group => group.stat.max(selectedColumn2));
			 this.data.df =this.data.df.rename('aggregation', this.view.newGroupName.value);
			 this.data.df.show(); 
			 this.data.notifyObservers();
		}else if(operation=='Avg'){
			 this.data.df = this.data.df.groupBy(selectedColumn1).aggregate(group => group.stat.mean(selectedColumn2));
			 this.data.df =this.data.df.rename('aggregation', this.view.newGroupName.value);
			 this.data.df.show(); 
			 this.data.notifyObservers();
		 }else if(operation=='Min'){
			 this.data.df = this.data.df.groupBy(selectedColumn1).aggregate(group =>group.stat.min(selectedColumn2));
			 this.data.df =this.data.df.rename('aggregation', this.view.newGroupName.value);
			 this.data.df.show(); 
			 this.data.notifyObservers();	
		 }else if(operation=='Count'){
			 this.data.df = this.data.df.groupBy(selectedColumn1).aggregate(group => group.count());
			 this.data.df =this.data.df.rename('aggregation', this.view.newGroupName.value);
			 this.data.df.show(); 
			 this.data.notifyObservers();
		}
 
	}
	 

    //filter the colomes
	filter(){
		var column, operation, inputValue;
		this.data.df=this.columnSelectedDf;
			for(var i=0;i< this.view.filterDataSets.length;i++){
				var selectedOption1=this.view.filterDataSets[i].option1.value;
				var selectedOption2=this.view.filterDataSets[i].option2.value;
				var userInput=this.view.filterDataSets[i].option3.value;
				if(selectedOption2=='>'){
					userInput=parseInt(userInput);
					this.data.df=this.data.df.filter(row=>row.get(selectedOption1)>userInput);
				} else if(selectedOption2=='=='){
					this.data.df=this.data.df.filter(row=>row.get(selectedOption1)===this.view.filterDataSets[i].option3.value);
				} else if(selectedOption2=='!='){
					this.data.df=this.data.df.filter(row=>row.get(selectedOption1)!=this.view.filterDataSets[i].option3.value);
				}else if(selectedOption2=='<'){
					userInput=parseInt(userInput);
					this.data.df=this.data.df.filter(row=>row.get(selectedOption1)<userInput);
				} else continue;

			}
		
 		this.data.df.show(); 
	  this.data.notifyObservers();        
	}

    
   
    
    //chart the data that be filtered
	chart() {
		var chartFactory=new ChartFactory();
		var type;
		var valueColumns=[];
		var dataSets=[];
		for(var i=0;i<this.view.radioes.length;i++){
			if(this.view.radioes[i].checked){
				type=this.view.radioes[i].value;
				break;
			}
		}
		
		var labelColumn=this.view.labelSelection.options[this.view.labelSelection.selectedIndex].label;
		var valueArrays=[];
		var labels=this.data.df.select(labelColumn).toArray();// elements of the selected label colomn for labels

		for(var i=0;i<this.view.valueDataSets.length;i++){
			valueColumns.push(this.view.valueDataSets[i].selection.options[this.view.valueDataSets[i].selection.selectedIndex].label);
			valueArrays.push(this.data.df.select(valueColumns[i]).toArray());
		}
	
		for(var i=0;i<labels.length;i++){
			var valueArray=[];
			for(var j=0;j<valueArrays.length;j++){
				valueArray.push(valueArrays[j][i]);
			}
			dataSets.push(new DataFlitered(labels[i],valueArray));
		}  
		var chart= chartFactory.createChart(this.view.ctx,type,valueColumns,dataSets);
			chart.parseDataSets();
			chart.setChartConfig();
			chart.chart();
	}


  //update the operation on columes
	update(df){

		this.data.df=df;
		this.columns=df.listColumns();
	}


}