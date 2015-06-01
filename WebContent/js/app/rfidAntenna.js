$(document).ready(
		function() {
			var rfidAntennaTable = $('#rfidAntennaTable').dataTable();
			rfidAntennaTable.fnClearTable();

			var rfidAntennaJson = [ {
				"parameter" : "KT/13.56/RFID/PAD/01",
				"frequency" : "13.56",
				"readRange" : "25cm",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Circular",
				"tagReading" : "3D",
				"powerHandling" : "1000",
				"HPBWHorizontal" : "N/A",
				"impedance" : "50",
				"connector" : "SMA Male",
				"dimension" : "250 X 250 X 30"
			}, {
				"parameter" : "TRFID/13.56/WT",
				"frequency" : "13.56",
				"readRange" : "1.2 Mtr",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Circular",
				"tagReading" : "3D",
				"powerHandling" : "1000",
				"HPBWHorizontal" : "N/A",
				"impedance" : "50",
				"connector" : "SMA Male",
				"dimension" : "2050 X 550 X 70"
			}, {
				"parameter" : "KT/RFID/UHF/CP/PANEL/01",
				"frequency" : "860-870",
				"readRange" : "3 Mtr",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Circular",
				"tagReading" : "3D",
				"powerHandling" : "1000",
				"HPBWHorizontal" : "N/A",
				"impedance" : "50",
				"connector" : "SMA Male",
				"dimension" : "250 X 250 X 30"
			} ]

			for (var i = 0; i < rfidAntennaJson.length; i++) {
				var data = rfidAntennaJson[i];
				rfidAntennaTable.fnAddData([ data.parameter, data.frequency,
						data.readRange, data.vswr, data.polarization,
						data.tagReading, data.powerHandling,
						data.HPBWHorizontal, data.impedance, data.connector,
						data.dimension ]);
			}
		});