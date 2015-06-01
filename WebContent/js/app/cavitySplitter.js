$(document).ready(
		function() {
			var cavitySplitterTable = $('#cavitySplitterTable').dataTable();
			var cavityCouplerTable = $('#cavityCouplerTable').dataTable();

			cavitySplitterTable.fnClearTable();

			var cavitySplitterJson = [ {
				"parameter" : "KT/CAVITY/SPLITTER/2WAY/01",
				"frequency" : "800 to 2500",
				"vswr" : "≤ 1.5:1",
				"noOfPorts" : "2",
				"insertionLoss" : "<0.05dB",
				"splitLoss" : "3",
				"powerHandling" : "100",
				"impedance" : "50",
				"connector" : "N female",
				"dimension" : "215 X 70 X 25"
			}, {
				"parameter" : "KT/CAVITY/SPLITTER/3WAY/01",
				"frequency" : "800 to 2500",
				"vswr" : "≤ 1.5:1",
				"noOfPorts" : "4.7",
				"insertionLoss" : "<0.05dB",
				"splitLoss" : "3",
				"powerHandling" : "100",
				"impedance" : "50",
				"connector" : "N female",
				"dimension" : "240 X 70 X 25"
			}, {
				"parameter" : "KT/CAVITY/SPLITTER/4WAY/01",
				"frequency" : "800 to 2500",
				"vswr" : "≤ 1.5:1",
				"noOfPorts" : "6",
				"insertionLoss" : "<0.05dB",
				"splitLoss" : "3",
				"powerHandling" : "100",
				"impedance" : "50",
				"connector" : "N female",
				"dimension" : "240 X 70 X 50"
			} ]

			for (var i = 0; i < cavitySplitterJson.length; i++) {
				var data = cavitySplitterJson[i];
				cavitySplitterTable.fnAddData([ data.parameter, data.frequency,
						data.vswr, data.noOfPorts, data.insertionLoss,
						data.splitLoss, data.powerHandling, data.impedance,
						data.connector, data.dimension ]);
			}

			var cavityCouplerJson = [ {
				"parameter" : "KT/Coupler/5 db/01",
				"design" : "Cavity",
				"frequency" : "800 to 2500",
				"vswr" : "≤ 1.3:1",
				"insertionLoss" : "<0.05dB",
				"throughLoss" : "1.2",
				"coupling" : "6.2",
				"powerHandling" : "100",
				"impedance" : "50",
				"connector" : "N female",
				"dimension" : "135 X 25 X 25"
			}, {
				"parameter" : "KT/Coupler/6 db/01",
				"design" : "Cavity",
				"frequency" : "800 to 2500",
				"vswr" : "≤ 1.3:1",
				"insertionLoss" : "<0.05dB",
				"throughLoss" : "1",
				"coupling" : "7",
				"powerHandling" : "100",
				"impedance" : "50",
				"connector" : "N female",
				"dimension" : "135 X 25 X 25"
			}, {
				"parameter" : "KT/Coupler/7 db/01",
				"design" : "Cavity",
				"frequency" : "800 to 2500",
				"vswr" : "≤ 1.3:1",
				"insertionLoss" : "<0.05dB",
				"throughLoss" : "0.8",
				"coupling" : "7.8",
				"powerHandling" : "100",
				"impedance" : "50",
				"connector" : "N female",
				"dimension" : "135 X 25 X 25"
			}, {
				"parameter" : "KT/Coupler/10 db/01",
				"design" : "Cavity",
				"frequency" : "800 to 2500",
				"vswr" : "≤ 1.3:1",
				"insertionLoss" : "<0.05dB",
				"throughLoss" : "0.4",
				"coupling" : "10.4",
				"powerHandling" : "100",
				"impedance" : "50",
				"connector" : "N female",
				"dimension" : "135 X 25 X 25"
			}, {
				"parameter" : "KT/Coupler/15 db/01",
				"design" : "Cavity",
				"frequency" : "800 to 2500",
				"vswr" : "≤ 1.3:1",
				"insertionLoss" : "<0.05dB",
				"throughLoss" : "0.1",
				"coupling" : "15.1",
				"powerHandling" : "100",
				"impedance" : "50",
				"connector" : "N female",
				"dimension" : "135 X 25 X 25"
			}, {
				"parameter" : "KT/Coupler/20 db/01",
				"design" : "Cavity",
				"frequency" : "800 to 2500",
				"vswr" : "≤ 1.3:1",
				"insertionLoss" : "<0.05dB",
				"throughLoss" : "<0.1",
				"coupling" : "20",
				"powerHandling" : "100",
				"impedance" : "50",
				"connector" : "N female",
				"dimension" : "135 X 25 X 25"
			}, {
				"parameter" : "KT/Coupler/30 db/01",
				"design" : "Cavity",
				"frequency" : "800 to 2500",
				"vswr" : "≤ 1.3:2",
				"insertionLoss" : "<0.05dB",
				"throughLoss" : "<0.1",
				"coupling" : "30",
				"powerHandling" : "100",
				"impedance" : "50",
				"connector" : "N female",
				"dimension" : "136 X 25 X 25"
			}, {
				"parameter" : "KT/Coupler/40 db/01",
				"design" : "Cavity",
				"frequency" : "800 to 2500",
				"vswr" : "≤ 1.3:2",
				"insertionLoss" : "<0.05dB",
				"throughLoss" : "<0.1",
				"coupling" : "40",
				"powerHandling" : "100",
				"impedance" : "50",
				"connector" : "N female",
				"dimension" : "136 X 25 X 25"
			} ]

			for (var i = 0; i < cavityCouplerJson.length; i++) {
				var data = cavityCouplerJson[i];
				cavityCouplerTable.fnAddData([ data.parameter, data.design, data.frequency,
						data.vswr, data.insertionLoss,
						data.throughLoss, data.coupling, data.powerHandling, data.impedance,
						data.connector, data.dimension ]);
			}

		});