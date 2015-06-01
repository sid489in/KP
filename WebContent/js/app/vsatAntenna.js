$(document).ready(
		function() {
			var vsatAntennaTable = $('#vsatAntennaTable').dataTable();
			vsatAntennaTable.fnClearTable();

			var vsatAntennaJson = [ {
				"parameter" : "Vsat Antenna",
				"frequency" : "Ku / C",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Linear",
				"powerHandling" : "1000",
				"elevation" : "50",
				"material" : "GFPR/Carbon Fiber/Aluminium"
			} ]

			for (var i = 0; i < vsatAntennaJson.length; i++) {
				var data = vsatAntennaJson[i];
				vsatAntennaTable.fnAddData([ data.parameter, data.frequency,
						data.vswr, data.polarization, data.powerHandling,
						data.elevation, data.material ]);
			}
		});