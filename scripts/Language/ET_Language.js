/*jshint -W004 */

var ETLanguage = Class.create();

/**
 * This class provides language dependent strings for an identifier.
 * 
 */
ETLanguage.prototype = {

	/**
	 * @public
	 * 
	 * Constructor.
	 */
	initialize: function() {
	},

	/*
	 * @public
	 * 
	 * Returns a language dependent message for an ID, or the ID, if there is 
	 * no message for it.
	 * 
	 * @param string id
	 * 			ID of the message to be retrieved.
	 * @return string
	 * 			The language dependent message for the given ID.
	 */
	getMessage: function(id, type) {
		var msg;
		switch (type) {
			case "user":
				msg = wgETUserLanguageStrings[id];
				break;
			case "cont":
				msg = wgETContLanguageStrings[id];
				break;
			default: 
				msg = wgETUserLanguageStrings[id];
				if (!msg) {
					msg = wgETContLanguageStrings[id];
				}
		} 
		if (!msg) {
			msg = id;
		}
			
		// Replace variables
		msg = msg.replace(/\$n/g,wgCanonicalNamespace); 
		msg = msg.replace(/\$p/g,wgPageName);
		msg = msg.replace(/\$t/g,wgTitle);
		msg = msg.replace(/\$u/g,wgUserName);
		msg = msg.replace(/\$s/g,wgServer);
		return msg;
	}
	
};

// Singleton of this class

var etLanguage = new ETLanguage();