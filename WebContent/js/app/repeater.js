$(document).ready(
		function() {
			var repeaterTable = $('#repeaterTable').dataTable();

			var repeaterJsonData = [ {
				"parameter" : "CDMA",
				"type" : "Full Band/ Band Selective",
				"gain" : "40-80",
				"vswr" : "≤ 2.5:1",
				"power" : "5mW-5W",
				"connector" : "N Male"
			}, {
				"parameter" : "GSM (900MHz)",
				"type" : "Full Band/ Band Selective",
				"gain" : "40-80",
				"vswr" : "≤ 2.5:1",
				"power" : "5mW-5W",
				"connector" : "N Male"
			}, {
				"parameter" : "DCS 1800MHz",
				"type" : "Full Band/ Band Selective",
				"gain" : "40-80",
				"vswr" : "≤ 2.5:1",
				"power" : "5mW-5W",
				"connector" : "N Male"
			}, {
				"parameter" : "3G/WCDMA",
				"type" : "Full Band/ Band Selective",
				"gain" : "40-80",
				"vswr" : "≤ 2.5:1",
				"power" : "5mW-5W",
				"connector" : "N Male"
			}, {
				"parameter" : "DUAL BAND",
				"type" : "Full Band/ Band Selective",
				"gain" : "40-80",
				"vswr" : "≤ 2.5:1",
				"power" : "5mW-5W",
				"connector" : "N Male"
			}, {
				"parameter" : "TRI BAND",
				"type" : "Full Band/ Band Selective",
				"gain" : "40-80",
				"vswr" : "≤ 2.5:1",
				"power" : "5mW-5W",
				"connector" : "N Male"
			} ];

			repeaterTable.fnClearTable();

			for (var i = 0; i < repeaterJsonData.length; i++) {
				var data = repeaterJsonData[i];
				repeaterTable.fnAddData([ data.parameter, data.type, data.gain,
						data.vswr, data.power, data.connector ]);
			}
		});