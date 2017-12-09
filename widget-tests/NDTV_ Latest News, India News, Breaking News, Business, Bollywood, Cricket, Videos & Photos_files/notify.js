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

function setCookieVal(c_name,value,exdays)
{
    var current = new Date();
    var exdate=new Date(current.getTime() + 86400000*exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString() + ';path=/;domain=.ndtv.com');
    document.cookie=c_name + "=" + c_value;
}

function getCookieVal(c_name)
{
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name)
        {
            return unescape(y);
        }
    }
    return '';
}
var __cname = 'ndtvnews_alerts';
var __matchid = '';
var __cday = 120;
var ___page = (typeof __page !== 'undefined')?__page:'';

var browser=get_browser_info();
if(((browser.name == 'opera' && browser.version >= 26) || (browser.name == 'chrome' && browser.version >= 43) || (browser.device != 'mobile' && browser.name == 'firefox' && browser.version >= 44))){
    var cval = getCookieVal(__cname) || '';
    if (cval == '') {
        setTimeout(__showSubscribePopup, ___page=='hp'?17000:3000);
    }
    ndtvUnsubscribeButton();
}

function __showSubscribePopup(){
    var id = document.getElementById('___ndtvpushdiv');
    if(id){
        id.innerHTML = '<style>.noti_bgstyle{width:100%;height:100%;position:fixed;left:0;top:0;z-index:15010000;background:rgba(0,0,0,.8);opacity:.95;filter:alpha(opacity=95)}.noti_wrap{z-index:2147483647;left:50%;top:0;position:fixed;width:400px;margin-left:-200px;box-sizing:border-box;padding:12px;background:#fff;font-family:Roboto,sans-serif;-moz-box-shadow:1px 1px 1px 0 #c9c9c9;-webkit-box-shadow:1px 1px 1px 0 #c9c9c9;box-shadow:1px 1px 1px 0 #c9c9c9;border:1px solid #e8e8e8}.notif_box{display:table;margin-top:10px}.noti_wrap .noti_img{width:65px;height:65px;float:left;margin:0 10px 0 0}.noti_wrap .noti_cont{display:table-cell;vertical-align:top}.noti_wrap .noti_cont h2{font-size:14px;margin:0;font-weight:600;line-height:18px}.noti_wrap .noti_cont .botinfo{font-size:12px;font-weight:400;padding:5px 0;line-height:18px;color:#666}.noti_wrap .noti_btnwrap{text-align:right;padding:10px 0 0;clear:both}.noti_btnwrap a.allow,.noti_btnwrap a.notnow{width:auto;padding:4px 15px;background:#fff;line-height:20px;border:1px solid #ccc;font-size:11px;color:#333;text-decoration:none;text-transform:uppercase;border-radius:3px;margin:0 0 0 10px}.noti_btnwrap a.notnow{border:none;border-radius:none;text-transform:none;text-decoration:underline;font-size:12px}.noti_btnwrap a.allow:hover{color:#fff;-moz-transition:background .3s ease-in;-o-transition:background .3s ease-in;-webkit-transition:background .3s ease-in;background:#4FACEF;border:1px solid #4B84AD}.noti_btnwrap a.active{background:#b40002;color:#fff;border:1px solid #b40002}.noti_wrap .teaminfo{font-size:12px}.noti_wrap h3{color:#184b80;margin-top: 10px; margin-bottom: 10px;}.noti_wrap h2 span,.noti_wrap h3 span{color:#4a9400}.noti_wrap li{padding-bottom:2px} .noti_wrap input[type="checkbox"]{margin:4px;}@media only screen and (max-device-width:480px){.noti_wrap{width:300px;margin-left:-150px}}</style>';
        id.innerHTML +='<div id="__cricketsubscribe"><div class="noti_bgstyle"></div><div class="noti_wrap"> <div class="notif_box"> <div class="noti_img"><img width="65" height="65" style="border-radius:5px;" src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCABBAEEDAREAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAEGAwUHBAL/xAAuEAABAwQCAgEBBgcAAAAAAAABAAIDBAUGERIhEzEHQRQyUWFxgRUWQnKCsfD/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAgMBBAUGB//EACoRAAICAQMCBQMFAAAAAAAAAAABAgMRBBIhBRMUFTFR8DJBcTNhocHR/9oADAMBAAIRAxEAPwDmq4h9QCAIAgCAIAgCAICEMBAEAQBAEAQBAEBCyRCAIAgCAIAgCAIC04Bi1Nl+QyW6qqJYI207pg6IDewWjXf9yuprVksM5nU9ZPSVKcFnnHJ78vwGGxUtHdLXcDcLTUy+Ey8QHRvBI0ddHsEfTsaU7KFHDi+CjRdUlc5V2RxJLP5LG/4tx2LIK63SXypApKJtU/XAvHbuQ1r6NDT/AJKzsV7nHJqea6zsRu7fDeM84+eprLVivx9ebnBb6PJrk6pnPGNrqbiHHW9bLdKMaqZPCZbbreo0wdk61hfPc9ZwLCW5N/LxyC5i5eTx+L7ONctb+9x16WezVu255K/M9d2e/sW33+M+X4Ng0WSfwCTI7iy4eUQ8HQAN5EbA5cdd7CdmrdtzyF1HXunvqtbfn7lPuWH3ChzQ40xpfUPnEcLtdPY77r/012fw0fwVEqmp7DqVa+uel8Q/RLn8+xlzrH7ZjF8barfWTVUsUYNS+QNAa89ho1+Xf7hZuhGDwiPTtVbqa3ZYkl9isKk6BcvjDIrbjOUyV10lfFTupXxBzWF55FzSOh+hWxp5xhLMjk9W01mopUK1l5/02mMZtZ46W72HIWzy2esqHTwyRtJdE7ly9ex6B69H6dqcLY8xl6Grqun3Nwuo+tLDLFJmWBzZXc7m6edgq6EQeVsD9h7uTXkDXviGf9tT3073Io7HUfCx0+OIvOOPyv5yaKySfG+P3imusN6u9RNSu8jInU2g52tD+kf7CjHsxe5Muv8AMr63VKCSfz3NLR5ZS1HypHk1Y10FK6r8rgByLGBvEdD2daVasTt3s2rNHOOg8PDl4/s1mY3enu2Z3G6W+V5glmD4n6LT0B332Owo2yTm5I2NDTKvTRqsXP3OlUXyZjMlFR324xPfk9JRPga0RO4vcfz9Dev25OWyr4Y3P1OHZ0vUqTpr/TbyccrKye4Vs9ZUyGSed5kkefq4nZWk228s9NXCNcFCPojBtYJ5IWSOQgyEGQgyEGQgyEGQgyEGSFkwEAQBAEAQBAEAQEIRCAIAgCAIAgCAIAgCAIAgCAIAgCAID//Z"></div><div class="noti_cont"> <h2>Get <span>Breaking</span> News Alerts From NDTV.</h2> <div class="botinfo">We\'ll send you latest news updates through the day. You can manage them any time from your browser settings.</div></div></div><div class="noti_btnwrap"><span id="__emsg" style="color:red;font-size:12px;"></span><a class="notnow" onclick="ndtvCloseThis(5);" href="javascript:void(0);">No Thanks</a> <a class="allow" onclick="__alw();" href="javascript:void(0);">&nbsp;&nbsp;&nbsp;&nbsp;Allow&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> </div></div></div>';
    }
}

