var counter = 1;
var teamNumber = 0;
var scouterName = "";
var matchNumber = 0;
var autoMobility = false;
var autoDock = false;
var autoEngage = false;
var autoCone = 0;
var autoCube = 0;
var teleopPark = false;
var teleopDock = false;
var teleopEngage = false;
var teleopCone = 0;
var teleopCube = 0;
var autoHighCone = 0;
var autoHighCube = 0;
var autoMidCone = 0;
var autoMidCube = 0;
var autoLowCone = 0;
var autoLowCube = 0;
var teleopHighCone = 0;
var teleopHighCube = 0;
var teleopMidCone = 0;
var teleopMidCube = 0;
var teleopLowCone = 0;
var teleopLowCube = 0;
var comments = "";
var points = 0;
var length = 29;
var height = 121;
var loc = "";
var data = new Array(length);
for (var i = 0; i < height; i++) {
  data[i] = new Array(length);
}
var list = ["teamNumber", "scouterName", "matchNumber", "autoMobility", "autoDock", "autoEngage", "autoCone", "autoCube", "teleopPark", "teleopDock", "teleopEngage", "teleopCone", "teleopCube", "autoHighCone", "autoHighCube", "autoMidCone", "autoMidCube", "autoLowCone", "autoLowCube", "teleopHighCone", "teleopHighCube", "teleopMidCone", "teleopMidCube", "teleopLowCone", "teleopLowCube", "comments", "Auto Points", "Teleop Points", "points"];
for (var i = 0; i < list.length; i++) {
  data[0][i] = list[i];
}
var sessionData = new Array(length);
//continue buttons
onEvent("continueHome", "click", function () {
  if (getText("allianceDropdown") == "Left" && getText("scouterNameInput") != "" && getNumber("teamNumberInput") <= 9999 && getNumber("teamNumberInput") >= 1 && getNumber("matchNumberInput") >= 1 && getNumber("matchNumberInput") <= 250) {
    setScreen("autoLeft");
  } else if (getText("allianceDropdown") == "Right" && getText("scouterNameInput") != "" && getNumber("teamNumberInput") <= 9999 && getNumber("teamNumberInput") >= 1 && getNumber("matchNumberInput") >= 1 && getNumber("matchNumberInput") <= 250) {
    setScreen("autoRight");
  }
  teamNumber = getNumber("teamNumberInput");
  scouterName = getText("scouterNameInput");
  matchNumber = getNumber("matchNumberInput");
  if (getText("teamNumberInput") == "" || getText("scouterNameInput") == "" || getText("matchNumberInput") == "" || teamNumber > 9999 || teamNumber < 1 || matchNumber < 1 || matchNumber > 250) {
    showElement("warning");
	showElement("transparentWarning");
    setTimeout(function () {
      hideElement("warning");
	  hideElement("transparentWarning");
    }, 5000);
  }
});
onEvent("continueTeleopRight", "click", function () {
  if (getChecked("checkboxTRPark") == true) {
    teleopPark = true;
  } else if (getChecked("checkboxTRPark") == false) {
    teleopPark = false;
  }
  if (getChecked("checkboxTRDocked") == true) {
    teleopDock = true;
  } else if (getChecked("checkboxTRDocked") == false) {
    teleopDock = false;
  }
  if (getChecked("checkboxTREngaged") == true) {
    teleopEngage = true;
  } else if (getChecked("checkboxTREngaged") == false) {
    teleopEngage = false;
  }
  loc = "Teleop Right";
  setScreen("final");
});
onEvent("continueTeleopLeft", "click", function () {
  if (getChecked("checkboxTLPark") == true) {
    teleopPark = true;
  } else if (getChecked("checkboxTLPark") == false) {
    teleopPark = false;
  }
  if (getChecked("checkboxTLDocked") == true) {
    teleopDock = true;
  } else if (getChecked("checkboxTLDocked") == false) {
    teleopDock = false;
  }
  if (getChecked("checkboxTLEngaged") == true) {
    teleopEngage = true;
  } else if (getChecked("checkboxTLEngaged") == false) {
    teleopEngage = false;
  }
  loc = "Teleop Left";
  setScreen("final");
});
onEvent("continueAutoRight", "click", function () {
  if (getChecked("checkboxARMobility") == true) {
    autoMobility = true;
  } else if (getChecked("checkboxARMobility") == false) {
    autoMobility = false;
  }
  if (getChecked("checkboxARDocked") == true) {
    autoDock = true;
  } else if (getChecked("checkboxARDocked") == false) {
    autoDock = false;
  }
  if (getChecked("checkboxAREngaged") == true) {
    autoEngage = true;
  } else if (getChecked("checkboxAREngaged") == false) {
    autoEngage = false;
  }
  setScreen("teleopRight");
});
onEvent("continueAutoLeft", "click", function () {
  if (getChecked("checkboxALMobility") == true) {
    autoMobility = true;
  } else if (getChecked("checkboxALMobility") == false) {
    autoMobility = false;
  }
  if (getChecked("checkboxALDocked") == true) {
    autoDock = true;
  } else if (getChecked("checkboxALDocked") == false) {
    autoDock = false;
  }
  if (getChecked("checkboxALEngaged") == true) {
    autoEngage = true;
  } else if (getChecked("checkboxALEngaged") == false) {
    autoEngage = false;
  }
  setScreen("teleopLeft");
});
//back buttons
onEvent("backSubmitButton", "click", function () {
  if (loc = "Teleop Right") {
    setScreen("teleopRight");
  } else if (loc = "Teleop Left") {
    setScreen("teleopLeft");
  }
});
onEvent("ALBack", "click", function () {
  setScreen("home");
});
onEvent("ARBack", "click", function () {
  setScreen("home");
});
onEvent("TLBack", "click", function () {
  setScreen("autoLeft");
});
onEvent("TRBack", "click", function () {
  setScreen("autoRight");
});
onEvent("submit", "click", function () {
  comments = getText("Comments");
  if (autoMobility == true) {
    points = points + 3;
  }
  if (autoDock == true) {
    points = points + 8;
  }
  if (autoEngage == true && autoDock == true) {
    points = points + 4;
  } else if (autoEngage == true) {
    points = points + 12;
  }
  if (teleopPark == true) {
    points = points + 2;
  }
  if (teleopDock == true) {
    points = points + 8;
  }
  if (teleopEngage == true && teleopDock == true) {
    points = points + 4;
  } else if (autoEngage == true) {
    points = points + 10;
  }
  var autoPoints = 6 * autoHighCone + 6 * autoHighCube + 4 * autoMidCone + 4 * autoMidCube + 3 * autoLowCone + 3 * autoLowCube;
  var teleopPoints = 5 * teleopHighCone + 5 * teleopHighCube + 3 * teleopMidCone + 3 * teleopMidCube + 2 * teleopLowCone + 2 * teleopLowCube;
  points = autoPoints + teleopPoints;
  sessionData[0] = teamNumber;
  sessionData[1] = scouterName;
  sessionData[2] = matchNumber;
  sessionData[3] = autoMobility;
  sessionData[4] = autoDock;
  sessionData[5] = autoEngage;
  sessionData[6] = autoCone;
  sessionData[7] = autoCube;
  sessionData[8] = teleopPark;
  sessionData[9] = teleopDock;
  sessionData[10] = teleopEngage;
  sessionData[11] = teleopCone;
  sessionData[12] = teleopCube;
  sessionData[13] = autoHighCone;
  sessionData[14] = autoHighCube;
  sessionData[15] = autoMidCone;
  sessionData[16] = autoMidCube;
  sessionData[17] = autoLowCone;
  sessionData[18] = autoLowCube;
  sessionData[19] = teleopHighCone;
  sessionData[20] = teleopHighCube;
  sessionData[21] = teleopMidCone;
  sessionData[22] = teleopMidCube;
  sessionData[23] = teleopLowCone;
  sessionData[24] = teleopLowCube;
  sessionData[25] = comments;
  sessionData[26] = autoPoints;
  sessionData[27] = teleopPoints;
  sessionData[28] = points;
  for (var i = 0; i < sessionData.length; i++) {
    data[counter][i] = sessionData[i];
  }
  //data into CSV format
  var csvContent = "";
  data.forEach(function (dataArray) {
    var impdata = dataArray.join(",");
    csvContent += impdata + "\r\n";
  });
  var datetime = new Date();
  var time = datetime.toISOString();
  createDownloadLink("#export", csvContent, "scouting_data " + time + ".csv");
  counter++;
  setScreen("home");
  //reseting checkboxes AL
  setChecked("checkboxALTTL", false);
  setChecked("checkboxALTML", false);
  setChecked("checkboxALTBL", false);
  setChecked("checkboxALMTL", false);
  setChecked("checkboxALMML", false);
  setChecked("checkboxALMBL", false);
  setChecked("checkboxALBTL", false);
  setChecked("checkboxALBML", false);
  setChecked("checkboxALBBL", false);
  setChecked("checkboxALTTM", false);
  setChecked("checkboxALTMM", false);
  setChecked("checkboxALTBM", false);
  setChecked("checkboxALMTM", false);
  setChecked("checkboxALMMM", false);
  setChecked("checkboxALMBM", false);
  setChecked("checkboxALBTM", false);
  setChecked("checkboxALBMM", false);
  setChecked("checkboxALBBM", false);
  //AR
  setChecked("checkboxARTTR", false);
  setChecked("checkboxARTMR", false);
  setChecked("checkboxARTBR", false);
  setChecked("checkboxARMTR", false);
  setChecked("checkboxARMMR", false);
  setChecked("checkboxARMBR", false);
  setChecked("checkboxARBTR", false);
  setChecked("checkboxARBMR", false);
  setChecked("checkboxARBBR", false);
  setChecked("checkboxARTTM", false);
  setChecked("checkboxARTMM", false);
  setChecked("checkboxARTBM", false);
  setChecked("checkboxARMTM", false);
  setChecked("checkboxARMMM", false);
  setChecked("checkboxARMBM", false);
  setChecked("checkboxARBTM", false);
  setChecked("checkboxARBMM", false);
  setChecked("checkboxARBBM", false);
  //TL
  setChecked("checkboxTLTTL", false);
  setChecked("checkboxTLTML", false);
  setChecked("checkboxTLTBL", false);
  setChecked("checkboxTLMTL", false);
  setChecked("checkboxTLMML", false);
  setChecked("checkboxTLMBL", false);
  setChecked("checkboxTLBTL", false);
  setChecked("checkboxTLBML", false);
  setChecked("checkboxTLBBL", false);
  setChecked("checkboxTLTTM", false);
  setChecked("checkboxTLTMM", false);
  setChecked("checkboxTLTBM", false);
  setChecked("checkboxTLMTM", false);
  setChecked("checkboxTLMMM", false);
  setChecked("checkboxTLMBM", false);
  setChecked("checkboxTLBTM", false);
  setChecked("checkboxTLBMM", false);
  setChecked("checkboxTLBBM", false);
  //TR
  setChecked("checkboxTRTTR", false);
  setChecked("checkboxTRTMR", false);
  setChecked("checkboxTRTBR", false);
  setChecked("checkboxTRMTR", false);
  setChecked("checkboxTRMMR", false);
  setChecked("checkboxTRMBR", false);
  setChecked("checkboxTRBTR", false);
  setChecked("checkboxTRBMR", false);
  setChecked("checkboxTRBBR", false);
  setChecked("checkboxTRTTM", false);
  setChecked("checkboxTRTMM", false);
  setChecked("checkboxTRTBM", false);
  setChecked("checkboxTRMTM", false);
  setChecked("checkboxTRMMM", false);
  setChecked("checkboxTRMBM", false);
  setChecked("checkboxTRBTM", false);
  setChecked("checkboxTRBMM", false);
  setChecked("checkboxTRBBM", false);
  //other button checkboxes
  setChecked("checkboxALMobility", false);
  setChecked("checkboxARMobility", false);
  setChecked("checkboxALDocked", false);
  setChecked("checkboxARDocked", false);
  setChecked("checkboxALEngaged", false);
  setChecked("checkboxAREngaged", false);
  setChecked("checkboxTLPark", false);
  setChecked("checkboxTRPark", false);
  setChecked("checkboxTLDocked", false);
  setChecked("checkboxTRDocked", false);
  setChecked("checkboxTLEngaged", false);
  setChecked("checkboxTREngaged", false);
  //reset dropdowns
  setText("dropdownALTTR", "None");
  setText("dropdownALTMR", "None");
  setText("dropdownALTBR", "None");
  setText("dropdownALMTR", "None");
  setText("dropdownALMMR", "None");
  setText("dropdownALMBR", "None");
  setText("dropdownALBTR", "None");
  setText("dropdownALBMR", "None");
  setText("dropdownALBBR", "None");
  //AR dropdown
  setText("dropdownARTTL", "None");
  setText("dropdownARTML", "None");
  setText("dropdownARTBL", "None");
  setText("dropdownARMTL", "None");
  setText("dropdownARMML", "None");
  setText("dropdownARMBL", "None");
  setText("dropdownARBTL", "None");
  setText("dropdownARBML", "None");
  setText("dropdownARBBL", "None");
  //TL dropdown
  setText("dropdownTLTTR", "None");
  setText("dropdownTLTMR", "None");
  setText("dropdownTLTBR", "None");
  setText("dropdownTLMTR", "None");
  setText("dropdownTLMMR", "None");
  setText("dropdownTLMBR", "None");
  setText("dropdownTLBTR", "None");
  setText("dropdownTLBMR", "None");
  setText("dropdownTLBBR", "None");
  //TR dropdown
  setText("dropdownTRTTL", "None");
  setText("dropdownTRTML", "None");
  setText("dropdownTRTBL", "None");
  setText("dropdownTRMTL", "None");
  setText("dropdownTRMML", "None");
  setText("dropdownTRMBL", "None");
  setText("dropdownTRBTL", "None");
  setText("dropdownTRBML", "None");
  setText("dropdownTRBBL", "None");
  //reset texts
  setText("teamNumberInput", "");
  setText("scouterNameInput", "");
  setText("matchNumberInput", "");
  setText("Comments", "");
  //hiding buttons auto left
  hideElement("buttonALTTL");
  hideElement("buttonALTML");
  hideElement("buttonALTBL");
  hideElement("buttonALMTL");
  hideElement("buttonALMML");
  hideElement("buttonALMBL");
  hideElement("buttonALBTL");
  hideElement("buttonALBML");
  hideElement("buttonALBBL");
  hideElement("buttonALTTM");
  hideElement("buttonALTMM");
  hideElement("buttonALTBM");
  hideElement("buttonALMTM");
  hideElement("buttonALMMM");
  hideElement("buttonALMBM");
  hideElement("buttonALBTM");
  hideElement("buttonALBMM");
  hideElement("buttonALBBM");
  //hiding buttons auto right
  hideElement("buttonARTTR");
  hideElement("buttonARTMR");
  hideElement("buttonARTBR");
  hideElement("buttonARMTR");
  hideElement("buttonARMMR");
  hideElement("buttonARMBR");
  hideElement("buttonARBTR");
  hideElement("buttonARBMR");
  hideElement("buttonARBBR");
  hideElement("buttonARTTM");
  hideElement("buttonARTMM");
  hideElement("buttonARTBM");
  hideElement("buttonARMTM");
  hideElement("buttonARMMM");
  hideElement("buttonARMBM");
  hideElement("buttonARBTM");
  hideElement("buttonARBMM");
  hideElement("buttonARBBM");
  //hiding buttons teleop left
  hideElement("buttonTLTTL");
  hideElement("buttonTLTML");
  hideElement("buttonTLTBL");
  hideElement("buttonTLMTL");
  hideElement("buttonTLMML");
  hideElement("buttonTLMBL");
  hideElement("buttonTLBTL");
  hideElement("buttonTLBML");
  hideElement("buttonTLBBL");
  hideElement("buttonTLTTM");
  hideElement("buttonTLTMM");
  hideElement("buttonTLTBM");
  hideElement("buttonTLMTM");
  hideElement("buttonTLMMM");
  hideElement("buttonTLMBM");
  hideElement("buttonTLBTM");
  hideElement("buttonTLBMM");
  hideElement("buttonTLBBM");
  //hiding buttons teleop right
  hideElement("buttonTRTTR");
  hideElement("buttonTRTMR");
  hideElement("buttonTRTBR");
  hideElement("buttonTRMTR");
  hideElement("buttonTRMMR");
  hideElement("buttonTRMBR");
  hideElement("buttonTRBTR");
  hideElement("buttonTRBMR");
  hideElement("buttonTRBBR");
  hideElement("buttonTRTTM");
  hideElement("buttonTRTMM");
  hideElement("buttonTRTBM");
  hideElement("buttonTRMTM");
  hideElement("buttonTRMMM");
  hideElement("buttonTRMBM");
  hideElement("buttonTRBTM");
  hideElement("buttonTRBMM");
  hideElement("buttonTRBBM");
});
//checkbox auto left
onEvent("checkboxALTTL", "click", function () {
  autoCone++;
  autoHighCone++;
  showElement("buttonALTTL");
});
onEvent("buttonALTTL", "click", function () {
  autoCone--;
  autoHighCone--;
  hideElement("buttonALTTL");
  setChecked("checkboxALTTL", false);
});
onEvent("checkboxALTML", "click", function () {
  autoCube++;
  autoHighCube++;
  showElement("buttonALTML");
});
onEvent("buttonALTML", "click", function () {
  autoCube--;
  autoHighCube--;
  hideElement("buttonALTML");
  setChecked("checkboxALTML", false);
});
onEvent("checkboxALTBL", "click", function () {
  autoCone++;
  autoHighCone++;
  showElement("buttonALTBL");
});
onEvent("buttonALTBL", "click", function () {
  autoCone--;
  autoHighCone--;
  hideElement("buttonALTBL");
  setChecked("checkboxALTBL", false);
});
onEvent("checkboxALMTL", "click", function () {
  autoCone++;
  autoHighCone++;
  showElement("buttonALMTL");
});
onEvent("buttonALMTL", "click", function () {
  autoCone--;
  autoHighCone--;
  hideElement("buttonALMTL");
  setChecked("checkboxALMTL", false);
});
onEvent("checkboxALMML", "click", function () {
  autoCube++;
  autoHighCube++;
  showElement("buttonALMML");
});
onEvent("buttonALMML", "click", function () {
  autoCube--;
  autoHighCube--;
  hideElement("buttonALMML");
  setChecked("checkboxALMML", false);
});
onEvent("checkboxALMBL", "click", function () {
  autoCone++;
  autoHighCone++;
  showElement("buttonALMBL");
});
onEvent("buttonALMBL", "click", function () {
  autoCone--;
  autoHighCone--;
  hideElement("buttonALMBL");
  setChecked("checkboxALMBL", false);
});
onEvent("checkboxALBTL", "click", function () {
  autoCone++;
  autoHighCone++;
  showElement("buttonALBTL");
});
onEvent("buttonALBTL", "click", function () {
  autoCone--;
  autoHighCone--;
  hideElement("buttonALBTL");
  setChecked("checkboxALBTL", false);
});
onEvent("checkboxALBML", "click", function () {
  autoCube++;
  autoHighCube++;
  showElement("buttonALBML");
});
onEvent("buttonALBML", "click", function () {
  autoCube--;
  autoHighCube--;
  hideElement("buttonALBML");
  setChecked("checkboxALBML", false);
});
onEvent("checkboxALBBL", "click", function () {
  autoCone++;
  autoHighCone++;
  showElement("buttonALBBL");
});
onEvent("buttonALBBL", "click", function () {
  autoCone--;
  autoHighCone--;
  hideElement("buttonALBBL");
  setChecked("checkboxALBBL", false);
});
onEvent("checkboxALTTM", "click", function () {
  autoCone++;
  autoMidCone++;
  showElement("buttonALTTM");
});
onEvent("buttonALTTM", "click", function () {
  autoCone--;
  autoMidCone--;
  hideElement("buttonALTTM");
  setChecked("checkboxALTTM", false);
});
onEvent("checkboxALTMM", "click", function () {
  autoCube++;
  autoMidCube++;
  showElement("buttonALTMM");
});
onEvent("buttonALTMM", "click", function () {
  autoCube--;
  autoMidCube--;
  hideElement("buttonALTMM");
  setChecked("checkboxALTMM", false);
});
onEvent("checkboxALTBM", "click", function () {
  autoCone++;
  autoMidCone++;
  showElement("buttonALTBM");
});
onEvent("buttonALTBM", "click", function () {
  autoCone--;
  autoMidCone--;
  hideElement("buttonALTBM");
  setChecked("checkboxALTBM", false);
});
onEvent("checkboxALMTM", "click", function () {
  autoCone++;
  autoMidCone++;
  showElement("buttonALMTM");
});
onEvent("buttonALMTM", "click", function () {
  autoCone--;
  autoMidCone--;
  hideElement("buttonALMTM");
  setChecked("checkboxALMTM", false);
});
onEvent("checkboxALMMM", "click", function () {
  autoCube++;
  autoMidCube++;
  showElement("buttonALMMM");
});
onEvent("buttonALMMM", "click", function () {
  autoCube--;
  autoMidCube--;
  hideElement("buttonALMMM");
  setChecked("checkboxALMMM", false);
});
onEvent("checkboxALMBM", "click", function () {
  autoCone++;
  autoMidCone++;
  showElement("buttonALMBM");
});
onEvent("buttonALMBM", "click", function () {
  autoCone--;
  autoMidCone--;
  hideElement("buttonALMBM");
  setChecked("checkboxALMBM", false);
});
onEvent("checkboxALBTM", "click", function () {
  autoCone++;
  autoMidCone++;
  showElement("buttonALBTM");
});
onEvent("buttonALBTM", "click", function () {
  autoCone--;
  autoMidCone--;
  hideElement("buttonALBTM");
  setChecked("checkboxALBTM", false);
});
onEvent("checkboxALBMM", "click", function () {
  autoCube++;
  autoMidCube++;
  showElement("buttonALBMM");
});
onEvent("buttonALBMM", "click", function () {
  autoCube--;
  autoMidCube--;
  hideElement("buttonALBMM");
  setChecked("checkboxALBMM", false);
});
onEvent("checkboxALBBM", "click", function () {
  autoCone++;
  autoMidCone++;
  showElement("buttonALBBM");
});
onEvent("buttonALBBM", "click", function () {
  autoCone--;
  autoMidCone--;
  hideElement("buttonALBBM");
  setChecked("checkboxALBBM", false);
});
//auto right checkbox
onEvent("checkboxARTTR", "click", function () {
  autoCone++;
  autoHighCone++;
  showElement("buttonARTTR");
});
onEvent("buttonARTTR", "click", function () {
  autoCone--;
  autoHighCone--;
  hideElement("buttonARTTR");
  setChecked("checkboxARTTR", false);
});
onEvent("checkboxARTMR", "click", function () {
  autoCube++;
  autoHighCube++;
  showElement("buttonARTMR");
});
onEvent("buttonARTMR", "click", function () {
  autoCube--;
  autoHighCube--;
  hideElement("buttonARTMR");
  setChecked("checkboxARTMR", false);
});
onEvent("checkboxARTBR", "click", function () {
  autoCone++;
  autoHighCone++;
  showElement("buttonARTBR");
});
onEvent("buttonARTBR", "click", function () {
  autoCone--;
  autoHighCone--;
  hideElement("buttonARTBR");
  setChecked("checkboxARTBR", false);
});
onEvent("checkboxARMTR", "click", function () {
  autoCone++;
  autoHighCone++;
  showElement("buttonARMTR");
});
onEvent("buttonARMTR", "click", function () {
  autoCone--;
  autoHighCone--;
  hideElement("buttonARMTR");
  setChecked("checkboxARMTR", false);
});
onEvent("checkboxARMMR", "click", function () {
  autoCube++;
  autoHighCube++;
  showElement("buttonARMMR");
});
onEvent("buttonARMMR", "click", function () {
  autoCube--;
  autoHighCube--;
  hideElement("buttonARMMR");
  setChecked("checkboxARMMR", false);
});
onEvent("checkboxARMBR", "click", function () {
  autoCone++;
  autoHighCone++;
  showElement("buttonARMBR");
});
onEvent("buttonARMBR", "click", function () {
  autoCone--;
  autoHighCone--;
  hideElement("buttonARMBR");
  setChecked("checkboxARMBR", false);
});
onEvent("checkboxARBTR", "click", function () {
  autoCone++;
  autoHighCone++;
  showElement("buttonARBTR");
});
onEvent("buttonARBTR", "click", function () {
  autoCone--;
  autoHighCone--;
  hideElement("buttonARBTR");
  setChecked("checkboxARBTR", false);
});
onEvent("checkboxARBMR", "click", function () {
  autoCube++;
  autoHighCube++;
  showElement("buttonARBMR");
});
onEvent("buttonARBMR", "click", function () {
  autoCube--;
  autoHighCube--;
  hideElement("buttonARBMR");
  setChecked("checkboxARBMR", false);
});
onEvent("checkboxARBBR", "click", function () {
  autoCone++;
  autoHighCone++;
  showElement("buttonARBBR");
});
onEvent("buttonARBBR", "click", function () {
  autoCone--;
  autoHighCone--;
  hideElement("buttonARBBR");
  setChecked("checkboxARBBR", false);
});
onEvent("checkboxARTTM", "click", function () {
  autoCone++;
  autoMidCone++;
  showElement("buttonARTTM");
});
onEvent("buttonARTTM", "click", function () {
  autoCone--;
  autoMidCone--;
  hideElement("buttonARTTM");
  setChecked("checkboxARTTM", false);
});
onEvent("checkboxARTMM", "click", function () {
  autoCube++;
  autoMidCube++;
  showElement("buttonARTMM");
});
onEvent("buttonARTMM", "click", function () {
  autoCube--;
  autoMidCube--;
  hideElement("buttonARTMM");
  setChecked("checkboxARTMM", false);
});
onEvent("checkboxARTBM", "click", function () {
  autoCone++;
  autoMidCone++;
  showElement("buttonARTBM");
});
onEvent("buttonARTBM", "click", function () {
  autoCone--;
  autoMidCone--;
  hideElement("buttonARTBM");
  setChecked("checkboxARTBM", false);
});
onEvent("checkboxARMTM", "click", function () {
  autoCone++;
  autoMidCone++;
  showElement("buttonARMTM");
});
onEvent("buttonARMTM", "click", function () {
  autoCone--;
  autoMidCone--;
  hideElement("buttonARMTM");
  setChecked("checkboxARMTM", false);
});
onEvent("checkboxARMMM", "click", function () {
  autoCube++;
  autoMidCube++;
  showElement("buttonARMMM");
});
onEvent("buttonARMMM", "click", function () {
  autoCube--;
  autoMidCube--;
  hideElement("buttonARMMM");
  setChecked("checkboxARMMM", false);
});
onEvent("checkboxARMBM", "click", function () {
  autoCone++;
  autoMidCone++;
  showElement("buttonARMBM");
});
onEvent("buttonARMBM", "click", function () {
  autoCone--;
  autoMidCone--;
  hideElement("buttonARMBM");
  setChecked("checkboxARMBM", false);
});
onEvent("checkboxARBTM", "click", function () {
  autoCone++;
  autoMidCone++;
  showElement("buttonARBTM");
});
onEvent("buttonARBTM", "click", function () {
  autoCone--;
  autoMidCone--;
  hideElement("buttonARBTM");
  setChecked("checkboxARBTM", false);
});
onEvent("checkboxARBMM", "click", function () {
  autoCube++;
  autoMidCube++;
  showElement("buttonARBMM");
});
onEvent("buttonARBMM", "click", function () {
  autoCube--;
  autoMidCube--;
  hideElement("buttonARBMM");
  setChecked("checkboxARBMM", false);
});
onEvent("checkboxARBBM", "click", function () {
  autoCone++;
  autoMidCone++;
  showElement("buttonARBBM");
});
onEvent("buttonARBBM", "click", function () {
  autoCone--;
  autoMidCone--;
  hideElement("buttonARBBM");
  setChecked("checkboxARBBM", false);
});
//teleop left checkbox
onEvent("checkboxTLTTL", "click", function () {
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTLTTL");
});
onEvent("buttonTLTTL", "click", function () {
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTLTTL");
  setChecked("checkboxTLTTL", false);
});
onEvent("checkboxTLTML", "click", function () {
  teleopCube++;
  teleopHighCube++;
  showElement("buttonTLTML");
});
onEvent("buttonTLTML", "click", function () {
  teleopCube--;
  teleopHighCube--;
  hideElement("buttonTLTML");
  setChecked("checkboxTLTML", false);
});
onEvent("checkboxTLTBL", "click", function () {
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTLTBL");
});
onEvent("buttonTLTBL", "click", function () {
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTLTBL");
  setChecked("checkboxTLTBL", false);
});
onEvent("checkboxTLMTL", "click", function () {
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTLMTL");
});
onEvent("buttonTLMTL", "click", function () {
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTLMTL");
  setChecked("checkboxTLMTL", false);
});
onEvent("checkboxTLMML", "click", function () {
  teleopCube++;
  teleopHighCube++;
  showElement("buttonTLMML");
});
onEvent("buttonTLMML", "click", function () {
  teleopCube--;
  teleopHighCube--;
  hideElement("buttonTLMML");
  setChecked("checkboxTLMML", false);
});
onEvent("checkboxTLMBL", "click", function () {
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTLMBL");
});
onEvent("buttonTLMBL", "click", function () {
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTLMBL");
  setChecked("checkboxTLMBL", false);
});
onEvent("checkboxTLBTL", "click", function () {
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTLBTL");
});
onEvent("buttonTLBTL", "click", function () {
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTLBTL");
  setChecked("checkboxTLBTL", false);
});
onEvent("checkboxTLBML", "click", function () {
  teleopCube++;
  teleopHighCube++;
  showElement("buttonTLBML");
});
onEvent("buttonTLBML", "click", function () {
  teleopCube--;
  teleopHighCube++;
  hideElement("buttonTLBML");
  setChecked("checkboxTLBML", false);
});
onEvent("checkboxTLBBL", "click", function () {
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTLBBL");
});
onEvent("buttonTLBBL", "click", function () {
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTLBBL");
  setChecked("checkboxTLBBL", false);
});
onEvent("buttonTLTTM", "click", function () {
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTLTTM");
  setChecked("checkboxTLTTM", false);
});
onEvent("checkboxTLTMM", "click", function () {
  teleopCube++;
  teleopMidCube++;
  showElement("buttonTLTMM");
});
onEvent("buttonTLTMM", "click", function () {
  teleopCube--;
  teleopMidCube--;
  hideElement("buttonTLTMM");
  setChecked("checkboxTLTMM", false);
});
onEvent("checkboxTLTBM", "click", function () {
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTLTBM");
});
onEvent("buttonTLTBM", "click", function () {
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTLTBM");
  setChecked("checkboxTLTBM", false);
});
onEvent("checkboxTLMTM", "click", function () {
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTLMTM");
});
onEvent("buttonTLMTM", "click", function () {
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTLMTM");
  setChecked("checkboxTLMTM", false);
});
onEvent("checkboxTLMMM", "click", function () {
  teleopCube++;
  teleopMidCube++;
  showElement("buttonTLMMM");
});
onEvent("buttonTLMMM", "click", function () {
  teleopCube--;
  teleopMidCube--;
  hideElement("buttonTLMMM");
  setChecked("checkboxTLMMM", false);
});
onEvent("checkboxTLMBM", "click", function () {
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTLMBM");
});
onEvent("buttonTLMBM", "click", function () {
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTLMBM");
  setChecked("checkboxTLMBM", false);
});
onEvent("checkboxTLBTM", "click", function () {
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTLBTM");
});
onEvent("buttonTLBTM", "click", function () {
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTLBTM");
  setChecked("checkboxTLBTM", false);
});
onEvent("checkboxTLBMM", "click", function () {
  teleopCube++;
  teleopMidCube++;
  showElement("buttonTLBMM");
});
onEvent("buttonTLBMM", "click", function () {
  teleopCube--;
  teleopMidCube--;
  hideElement("buttonTLBMM");
  setChecked("checkboxTLBMM", false);
});
onEvent("checkboxTLBBM", "click", function () {
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTLBBM");
});
onEvent("buttonTLBBM", "click", function () {
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTLBBM");
  setChecked("checkboxTLBBM", false);
});
onEvent("checkboxTLTTM", "click", function () {
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTLTTM");
});
//teleop right checkbox
onEvent("checkboxTRTTR", "click", function () {
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTRTTR");
});
onEvent("buttonTRTTR", "click", function () {
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTRTTR");
  setChecked("checkboxTRTTR", false);
});
onEvent("checkboxTRTMR", "click", function () {
  teleopCube++;
  teleopHighCube++;
  showElement("buttonTRTMR");
});
onEvent("buttonTRTMR", "click", function () {
  teleopCube--;
  teleopHighCube--;
  hideElement("buttonTRTMR");
  setChecked("checkboxTRTMR", false);
});
onEvent("checkboxTRTBR", "click", function () {
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTRTBR");
});
onEvent("buttonTRTBR", "click", function () {
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTRTBR");
  setChecked("checkboxTRTBR", false);
});
onEvent("checkboxTRMTR", "click", function () {
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTRMTR");
});
onEvent("buttonTRMTR", "click", function () {
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTRMTR");
  setChecked("checkboxTRMTR", false);
});
onEvent("checkboxTRMMR", "click", function () {
  teleopCube++;
  teleopHighCube++;
  showElement("buttonTRMMR");
});
onEvent("buttonTRMMR", "click", function () {
  teleopCube--;
  teleopHighCube--;
  hideElement("buttonTRMMR");
  setChecked("checkboxTRMMR", false);
});
onEvent("checkboxTRMBR", "click", function () {
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTRMBR");
});
onEvent("buttonTRMBR", "click", function () {
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTRMBR");
  setChecked("checkboxTRMBR", false);
});
onEvent("checkboxTRBTR", "click", function () {
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTRBTR");
});
onEvent("buttonTRBTR", "click", function () {
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTRBTR");
  setChecked("checkboxTRBTR", false);
});
onEvent("checkboxTRBMR", "click", function () {
  teleopCube++;
  teleopHighCube++;
  showElement("buttonTRBMR");
});
onEvent("buttonTRBMR", "click", function () {
  teleopCube--;
  teleopHighCube--;
  hideElement("buttonTRBMR");
  setChecked("checkboxTRBMR", false);
});
onEvent("checkboxTRBBR", "click", function () {
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTRBBR");
});
onEvent("buttonTRBBR", "click", function () {
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTRBBR");
  setChecked("checkboxTRBBR", false);
});
onEvent("checkboxTRTTM", "click", function () {
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTRTTM");
});
onEvent("buttonTRTTM", "click", function () {
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTRTTM");
  setChecked("checkboxTRTTM", false);
});
onEvent("checkboxTRTMM", "click", function () {
  teleopCube++;
  teleopMidCube++;
  showElement("buttonTRTMM");
});
onEvent("buttonTRTMM", "click", function () {
  teleopCube--;
  teleopMidCube--;
  hideElement("buttonTRTMM");
  setChecked("checkboxTRTMM", false);
});
onEvent("checkboxTRTBM", "click", function () {
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTRTBM");
});
onEvent("buttonTRTBM", "click", function () {
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTRTBM");
  setChecked("checkboxTRTBM", false);
});
onEvent("checkboxTRMTM", "click", function () {
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTRMTM");
});
onEvent("buttonTRMTM", "click", function () {
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTRMTM");
  setChecked("checkboxTRMTM", false);
});
onEvent("checkboxTRMMM", "click", function () {
  teleopCube++;
  teleopMidCube++;
  showElement("buttonTRMMM");
});
onEvent("buttonTRMMM", "click", function () {
  teleopCube--;
  teleopMidCube--;
  hideElement("buttonTRMMM");
  setChecked("checkboxTRMMM", false);
});
onEvent("checkboxTRMBM", "click", function () {
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTRMBM");
});
onEvent("buttonTRMBM", "click", function () {
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTRMBM");
  setChecked("checkboxTRMBM", false);
});
onEvent("checkboxTRBTM", "click", function () {
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTRBTM");
});
onEvent("buttonTRBTM", "click", function () {
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTRBTM");
  setChecked("checkboxTRBTM", false);
});
onEvent("checkboxTRBMM", "click", function () {
  teleopCube++;
  teleopMidCube++;
  showElement("buttonTRBMM");
});
onEvent("buttonTRBMM", "click", function () {
  teleopCube--;
  teleopMidCube--;
  hideElement("buttonTRBMM");
  setChecked("checkboxTRBMM", false);
});
onEvent("checkboxTRBBM", "click", function () {
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTRBBM");
});
onEvent("buttonTRBBM", "click", function () {
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTRBBM");
  setChecked("checkboxTRBBM", false);
})
//auto right dropdowns
var localValuePreviousARTTL = "None";
onEvent("dropdownARTTL", "change", function () {
  var localValue = getText("dropdownARTTL");
  if (localValuePreviousARTTL != localValue) {
    if (localValue == "Cone") {
      autoLowCone++;
      autoCone++;
      if (localValuePreviousARTTL == "Cube") {
        autoCube--;
        autoLowCube--;
      }
    } else if (localValue == "Cube") {
      autoLowCube++;
      autoCube++;
      if (localValuePreviousARTTL == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousARTTL == "Cube") {
        autoCube--;
        autoLowCube--;
      } else if (localValuePreviousARTTL == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    }
  }
  localValuePreviousARTTL = getText("dropdownARTTL");
});
var localValuePreviousARTML = "None";
onEvent("dropdownARTML", "change", function () {
  var localValue = getText("dropdownARTML");
  if (localValuePreviousARTML != localValue) {
    if (localValue == "Cone") {
      autoLowCone++;
      autoCone++;
      if (localValuePreviousARTML == "Cube") {
        autoCube--;
        autoLowCube--;
      }
    } else if (localValue == "Cube") {
      autoLowCube++;
      autoCube++;
      if (localValuePreviousARTML == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousARTML == "Cube") {
        autoCube--;
        autoLowCube--;
      } else if (localValuePreviousARTML == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    }
  }
  localValuePreviousARTML = getText("dropdownARTML");
});
var localValuePreviousARTBL = "None";
onEvent("dropdownARTBL", "change", function () {
  var localValue = getText("dropdownARTBL");
  if (localValuePreviousARTBL != localValue) {
    if (localValue == "Cone") {
      autoLowCone++;
      autoCone++;
      if (localValuePreviousARTBL == "Cube") {
        autoCube--;
        autoLowCube--;
      }
    } else if (localValue == "Cube") {
      autoLowCube++;
      autoCube++;
      if (localValuePreviousARTBL == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousARTBL == "Cube") {
        autoCube--;
        autoLowCube--;
      } else if (localValuePreviousARTBL == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    }
  }
  localValuePreviousARTBL = getText("dropdownARTBL");
});
var localValuePreviousARMTL = "None";
onEvent("dropdownARMTL", "change", function () {
  var localValue = getText("dropdownARMTL");
  if (localValuePreviousARMTL != localValue) {
    if (localValue == "Cone") {
      autoLowCone++;
      autoCone++;
      if (localValuePreviousARMTL == "Cube") {
        autoCube--;
        autoLowCube--;
      }
    } else if (localValue == "Cube") {
      autoLowCube++;
      autoCube++;
      if (localValuePreviousARMTL == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousARMTL == "Cube") {
        autoCube--;
        autoLowCube--;
      } else if (localValuePreviousARMTL == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    }
  }
  localValuePreviousARMTL = getText("dropdownARMTL");
});
var localValuePreviousARMML = "None";
onEvent("dropdownARMML", "change", function () {
  var localValue = getText("dropdownARMML");
  if (localValuePreviousARMML != localValue) {
    if (localValue == "Cone") {
      autoLowCone++;
      autoCone++;
      if (localValuePreviousARMML == "Cube") {
        autoCube--;
        autoLowCube--;
      }
    } else if (localValue == "Cube") {
      autoLowCube++;
      autoCube++;
      if (localValuePreviousARMML == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousARMML == "Cube") {
        autoCube--;
        autoLowCube--;
      } else if (localValuePreviousARMML == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    }
  }
  localValuePreviousARMML = getText("dropdownARMML");
});
var localValuePreviousARMBL = "None";
onEvent("dropdownARMML", "change", function () {
  var localValue = getText("dropdownARMML");
  if (localValuePreviousARMBL != localValue) {
    if (localValue == "Cone") {
      autoLowCone++;
      autoCone++;
      if (localValuePreviousARMBL == "Cube") {
        autoCube--;
        autoLowCube--;
      }
    } else if (localValue == "Cube") {
      autoLowCube++;
      autoCube++;
      if (localValuePreviousARMBL == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousARMBL == "Cube") {
        autoCube--;
        autoLowCube--;
      } else if (localValuePreviousARMBL == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    }
  }
  localValuePreviousARMBL = getText("dropdownARMBL");
});
var localValuePreviousARBTL = "None";
onEvent("dropdownARBTL", "change", function () {
  var localValue = getText("dropdownARBTL");
  if (localValuePreviousARBTL != localValue) {
    if (localValue == "Cone") {
      autoLowCone++;
      autoCone++;
      if (localValuePreviousARBTL == "Cube") {
        autoCube--;
        autoLowCube--;
      }
    } else if (localValue == "Cube") {
      autoLowCube++;
      autoCube++;
      if (localValuePreviousARBTL == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousARBTL == "Cube") {
        autoCube--;
        autoLowCube--;
      } else if (localValuePreviousARBTL == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    }
  }
  localValuePreviousARBTL = getText("dropdownARBTL");
});
var localValuePreviousARBML = "None";
onEvent("dropdownARBML", "change", function () {
  var localValue = getText("dropdownARBML");
  if (localValuePreviousARBML != localValue) {
    if (localValue == "Cone") {
      autoLowCone++;
      autoCone++;
      if (localValuePreviousARBML == "Cube") {
        autoCube--;
        autoLowCube--;
      }
    } else if (localValue == "Cube") {
      autoLowCube++;
      autoCube++;
      if (localValuePreviousARBML == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousARBML == "Cube") {
        autoCube--;
        autoLowCube--;
      } else if (localValuePreviousARBML == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    }
  }
  localValuePreviousARBML = getText("dropdownARBML");
});
var localValuePreviousARBBL = "None";
onEvent("dropdownARBBL", "change", function () {
  var localValue = getText("dropdownARBBL");
  if (localValuePreviousARBBL != localValue) {
    if (localValue == "Cone") {
      autoLowCone++;
      autoCone++;
      if (localValuePreviousARBBL == "Cube") {
        autoCube--;
        autoLowCube--;
      }
    } else if (localValue == "Cube") {
      autoLowCube++;
      autoCube++;
      if (localValuePreviousARBBL == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousARBBL == "Cube") {
        autoCube--;
        autoLowCube--;
      } else if (localValuePreviousARBBL == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    }
  }
  localValuePreviousARBBL = getText("dropdownARBBL");
});
//auto left dropdown
var localValuePreviousALTTR = "None";
onEvent("dropdownALTTR", "change", function () {
  var localValue = getText("dropdownALTTR");
  if (localValuePreviousALTTR != localValue) {
    if (localValue == "Cone") {
      autoLowCone++;
      autoCone++;
      if (localValuePreviousALTTR == "Cube") {
        autoCube--;
        autoLowCube--;
      }
    } else if (localValue == "Cube") {
      autoLowCube++;
      autoCube++;
      if (localValuePreviousALTTR == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousALTTR == "Cube") {
        autoCube--;
        autoLowCube--;
      } else if (localValuePreviousALTTR == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    }
  }
  localValuePreviousALTTR = getText("dropdownALTTR");
});
var localValuePreviousALTMR = "None";
onEvent("dropdownALTMR", "change", function () {
  var localValue = getText("dropdownALTMR");
  if (localValuePreviousALTMR != localValue) {
    if (localValue == "Cone") {
      autoLowCone++;
      autoCone++;
      if (localValuePreviousALTMR == "Cube") {
        autoCube--;
        autoLowCube--;
      }
    } else if (localValue == "Cube") {
      autoLowCube++;
      autoCube++;
      if (localValuePreviousALTMR == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousALTMR == "Cube") {
        autoCube--;
        autoLowCube--;
      } else if (localValuePreviousALTMR == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    }
  }
  localValuePreviousALTMR = getText("dropdownALTMR");
});
var localValuePreviousALTBR = "None";
onEvent("dropdownALTBR", "change", function () {
  var localValue = getText("dropdownALTBR");
  if (localValuePreviousALTBR != localValue) {
    if (localValue == "Cone") {
      autoLowCone++;
      autoCone++;
      if (localValuePreviousALTBR == "Cube") {
        autoCube--;
        autoLowCube--;
      }
    } else if (localValue == "Cube") {
      autoLowCube++;
      autoCube++;
      if (localValuePreviousALTBR == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousALTBR == "Cube") {
        autoCube--;
        autoLowCube--;
      } else if (localValuePreviousALTBR == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    }
  }
  localValuePreviousALTBR = getText("dropdownALTBR");
});
var localValuePreviousALMTR = "None";
onEvent("dropdownALMTR", "change", function () {
  var localValue = getText("dropdownALMTR");
  if (localValuePreviousALMTR != localValue) {
    if (localValue == "Cone") {
      autoLowCone++;
      autoCone++;
      if (localValuePreviousALMTR == "Cube") {
        autoCube--;
        autoLowCube--;
      }
    } else if (localValue == "Cube") {
      autoLowCube++;
      autoCube++;
      if (localValuePreviousALMTR == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousALMTR == "Cube") {
        autoCube--;
        autoLowCube--;
      } else if (localValuePreviousALMTR == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    }
  }
  localValuePreviousALMTR = getText("dropdownALMTR");
});
var localValuePreviousALMMR = "None";
onEvent("dropdownALMMR", "change", function () {
  var localValue = getText("dropdownALMMR");
  if (localValuePreviousALMMR != localValue) {
    if (localValue == "Cone") {
      autoLowCone++;
      autoCone++;
      if (localValuePreviousALMMR == "Cube") {
        autoCube--;
        autoLowCube--;
      }
    } else if (localValue == "Cube") {
      autoLowCube++;
      autoCube++;
      if (localValuePreviousALMMR == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousALMMR == "Cube") {
        autoCube--;
        autoLowCube--;
      } else if (localValuePreviousALMMR == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    }
  }
  localValuePreviousALMMR = getText("dropdownALMMR");
});
var localValuePreviousALMBR = "None";
onEvent("dropdownALMMR", "change", function () {
  var localValue = getText("dropdownALMMR");
  if (localValuePreviousALMBR != localValue) {
    if (localValue == "Cone") {
      autoLowCone++;
      autoCone++;
      if (localValuePreviousALMBR == "Cube") {
        autoCube--;
        autoLowCube--;
      }
    } else if (localValue == "Cube") {
      autoLowCube++;
      autoCube++;
      if (localValuePreviousALMBR == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousALMBR == "Cube") {
        autoCube--;
        autoLowCube--;
      } else if (localValuePreviousALMBR == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    }
  }
  localValuePreviousALMBR = getText("dropdownALMBR");
});
var localValuePreviousALBTR = "None";
onEvent("dropdownALBTR", "change", function () {
  var localValue = getText("dropdownALBTR");
  if (localValuePreviousALBTR != localValue) {
    if (localValue == "Cone") {
      autoLowCone++;
      autoCone++;
      if (localValuePreviousALBTR == "Cube") {
        autoCube--;
        autoLowCube--;
      }
    } else if (localValue == "Cube") {
      autoLowCube++;
      autoCube++;
      if (localValuePreviousALBTR == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousALBTR == "Cube") {
        autoCube--;
        autoLowCube--;
      } else if (localValuePreviousALBTR == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    }
  }
  localValuePreviousALBTR = getText("dropdownALBTR");
});
var localValuePreviousALBMR = "None";
onEvent("dropdownALBMR", "change", function () {
  var localValue = getText("dropdownALBMR");
  if (localValuePreviousALBMR != localValue) {
    if (localValue == "Cone") {
      autoLowCone++;
      autoCone++;
      if (localValuePreviousALBMR == "Cube") {
        autoCube--;
        autoLowCube--;
      }
    } else if (localValue == "Cube") {
      autoLowCube++;
      autoCube++;
      if (localValuePreviousALBMR == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousALBMR == "Cube") {
        autoCube--;
        autoLowCube--;
      } else if (localValuePreviousALBMR == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    }
  }
  localValuePreviousALBMR = getText("dropdownALBMR");
});
var localValuePreviousALBBR = "None";
onEvent("dropdownALBBR", "change", function () {
  var localValue = getText("dropdownALBBR");
  if (localValuePreviousALBBR != localValue) {
    if (localValue == "Cone") {
      autoLowCone++;
      autoCone++;
      if (localValuePreviousALBBR == "Cube") {
        autoCube--;
        autoLowCube--;
      }
    } else if (localValue == "Cube") {
      autoLowCube++;
      autoCube++;
      if (localValuePreviousALBBR == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousALBBR == "Cube") {
        autoCube--;
        autoLowCube--;
      } else if (localValuePreviousALBBR == "Cone") {
        autoCone--;
        autoLowCone--;
      }
    }
  }
  localValuePreviousALBBR = getText("dropdownALBBR");
});
//teleop right dropdowns
var localValuePreviousTRTTL = "None";
onEvent("dropdownTRTTL", "change", function () {
  var localValue = getText("dropdownTRTTL");
  if (localValuePreviousTRTTL != localValue) {
    if (localValue == "Cone") {
      teleopLowCone++;
      teleopCone++;
      if (localValuePreviousTRTTL == "Cube") {
        teleopCube--;
        teleopLowCube--;
      }
    } else if (localValue == "Cube") {
      teleopLowCube++;
      teleopCube++;
      if (localValuePreviousTRTTL == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousTRTTL == "Cube") {
        teleopCube--;
        teleopowCube--;
      } else if (localValuePreviousTRTTL == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    }
  }
  localValuePreviousTRTTL = getText("dropdownTRTTL");
});
var localValuePreviousTRTML = "None";
onEvent("dropdownTRTML", "change", function () {
  var localValue = getText("dropdownTRTML");
  if (localValuePreviousTRTML != localValue) {
    if (localValue == "Cone") {
      teleopLowCone++;
      teleopCone++;
      if (localValuePreviousTRTML == "Cube") {
        teleopCube--;
        teleopLowCube--;
      }
    } else if (localValue == "Cube") {
      teleopLowCube++;
      teleopCube++;
      if (localValuePreviousTRTML == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousTRTML == "Cube") {
        teleopCube--;
        teleopLowCube--;
      } else if (localValuePreviousTRTML == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    }
  }
  localValuePreviousTRTML = getText("dropdownTRTML");
});
var localValuePreviousTRTBL = "None";
onEvent("dropdownTRTBL", "change", function () {
  var localValue = getText("dropdownTRTBL");
  if (localValuePreviousTRTBL != localValue) {
    if (localValue == "Cone") {
      teleopLowCone++;
      teleopCone++;
      if (localValuePreviousTRTBL == "Cube") {
        teleopCube--;
        teleopLowCube--;
      }
    } else if (localValue == "Cube") {
      teleopLowCube++;
      teleopCube++;
      if (localValuePreviousTRTBL == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousTRTBL == "Cube") {
        teleopCube--;
        teleopLowCube--;
      } else if (localValuePreviousTRTBL == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    }
  }
  localValuePreviousTRTBL = getText("dropdownTRTBL");
});
var localValuePreviousTRMTL = "None";
onEvent("dropdownTRMTL", "change", function () {
  var localValue = getText("dropdownTRMTL");
  if (localValuePreviousTRMTL != localValue) {
    if (localValue == "Cone") {
      teleopLowCone++;
      teleopCone++;
      if (localValuePreviousTRMTL == "Cube") {
        teleopCube--;
        teleopLowCube--;
      }
    } else if (localValue == "Cube") {
      teleopLowCube++;
      teleopCube++;
      if (localValuePreviousTRMTL == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousTRMTL == "Cube") {
        teleopCube--;
        teleopLowCube--;
      } else if (localValuePreviousTRMTL == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    }
  }
  localValuePreviousTRMTL = getText("dropdownTRMTL");
});
var localValuePreviousTRMML = "None";
onEvent("dropdownTRMML", "change", function () {
  var localValue = getText("dropdownTRMML");
  if (localValuePreviousTRMML != localValue) {
    if (localValue == "Cone") {
      teleopLowCone++;
      teleopCone++;
      if (localValuePreviousTRMML == "Cube") {
        teleopCube--;
        teleopLowCube--;
      }
    } else if (localValue == "Cube") {
      teleopLowCube++;
      teleopCube++;
      if (localValuePreviousTRMML == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousTRMML == "Cube") {
        teleopCube--;
        teleopLowCube--;
      } else if (localValuePreviousTRMML == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    }
  }
  localValuePreviousTRMML = getText("dropdownTRMML");
});
var localValuePreviousTRMBL = "None";
onEvent("dropdownTRMML", "change", function () {
  var localValue = getText("dropdownTRMML");
  if (localValuePreviousTRMBL != localValue) {
    if (localValue == "Cone") {
      teleopLowCone++;
      teleopCone++;
      if (localValuePreviousTRMBL == "Cube") {
        teleopCube--;
        teleopLowCube--;
      }
    } else if (localValue == "Cube") {
      teleopLowCube++;
      teleopCube++;
      if (localValuePreviousTRMBL == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousTRMBL == "Cube") {
        teleopCube--;
        teleopLowCube--;
      } else if (localValuePreviousTRMBL == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    }
  }
  localValuePreviousTRMBL = getText("dropdownTRMBL");
});
var localValuePreviousTRBTL = "None";
onEvent("dropdownTRBTL", "change", function () {
  var localValue = getText("dropdownTRBTL");
  if (localValuePreviousTRBTL != localValue) {
    if (localValue == "Cone") {
      teleopLowCone++;
      teleopCone++;
      if (localValuePreviousTRBTL == "Cube") {
        teleopCube--;
        teleopLowCube--;
      }
    } else if (localValue == "Cube") {
      teleopLowCube++;
      teleopCube++;
      if (localValuePreviousTRBTL == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousTRBTL == "Cube") {
        teleopCube--;
        teleopLowCube--;
      } else if (localValuePreviousTRBTL == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    }
  }
  localValuePreviousTRBTL = getText("dropdownTRBTL");
});
var localValuePreviousTRBML = "None";
onEvent("dropdownTRBML", "change", function () {
  var localValue = getText("dropdownTRBML");
  if (localValuePreviousTRBML != localValue) {
    if (localValue == "Cone") {
      teleopLowCone++;
      teleopCone++;
      if (localValuePreviousTRBML == "Cube") {
        teleopCube--;
        teleopLowCube--;
      }
    } else if (localValue == "Cube") {
      teleopLowCube++;
      teleopCube++;
      if (localValuePreviousTRBML == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousTRBML == "Cube") {
        teleopCube--;
        teleopLowCube--;
      } else if (localValuePreviousTRBML == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    }
  }
  localValuePreviousTRBML = getText("dropdownTRBML");
});
var localValuePreviousTRBBL = "None";
onEvent("dropdownTRBBL", "change", function () {
  var localValue = getText("dropdownTRBBL");
  if (localValuePreviousTRBBL != localValue) {
    if (localValue == "Cone") {
      teleopLowCone++;
      teleopCone++;
      if (localValuePreviousTRBBL == "Cube") {
        teleopCube--;
        teleopLowCube--;
      }
    } else if (localValue == "Cube") {
      teleopLowCube++;
      teleopCube++;
      if (localValuePreviousTRBBL == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousTRBBL == "Cube") {
        teleopCube--;
        teleopLowCube--;
      } else if (localValuePreviousTRBBL == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    }
  }
  localValuePreviousTRBBL = getText("dropdownTRBBL");
});
//teleop left dropdown
var localValuePreviousTLTTR = "None";
onEvent("dropdownTLTTR", "change", function () {
  var localValue = getText("dropdownTLTTR");
  if (localValuePreviousTLTTR != localValue) {
    if (localValue == "Cone") {
      teleopLowCone++;
      teleopCone++;
      if (localValuePreviousTLTTR == "Cube") {
        teleopCube--;
        teleopLowCube--;
      }
    } else if (localValue == "Cube") {
      teleopLowCube++;
      teleopCube++;
      if (localValuePreviousTLTTR == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousTLTTR == "Cube") {
        teleopCube--;
        teleopLowCube--;
      } else if (localValuePreviousTLTTR == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    }
  }
  localValuePreviousTLTTR = getText("dropdownTLTTR");
});
var localValuePreviousTLTMR = "None";
onEvent("dropdownTLTMR", "change", function () {
  var localValue = getText("dropdownTLTMR");
  if (localValuePreviousTLTMR != localValue) {
    if (localValue == "Cone") {
      teleopLowCone++;
      teleopCone++;
      if (localValuePreviousTLTMR == "Cube") {
        teleopCube--;
        teleopLowCube--;
      }
    } else if (localValue == "Cube") {
      teleopLowCube++;
      teleopCube++;
      if (localValuePreviousTLTMR == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousTLTMR == "Cube") {
        teleopCube--;
        teleopLowCube--;
      } else if (localValuePreviousTLTMR == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    }
  }
  localValuePreviousTLTMR = getText("dropdownTLTMR");
});
var localValuePreviousTLTBR = "None";
onEvent("dropdownTLTBR", "change", function () {
  var localValue = getText("dropdownTLTBR");
  if (localValuePreviousTLTBR != localValue) {
    if (localValue == "Cone") {
      teleopLowCone++;
      teleopCone++;
      if (localValuePreviousTLTBR == "Cube") {
        teleopCube--;
        teleopLowCube--;
      }
    } else if (localValue == "Cube") {
      teleopLowCube++;
      teleopCube++;
      if (localValuePreviousTLTBR == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousTLTBR == "Cube") {
        teleopCube--;
        teleopLowCube--;
      } else if (localValuePreviousTLTBR == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    }
  }
  localValuePreviousTLTBR = getText("dropdownTLTBR");
});
var localValuePreviousTLMTR = "None";
onEvent("dropdownTLMTR", "change", function () {
  var localValue = getText("dropdownTLMTR");
  if (localValuePreviousTLMTR != localValue) {
    if (localValue == "Cone") {
      teleopLowCone++;
      teleopCone++;
      if (localValuePreviousTLMTR == "Cube") {
        teleopCube--;
        teleopLowCube--;
      }
    } else if (localValue == "Cube") {
      teleopLowCube++;
      teleopCube++;
      if (localValuePreviousTLMTR == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousTLMTR == "Cube") {
        teleopCube--;
        teleopLowCube--;
      } else if (localValuePreviousTLMTR == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    }
  }
  localValuePreviousTLMTR = getText("dropdownTLMTR");
});
var localValuePreviousTLMMR = "None";
onEvent("dropdownTLMMR", "change", function () {
  var localValue = getText("dropdownTLMMR");
  if (localValuePreviousTLMMR != localValue) {
    if (localValue == "Cone") {
      teleopLowCone++;
      teleopCone++;
      if (localValuePreviousTLMMR == "Cube") {
        teleopCube--;
        teleopLowCube--;
      }
    } else if (localValue == "Cube") {
      teleopLowCube++;
      teleopCube++;
      if (localValuePreviousTLMMR == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousTLMMR == "Cube") {
        teleopCube--;
        teleopLowCube--;
      } else if (localValuePreviousTLMMR == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    }
  }
  localValuePreviousTLMMR = getText("dropdownTLMMR");
});
var localValuePreviousTLMBR = "None";
onEvent("dropdownTLMMR", "change", function () {
  var localValue = getText("dropdownTLMMR");
  if (localValuePreviousTLMBR != localValue) {
    if (localValue == "Cone") {
      teleopLowCone++;
      teleopCone++;
      if (localValuePreviousTLMBR == "Cube") {
        teleopCube--;
        teleopLowCube--;
      }
    } else if (localValue == "Cube") {
      teleopLowCube++;
      teleopCube++;
      if (localValuePreviousTLMBR == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousTLMBR == "Cube") {
        teleopCube--;
        teleopLowCube--;
      } else if (localValuePreviousTLMBR == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    }
  }
  localValuePreviousTLMBR = getText("dropdownTLMBR");
});
var localValuePreviousTLBTR = "None";
onEvent("dropdownTLBTR", "change", function () {
  var localValue = getText("dropdownTLBTR");
  if (localValuePreviousTLBTR != localValue) {
    if (localValue == "Cone") {
      teleopLowCone++;
      teleopCone++;
      if (localValuePreviousTLBTR == "Cube") {
        teleopCube--;
        teleopLowCube--;
      }
    } else if (localValue == "Cube") {
      teleopLowCube++;
      teleopCube++;
      if (localValuePreviousTLBTR == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousTLBTR == "Cube") {
        teleopCube--;
        teleopLowCube--;
      } else if (localValuePreviousTLBTR == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    }
  }
  localValuePreviousTLBTR = getText("dropdownTLBTR");
});
var localValuePreviousTLBMR = "None";
onEvent("dropdownTLBMR", "change", function () {
  var localValue = getText("dropdownTLBMR");
  if (localValuePreviousTLBMR != localValue) {
    if (localValue == "Cone") {
      teleopLowCone++;
      teleopCone++;
      if (localValuePreviousTLBMR == "Cube") {
        teleopCube--;
        teleopLowCube--;
      }
    } else if (localValue == "Cube") {
      teleopLowCube++;
      teleopCube++;
      if (localValuePreviousTLBMR == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousTLBMR == "Cube") {
        teleopCube--;
        teleopLowCube--;
      } else if (localValuePreviousTLBMR == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    }
  }
  localValuePreviousTLBMR = getText("dropdownTLBMR");
});
var localValuePreviousTLBBR = "None";
onEvent("dropdownTLBBR", "change", function () {
  var localValue = getText("dropdownTLBBR");
  if (localValuePreviousTLBBR != localValue) {
    if (localValue == "Cone") {
      teleopLowCone++;
      teleopCone++;
      if (localValuePreviousTLBBR == "Cube") {
        teleopCube--;
        teleopLowCube--;
      }
    } else if (localValue == "Cube") {
      teleopLowCube++;
      teleopCube++;
      if (localValuePreviousTLBBR == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    } else if (localValue == "None") {
      if (localValuePreviousTLBBR == "Cube") {
        teleopCube--;
        teleopLowCube--;
      } else if (localValuePreviousTLBBR == "Cone") {
        teleopCone--;
        teleopLowCone--;
      }
    }
  }
  localValuePreviousTLBBR = getText("dropdownTLBBR");
});
