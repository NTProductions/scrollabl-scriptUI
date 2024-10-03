var w = new Window("palette", "QuickLink Items Results");
w.maximumSize.height = 300;
w.maximumSize.width = 550;
var panel = w.add("group");
var scrollGroup = panel.add("group");
scrollGroup.orientation = "column";

scrollGroup.maximumSize.height = 310 * 122;
 for (var i = 0; i < reportArray.length; i++) {
 createFilePanel(scrollGroup, reportArray[i][0], reportArray[i][1], reportArray[i][2]);
 }
var scrollBar = panel.add ("scrollbar {stepdelta: 20}");
// Move the whole scroll group up or down
scrollBar.onChanging = function () {
 scrollGroup.location.y = -1 * this.value;
}

w.onShow = function() {
 // Set various sizes and locations when the window is drawn
 panel.size.height = w.size.height;
 scrollBar.size.height = w.size.height-20;
 scrollBar.size.width = 20;
 scrollBar.location = [505, 0]; 
 scrollBar.maxvalue = scrollGroup.size.height - panel.size.height + 35;
};

w.center();
w.show();

function createFilePanel(win, fileName, found, location) {

    var filePanel = win.add("panel {alignChildren: 'left'}", undefined);
    filePanel.size = [500, 100];
    filePanel.orientation = "column";
    var nameGroup = filePanel.add("group", undefined, "");
    nameGroup.orientation = "row";
    var nameText = nameGroup.add("statictext", undefined, "File Name:");
    nameText.size = [60, 20];
    var nameTextTwo = nameGroup.add("statictext", undefined, fileName);
    var foundGroup = filePanel.add("group", undefined, "");
    foundGroup.orientation = "row";
    var foundText = foundGroup.add("statictext", undefined, "Found:");
    foundText.size = [60, 20];
    var foundTextTwo = foundGroup.add("statictext", undefined, found);
    var locationGroup = filePanel.add("group", undefined, "");
    locationGroup.orientation = "row";
    var locationText = locationGroup.add("statictext", undefined, "Location:");
    locationText.size = [60, 20];
    var locationTextTwo = locationGroup.add("statictext", undefined, location);
    }