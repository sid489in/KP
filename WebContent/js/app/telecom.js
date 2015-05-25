$(document).ready(
		function() {
			var poiTable = $('#poiTable').dataTable({
				bJQueryUI : true
			});
			var wideBandTable = $('#wideBandTbl').dataTable();
			var filterTypeTable = $('#filterTypeTbl').dataTable();

			var poiJsonData = [ {
				"parameter" : "KT/POI/4:2",
				"frequency" : "800 to 2500",
				"ports" : "CDMA/GSM/DCS/3G/WI-FI",
				"vswr" : "≤ 1.5:1",
				"noPorts" : "6",
				"insertionLoss" : "8 dB",
				"powerHandling" : "100",
				"independence" : "50",
				"connector" : "N female"
			}, {
				"parameter" : "KT/POI/8:4",
				"frequency" : "800 to 2500",
				"ports" : "CDMA/GSM/DCS/3G/WI-FI",
				"vswr" : "≤ 1.5:1",
				"noPorts" : "12",
				"insertionLoss" : "8 dB",
				"powerHandling" : "100",
				"independence" : "50",
				"connector" : "N female"
			}, {
				"parameter" : "KT/POI/10:4",
				"frequency" : "800 to 2500",
				"ports" : "CDMA/GSM/DCS/3G/WI-FI",
				"vswr" : "≤ 1.5:1",
				"noPorts" : "14",
				"insertionLoss" : "9 dB",
				"powerHandling" : "100",
				"independence" : "50",
				"connector" : "N female"
			} ];

			var wideBandJsonDat = [ {
				"parameter" : "KT/RF/WCOM/2:1/01",
				"frequency" : "800 to 2500",
				"vswr" : "≤ 1.5:1",
				"noPorts" : "3",
				"insertionLoss" : "<0.5 dB",
				"splitLoss" : "3",
				"powerHandling" : "100",
				"independence" : "50",
				"connector" : "N female"
			}, {
				"parameter" : "KT/RF/WCOM/2:2/01",
				"frequency" : "800 to 2500",
				"vswr" : "≤ 1.5:1",
				"noPorts" : "4",
				"insertionLoss" : "<0.5 dB",
				"splitLoss" : "3",
				"powerHandling" : "100",
				"independence" : "50",
				"connector" : "N female"
			}, {
				"parameter" : "KT/RF/WCOM/3:1/01",
				"frequency" : "800 to 2500",
				"vswr" : "≤ 1.5:1",
				"noPorts" : "4",
				"insertionLoss" : "<0.5 dB",
				"splitLoss" : "4.5",
				"powerHandling" : "100",
				"independence" : "50",
				"connector" : "N female"
			}, {
				"parameter" : "KT/RF/WCOM/3:2/01",
				"frequency" : "801 to 2500",
				"vswr" : "≤ 1.5:1",
				"noPorts" : "5",
				"insertionLoss" : "<0.5 dB",
				"splitLoss" : "4.5",
				"powerHandling" : "100",
				"independence" : "50",
				"connector" : "N female"
			}, {
				"parameter" : "KT/RF/WCOM/4:1/01",
				"frequency" : "802 to 2500",
				"vswr" : "≤ 1.5:1",
				"noPorts" : "5",
				"insertionLoss" : "<0.5 dB",
				"splitLoss" : "6.5",
				"powerHandling" : "100",
				"independence" : "50",
				"connector" : "N female"
			}, {
				"parameter" : "KT/RF/WCOM/4:2/01",
				"frequency" : "803 to 2500",
				"vswr" : "≤ 1.5:1",
				"noPorts" : "6",
				"insertionLoss" : "<0.5 dB",
				"splitLoss" : "6.5",
				"powerHandling" : "100",
				"independence" : "50",
				"connector" : "N female"
			}, {
				"parameter" : "KT/RF/WCOM/4:4/01",
				"frequency" : "804 to 2500",
				"vswr" : "≤ 1.5:1",
				"noPorts" : "8",
				"insertionLoss" : "<0.5 dB",
				"splitLoss" : "6.5",
				"powerHandling" : "100",
				"independence" : "50",
				"connector" : "N female"
			} ]

			var filterTypeJson = [ {
				"parameter" : "KT/RF/FCOM/2:1/01",
				"frequency" : "800 to 2500",
				"vswr" : "≤ 1.5:1",
				"noPorts" : "3",
				"insertionLoss" : "<0.8 dB",
				"powerHandling" : "100",
				"independence" : "50",
				"connector" : "N female"
			}, {
				"parameter" : "KT/RF/FCOM/3:1/01",
				"frequency" : "800 to 2500",
				"vswr" : "≤ 1.5:1",
				"noPorts" : "4",
				"insertionLoss" : "<0.8 dB",
				"powerHandling" : "100",
				"independence" : "50",
				"connector" : "N female"
			} ]
			poiTable.fnClearTable();
			wideBandTable.fnClearTable();
			filterTypeTable.fnClearTable();

			for (var i = 0; i < poiJsonData.length; i++) {
				var data = poiJsonData[i];
				poiTable.fnAddData([ data.parameter, data.frequency,
						data.ports, data.vswr, data.noPorts,
						data.insertionLoss, data.powerHandling,
						data.independence, data.connector ]);
			}

			for (var i = 0; i < wideBandJsonDat.length; i++) {
				var data = wideBandJsonDat[i];
				wideBandTable.fnAddData([ data.parameter, data.frequency,
						data.vswr, data.noPorts, data.insertionLoss,
						data.splitLoss, data.powerHandling, data.independence,
						data.connector ]);
			}

			for (var i = 0; i < filterTypeJson.length; i++) {
				var data = filterTypeJson[i];
				filterTypeTable
						.fnAddData([ data.parameter, data.frequency, data.vswr,
								data.noPorts, data.insertionLoss,
								data.powerHandling, data.independence,
								data.connector ]);
			}
		});