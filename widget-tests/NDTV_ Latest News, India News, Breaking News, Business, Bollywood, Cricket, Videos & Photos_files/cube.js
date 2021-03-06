initialize();

function get_browser_info(){
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],d = 'desktop'; 
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua) ) {
        d = 'mobile';
    }
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'ie',version:(tem[1]||''),device:d};
    }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR\/(\d+)/)
        if(tem!=null)   {return {name:'opera', version:tem[1],device:d};}
        }
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {name: M[0].toLowerCase(),version: M[1],device:d};
}

function initialize() {
    var script = document.createElement('script');
    script.type = "text/javascript";
    if (script.readyState) {  //IE
        script.onreadystatechange = function () {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                __load(false);
            }
        };
    } else {
        script.onload = function () {
            __load(false);
        };
    }
    script.src = "//drop.ndtv.com/social/lib/js/jquery.min.all.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

var _base = '//edata.ndtv.com/cube/';
//_base = '//local.electionsdata.ndtv.com/cube/';
var ver = '20170315-9';
var _style = '<style>#__cubeDiv .linkwrap { position:relative; display:inline-block; }#__cubeDiv .blocker { position:absolute; height:100%; width:100%; z-index:10;  }#__cubeDiv .linkwrap iframe{ z-index: 20; }.cube_btn {cursor:pointer;width: 120px;position: fixed;z-index: 9999;padding: 8px 10px;right: 15px;bottom: 0;color: #848484;text-transform: uppercase;text-align: center;font-size: 14px;font-weight: 900;background: #fff;-webkit-box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.45);-moz-box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.45);box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.45);font-family: "Roboto", sans-serif;}.cube_btn i {width: 4px;height: 4px;border: solid black;border-width: 0 2px 2px 0;display: inline-block;padding: 2px;transform: rotate(-135deg);-webkit-transform: rotate(-135deg);border-color: #848484;position: relative;top: 3px;}.cube_btn span {display: inline-block;padding: 0px 8px;box-sizing: border-box;}.minimum_btn {z-index:888888;cursor:pointer;width: 24px;height: 20px;position: absolute;top: -12px;right: 20px;background: rgba(0, 0, 0, 0.5);padding: 2px;display: inline-block;border-radius: 2px 2px 0px 0px;box-sizing: border-box;}.minimum_btn i {width: 4px;height: 4px;border: solid black;border-width: 0 2px 2px 0;display: block;padding: 2px;transform: rotate(45deg);-webkit-transform: rotate(45deg);border-color: #fff;margin: 0px auto;}</style>';
var _settings = document.getElementById('__cube');
var __ncube_pos = '';
var __ncube_status = localStorage.getItem('__ncube_status') || 1;
__ncube_status = parseInt(__ncube_status);
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
var $jqueryCube = '';
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-46263859-38', 'auto', {'name': 'cube'});

function __load(relaunch) {
    var binfo = get_browser_info();
    if(binfo.name == 'ie'){
        return true; 
    }
    if(!relaunch){
        $jqueryCube = $.noConflict(true);
    }
    if (_settings) {
        var site = _settings.getAttribute('data-site') || 'ndtv';
        var size = _settings.getAttribute('data-size') || '80';
        var pos_top = _settings.getAttribute('data-top') || '-1';
        var pos_left = _settings.getAttribute('data-left') || '-1';
        var pos_right = _settings.getAttribute('data-right') || '-1';
        var pos_bottom = _settings.getAttribute('data-bottom') || '-1';
        var pos_css = (pos_top != '-1' ? 'top:' + pos_top + 'px;' : '') + (pos_left != '-1' ? 'left:' + pos_left + 'px;' : '') + (pos_right != '-1' ? 'right:' + pos_right + 'px;' : '') + (pos_bottom != '-1' ? 'bottom:' + pos_bottom + 'px;' : '');
        pos_css = pos_css==''?'bottom:0px;right:0px;':pos_css;
        pos_css = pos_css+'z-index:999999999;position:fixed';
        $jqueryCube('#__cube').hide();
        $jqueryCube('#__cube').attr('style',pos_css);
        __init(site, size, _settings);
    }
}

function _cubeBtnMax() {
    ga('cube.send', 'event', 'cube', 'max', '');
    $jqueryCube('#__cubeButton').toggle();
    __ncube_status = 1;
    localStorage.setItem('__ncube_status', 1);
    __load(true);
}

