/**
 * main app logic
 * 
 * @author Yauheni Svirydzenka <partagas@mail.ru>
 * @version 0.1.0
 * @copyright Yauheni Svirydzenka 2017
 */

var defaultLocale = "en-US";

// object from translations.js
var localizator = translations[defaultLocale];

/**
 * Get data from backend and fill datatable grid
 */
function getData() {
    $$("dataFromBackend").clearAll();
    $$("dataFromBackend").load("http://localhost:3000/data");

    // old backend on Apache/PHP:
    //$$("dataFromBackend").load("http://localhost/data_master/data/data.php");
    
}

/**
 * Add new row to datatable
 */
function addRow() {
    $$("dataFromBackend").add(
        {
            title: "-----",
            content: "-----",
            place: "-----"
            //date: "-----",
            //priority: "-----"
        }
    );
}

/**
 * Reset selection in datatable grid
 */
function clearSelection() {
    $$("dataFromBackend").unselectAll();
}

/**
 * Delete selected row
 */
function deleteRow() {
    if (!$$("dataFromBackend").getSelectedId()) {
        webix.alert(localizator.noItemSelected);
        return;
    }

    //removes the selected item
    $$("dataFromBackend").remove($$("dataFromBackend").getSelectedId());
}

/**
 * Save data to backend from datatable grid
 */
function saveData() {
    var grid = $$("dataFromBackend");
    var serializedData = grid.serialize();
    
    // The default Webix header definition is "Content-type": "application/x-www-form-urlencoded"
    // JSON data will not work in this case. Set "Content-Type": "application/json"
    webix.ajax().headers({
        "Content-Type": "application/json"
    }).post("http://localhost:3000/data", {data: serializedData});

    // old backend on Apache/PHP:
    //webix.ajax().post("http://localhost/data_master/data/save.php", {data: serializedData});

    webix.alert(localizator.dataSaved);
    
}

/**
 * Reset filters settings
 */
function resetFilters() {
    $$("dataFromBackend").getFilter("title").value = null;
    $$("dataFromBackend").getFilter("content").value = null;
    $$("dataFromBackend").getFilter("place").value = null;
    $$("dataFromBackend").getFilter("date").value = null;
    $$("dataFromBackend").getFilter("priority").value = null;
    
    // reload grid
    $$("dataFromBackend").clearAll();
    $$("dataFromBackend").load("http://localhost:3000/data"); 

    // old backend on Apache/PHP:
    //$$("dataFromBackend").load("http://localhost/data_master/data/data.php"); 
}

/**
 * Change translation to selected
 */
function changeLocale(locale) {
    localizator = translations[locale];
    
    $$("headerContainer").define("template", localizator.headerTitle);
    $$("headerContainer").refresh();

    $$("resetFiltersContainer").define("value", localizator.resetFilters);
    $$("resetFiltersContainer").refresh();

    $$("changeLocale").define("label", localizator.changeLocale);
    $$("changeLocale").refresh();

    $$("loadData").define("value", localizator.loadData);
    $$("loadData").refresh();

    $$("addRow").define("value", localizator.addRow);
    $$("addRow").refresh();

    $$("clearSelection").define("value", localizator.clearSelection);
    $$("clearSelection").refresh();

    $$("deleteRow").define("value", localizator.deleteRow);
    $$("deleteRow").refresh();

    $$("saveData").define("value", localizator.saveData);
    $$("saveData").refresh();

    $$("reservedButton").define("value", localizator.reservedButton);
    $$("reservedButton").refresh();

    webix.i18n.setLocale(locale);
}

/**
 * Function for reserved button
 */
function reservedButton() {
    // your code...
}
