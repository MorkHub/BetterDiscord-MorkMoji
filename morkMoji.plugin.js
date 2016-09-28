//META{"name":"morkMoji"}*//
var morkMoji = function () {};
var size = localStorage.getItem('size') || 64;
morkMoji.prototype.start = function () { localStorage.setItem('size',size); BdApi.injectCSS("morkMoji", "img.emoji.jumboable {width:"+size+"px !important;height:auto !important;}"); };
morkMoji.prototype.stop = function () { BdApi.clearCSS("morkMoji"); };
morkMoji.prototype.save = function () {size = document.getElementById("size").value; localStorage.setItem('size',size);morkMoji.prototype.reload()};
morkMoji.prototype.load = function () {};
morkMoji.prototype.reload = function () {morkMoji.prototype.stop();morkMoji.prototype.start()};
morkMoji.prototype.unload = function () {};
morkMoji.prototype.getName = function () { return "morkMoji"; };
morkMoji.prototype.getDescription = function () { return "Allows you to set a custom size for emoji."; };
morkMoji.prototype.getVersion = function () { return "0.1.0"; };
morkMoji.prototype.getAuthor = function () { return "TheMork#1944"; };
morkMoji.prototype.getSettingsPanel = function () {
    return "<h3>MorkMoji Settings</h3>\n<br/><input type=\"range\" id=\"size\" value=\"32\" min=\""+size+"\" max=\"96\" onchange=\"morkMoji.prototype.save()\" onedit=\"document.getElementById('sizeLabel').innerHTML=\" style=\"width:100%\">\n<br/><div id=\"sizeLabel\">"+size+"</div>;
};