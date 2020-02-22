<style type="text/css">
#chatango{position:fixed;text-align:center;z-index:10000;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);height:500px;width:300px}
#chatango2{padding:10px;cursor:move;z-index:10;background-color:#2196F3;color:#fff}
#close_chatango{position:absolute;bottom:100%;right:0;width:30px;height:30px;line-height:30px;text-align:center;background:#2196F3;color:#fff;transition:0.2s;cursor:pointer}
#close_chatango:hover{background:#E14B4B}
</style>

<div id="chatango">
<div id="close_chatango" onclick='Close()'><i class="fa fa-times"></i></div>
<h3 id="chatango2">Chatango You Can Drag and Drop</h3>
<center><div style="-khtml-border-bottom-left-radius: 10px; -khtml-border-bottom-right-radius: 10px; -khtml-border-top-left-radius: 10px; -khtml-border-top-right-radius: 10px; -moz-border-radius: 10px 10px 10px 10px; -moz-box-shadow: 0px 4px 3px #57606F; -webkit-border-bottom-left-radius: 10px; -webkit-border-bottom-right-radius: 10px; -webkit-border-top-left-radius: 10px; -webkit-border-top-right-radius: 10px; -webkit-box-shadow: 0px 4px 3px #000; background-image: url(https://1.bp.blogspot.com/-hUrWySxez_c/XZTMTvCCu9I/AAAAAAAABk0/ujnhDP-odv0dFIbpaMEdXZZOsOrMflBZgCLcBGAsYHQ/s1600/752708_splash.png); background-size: 300px 500px"><script id="cid0020000242922229203" data-cfasync="false" async="async" src="//st.chatango.com/js/gz/emb.js" style="width: 300px;height: 300px;" >{"handle":"nugrauniverse","arch":"js","styles":{"a":"373543","c":"373543","d":"373543","f":0,"i":0,"k":"373543","l":"373543","m":"373543","n":"fe9004","p":"10.8","q":"373543","usricon":1.3,"cnrs":"1","fwtickm":1}}</script></div>

<script type="text/javascript">
function Close() {
    document.getElementById("chatango").style.display = "none";
}

dragElement(document.getElementById("chatango"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById("chatango2")) {
        // if present, the header is where you move the DIV from:
        document.getElementById("chatango2").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV: 
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
</script>
