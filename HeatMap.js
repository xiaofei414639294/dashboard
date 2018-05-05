
class HeatMap extends ChartConfiguration{
    
    
        chart(){
            this.type='heatMap';
            
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
                this.map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 10,
                    center: {lat: 44.95559695, lng: -93.23913021},
                    mapTypeId: 'terrain'
                });

                var heatmapData = [];
                var latitude = dataset.toDict()['Y'];
                var longitude = dataset.toDict()['X'];

                for (var i=0;i<latitude.length;i++) {
                  var latLng = new google.maps.LatLng(latitude[i], longitude[i]);
                  heatmapData.push(latLng);
                }

                var heatmap = new google.maps.visualization.HeatmapLayer({
                  data: heatmapData,
                  dissipating: false,
                  map: this.map
                });
        }

        
        
        
}


