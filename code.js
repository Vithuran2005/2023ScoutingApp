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
var m = 20;
var n = 5;
var data = new Array(m); // create an empty array of length n
for (var i = 0; i < m; i++) {
  data[i] = new Array(n); // make each element an array
}
var list = ["teamNumber", "scouterName", "matchNumber", "autoMobility", "autoDock", "autoEngage", "autoCone", "autoCube", "teleopPark", "teleopDock", "teleopEngage", "teleopCone", "teleopCube", "autoHighCone", "autoHighCube", "autoMidCone", "autoMidCube", "autoLowCone", "autoLowCube", "teleopHighCone", "teleopHighCube", "teleopMidCone", "teleopMidCube", "teleopLowCone", "teleopLowCube", "comments", "points"];
for(var i = 0; i < list.length; i++){
	data[0][i] = list[i];
}
var sessionData = new Array(m);
//continue buttons
onEvent("continueHome", "click", function( ) {
  if(getText("allianceDropdown") == "Left"){
    setScreen("autoLeft");
  } else {
    setScreen("autoRight");
  }
  teamNumber = getText("teamNumberInput");
  scouterName = getText("scouterNameInput");
  matchNumber = getText("matchNumberInput");
});
onEvent("continueTeleopRight", "click", function( ) {
  if(getChecked("checkboxTRPark") == true){
    teleopPark = true;
  } else if(getChecked("checkboxTRPark") == false){
    teleopPark = false;
  }
  if(getChecked("checkboxTRDocked") == true){
    teleopDock = true;
  } else if(getChecked("checkboxTRDocked") == false){
    teleopDock = false;
  }
  if(getChecked("checkboxTREngaged") == true){
    teleopEngage = true;
  } else if(getChecked("checkboxTREngaged") == false){
    teleopEngage = false;
  }
  setScreen("final");
});
onEvent("continueTeleopLeft", "click", function( ) {
  if(getChecked("checkboxTLPark") == true){
    teleopPark = true;
  } else if(getChecked("checkboxTLPark") == false){
    teleopPark = false;
  }
  if(getChecked("checkboxTLDocked") == true){
    teleopDock = true;
  } else if(getChecked("checkboxTLDocked") == false){
    teleopDock = false;
  }
  if(getChecked("checkboxTLEngaged") == true){
    teleopEngage = true;
  } else if(getChecked("checkboxTLEngaged") == false){
    teleopEngage = false;
  }
  setScreen("final");
});
onEvent("continueAutoRight", "click", function( ) {
  if(getChecked("checkboxARMobility") == true){
    autoMobility = true;
  } else if(getChecked("checkboxARMobility") == false){
    autoMobility = false;
  }
  if(getChecked("checkboxARDocked") == true){
    autoDock = true;
  } else if(getChecked("checkboxARDocked") == false){
    autoDock = false;
  }
  if(getChecked("checkboxAREngaged") == true){
    autoEngage = true;
  } else if(getChecked("checkboxAREngaged") == false){
    autoEngage = false;
  }
  setScreen("teleopRight");
});
onEvent("continueAutoLeft", "click", function( ) {
  if(getChecked("checkboxALMobility") == true){
    autoMobility = true;
  } else if(getChecked("checkboxALMobility") == false){
    autoMobility = false;
  }
  if(getChecked("checkboxALDocked") == true){
    autoDock = true;
  } else if(getChecked("checkboxALDocked") == false){
    autoDock = false;
  }
  if(getChecked("checkboxALEngaged") == true){
    autoEngage = true;
  } else if(getChecked("checkboxALEngaged") == false){
    autoEngage = false;
  }
  setScreen("teleopLeft");
});
onEvent("submit", "click", function( ) {
  comments = getText("Comments");
  if(autoMobility == true){
    points = points + 3;
  }
  if(autoDock == true){
    points = points + 8;
  }
  if(autoEngage == true && autoDock == true){
    points = points + 4;
  } else if (autoEngage == true) {
    points = points + 12;
  }
  if(teleopPark == true){
    points = points + 2;
  }
  if(teleopDock == true){
    points = points + 8;
  }
  if(teleopEngage == true && teleopDock == true){
    points = points + 4;
  } else if (autoEngage == true) {
    points = points + 10;
  }
  points = 6 * autoHighCone + 6 * autoHighCube + 4 * autoMidCone + 4 * autoMidCube + 3 * autoLowCone + 3 * autoLowCube;
  points = 5 * teleopHighCone + 5 * teleopHighCube + 3 * teleopMidCone + 3 * teleopMidCube + 2 * teleopLowCone + 2 * teleopLowCube;
  sessionData[0] = teamNumber;
  sessionData[1] = scouterName;
  sessionData[3] = matchNumber;
  sessionData[4] = autoMobility;
  sessionData[5] = autoDock;
  sessionData[6] = autoEngage;
  sessionData[7] = autoCone;
  sessionData[8] = autoCube;
  sessionData[9] = teleopPark;
  sessionData[10] = teleopDock;
  sessionData[11] = teleopEngage;
  sessionData[12] = teleopCone;
  sessionData[13] = teleopCube;
  sessionData[14] = autoHighCone;
  sessionData[15] = autoHighCube;
  sessionData[16] = autoMidCone;
  sessionData[17] = autoMidCube;
  sessionData[18] = autoLowCone;
  sessionData[19] = autoLowCube;
  sessionData[20] = teleopHighCone;
  sessionData[21] = teleopHighCube;
  sessionData[22] = teleopMidCone;
  sessionData[23] = teleopMidCube;
  sessionData[24] = teleopLowCone;
  sessionData[25] = teleopLowCube;
  sessionData[26] = comments;
  sessionData[27] = points;
	for(var i = 0; i < sessionData.length; i++){
    data[counter][i] = sessionData[i];
	}
	var csvContent = "data:text/csv;charset=utf-8,";
	data.forEach(function(dataArray) {
	impdata = dataArray.join(",");
	csvContent += impdata + "\r\n";
	});
	createDownloadLink("#export",csvContent,"file.csv");
	counter++;
//reseting
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
//auto
  setChecked("checkboxALMobility", false);
  setChecked("checkboxARMobility", false);
  setChecked("checkboxALDocked", false);
  setChecked("checkboxARDocked", false);
  setChecked("checkboxALEngaged", false);
  setChecked("checkboxAREngaged", false);
//teleop
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
  setText("teamNumberInput", "Team Number");
  setText("scouterNameInput", "Name");
  setText("matchNumberInput", "Match Number");
  setText("Comments", "Additional Comments");
  
  setScreen("home");
});
//checkbox auto left
onEvent("checkboxALTTL","click", function(){
  autoCone++;
  autoHighCone++;
  showElement("buttonALTTL");
});
onEvent("buttonALTTL","click", function(){
  autoCone--;
  autoHighCone--;
  hideElement("buttonALTTL");
  setChecked("checkboxALTTL", false);
});
onEvent("checkboxALTML","click", function(){
  autoCube++;
  autoHighCube++;
  showElement("buttonALTML");
});
onEvent("buttonALTML","click", function(){
  autoCube--;
  autoHighCube--;
  hideElement("buttonALTML");
  setChecked("checkboxALTML", false);
});
onEvent("checkboxALTBL","click", function(){
  autoCone++;
  autoHighCone++;
  showElement("buttonALTBL");
});
onEvent("buttonALTBL","click", function(){
  autoCone--;
  autoHighCone--;
  hideElement("buttonALTBL");
  setChecked("checkboxALTBL", false);
});
onEvent("checkboxALMTL","click", function(){
  autoCone++;
  autoHighCone++;
  showElement("buttonALMTL");
});
onEvent("buttonALMTL","click", function(){
  autoCone--;
  autoHighCone--;
  hideElement("buttonALMTL");
  setChecked("checkboxALMTL", false);
});
onEvent("checkboxALMML","click", function(){
  autoCube++;
  autoHighCube++;
  showElement("buttonALMML");
});
onEvent("buttonALMML","click", function(){
  autoCube--;
  autoHighCube--;
  hideElement("buttonALMML");
  setChecked("checkboxALMML", false);
});
onEvent("checkboxALMBL","click", function(){
  autoCone++;
  autoHighCone++;
  showElement("buttonALMBL");
});
onEvent("buttonALMBL","click", function(){
  autoCone--;
  autoHighCone--;
  hideElement("buttonALMBL");
  setChecked("checkboxALMBL", false);
});
onEvent("checkboxALBTL","click", function(){
  autoCone++;
  autoHighCone++;
  showElement("buttonALBTL");
});
onEvent("buttonALBTL","click", function(){
  autoCone--;
  autoHighCone--;
  hideElement("buttonALBTL");
  setChecked("checkboxALBTL", false);
});
onEvent("checkboxALBML","click", function(){
  autoCube++;
  autoHighCube--;
  showElement("buttonALBML");
});
onEvent("buttonALBML","click", function(){
  autoCube--;
  autoHighCube++;
  hideElement("buttonALBML");
  setChecked("checkboxALBML", false);
});
onEvent("checkboxALBBL","click", function(){
  autoCone++;
  autoHighCone++;
  showElement("buttonALBBL");
});
onEvent("buttonALBBL","click", function(){
  autoCone--;
  autoHighCone--;
  hideElement("buttonALBBL");
  setChecked("checkboxALBBL", false);
});
onEvent("checkboxALTTM","click", function(){
  autoCone++;
  autoMidCone++;
  showElement("buttonALTTM");
});
onEvent("buttonALTTM","click", function(){
  autoCone--;
  autoMidCone--;
  hideElement("buttonALTTM");
  setChecked("checkboxALTTM", false);
});
onEvent("checkboxALTMM","click", function(){
  autoCube++;
  autoMidCube++;
  showElement("buttonALTMM");
});
onEvent("buttonALTMM","click", function(){
  autoCube--;
  autoMidCube--;
  hideElement("buttonALTMM");
  setChecked("checkboxALTMM", false);
});
onEvent("checkboxALTBM","click", function(){
  autoCone++;
  autoMidCone++;
  showElement("buttonALTBM");
});
onEvent("buttonALTBM","click", function(){
  autoCone--;
  autoMidCone--;
  hideElement("buttonALTBM");
  setChecked("checkboxALTBM", false);
});
onEvent("checkboxALMTM","click", function(){
  autoCone++;
  autoMidCone++;
  showElement("buttonALMTM");
});
onEvent("buttonALMTM","click", function(){
  autoCone--;
  autoMidCone--;
  hideElement("buttonALMTM");
  setChecked("checkboxALMTM", false);
});
onEvent("checkboxALMMM","click", function(){
  autoCube++;
  autoMidCube++;
  showElement("buttonALMMM");
});
onEvent("buttonALMMM","click", function(){
  autoCube--;
  autoMidCube--;
  hideElement("buttonALMMM");
  setChecked("checkboxALMMM", false);
});
onEvent("checkboxALMBM","click", function(){
  autoCone++;
  autoMidCone++;
  showElement("buttonALMBM");
});
onEvent("buttonALMBM","click", function(){
  autoCone--;
  autoMidCone--;
  hideElement("buttonALMBM");
  setChecked("checkboxALMBM", false);
});
onEvent("checkboxALBTM","click", function(){
  autoCone++;
  autoMidCone++;
  showElement("buttonALBTM");
});
onEvent("buttonALBTM","click", function(){
  autoCone--;
  autoMidCone--;
  hideElement("buttonALBTM");
  setChecked("checkboxALBTM", false);
});
onEvent("checkboxALBMM","click", function(){
  autoCube++;
  autoMidCube--;
  showElement("buttonALBMM");
});
onEvent("buttonALBMM","click", function(){
  autoCube--;
  autoMidCube++;
  hideElement("buttonALBMM");
  setChecked("checkboxALBMM", false);
});
onEvent("checkboxALBBM","click", function(){
  autoCone++;
  autoMidCone++;
  showElement("buttonALBBM");
});
onEvent("buttonALBBM","click", function(){
  autoCone--;
  autoMidCone--;
  hideElement("buttonALBBM");
  setChecked("checkboxALBBM", false);
});
//auto right
onEvent("checkboxARTTR","click", function(){
  teleopCone++;
  teleopHighCone++;
  showElement("buttonARTTR");
});
onEvent("buttonARTTR","click", function(){
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonARTTR");
  setChecked("checkboxARTTR", false);
});
onEvent("checkboxARTMR","click", function(){
  teleopCube++;
  teleopHighCube++;
  showElement("buttonARTMR");
});
onEvent("buttonARTMR","click", function(){
  teleopCube--;
  teleopHighCube--;
  hideElement("buttonARTMR");
  setChecked("checkboxARTMR", false);
});
onEvent("checkboxARTBR","click", function(){
  teleopCone++;
  teleopHighCone++;
  showElement("buttonARTBR");
});
onEvent("buttonARTBR","click", function(){
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonARTBR");
  setChecked("checkboxARTBR", false);
});
onEvent("checkboxARMTR","click", function(){
  teleopCone++;
  teleopHighCone++;
  showElement("buttonARMTR");
});
onEvent("buttonARMTR","click", function(){
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonARMTR");
  setChecked("checkboxARMTR", false);
});
onEvent("checkboxARMMR","click", function(){
  teleopCube++;
  teleopHighCube++;
  showElement("buttonARMMR");
});
onEvent("buttonARMMR","click", function(){
  teleopCube--;
  teleopHighCube--;
  hideElement("buttonARMMR");
  setChecked("checkboxARMMR", false);
});
onEvent("checkboxARMBR","click", function(){
  teleopCone++;
  teleopHighCone++;
  showElement("buttonARMBR");
});
onEvent("buttonARMBR","click", function(){
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonARMBR");
  setChecked("checkboxARMBR", false);
});
onEvent("checkboxARBTR","click", function(){
  teleopCone++;
  teleopHighCone++;
  showElement("buttonARBTR");
});
onEvent("buttonARBTR","click", function(){
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonARBTR");
  setChecked("checkboxARBTR", false);
});
onEvent("checkboxARBMR","click", function(){
  teleopCube++;
  teleopHighCube--;
  showElement("buttonARBMR");
});
onEvent("buttonARBMR","click", function(){
  teleopCube--;
  teleopHighCube++;
  hideElement("buttonARBMR");
  setChecked("checkboxARBMR", false);
});
onEvent("checkboxARBBR","click", function(){
  teleopCone++;
  teleopHighCone++;
  showElement("buttonARBBR");
});
onEvent("buttonARBBR","click", function(){
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonARBBR");
  setChecked("checkboxARBBR", false);
});
onEvent("checkboxARTTM","click", function(){
  teleopCone++;
  teleopMidCone++;
  showElement("buttonARTTM");
});
onEvent("buttonARTTM","click", function(){
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonARTTM");
  setChecked("checkboxARTTM", false);
});
onEvent("checkboxARTMM","click", function(){
  teleopCube++;
  teleopMidCube++;
  showElement("buttonARTMM");
});
onEvent("buttonARTMM","click", function(){
  teleopCube--;
  teleopMidCube--;
  hideElement("buttonARTMM");
  setChecked("checkboxARTMM", false);
});
onEvent("checkboxARTBM","click", function(){
  teleopCone++;
  teleopMidCone++;
  showElement("buttonARTBM");
});
onEvent("buttonARTBM","click", function(){
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonARTBM");
  setChecked("checkboxARTBM", false);
});
onEvent("checkboxARMTM","click", function(){
  teleopCone++;
  teleopMidCone++;
  showElement("buttonARMTM");
});
onEvent("buttonARMTM","click", function(){
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonARMTM");
  setChecked("checkboxARMTM", false);
});
onEvent("checkboxARMMM","click", function(){
  teleopCube++;
  teleopMidCube++;
  showElement("buttonARMMM");
});
onEvent("buttonARMMM","click", function(){
  teleopCube--;
  teleopMidCube--;
  hideElement("buttonARMMM");
  setChecked("checkboxARMMM", false);
});
onEvent("checkboxARMBM","click", function(){
  teleopCone++;
  teleopMidCone++;
  showElement("buttonARMBM");
});
onEvent("buttonARMBM","click", function(){
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonARMBM");
  setChecked("checkboxARMBM", false);
});
onEvent("checkboxARBTM","click", function(){
  teleopCone++;
  teleopMidCone++;
  showElement("buttonARBTM");
});
onEvent("buttonARBTM","click", function(){
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonARBTM");
  setChecked("checkboxARBTM", false);
});
onEvent("checkboxARBMM","click", function(){
  teleopCube++;
  teleopMidCube--;
  showElement("buttonARBMM");
});
onEvent("buttonARBMM","click", function(){
  teleopCube--;
  teleopMidCube++;
  hideElement("buttonARBMM");
  setChecked("checkboxARBMM", false);
});
onEvent("checkboxARBBM","click", function(){
  teleopCone++;
  teleopMidCone++;
  showElement("buttonARBBM");
});
onEvent("buttonARBBM","click", function(){
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonARBBM");
  setChecked("checkboxARBBM", false);
});
//teleop left
onEvent("checkboxTLTTL","click", function(){
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTLTTL");
});
onEvent("buttonTLTTL","click", function(){
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTLTTL");
  setChecked("checkboxTLTTL", false);
});
onEvent("checkboxTLTML","click", function(){
  teleopCube++;
  teleopHighCube++;
  showElement("buttonTLTML");
});
onEvent("buttonTLTML","click", function(){
  teleopCube--;
  teleopHighCube--;
  hideElement("buttonTLTML");
  setChecked("checkboxTLTML", false);
});
onEvent("checkboxTLTBL","click", function(){
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTLTBL");
});
onEvent("buttonTLTBL","click", function(){
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTLTBL");
  setChecked("checkboxTLTBL", false);
});
onEvent("checkboxTLMTL","click", function(){
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTLMTL");
});
onEvent("buttonTLMTL","click", function(){
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTLMTL");
  setChecked("checkboxTLMTL", false);
});
onEvent("checkboxTLMML","click", function(){
  teleopCube++;
  teleopHighCube++;
  showElement("buttonTLMML");
});
onEvent("buttonTLMML","click", function(){
  teleopCube--;
  teleopHighCube--;
  hideElement("buttonTLMML");
  setChecked("checkboxTLMML", false);
});
onEvent("checkboxTLMBL","click", function(){
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTLMBL");
});
onEvent("buttonTLMBL","click", function(){
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTLMBL");
  setChecked("checkboxTLMBL", false);
});
onEvent("checkboxTLBTL","click", function(){
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTLBTL");
});
onEvent("buttonTLBTL","click", function(){
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTLBTL");
  setChecked("checkboxTLBTL", false);
});
onEvent("checkboxTLBML","click", function(){
  teleopCube++;
  teleopHighCube--;
  showElement("buttonTLBML");
});
onEvent("buttonTLBML","click", function(){
  teleopCube--;
  teleopHighCube++;
  hideElement("buttonTLBML");
  setChecked("checkboxTLBML", false);
});
onEvent("checkboxTLBBL","click", function(){
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTLBBL");
});
onEvent("buttonTLBBL","click", function(){
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTLBBL");
  setChecked("checkboxTLBBL", false);
});
onEvent("buttonTLTTM","click", function(){
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTLTTM");
  setChecked("checkboxTLTTM", false);
});
onEvent("checkboxTLTMM","click", function(){
  teleopCube++;
  teleopMidCube++;
  showElement("buttonTLTMM");
});
onEvent("buttonTLTMM","click", function(){
  teleopCube--;
  teleopMidCube--;
  hideElement("buttonTLTMM");
  setChecked("checkboxTLTMM", false);
});
onEvent("checkboxTLTBM","click", function(){
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTLTBM");
});
onEvent("buttonTLTBM","click", function(){
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTLTBM");
  setChecked("checkboxTLTBM", false);
});
onEvent("checkboxTLMTM","click", function(){
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTLMTM");
});
onEvent("buttonTLMTM","click", function(){
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTLMTM");
  setChecked("checkboxTLMTM", false);
});
onEvent("checkboxTLMMM","click", function(){
  teleopCube++;
  teleopMidCube++;
  showElement("buttonTLMMM");
});
onEvent("buttonTLMMM","click", function(){
  teleopCube--;
  teleopMidCube--;
  hideElement("buttonTLMMM");
  setChecked("checkboxTLMMM", false);
});
onEvent("checkboxTLMBM","click", function(){
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTLMBM");
});
onEvent("buttonTLMBM","click", function(){
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTLMBM");
  setChecked("checkboxTLMBM", false);
});
onEvent("checkboxTLBTM","click", function(){
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTLBTM");
});
onEvent("buttonTLBTM","click", function(){
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTLBTM");
  setChecked("checkboxTLBTM", false);
});
onEvent("checkboxTLBMM","click", function(){
  teleopCube++;
  teleopMidCube--;
  showElement("buttonTLBMM");
});
onEvent("buttonTLBMM","click", function(){
  teleopCube--;
  teleopMidCube++;
  hideElement("buttonTLBMM");
  setChecked("checkboxTLBMM", false);
});
onEvent("checkboxTLBBM","click", function(){
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTLBBM");
});
onEvent("buttonTLBBM","click", function(){
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTLBBM");
  setChecked("checkboxTLBBM", false);
});
onEvent("checkboxTLTTM","click", function(){
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTLTTM");
});
//teleop right
onEvent("checkboxTRTTR","click", function(){
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTRTTR");
});
onEvent("buttonTRTTR","click", function(){
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTRTTR");
  setChecked("checkboxTRTTR", false);
});
onEvent("checkboxTRTMR","click", function(){
  teleopCube++;
  teleopHighCube++;
  showElement("buttonTRTMR");
});
onEvent("buttonTRTMR","click", function(){
  teleopCube--;
  teleopHighCube--;
  hideElement("buttonTRTMR");
  setChecked("checkboxTRTMR", false);
});
onEvent("checkboxTRTBR","click", function(){
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTRTBR");
});
onEvent("buttonTRTBR","click", function(){
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTRTBR");
  setChecked("checkboxTRTBR", false);
});
onEvent("checkboxTRMTR","click", function(){
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTRMTR");
});
onEvent("buttonTRMTR","click", function(){
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTRMTR");
  setChecked("checkboxTRMTR", false);
});
onEvent("checkboxTRMMR","click", function(){
  teleopCube++;
  teleopHighCube++;
  showElement("buttonTRMMR");
});
onEvent("buttonTRMMR","click", function(){
  teleopCube--;
  teleopHighCube--;
  hideElement("buttonTRMMR");
  setChecked("checkboxTRMMR", false);
});
onEvent("checkboxTRMBR","click", function(){
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTRMBR");
});
onEvent("buttonTRMBR","click", function(){
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTRMBR");
  setChecked("checkboxTRMBR", false);
});
onEvent("checkboxTRBTR","click", function(){
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTRBTR");
});
onEvent("buttonTRBTR","click", function(){
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTRBTR");
  setChecked("checkboxTRBTR", false);
});
onEvent("checkboxTRBMR","click", function(){
  teleopCube++;
  teleopHighCube--;
  showElement("buttonTRBMR");
});
onEvent("buttonTRBMR","click", function(){
  teleopCube--;
  teleopHighCube++;
  hideElement("buttonTRBMR");
  setChecked("checkboxTRBMR", false);
});
onEvent("checkboxTRBBR","click", function(){
  teleopCone++;
  teleopHighCone++;
  showElement("buttonTRBBR");
});
onEvent("buttonTRBBR","click", function(){
  teleopCone--;
  teleopHighCone--;
  hideElement("buttonTRBBR");
  setChecked("checkboxTRBBR", false);
});
onEvent("checkboxTRTTM","click", function(){
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTRTTM");
});
onEvent("buttonTRTTM","click", function(){
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTRTTM");
  setChecked("checkboxTRTTM", false);
});
onEvent("checkboxTRTMM","click", function(){
  teleopCube++;
  teleopMidCube++;
  showElement("buttonTRTMM");
});
onEvent("buttonTRTMM","click", function(){
  teleopCube--;
  teleopMidCube--;
  hideElement("buttonTRTMM");
  setChecked("checkboxTRTMM", false);
});
onEvent("checkboxTRTBM","click", function(){
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTRTBM");
});
onEvent("buttonTRTBM","click", function(){
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTRTBM");
  setChecked("checkboxTRTBM", false);
});
onEvent("checkboxTRMTM","click", function(){
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTRMTM");
});
onEvent("buttonTRMTM","click", function(){
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTRMTM");
  setChecked("checkboxTRMTM", false);
});
onEvent("checkboxTRMMM","click", function(){
  teleopCube++;
  teleopMidCube++;
  showElement("buttonTRMMM");
});
onEvent("buttonTRMMM","click", function(){
  teleopCube--;
  teleopMidCube--;
  hideElement("buttonTRMMM");
  setChecked("checkboxTRMMM", false);
});
onEvent("checkboxTRMBM","click", function(){
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTRMBM");
});
onEvent("buttonTRMBM","click", function(){
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTRMBM");
  setChecked("checkboxTRMBM", false);
});
onEvent("checkboxTRBTM","click", function(){
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTRBTM");
});
onEvent("buttonTRBTM","click", function(){
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTRBTM");
  setChecked("checkboxTRBTM", false);
});
onEvent("checkboxTRBMM","click", function(){
  teleopCube++;
  teleopMidCube--;
  showElement("buttonTRBMM");
});
onEvent("buttonTRBMM","click", function(){
  teleopCube--;
  teleopMidCube++;
  hideElement("buttonTRBMM");
  setChecked("checkboxTRBMM", false);
});
onEvent("checkboxTRBBM","click", function(){
  teleopCone++;
  teleopMidCone++;
  showElement("buttonTRBBM");
});
onEvent("buttonTRBBM","click", function(){
  teleopCone--;
  teleopMidCone--;
  hideElement("buttonTRBBM");
  setChecked("checkboxTRBBM", false);
});
//dropdown code
onEvent("dropdownALTTR", "change", function() {
  var localValue = getText("dropdownALTTR");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      autoLowCone++;
      autoCone++;
    } else if (localValue == "Cube"){
      autoLowCube++;
      autoCube++;
    }
  } else {
    if(localValue == "Cone"){
      autoLowCone--;
      autoCone--;
    } else if (localValue == "Cube"){
      autoLowCube--;
      autoCube--;
    }
  }
  localValuePrevious = getText("dropdownALTTR");
});
onEvent("dropdownALTMR", "change", function() {
  var localValue = getText("dropdownALTMR");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      autoLowCone++;
      autoCone++;
    } else if (localValue == "Cube"){
      autoLowCube++;
      autoCube++;
    }
  } else {
    if(localValue == "Cone"){
      autoLowCone--;
      autoCone--;
    } else if (localValue == "Cube"){
      autoLowCube--;
      autoCube--;
    }
  }
  localValuePrevious = getText("dropdownALTMR");
});
onEvent("dropdownALTBR", "change", function() {
  var localValue = getText("dropdownALTBR");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      autoLowCone++;
      autoCone++;
    } else if (localValue == "Cube"){
      autoLowCube++;
      autoCube++;
    }
  } else {
    if(localValue == "Cone"){
      autoLowCone--;
      autoCone--;
    } else if (localValue == "Cube"){
      autoLowCube--;
      autoCube--;
    }
  }
  localValuePrevious = getText("dropdownALTBR");
});
onEvent("dropdownALMTR", "change", function() {
  var localValue = getText("dropdownALMTR");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      autoLowCone++;
      autoCone++;
    } else if (localValue == "Cube"){
      autoLowCube++;
      autoCube++;
    }
  } else {
    if(localValue == "Cone"){
      autoLowCone--;
      autoCone--;
    } else if (localValue == "Cube"){
      autoLowCube--;
      autoCube--;
    }
  }
  localValuePrevious = getText("dropdownALMTR");
});
onEvent("dropdownALMMR", "change", function() {
  var localValue = getText("dropdownALMMR");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      autoLowCone++;
      autoCone++;
    } else if (localValue == "Cube"){
      autoLowCube++;
      autoCube++;
    }
  } else {
    if(localValue == "Cone"){
      autoLowCone--;
      autoCone--;
    } else if (localValue == "Cube"){
      autoLowCube--;
      autoCube--;
    }
  }
  localValuePrevious = getText("dropdownALMMR");
});
onEvent("dropdownALMBR", "change", function() {
  var localValue = getText("dropdownALMBR");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      autoLowCone++;
      autoCone++;
    } else if (localValue == "Cube"){
      autoLowCube++;
      autoCube++;
    }
  } else {
    if(localValue == "Cone"){
      autoLowCone--;
      autoCone--;
    } else if (localValue == "Cube"){
      autoLowCube--;
      autoCube--;
    }
  }
  localValuePrevious = getText("dropdownALMBR");
});
onEvent("dropdownALBTR", "change", function() {
  var localValue = getText("dropdownALBTR");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      autoLowCone++;
      autoCone++;
    } else if (localValue == "Cube"){
      autoLowCube++;
      autoCube++;
    }
  } else {
    if(localValue == "Cone"){
      autoLowCone--;
      autoCone--;
    } else if (localValue == "Cube"){
      autoLowCube--;
      autoCube--;
    }
  }
  localValuePrevious = getText("dropdownALBTR");
});
onEvent("dropdownALBMR", "change", function() {
  var localValue = getText("dropdownALBMR");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      autoLowCone++;
      autoCone++;
    } else if (localValue == "Cube"){
      autoLowCube++;
      autoCube++;
    }
  } else {
    if(localValue == "Cone"){
      autoLowCone--;
      autoCone--;
    } else if (localValue == "Cube"){
      autoLowCube--;
      autoCube--;
    }
  }
  localValuePrevious = getText("dropdownALBMR");
});
onEvent("dropdownALBBR", "change", function() {
  var localValue = getText("dropdownALBBR");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      autoLowCone++;
      autoCone++;
    } else if (localValue == "Cube"){
      autoLowCube++;
      autoCube++;
    }
  } else {
    if(localValue == "Cone"){
      autoLowCone--;
      autoCone--;
    } else if (localValue == "Cube"){
      autoLowCube--;
      autoCube--;
    }
  }
  localValuePrevious = getText("dropdownALBBR");
});
onEvent("dropdownARTTL", "change", function() {
  var localValue = getText("dropdownARTTL");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      autoLowCone++;
      autoCone++;
    } else if (localValue == "Cube"){
      autoLowCube++;
      autoCube++;
    }
  } else {
    if(localValue == "Cone"){
      autoLowCone--;
      autoCone--;
    } else if (localValue == "Cube"){
      autoLowCube--;
      autoCube--;
    }
  }
  localValuePrevious = getText("dropdownARTTL");
});
onEvent("dropdownARTML", "change", function() {
  var localValue = getText("dropdownARTML");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      autoLowCone++;
      autoCone++;
    } else if (localValue == "Cube"){
      autoLowCube++;
      autoCube++;
    }
  } else {
    if(localValue == "Cone"){
      autoLowCone--;
      autoCone--;
    } else if (localValue == "Cube"){
      autoLowCube--;
      autoCube--;
    }
  }
  localValuePrevious = getText("dropdownARTML");
});
onEvent("dropdownARTBL", "change", function() {
  var localValue = getText("dropdownARTBL");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      autoLowCone++;
      autoCone++;
    } else if (localValue == "Cube"){
      autoLowCube++;
      autoCube++;
    }
  } else {
    if(localValue == "Cone"){
      autoLowCone--;
      autoCone--;
    } else if (localValue == "Cube"){
      autoLowCube--;
      autoCube--;
    }
  }
  localValuePrevious = getText("dropdownARTBL");
});
onEvent("dropdownARMTL", "change", function() {
  var localValue = getText("dropdownARMTL");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      autoLowCone++;
      autoCone++;
    } else if (localValue == "Cube"){
      autoLowCube++;
      autoCube++;
    }
  } else {
    if(localValue == "Cone"){
      autoLowCone--;
      autoCone--;
    } else if (localValue == "Cube"){
      autoLowCube--;
      autoCube--;
    }
  }
  localValuePrevious = getText("dropdownARMTL");
});
onEvent("dropdownARMML", "change", function() {
  var localValue = getText("dropdownARMML");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      autoLowCone++;
      autoCone++;
    } else if (localValue == "Cube"){
      autoLowCube++;
      autoCube++;
    }
  } else {
    if(localValue == "Cone"){
      autoLowCone--;
      autoCone--;
    } else if (localValue == "Cube"){
      autoLowCube--;
      autoCube--;
    }
  }
  localValuePrevious = getText("dropdownARMML");
});
onEvent("dropdownARMBL", "change", function() {
  var localValue = getText("dropdownARMBL");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      autoLowCone++;
      autoCone++;
    } else if (localValue == "Cube"){
      autoLowCube++;
      autoCube++;
    }
  } else {
    if(localValue == "Cone"){
      autoLowCone--;
      autoCone--;
    } else if (localValue == "Cube"){
      autoLowCube--;
      autoCube--;
    }
  }
  localValuePrevious = getText("dropdownARMBL");
});
onEvent("dropdownARBTL", "change", function() {
  var localValue = getText("dropdownARBTL");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      autoLowCone++;
      autoCone++;
    } else if (localValue == "Cube"){
      autoLowCube++;
      autoCube++;
    }
  } else {
    if(localValue == "Cone"){
      autoLowCone--;
      autoCone--;
    } else if (localValue == "Cube"){
      autoLowCube--;
      autoCube--;
    }
  }
  localValuePrevious = getText("dropdownARBTL");
});
onEvent("dropdownARBML", "change", function() {
  var localValue = getText("dropdownARBML");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      autoLowCone++;
      autoCone++;
    } else if (localValue == "Cube"){
      autoLowCube++;
      autoCube++;
    }
  } else {
    if(localValue == "Cone"){
      autoLowCone--;
      autoCone--;
    } else if (localValue == "Cube"){
      autoLowCube--;
      autoCube--;
    }
  }
  localValuePrevious = getText("dropdownARBML");
});
onEvent("dropdownARBBL", "change", function() {
  var localValue = getText("dropdownARBBL");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      autoLowCone++;
      autoCone++;
    } else if (localValue == "Cube"){
      autoLowCube++;
      autoCube++;
    }
  } else {
    if(localValue == "Cone"){
      autoLowCone--;
      autoCone--;
    } else if (localValue == "Cube"){
      autoLowCube--;
      autoCube--;
    }
  }
  localValuePrevious = getText("dropdownARBBL");
});
onEvent("dropdownTRTTL", "change", function() {
  var localValue = getText("dropdownTRTTL");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      teleopLowCone++;
      teleopCone++;
    } else if (localValue == "Cube"){
      teleopLowCube++;
      teleopCube++;
    }
  } else {
    if(localValue == "Cone"){
      teleopLowCone--;
      teleopCone--;
    } else if (localValue == "Cube"){
      teleopLowCube--;
      teleopCube--;
    }
  }
  localValuePrevious = getText("dropdownTRTTL");
});
onEvent("dropdownTRTML", "change", function() {
  var localValue = getText("dropdownTRTML");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      teleopLowCone++;
      teleopCone++;
    } else if (localValue == "Cube"){
      teleopLowCube++;
      teleopCube++;
    }
  } else {
    if(localValue == "Cone"){
      teleopLowCone--;
      teleopCone--;
    } else if (localValue == "Cube"){
      teleopLowCube--;
      teleopCube--;
    }
  }
  localValuePrevious = getText("dropdownTRTML");
});
onEvent("dropdownTRTBL", "change", function() {
  var localValue = getText("dropdownTRTBL");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      teleopLowCone++;
      teleopCone++;
    } else if (localValue == "Cube"){
      teleopLowCube++;
      teleopCube++;
    }
  } else {
    if(localValue == "Cone"){
      teleopLowCone--;
      teleopCone--;
    } else if (localValue == "Cube"){
      teleopLowCube--;
      teleopCube--;
    }
  }
  localValuePrevious = getText("dropdownTRTBL");
});
onEvent("dropdownTRMTL", "change", function() {
  var localValue = getText("dropdownTRMTL");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      teleopLowCone++;
      teleopCone++;
    } else if (localValue == "Cube"){
      teleopLowCube++;
      teleopCube++;
    }
  } else {
    if(localValue == "Cone"){
      teleopLowCone--;
      teleopCone--;
    } else if (localValue == "Cube"){
      teleopLowCube--;
      teleopCube--;
    }
  }
  localValuePrevious = getText("dropdownTRMTL");
});
onEvent("dropdownTRMML", "change", function() {
  var localValue = getText("dropdownTRMML");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      teleopLowCone++;
      teleopCone++;
    } else if (localValue == "Cube"){
      teleopLowCube++;
      teleopCube++;
    }
  } else {
    if(localValue == "Cone"){
      teleopLowCone--;
      teleopCone--;
    } else if (localValue == "Cube"){
      teleopLowCube--;
      teleopCube--;
    }
  }
  localValuePrevious = getText("dropdownTRMML");
});
onEvent("dropdownTRMBL", "change", function() {
  var localValue = getText("dropdownTRMBL");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      teleopLowCone++;
      teleopCone++;
    } else if (localValue == "Cube"){
      teleopLowCube++;
      teleopCube++;
    }
  } else {
    if(localValue == "Cone"){
      teleopLowCone--;
      teleopCone--;
    } else if (localValue == "Cube"){
      teleopLowCube--;
      teleopCube--;
    }
  }
  localValuePrevious = getText("dropdownTRMBL");
});
onEvent("dropdownTRBTL", "change", function() {
  var localValue = getText("dropdownTRBTL");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      teleopLowCone++;
      teleopCone++;
    } else if (localValue == "Cube"){
      teleopLowCube++;
      teleopCube++;
    }
  } else {
    if(localValue == "Cone"){
      teleopLowCone--;
      teleopCone--;
    } else if (localValue == "Cube"){
      teleopLowCube--;
      teleopCube--;
    }
  }
  localValuePrevious = getText("dropdownTRBTL");
});
onEvent("dropdownTRBML", "change", function() {
  var localValue = getText("dropdownTRBML");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      teleopLowCone++;
      teleopCone++;
    } else if (localValue == "Cube"){
      teleopLowCube++;
      teleopCube++;
    }
  } else {
    if(localValue == "Cone"){
      teleopLowCone--;
      teleopCone--;
    } else if (localValue == "Cube"){
      teleopLowCube--;
      teleopCube--;
    }
  }
  localValuePrevious = getText("dropdownTRBML");
});
onEvent("dropdownTRBBL", "change", function() {
  var localValue = getText("dropdownTRBBL");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      teleopLowCone++;
      teleopCone++;
    } else if (localValue == "Cube"){
      teleopLowCube++;
      teleopCube++;
    }
  } else {
    if(localValue == "Cone"){
      teleopLowCone--;
      teleopCone--;
    } else if (localValue == "Cube"){
      teleopLowCube--;
      teleopCube--;
    }
  }
  localValuePrevious = getText("dropdownTRBBL");
});
onEvent("dropdownTLTTR", "change", function() {
  var localValue = getText("dropdownTLTTR");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      teleopLowCone++;
      teleopCone++;
    } else if (localValue == "Cube"){
      teleopLowCube++;
      teleopCube++;
    }
  } else {
    if(localValue == "Cone"){
      teleopLowCone--;
      teleopCone--;
    } else if (localValue == "Cube"){
      teleopLowCube--;
      teleopCube--;
    }
  }
  localValuePrevious = getText("dropdownTLTTR");
});
onEvent("dropdownTLTMR", "change", function() {
  var localValue = getText("dropdownTLTMR");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      teleopLowCone++;
      teleopCone++;
    } else if (localValue == "Cube"){
      teleopLowCube++;
      teleopCube++;
    }
  } else {
    if(localValue == "Cone"){
      teleopLowCone--;
      teleopCone--;
    } else if (localValue == "Cube"){
      teleopLowCube--;
      teleopCube--;
    }
  }
  localValuePrevious = getText("dropdownTLTMR");
});
onEvent("dropdownTLTBR", "change", function() {
  var localValue = getText("dropdownTLTBR");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      teleopLowCone++;
      teleopCone++;
    } else if (localValue == "Cube"){
      teleopLowCube++;
      teleopCube++;
    }
  } else {
    if(localValue == "Cone"){
      teleopLowCone--;
      teleopCone--;
    } else if (localValue == "Cube"){
      teleopLowCube--;
      teleopCube--;
    }
  }
  localValuePrevious = getText("dropdownTLTBR");
});
onEvent("dropdownTLMTR", "change", function() {
  var localValue = getText("dropdownTLMTR");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      teleopLowCone++;
      teleopCone++;
    } else if (localValue == "Cube"){
      teleopLowCube++;
      teleopCube++;
    }
  } else {
    if(localValue == "Cone"){
      teleopLowCone--;
      teleopCone--;
    } else if (localValue == "Cube"){
      teleopLowCube--;
      teleopCube--;
    }
  }
  localValuePrevious = getText("dropdownTLMTR");
});
onEvent("dropdownTLMMR", "change", function() {
  var localValue = getText("dropdownTLMMR");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      teleopLowCone++;
      teleopCone++;
    } else if (localValue == "Cube"){
      teleopLowCube++;
      teleopCube++;
    }
  } else {
    if(localValue == "Cone"){
      teleopLowCone--;
      teleopCone--;
    } else if (localValue == "Cube"){
      teleopLowCube--;
      teleopCube--;
    }
  }
  localValuePrevious = getText("dropdownTLMMR");
});
onEvent("dropdownTLMBR", "change", function() {
  var localValue = getText("dropdownTLMBR");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      teleopLowCone++;
      teleopCone++;
    } else if (localValue == "Cube"){
      teleopLowCube++;
      teleopCube++;
    }
  } else {
    if(localValue == "Cone"){
      teleopLowCone--;
      teleopCone--;
    } else if (localValue == "Cube"){
      teleopLowCube--;
      teleopCube--;
    }
  }
  localValuePrevious = getText("dropdownTLMBR");
});
onEvent("dropdownTLBTR", "change", function() {
  var localValue = getText("dropdownTLBTR");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      teleopLowCone++;
      teleopCone++;
    } else if (localValue == "Cube"){
      teleopLowCube++;
      teleopCube++;
    }
  } else {
    if(localValue == "Cone"){
      teleopLowCone--;
      teleopCone--;
    } else if (localValue == "Cube"){
      teleopLowCube--;
      teleopCube--;
    }
  }
  localValuePrevious = getText("dropdownTLBTR");
});
onEvent("dropdownTLBMR", "change", function() {
  var localValue = getText("dropdownTLBMR");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      teleopLowCone++;
      teleopCone++;
    } else if (localValue == "Cube"){
      teleopLowCube++;
      teleopCube++;
    }
  } else {
    if(localValue == "Cone"){
      teleopLowCone--;
      teleopCone--;
    } else if (localValue == "Cube"){
      teleopLowCube--;
      teleopCube--;
    }
  }
  localValuePrevious = getText("dropdownTLBMR");
});
onEvent("dropdownTLBBR", "change", function() {
  var localValue = getText("dropdownTLBBR");
  var localValuePrevious = "None";
  if(localValuePrevious != localValue){
    if(localValue == "Cone"){
      teleopLowCone++;
      teleopCone++;
    } else if (localValue == "Cube"){
      teleopLowCube++;
      teleopCube++;
    }
  } else {
    if(localValue == "Cone"){
      teleopLowCone--;
      teleopCone--;
    } else if (localValue == "Cube"){
      teleopLowCube--;
      teleopCube--;
    }
  }
  localValuePrevious = getText("dropdownTLBBR");
});