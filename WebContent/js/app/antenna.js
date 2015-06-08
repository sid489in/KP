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
				"fbRatio" : "20",
				"powerHandling" : "100",
				"hpbwVertical" : "85",
				"hpbwHorizontal" : "40",
				"impedence" : "50",
				"connector" : "N female",
				"dimension" : "136 X 136 X 30"
			}, {
				"parameter" : "KT/PATCH/12dBi",
				"frequency" : "824 to 960",
				"gain" : "8",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Single Vertical",
				"fbRatio" : "20",
				"powerHandling" : "100",
				"hpbwVertical" : "90",
				"hpbwHorizontal" : "50",
				"impedence" : "50",
				"connector" : "N female",
				"dimension" : "260 X 260 X 30"
			}, {
				"parameter" : "KT/FB/PANEL/001",
				"frequency" : "824 to 960 & 1710-2500",
				"gain" : "8",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Single Vertical",
				"fbRatio" : "20",
				"powerHandling" : "100",
				"hpbwVertical" : "70",
				"hpbwHorizontal" : "90",
				"impedence" : "50",
				"connector" : "N female",
				"dimension" : "210 X 180 X 40"
			} ]

			patchPanelTable.fnClearTable();

			for (var i = 0; i < patchPanelData.length; i++) {
				var data = patchPanelData[i];
				patchPanelTable.fnAddData([ data.parameter, data.frequency, data.gain,
						data.vswr, data.polarization, data.fbRatio,
						data.powerHandling, data.hpbwHorizontal,
						data.hpbwVertical, data.impedence, data.connector,
						data.dimension ]);
			}
			var ceilingJson = [ {
				"parameter" : "KT/3G/CEALING/001",
				"frequency" : "800 to 960 & 1710 to 2170",
				"gain" : "3",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Vertical or Horizontal",
				"powerHandling" : "100",
				"hpbwHorizontal" : "360",
				"impedence" : "50",
				"connector" : "N female",
				"dimension" : "130 Dia X 140"
			}, {
				"parameter" : "KT/3G/OMNI/FLAT/001",
				"frequency" : "800 to 2500",
				"gain" : "3",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Vertical or Horizontal",
				"powerHandling" : "100",
				"hpbwHorizontal" : "360",
				"impedence" : "50",
				"connector" : "N female",
				"dimension" : "130 X 90"
			} ]
			
			var yagiJson = [ {
				"parameter" : "KT/900/YAGI/8dBi",
				"frequency" : "824 to 960",
				"gain" : "8",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Horizontal Vertical",
				"fbRatio" : "20",
				"powerHandling" : "100",
				"hpbwVertical" : "85",
				"hpbwHorizontal" : "40",
				"impedence" : "50",
				"connector" : "N female",
				"dimension" : "400 X 200"
			}, {
				"parameter" : "KT/900/YAGI/10dBi",
				"frequency" : "824 to 960",
				"gain" : "12",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Single Vertical",
				"fbRatio" : "20",
				"powerHandling" : "100",
				"hpbwVertical" : "90",
				"hpbwHorizontal" : "50",
				"impedence" : "50",
				"connector" : "N female",
				"dimension" : "600 X 200"
			}, {
				"parameter" : "KT/900/YAGI/14dBi",
				"frequency" : "824 to 960",
				"gain" : "14",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Single Vertical",
				"fbRatio" : "20",
				"powerHandling" : "100",
				"hpbwVertical" : "70",
				"hpbwHorizontal" : "90",
				"impedence" : "50",
				"connector" : "N female",
				"dimension" : "900 X 200"
			}, {
				"parameter" : "KT/900/YAGI/8dBi",
				"frequency" : "824 to 960",
				"gain" : "8",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Horizontal Vertical",
				"fbRatio" : "20",
				"powerHandling" : "100",
				"hpbwVertical" : "85",
				"hpbwHorizontal" : "40",
				"impedence" : "50",
				"connector" : "N female",
				"dimension" : "450 X 200"
			}, {
				"parameter" : "KT/900/YAGI/10dBi",
				"frequency" : "824 to 960",
				"gain" : "12",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Single Vertical",
				"fbRatio" : "20",
				"powerHandling" : "100",
				"hpbwVertical" : "85",
				"hpbwHorizontal" : "40",
				"impedence" : "50",
				"connector" : "N female",
				"dimension" : "660 X 200"
			}, {
				"parameter" : "KT/900/YAGI/14dBi",
				"frequency" : "824 to 960",
				"gain" : "14",
				"vswr" : "≤ 1.5:1",
				"polarization" : "Single Vertical",
				"fbRatio" : "20",
				"powerHandling" : "100",
				"hpbwVertical" : "90",
				"hpbwHorizontal" : "50",
				"impedence" : "50",
				"connector" : "N female",
				"dimension" : "900 X 200"
			}, {
				"parameter" : "KT/FullBand/YAGI/12dBi",
				"frequency" : "824 to 960 & 1710 to 2170",
				"gain" : "12",
				"vswr" : "2.1 Max",
				"polarization" : "Horizontal Vertical",
				"fbRatio" : "20",
				"powerHandling" : "100",
				"hpbwVertical" : "35",
				"hpbwHorizontal" : "45",
				"impedence" : "50",
				"connector" : "N female",
				"dimension" : "660 X 200"
			}, {
				"parameter" : "KT/FULLBAND/YAGI/14dBi",
				"frequency" : "824 to 960 & 1710-2170",
				"gain" : "14",
				"vswr" : "≤ 2.1 Max",
				"polarization" : "Single Vertical",
				"fbRatio" : "20",
				"powerHandling" : "100",
				"hpbwVertical" : "70",
				"hpbwHorizontal" : "90",
				"impedence" : "50",
				"connector" : "N female",
				"dimension" : "900 X 200"
			} ]
			yagiTable.fnClearTable();
			ceilingTable.fnClearTable();


			/*for (var i = 0; i < yagiJson.length; i++) {
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
			}*/
		});