/**
 * components
 * 
 * @author Yauheni Svirydzenka <partagas@mail.ru>
 * @version 0.0.1
 * @copyright Yauheni Svirydzenka 2017
 */

/**
 * Create object with type "Button"
 *
 * @constructor
 */
function Button(id, value, type, width, onClickFunction) {
	this.view = "button";
	this.id = id;
	this.value = value;
	this.type = type;
	this.width = width;
	this.on = {
		"onItemClick": function(){ 
	      onClickFunction();
	    }
	}
}