function _cubeBtnMin() {
    ga('cube.send', 'event', 'cube', 'min', '');
    __ncube_status = 0;
    localStorage.setItem('__ncube_status', 0);
    $jqueryCube('#__cubeDiv').html('');
    $jqueryCube('.minimum_btn').hide();
    $jqueryCube('#__cubeButton').show();
}

function __init(site, size, _settings) {
    size = parseInt(size);
    var width = size == 80 ? 120 : (size == 100 ? 140 : (size == 120 ? 185 : 80));
    var height = size == 80 ? 100 : (size == 100 ? 120 : (size == 120 ? 140 : 100));
    var closePos = size == 80 ? 20 : (size == 100 ? 20 : (size == 120 ? 43 : 20));
    __ncube_pos = localStorage.getItem('__ncube_pos');
    $jqueryCube(document).ready(function () {
        $jqueryCube(_style).insertAfter('#__cube');
        if (__ncube_status) {
            _settings.innerHTML = '<div id="__cubeDiv" style="position:relative;"><div class="minimum_btn" onclick="_cubeBtnMin();" style="display:none;right:' + closePos + 'px"><i></i></div><a id="__cubeA" href="javascript:void(0);" class="linkwrap"><div class="blocker" id="__dragN"></div><iframe id="__cubeIframe" width="' + width + '" height="' + height + '" frameborder="0" allowtransparency="true" style="overflow: hidden !important;" src="' + _base + 'index.html?&ver=' + ver + '&size=' + size + '&site=' + site + '"></iframe></a></div>';
        } 
        $jqueryCube('<div id="__cubeButton" class="cube_btn" style="' + (__ncube_status ? 'display:none;' : 'display:block;') + '" onclick="_cubeBtnMax();"><i></i><span>Open Cube</span><i></i></div>').insertAfter('#__cube');
        
        if (__ncube_pos) {
            __ncube_pos = JSON.parse(__ncube_pos);
            $jqueryCube('#__cube').css({'top': __ncube_pos.t + 'px', 'left': __ncube_pos.l + 'px', 'bottom': 'auto', 'right': 'auto'});
        }
        $jqueryCube("#__cube").draggable({
            containment: "body",
            drag: function (event, ui) {
                $jqueryCube('#__cube').css({'bottom': 'auto', 'right': 'auto'});
            },
            stop: function (event, ui) {
                localStorage.setItem('__ncube_pos', JSON.stringify({t: ui.position.top, l: ui.position.left}));
            }
        });
        $jqueryCube('#__dragN').hover(function () {
            $jqueryCube('#__cubeIframe')[0].contentWindow.postMessage('{"type":"__cube","action":"stop"}', "*");
        }, function () {
            $jqueryCube('#__cubeIframe')[0].contentWindow.postMessage('{"type":"__cube","action":"start"}', "*");
        });
    });
    
    eventer(messageEvent, function (e) {
        var key = e.message ? "message" : "data";
        var obj = {};
        try {obj = JSON.parse(e[key]);} catch (e) {}
        if (obj.type && obj.type == '__cube') {
            switch (obj.action) {
                case 'elem':
                    if (obj.val == 'show') {
                        $jqueryCube(obj.elem).show();
                        $jqueryCube('.minimum_btn').show();
                    } else {
                        $jqueryCube(obj.elem).hide()
                    }
                    break;
                case 'link':
                    $jqueryCube(obj.elem).attr('href', obj.url).attr('onclick', "ga('cube.send', 'event', 'cube', 'click', '" + obj.site + '-' + obj.device + '-face:' + obj.face + '-click:' + obj.url + '-ref:' + obj.ref + "');");
                    break;
                case 'ga':
                    ga('cube.send', 'event', 'cube', obj.act, obj.val);
                    break;
                case 'daddy':
                    $jqueryCube('#__cube').css({'top': 'auto', 'left': '0px', 'bottom': '0px', 'right': 'auto'});
                    break;
                case 'son':
                    __ncube_pos = localStorage.getItem('__ncube_pos') || '';
                    if (__ncube_pos) {
                        __ncube_pos = JSON.parse(__ncube_pos);
                        $jqueryCube('#__cube').css({'top': __ncube_pos.t + 'px', 'left': __ncube_pos.l + 'px', 'bottom': 'auto', 'right': 'auto'});
                    }else{
                        $jqueryCube('#__cube').css({'top': 'auto', 'left': 'auto', 'bottom': '0px', 'right': '0px'});
                    }
                    break;
                default:
                    break;
            }
        }
    }, false);
}

