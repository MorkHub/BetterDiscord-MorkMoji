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
    return '<h3>Settings for BetterEmoji</h3><br/>\
	<input type="range" id="BE_size" min="32" value="'+this.data.size+'" max="96" onchange="BetterEmoji.prototype.update(this.value)" style="width:100%"><br/>\
	<div class="markup" data-colour="true" style="color: rgb(35, 236, 236); background-color: #36393e; padding: 5px; border-radius: 5px"><span class="timestamp" data-24="true"><span class="username-wrapper"><strong class="user-name" style="color: rgb(35, 236, 236);">TheMork</strong><i class="highlight-separator right-pad">: </i></span><span class="message-content"><img draggable="false" class="emoji jumboable" alt=":ok_hand:" src="/assets/b6f700d4bc253abdb5ad576917b756d8.svg"></span>\
	</div>';
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