function ndtvCloseThis(cday){
    setCookieVal(__cname,'yup',cday);
    document.getElementById('__cricketsubscribe').style.display='none';
}

function ndtvUnsubscribeButton(){
    if(((browser.name == 'chrome' && browser.version >= 43) || (browser.device != 'mobile' && browser.name == 'firefox' && browser.version >= 44))){
        var id = document.getElementById('___ndtvspldiv');
        if(id){
            var msgdispl = (window.location.href.indexOf('browserpush=true') > -1)?'block':'none';
            if(___page=='wap'){
                id.innerHTML = '<style>#___ndtvspldiv{display:table-cell;width:32px;}.popover {text-transform:none;font-size: 14px;font-style: normal;font-weight: 400;letter-spacing: normal;background-color: #f64646;border-radius: 6px;box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);width: 200px;padding: 1px;right:-26px;top: 44px;position: absolute;z-index: 100060;color:#FFF;}.popover-content{cursor:pointer;padding: 10px;text-align:center;font-size: 12px;}.popover > .arrow, .popover > .arrow::after {border-color: transparent;border-style: solid;display: block;height: 0;position: absolute;width: 0;}.popover > .arrow {border-width: 11px;border-bottom-color: #CCC;border-top-width: 0;left: 50%;margin-left: 44px;top: -11px;}.popover > .arrow::after {border-width: 10px;border-bottom-color: #f64646;border-top-width: 0;content: " ";margin-left: -10px;top: 1px;}</style>';
                id.innerHTML += '<div class="notify_bell" style="position:relative;"><a href="https://alerts.ndtv.com/?settings=1" title="Breaking News Alerts"><i class="sprite"></i></a><div class="popover" style="display: '+msgdispl+';" onclick="this.style.display=\'none\';"><div class="arrow" style="left: 50%;"></div><div class="popover-content"><div style="color:#3410b3;text-align: right;padding-bottom: 5px;">Close [X]</div>You can manage your notification subscription by clicking above bell.</div></div></div>';
            }else{
                id.innerHTML = '<style>.topnav2014 .comments{position:relative;}.popover {text-transform:none;font-size: 14px;font-style: normal;font-weight: 400;letter-spacing: normal;background-color: #f64646;border-radius: 6px;box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);max-width: 200px;padding: 1px;left:-90px;top: 40px;position: absolute;z-index: 100060;color:#FFF;width:200px;}.popover-content{cursor:pointer;padding: 10px;text-align:center;font-size: 12px;}.popover > .arrow, .popover > .arrow::after {border-color: transparent;border-style: solid;display: block;height: 0;position: absolute;width: 0;}.popover > .arrow {border-width: 11px;border-bottom-color: #CCC;border-top-width: 0;left: 50%;margin-left: -11px;top: -11px;}.popover > .arrow::after {border-width: 10px;border-bottom-color: #f64646;border-top-width: 0;content: " ";margin-left: -10px;top: 1px;}.fbmsginner{position:relative;'+(___page=='hp'?'padding:14px 5px 20px 0px;':'')+'}</style>';
                id.innerHTML += '<span class="fbmsginner"><a class="break_fbmsg" href="https://alerts.ndtv.com/?settings=1" title="Breaking News Alerts"><b></b></a><div class="popover" style="display: '+msgdispl+';" onclick="this.style.display=\'none\';"><div class="arrow" style="left: 50%;"></div><div class="popover-content"><div style="color:#3410b3;text-align: right;padding-bottom: 5px;">Close [X]</div>You can manage your notification subscription by clicking above bell.</div></div></span>';
            }
        }
    }
}
function __getcheckboxes() {
    var checkboxes = document.getElementsByName('__s');
    var vals = "";
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        if (checkboxes[i].checked)
        {
            vals += "," + checkboxes[i].value;
        }
    }
    if (vals)vals = vals.substring(1);
    return vals;
}
function __alw() {
    document.getElementById('__emsg').innerHTML = '';
    ndtvCloseThis(180);
    setTimeout(function(){location.href = 'https://alerts.ndtv.com/';},2);    
    return false;
}