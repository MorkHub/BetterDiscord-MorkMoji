//META{"name":"BetterEmoji"}*//

var BetterEmoji = function () {};

BetterEmoji.prototype.start = function () {
	this.data = localStorage.getItem('BetterEmoji')
	this.update(this.data.size);
};

BetterEmoji.prototype.data = {};

BetterEmoji.prototype.saveData = function () {
	localStorage.setItem('BetterEmoji',this.data);
};

BetterEmoji.prototype.update = function (size) {
	this.data.size = size;
	BdApi.clearCSS("BetterEmoji");
	BdApi.injectCSS("BetterEmoji", 
		"img.emoji.jumboable {\
		  width:"+size+"px !important;\
		  height:auto !important;\
		  max-height:"+size+"px;\
		}"
	);
	this.saveData();
};

BetterEmoji.prototype.load = function () {
	this.data = localStorage.getItem('BetterEmoji') || { "size": 32 };
};

BetterEmoji.prototype.unload = function () {
	
};

BetterEmoji.prototype.reload = function () {
	this.stop();
	this.start()
};

BetterEmoji.prototype.stop = function () {
	BdApi.clearCSS("morkMoji");
};

BetterEmoji.prototype.onMessage = function () {
	
};

BetterEmoji.prototype.onSwitch = function () {
	
};

BetterEmoji.prototype.observer = function (e) {
	
};

BetterEmoji.prototype.getSettingsPanel = function () {
    return "<h3>Settings for BetterEmoji</h3><br/>\
	<input type='range' id='BE_size' min='32' value='"+this.data.size+"' max='96' onchange='BetterEmoji.prototype.update(this.value)' style='width:100%'>";
};

BetterEmoji.prototype.getName = function () {
    return "BetterEmoji";
};

BetterEmoji.prototype.getDescription = function () {
    return "Allows you to set a custom size for emoji.";
};

BetterEmoji.prototype.getVersion = function () {
    return "1.0.3";
};

BetterEmoji.prototype.getAuthor = function () {
    return "TheMork#1944: MorkHub <Mork@TheMork.co.uk>";
};
