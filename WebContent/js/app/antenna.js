$(document).ready(
		function() {
			var patchPanelTable = $('#patchPanelTbl').dataTable();
			var ceilingTable = $('#ceilingTbl').dataTable();
			var yagiTable = $('#yagiTbl').dataTable();

			var patchPanelData = [ {
				"parameter" : "KT/PATCH/8dBi",
				"frequency" : "824 to 960",
				"gain" : "8",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Single Vertical",
				"F/B Ratio (dB)" : "20",
				"powerHandling" : "100",
				"HPBW-Vertical" : "85",
				"HPBW-Horizontal" : "40",
				"Impedance (Ohms)" : "50",
				"connector" : "N female",
				"Dimension (mm)" : "136 X 136 X 30"
			}, {
				"parameter" : "KT/PATCH/12dBi",
				"frequency" : "824 to 960",
				"gain" : "8",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Single Vertical",
				"F/B Ratio (dB)" : "20",
				"powerHandling" : "100",
				"HPBW-Vertical" : "90",
				"HPBW-Horizontal" : "50",
				"Impedance (Ohms)" : "50",
				"connector" : "N female",
				"Dimension (mm)" : "260 X 260 X 30"
			}, {
				"parameter" : "KT/FB/PANEL/001",
				"frequency" : "824 to 960 & 1710-2500",
				"gain" : "8",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Single Vertical",
				"F/B Ratio (dB)" : "20",
				"powerHandling" : "100",
				"HPBW-Vertical" : "70",
				"HPBW-Horizontal" : "90",
				"independence" : "50",
				"connector" : "N female",
				"Dimension (mm)" : "210 X 180 X 40"
			} ]

			var ceilingJson = [ {
				"parameter" : "KT/3G/CEALING/001",
				"frequency" : "800 to 960 & 1710 to 2170",
				"gain" : "3",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Vertical or Horizontal",
				"powerHandling" : "100",
				"HPBW-Horizontal" : "360",
				"Impedance (Ohms)" : "50",
				"connector" : "N female",
				"Dimension (mm)" : "130 Dia X 140"
			}, {
				"parameter" : "KT/3G/OMNI/FLAT/001",
				"frequency" : "800 to 2500",
				"gain" : "3",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Vertical or Horizontal",
				"powerHandling" : "100",
				"HPBW-Horizontal" : "360",
				"Impedance (Ohms)" : "50",
				"connector" : "N female",
				"Dimension (mm)" : "130 X 90"
			} ]

			var yagiJson = [ {
				"parameter" : "KT/900/YAGI/8dBi",
				"frequency" : "824 to 960",
				"gain" : "8",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Horizontal Vertical",
				"F/B Ratio (dB)" : "20",
				"powerHandling" : "100",
				"HPBW-Vertical" : "85",
				"HPBW-Horizontal" : "40",
				"Impedance (Ohms)" : "50",
				"connector" : "N female",
				"Dimension (mm)" : "400 X 200"
			}, {
				"parameter" : "KT/900/YAGI/10dBi",
				"frequency" : "824 to 960",
				"gain" : "12",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Single Vertical",
				"F/B Ratio (dB)" : "20",
				"powerHandling" : "100",
				"HPBW-Vertical" : "90",
				"HPBW-Horizontal" : "50",
				"Impedance (Ohms)" : "50",
				"connector" : "N female",
				"Dimension (mm)" : "600 X 200"
			}, {
				"parameter" : "KT/900/YAGI/14dBi",
				"frequency" : "824 to 960",
				"gain" : "14",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Single Vertical",
				"F/B Ratio (dB)" : "20",
				"powerHandling" : "100",
				"HPBW-Vertical" : "70",
				"HPBW-Horizontal" : "90",
				"independence" : "50",
				"connector" : "N female",
				"Dimension (mm)" : "900 X 200"
			}, {
				"parameter" : "KT/900/YAGI/8dBi",
				"frequency" : "824 to 960",
				"gain" : "8",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Horizontal Vertical",
				"F/B Ratio (dB)" : "20",
				"powerHandling" : "100",
				"HPBW-Vertical" : "85",
				"HPBW-Horizontal" : "40",
				"Impedance (Ohms)" : "50",
				"connector" : "N female",
				"Dimension (mm)" : "450 X 200"
			}, {
				"parameter" : "KT/900/YAGI/10dBi",
				"frequency" : "824 to 960",
				"gain" : "12",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Single Vertical",
				"F/B Ratio (dB)" : "20",
				"powerHandling" : "100",
				"HPBW-Vertical" : "85",
				"HPBW-Horizontal" : "40",
				"Impedance (Ohms)" : "50",
				"connector" : "N female",
				"Dimension (mm)" : "660 X 200"
			}, {
				"parameter" : "KT/900/YAGI/14dBi",
				"frequency" : "824 to 960",
				"gain" : "14",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Single Vertical",
				"F/B Ratio (dB)" : "20",
				"powerHandling" : "100",
				"HPBW-Vertical" : "90",
				"HPBW-Horizontal" : "50",
				"Impedance (Ohms)" : "50",
				"connector" : "N female",
				"Dimension (mm)" : "900 X 200"
			}, {
				"parameter" : "KT/FullBand/YAGI/12dBi",
				"frequency" : "824 to 960 & 1710 to 2170",
				"gain" : "12",
				"vswr" : "2.1 Max",
				"polarization" : "Horizontal Vertical",
				"F/B Ratio (dB)" : "20",
				"powerHandling" : "100",
				"HPBW-Vertical" : "35",
				"HPBW-Horizontal" : "45",
				"Impedance (Ohms)" : "50",
				"connector" : "N female",
				"Dimension (mm)" : "660 X 200"
			}, {
				"parameter" : "KT/FULLBAND/YAGI/14dBi",
				"frequency" : "824 to 960 & 1710-2170",
				"gain" : "14",
				"vswr" : "≤ 2.1 Max",
				"polarization" : "Single Vertical",
				"F/B Ratio (dB)" : "20",
				"powerHandling" : "100",
				"HPBW-Vertical" : "70",
				"HPBW-Horizontal" : "90",
				"independence" : "50",
				"connector" : "N female",
				"Dimension (mm)" : "900 X 200"
			} ]
			patchPanelTable.fnClearTable();
			yagiTable.fnClearTable();
			ceilingTable.fnClearTable();

			for (var i = 0; i < patchPanelData.length; i++) {
				var data = patchPanelData[i];
				patchPanelTable.fnAddData([ data.parameter, data.frequency, data.gain,
						data.vswr, data.polarization, data.fbRatio,
						data.powerHandling, data.hpbwHorizontal,
						data.hpbwVertical, data.impedence, data.connector,
						data.dimension ]);
			}

			for (var i = 0; i < yagiJson.length; i++) {
				var data = yagiJson[i];
				yagiTable.fnAddData([ data.parameter, data.frequency,
						data.gain, data.vswr, data.polarization, data.fbRatio,
						data.powerHandling, data.hpbwHorizontal,
						data.hpbwVertical, data.impedence, data.connector,
						data.dimension ]);
			}

			for (var i = 0; i < ceilingJson.length; i++) {
				var data = ceilingJson[i];
				ceilingTable
						.fnAddData([ data.parameter, data.frequency,
										data.gain, data.vswr, data.polarization,
										data.powerHandling, data.hpbwHorizontal,
										data.impedence, data.connector,
										data.dimension ]);
			}
		});