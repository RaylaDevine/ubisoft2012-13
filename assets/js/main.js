CanvasJS.addColorSet("polygonShades",
	[
	"#ff0052",
	"#8e2b88"                
	]);

var chart = new CanvasJS.Chart("chartContainer1",
	{
        colorSet: "polygonShades",
        animationEnabled: true,
		title:{
			text: "Ubisoft Annual Report: Gross Profits",
			fontSize: 20
		},
		toolTip: {
			shared: true
		},			
		axisY: {
			title: "in € Millons "
		},			
		data: [ 
		{
			type: "column",	
			name: "2011 - 2012",
			legendText: "2011 - 2012",
			showInLegend: true, 
			dataPoints:[
			{label: "Net Cash", y: 84.6},
			{label: "Research & Development", y: 348.4}
			]
		},
		{
			type: "column",	
			name: "2012 - 2013",
			legendText: "2012 - 2013",
			showInLegend: true, 
			dataPoints:[
			{label: "Net", y: 104.6},
			{label: "Research & Development", y: 428.2}
			]
		}
		
		],
      legend:{
        cursor:"pointer",
        itemclick: function(e){
          if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          	e.dataSeries.visible = false;
          }
          else {
            e.dataSeries.visible = true;
          }
        	chart.render();
        }
      },
    });

chart.render();

var chart = new CanvasJS.Chart("chartContainer2",
    {
		title:{
			text: "Ubisoft’s Sales Performance in Fiscal 2012-13"
		},
	            animationEnabled: true,
		legend:{
			verticalAlign: "bottom",
			horizontalAlign: "center"
		},
		data: [
	{
			indexLabelFontFamily: "Monospace",       
			indexLabelFontColor: "darkgrey", 
			indexLabelLineColor: "darkgrey",
			type: "pie",       
			showInLegend: true,
			toolTipContent: "{y} - <strong>Million in Revenue</strong>",
			dataPoints: [
				{  y: 928, legendText:"AAA Games"},
				{  y: 328, legendText:"Casual Games"},
				{  y: 148, legendText:"Digital Sales"},
				{  y: 206, legendText:"Back-Catalog Sales"}
            ]
        },
        ]
    });
chart.render();

