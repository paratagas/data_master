/**
 * Create main layout
 */
webix.ui({
	view: "layout",
	id: "page",
	rows:[
		{
			cols: [
				{
					view:"icon",
					id: "headerIconContainer",
					icon:"calendar"
				},
				{
					view:"template",
					id: "headerContainer",
					type:"header",
					template:"Data master"
			    },
			    new Button("resetFiltersContainer", "Reset filters", "form", 150, resetFilters),
				{
					id: "divider",
					width: 20
				},
				{
					view: "combo", 
				    id: "changeLocale",
				    label: 'Change locale:',
				    labelWidth: 130,
				    width: 230,
				    align: "right",
				    value: "en-US",
				    options: [
				    	"ru-RU",
				    	"en-US"
				    ],
				    on: {
				        "onChange": function(newv, oldv) { 
				          	changeLocale(newv);
				        }
				    }
				}
			]
		},
	  {
	  	view: "datatable",
	  	id: "dataFromBackend",
		columns: [
			{
				id: "title",
				header: [
					{
						text: "<b>Title</b>"
					},
					{
						content: "textFilter"
					}
				],
				editor: "text",
				fillspace: 2
			},
			{
				id: "content",
				header: [
					{
						text: "<b>Content</b>"
					},
					{
						content: "textFilter"
					}
				],
				editor: "popup",
				fillspace: 8
			},
			{
				id: "place",
				header: [
					{
						text: "<b>Place</b>"
					},
					{
						content: "textFilter"
					}
				],
				editor: "text",
				fillspace: 2
			},
			{
				id: "date",
				header: [
					"<b>Date</b>",
					{
						content: "dateFilter"
					}
				],
				editor: "date",
				map: "(date)#date#",
				format: webix.Date.dateToStr("%d.%m.%Y"),
				fillspace: 2
			},
			{
				id: "priority",
				header: [
					"<b>Priority</b>",
					{
						content: "selectFilter"
					}
				],
				editor: "select",
				options: [1, 2, 3, 4, 5],
				fillspace: 1
			}
		],
		editable: true,
		select: "row",
		multiselect: true,
	    // initial data load
	    data: webix.ajax().post("http://localhost/electron_with_backend/data/data.php")
	  },
	  	{
	  		view: "layout",
	  		id: "buttonContainer",
	  		height: 50,
	  		cols: [
			  	// Webix ui.button structure example:
			  	/*{
				  	view: "button", 
				    id: "loadData", 
				    value: "Load data", 
				    type: "form", 
				    width: 150,
				    on: {
					    "onItemClick": function(id, e, trg){ 
					      getData();
					    }
					}
				},*/
		  		new Button("loadData", "Load data", "form", 150, getData),
		  		new Button("addRow", "Add row", "form", 150, addRow),
		  		new Button("clearSelection", "Clear selection", "form", 150, clearSelection),
		  		new Button("deleteRow", "Delete row", "form", 150, deleteRow),
		  		new Button("saveData", "Save data", "form", 150, saveData),
		  		new Button("reservedButton", "Reserved button", "form", 150, reservedButton),
				{}
			]
	  	}
	]
});

$$("buttonContainer").define("css", "buttonContainerClass");
$$("resetFiltersContainer").define("css", "resetFiltersContainerClass");
$$("headerIconContainer").define("css", "headerIconContainerClass");
$$("headerContainer").define("css", "headerContainerClass");
$$("changeLocale").define("css", "changeLocaleClass");
$$("divider").define("css", "dividerClass");
