//META{"name":"BetterEmoji"}*//

var BetterEmoji = function() {};
BetterEmoji.prototype.data = {};
BetterEmoji.prototype.defaultData = function() { return { size: 64 } };

BetterEmoji.prototype.load = function() { this.loadData(); }
BetterEmoji.prototype.unload = function() {};
BetterEmoji.prototype.observer = function(e) {};

BetterEmoji.prototype.getName = function() { return "BetterEmoji"; };
BetterEmoji.prototype.getVersion = function() { return "0.1"; };
BetterEmoji.prototype.getAuthor = function() { return "TheMork#1944"; };
BetterEmoji.prototype.getDescription = function () { return "Allows you to set a custom size for emoji."; };
BetterEmoji.prototype.getSettingsPanel = function() { return '<h3 style="color:white">Settings for BetterEmoji</h3><br/>'+'<input type="range" id="BE_size" min="32" value="'+this.data.size+'" max="96" onchange="BetterEmoji.prototype.update(this.value)" style="width:100%"><br/>'+'<div class="markup" data-colour="true" style="color: rgb(35, 236, 236); background-color: #36393e; padding: 5px; border-radius: 5px"><span class="timestamp" data-24="true"><span class="username-wrapper"><strong class="user-name" style="color: rgb(35, 236, 236);">TheMork</strong><i class="highlight-separator right-pad">: </i></span><span class="message-content"><img draggable="false" class="emoji jumboable" alt=":ok_hand:" src="/assets/b6f700d4bc253abdb5ad576917b756d8.svg"></span>'+'</div>'; }

BetterEmoji.prototype.stop = function() { BdApi.clearCSS("BetterEmoji"); };
BetterEmoji.prototype.start = function() { this.loadData(); this.update(this.data.size); };
BetterEmoji.prototype.onSwitch = function() {};
BetterEmoji.prototype.onMessage = function() {};

BetterEmoji.prototype.saveData = function() { bdStorage.set('BetterEmoji', JSON.stringify(this.data)); };
BetterEmoji.prototype.loadData = function() {
	this.data =  bdStorage.get('BetterEmoji') ? JSON.parse(bdStorage.get('BetterEmoji')) : this.defaultData();
	this.saveData();
};
BetterEmoji.prototype.update = function (size) {
    this.data.size = Math.min(96, Math.max(8, size));
    BdApi.clearCSS("BetterEmoji");
    BdApi.injectCSS("BetterEmoji",
        "img.emoji.jumboable {width:"+size+"px !important; height:auto !important;\ max-height:"+size+"px;}"
    );
    this.saveData();
};
