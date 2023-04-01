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
var points = 0;
var defense = false;
var notMove = false;
var length = 34;
var height = 121;
var loc = "";
var data = new Array(length);
for (var i = 0; i < height; i++) {
  data[i] = new Array(length);
}
var list = ["teamNumber", "scouterName", "matchNumber", "autoMobility", "autoDock", "autoEngage", "autoCone", "autoCube", "teleopPark", "teleopDock", "teleopEngage", "teleopCone", "teleopCube", "autoHighCone", "autoHighCube", "autoMidCone", "autoMidCube", "autoLowCone", "autoLowCube", "teleopHighCone", "teleopHighCube", "teleopMidCone", "teleopMidCube", "teleopLowCone", "teleopLowCube", "Auto Points", "Teleop Points", "Auto Charging", "Teleop Charging", "Total Cones", "Total Cube", "Total Game Pieces", "Points without Endgame", "points", "Team Number 2", "Defense", "Did not move", "comments"];
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
  if (getText("teamNumberInput") == "" || getText("scouterNameInput") == "" || getText("matchNumberInput") == "" || getNumber("teamNumberInput") > 9999 || getNumber("teamNumberInput") < 1 || getNumber("matchNumberInput") < 1 || getNumber("matchNumberInput") > 250) {
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
    teleopPark = false;
  } else if (getChecked("checkboxTRDocked") == false) {
    teleopDock = false;
  }
  if (getChecked("checkboxTREngaged") == true) {
    teleopEngage = true;
    teleopPark = false;
    teleopDock = true;
  } else if (getChecked("checkboxTREngaged") == false) {
    teleopEngage = false;
  }
  loc = "TR";
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
    teleopPark = false;
  } else if (getChecked("checkboxTLDocked") == false) {
    teleopDock = false;
  }
  if (getChecked("checkboxTLEngaged") == true) {
    teleopEngage = true;
    teleopPark = false;
    teleopDock = true;
  } else if (getChecked("checkboxTLEngaged") == false) {
    teleopEngage = false;
  }
  loc = "TL";
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
  if (loc == "TR") {
    setScreen("teleopRight");
  } else if (loc == "TL") {
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
  var comments = getText("Comments");
  for (var i = 0; i < comments.length; i++) {
    if (comments[i] == ",") {
      comments = comments.substring(0, i) + ";" + comments.substring(i + 1, comments.length);
    }
  }
  var autoCharging = 0;
  var teleopCharging = 0;
  if (getChecked("checkboxDefense") == true) {
    defense = true;
  } else {
    defense = false;
  }
  if (getChecked("checkboxNotMove") == true) {
    notMove = true;
  } else {
    notMove = false;
  }
  var autoPoints = 6 * autoHighCone + 6 * autoHighCube + 4 * autoMidCone + 4 * autoMidCube + 3 * autoLowCone + 3 * autoLowCube;
  var teleopPoints = 5 * teleopHighCone + 5 * teleopHighCube + 3 * teleopMidCone + 3 * teleopMidCube + 2 * teleopLowCone + 2 * teleopLowCube;
  if (autoMobility == true) {
    autoChargin = autoCharging + 3;
  }
  if (autoDock == true) {
    autoCharging = autoCharging + 8;
  }
  if (autoEngage == true && autoDock == true) {
    autoCharging = autoCharging + 4;
  } else if (autoEngage == true) {
    autoCharging = autoCharging + 12;
  }
  autoPoints = autoPoints + autoCharging;
  if (teleopPark == true) {
    teleopCharging = teleopCharging + 2;
  }
  if (teleopDock == true) {
    teleopCharging = teleopCharging + 6;
  }
  if (teleopEngage == true && teleopDock == true) {
    teleopCharging = teleopCharging + 4;
  } else if (autoEngage == true) {
    teleopCharging = teleopCharging + 10;
  }
  teleopPoints = teleopCharging + teleopPoints;
  points = autoPoints + teleopPoints;
  var pointsWOEndgame = points - teleopCharging;
  var totalGamePieces = autoCone + autoCube + teleopCone + teleopCube;
  var totalCone = autoCone + teleopCone;
  var totalCube = autoCube + teleopCube;
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
  sessionData[25] = autoPoints;
  sessionData[26] = teleopPoints;
  sessionData[27] = autoCharging;
  sessionData[28] = teleopCharging;
  sessionData[29] = totalCone;
  sessionData[30] = totalCube;
  sessionData[31] = totalGamePieces;
  sessionData[32] = pointsWOEndgame;
  sessionData[33] = points;
  sessionData[34] = teamNumber;
  sessionData[35] = defense;
  sessionData[36] = notMove
  sessionData[37] = comments;
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
  var filename = "scouting_data " + scouterName + " " + time + ".csv";
  if (counter % 5 == 0) {
    exportToCsv(filename, csvContent);
  }
  createDownloadLink("#export", csvContent, filename);
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
  setChecked("checkboxDefense", false);
  setChecked("checkboxNotMove", false);
  //reset buttons hybrid cones
  hideElement("buttonConeALTTR");
  hideElement("buttonConeALTMR");
  hideElement("buttonConeALTBR");
  hideElement("buttonConeALMTR");
  hideElement("buttonConeALMMR");
  hideElement("buttonConeALMBR");
  hideElement("buttonConeALBTR");
  hideElement("buttonConeALBMR");
  hideElement("buttonConeALBBR");
  //AR button
  hideElement("buttonConeARTTL");
  hideElement("buttonConeARTML");
  hideElement("buttonConeARTBL");
  hideElement("buttonConeARMTL");
  hideElement("buttonConeARMML");
  hideElement("buttonConeARMBL");
  hideElement("buttonConeARBTL");
  hideElement("buttonConeARBML");
  hideElement("buttonConeARBBL");
  //TL button
  hideElement("buttonConeTLTTR");
  hideElement("buttonConeTLTMR");
  hideElement("buttonConeTLTBR");
  hideElement("buttonConeTLMTR");
  hideElement("buttonConeTLMMR");
  hideElement("buttonConeTLMBR");
  hideElement("buttonConeTLBTR");
  hideElement("buttonConeTLBMR");
  hideElement("buttonConeTLBBR");
  //TR button
  hideElement("buttonConeTRTTL");
  hideElement("buttonConeTRTML");
  hideElement("buttonConeTRTBL");
  hideElement("buttonConeTRMTL");
  hideElement("buttonConeTRMML");
  hideElement("buttonConeTRMBL");
  hideElement("buttonConeTRBTL");
  hideElement("buttonConeTRBML");
  hideElement("buttonConeTRBBL");
  //reset hybrid cubes
  hideElement("buttonCubeALTTR");
  hideElement("buttonCubeALTMR");
  hideElement("buttonCubeALTBR");
  hideElement("buttonCubeALMTR");
  hideElement("buttonCubeALMMR");
  hideElement("buttonCubeALMBR");
  hideElement("buttonCubeALBTR");
  hideElement("buttonCubeALBMR");
  hideElement("buttonCubeALBBR");
  //AR button
  hideElement("buttonCubeARTTL");
  hideElement("buttonCubeARTML");
  hideElement("buttonCubeARTBL");
  hideElement("buttonCubeARMTL");
  hideElement("buttonCubeARMML");
  hideElement("buttonCubeARMBL");
  hideElement("buttonCubeARBTL");
  hideElement("buttonCubeARBML");
  hideElement("buttonCubeARBBL");
  //TL button
  hideElement("buttonCubeTLTTR");
  hideElement("buttonCubeTLTMR");
  hideElement("buttonCubeTLTBR");
  hideElement("buttonCubeTLMTR");
  hideElement("buttonCubeTLMMR");
  hideElement("buttonCubeTLMBR");
  hideElement("buttonCubeTLBTR");
  hideElement("buttonCubeTLBMR");
  hideElement("buttonCubeTLBBR");
  //TR button
  hideElement("buttonCubeTRTTL");
  hideElement("buttonCubeTRTML");
  hideElement("buttonCubeTRTBL");
  hideElement("buttonCubeTRMTL");
  hideElement("buttonCubeTRMML");
  hideElement("buttonCubeTRMBL");
  hideElement("buttonCubeTRBTL");
  hideElement("buttonCubeTRBML");
  hideElement("buttonCubeTRBBL");
  //show basic buttons
  showElement("buttonALTTR");
  showElement("buttonALTMR");
  showElement("buttonALTBR");
  showElement("buttonALMTR");
  showElement("buttonALMMR");
  showElement("buttonALMBR");
  showElement("buttonALBTR");
  showElement("buttonALBMR");
  showElement("buttonALBBR");
  //AR button
  showElement("buttonARTTL");
  showElement("buttonARTML");
  showElement("buttonARTBL");
  showElement("buttonARMTL");
  showElement("buttonARMML");
  showElement("buttonARMBL");
  showElement("buttonARBTL");
  showElement("buttonARBML");
  showElement("buttonARBBL");
  //TL button
  showElement("buttonTLTTR");
  showElement("buttonTLTMR");
  showElement("buttonTLTBR");
  showElement("buttonTLMTR");
  showElement("buttonTLMMR");
  showElement("buttonTLMBR");
  showElement("buttonTLBTR");
  showElement("buttonTLBMR");
  showElement("buttonTLBBR");
  //TR button
  showElement("buttonTRTTL");
  showElement("buttonTRTML");
  showElement("buttonTRTBL");
  showElement("buttonTRMTL");
  showElement("buttonTRMML");
  showElement("buttonTRMBL");
  showElement("buttonTRBTL");
  showElement("buttonTRBML");
  showElement("buttonTRBBL");
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
  //reset variables
  teamNumber = 0;
  scouterName = "";
  matchNumber = 0;
  autoMobility = false;
  autoDock = false;
  autoEngage = false;
  autoCone = 0;
  autoCube = 0;
  teleopPark = false;
  teleopDock = false;
  teleopEngage = false;
  teleopCone = 0;
  teleopCube = 0;
  autoHighCone = 0;
  autoHighCube = 0;
  autoMidCone = 0;
  autoMidCube = 0;
  autoLowCone = 0;
  autoLowCube = 0;
  teleopHighCone = 0;
  teleopHighCube = 0;
  teleopMidCone = 0;
  teleopMidCube = 0;
  teleopLowCone = 0;
  teleopLowCube = 0;
  points = 0;
  defense = false;
  notMove = false;
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
//button auto left
onEvent("buttonALTTR", "click", function () {
  autoCone++;
  autoLowCone++;
  showElement("buttonConeALTTR");
  hideElement("buttonALTTR");
});
onEvent("buttonConeALTTR", "click", function () {
  autoCone--;
  autoLowCone--;
  autoCube++;
  autoLowCube++;
  hideElement("buttonConeALTTR");
  showElement("buttonCubeALTTR");
});
onEvent("buttonCubeALTTR", "click", function () {
  autoCube--;
  autoLowCube--;
  hideElement("buttonCubeALTTR");
  showElement("buttonALTTR");
});
onEvent("buttonALTMR", "click", function () {
  autoCone++;
  autoLowCone++;
  showElement("buttonConeALTMR");
  hideElement("buttonALTMR");
});
onEvent("buttonConeALTMR", "click", function () {
  autoCone--;
  autoLowCone--;
  autoCube++;
  autoLowCube++;
  hideElement("buttonConeALTMR");
  showElement("buttonCubeALTMR");
});
onEvent("buttonCubeALTMR", "click", function () {
  autoCube--;
  autoLowCube--;
  hideElement("buttonCubeALTMR");
  showElement("buttonALTMR");
});
onEvent("buttonALTBR", "click", function () {
  autoCone++;
  autoLowCone++;
  showElement("buttonConeALTBR");
  hideElement("buttonALTBR");
});
onEvent("buttonConeALTBR", "click", function () {
  autoCone--;
  autoLowCone--;
  autoCube++;
  autoLowCube++;
  hideElement("buttonConeALTBR");
  showElement("buttonCubeALTBR");
});
onEvent("buttonCubeALTBR", "click", function () {
  autoCube--;
  autoLowCube--;
  hideElement("buttonCubeALTBR");
  showElement("buttonALTBR");
});
onEvent("buttonALMTR", "click", function () {
  autoCone++;
  autoLowCone++;
  showElement("buttonConeALMTR");
  hideElement("buttonALMTR");
});
onEvent("buttonConeALMTR", "click", function () {
  autoCone--;
  autoLowCone--;
  autoCube++;
  autoLowCube++;
  hideElement("buttonConeALMTR");
  showElement("buttonCubeALMTR");
});
onEvent("buttonCubeALMTR", "click", function () {
  autoCube--;
  autoLowCube--;
  hideElement("buttonCubeALMTR");
  showElement("buttonALMTR");
});
onEvent("buttonALMMR", "click", function () {
  autoCone++;
  autoLowCone++;
  showElement("buttonConeALMMR");
  hideElement("buttonALMMR");
});
onEvent("buttonConeALMMR", "click", function () {
  autoCone--;
  autoLowCone--;
  autoCube++;
  autoLowCube++;
  hideElement("buttonConeALMMR");
  showElement("buttonCubeALMMR");
});
onEvent("buttonCubeALMMR", "click", function () {
  autoCube--;
  autoLowCube--;
  hideElement("buttonCubeALMMR");
  showElement("buttonALMMR");
});
onEvent("buttonALMBR", "click", function () {
  autoCone++;
  autoLowCone++;
  showElement("buttonConeALMBR");
  hideElement("buttonALMBR");
});
onEvent("buttonConeALMBR", "click", function () {
  autoCone--;
  autoLowCone--;
  autoCube++;
  autoLowCube++;
  hideElement("buttonConeALMBR");
  showElement("buttonCubeALMBR");
});
onEvent("buttonCubeALMBR", "click", function () {
  autoCube--;
  autoLowCube--;
  hideElement("buttonCubeALMBR");
  showElement("buttonALMBR");
});
onEvent("buttonALBTR", "click", function () {
  autoCone++;
  autoLowCone++;
  showElement("buttonConeALBTR");
  hideElement("buttonALBTR");
});
onEvent("buttonConeALBTR", "click", function () {
  autoCone--;
  autoLowCone--;
  autoCube++;
  autoLowCube++;
  hideElement("buttonConeALBTR");
  showElement("buttonCubeALBTR");
});
onEvent("buttonCubeALBTR", "click", function () {
  autoCube--;
  autoLowCube--;
  hideElement("buttonCubeALBTR");
  showElement("buttonALBTR");
});
onEvent("buttonALBMR", "click", function () {
  autoCone++;
  autoLowCone++;
  showElement("buttonConeALBMR");
  hideElement("buttonALBMR");
});
onEvent("buttonConeALBMR", "click", function () {
  autoCone--;
  autoLowCone--;
  autoCube++;
  autoLowCube++;
  hideElement("buttonConeALBMR");
  showElement("buttonCubeALBMR");
});
onEvent("buttonCubeALBMR", "click", function () {
  autoCube--;
  autoLowCube--;
  hideElement("buttonCubeALBMR");
  showElement("buttonALBMR");
});
onEvent("buttonALBBR", "click", function () {
  autoCone++;
  autoLowCone++;
  showElement("buttonConeALBBR");
  hideElement("buttonALBBR");
});
onEvent("buttonConeALBBR", "click", function () {
  autoCone--;
  autoLowCone--;
  autoCube++;
  autoLowCube++;
  hideElement("buttonConeALBBR");
  showElement("buttonCubeALBBR");
});
onEvent("buttonCubeALBBR", "click", function () {
  autoCube--;
  autoLowCube--;
  hideElement("buttonCubeALBBR");
  showElement("buttonALBBR");
});
//button auto right
onEvent("buttonARTTL", "click", function () {
  autoCone++;
  autoLowCone++;
  showElement("buttonConeARTTL");
  hideElement("buttonARTTL");
});
onEvent("buttonConeARTTL", "click", function () {
  autoCone--;
  autoLowCone--;
  autoCube++;
  autoLowCube++;
  hideElement("buttonConeARTTL");
  showElement("buttonCubeARTTL");
});
onEvent("buttonCubeARTTL", "click", function () {
  autoCube--;
  autoLowCube--;
  hideElement("buttonCubeARTTL");
  showElement("buttonARTTL");
});
onEvent("buttonARTML", "click", function () {
  autoCone++;
  autoLowCone++;
  showElement("buttonConeARTML");
  hideElement("buttonARTML");
});
onEvent("buttonConeARTML", "click", function () {
  autoCone--;
  autoLowCone--;
  autoCube++;
  autoLowCube++;
  hideElement("buttonConeARTML");
  showElement("buttonCubeARTML");
});
onEvent("buttonCubeARTML", "click", function () {
  autoCube--;
  autoLowCube--;
  hideElement("buttonCubeARTML");
  showElement("buttonARTML");
});
onEvent("buttonARTBL", "click", function () {
  autoCone++;
  autoLowCone++;
  showElement("buttonConeARTBL");
  hideElement("buttonARTBL");
});
onEvent("buttonConeARTBL", "click", function () {
  autoCone--;
  autoLowCone--;
  autoCube++;
  autoLowCube++;
  hideElement("buttonConeARTBL");
  showElement("buttonCubeARTBL");
});
onEvent("buttonCubeARTBL", "click", function () {
  autoCube--;
  autoLowCube--;
  hideElement("buttonCubeARTBL");
  showElement("buttonARTBL");
});
onEvent("buttonARMTL", "click", function () {
  autoCone++;
  autoLowCone++;
  showElement("buttonConeARMTL");
  hideElement("buttonARMTL");
});
onEvent("buttonConeARMTL", "click", function () {
  autoCone--;
  autoLowCone--;
  autoCube++;
  autoLowCube++;
  hideElement("buttonConeARMTL");
  showElement("buttonCubeARMTL");
});
onEvent("buttonCubeARMTL", "click", function () {
  autoCube--;
  autoLowCube--;
  hideElement("buttonCubeARMTL");
  showElement("buttonARMTL");
});
onEvent("buttonARMML", "click", function () {
  autoCone++;
  autoLowCone++;
  showElement("buttonConeARMML");
  hideElement("buttonARMML");
});
onEvent("buttonConeARMML", "click", function () {
  autoCone--;
  autoLowCone--;
  autoCube++;
  autoLowCube++;
  hideElement("buttonConeARMML");
  showElement("buttonCubeARMML");
});
onEvent("buttonCubeARMML", "click", function () {
  autoCube--;
  autoLowCube--;
  hideElement("buttonCubeARMML");
  showElement("buttonARMML");
});
onEvent("buttonARMBL", "click", function () {
  autoCone++;
  autoLowCone++;
  showElement("buttonConeARMBL");
  hideElement("buttonARMBL");
});
onEvent("buttonConeARMBL", "click", function () {
  autoCone--;
  autoLowCone--;
  autoCube++;
  autoLowCube++;
  hideElement("buttonConeARMBL");
  showElement("buttonCubeARMBL");
});
onEvent("buttonCubeARMBL", "click", function () {
  autoCube--;
  autoLowCube--;
  hideElement("buttonCubeARMBL");
  showElement("buttonARMBL");
});
onEvent("buttonARBTL", "click", function () {
  autoCone++;
  autoLowCone++;
  showElement("buttonConeARBTL");
  hideElement("buttonARBTL");
});
onEvent("buttonConeARBTL", "click", function () {
  autoCone--;
  autoLowCone--;
  autoCube++;
  autoLowCube++;
  hideElement("buttonConeARBTL");
  showElement("buttonCubeARBTL");
});
onEvent("buttonCubeARBTL", "click", function () {
  autoCube--;
  autoLowCube--;
  hideElement("buttonCubeARBTL");
  showElement("buttonARBTL");
});
onEvent("buttonARBML", "click", function () {
  autoCone++;
  autoLowCone++;
  showElement("buttonConeARBML");
  hideElement("buttonARBML");
});
onEvent("buttonConeARBML", "click", function () {
  autoCone--;
  autoLowCone--;
  autoCube++;
  autoLowCube++;
  hideElement("buttonConeARBML");
  showElement("buttonCubeARBML");
});
onEvent("buttonCubeARBML", "click", function () {
  autoCube--;
  autoLowCube--;
  hideElement("buttonCubeARBML");
  showElement("buttonARBML");
});
onEvent("buttonARBBL", "click", function () {
  autoCone++;
  autoLowCone++;
  showElement("buttonConeARBBL");
  hideElement("buttonARBBL");
});
onEvent("buttonConeARBBL", "click", function () {
  autoCone--;
  autoLowCone--;
  autoCube++;
  autoLowCube++;
  hideElement("buttonConeARBBL");
  showElement("buttonCubeARBBL");
});
onEvent("buttonCubeARBBL", "click", function () {
  autoCube--;
  autoLowCube--;
  hideElement("buttonCubeARBBL");
  showElement("buttonARBBL");
});
//teleop left
//button teleop left
onEvent("buttonTLTTR", "click", function () {
  teleopCone++;
  teleopLowCone++;
  showElement("buttonConeTLTTR");
  hideElement("buttonTLTTR");
});
onEvent("buttonConeTLTTR", "click", function () {
  teleopCone--;
  teleopLowCone--;
  teleopCube++;
  teleopLowCube++;
  hideElement("buttonConeTLTTR");
  showElement("buttonCubeTLTTR");
});
onEvent("buttonCubeTLTTR", "click", function () {
  teleopCube--;
  teleopLowCube--;
  hideElement("buttonCubeTLTTR");
  showElement("buttonTLTTR");
});
onEvent("buttonTLTMR", "click", function () {
  teleopCone++;
  teleopLowCone++;
  showElement("buttonConeTLTMR");
  hideElement("buttonTLTMR");
});
onEvent("buttonConeTLTMR", "click", function () {
  teleopCone--;
  teleopLowCone--;
  teleopCube++;
  teleopLowCube++;
  hideElement("buttonConeTLTMR");
  showElement("buttonCubeTLTMR");
});
onEvent("buttonCubeTLTMR", "click", function () {
  teleopCube--;
  teleopLowCube--;
  hideElement("buttonCubeTLTMR");
  showElement("buttonTLTMR");
});
onEvent("buttonTLTBR", "click", function () {
  teleopCone++;
  teleopLowCone++;
  showElement("buttonConeTLTBR");
  hideElement("buttonTLTBR");
});
onEvent("buttonConeTLTBR", "click", function () {
  teleopCone--;
  teleopLowCone--;
  teleopCube++;
  teleopLowCube++;
  hideElement("buttonConeTLTBR");
  showElement("buttonCubeTLTBR");
});
onEvent("buttonCubeTLTBR", "click", function () {
  teleopCube--;
  teleopLowCube--;
  hideElement("buttonCubeTLTBR");
  showElement("buttonTLTBR");
});
onEvent("buttonTLMTR", "click", function () {
  teleopCone++;
  teleopLowCone++;
  showElement("buttonConeTLMTR");
  hideElement("buttonTLMTR");
});
onEvent("buttonConeTLMTR", "click", function () {
  teleopCone--;
  teleopLowCone--;
  teleopCube++;
  teleopLowCube++;
  hideElement("buttonConeTLMTR");
  showElement("buttonCubeTLMTR");
});
onEvent("buttonCubeTLMTR", "click", function () {
  teleopCube--;
  teleopLowCube--;
  hideElement("buttonCubeTLMTR");
  showElement("buttonTLMTR");
});
onEvent("buttonTLMMR", "click", function () {
  teleopCone++;
  teleopLowCone++;
  showElement("buttonConeTLMMR");
  hideElement("buttonTLMMR");
});
onEvent("buttonConeTLMMR", "click", function () {
  teleopCone--;
  teleopLowCone--;
  teleopCube++;
  teleopLowCube++;
  hideElement("buttonConeTLMMR");
  showElement("buttonCubeTLMMR");
});
onEvent("buttonCubeTLMMR", "click", function () {
  teleopCube--;
  teleopLowCube--;
  hideElement("buttonCubeTLMMR");
  showElement("buttonTLMMR");
});
onEvent("buttonTLMBR", "click", function () {
  teleopCone++;
  teleopLowCone++;
  showElement("buttonConeTLMBR");
  hideElement("buttonTLMBR");
});
onEvent("buttonConeTLMBR", "click", function () {
  teleopCone--;
  teleopLowCone--;
  teleopCube++;
  teleopLowCube++;
  hideElement("buttonConeTLMBR");
  showElement("buttonCubeTLMBR");
});
onEvent("buttonCubeTLMBR", "click", function () {
  teleopCube--;
  teleopLowCube--;
  hideElement("buttonCubeTLMBR");
  showElement("buttonTLMBR");
});
onEvent("buttonTLBTR", "click", function () {
  teleopCone++;
  teleopLowCone++;
  showElement("buttonConeTLBTR");
  hideElement("buttonTLBTR");
});
onEvent("buttonConeTLBTR", "click", function () {
  teleopCone--;
  teleopLowCone--;
  teleopCube++;
  teleopLowCube++;
  hideElement("buttonConeTLBTR");
  showElement("buttonCubeTLBTR");
});
onEvent("buttonCubeTLBTR", "click", function () {
  teleopCube--;
  teleopLowCube--;
  hideElement("buttonCubeTLBTR");
  showElement("buttonTLBTR");
});
onEvent("buttonTLBMR", "click", function () {
  teleopCone++;
  teleopLowCone++;
  showElement("buttonConeTLBMR");
  hideElement("buttonTLBMR");
});
onEvent("buttonConeTLBMR", "click", function () {
  teleopCone--;
  teleopLowCone--;
  teleopCube++;
  teleopLowCube++;
  hideElement("buttonConeTLBMR");
  showElement("buttonCubeTLBMR");
});
onEvent("buttonCubeTLBMR", "click", function () {
  teleopCube--;
  teleopLowCube--;
  hideElement("buttonCubeTLBMR");
  showElement("buttonTLBMR");
});
onEvent("buttonTLBBR", "click", function () {
  teleopCone++;
  teleopLowCone++;
  showElement("buttonConeTLBBR");
  hideElement("buttonTLBBR");
});
onEvent("buttonConeTLBBR", "click", function () {
  teleopCone--;
  teleopLowCone--;
  teleopCube++;
  teleopLowCube++;
  hideElement("buttonConeTLBBR");
  showElement("buttonCubeTLBBR");
});
onEvent("buttonCubeTLBBR", "click", function () {
  teleopCube--;
  teleopLowCube--;
  hideElement("buttonCubeTLBBR");
  showElement("buttonTLBBR");
});
//button right
onEvent("buttonTRTTL", "click", function () {
  teleopCone++;
  teleopLowCone++;
  showElement("buttonConeTRTTL");
  hideElement("buttonTRTTL");
});
onEvent("buttonConeTRTTL", "click", function () {
  teleopCone--;
  teleopLowCone--;
  teleopCube++;
  teleopLowCube++;
  hideElement("buttonConeTRTTL");
  showElement("buttonCubeTRTTL");
});
onEvent("buttonCubeTRTTL", "click", function () {
  teleopCube--;
  teleopLowCube--;
  hideElement("buttonCubeTRTTL");
  showElement("buttonTRTTL");
});
onEvent("buttonTRTML", "click", function () {
  teleopCone++;
  teleopLowCone++;
  showElement("buttonConeTRTML");
  hideElement("buttonTRTML");
});
onEvent("buttonConeTRTML", "click", function () {
  teleopCone--;
  teleopLowCone--;
  teleopCube++;
  teleopLowCube++;
  hideElement("buttonConeTRTML");
  showElement("buttonCubeTRTML");
});
onEvent("buttonCubeTRTML", "click", function () {
  teleopCube--;
  teleopLowCube--;
  hideElement("buttonCubeTRTML");
  showElement("buttonTRTML");
});
onEvent("buttonTRTBL", "click", function () {
  teleopCone++;
  teleopLowCone++;
  showElement("buttonConeTRTBL");
  hideElement("buttonTRTBL");
});
onEvent("buttonConeTRTBL", "click", function () {
  teleopCone--;
  teleopLowCone--;
  teleopCube++;
  teleopLowCube++;
  hideElement("buttonConeTRTBL");
  showElement("buttonCubeTRTBL");
});
onEvent("buttonCubeTRTBL", "click", function () {
  teleopCube--;
  teleopLowCube--;
  hideElement("buttonCubeTRTBL");
  showElement("buttonTRTBL");
});
onEvent("buttonTRMTL", "click", function () {
  teleopCone++;
  teleopLowCone++;
  showElement("buttonConeTRMTL");
  hideElement("buttonTRMTL");
});
onEvent("buttonConeTRMTL", "click", function () {
  teleopCone--;
  teleopLowCone--;
  teleopCube++;
  teleopLowCube++;
  hideElement("buttonConeTRMTL");
  showElement("buttonCubeTRMTL");
});
onEvent("buttonCubeTRMTL", "click", function () {
  teleopCube--;
  teleopLowCube--;
  hideElement("buttonCubeTRMTL");
  showElement("buttonTRMTL");
});
onEvent("buttonTRMML", "click", function () {
  teleopCone++;
  teleopLowCone++;
  showElement("buttonConeTRMML");
  hideElement("buttonTRMML");
});
onEvent("buttonConeTRMML", "click", function () {
  teleopCone--;
  teleopLowCone--;
  teleopCube++;
  teleopLowCube++;
  hideElement("buttonConeTRMML");
  showElement("buttonCubeTRMML");
});
onEvent("buttonCubeTRMML", "click", function () {
  teleopCube--;
  teleopLowCube--;
  hideElement("buttonCubeTRMML");
  showElement("buttonTRMML");
});
onEvent("buttonTRMBL", "click", function () {
  teleopCone++;
  teleopLowCone++;
  showElement("buttonConeTRMBL");
  hideElement("buttonTRMBL");
});
onEvent("buttonConeTRMBL", "click", function () {
  teleopCone--;
  teleopLowCone--;
  teleopCube++;
  teleopLowCube++;
  hideElement("buttonConeTRMBL");
  showElement("buttonCubeTRMBL");
});
onEvent("buttonCubeTRMBL", "click", function () {
  teleopCube--;
  teleopLowCube--;
  hideElement("buttonCubeTRMBL");
  showElement("buttonTRMBL");
});
onEvent("buttonTRBTL", "click", function () {
  teleopCone++;
  teleopLowCone++;
  showElement("buttonConeTRBTL");
  hideElement("buttonTRBTL");
});
onEvent("buttonConeTRBTL", "click", function () {
  teleopCone--;
  teleopLowCone--;
  teleopCube++;
  teleopLowCube++;
  hideElement("buttonConeTRBTL");
  showElement("buttonCubeTRBTL");
});
onEvent("buttonCubeTRBTL", "click", function () {
  teleopCube--;
  teleopLowCube--;
  hideElement("buttonCubeTRBTL");
  showElement("buttonTRBTL");
});
onEvent("buttonTRBML", "click", function () {
  teleopCone++;
  teleopLowCone++;
  showElement("buttonConeTRBML");
  hideElement("buttonTRBML");
});
onEvent("buttonConeTRBML", "click", function () {
  teleopCone--;
  teleopLowCone--;
  teleopCube++;
  teleopLowCube++;
  hideElement("buttonConeTRBML");
  showElement("buttonCubeTRBML");
});
onEvent("buttonCubeTRBML", "click", function () {
  teleopCube--;
  teleopLowCube--;
  hideElement("buttonCubeTRBML");
  showElement("buttonTRBML");
});
onEvent("buttonTRBBL", "click", function () {
  teleopCone++;
  teleopLowCone++;
  showElement("buttonConeTRBBL");
  hideElement("buttonTRBBL");
});
onEvent("buttonConeTRBBL", "click", function () {
  teleopCone--;
  teleopLowCone--;
  teleopCube++;
  teleopLowCube++;
  hideElement("buttonConeTRBBL");
  showElement("buttonCubeTRBBL");
});
onEvent("buttonCubeTRBBL", "click", function () {
  teleopCube--;
  teleopLowCube--;
  hideElement("buttonCubeTRBBL");
  showElement("buttonTRBBL");
});