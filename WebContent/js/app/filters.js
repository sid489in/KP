$(document).ready(
		function() {
			var duplexerTable = $('#duplexerTable').dataTable();
			var bandPassFilterTable = $('#bandPassFilterTable').dataTable();
			var lcFilterTable = $('#lcFilterTable').dataTable();

			duplexerTable.fnClearTable();

			var duplexerJson = [ {
				"parameter" : "KT/RF/DUP/2:1/01",
				"frequency" : "800 to 8500",
				"vswr" : "≤ 1.5:1",
				"noOfPorts" : "3",
				"insertionLoss" : "Customized",
				"isolation" : "Customized",
				"powerHandling" : "100",
				"impedance" : "50",
				"connector" : "N female"
			} ]

			for (var i = 0; i < duplexerJson.length; i++) {
				var data = duplexerJson[i];
				duplexerTable.fnAddData([ data.parameter, data.frequency,
						data.vswr, data.noOfPorts, data.insertionLoss,
						data.isolation, data.powerHandling, data.impedance,
						data.connector ]);
			}

			var bandPassFilterJson = [ {
				"parameter" : "KT/RF/BPF/01",
				"frequency" : "60 to 8500",
				"vswr" : "≤ 1.5:1",
				"noOfPorts" : "2",
				"insertionLoss" : "Customized",
				"isolation" : "Customized",
				"powerHandling" : "100",
				"impedance" : "50",
				"connector" : "N female"
			} ]

			for (var i = 0; i < bandPassFilterJson.length; i++) {
				var data = bandPassFilterJson[i];
				bandPassFilterTable.fnAddData([ data.parameter, data.frequency,
						data.vswr, data.noOfPorts, data.insertionLoss,
						data.isolation, data.powerHandling, data.impedance,
						data.connector ]);
			}

			var lcFilterJson = [ {
				"parameter" : "KT/RF/LC/01",
				"frequency" : "60 to 8500",
				"vswr" : "≤ 1.5:1",
				"noOfPorts" : "2",
				"insertionLoss" : "Customized",
				"isolation" : "Customized",
				"powerHandling" : "100",
				"impedance" : "50",
				"connector" : "N female"
			} ]
			
			for (var i = 0; i < lcFilterJson.length; i++) {
				var data = lcFilterJson[i];
				lcFilterTable.fnAddData([ data.parameter, data.frequency,
						data.vswr, data.noOfPorts, data.insertionLoss,
						data.isolation, data.powerHandling, data.impedance,
						data.connector ]);
			}
		});