$(document).ready(
		function() {
			var btsAccessoriesTable = $('#btsAccessoriesTable').dataTable();

			btsAccessoriesTable.fnClearTable();

			var btsAccesoriesJson = [ {
				"parameter" : "KT/RF LOAD/1 W/01",
				"typeOfRepeaters" : "Continues",
				"frequency" : "DC-2500",
				"vswr" : "≤ 1.5:1",
				"powerHandling" : "1",
				"impedance" : "50",
				"connector" : "N Male",
				"dimension" : "50 X 25"
			}, {
				"parameter" : "KT/RF LOAD/2 W/01",
				"typeOfRepeaters" : "Continues",
				"frequency" : "DC-2500",
				"vswr" : "≤ 1.5:1",
				"powerHandling" : "2",
				"impedance" : "50",
				"connector" : "N Male",
				"dimension" : "50 X 25"
			}, {
				"parameter" : "KT/RF LOAD/5 W/01",
				"typeOfRepeaters" : "Continues",
				"frequency" : "DC-2500",
				"vswr" : "≤ 1.5:1",
				"powerHandling" : "5",
				"impedance" : "50",
				"connector" : "N Male",
				"dimension" : "50 X 40"
			}, {
				"parameter" : "KT/RF LOAD/10 W/01",
				"typeOfRepeaters" : "Continues",
				"frequency" : "DC-2500",
				"vswr" : "≤ 1.5:1",
				"powerHandling" : "10",
				"impedance" : "50",
				"connector" : "N Male",
				"dimension" : "70 X 40"
			}, {
				"parameter" : "KT/RF LOAD/50 W/01",
				"typeOfRepeaters" : "Continues",
				"frequency" : "DC-2500",
				"vswr" : "≤ 1.5:1",
				"powerHandling" : "50",
				"impedance" : "50",
				"connector" : "N Male",
				"dimension" : "138 X 55"
			}, {
				"parameter" : "KT/RF LOAD/50 W/03",
				"typeOfRepeaters" : "Non Continues",
				"frequency" : "DC-2500",
				"vswr" : "≤ 1.5:1",
				"powerHandling" : "50",
				"impedance" : "50",
				"connector" : "DIN (M)",
				"dimension" : "115 X 105 X 105"
			}, {
				"parameter" : "KT/RF LOAD/100 W/01",
				"typeOfRepeaters" : "Non Continues",
				"frequency" : "DC-2500",
				"vswr" : "≤ 1.5:1",
				"powerHandling" : "100",
				"impedance" : "50",
				"connector" : "N Male",
				"dimension" : "160 X 105 X 90"
			}, {
				"parameter" : "KT/RF LOAD/1 W/03",
				"typeOfRepeaters" : "Non Continues",
				"frequency" : "DC-2500",
				"vswr" : "≤ 1.5:1",
				"powerHandling" : "100",
				"impedance" : "50",
				"connector" : "DIN (M)",
				"dimension" : "160 X 105 X 90"
			} ]

			for (var i = 0; i < btsAccesoriesJson.length; i++) {
				var data = btsAccesoriesJson[i];
				btsAccessoriesTable.fnAddData([ data.parameter,
						data.typeOfRepeaters, data.frequency, data.vswr,
						data.powerHandling, data.impedance, data.connector,
						data.dimension ]);
			}

		});