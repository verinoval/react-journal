window.averta = {},
    function($) {
        window.package = function(t) {
            window[t] || (window[t] = {})
        };
        var extend = function(t, i) {
            for (var e in i) t[e] = i[e]
        };
        Function.prototype.extend = function(t) {
            "function" == typeof t.prototype.constructor ? extend(this.prototype, t.prototype) : this.prototype.extend(t), this.prototype.constructor = this
        };
        var trans = {
            Moz: "-moz-",
            Webkit: "-webkit-",
            Khtml: "-khtml-",
            O: "-o-",
            ms: "-ms-",
            Icab: "-icab-"
        };

        function getVendorPrefix() {
            if ("result" in arguments.callee) return arguments.callee.result;
            var t = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                i = document.getElementsByTagName("script")[0];
            for (var e in i.style)
                if (t.test(e)) return arguments.callee.result = e.match(t)[0];
            return "WebkitOpacity" in i.style ? arguments.callee.result = "Webkit" : "KhtmlOpacity" in i.style ? arguments.callee.result = "Khtml" : arguments.callee.result = ""
        }

        function checkStyleValue(t) {
            var i = (document.body || document.documentElement).style,
                e = t;
            if ("string" == typeof i[e]) return !0;
            v = ["Moz", "Webkit", "Khtml", "O", "ms"], e = e.charAt(0).toUpperCase() + e.substr(1);
            for (var s = 0; s < v.length; s++)
                if ("string" == typeof i[v[s] + e]) return !0;
            return !1
        }

        function supportsTransitions() {
            return checkStyleValue("transition")
        }

        function supportsTransforms() {
            return checkStyleValue("transform")
        }

        function supports3DTransforms() {
            if (!supportsTransforms()) return !1;
            var t, i = document.createElement("i"),
                e = {
                    WebkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    MSTransform: "-ms-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    Transform: "transform",
                    transform: "transform"
                };
            for (var s in i.style.display = "block", document.body.insertBefore(i, null), e) void 0 !== i.style[s] && (i.style[s] = "translate3d(1px,1px,1px)", t = window.getComputedStyle(i).getPropertyValue(e[s]));
            return document.body.removeChild(i), null != t && 0 < t.length && "none" !== t
        }
        window._mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), window._touch = "ontouchstart" in document, $(document).ready(function() {
            window._jcsspfx = getVendorPrefix(), window._csspfx = trans[window._jcsspfx], window._cssanim = !0, window._css3d = !0, window._css2d = !0
        }), window.parseQueryString = function(t) {
            var n = {};
            return t.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function(t, i, e, s) {
                n[i] = s
            }), n
        };
        var fps60 = 50 / 3;
        if (window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t, i) {
            window.setTimeout(t, fps60)
        }), window.getComputedStyle || (window.getComputedStyle = function(e, t) {
            return this.el = e, this.getPropertyValue = function(t) {
                var i = /(\-([a-z]){1})/g;
                return "float" == t && (t = "styleFloat"), i.test(t) && (t = t.replace(i, function() {
                    return arguments[2].toUpperCase()
                })), e.currentStyle[t] ? e.currentStyle[t] : null
            }, e.currentStyle
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
            var i = this.length >>> 0,
                e = Number(arguments[1]) || 0;
            for ((e = e < 0 ? Math.ceil(e) : Math.floor(e)) < 0 && (e += i); e < i; e++)
                if (e in this && this[e] === t) return e;
            return -1
        }), window.isMSIE = function(version) {
            if (!$.browser.msie) return !1;
            if (!version) return !0;
            var ieVer = $.browser.version.slice(0, $.browser.version.indexOf("."));
            return "string" == typeof version ? -1 !== version.indexOf("<") || -1 !== version.indexOf(">") ? eval(ieVer + version) : eval(version + "==" + ieVer) : version == ieVer
        }, $.removeDataAttrs = function(e, t) {
            var i, s, n = [],
                o = e[0].attributes,
                a = o.length;
            for (t = t || [], i = 0; i < a; i++) "data-" === (s = o[i].name).substring(0, 5) && -1 === t.indexOf(s) && n.push(o[i].name);
            $.each(n, function(t, i) {
                e.removeAttr(i)
            })
        }, jQuery) {
            $.jqLoadFix = function() {
                if (this.complete) {
                    var t = this;
                    setTimeout(function() {
                        $(t).trigger("load")
                    }, 1)
                }
            }, jQuery.uaMatch = jQuery.uaMatch || function(t) {
                t = t.toLowerCase();
                var i = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
                return {
                    browser: i[1] || "",
                    version: i[2] || "0"
                }
            }, matched = jQuery.uaMatch(navigator.userAgent), browser = {}, matched.browser && (browser[matched.browser] = !0, browser.version = matched.version), browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0);
            var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
            isIE11 && (browser.msie = "true", delete browser.mozilla), jQuery.browser = browser, $.fn.preloadImg = function(n, o) {
                return this.each(function() {
                    var i = $(this),
                        e = this,
                        s = new Image;
                    s.onload = function(t) {
                        null == t && (t = {}), i.attr("src", n), t.width = s.width, t.height = s.height, i.data("width", s.width), i.data("height", s.height), setTimeout(function() {
                            o.call(e, t)
                        }, 50), s = null
                    }, s.src = n
                }), this
            }
        }
    }(jQuery),
    function() {
        "use strict";
        averta.EventDispatcher = function() {
            this.listeners = {}
        }, averta.EventDispatcher.extend = function(t) {
            var i = new averta.EventDispatcher;
            for (var e in i) "constructor" != e && (t[e] = averta.EventDispatcher.prototype[e])
        }, averta.EventDispatcher.prototype = {
            constructor: averta.EventDispatcher,
            addEventListener: function(t, i, e) {
                this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push({
                    listener: i,
                    ref: e
                })
            },
            removeEventListener: function(t, i, e) {
                if (this.listeners[t]) {
                    for (var s = 0; s < this.listeners[t].length; ++s) i === this.listeners[t][s].listener && e === this.listeners[t][s].ref && this.listeners[t].splice(s--, 1);
                    0 === this.listeners[t].length && (this.listeners[t] = null)
                }
            },
            dispatchEvent: function(t) {
                if ((t.target = this).listeners[t.type])
                    for (var i = 0, e = this.listeners[t.type].length; i < e; ++i) this.listeners[t.type][i].listener.call(this.listeners[t.type][i].ref, t)
            }
        }
    }(),
    function(o) {
        "use strict";
        var a = "ontouchstart" in document,
            t = window.navigator.pointerEnabled,
            i = !t && window.navigator.msPointerEnabled,
            r = t || i,
            e = (t ? "pointerdown " : "") + (i ? "MSPointerDown " : "") + (a ? "touchstart " : "") + "mousedown",
            h = (t ? "pointermove " : "") + (i ? "MSPointerMove " : "") + (a ? "touchmove " : "") + "mousemove",
            l = (t ? "pointerup " : "") + (i ? "MSPointerUp " : "") + (a ? "touchend " : "") + "mouseup",
            d = (t ? "pointercancel " : "") + (i ? "MSPointerCancel " : "") + "touchcancel";
        averta.TouchSwipe = function(t) {
            this.$element = t, this.enabled = !0, t.bind(e, {
                target: this
            }, this.__touchStart), (t[0].swipe = this).onSwipe = null, this.swipeType = "horizontal", this.noSwipeSelector = "input, textarea, button, .no-swipe, .ms-no-swipe", this.lastStatus = {}
        };
        var s = averta.TouchSwipe.prototype;
        s.getDirection = function(t, i) {
            switch (this.swipeType) {
                case "horizontal":
                    return t <= this.start_x ? "left" : "right";
                case "vertical":
                    return i <= this.start_y ? "up" : "down";
                case "all":
                    return Math.abs(t - this.start_x) > Math.abs(i - this.start_y) ? t <= this.start_x ? "left" : "right" : i <= this.start_y ? "up" : "down"
            }
        }, s.priventDefultEvent = function(t, i) {
            var e = Math.abs(t - this.start_x),
                s = Math.abs(i - this.start_y) < e;
            return "horizontal" === this.swipeType && s || "vertical" === this.swipeType && !s
        }, s.createStatusObject = function(t) {
            var i, e, s = {};
            return i = this.lastStatus.distanceX || 0, e = this.lastStatus.distanceY || 0, s.distanceX = t.pageX - this.start_x, s.distanceY = t.pageY - this.start_y, s.moveX = s.distanceX - i, s.moveY = s.distanceY - e, s.distance = parseInt(Math.sqrt(Math.pow(s.distanceX, 2) + Math.pow(s.distanceY, 2))), s.duration = (new Date).getTime() - this.start_time, s.direction = this.getDirection(t.pageX, t.pageY), s
        }, s.__reset = function(t, i) {
            this.reset = !1, this.lastStatus = {}, this.start_time = (new Date).getTime();
            var e = this.__getPoint(t, i);
            this.start_x = e.pageX, this.start_y = e.pageY
        }, s.__touchStart = function(t) {
            var i = t.data.target,
                e = t;
            if (i.enabled && !(0 < o(t.target).closest(i.noSwipeSelector, i.$element).length))
                if (t = t.originalEvent, r && o(this).css("-ms-touch-action", "horizontal" === i.swipeType ? "pan-y" : "pan-x"), i.onSwipe) {
                    if (!(i.touchStarted || a && i.start_time && "mousedown" === t.type && (new Date).getTime() - i.start_time < 600)) {
                        var s = i.__getPoint(t, e);
                        i.start_x = s.pageX, i.start_y = s.pageY, i.start_time = (new Date).getTime(), o(document).bind(l, {
                            target: i
                        }, i.__touchEnd).bind(h, {
                            target: i
                        }, i.__touchMove).bind(d, {
                            target: i
                        }, i.__touchCancel);
                        var n = i.createStatusObject(s);
                        n.phase = "start", i.onSwipe.call(null, n), a || e.preventDefault(), i.lastStatus = n, i.touchStarted = !0
                    }
                } else o.error("Swipe listener is undefined")
        }, s.__touchMove = function(t) {
            var i = t.data.target,
                e = t;
            if (t = t.originalEvent, i.touchStarted) {
                clearTimeout(i.timo), i.timo = setTimeout(function() {
                    i.__reset(t, e)
                }, 60);
                var s = i.__getPoint(t, e),
                    n = i.createStatusObject(s);
                i.priventDefultEvent(s.pageX, s.pageY) && e.preventDefault(), n.phase = "move", i.lastStatus = n, i.onSwipe.call(null, n)
            }
        }, s.__touchEnd = function(t) {
            var i = t.data.target,
                e = t;
            t = t.originalEvent, clearTimeout(i.timo);
            var s = i.lastStatus;
            a || e.preventDefault(), s.phase = "end", i.touchStarted = !1, i.priventEvt = null, o(document).unbind(l, i.__touchEnd).unbind(h, i.__touchMove).unbind(d, i.__touchCancel), s.speed = s.distance / s.duration, i.onSwipe.call(null, s)
        }, s.__touchCancel = function(t) {
            t.data.target.__touchEnd(t)
        }, s.__getPoint = function(t, i) {
            return a && -1 === t.type.indexOf("mouse") ? t.touches[0] : r ? t : i
        }, s.enable = function() {
            this.enabled || (this.enabled = !0)
        }, s.disable = function() {
            this.enabled && (this.enabled = !1)
        }
    }(jQuery),
    function() {
        "use strict";
        averta.Ticker = function() {};
        var n = averta.Ticker,
            o = [],
            a = 0,
            t = !0;
        n.add = function(t, i) {
            return o.push([t, i]), 1 === o.length && n.start(), a = o.length
        }, n.remove = function(t, i) {
            for (var e = 0, s = o.length; e < s; ++e) o[e] && o[e][0] === t && o[e][1] === i && o.splice(e, 1);
            0 === (a = o.length) && n.stop()
        }, n.start = function() {
            t && (t = !1, e())
        }, n.stop = function() {
            t = !0
        };
        var e = function() {
            if (!n.__stopped) {
                for (var t, i = 0; i !== a; i++)(t = o[i])[0].call(t[1]);
                requestAnimationFrame(e)
            }
        }
    }(),
    function() {
        "use strict";
        Date.now || (Date.now = function() {
            return (new Date).getTime()
        }), averta.Timer = function(t, i) {
            this.delay = t, this.currentCount = 0, this.paused = !1, this.onTimer = null, this.refrence = null, i && this.start()
        }, averta.Timer.prototype = {
            constructor: averta.Timer,
            start: function() {
                this.paused = !1, this.lastTime = Date.now(), averta.Ticker.add(this.update, this)
            },
            stop: function() {
                this.paused = !0, averta.Ticker.remove(this.update, this)
            },
            reset: function() {
                this.currentCount = 0, this.paused = !0, this.lastTime = Date.now()
            },
            update: function() {
                this.paused || Date.now() - this.lastTime < this.delay || (this.currentCount++, this.lastTime = Date.now(), this.onTimer && this.onTimer.call(this.refrence, this.getTime()))
            },
            getTime: function() {
                return this.delay * this.currentCount
            }
        }
    }(),
    function() {
        "use strict";
        window.CSSTween = function(t, i, e, s) {
            this.$element = t, this.duration = i || 1e3, this.delay = e || 0, this.ease = s || "linear"
        };
        var t = CSSTween.prototype;
        t.to = function(t, i) {
            return this.to_cb = t, this.to_cb_target = i, this
        }, t.from = function(t, i) {
            return this.fr_cb = t, this.fr_cb_target = i, this
        }, t.onComplete = function(t, i) {
            return this.oc_fb = t, this.oc_fb_target = i, this
        }, t.chain = function(t) {
            return this.chained_tween = t, this
        }, t.reset = function() {
            clearTimeout(this.start_to), clearTimeout(this.end_to)
        }, t.start = function() {
            var i = this.$element[0];
            clearTimeout(this.start_to), clearTimeout(this.end_to), this.fresh = !0, this.fr_cb && (i.style[window._jcsspfx + "TransitionDuration"] = "0ms", this.fr_cb.call(this.fr_cb_target));
            var e = this;
            return this.onTransComplete = function(t) {
                e.fresh && (e.reset(), i.style[window._jcsspfx + "TransitionDuration"] = "", i.style[window._jcsspfx + "TransitionProperty"] = "", i.style[window._jcsspfx + "TransitionTimingFunction"] = "", i.style[window._jcsspfx + "TransitionDelay"] = "", e.fresh = !1, e.chained_tween && e.chained_tween.start(), e.oc_fb && e.oc_fb.call(e.oc_fb_target))
            }, this.start_to = setTimeout(function() {
                e.$element && (i.style[window._jcsspfx + "TransitionDuration"] = e.duration + "ms", i.style[window._jcsspfx + "TransitionProperty"] = e.transProperty || "all", 0 < e.delay ? i.style[window._jcsspfx + "TransitionDelay"] = e.delay + "ms" : i.style[window._jcsspfx + "TransitionDelay"] = "", i.style[window._jcsspfx + "TransitionTimingFunction"] = e.ease, e.to_cb && e.to_cb.call(e.to_cb_target), e.end_to = setTimeout(function() {
                    e.onTransComplete()
                }, e.duration + (e.delay || 0)))
            }, 1), this
        }
    }(),
    function() {
        "use strict";
        var a = null;

        function r(t, i) {
            if (void 0 !== i.x || void 0 !== i.y)
                if (a) {
                    var e = window._jcsspfx + "Transform";
                    void 0 !== i.x && (i[e] = (i[e] || "") + " translateX(" + i.x + "px)", delete i.x), void 0 !== i.y && (i[e] = (i[e] || "") + " translateY(" + i.y + "px)", delete i.y)
                } else {
                    if (void 0 !== i.x) i["auto" !== t.css("right") ? "right" : "left"] = i.x + "px", delete i.x;
                    if (void 0 !== i.y) i["auto" !== t.css("bottom") ? "bottom" : "top"] = i.y + "px", delete i.y
                }
            return i
        }
        window.CTween = {}, CTween.setPos = function(t, i) {
            t.css(r(t, i))
        }, CTween.animate = function(t, i, e, s) {
            if (null == a && (a = window._cssanim), s = s || {}, r(t, e), a) {
                var n = new CSSTween(t, i, s.delay, EaseDic[s.ease]);
                return s.transProperty && (n.transProperty = s.transProperty), n.to(function() {
                    t.css(e)
                }), s.complete && n.onComplete(s.complete, s.target), n.start(), n.stop = n.reset, n
            }
            var o;
            return s.delay && t.delay(s.delay), s.complete && (o = function() {
                s.complete.call(s.target)
            }), t.stop(!0).animate(e, i, s.ease || "linear", o), t
        }, CTween.fadeOut = function(t, i, e) {
            var s = {};
            !0 === e ? s.complete = function() {
                t.remove()
            } : 2 === e && (s.complete = function() {
                t.css("display", "none")
            }), CTween.animate(t, i || 1e3, {
                opacity: 0
            }, s)
        }, CTween.fadeIn = function(t, i, e) {
            !1 !== e && t.css("opacity", 0).css("display", ""), CTween.animate(t, i || 1e3, {
                opacity: 1
            })
        }
    }(), window.EaseDic = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    easeInCubic: "cubic-bezier(.55,.055,.675,.19)",
    easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
    easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
    easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
    easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
    easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
    easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
    easeOutExpo: "cubic-bezier(.19,1,.22,1)",
    easeInOutExpo: "cubic-bezier(1,0,0,1)",
    easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
    easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
    easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
    easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
    easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
    easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
    easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
    easeOutQuint: "cubic-bezier(.23,1,.32,1)",
    easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
    easeInSine: "cubic-bezier(.47,0,.745,.715)",
    easeOutSine: "cubic-bezier(.39,.575,.565,1)",
    easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
    easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
    easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
    easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
},
    function() {
        "use strict";
        window.MSAligner = function(t, i, e) {
            this.$container = i, this.$img = e, this.type = t || "stretch", this.widthOnly = !1, this.heightOnly = !1
        };
        var t = MSAligner.prototype;
        t.init = function(t, i) {
            switch (this.baseWidth = t, this.baseHeight = i, this.imgRatio = t / i, this.imgRatio2 = i / t, this.type) {
                case "tile":
                    this.$container.css("background-image", "url(" + this.$img.attr("src") + ")"), this.$img.remove();
                    break;
                case "center":
                    this.$container.css("background-image", "url(" + this.$img.attr("src") + ")"), this.$container.css({
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat"
                    }), this.$img.remove();
                    break;
                case "stretch":
                    this.$img.css({
                        width: "100%",
                        height: "100%"
                    });
                    break;
                case "fill":
                case "fit":
                    this.needAlign = !0, this.align()
            }
        }, t.align = function() {
            if (this.needAlign) {
                var t = this.$container[0].offsetWidth,
                    i = this.$container[0].offsetHeight,
                    e = t / i;
                "fill" == this.type ? this.imgRatio < e ? (this.$img.width(t), this.$img.height(t * this.imgRatio2)) : (this.$img.height(i), this.$img.width(i * this.imgRatio)) : "fit" == this.type && (this.imgRatio < e ? (this.$img.height(i), this.$img.width(i * this.imgRatio)) : (this.$img.width(t), this.$img.height(t * this.imgRatio2))), this.setMargin()
            }
        }, t.setMargin = function() {
            var t = this.$container[0].offsetWidth,
                i = this.$container[0].offsetHeight;
            this.$img.css("margin-top", (i - this.$img[0].offsetHeight) / 2 + "px"), this.$img.css("margin-left", (t - this.$img[0].offsetWidth) / 2 + "px")
        }
    }(),
    function(s) {
        var i = function(t) {
            this.options = s.extend({}, i.defaultOptions, t), this.isEnabled = !1, !this.options.forcePolyfill && this.supportsPointerEvents() || (this.registerEvents(), this.isEnabled = !0)
        };
        i.defaultOptions = {
            forcePolyfill: !1,
            selector: "*",
            listenOn: ["click", "dblclick", "mousedown", "mouseup"],
            pointerEventsNoneClass: null,
            pointerEventsAllClass: null,
            eventNamespace: "pointer-events-polyfill"
        }, i.prototype.registerEvents = function() {
            s(document).on(this.getEventNames(), this.options.selector, s.proxy(this.onElementClick, this))
        }, i.prototype.getEventNames = function() {
            var t = this.options.eventNamespace ? "." + this.options.eventNamespace : "";
            return this.options.listenOn.join(t + " ") + t
        }, i.prototype.supportsPointerEvents = function() {
            var t = document.createElement("a").style;
            return t.cssText = "pointer-events:auto", "auto" === t.pointerEvents
        }, i.prototype.isClickThrough = function(t) {
            var i = t.css("pointer-events");
            return 0 !== t.length && "all" !== i && !t.is(":root") && !t.hasClass(this.options.pointerEventsAllClass) && !("none" !== i && !t.hasClass(this.options.pointerEventsNoneClass) && !this.isClickThrough(t.parent()))
        }, i.prototype.onElementClick = function(t) {
            var i = s(t.target);
            if (!this.isClickThrough(i)) return !0;
            i.hide();
            var e = document.elementFromPoint(t.clientX, t.clientY);
            return t.target = e, s(e).trigger(t), "A" === e.tagName && (2 === t.which ? window.open(e.getAttribute("href"), "_blank") : e.click()), i.show(), !1
        }, i.prototype.destroy = function() {
            s(document).off(this.getEventNames()), this.isEnabled = !1
        }, window.pointerEventsPolyfill = function(t) {
            return new i(t)
        }
    }(jQuery),
    function() {
        "use strict";
        var n = {
                bouncing: !0,
                snapping: !1,
                snapsize: null,
                friction: .05,
                outFriction: .05,
                outAcceleration: .09,
                minValidDist: .3,
                snappingMinSpeed: 2,
                paging: !1,
                endless: !1,
                maxSpeed: 160
            },
            t = function(t, i, e) {
                if (null === i || null === t) throw new Error("Max and Min values are required.");
                for (var s in this.options = e || {}, n) s in this.options || (this.options[s] = n[s]);
                this._max_value = i, this._min_value = t, this.value = t, this.end_loc = t, this.current_snap = this.getSnapNum(t), this.__extrStep = 0, this.__extraMove = 0, this.__animID = -1
            },
            i = t.prototype;
        i.changeTo = function(i, t, e, s, n) {
            if (this.stopped = !1, this._internalStop(), i = this._checkLimits(i), e = Math.abs(e || 0), this.options.snapping && (s = s || this.getSnapNum(i), !1 !== n && this._callsnapChange(s), this.current_snap = s), t) {
                this.animating = !0;
                var o = this,
                    a = ++o.__animID,
                    r = i - o.value,
                    h = 0,
                    l = i,
                    d = 1 - o.options.friction,
                    c = d + (e - 20) * d * 1.3 / o.options.maxSpeed,
                    p = function() {
                        if (a === o.__animID) {
                            var t = i - o.value;
                            if (!(Math.abs(t) > o.options.minValidDist && o.animating)) return o.animating && (o.value = i, o._callrenderer()), o.animating = !1, a !== o.__animID && (o.__animID = -1), void o._callonComplete("anim");
                            window.requestAnimationFrame(p), o.value = l - r * Math.exp(- ++h * c), o._callrenderer()
                        }
                    };
                p()
            } else this.value = i, this._callrenderer()
        }, i.drag = function(t) {
            this.start_drag && (this.drag_start_loc = this.value, this.start_drag = !1), this.animating = !1, this._deceleration = !1, this.value -= t, !this.options.endless && (this.value > this._max_value || this.value < 0) ? this.options.bouncing ? (this.__isout = !0, this.value += .6 * t) : this.value > this._max_value ? this.value = this._max_value : this.value = 0 : !this.options.endless && this.options.bouncing && (this.__isout = !1), this._callrenderer()
        }, i.push = function(t) {
            if (this.stopped = !1, this.options.snapping && Math.abs(t) <= this.options.snappingMinSpeed) this.cancel();
            else {
                if (this.__speed = t, this.__startSpeed = t, this.end_loc = this._calculateEnd(), this.options.snapping) {
                    var i = this.getSnapNum(this.value),
                        e = this.getSnapNum(this.end_loc);
                    if (this.options.paging) return i = this.getSnapNum(this.drag_start_loc), this.__isout = !1, void(0 < t ? this.gotoSnap(i + 1, !0, t) : this.gotoSnap(i - 1, !0, t));
                    if (i === e) return void this.cancel();
                    this._callsnapChange(e), this.current_snap = e
                }
                this.animating = !1, this.__needsSnap = this.options.endless || this.end_loc > this._min_value && this.end_loc < this._max_value, this.options.snapping && this.__needsSnap && (this.__extraMove = this._calculateExtraMove(this.end_loc)), this._startDecelaration()
            }
        }, i.bounce = function(t) {
            this.animating || (this.stopped = !1, this.animating = !1, this.__speed = t, this.__startSpeed = t, this.end_loc = this._calculateEnd(), this._startDecelaration())
        }, i.stop = function() {
            this.stopped = !0, this._internalStop()
        }, i.cancel = function() {
            this.start_drag = !0, this.__isout ? (this.__speed = 4e-4, this._startDecelaration()) : this.options.snapping && this.gotoSnap(this.getSnapNum(this.value), !0)
        }, i.renderCallback = function(t, i) {
            this.__renderHook = {
                fun: t,
                ref: i
            }
        }, i.snappingCallback = function(t, i) {
            this.__snapHook = {
                fun: t,
                ref: i
            }
        }, i.snapCompleteCallback = function(t, i) {
            this.__compHook = {
                fun: t,
                ref: i
            }
        }, i.getSnapNum = function(t) {
            return Math.floor((t + this.options.snapsize / 2) / this.options.snapsize)
        }, i.nextSnap = function() {
            this._internalStop();
            var t = this.getSnapNum(this.value);
            !this.options.endless && (t + 1) * this.options.snapsize > this._max_value ? (this.__speed = 8, this.__needsSnap = !1, this._startDecelaration()) : this.gotoSnap(t + 1, !0)
        }, i.prevSnap = function() {
            this._internalStop();
            var t = this.getSnapNum(this.value);
            !this.options.endless && (t - 1) * this.options.snapsize < this._min_value ? (this.__speed = -8, this.__needsSnap = !1, this._startDecelaration()) : this.gotoSnap(t - 1, !0)
        }, i.gotoSnap = function(t, i, e) {
            this.changeTo(t * this.options.snapsize, i, e, t)
        }, i.destroy = function() {
            this._internalStop(), this.__renderHook = null, this.__snapHook = null, this.__compHook = null
        }, i._internalStop = function() {
            this.start_drag = !0, this.animating = !1, this._deceleration = !1, this.__extrStep = 0
        }, i._calculateExtraMove = function(t) {
            var i = t % this.options.snapsize;
            return i < this.options.snapsize / 2 ? -i : this.options.snapsize - i
        }, i._calculateEnd = function(t) {
            for (var i = this.__speed, e = this.value, s = 0; Math.abs(i) > this.options.minValidDist;) e += i, i *= this.options.friction, s++;
            return t ? s : e
        }, i._checkLimits = function(t) {
            return this.options.endless ? t : t < this._min_value ? this._min_value : t > this._max_value ? this._max_value : t
        }, i._callrenderer = function() {
            this.__renderHook && this.__renderHook.fun.call(this.__renderHook.ref, this, this.value)
        }, i._callsnapChange = function(t) {
            this.__snapHook && t !== this.current_snap && this.__snapHook.fun.call(this.__snapHook.ref, this, t, t - this.current_snap)
        }, i._callonComplete = function(t) {
            this.__compHook && !this.stopped && this.__compHook.fun.call(this.__compHook.ref, this, this.current_snap, t)
        }, i._computeDeceleration = function() {
            if (this.options.snapping && this.__needsSnap) {
                var t = (this.__startSpeed - this.__speed) / this.__startSpeed * this.__extraMove;
                this.value += this.__speed + t - this.__extrStep, this.__extrStep = t
            } else this.value += this.__speed;
            if (this.__speed *= this.options.friction, this.options.endless || this.options.bouncing || (this.value <= this._min_value ? (this.value = this._min_value, this.__speed = 0) : this.value >= this._max_value && (this.value = this._max_value, this.__speed = 0)), this._callrenderer(), !this.options.endless && this.options.bouncing) {
                var i = 0;
                this.value < this._min_value ? i = this._min_value - this.value : this.value > this._max_value && (i = this._max_value - this.value), this.__isout = Math.abs(i) >= this.options.minValidDist, this.__isout && (this.__speed * i <= 0 ? this.__speed += i * this.options.outFriction : this.__speed = i * this.options.outAcceleration)
            }
        }, i._startDecelaration = function() {
            if (!this._deceleration) {
                this._deceleration = !0;
                var t = this,
                    i = function() {
                        t._deceleration && (t._computeDeceleration(), Math.abs(t.__speed) > t.options.minValidDist || t.__isout ? window.requestAnimationFrame(i) : (t._deceleration = !1, t.__isout = !1, t.__needsSnap && t.options.snapping && !t.options.paging ? t.value = t._checkLimits(t.end_loc + t.__extraMove) : t.value = Math.round(t.value), t._callrenderer(), t._callonComplete("decel")))
                    };
                i()
            }
        }, window.Controller = t
    }(),
    function(t, i, e) {
        t.MSLayerController = function(t) {
            this.slide = t, this.slider = t.slider, this.layers = [], this.layersCount = 0, this.preloadCount = 0, this.$layers = e("<div></div>").addClass("ms-slide-layers"), this.$staticLayers = e("<div></div>").addClass("ms-static-layers"), this.$fixedLayers = e("<div></div>").addClass("ms-fixed-layers"), this.$animLayers = e("<div></div>").addClass("ms-anim-layers")
        };
        var s = MSLayerController.prototype;
        s.addLayer = function(t) {
            switch (t.slide = this.slide, t.controller = this, t.$element.data("position")) {
                case "static":
                    this.hasStaticLayer = !0, t.$element.appendTo(this.$staticLayers);
                    break;
                case "fixed":
                    this.hasFixedLayer = !0, t.$element.appendTo(this.$fixedLayers);
                    break;
                default:
                    t.$element.appendTo(this.$animLayers)
            }
            t.create(), this.layers.push(t), this.layersCount++, t.parallax && (this.hasParallaxLayer = !0), t.needPreload && this.preloadCount++
        }, s.create = function() {
            this.slide.$element.append(this.$layers), this.$layers.append(this.$animLayers), this.hasStaticLayer && this.$layers.append(this.$staticLayers), "center" == this.slider.options.layersMode && (this.$layers.css("max-width", this.slider.options.width + "px"), this.hasFixedLayer && this.$fixedLayers.css("max-width", this.slider.options.width + "px"))
        }, s.loadLayers = function(t) {
            if (this._onReadyCallback = t, 0 !== this.preloadCount)
                for (var i = 0; i !== this.layersCount; ++i) this.layers[i].needPreload && this.layers[i].loadImage();
            else this._onlayersReady()
        }, s.prepareToShow = function() {
            this.hasParallaxLayer && this._enableParallaxEffect(), this.hasFixedLayer && this.$fixedLayers.prependTo(this.slide.view.$element)
        }, s.showLayers = function() {
            this.layersHideTween && this.layersHideTween.stop(!0), this.fixedLayersHideTween && this.fixedLayersHideTween.stop(!0), this._resetLayers(), this.$animLayers.css("opacity", "").css("display", ""), this.hasFixedLayer && this.$fixedLayers.css("opacity", "").css("display", ""), this.ready && (this._initLayers(), this._locateLayers(), this._startLayers())
        }, s.hideLayers = function() {
            if (this.slide.selected || this.slider.options.instantStartLayers) {
                var t = this;
                t.layersHideTween = CTween.animate(this.$animLayers, 500, {
                    opacity: 0
                }, {
                    complete: function() {
                        t._resetLayers()
                    }
                }), this.hasFixedLayer && (this.fixedLayersHideTween = CTween.animate(this.$fixedLayers, 500, {
                    opacity: 0
                }, {
                    complete: function() {
                        t.$fixedLayers.detach()
                    }
                })), this.hasParallaxLayer && this._disableParallaxEffect()
            }
        }, s.animHideLayers = function() {
            if (this.ready)
                for (var t = 0; t !== this.layersCount; ++t) this.layers[t].hide()
        }, s.setSize = function(t, i, e) {
            if (this.ready && (this.slide.selected || this.hasStaticLayer) && (e && this._initLayers(!0), this._locateLayers(!this.slide.selected)), this.slider.options.autoHeight && this.updateHeight(), "center" == this.slider.options.layersMode) {
                var s = Math.max(0, (t - this.slider.options.width) / 2) + "px";
                this.$layers[0].style.left = s, this.$fixedLayers[0].style.left = s
            }
        }, s.updateHeight = function() {}, s._onlayersReady = function() {
            this.ready = !0, this.hasStaticLayer && !this.slide.isSleeping && this._initLayers(!1, !0), this._onReadyCallback.call(this.slide)
        }, s.onSlideSleep = function() {}, s.onSlideWakeup = function() {
            this.hasStaticLayer && this.ready && this._initLayers(!1, !0)
        }, s.getLayerById = function(t) {
            if (!t) return null;
            for (var i = 0; i < this.layersCount; ++i)
                if (this.layers[i].id === t) return this.layers[i];
            return null
        }, s.destroy = function() {
            this.slide.selected && this.hasParallaxLayer && this._disableParallaxEffect();
            for (var t = 0; t < this.layersCount; ++t) this.layers[t].$element.stop(!0).remove();
            this.$layers.remove(), this.$staticLayers.remove(), this.$fixedLayers.remove(), this.$animLayers.remove()
        }, s._startLayers = function() {
            for (var t = 0; t !== this.layersCount; ++t) {
                var i = this.layers[t];
                i.waitForAction || i.start()
            }
        }, s._initLayers = function(t, i) {
            if (!(this.init && !t || this.slider.init_safemode)) {
                this.init = !0 !== i;
                var e = 0;
                if (i && !this.staticsInit)
                    for (this.staticsInit = !0; e !== this.layersCount; ++e) this.layers[e].staticLayer && this.layers[e].init();
                else if (this.staticsInit && !t)
                    for (; e !== this.layersCount; ++e) this.layers[e].staticLayer || this.layers[e].init();
                else
                    for (; e !== this.layersCount; ++e) this.layers[e].init()
            }
        }, s._locateLayers = function(t) {
            var i = 0;
            if (t)
                for (; i !== this.layersCount; ++i) this.layers[i].staticLayer && this.layers[i].locate();
            else
                for (; i !== this.layersCount; ++i) this.layers[i].locate()
        }, s._resetLayers = function() {
            this.$animLayers.css("display", "none").css("opacity", 1);
            for (var t = 0; t !== this.layersCount; ++t) this.layers[t].reset()
        }, s._applyParallax = function(t, i, e) {
            for (var s = 0; s !== this.layersCount; ++s) null != this.layers[s].parallax && this.layers[s].moveParallax(t, i, e)
        }, s._enableParallaxEffect = function() {
            "swipe" === this.slider.options.parallaxMode ? this.slide.view.addEventListener(MSViewEvents.SCROLL, this._swipeParallaxMove, this) : this.slide.$element.on("mousemove", {
                that: this
            }, this._mouseParallaxMove).on("mouseleave", {
                that: this
            }, this._resetParalax)
        }, s._disableParallaxEffect = function() {
            "swipe" === this.slider.options.parallaxMode ? this.slide.view.removeEventListener(MSViewEvents.SCROLL, this._swipeParallaxMove, this) : this.slide.$element.off("mousemove", this._mouseParallaxMove).off("mouseleave", this._resetParalax)
        }, s._resetParalax = function(t) {
            t.data.that._applyParallax(0, 0)
        }, s._mouseParallaxMove = function(t) {
            var i = t.data.that,
                e = i.slide.$element.offset(),
                s = i.slider;
            if ("mouse:y-only" !== s.options.parallaxMode) var n = t.pageX - e.left - i.slide.__width / 2;
            else n = 0;
            if ("mouse:x-only" !== s.options.parallaxMode) var o = t.pageY - e.top - i.slide.__height / 2;
            else o = 0;
            i._applyParallax(-n, -o)
        }, s._swipeParallaxMove = function(t) {
            var i = this.slide.position - this.slide.view.__contPos;
            "v" === this.slider.options.dir ? this._applyParallax(0, i, !0) : this._applyParallax(i, 0, !0)
        }
    }(window, document, jQuery),
    function(t, i, e, s) {
        "use strict";
        i.MSOverlayLayerController = function(t) {
            MSLayerController.apply(this, arguments)
        }, MSOverlayLayerController.extend(MSLayerController);
        var n = MSOverlayLayerController.prototype,
            o = MSLayerController.prototype;
        n.addLayer = function(t) {
            var i = t.$element.data("show-on"),
                e = t.$element.data("hide-on");
            e && (t.hideOnSlides = e.replace(/\s+/g, "").split(",")), i && (t.showOnSlides = i.replace(/\s+/g, "").split(",")), o.addLayer.apply(this, arguments)
        }, n.create = function() {
            o.create.apply(this, arguments), this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.checkLayers.bind(this))
        }, n.checkLayers = function() {
            if (this.ready)
                for (var t = 0; t !== this.layersCount; ++t) {
                    var i = this.layers[t];
                    i.waitForAction || (this._checkForShow(i) ? i.start() : i.hide())
                }
        }, n._enableParallaxEffect = function() {
            this.slider.view.$element.on("mousemove", {
                that: this
            }, this._mouseParallaxMove).on("mouseleave", {
                that: this
            }, this._resetParalax)
        }, n._disableParallaxEffect = function() {
            this.slider.view.$element.off("mousemove", this._mouseParallaxMove).off("mouseleave", this._resetParalax)
        }, n._startLayers = function() {
            for (var t = 0; t !== this.layersCount; ++t) {
                var i = this.layers[t];
                this._checkForShow(i) && !i.waitForAction && i.start()
            }
        }, n._checkForShow = function(t) {
            var i = this.slider.api.currentSlide.id,
                e = t.hideOnSlides,
                s = t.showOnSlides;
            return s ? !!i && -1 !== s.indexOf(i) : !i || !e || e.length && -1 === e.indexOf(i)
        }
    }(jQuery, window, document),
    function(t, i, e, s) {
        "use strict";
        i.MSOverlayLayers = function(t) {
            this.slider = t
        };
        var n = MSOverlayLayers.prototype;
        n.setupLayerController = function() {
            this.layerController = new MSOverlayLayerController(this), this.slider.api.addEventListener(MSSliderEvent.RESIZE, this.setSize.bind(this)), this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.setSize.bind(this)), this.setSize()
        }, n.setSize = function() {
            this.__width = this.$element.width(), this.__height = this.$element.height(), this.layerController.setSize(this.__width, this.__height)
        }, n.create = function() {
            this.layerController.create(), this.layerController.loadLayers(this._onLayersLoad), this.layerController.prepareToShow(), i.pointerEventsPolyfill && i.pointerEventsPolyfill({
                selector: "#" + this.slider.$element.attr("id") + " .ms-overlay-layers",
                forcePolyfill: !1
            })
        }, n.getHeight = function() {
            return this.slider.api.currentSlide.getHeight()
        }, n.destroy = function() {
            this.layerController.destroy()
        }, n._onLayersLoad = function() {
            this.ready = !0, this.selected = !0, this.layersLoaded = !0, this.setSize(), this.layerController.showLayers()
        }
    }(jQuery, window, document),
    function(i) {
        window.MSLayerEffects = {};
        var e, n = {
            opacity: 0
        };
        MSLayerEffects.setup = function() {
            if (!e) {
                e = !0;
                var w = MSLayerEffects,
                    g = window._jcsspfx + "Transform",
                    S = window._jcsspfx + "TransformOrigin",
                    t = i.browser.opera;
                _2d = window._css2d && window._cssanim && !t, w.defaultValues = {
                    left: 0,
                    top: 0,
                    opacity: isMSIE("<=9") ? 1 : "",
                    right: 0,
                    bottom: 0
                }, w.defaultValues[g] = "", w.rf = 1, w.presetEffParams = {
                    random: "30|300",
                    long: 300,
                    short: 30,
                    false: !1,
                    true: !0,
                    tl: "top left",
                    bl: "bottom left",
                    tr: "top right",
                    br: "bottom right",
                    rt: "top right",
                    lb: "bottom left",
                    lt: "top left",
                    rb: "bottom right",
                    t: "top",
                    b: "bottom",
                    r: "right",
                    l: "left",
                    c: "center"
                }, w.fade = function() {
                    return n
                }, w.left = _2d ? function(t, i) {
                    var e = !1 === i ? {} : {
                        opacity: 0
                    };
                    return e[g] = "translateX(" + -t * w.rf + "px)", e
                } : function(t, i) {
                    var e = !1 === i ? {} : {
                        opacity: 0
                    };
                    return e.left = -t * w.rf + "px", e
                }, w.right = _2d ? function(t, i) {
                    var e = !1 === i ? {} : {
                        opacity: 0
                    };
                    return e[g] = "translateX(" + t * w.rf + "px)", e
                } : function(t, i) {
                    var e = !1 === i ? {} : {
                        opacity: 0
                    };
                    return e.left = t * w.rf + "px", e
                }, w.top = _2d ? function(t, i) {
                    var e = !1 === i ? {} : {
                        opacity: 0
                    };
                    return e[g] = "translateY(" + -t * w.rf + "px)", e
                } : function(t, i) {
                    var e = !1 === i ? {} : {
                        opacity: 0
                    };
                    return e.top = -t * w.rf + "px", e
                }, w.bottom = _2d ? function(t, i) {
                    var e = !1 === i ? {} : {
                        opacity: 0
                    };
                    return e[g] = "translateY(" + t * w.rf + "px)", e
                } : function(t, i) {
                    var e = !1 === i ? {} : {
                        opacity: 0
                    };
                    return e.top = t * w.rf + "px", e
                }, w.from = _2d ? function(t, i, e) {
                    var s = !1 === e ? {} : {
                        opacity: 0
                    };
                    return s[g] = "translateX(" + t * w.rf + "px) translateY(" + i * w.rf + "px)", s
                } : function(t, i, e) {
                    var s = !1 === e ? {} : {
                        opacity: 0
                    };
                    return s.top = i * w.rf + "px", s.left = t * w.rf + "px", s
                }, w.rotate = _2d ? function(t, i) {
                    var e = {
                        opacity: 0
                    };
                    return e[g] = " rotate(" + t + "deg)", i && (e[S] = i), e
                } : function(t, i) {
                    return n
                }, w.rotateleft = _2d ? function(t, i, e, s) {
                    var n = w.left(i, s);
                    return n[g] += " rotate(" + t + "deg)", e && (n[S] = e), n
                } : function(t, i, e, s) {
                    return w.left(i, s)
                }, w.rotateright = _2d ? function(t, i, e, s) {
                    var n = w.right(i, s);
                    return n[g] += " rotate(" + t + "deg)", e && (n[S] = e), n
                } : function(t, i, e, s) {
                    return w.right(i, s)
                }, w.rotatetop = _2d ? function(t, i, e, s) {
                    var n = w.top(i, s);
                    return n[g] += " rotate(" + t + "deg)", e && (n[S] = e), n
                } : function(t, i, e, s) {
                    return w.top(i, s)
                }, w.rotatebottom = _2d ? function(t, i, e, s) {
                    var n = w.bottom(i, s);
                    return n[g] += " rotate(" + t + "deg)", e && (n[S] = e), n
                } : function(t, i, e, s) {
                    return w.bottom(i, s)
                }, w.rotatefrom = _2d ? function(t, i, e, s, n) {
                    var o = w.from(i, e, n);
                    return o[g] += " rotate(" + t + "deg)", s && (o[S] = s), o
                } : function(t, i, e, s, n) {
                    return w.from(i, e, n)
                }, w.skewleft = _2d ? function(t, i, e) {
                    var s = w.left(i, e);
                    return s[g] += " skewX(" + t + "deg)", s
                } : function(t, i, e) {
                    return w.left(i, e)
                }, w.skewright = _2d ? function(t, i, e) {
                    var s = w.right(i, e);
                    return s[g] += " skewX(" + -t + "deg)", s
                } : function(t, i, e) {
                    return w.right(i, e)
                }, w.skewtop = _2d ? function(t, i, e) {
                    var s = w.top(i, e);
                    return s[g] += " skewY(" + t + "deg)", s
                } : function(t, i, e) {
                    return w.top(i, e)
                }, w.skewbottom = _2d ? function(t, i, e) {
                    var s = w.bottom(i, e);
                    return s[g] += " skewY(" + -t + "deg)", s
                } : function(t, i, e) {
                    return w.bottom(i, e)
                }, w.scale = _2d ? function(t, i, e, s) {
                    var n = !1 === s ? {} : {
                        opacity: 0
                    };
                    return n[g] = " scaleX(" + t + ") scaleY(" + i + ")", e && (n[S] = e), n
                } : function(t, i, e, s) {
                    return !1 === s ? {} : {
                        opacity: 0
                    }
                }, w.scaleleft = _2d ? function(t, i, e, s, n) {
                    var o = w.left(e, n);
                    return o[g] = " scaleX(" + t + ") scaleY(" + i + ")", s && (o[S] = s), o
                } : function(t, i, e, s, n) {
                    return w.left(e, n)
                }, w.scaleright = _2d ? function(t, i, e, s, n) {
                    var o = w.right(e, n);
                    return o[g] = " scaleX(" + t + ") scaleY(" + i + ")", s && (o[S] = s), o
                } : function(t, i, e, s, n) {
                    return w.right(e, n)
                }, w.scaletop = _2d ? function(t, i, e, s, n) {
                    var o = w.top(e, n);
                    return o[g] = " scaleX(" + t + ") scaleY(" + i + ")", s && (o[S] = s), o
                } : function(t, i, e, s, n) {
                    return w.top(e, n)
                }, w.scalebottom = _2d ? function(t, i, e, s, n) {
                    var o = w.bottom(e, n);
                    return o[g] = " scaleX(" + t + ") scaleY(" + i + ")", s && (o[S] = s), o
                } : function(t, i, e, s, n) {
                    return w.bottom(e, n)
                }, w.scalefrom = _2d ? function(t, i, e, s, n, o) {
                    var a = w.from(e, s, o);
                    return a[g] += " scaleX(" + t + ") scaleY(" + i + ")", n && (a[S] = n), a
                } : function(t, i, e, s, n, o) {
                    return w.from(e, s, o)
                }, w.rotatescale = _2d ? function(t, i, e, s, n) {
                    var o = w.scale(i, e, s, n);
                    return o[g] += " rotate(" + t + "deg)", s && (o[S] = s), o
                } : function(t, i, e, s, n) {
                    return w.scale(i, e, s, n)
                }, w.front = window._css3d ? function(t, i) {
                    var e = !1 === i ? {} : {
                        opacity: 0
                    };
                    return e[g] = "perspective(2000px) translate3d(0 , 0 ," + t + "px ) rotate(0.001deg)", e
                } : function(t) {
                    return n
                }, w.back = window._css3d ? function(t, i) {
                    var e = !1 === i ? {} : {
                        opacity: 0
                    };
                    return e[g] = "perspective(2000px) translate3d(0 , 0 ," + -t + "px ) rotate(0.001deg)", e
                } : function(t) {
                    return n
                }, w.rotatefront = window._css3d ? function(t, i, e, s) {
                    var n = !1 === s ? {} : {
                        opacity: 0
                    };
                    return n[g] = "perspective(2000px) translate3d(0 , 0 ," + i + "px ) rotate(" + (t || .001) + "deg)", e && (n[S] = e), n
                } : function(t, i, e, s) {
                    return n
                }, w.rotateback = window._css3d ? function(t, i, e, s) {
                    var n = !1 === s ? {} : {
                        opacity: 0
                    };
                    return n[g] = "perspective(2000px) translate3d(0 , 0 ," + -i + "px ) rotate(" + (t || .001) + "deg)", e && (n[S] = e), n
                } : function(t, i, e, s) {
                    return n
                }, w.rotate3dleft = window._css3d ? function(t, i, e, s, n, o) {
                    var a = w.left(s, o);
                    return a[g] += (t ? " rotateX(" + t + "deg)" : " ") + (i ? " rotateY(" + i + "deg)" : "") + (e ? " rotateZ(" + e + "deg)" : ""), n && (a[S] = n), a
                } : function(t, i, e, s, n, o) {
                    return w.left(s, o)
                }, w.rotate3dright = window._css3d ? function(t, i, e, s, n, o) {
                    var a = w.right(s, o);
                    return a[g] += (t ? " rotateX(" + t + "deg)" : " ") + (i ? " rotateY(" + i + "deg)" : "") + (e ? " rotateZ(" + e + "deg)" : ""), n && (a[S] = n), a
                } : function(t, i, e, s, n, o) {
                    return w.right(s, o)
                }, w.rotate3dtop = window._css3d ? function(t, i, e, s, n, o) {
                    var a = w.top(s, o);
                    return a[g] += (t ? " rotateX(" + t + "deg)" : " ") + (i ? " rotateY(" + i + "deg)" : "") + (e ? " rotateZ(" + e + "deg)" : ""), n && (a[S] = n), a
                } : function(t, i, e, s, n, o) {
                    return w.top(s, o)
                }, w.rotate3dbottom = window._css3d ? function(t, i, e, s, n, o) {
                    var a = w.bottom(s, o);
                    return a[g] += (t ? " rotateX(" + t + "deg)" : " ") + (i ? " rotateY(" + i + "deg)" : "") + (e ? " rotateZ(" + e + "deg)" : ""), n && (a[S] = n), a
                } : function(t, i, e, s, n, o) {
                    return w.bottom(s, o)
                }, w.rotate3dfront = window._css3d ? function(t, i, e, s, n, o) {
                    var a = w.front(s, o);
                    return a[g] += (t ? " rotateX(" + t + "deg)" : " ") + (i ? " rotateY(" + i + "deg)" : "") + (e ? " rotateZ(" + e + "deg)" : ""), n && (a[S] = n), a
                } : function(t, i, e, s, n, o) {
                    return w.front(s, o)
                }, w.rotate3dback = window._css3d ? function(t, i, e, s, n, o) {
                    var a = w.back(s, o);
                    return a[g] += (t ? " rotateX(" + t + "deg)" : " ") + (i ? " rotateY(" + i + "deg)" : "") + (e ? " rotateZ(" + e + "deg)" : ""), n && (a[S] = n), a
                } : function(t, i, e, s, n, o) {
                    return w.back(s, o)
                }, w.t = window._css3d ? function(t, i, e, s, n, o, a, r, h, l, d, c, p, u, m) {
                    var f = !1 === t ? {} : {
                            opacity: 0
                        },
                        v = "perspective(2000px) ";
                    "n" !== i && (v += "translateX(" + i * w.rf + "px) "), "n" !== e && (v += "translateY(" + e * w.rf + "px) "), "n" !== s && (v += "translateZ(" + s * w.rf + "px) "), "n" !== n && (v += "rotate(" + n + "deg) "), "n" !== o && (v += "rotateX(" + o + "deg) "), "n" !== a && (v += "rotateY(" + a + "deg) "), "n" !== r && (v += "rotateZ(" + r + "deg) "), "n" !== d && (v += "skewX(" + d + "deg) "), "n" !== c && (v += "skewY(" + c + "deg) "), "n" !== h && (v += "scaleX(" + h + ") "), "n" !== l && (v += "scaleY(" + l + ")"), f[g] = v;
                    var _ = "";
                    return _ += "n" !== p ? p + "% " : "50% ", _ += "n" !== u ? u + "% " : "50% ", _ += "n" !== m ? m + "px" : "", f[S] = _, f
                } : function(t, i, e, s, n, o, a, r, h, l, d, c, p, u, m) {
                    n = !1 === t ? {} : {
                        opacity: 0
                    };
                    return "n" !== i && (n.left = i * w.rf + "px"), "n" !== e && (n.top = e * w.rf + "px"), n
                }
            }
        }
    }(jQuery),
    function(r) {
        window.MSLayerElement = function() {
            this.start_anim = {
                name: "fade",
                duration: 1e3,
                ease: "linear",
                delay: 0
            }, this.end_anim = {
                duration: 1e3,
                ease: "linear"
            }, this.type = "text", this.resizable = !0, this.minWidth = -1, this.isVisible = !0, this.__cssConfig = ["margin-top", "padding-top", "margin-bottom", "padding-left", "margin-right", "padding-right", "margin-left", "padding-bottom", "font-size", "line-height", "width", "left", "right", "top", "bottom"], this.baseStyle = {}
        };
        var t = MSLayerElement.prototype;
        t.setStartAnim = function(t) {
            r.extend(this.start_anim, t), r.extend(this.start_anim, this._parseEff(this.start_anim.name)), this.$element.css("visibility", "hidden")
        }, t.setEndAnim = function(t) {
            r.extend(this.end_anim, t)
        }, t.create = function() {
            if (this.$element.css("display", "none"), this.resizable = !1 !== this.$element.data("resize"), this.fixed = !0 === this.$element.data("fixed"), void 0 !== this.$element.data("widthlimit") && (this.minWidth = this.$element.data("widthlimit")), this.end_anim.name || (this.end_anim.name = this.start_anim.name), this.end_anim.time && (this.autoHide = !0), this.staticLayer = "static" === this.$element.data("position"), this.fixedLayer = "fixed" === this.$element.data("position"), this.layersCont = this.controller.$layers, this.staticLayer && this.$element.css("display", "").css("visibility", ""), void 0 !== this.$element.data("action")) {
                var i = this.slide.slider.slideController;
                this.$element.on(this.$element.data("action-event") || "click", function(t) {
                    i.runAction(r(this).data("action")), t.preventDefault()
                }).addClass("ms-action-layer")
            }
            r.extend(this.end_anim, this._parseEff(this.end_anim.name)), this.slider = this.slide.slider, this.masked && (this.$mask = r("<div></div>").addClass("ms-layer-mask"), this.link ? (this.link.wrap(this.$mask), this.$mask = this.link.parent()) : (this.$element.wrap(this.$mask), this.$mask = this.$element.parent()), this.maskWidth && this.$mask.width(this.maskWidth), this.maskHeight && (this.$mask.height(this.maskHeight), -1 === this.__cssConfig.indexOf("height") && this.__cssConfig.push("height")));
            var t = this.layerOrigin = this.$element.data("origin");
            if (t) {
                var e = t.charAt(0),
                    s = t.charAt(1),
                    n = this.$element.data("offset-x"),
                    o = this.$element.data("offset-y"),
                    a = this.masked ? this.$mask[0] : this.$element[0];
                switch (void 0 === o && (o = 0), e) {
                    case "t":
                        a.style.top = o + "px";
                        break;
                    case "b":
                        a.style.bottom = o + "px";
                        break;
                    case "m":
                        a.style.top = o + "px", this.middleAlign = !0
                }
                switch (void 0 === n && (n = 0), s) {
                    case "l":
                        a.style.left = n + "px";
                        break;
                    case "r":
                        a.style.right = n + "px";
                        break;
                    case "c":
                        a.style.left = n + "px", this.centerAlign = !0
                }
            }
            this.parallax = this.$element.data("parallax"), null != this.parallax && (this.parallax /= 100, this.$parallaxElement = r("<div></div>").addClass("ms-parallax-layer"), this.masked ? (this.$mask.wrap(this.$parallaxElement), this.$parallaxElement = this.$mask.parent()) : this.link ? (this.link.wrap(this.$parallaxElement), this.$parallaxElement = this.link.parent()) : (this.$element.wrap(this.$parallaxElement), this.$parallaxElement = this.$element.parent()), this._lastParaX = 0, this._lastParaY = 0, this._paraX = 0, this._paraY = 0, this.alignedToBot = this.layerOrigin && -1 !== this.layerOrigin.indexOf("b"), this.alignedToBot && this.$parallaxElement.css("bottom", 0), window._css3d ? this.parallaxRender = this._parallaxCSS3DRenderer : window._css2d ? this.parallaxRender = this._parallaxCSS2DRenderer : this.parallaxRender = this._parallax2DRenderer, "swipe" !== this.slider.options.parallaxMode && averta.Ticker.add(this.parallaxRender, this)), r.removeDataAttrs(this.$element, ["data-src"])
        }, t.init = function() {
            var t;
            this.initialized = !0, this.$element.css("visibility", "");
            for (var i = 0, e = this.__cssConfig.length; i < e; i++) {
                var s = this.__cssConfig[i];
                if (this._isPosition(s) && this.masked) t = this.$mask.css(s);
                else if ("text" !== this.type || "width" !== s || this.masked || this.maskWidth) {
                    t = this.$element.css(s);
                    var n = "width" === s || "height" === s;
                    n && this.masked && (this.maskWidth && "width" === s ? t = this.maskWidth + "px" : this.maskHeight && "height" === s && (t = this.maskHeight + "px")), n && "0px" === t && (t = this.$element.data(s) + "px")
                } else t = this.$element[0].style.width;
                this.layerOrigin && ("top" === s && -1 === this.layerOrigin.indexOf("t") && -1 === this.layerOrigin.indexOf("m") || "bottom" === s && -1 === this.layerOrigin.indexOf("b") || "left" === s && -1 === this.layerOrigin.indexOf("l") && -1 === this.layerOrigin.indexOf("c") || "right" === s && -1 === this.layerOrigin.indexOf("r")) || "auto" != t && "" != t && "normal" != t && (this.baseStyle[s] = parseInt(t))
            }
            this.middleAlign && (this.baseHeight = this.$element.outerHeight(!1)), this.centerAlign && (this.baseWidth = this.$element.outerWidth(!1))
        }, t.locate = function() {
            if (this.slide.ready) {
                var t, i, e, s = parseFloat(this.layersCont.css("width")),
                    n = parseFloat(this.layersCont.css("height"));
                !this.staticLayer && "none" === this.$element.css("display") && this.isVisible && this.$element.css("display", "").css("visibility", "hidden"), this.staticLayer && this.$element.addClass("ms-hover-active"), t = this.resizeFactor = s / this.slide.slider.options.width;
                var o = this.masked ? this.$mask : this.$element;
                for (var a in this.baseStyle) i = this._isPosition(a), e = "width" === a || "height" === a, t = this.fixed && i ? 1 : this.resizeFactor, (this.resizable || i) && ("top" === a && this.middleAlign ? (o[0].style.top = "0px", this.baseHeight = o.outerHeight(!1), o[0].style.top = this.baseStyle.top * t + (n - this.baseHeight) / 2 + "px") : "left" === a && this.centerAlign ? (o[0].style.left = "0px", this.baseWidth = o.outerWidth(!1), o[0].style.left = this.baseStyle.left * t + (s - this.baseWidth) / 2 + "px") : i && this.masked ? o[0].style[a] = this.baseStyle[a] * t + "px" : e && ("width" === a && this.maskWidth || "height" === a && this.maskHeight) ? o[0].style[a] = this.baseStyle[a] * t + "px" : this.$element.css(a, this.baseStyle[a] * t + "px"));
                this.visible(this.minWidth < s)
            }
        }, t.start = function() {
            if (!this.isShowing && !this.staticLayer) {
                var t, i;
                this.isShowing = !0, this.$element.removeClass("ms-hover-active"), MSLayerEffects.rf = this.resizeFactor;
                var e = MSLayerEffects[this.start_anim.eff_name].apply(null, this._parseEffParams(this.start_anim.eff_params)),
                    s = {};
                for (t in e) this._checkPosKey(t, e) || (null != MSLayerEffects.defaultValues[t] && (s[t] = MSLayerEffects.defaultValues[t]), t in this.baseStyle && (i = this.baseStyle[t], this.middleAlign && "top" === t && (i += (parseInt(this.layersCont.height()) - this.$element.outerHeight(!1)) / 2), this.centerAlign && "left" === t && (i += (parseInt(this.layersCont.width()) - this.$element.outerWidth(!1)) / 2), e[t] = i + parseFloat(e[t]) + "px", s[t] = i + "px"), this.$element.css(t, e[t]));
                var n = this;
                clearTimeout(this.to), clearTimeout(this.clHide), this.to = setTimeout(function() {
                    n.$element.css("visibility", ""), n._playAnimation(n.start_anim, s)
                }, n.start_anim.delay || .01), this.clTo = setTimeout(function() {
                    n.show_cl = !0, n.$element.addClass("ms-hover-active")
                }, (this.start_anim.delay || .01) + this.start_anim.duration + 1), this.autoHide && (clearTimeout(this.hto), this.hto = setTimeout(function() {
                    n.hide()
                }, n.end_anim.time))
            }
        }, t.hide = function() {
            if (!this.staticLayer) {
                this.$element.removeClass("ms-hover-active"), this.isShowing = !1;
                var t = MSLayerEffects[this.end_anim.eff_name].apply(null, this._parseEffParams(this.end_anim.eff_params));
                for (key in t) this._checkPosKey(key, t) || (key === window._jcsspfx + "TransformOrigin" && this.$element.css(key, t[key]), key in this.baseStyle && (t[key] = this.baseStyle[key] + parseFloat(t[key]) + "px"));
                this._playAnimation(this.end_anim, t), clearTimeout(this.clHide), 0 === t.opacity && (this.clHide = setTimeout(function() {
                    this.$element.css("visibility", "hidden")
                }.bind(this), this.end_anim.duration + 1)), clearTimeout(this.to), clearTimeout(this.hto), clearTimeout(this.clTo)
            }
        }, t.reset = function() {
            this.staticLayer || (this.isShowing = !1, this.$element[0].style.display = "none", this.$element.css("opacity", ""), this.$element[0].style.transitionDuration = "", this.show_tween && this.show_tween.stop(!0), clearTimeout(this.to), clearTimeout(this.hto))
        }, t.destroy = function() {
            this.reset(), this.$element.remove()
        }, t.visible = function(t) {
            this.isVisible != t && (this.isVisible = t, this.$element.css("display", t ? "" : "none"))
        }, t.moveParallax = function(t, i, e) {
            this._paraX = t, this._paraY = i, e && (this._lastParaX = t, this._lastParaY = i, this.parallaxRender())
        }, t._playAnimation = function(t, i) {
            var e = {};
            t.ease && (e.ease = t.ease), e.transProperty = window._csspfx + "transform,opacity", this.show_tween && this.show_tween.stop(!0), this.show_tween = CTween.animate(this.$element, t.duration, i, e)
        }, t._randomParam = function(t) {
            var i = Number(t.slice(0, t.indexOf("|"))),
                e = Number(t.slice(t.indexOf("|") + 1));
            return i + Math.random() * (e - i)
        }, t._parseEff = function(t) {
            var i = [];
            if (-1 !== t.indexOf("(")) {
                var e, s = t.slice(0, t.indexOf("(")).toLowerCase();
                i = t.slice(t.indexOf("(") + 1, -1).replace(/\"|\'|\s/g, "").split(","), t = s;
                for (var n = 0, o = i.length; n < o; ++n)(e = i[n]) in MSLayerEffects.presetEffParams && (e = MSLayerEffects.presetEffParams[e]), i[n] = e
            }
            return {
                eff_name: t,
                eff_params: i
            }
        }, t._parseEffParams = function(t) {
            for (var i = [], e = 0, s = t.length; e < s; ++e) {
                var n = t[e];
                "string" == typeof n && -1 !== n.indexOf("|") && (n = this._randomParam(n)), i[e] = n
            }
            return i
        }, t._checkPosKey = function(t, i) {
            return "left" === t && !(t in this.baseStyle) && "right" in this.baseStyle ? (i.right = -parseInt(i.left) + "px", delete i.left, !0) : "top" === t && !(t in this.baseStyle) && "bottom" in this.baseStyle && (i.bottom = -parseInt(i.top) + "px", delete i.top, !0)
        }, t._isPosition = function(t) {
            return "top" === t || "left" === t || "bottom" === t || "right" === t
        }, t._parallaxCalc = function() {
            var t = this._paraX - this._lastParaX,
                i = this._paraY - this._lastParaY;
            this._lastParaX += t / 12, this._lastParaY += i / 12, Math.abs(t) < .019 && (this._lastParaX = this._paraX), Math.abs(i) < .019 && (this._lastParaY = this._paraY)
        }, t._parallaxCSS3DRenderer = function() {
            this._parallaxCalc(), this.$parallaxElement[0].style[window._jcsspfx + "Transform"] = "translateX(" + this._lastParaX * this.parallax + "px) translateY(" + this._lastParaY * this.parallax + "px) translateZ(0)"
        }, t._parallaxCSS2DRenderer = function() {
            this._parallaxCalc(), this.$parallaxElement[0].style[window._jcsspfx + "Transform"] = "translateX(" + this._lastParaX * this.parallax + "px) translateY(" + this._lastParaY * this.parallax + "px)"
        }, t._parallax2DRenderer = function() {
            this._parallaxCalc(), this.alignedToBot ? this.$parallaxElement[0].style.bottom = this._lastParaY * this.parallax + "px" : this.$parallaxElement[0].style.top = this._lastParaY * this.parallax + "px", this.$parallaxElement[0].style.left = this._lastParaX * this.parallax + "px"
        }
    }(jQuery),
    function(e) {
        window.MSImageLayerElement = function() {
            MSLayerElement.call(this), this.needPreload = !0, this.__cssConfig = ["width", "height", "margin-top", "padding-top", "margin-bottom", "padding-left", "margin-right", "padding-right", "margin-left", "padding-bottom", "left", "right", "top", "bottom"], this.type = "image"
        }, MSImageLayerElement.extend(MSLayerElement);
        var t = MSImageLayerElement.prototype,
            s = MSLayerElement.prototype;
        t.create = function() {
            if (this.link) {
                var t = this.$element.parent();
                t.append(this.link), this.link.append(this.$element), this.link.removeClass("ms-layer"), this.$element.addClass("ms-layer"), t = null
            }
            if (s.create.call(this), null != this.$element.data("src")) this.img_src = this.$element.data("src"), this.$element.removeAttr("data-src");
            else {
                var i = this;
                this.$element.on("load", function(t) {
                    i.controller.preloadCount--, 0 === i.controller.preloadCount && i.controller._onlayersReady()
                }).each(e.jqLoadFix)
            }
            e.browser.msie && this.$element.on("dragstart", function(t) {
                t.preventDefault()
            })
        }, t.loadImage = function() {
            var i = this;
            this.$element.preloadImg(this.img_src, function(t) {
                i.controller.preloadCount--, 0 === i.controller.preloadCount && i.controller._onlayersReady()
            })
        }
    }(jQuery),
    function(e) {
        window.MSVideoLayerElement = function() {
            MSLayerElement.call(this), this.__cssConfig.push("height"), this.type = "video"
        }, MSVideoLayerElement.extend(MSLayerElement);
        var t = MSVideoLayerElement.prototype,
            s = MSLayerElement.prototype;
        t.__playVideo = function() {
            this.img && CTween.fadeOut(this.img, 500, 2), CTween.fadeOut(this.video_btn, 500, 2), this.video_frame.attr("src", "about:blank").css("display", "block"), -1 == this.video_url.indexOf("?") && (this.video_url += "?"), this.video_frame.attr("src", this.video_url + "&autoplay=1")
        }, t.start = function() {
            s.start.call(this), this.$element.data("autoplay") && this.__playVideo()
        }, t.reset = function() {
            s.reset.call(this), (this.needPreload || this.$element.data("btn")) && (this.video_btn.css("opacity", 1).css("display", "block"), this.video_frame.attr("src", "about:blank").css("display", "none")), this.needPreload ? this.img.css("opacity", 1).css("display", "block") : this.video_frame.attr("src", this.video_url)
        }, t.create = function() {
            s.create.call(this), this.video_frame = this.$element.find("iframe").css({
                width: "100%",
                height: "100%"
            }), this.video_url = this.video_frame.attr("src");
            var t = 0 != this.$element.has("img").length;
            if (t || this.$element.data("btn")) {
                this.video_frame.attr("src", "about:blank").css("display", "none");
                var i = this;
                if (this.video_btn = e("<div></div>").appendTo(this.$element).addClass("ms-video-btn").click(function() {
                    i.__playVideo()
                }), t) {
                    if (this.needPreload = !0, this.img = this.$element.find("img:first").addClass("ms-video-img"), void 0 !== this.img.data("src")) this.img_src = this.img.data("src"), this.img.removeAttr("data-src");
                    else {
                        i = this;
                        this.img.attr("src", this.img_src).on("load", function(t) {
                            i.controller.preloadCount--, 0 === i.controller.preloadCount && i.controller._onlayersReady()
                        }).each(e.jqLoadFix)
                    }
                    e.browser.msie && this.img.on("dragstart", function(t) {
                        t.preventDefault()
                    })
                }
            }
        }, t.loadImage = function() {
            var i = this;
            this.img.preloadImg(this.img_src, function(t) {
                i.controller.preloadCount--, 0 === i.controller.preloadCount && i.controller._onlayersReady()
            })
        }
    }(jQuery),
    function(s) {
        "use strict";
        window.MSHotspotLayer = function() {
            MSLayerElement.call(this), this.__cssConfig = ["margin-top", "padding-top", "margin-bottom", "padding-left", "margin-right", "padding-right", "margin-left", "padding-bottom", "left", "right", "top", "bottom"], this.ease = "Expo", this.hide_start = !0, this.type = "hotspot"
        }, MSHotspotLayer.extend(MSLayerElement);
        var t = MSHotspotLayer.prototype,
            n = MSLayerElement.prototype;
        t._showTT = function() {
            this.show_cl && (clearTimeout(this.hto), this._tween && this._tween.stop(!0), this.hide_start && (this.align = this._orgAlign, this._locateTT(), this.tt.css({
                display: "block"
            }), this._tween = CTween.animate(this.tt, 900, this.to, {
                ease: "easeOut" + this.ease
            }), this.hide_start = !1))
        }, t._hideTT = function() {
            if (this.show_cl) {
                this._tween && this._tween.stop(!0);
                var t = this;
                clearTimeout(this.hto), this.hto = setTimeout(function() {
                    t.hide_start = !0, t._tween = CTween.animate(t.tt, 900, t.from, {
                        ease: "easeOut" + t.ease,
                        complete: function() {
                            t.tt.css("display", "none")
                        }
                    })
                }, 200)
            }
        }, t._updateClassName = function(t) {
            this._lastClass && this.tt.removeClass(this._lastClass), this.tt.addClass(t), this._lastClass = t
        }, t._alignPolicy = function() {
            this.tt.outerHeight(!1);
            var t = Math.max(this.tt.outerWidth(!1), parseInt(this.tt.css("max-width"))),
                i = window.innerWidth;
            window.innerHeight;
            switch (this.align) {
                case "top":
                    if (this.base_t < 0) return "bottom";
                    break;
                case "right":
                    if (this.base_l + t > i || this.base_t < 0) return "bottom";
                    break;
                case "left":
                    if (this.base_l < 0 || this.base_t < 0) return "bottom"
            }
            return null
        }, t._locateTT = function() {
            var t = this.$element.offset(),
                i = this.slide.slider.$element.offset();
            this.pos_x = t.left - i.left - this.slide.slider.$element.scrollLeft(), this.pos_y = t.top - i.top - this.slide.slider.$element.scrollTop(), this.from = {
                opacity: 0
            }, this.to = {
                opacity: 1
            }, this._updateClassName("ms-tooltip-" + this.align), this.tt_arrow.css("margin-left", "");
            switch (this.align) {
                case "top":
                    var e = Math.min(this.tt.outerWidth(!1), parseInt(this.tt.css("max-width")));
                    this.base_t = this.pos_y - this.tt.outerHeight(!1) - 15 - 15, this.base_l = this.pos_x - e / 2, this.base_l + e > window.innerWidth && (this.tt_arrow.css("margin-left", -7.5 + this.base_l + e - window.innerWidth + "px"), this.base_l = window.innerWidth - e), this.base_l < 0 && (this.base_l = 0, this.tt_arrow.css("margin-left", -7.5 + this.pos_x - this.tt.outerWidth(!1) / 2 + "px")), window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateY(-50px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.top = this.base_t - 50 + "px", this.to.top = this.base_t + "px");
                    break;
                case "bottom":
                    e = Math.min(this.tt.outerWidth(!1), parseInt(this.tt.css("max-width")));
                    this.base_t = this.pos_y + 15 + 15, this.base_l = this.pos_x - e / 2, this.base_l + e > window.innerWidth && (this.tt_arrow.css("margin-left", -7.5 + this.base_l + e - window.innerWidth + "px"), this.base_l = window.innerWidth - e), this.base_l < 0 && (this.base_l = 0, this.tt_arrow.css("margin-left", -7.5 + this.pos_x - this.tt.outerWidth(!1) / 2 + "px")), window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateY(50px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.top = this.base_t + 50 + "px", this.to.top = this.base_t + "px");
                    break;
                case "right":
                    this.base_l = this.pos_x + 15 + 15, this.base_t = this.pos_y - this.tt.outerHeight(!1) / 2, window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateX(50px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.left = this.base_l + 50 + "px", this.to.left = this.base_l + "px");
                    break;
                case "left":
                    this.base_l = this.pos_x - 15 - this.tt.outerWidth(!1) - 15, this.base_t = this.pos_y - this.tt.outerHeight(!1) / 2, window._css3d ? (this.from[window._jcsspfx + "Transform"] = "translateX(-50px)", this.to[window._jcsspfx + "Transform"] = "") : (this.from.left = this.base_l - 50 + "px", this.to.left = this.base_l + "px")
            }
            var s = this._alignPolicy();
            if (null !== s) return this.align = s, void this._locateTT();
            this.tt.css("top", parseInt(this.base_t) + "px").css("left", parseInt(this.base_l) + "px"), this.tt.css(this.from)
        }, t.start = function() {
            n.start.call(this), this.tt.appendTo(this.slide.slider.$element), this.tt.css("display", "none")
        }, t.reset = function() {
            n.reset.call(this), this.tt.detach()
        }, t.create = function() {
            var t = this;
            this._orgAlign = this.align = void 0 !== this.$element.data("align") ? this.$element.data("align") : "top", this.data = this.$element.html(), this.$element.html("").on("mouseenter", function() {
                t._showTT()
            }).on("mouseleave", function() {
                t._hideTT()
            }), this.point = s('<div><div class="ms-point-center"></div><div class="ms-point-border"></div></div>').addClass("ms-tooltip-point").appendTo(this.$element);
            var i = this.$element.data("link"),
                e = this.$element.data("target");
            i && this.point.on("click", function() {
                window.open(i, e || "_self")
            }), this.tt = s("<div></div>").addClass("ms-tooltip").css("display", "hidden").css("opacity", 0), void 0 !== this.$element.data("width") && this.tt.css("width", this.$element.data("width")).css("max-width", this.$element.data("width")), this.tt_arrow = s("<div></div>").addClass("ms-tooltip-arrow").appendTo(this.tt), this._updateClassName("ms-tooltip-" + this.align), this.ttcont = s("<div></div>").addClass("ms-tooltip-cont").html(this.data).appendTo(this.tt), !0 === this.$element.data("stay-hover") && this.tt.on("mouseenter", function() {
                t.hide_start || (clearTimeout(t.hto), t._tween.stop(!0), t._showTT())
            }).on("mouseleave", function() {
                t._hideTT()
            }), n.create.call(this)
        }
    }(jQuery),
    function(t) {
        window.MSButtonLayer = function() {
            MSLayerElement.call(this), this.type = "button"
        }, MSButtonLayer.extend(MSLayerElement);
        var i = MSButtonLayer.prototype,
            s = MSLayerElement.prototype,
            n = ["top", "left", "bottom", "right"];
        i.create = function() {
            s.create.call(this), this.$element.wrap('<div class="ms-btn-container"></div>').css("position", "relative"), this.$container = this.$element.parent()
        }, i.locate = function() {
            var t, i;
            s.locate.call(this);
            for (var e = 0; e < 4; e++)(t = n[e]) in this.baseStyle && (i = this.$element.css(t), this.$element.css(t, ""), this.$container.css(t, i));
            this.$container.width(this.$element.outerWidth(!0)).height(this.$element.outerHeight(!0))
        }
    }(jQuery), window.MSSliderEvent = function(t) {
    this.type = t
}, MSSliderEvent.CHANGE_START = "ms_changestart", MSSliderEvent.CHANGE_END = "ms_changeend", MSSliderEvent.WAITING = "ms_waiting", MSSliderEvent.AUTOPLAY_CHANGE = "ms_autoplaychange", MSSliderEvent.VIDEO_PLAY = "ms_videoPlay", MSSliderEvent.VIDEO_CLOSE = "ms_videoclose", MSSliderEvent.INIT = "ms_init", MSSliderEvent.HARD_UPDATE = "ms_hard_update", MSSliderEvent.RESIZE = "ms_resize", MSSliderEvent.RESERVED_SPACE_CHANGE = "ms_rsc", MSSliderEvent.DESTROY = "ms_destroy",
    function(e, t, s) {
        "use strict";
        e.MSSlide = function() {
            this.$element = null, this.$loading = s("<div></div>").addClass("ms-slide-loading"), this.view = null, this.index = -1, this.__width = 0, this.__height = 0, this.fillMode = "fill", this.selected = !1, this.pselected = !1, this.autoAppend = !0, this.isSleeping = !0, this.moz = s.browser.mozilla
        };
        var i = MSSlide.prototype;
        i.onSwipeStart = function() {
            this.link && (this.linkdis = !0), this.video && (this.videodis = !0)
        }, i.onSwipeMove = function(t) {
            var i = Math.max(Math.abs(t.data.distanceX), Math.abs(t.data.distanceY));
            this.swipeMoved = 4 < i
        }, i.onSwipeCancel = function(t) {
            this.swipeMoved ? this.swipeMoved = !1 : (this.link && (this.linkdis = !1), this.video && (this.videodis = !1))
        }, i.setupLayerController = function() {
            this.hasLayers = !0, this.layerController = new MSLayerController(this)
        }, i.assetsLoaded = function() {
            this.ready = !0, this.slider.api._startTimer(), (this.selected || this.pselected && this.slider.options.instantStartLayers) && (this.hasLayers && this.layerController.showLayers(), this.vinit && (this.bgvideo.play(), this.autoPauseBgVid || (this.bgvideo.currentTime = 0))), this.isSleeping || this.setupBG(), CTween.fadeOut(this.$loading, 300, !0), (0 === this.slider.options.preload || "all" === this.slider.options.preload) && this.index < this.view.slideList.length - 1 ? this.view.slideList[this.index + 1].loadImages() : "all" === this.slider.options.preload && this.index === this.view.slideList.length - 1 && this.slider._removeLoading()
        }, i.setBG = function(t) {
            this.hasBG = !0;
            var i = this;
            this.$imgcont = s("<div></div>").addClass("ms-slide-bgcont"), this.$element.append(this.$loading).append(this.$imgcont), this.$bg_img = s(t).css("visibility", "hidden"), this.$imgcont.append(this.$bg_img), this.bgAligner = new MSAligner(i.fillMode, i.$imgcont, i.$bg_img), this.bgAligner.widthOnly = this.slider.options.autoHeight, i.slider.options.autoHeight && (i.pselected || i.selected) && i.slider.setHeight(i.slider.options.height), void 0 !== this.$bg_img.data("src") ? (this.bg_src = this.$bg_img.data("src"), this.$bg_img.removeAttr("data-src")) : this.$bg_img.one("load", function(t) {
                i._onBGLoad(t)
            }).each(s.jqLoadFix)
        }, i.setupBG = function() {
            !this.initBG && this.bgLoaded && (this.initBG = !0, this.$bg_img.css("visibility", ""), this.bgWidth = this.bgNatrualWidth || this.$bg_img.width(), this.bgHeight = this.bgNatrualHeight || this.$bg_img.height(), CTween.fadeIn(this.$imgcont, 300), this.slider.options.autoHeight && this.$imgcont.height(this.bgHeight * this.ratio), this.bgAligner.init(this.bgWidth, this.bgHeight), this.setSize(this.__width, this.__height), this.slider.options.autoHeight && (this.pselected || this.selected) && this.slider.setHeight(this.getHeight()))
        }, i.loadImages = function() {
            if (!this.ls) {
                if (this.ls = !0, this.bgvideo && this.bgvideo.load(), this.hasBG && this.bg_src) {
                    var i = this;
                    this.$bg_img.preloadImg(this.bg_src, function(t) {
                        i._onBGLoad(t)
                    })
                }
                this.hasLayers && this.layerController.loadLayers(this._onLayersLoad), this.hasBG || this.hasLayers || this.assetsLoaded()
            }
        }, i._onLayersLoad = function() {
            this.layersLoaded = !0, this.hasBG && !this.bgLoaded || this.assetsLoaded()
        }, i._onBGLoad = function(t) {
            this.bgNatrualWidth = t.width, this.bgNatrualHeight = t.height, this.bgLoaded = !0, s.browser.msie && this.$bg_img.on("dragstart", function(t) {
                t.preventDefault()
            }), this.hasLayers && !this.layerController.ready || this.assetsLoaded()
        }, i.setBGVideo = function(t) {
            if (t[0].play)
                if (!e._mobile || this.slider.options.mobileBGVideo) {
                    this.bgvideo = t[0];
                    var i = this;
                    t.addClass("ms-slide-bgvideo"), !1 !== t.data("loop") && this.bgvideo.addEventListener("ended", function() {
                        i.bgvideo.play()
                    }), !1 !== t.data("mute") && (this.bgvideo.muted = !0), !0 === t.data("autopause") && (this.autoPauseBgVid = !0), this.bgvideo_fillmode = t.data("fill-mode") || "fill", "none" !== this.bgvideo_fillmode && (this.bgVideoAligner = new MSAligner(this.bgvideo_fillmode, this.$element, t), this.bgvideo.addEventListener("loadedmetadata", function() {
                        i.vinit || (i.vinit = !0, i.video_aspect = i.bgVideoAligner.baseHeight / i.bgVideoAligner.baseWidth, i.bgVideoAligner.init(i.bgvideo.videoWidth, i.bgvideo.videoHeight), i._alignBGVideo(), CTween.fadeIn(s(i.bgvideo), 200), i.selected && i.bgvideo.play())
                    })), t.css("opacity", 0), this.$bgvideocont = s("<div></div>").addClass("ms-slide-bgvideocont").append(t), this.hasBG ? this.$imgcont.before(this.$bgvideocont) : this.$bgvideocont.appendTo(this.$element)
                } else t.remove()
        }, i._alignBGVideo = function() {
            this.bgvideo_fillmode && "none" !== this.bgvideo_fillmode && this.bgVideoAligner.align()
        }, i.setSize = function(t, i, e) {
            this.__width = t, this.slider.options.autoHeight && (this.bgLoaded ? (this.ratio = this.__width / this.bgWidth, i = Math.floor(this.ratio * this.bgHeight), this.$imgcont.height(i)) : (this.ratio = t / this.slider.options.width, i = this.slider.options.height * this.ratio)), this.__height = i, this.$element.width(t).height(i), this.hasBG && this.bgLoaded && this.bgAligner.align(), this._alignBGVideo(), this.hasLayers && this.layerController.setSize(t, i, e)
        }, i.getHeight = function() {
            return this.hasBG && this.bgLoaded ? this.bgHeight * this.ratio : Math.max(this.$element[0].clientHeight, this.slider.options.height * this.ratio)
        }, i.__playVideo = function() {
            this.vplayed || this.videodis || (this.vplayed = !0, this.slider.api.paused || (this.slider.api.pause(), this.roc = !0), this.vcbtn.css("display", ""), CTween.fadeOut(this.vpbtn, 500, !1), CTween.fadeIn(this.vcbtn, 500), CTween.fadeIn(this.vframe, 500), this.vframe.css("display", "block").attr("src", this.video + "&autoplay=1"), this.view.$element.addClass("ms-def-cursor"), this.moz && this.view.$element.css("perspective", "none"), this.view.swipeControl && this.view.swipeControl.disable(), this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_PLAY)))
        }, i.__closeVideo = function() {
            if (this.vplayed) {
                this.vplayed = !1, this.roc && this.slider.api.resume();
                var t = this;
                CTween.fadeIn(this.vpbtn, 500), CTween.animate(this.vcbtn, 500, {
                    opacity: 0
                }, {
                    complete: function() {
                        t.vcbtn.css("display", "none")
                    }
                }), CTween.animate(this.vframe, 500, {
                    opacity: 0
                }, {
                    complete: function() {
                        t.vframe.attr("src", "about:blank").css("display", "none")
                    }
                }), this.moz && this.view.$element.css("perspective", ""), this.view.swipeControl && this.view.swipeControl.enable(), this.view.$element.removeClass("ms-def-cursor"), this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_CLOSE))
            }
        }, i.create = function() {
            var i = this;
            this.hasLayers && this.layerController.create(), this.link && this.link.addClass("ms-slide-link").html("").click(function(t) {
                i.linkdis && t.preventDefault()
            }), this.video && (-1 === this.video.indexOf("?") && (this.video += "?"), this.vframe = s("<iframe></iframe>").addClass("ms-slide-video").css({
                width: "100%",
                height: "100%",
                display: "none"
            }).attr("src", "about:blank").attr("allowfullscreen", "true").appendTo(this.$element), this.vpbtn = s("<div></div>").addClass("ms-slide-vpbtn").click(function() {
                i.__playVideo()
            }).appendTo(this.$element), this.vcbtn = s("<div></div>").addClass("ms-slide-vcbtn").click(function() {
                i.__closeVideo()
            }).appendTo(this.$element).css("display", "none"), e._touch && this.vcbtn.removeClass("ms-slide-vcbtn").addClass("ms-slide-vcbtn-mobile").append('<div class="ms-vcbtn-txt">Close video</div>').appendTo(this.view.$element.parent())), !this.slider.options.autoHeight && this.hasBG && (this.$imgcont.css("height", "100%"), "center" !== this.fillMode && "stretch" !== this.fillMode || (this.fillMode = "fill")), this.slider.options.autoHeight && this.$element.addClass("ms-slide-auto-height"), this.sleep(!0)
        }, i.destroy = function() {
            this.hasLayers && (this.layerController.destroy(), this.layerController = null), this.$element.remove(), this.$element = null
        }, i.prepareToSelect = function() {
            this.pselected || this.selected || (this.pselected = !0, (this.link || this.video) && (this.view.addEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this), this.view.addEventListener(MSViewEvents.SWIPE_MOVE, this.onSwipeMove, this), this.view.addEventListener(MSViewEvents.SWIPE_CANCEL, this.onSwipeCancel, this), this.linkdis = !1, this.swipeMoved = !1), this.loadImages(), this.hasLayers && this.layerController.prepareToShow(), this.ready && (this.bgvideo && this.bgvideo.play(), this.hasLayers && this.slider.options.instantStartLayers && this.layerController.showLayers()), this.moz && this.$element.css("margin-top", ""))
        }, i.select = function() {
            this.selected || (this.selected = !0, this.pselected = !1, this.$element.addClass("ms-sl-selected"), this.hasLayers && (this.slider.options.autoHeight && this.layerController.updateHeight(), this.slider.options.instantStartLayers || this.layerController.showLayers()), this.ready && this.bgvideo && this.bgvideo.play(), this.videoAutoPlay && (this.videodis = !1, this.vpbtn.trigger("click")))
        }, i.unselect = function() {
            this.pselected = !1, this.moz && this.$element.css("margin-top", "0.1px"), (this.link || this.video) && (this.view.removeEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this), this.view.removeEventListener(MSViewEvents.SWIPE_MOVE, this.onSwipeMove, this), this.view.removeEventListener(MSViewEvents.SWIPE_CANCEL, this.onSwipeCancel, this)), this.bgvideo && (this.bgvideo.pause(), !this.autoPauseBgVid && this.vinit && (this.bgvideo.currentTime = 0)), this.hasLayers && this.layerController.hideLayers(), this.selected && (this.selected = !1, this.$element.removeClass("ms-sl-selected"), this.video && this.vplayed && (this.__closeVideo(), this.roc = !1))
        }, i.sleep = function(t) {
            this.isSleeping && !t || (this.isSleeping = !0, this.autoAppend && this.$element.detach(), this.hasLayers && this.layerController.onSlideSleep())
        }, i.wakeup = function() {
            this.isSleeping && (this.isSleeping = !1, this.autoAppend && this.view.$slideCont.append(this.$element), this.moz && this.$element.css("margin-top", "0.1px"), this.setupBG(), this.hasBG && this.bgAligner.align(), this.hasLayers && this.layerController.onSlideWakeup())
        }
    }(window, document, jQuery),
    function(a) {
        "use strict";
        var s = {};
        window.MSSlideController = function(t) {
            this._delayProgress = 0, this._timer = new averta.Timer(100), this._timer.onTimer = this.onTimer, (this._timer.refrence = this).currentSlide = null, this.slider = t, this.so = t.options, averta.EventDispatcher.call(this)
        }, MSSlideController.registerView = function(t, i) {
            if (t in s) throw new Error(t + ", is already registered.");
            s[t] = i
        }, MSSlideController.SliderControlList = {}, MSSlideController.registerControl = function(t, i) {
            if (t in MSSlideController.SliderControlList) throw new Error(t + ", is already registered.");
            MSSlideController.SliderControlList[t] = i
        };
        var t = MSSlideController.prototype;
        t.setupView = function() {
            var t = this;
            this.resize_listener = function() {
                t.__resize()
            };
            var i = {
                spacing: this.so.space,
                mouseSwipe: this.so.mouse,
                loop: this.so.loop,
                autoHeight: this.so.autoHeight,
                swipe: this.so.swipe,
                speed: this.so.speed,
                dir: this.so.dir,
                viewNum: this.so.inView,
                critMargin: this.so.critMargin
            };
            this.so.viewOptions && a.extend(i, this.so.viewOptions), this.so.autoHeight && (this.so.heightLimit = !1);
            var e = s[this.slider.options.view] || MSBasicView;
            if (!e._3dreq || window._css3d && !a.browser.msie || (e = e._fallback || MSBasicView), this.view = new e(i), this.so.overPause) {
                t = this;
                this.slider.$element.mouseenter(function() {
                    t.is_over = !0, t._stopTimer()
                }).mouseleave(function() {
                    t.is_over = !1, t._startTimer()
                })
            }
        }, t.onChangeStart = function() {
            this.change_started = !0, this.currentSlide && this.currentSlide.unselect(), this.currentSlide = this.view.currentSlide, this.currentSlide.prepareToSelect(), this.so.endPause && this.currentSlide.index === this.slider.slides.length - 1 && (this.pause(), this.skipTimer()), this.so.autoHeight && this.slider.setHeight(this.currentSlide.getHeight()), this.so.deepLink && this.__updateWindowHash(), this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_START))
        }, t.onChangeEnd = function() {
            if (this.change_started = !1, this._startTimer(), this.currentSlide.select(), 1 < this.so.preload) {
                var t, i, e, s = this.so.preload - 1;
                for (i = 1; i <= s; ++i) {
                    if ((t = this.view.index + i) >= this.view.slideList.length) {
                        if (!this.so.loop) {
                            i = s;
                            continue
                        }
                        t -= this.view.slideList.length
                    }(e = this.view.slideList[t]) && e.loadImages()
                }
                for (s > this.view.slideList.length / 2 && (s = Math.floor(this.view.slideList.length / 2)), i = 1; i <= s; ++i) {
                    if ((t = this.view.index - i) < 0) {
                        if (!this.so.loop) {
                            i = s;
                            continue
                        }
                        t = this.view.slideList.length + t
                    }(e = this.view.slideList[t]) && e.loadImages()
                }
            }
            this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_END))
        }, t.onSwipeStart = function() {
            this.skipTimer()
        }, t.skipTimer = function() {
            this._timer.reset(), this._delayProgress = 0, this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING))
        }, t.onTimer = function(t) {
            if (this._timer.getTime() >= 1e3 * this.view.currentSlide.delay && (this.skipTimer(), this.view.next(), this.hideCalled = !1), this._delayProgress = this._timer.getTime() / (10 * this.view.currentSlide.delay), this.so.hideLayers && !this.hideCalled && 1e3 * this.view.currentSlide.delay - this._timer.getTime() <= 300) {
                var i = this.view.currentSlide;
                i.hasLayers && i.layerController.animHideLayers(), this.hideCalled = !0
            }
            this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING))
        }, t._stopTimer = function() {
            this._timer && this._timer.stop()
        }, t._startTimer = function() {
            this.paused || this.is_over || !this.currentSlide || !this.currentSlide.ready || this.change_started || this._timer.start()
        }, t.__appendSlides = function() {
            for (var t, i, e = 0, s = this.view.slideList.length - 1; e < s; ++e)(t = this.view.slideList[e]).detached || (t.$element.detach(), t.detached = !0);
            for (this.view.appendSlide(this.view.slideList[this.view.index]), s = 3, e = 1; e <= s; ++e) {
                if ((i = this.view.index + e) >= this.view.slideList.length) {
                    if (!this.so.loop) {
                        e = s;
                        continue
                    }
                    i -= this.view.slideList.length
                }(t = this.view.slideList[i]).detached = !1, this.view.appendSlide(t)
            }
            for (s > this.view.slideList.length / 2 && (s = Math.floor(this.view.slideList.length / 2)), e = 1; e <= s; ++e) {
                if ((i = this.view.index - e) < 0) {
                    if (!this.so.loop) {
                        e = s;
                        continue
                    }
                    i = this.view.slideList.length + i
                }(t = this.view.slideList[i]).detached = !1, this.view.appendSlide(t)
            }
        }, t.__resize = function(t) {
            this.created && (this.width = this.slider.$element[0].clientWidth || this.so.width, this.so.fullwidth || (this.width = Math.min(this.width, this.so.width)), this.so.fullheight ? (this.so.heightLimit = !1, this.so.autoHeight = !1, this.height = this.slider.$element[0].clientHeight) : this.height = this.width / this.slider.aspect, this.so.autoHeight ? (this.currentSlide.setSize(this.width, null, t), this.view.setSize(this.width, this.currentSlide.getHeight(), t)) : this.view.setSize(this.width, Math.max(this.so.minHeight, this.so.heightLimit ? Math.min(this.height, this.so.height) : this.height), t), this.slider.$controlsCont && this.so.centerControls && this.so.fullwidth && this.view.$element.css("left", Math.min(0, -(this.slider.$element[0].clientWidth - this.so.width) / 2) + "px"), this.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESIZE)))
        }, t.__dispatchInit = function() {
            this.dispatchEvent(new MSSliderEvent(MSSliderEvent.INIT))
        }, t.__updateWindowHash = function() {
            var t = window.location.hash,
                i = this.so.deepLink,
                e = this.so.deepLinkType,
                s = "path" === e ? "/" : "=",
                n = "path" === e ? "/" : "&",
                o = i + s + (this.view.index + 1),
                a = new RegExp(i + s + "[0-9]+", "g");
            "" === t ? window.location.hash = n + o : a.test(t) ? window.location.hash = t.replace(a, o) : window.location.hash = t + n + o
        }, t.__curentSlideInHash = function() {
            var t = window.location.hash,
                i = this.so.deepLink,
                e = this.so.deepLinkType,
                s = new RegExp(i + ("path" === e ? "/" : "=") + "[0-9]+", "g");
            if (s.test(t)) {
                var n = Number(t.match(s)[0].match(/[0-9]+/g).pop());
                if (!isNaN(n)) return n - 1
            }
            return -1
        }, t.__onHashChanged = function() {
            var t = this.__curentSlideInHash(); - 1 !== t && this.gotoSlide(t)
        }, t.__findLayerById = function(t) {
            return this.currentSlide ? (this.currentSlide.layerController && (i = this.currentSlide.layerController.getLayerById(t)), !i && this.slider.overlayLayers ? this.slider.overlayLayers.layerController.getLayerById(t) : i) : null;
            var i
        }, t.setup = function() {
            this.created = !0, this.paused = !this.so.autoplay, this.view.addEventListener(MSViewEvents.CHANGE_START, this.onChangeStart, this), this.view.addEventListener(MSViewEvents.CHANGE_END, this.onChangeEnd, this), this.view.addEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this), this.currentSlide = this.view.slideList[this.so.start - 1], this.__resize();
            var t = this.__curentSlideInHash(),
                i = -1 !== t ? t : this.so.start - 1;
            if (this.view.create(i), 0 === this.so.preload && this.view.slideList[0].loadImages(), this.scroller = this.view.controller, this.so.wheel) {
                var n = this,
                    o = (new Date).getTime();
                this.wheellistener = function(t) {
                    var i = window.event || t.orginalEvent || t;
                    i.preventDefault();
                    var e = (new Date).getTime();
                    if (!(e - o < 400)) {
                        o = e;
                        var s = Math.abs(i.detail || i.wheelDelta);
                        a.browser.mozilla && (s *= 100);
                        return i.detail < 0 || 0 < i.wheelDelta ? 15 <= s && n.previous(!0) : 15 <= s && n.next(!0), !1
                    }
                }, a.browser.mozilla ? this.slider.$element[0].addEventListener("DOMMouseScroll", this.wheellistener) : this.slider.$element.bind("mousewheel", this.wheellistener)
            }
            0 === this.slider.$element[0].clientWidth && (this.slider.init_safemode = !0), this.__resize();
            n = this;
            this.so.deepLink && a(window).on("hashchange", function() {
                n.__onHashChanged()
            })
        }, t.index = function() {
            return this.view.index
        }, t.count = function() {
            return this.view.slidesCount
        }, t.next = function(t) {
            this.skipTimer(), this.view.next(t)
        }, t.previous = function(t) {
            this.skipTimer(), this.view.previous(t)
        }, t.gotoSlide = function(t) {
            t = Math.min(t, this.count() - 1), this.skipTimer(), this.view.gotoSlide(t)
        }, t.destroy = function(t) {
            this.dispatchEvent(new MSSliderEvent(MSSliderEvent.DESTROY)), this.slider.destroy(t)
        }, t._destroy = function() {
            this._timer.reset(), this._timer = null, a(window).unbind("resize", this.resize_listener), this.view.destroy(), this.view = null, this.so.wheel && (a.browser.mozilla ? this.slider.$element[0].removeEventListener("DOMMouseScroll", this.wheellistener) : this.slider.$element.unbind("mousewheel", this.wheellistener), this.wheellistener = null), this.so = null
        }, t.runAction = function(t) {
            var i = [];
            if (-1 !== t.indexOf("(")) {
                var e = t.slice(0, t.indexOf("("));
                i = t.slice(t.indexOf("(") + 1, -1).replace(/\"|\'|\s/g, "").split(","), t = e
            }
            t in this ? this[t].apply(this, i) : console && console.log('Master Slider Error: Action "' + t + '" not found.')
        }, t.update = function(t) {
            this.slider.init_safemode && t && (this.slider.init_safemode = !1), this.__resize(t), t && this.dispatchEvent(new MSSliderEvent(MSSliderEvent.HARD_UPDATE))
        }, t.locate = function() {
            this.__resize()
        }, t.resume = function() {
            this.paused && (this.paused = !1, this._startTimer())
        }, t.pause = function() {
            this.paused || (this.paused = !0, this._stopTimer())
        }, t.currentTime = function() {
            return this._delayProgress
        }, t.showLayer = function(t, i) {
            var e = this.__findLayerById(t);
            e && (i ? (clearTimeout(e.actionTimeout), e.actionTimeout = setTimeout(this.showLayer, i, t, 0)) : e.start())
        }, t.hideLayer = function(t, i) {
            var e = this.__findLayerById(t);
            e && (i ? (clearTimeout(e.actionTimeout), e.actionTimeout = setTimeout(this.hideLayer, i, t, 0)) : e.hide())
        }, t.toggleLayer = function(t, i) {
            var e = this.__findLayerById(t);
            e && (i ? (clearTimeout(e.actionTimeout), e.actionTimeout = setTimeout(this.toggleLayer, i, t, 0)) : e.isShowing ? e.hide() : e.start())
        }, t.showLayers = function(t, e) {
            var s = this;
            a.each(t.replace(/\s+/g, "").split("|"), function(t, i) {
                s.showLayer(i, e)
            })
        }, t.hideLayers = function(t, e) {
            var s = this;
            a.each(t.replace(/\s+/g, "").split("|"), function(t, i) {
                s.hideLayer(i, e)
            })
        }, t.toggleLayers = function(t, e) {
            var s = this;
            a.each(t.replace(/\s+/g, "").split("|"), function(t, i) {
                s.toggleLayer(i, e)
            })
        }, averta.EventDispatcher.extend(t)
    }(jQuery),
    function(l) {
        "use strict";
        var h = {
            image: MSImageLayerElement,
            text: MSLayerElement,
            video: MSVideoLayerElement,
            hotspot: MSHotspotLayer,
            button: MSButtonLayer
        };
        window.MasterSlider = function() {
            this.options = {
                forceInit: !0,
                autoplay: !1,
                loop: !1,
                mouse: !0,
                swipe: !0,
                grabCursor: !0,
                space: 0,
                fillMode: "fill",
                start: 1,
                view: "basic",
                width: 300,
                height: 150,
                inView: 15,
                critMargin: 1,
                mobileBGVideo: !1,
                heightLimit: !0,
                smoothHeight: !0,
                autoHeight: !1,
                minHeight: -1,
                fullwidth: !1,
                fullheight: !1,
                autofill: !1,
                layersMode: "center",
                hideLayers: !1,
                endPause: !1,
                centerControls: !0,
                overPause: !0,
                shuffle: !1,
                speed: 17,
                dir: "h",
                preload: 0,
                wheel: !1,
                layout: "boxed",
                autofillTarget: null,
                fullscreenMargin: 0,
                instantStartLayers: !1,
                parallaxMode: "mouse",
                rtl: !1,
                deepLink: null,
                deepLinkType: "path",
                disablePlugins: []
            }, this.slides = [], this.activePlugins = [], this.$element = null, this.lastMargin = 0, this.leftSpace = 0, this.topSpace = 0, this.rightSpace = 0, this.bottomSpace = 0, this._holdOn = 0;
            var t = this;
            this.resize_listener = function() {
                t._resize()
            }, l(window).bind("resize", this.resize_listener)
        }, MasterSlider.author = "Averta Ltd. (www.averta.net)", MasterSlider.version = "2.51.2", MasterSlider.releaseDate = "Jun 2017", MasterSlider._plugins = [];
        var a = MasterSlider;
        a.registerPlugin = function(t) {
            -1 === a._plugins.indexOf(t) && a._plugins.push(t)
        };
        var t = MasterSlider.prototype;
        t.__setupSlides = function() {
            var a, r = this,
                h = 0;
            this.$element.children(".ms-slide").each(function(t) {
                var i = l(this);
                (a = new MSSlide).$element = i, a.slider = r, a.delay = void 0 !== i.data("delay") ? i.data("delay") : 3, a.fillMode = void 0 !== i.data("fill-mode") ? i.data("fill-mode") : r.options.fillMode, a.index = h++, a.id = i.data("id");
                var e = i.children("img:not(.ms-layer)");
                0 < e.length && a.setBG(e[0]);
                var s = i.children("video");
                if (0 < s.length && a.setBGVideo(s), r.controls)
                    for (var n = 0, o = r.controls.length; n < o; ++n) r.controls[n].slideAction(a);
                i.children("a").each(function(t) {
                    var i = l(this);
                    "video" === this.getAttribute("data-type") ? (a.video = this.getAttribute("href"), a.videoAutoPlay = i.data("autoplay"), i.remove()) : i.hasClass("ms-layer") || (a.link = l(this))
                });
                r.__createSlideLayers(a, i.find(".ms-layer")), r.slides.push(a), r.slideController.view.addSlide(a)
            })
        }, t._setupOverlayLayers = function() {
            var t = this.$element.children(".ms-overlay-layers").eq(0);
            if (t.length) {
                var i = new MSOverlayLayers(this);
                i.$element = t, this.__createSlideLayers(i, t.find(".ms-layer")), this.view.$element.prepend(t), (this.overlayLayers = i).create()
            }
        }, t.__createSlideLayers = function(r, t) {
            0 != t.length && (r.setupLayerController(), t.each(function(t, i) {
                var e, s = l(this);
                "A" === i.nodeName && "image" === s.find(">img").data("type") && (s = (e = l(this)).find("img"));
                var n = new(h[s.data("type") || "text"]);
                n.$element = s, n.link = e, n.id = n.$element.data("id"), n.waitForAction = n.$element.data("wait"), n.masked = n.$element.data("masked"), n.maskWidth = n.$element.data("mask-width"), n.maskHeight = n.$element.data("mask-height");
                var o = {},
                    a = {};
                void 0 !== s.data("effect") && (o.name = s.data("effect")), void 0 !== s.data("ease") && (o.ease = s.data("ease")), void 0 !== s.data("duration") && (o.duration = s.data("duration")), void 0 !== s.data("delay") && (o.delay = s.data("delay")), s.data("hide-effect") && (a.name = s.data("hide-effect")), s.data("hide-ease") && (a.ease = s.data("hide-ease")), void 0 !== s.data("hide-duration") && (a.duration = s.data("hide-duration")), void 0 !== s.data("hide-time") && (a.time = s.data("hide-time")), n.setStartAnim(o), n.setEndAnim(a), r.layerController.addLayer(n)
            }))
        }, t._removeLoading = function() {
            l(window).unbind("resize", this.resize_listener), this.$element.removeClass("before-init").css("visibility", "visible").css("height", "").css("opacity", 0), CTween.fadeIn(this.$element), this.$loading.remove(), this.slideController && this.slideController.__resize()
        }, t._resize = function(t) {
            if (this.$loading) {
                var i = this.$loading[0].clientWidth / this.aspect;
                i = this.options.heightLimit ? Math.min(i, this.options.height) : i, this.$loading.height(i), this.$element.height(i)
            }
        }, t._shuffleSlides = function() {
            for (var t, i = this.$element.children(".ms-slide"), e = 0, s = i.length; e < s; ++e) e != (t = Math.floor(Math.random() * (s - 1))) && (this.$element[0].insertBefore(i[e], i[t]), i = this.$element.children(".ms-slide"))
        }, t._setupSliderLayout = function() {
            this._updateSideMargins(), this.lastMargin = this.leftSpace;
            var t = this.options.layout;
            "boxed" !== t && "partialview" !== t && (this.options.fullwidth = !0), "fullscreen" !== t && "autofill" !== t || (this.options.fullheight = !0, "autofill" === t && (this.$autofillTarget = l(this.options.autofillTarget), 0 === this.$autofillTarget.length && (this.$autofillTarget = this.$element.parent()))), "partialview" === t && this.$element.addClass("ms-layout-partialview"), "fullscreen" !== t && "fullwidth" !== t && "autofill" !== t || (l(window).bind("resize", {
                that: this
            }, this._updateLayout), this._updateLayout()), l(window).bind("resize", this.slideController.resize_listener)
        }, t._updateLayout = function(t) {
            var i = t ? t.data.that : this,
                e = i.options.layout,
                s = i.$element,
                n = l(window);
            if ("fullscreen" === e) document.body.style.overflow = "hidden", s.height(n.height() - i.options.fullscreenMargin - i.topSpace - i.bottomSpace), document.body.style.overflow = "";
            else if ("autofill" === e) return void s.height(i.$autofillTarget.height() - i.options.fullscreenMargin - i.topSpace - i.bottomSpace).width(i.$autofillTarget.width() - i.leftSpace - i.rightSpace);
            s.width(n.width() - i.leftSpace - i.rightSpace);
            var o = -s.offset().left + i.leftSpace + i.lastMargin;
            s.css("margin-left", o), i.lastMargin = o
        }, t._init = function() {
            if (!(0 < this._holdOn) && this._docReady) {
                if (this.initialized = !0, "all" !== this.options.preload && this._removeLoading(), this.options.shuffle && this._shuffleSlides(), MSLayerEffects.setup(), this.slideController.setupView(), this.view = this.slideController.view, this.$controlsCont = l("<div></div>").addClass("ms-inner-controls-cont"), this.options.centerControls && this.$controlsCont.css("max-width", this.options.width + "px"), this.$controlsCont.prepend(this.view.$element), this.$msContainer = l("<div></div>").addClass("ms-container").prependTo(this.$element).append(this.$controlsCont), this.controls)
                    for (var t = 0, i = this.controls.length; t < i; ++t) this.controls[t].setup();
                if (this._setupSliderLayout(), this.__setupSlides(), this.slideController.setup(), this._setupOverlayLayers(), this.controls)
                    for (t = 0, i = this.controls.length; t < i; ++t) this.controls[t].create();
                if (this.options.autoHeight && this.slideController.view.$element.height(this.slideController.currentSlide.getHeight()), this.options.swipe && !window._touch && this.options.grabCursor && this.options.mouse) {
                    var e = this.view.$element;
                    e.mousedown(function() {
                        e.removeClass("ms-grab-cursor"), e.addClass("ms-grabbing-cursor"), l.browser.msie && window.ms_grabbing_curosr && (e[0].style.cursor = "url(" + window.ms_grabbing_curosr + "), move")
                    }).addClass("ms-grab-cursor"), l(document).mouseup(function() {
                        e.removeClass("ms-grabbing-cursor"), e.addClass("ms-grab-cursor"), l.browser.msie && window.ms_grab_curosr && (e[0].style.cursor = "url(" + window.ms_grab_curosr + "), move")
                    })
                }
                this.slideController.__dispatchInit()
            }
        }, t.setHeight = function(t) {
            this.options.smoothHeight ? (this.htween && (this.htween.reset ? this.htween.reset() : this.htween.stop(!0)), this.htween = CTween.animate(this.slideController.view.$element, 500, {
                height: t
            }, {
                ease: "easeOutQuart"
            })) : this.slideController.view.$element.height(t)
        }, t.reserveSpace = function(t, i) {
            var e = t + "Space",
                s = this[e];
            return this[e] += i, this._updateSideMargins(), s
        }, t._updateSideMargins = function() {
            this.$element.css("margin", this.topSpace + "px " + this.rightSpace + "px " + this.bottomSpace + "px " + this.leftSpace + "px")
        }, t._realignControls = function() {
            this.rightSpace = this.leftSpace = this.topSpace = this.bottomSpace = 0, this._updateSideMargins(), this.api.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESERVED_SPACE_CHANGE))
        }, t.control = function(t, i) {
            if (t in MSSlideController.SliderControlList) {
                this.controls || (this.controls = []);
                var e = new MSSlideController.SliderControlList[t](i);
                return (e.slider = this).controls.push(e), this
            }
        }, t.holdOn = function() {
            this._holdOn++
        }, t.release = function() {
            this._holdOn--, this._init()
        }, t.setup = function(t, i) {
            if (this.$element = "string" == typeof t ? l("#" + t) : t.eq(0), this.setupMarkup = this.$element.html(), 0 !== this.$element.length) {
                this.$element.addClass("master-slider").addClass("before-init"), l.browser.msie ? this.$element.addClass("ms-ie").addClass("ms-ie" + l.browser.version.slice(0, l.browser.version.indexOf("."))) : l.browser.webkit ? this.$element.addClass("ms-wk") : l.browser.mozilla && this.$element.addClass("ms-moz"), -1 < navigator.userAgent.toLowerCase().indexOf("android") && this.$element.addClass("ms-android");
                var e = this;
                l.extend(this.options, i), this.aspect = this.options.width / this.options.height, this.$loading = l("<div></div>").addClass("ms-loading-container").insertBefore(this.$element).append(l("<div></div>").addClass("ms-loading")), this.$loading.parent().css("position", "relative"), this.options.autofill && (this.options.fullwidth = !0, this.options.fullheight = !0), this.options.fullheight && this.$element.addClass("ms-fullheight"), this._resize(), this.slideController = new MSSlideController(this), this.api = this.slideController;
                for (var s = 0, n = a._plugins.length; s !== n; s++) {
                    var o = a._plugins[s]; - 1 === this.options.disablePlugins.indexOf(o.name) && this.activePlugins.push(new o(this))
                }
                return this.options.forceInit && MasterSlider.addJQReadyErrorCheck(this), l(document).ready(function() {
                    e.initialized || (e._docReady = !0, e._init())
                }), this
            }
        }, t.destroy = function(t) {
            for (var i = 0, e = this.activePlugins.length; i !== e; i++) this.activePlugins[i].destroy();
            if (this.controls)
                for (i = 0, e = this.controls.length; i !== e; i++) this.controls[i].destroy();
            this.slideController && this.slideController._destroy(), this.$loading && this.$loading.remove(), t ? this.$element.html(this.setupMarkup).css("visibility", "hidden") : this.$element.remove();
            var s = this.options.layout;
            "fullscreen" !== s && "fullwidth" !== s || l(window).unbind("resize", this._updateLayout), this.view = null, this.slides = null, this.options = null, this.slideController = null, this.api = null, this.resize_listener = null, this.activePlugins = null
        }
    }(jQuery),
    function(o, t, i, e) {
        var a = "masterslider",
            s = {
                controls: {}
            };

        function r(t, i) {
            this.element = t, this.$element = o(t), this.settings = o.extend({}, s, i), this._defaults = s, this._name = a, this.init()
        }
        o.extend(r.prototype, {
            init: function() {
                var i = this;
                for (var t in this._slider = new MasterSlider, this.settings.controls) this._slider.control(t, this.settings.controls[t]);
                this._slider.setup(this.$element, this.settings);
                var e = this._slider.api.dispatchEvent;
                this._slider.api.dispatchEvent = function(t) {
                    i.$element.trigger(t.type), e.call(this, t)
                }
            },
            api: function() {
                return this._slider.api
            },
            slider: function() {
                return this._slider
            }
        }), o.fn[a] = function(i) {
            var e, s = arguments,
                n = "plugin_" + a;
            return void 0 === i || "object" == typeof i ? this.each(function() {
                o.data(this, n) || o.data(this, n, new r(this, i))
            }) : "string" == typeof i && "_" !== i[0] && "init" !== i ? (this.each(function() {
                var t = o.data(this, n);
                t instanceof r && "function" == typeof t[i] && (e = t[i].apply(t, Array.prototype.slice.call(s, 1))), t instanceof r && "function" == typeof t._slider.api[i] && (e = t._slider.api[i].apply(t._slider.api, Array.prototype.slice.call(s, 1))), "destroy" === i && o.data(this, n, null)
            }), void 0 !== e ? e : this) : void 0
        }
    }(jQuery, window, document),
    function(t, i, e, s) {
        "use strict";
        var n = [];
        MasterSlider.addJQReadyErrorCheck = function(t) {
            n.push(t)
        };
        var o = t.fn.ready,
            a = i.onerror;
        t.fn.ready = function() {
            return i.onerror = function() {
                if (0 !== n.length)
                    for (var t = 0, i = n.length; t !== i; t++) {
                        var e = n[t];
                        e.initialized || (e._docReady = !0, e._init())
                    }
                return !!a && a.apply(this, arguments)
            }, o.apply(this, arguments)
        }
    }(jQuery, window, document), window.MSViewEvents = function(t, i) {
    this.type = t, this.data = i
}, MSViewEvents.SWIPE_START = "swipeStart", MSViewEvents.SWIPE_END = "swipeEnd", MSViewEvents.SWIPE_MOVE = "swipeMove", MSViewEvents.SWIPE_CANCEL = "swipeCancel", MSViewEvents.SCROLL = "scroll", MSViewEvents.CHANGE_START = "slideChangeStart", MSViewEvents.CHANGE_END = "slideChangeEnd",
    function(o) {
        "use strict";
        window.MSBasicView = function(t) {
            this.options = {
                loop: !1,
                dir: "h",
                autoHeight: !1,
                spacing: 5,
                mouseSwipe: !0,
                swipe: !0,
                speed: 17,
                minSlideSpeed: 2,
                viewNum: 20,
                critMargin: 1
            }, o.extend(this.options, t), this.dir = this.options.dir, this.loop = this.options.loop, this.spacing = this.options.spacing, this.__width = 0, this.__height = 0, this.__cssProb = "h" === this.dir ? "left" : "top", this.__offset = "h" === this.dir ? "offsetLeft" : "offsetTop", this.__dimension = "h" === this.dir ? "__width" : "__height", this.__translate_end = window._css3d ? " translateZ(0px)" : "", this.$slideCont = o("<div></div>").addClass("ms-slide-container"), this.$element = o("<div></div>").addClass("ms-view").addClass("ms-basic-view").append(this.$slideCont), this.currentSlide = null, this.index = -1, this.slidesCount = 0, this.slides = [], this.slideList = [], this.viewSlidesList = [], this.css3 = window._cssanim, this.start_buffer = 0, this.firstslide_snap = 0, this.slideChanged = !1, this.controller = new Controller(0, 0, {
                snapping: !0,
                snapsize: 100,
                paging: !0,
                snappingMinSpeed: this.options.minSlideSpeed,
                friction: (100 - .5 * this.options.speed) / 100,
                endless: this.loop
            }), this.controller.renderCallback("h" === this.dir ? this._horizUpdate : this._vertiUpdate, this), this.controller.snappingCallback(this.__snapUpdate, this), this.controller.snapCompleteCallback(this.__snapCompelet, this), averta.EventDispatcher.call(this)
        };
        var t = MSBasicView.prototype;
        t.__snapCompelet = function(t, i) {
            this.slideChanged && (this.slideChanged = !1, this.__locateSlides(), this.start_buffer = 0, this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END)))
        }, t.__snapUpdate = function(t, i, e) {
            if (this.loop) {
                var s = this.index + e;
                this.updateLoop(s), s >= this.slidesCount && (s -= this.slidesCount), s < 0 && (s = this.slidesCount + s), this.index = s
            } else {
                if (i < 0 || i >= this.slidesCount) return;
                this.index = i
            }
            this._checkCritMargins(), o.browser.mozilla && (this.slideList[this.index].$element[0].style.marginTop = "0.1px", this.currentSlide && (this.currentSlide.$element[0].style.marginTop = ""));
            var n = this.slideList[this.index];
            n !== this.currentSlide && (this.currentSlide = n, this.autoUpdateZIndex && this.__updateSlidesZindex(), this.slideChanged = !0, this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START)))
        }, t._checkCritMargins = function() {
            if (!this.normalMode) {
                var t = Math.floor(this.options.viewNum / 2),
                    i = this.viewSlidesList.indexOf(this.slideList[this.index]),
                    e = this[this.__dimension] + this.spacing,
                    s = this.options.critMargin;
                this.loop ? (i <= s || i >= this.viewSlidesList.length - s) && (e *= i - t, this.__locateSlides(!1, e + this.start_buffer), this.start_buffer += e) : (i < s && this.index >= s || i >= this.viewSlidesList.length - s && this.index < this.slidesCount - s) && this.__locateSlides(!1)
            }
        }, t._vertiUpdate = function(t, i) {
            this.__contPos = i, this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL)), this.css3 ? this.$slideCont[0].style[window._jcsspfx + "Transform"] = "translateY(" + -i + "px)" + this.__translate_end : this.$slideCont[0].style.top = -i + "px"
        }, t._horizUpdate = function(t, i) {
            this.__contPos = i, this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL)), this.css3 ? this.$slideCont[0].style[window._jcsspfx + "Transform"] = "translateX(" + -i + "px)" + this.__translate_end : this.$slideCont[0].style.left = -i + "px"
        }, t.__updateViewList = function() {
            if (this.normalMode) this.viewSlidesList = this.slides;
            else {
                var t = this.viewSlidesList.slice();
                this.viewSlidesList = [];
                var i, e = 0,
                    s = Math.floor(this.options.viewNum / 2);
                if (this.loop)
                    for (; e !== this.options.viewNum; e++) this.viewSlidesList.push(this.slides[this.currentSlideLoc - s + e]);
                else {
                    for (e = 0; e !== s && this.index - e != -1; e++) this.viewSlidesList.unshift(this.slideList[this.index - e]);
                    for (e = 1; e !== s && this.index + e !== this.slidesCount; e++) this.viewSlidesList.push(this.slideList[this.index + e])
                }
                for (e = 0, i = t.length; e !== i; e++) - 1 === this.viewSlidesList.indexOf(t[e]) && t[e].sleep();
                t = null, this.currentSlide && this.__updateSlidesZindex()
            }
        }, t.__locateSlides = function(t, i) {
            this.__updateViewList(), i = this.loop ? i || 0 : this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing);
            for (var e, s = this.viewSlidesList.length, n = 0; n !== s; n++) {
                var o = i + n * (this[this.__dimension] + this.spacing);
                (e = this.viewSlidesList[n]).wakeup(), e.position = o, e.$element[0].style[this.__cssProb] = o + "px"
            }!1 !== t && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
        }, t.__createLoopList = function() {
            var t = [],
                i = 0,
                e = this.slidesCount / 2,
                s = this.slidesCount % 2 == 0 ? e - 1 : Math.floor(e),
                n = this.slidesCount % 2 == 0 ? e : Math.floor(e);
            for (this.currentSlideLoc = s, i = 1; i <= s; ++i) t.unshift(this.slideList[this.index - i < 0 ? this.slidesCount - i + this.index : this.index - i]);
            for (t.push(this.slideList[this.index]), i = 1; i <= n; ++i) t.push(this.slideList[this.index + i >= this.slidesCount ? this.index + i - this.slidesCount : this.index + i]);
            return t
        }, t.__getSteps = function(t, i) {
            var e = i < t ? this.slidesCount - t + i : i - t,
                s = Math.abs(this.slidesCount - e);
            return e < s ? e : -s
        }, t.__pushEnd = function() {
            var t = this.slides.shift(),
                i = this.slides[this.slidesCount - 2];
            if (this.slides.push(t), this.normalMode) {
                var e = i.$element[0][this.__offset] + this.spacing + this[this.__dimension];
                t.$element[0].style[this.__cssProb] = e + "px", t.position = e
            }
        }, t.__pushStart = function() {
            var t = this.slides.pop(),
                i = this.slides[0];
            if (this.slides.unshift(t), this.normalMode) {
                var e = i.$element[0][this.__offset] - this.spacing - this[this.__dimension];
                t.$element[0].style[this.__cssProb] = e + "px", t.position = e
            }
        }, t.__updateSlidesZindex = function() {
            var t = this.viewSlidesList.length;
            Math.floor(t / 2);
            if (this.loop)
                for (var i = this.viewSlidesList.indexOf(this.currentSlide), e = 0; e !== t; e++) this.viewSlidesList[e], this.viewSlidesList[e].$element.css("z-index", e <= i ? e + 1 : t - e);
            else {
                var s = this.currentSlide.index - this.viewSlidesList[0].index;
                for (e = 0; e !== t; e++) this.viewSlidesList[e].$element.css("z-index", e <= s ? e + 1 : t - e);
                this.currentSlide.$element.css("z-index", t)
            }
        }, t.addSlide = function(t) {
            (t.view = this).slides.push(t), this.slideList.push(t), this.slidesCount++
        }, t.appendSlide = function(t) {
            this.$slideCont.append(t.$element)
        }, t.updateLoop = function(t) {
            if (this.loop)
                for (var i = this.__getSteps(this.index, t), e = 0, s = Math.abs(i); e < s; ++e) i < 0 ? this.__pushStart() : this.__pushEnd()
        }, t.gotoSlide = function(t, i) {
            this.updateLoop(t), this.index = t;
            var e = this.slideList[t];
            this._checkCritMargins(), this.controller.changeTo(e.position, !i, null, null, !1), e !== this.currentSlide && (this.slideChanged = !0, this.currentSlide = e, this.autoUpdateZIndex && this.__updateSlidesZindex(), this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START)), i && this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END)))
        }, t.next = function(t) {
            t && !this.loop && this.index + 1 >= this.slidesCount ? this.controller.bounce(10) : this.gotoSlide(this.index + 1 >= this.slidesCount ? 0 : this.index + 1)
        }, t.previous = function(t) {
            t && !this.loop && this.index - 1 < 0 ? this.controller.bounce(-10) : this.gotoSlide(this.index - 1 < 0 ? this.slidesCount - 1 : this.index - 1)
        }, t.setupSwipe = function() {
            this.swipeControl = new averta.TouchSwipe(this.$element), this.swipeControl.swipeType = "h" === this.dir ? "horizontal" : "vertical";
            var i = this;
            "h" === this.dir ? this.swipeControl.onSwipe = function(t) {
                i.horizSwipeMove(t)
            } : this.swipeControl.onSwipe = function(t) {
                i.vertSwipeMove(t)
            }
        }, t.vertSwipeMove = function(t) {
            var i = t.phase;
            if ("start" === i) this.controller.stop(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START, t));
            else if ("move" === i && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + t.moveY) < this.cont_size / 2)) this.controller.drag(t.moveY), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_MOVE, t));
            else if ("end" === i || "cancel" === i) {
                var e = t.distanceY / t.duration * 50 / 3,
                    s = Math.abs(t.distanceY / t.duration * 50 / 3);.1 < Math.abs(e) && Math.abs(e) >= s ? (this.controller.push(-e), e > this.controller.options.snappingMinSpeed && this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END, t))) : (this.controller.cancel(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL, t)))
            }
        }, t.horizSwipeMove = function(t) {
            var i = t.phase;
            if ("start" === i) this.controller.stop(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START, t));
            else if ("move" === i && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + t.moveX) < this.cont_size / 2)) this.controller.drag(t.moveX), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_MOVE, t));
            else if ("end" === i || "cancel" === i) {
                var e = t.distanceX / t.duration * 50 / 3,
                    s = Math.abs(t.distanceY / t.duration * 50 / 3);.1 < Math.abs(e) && Math.abs(e) >= s ? (this.controller.push(-e), e > this.controller.options.snappingMinSpeed && this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END, t))) : (this.controller.cancel(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL, t)))
            }
        }, t.setSize = function(t, i, e) {
            if (this.lastWidth !== t || i !== this.lastHeight || e) {
                this.$element.width(t).height(i);
                for (var s = 0; s < this.slidesCount; ++s) this.slides[s].setSize(t, i, e);
                this.__width = t, this.__height = i, this.__created && (this.__locateSlides(), this.cont_size = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing), this.loop || (this.controller._max_value = this.cont_size), this.controller.options.snapsize = this[this.__dimension] + this.spacing, this.controller.changeTo(this.currentSlide.position, !1, null, null, !1), this.controller.cancel(), this.lastWidth = t, this.lastHeight = i)
            }
        }, t.create = function(t) {
            this.__created = !0, this.index = Math.min(t || 0, this.slidesCount - 1), this.lastSnap = this.index, this.loop && (this.slides = this.__createLoopList()), this.normalMode = this.slidesCount <= this.options.viewNum;
            for (var i = 0; i < this.slidesCount; ++i) this.slides[i].create();
            this.__locateSlides(), this.controller.options.snapsize = this[this.__dimension] + this.spacing, this.loop || (this.controller._max_value = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing)), this.gotoSlide(this.index, !0), this.options.swipe && (window._touch || this.options.mouseSwipe) && this.setupSwipe()
        }, t.destroy = function() {
            if (this.__created) {
                for (var t = 0; t < this.slidesCount; ++t) this.slides[t].destroy();
                this.slides = null, this.slideList = null, this.$element.remove(), this.controller.destroy(), this.controller = null
            }
        }, averta.EventDispatcher.extend(t), MSSlideController.registerView("basic", MSBasicView)
    }(jQuery),
    function(t) {
        "use strict";
        window.MSWaveView = function(t) {
            MSBasicView.call(this, t), this.$element.removeClass("ms-basic-view").addClass("ms-wave-view"), this.$slideCont.css(window._csspfx + "transform-style", "preserve-3d"), this.autoUpdateZIndex = !0
        }, MSWaveView.extend(MSBasicView), MSWaveView._3dreq = !0, MSWaveView._fallback = MSBasicView;
        var i = MSWaveView.prototype,
            a = MSBasicView.prototype;
        i._horizUpdate = function(t, i) {
            a._horizUpdate.call(this, t, i);
            for (var e, s, n = -i, o = 0; o < this.slidesCount; ++o) s = -n - (e = this.slideList[o]).position, this.__updateSlidesHoriz(e, s)
        }, i._vertiUpdate = function(t, i) {
            a._vertiUpdate.call(this, t, i);
            for (var e, s, n = -i, o = 0; o < this.slidesCount; ++o) s = -n - (e = this.slideList[o]).position, this.__updateSlidesVertic(e, s)
        }, i.__updateSlidesHoriz = function(t, i) {
            var e = Math.abs(100 * i / this.__width);
            t.$element[0].style[window._csspfx + "transform"] = "translateZ(" + 3 * -e + "px) rotateY(0.01deg)"
        }, i.__updateSlidesVertic = function(t, i) {
            this.__updateSlidesHoriz(t, i)
        }, MSSlideController.registerView("wave", MSWaveView)
    }(jQuery),
    function() {
        window.MSFadeBasicView = function(t) {
            MSWaveView.call(this, t), this.$element.removeClass("ms-wave-view").addClass("ms-fade-basic-view")
        }, MSFadeBasicView.extend(MSWaveView);
        var t = MSFadeBasicView.prototype;
        MSFadeBasicView.prototype;
        t.__updateSlidesHoriz = function(t, i) {
            var e = Math.abs(.6 * i / this.__width);
            e = 1 - Math.min(e, .6), t.$element.css("opacity", e)
        }, t.__updateSlidesVertic = function(t, i) {
            this.__updateSlidesHoriz(t, i)
        }, MSSlideController.registerView("fadeBasic", MSFadeBasicView), MSWaveView._fallback = MSFadeBasicView
    }(),
    function() {
        window.MSFadeWaveView = function(t) {
            MSWaveView.call(this, t), this.$element.removeClass("ms-wave-view").addClass("ms-fade-wave-view")
        }, MSFadeWaveView.extend(MSWaveView), MSFadeWaveView._3dreq = !0, MSFadeWaveView._fallback = MSFadeBasicView;
        var t = MSFadeWaveView.prototype;
        MSWaveView.prototype;
        t.__updateSlidesHoriz = function(t, i) {
            var e = Math.abs(100 * i / this.__width);
            e = Math.min(e, 100), t.$element.css("opacity", 1 - e / 300), t.$element[0].style[window._jcsspfx + "Transform"] = "scale(" + (1 - e / 800) + ") rotateY(0.01deg) "
        }, t.__updateSlidesVertic = function(t, i) {
            this.__updateSlidesHoriz(t, i)
        }, MSSlideController.registerView("fadeWave", MSFadeWaveView)
    }(),
    function(t) {
        "use strict";
        window.MSFlowView = function(t) {
            MSWaveView.call(this, t), this.$element.removeClass("ms-wave-view").addClass("ms-flow-view")
        }, MSFlowView.extend(MSWaveView), MSFlowView._3dreq = !0, MSFlowView._fallback = MSFadeBasicView;
        var i = MSFlowView.prototype;
        MSWaveView.prototype;
        i.__updateSlidesHoriz = function(t, i) {
            var e = Math.abs(100 * i / this.__width),
                s = Math.min(.3 * e, 30) * (i < 0 ? -1 : 1),
                n = 1.2 * e;
            t.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + 5 * -n + "px) rotateY(" + s + "deg) "
        }, i.__updateSlidesVertic = function(t, i) {
            var e = Math.abs(100 * i / this.__width),
                s = Math.min(.3 * e, 30) * (i < 0 ? -1 : 1),
                n = 1.2 * e;
            t.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + 5 * -n + "px) rotateX(" + -s + "deg) "
        }, MSSlideController.registerView("flow", MSFlowView)
    }(jQuery),
    function() {
        window.MSFadeFlowView = function(t) {
            MSWaveView.call(this, t), this.$element.removeClass("ms-wave-view").addClass("ms-fade-flow-view")
        }, MSFadeFlowView.extend(MSWaveView), MSFadeFlowView._3dreq = !0;
        var t = MSFadeFlowView.prototype;
        MSWaveView.prototype;
        t.__calculate = function(t) {
            var i = Math.min(Math.abs(100 * t / this.__width), 100);
            return {
                value: i,
                rvalue: Math.min(.5 * i, 50) * (t < 0 ? -1 : 1)
            }
        }, t.__updateSlidesHoriz = function(t, i) {
            var e = this.__calculate(i);
            t.$element.css("opacity", 1 - e.value / 300), t.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + -e.value + "px) rotateY(" + e.rvalue + "deg) "
        }, t.__updateSlidesVertic = function(t, i) {
            var e = this.__calculate(i);
            t.$element.css("opacity", 1 - e.value / 300), t.$element[0].style[window._jcsspfx + "Transform"] = "translateZ(" + -e.value + "px) rotateX(" + -e.rvalue + "deg) "
        }, MSSlideController.registerView("fadeFlow", MSFadeFlowView)
    }(),
    function(i) {
        "use strict";
        window.MSMaskView = function(t) {
            MSBasicView.call(this, t), this.$element.removeClass("ms-basic-view").addClass("ms-mask-view")
        }, MSMaskView.extend(MSBasicView);
        var t = MSMaskView.prototype,
            n = MSBasicView.prototype;
        t.addSlide = function(t) {
            t.view = this, t.$frame = i("<div></div>").addClass("ms-mask-frame").append(t.$element), t.$element[0].style.position = "relative", t.autoAppend = !1, this.slides.push(t), this.slideList.push(t), this.slidesCount++
        }, t.setSize = function(t, i) {
            for (var e = this.slides[0].slider, s = 0; s < this.slidesCount; ++s) this.slides[s].$frame[0].style.width = t + "px", e.options.autoHeight || (this.slides[s].$frame[0].style.height = i + "px");
            n.setSize.call(this, t, i)
        }, t._horizUpdate = function(t, i) {
            n._horizUpdate.call(this, t, i);
            var e = 0;
            if (this.css3)
                for (e = 0; e < this.slidesCount; ++e) this.slideList[e].$element[0].style[window._jcsspfx + "Transform"] = "translateX(" + (i - this.slideList[e].position) + "px)" + this.__translate_end;
            else
                for (e = 0; e < this.slidesCount; ++e) this.slideList[e].$element[0].style.left = i - this.slideList[e].position + "px"
        }, t._vertiUpdate = function(t, i) {
            n._vertiUpdate.call(this, t, i);
            var e = 0;
            if (this.css3)
                for (e = 0; e < this.slidesCount; ++e) this.slideList[e].$element[0].style[window._jcsspfx + "Transform"] = "translateY(" + (i - this.slideList[e].position) + "px)" + this.__translate_end;
            else
                for (e = 0; e < this.slidesCount; ++e) this.slideList[e].$element[0].style.top = i - this.slideList[e].position + "px"
        }, t.__pushEnd = function() {
            var t = this.slides.shift(),
                i = this.slides[this.slidesCount - 2];
            if (this.slides.push(t), this.normalMode) {
                var e = i.$frame[0][this.__offset] + this.spacing + this[this.__dimension];
                t.$frame[0].style[this.__cssProb] = e + "px", t.position = e
            }
        }, t.__pushStart = function() {
            var t = this.slides.pop(),
                i = this.slides[0];
            if (this.slides.unshift(t), this.normalMode) {
                var e = i.$frame[0][this.__offset] - this.spacing - this[this.__dimension];
                t.$frame[0].style[this.__cssProb] = e + "px", t.position = e
            }
        }, t.__updateViewList = function() {
            if (this.normalMode) this.viewSlidesList = this.slides;
            else {
                var t = this.viewSlidesList.slice();
                this.viewSlidesList = [];
                var i, e = 0,
                    s = Math.floor(this.options.viewNum / 2);
                if (this.loop)
                    for (; e !== this.options.viewNum; e++) this.viewSlidesList.push(this.slides[this.currentSlideLoc - s + e]);
                else {
                    for (e = 0; e !== s && this.index - e != -1; e++) this.viewSlidesList.unshift(this.slideList[this.index - e]);
                    for (e = 1; e !== s && this.index + e !== this.slidesCount; e++) this.viewSlidesList.push(this.slideList[this.index + e])
                }
                for (e = 0, i = t.length; e !== i; e++) - 1 === this.viewSlidesList.indexOf(t[e]) && (t[e].sleep(), t[e].$frame.detach());
                t = null
            }
        }, t.__locateSlides = function(t, i) {
            this.__updateViewList(), i = this.loop ? i || 0 : this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing);
            for (var e, s = this.viewSlidesList.length, n = 0; n !== s; n++) {
                var o = i + n * (this[this.__dimension] + this.spacing);
                if (e = this.viewSlidesList[n], this.$slideCont.append(e.$frame), e.wakeup(!1), e.position = o, e.selected && e.bgvideo) try {
                    e.bgvideo.play()
                } catch (t) {}
                e.$frame[0].style[this.__cssProb] = o + "px"
            }!1 !== t && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
        }, MSSlideController.registerView("mask", MSMaskView)
    }(jQuery),
    function(t) {
        "use strict";
        window.MSParallaxMaskView = function(t) {
            MSMaskView.call(this, t), this.$element.removeClass("ms-basic-view").addClass("ms-parallax-mask-view")
        }, MSParallaxMaskView.extend(MSMaskView), MSParallaxMaskView.parallaxAmount = .5;
        var i = MSParallaxMaskView.prototype,
            s = MSBasicView.prototype;
        i._horizUpdate = function(t, i) {
            s._horizUpdate.call(this, t, i);
            var e = 0;
            if (this.css3)
                for (e = 0; e < this.slidesCount; ++e) this.slideList[e].$element[0].style[window._jcsspfx + "Transform"] = "translateX(" + (i - this.slideList[e].position) * MSParallaxMaskView.parallaxAmount + "px)" + this.__translate_end;
            else
                for (e = 0; e < this.slidesCount; ++e) this.slideList[e].$element[0].style.left = (i - this.slideList[e].position) * MSParallaxMaskView.parallaxAmount + "px"
        }, i._vertiUpdate = function(t, i) {
            s._vertiUpdate.call(this, t, i);
            var e = 0;
            if (this.css3)
                for (e = 0; e < this.slidesCount; ++e) this.slideList[e].$element[0].style[window._jcsspfx + "Transform"] = "translateY(" + (i - this.slideList[e].position) * MSParallaxMaskView.parallaxAmount + "px)" + this.__translate_end;
            else
                for (e = 0; e < this.slidesCount; ++e) this.slideList[e].$element[0].style.top = (i - this.slideList[e].position) * MSParallaxMaskView.parallaxAmount + "px"
        }, MSSlideController.registerView("parallaxMask", MSParallaxMaskView)
    }(jQuery),
    function(t) {
        "use strict";
        window.MSFadeView = function(t) {
            MSBasicView.call(this, t), this.$element.removeClass("ms-basic-view").addClass("ms-fade-view"), this.controller.renderCallback(this.__update, this)
        }, MSFadeView.extend(MSBasicView);
        var i = MSFadeView.prototype,
            e = MSBasicView.prototype;
        i.__update = function(t, i) {
            for (var e, s, n = -i, o = 0; o < this.slidesCount; ++o) s = -n - (e = this.slideList[o]).position, this.__updateSlides(e, s)
        }, i.__updateSlides = function(t, i) {
            var e = Math.abs(i / this[this.__dimension]);
            1 - e <= 0 ? t.$element.fadeTo(0, 0).css("visibility", "hidden") : t.$element.fadeTo(0, 1 - e).css("visibility", "")
        }, i.__locateSlides = function(t, i) {
            this.__updateViewList(), i = this.loop ? i || 0 : this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing);
            for (var e, s = this.viewSlidesList.length, n = 0; n !== s; n++) {
                var o = i + n * this[this.__dimension];
                (e = this.viewSlidesList[n]).wakeup(), e.position = o
            }!1 !== t && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
        }, i.__pushEnd = function() {
            var t = this.slides.shift(),
                i = this.slides[this.slidesCount - 2];
            this.slides.push(t), t.position = i.position + this[this.__dimension]
        }, i.__pushStart = function() {
            var t = this.slides.pop(),
                i = this.slides[0];
            this.slides.unshift(t), t.position = i.position - this[this.__dimension]
        }, i.create = function(t) {
            e.create.call(this, t), this.spacing = 0, this.controller.options.minValidDist = 10
        }, MSSlideController.registerView("fade", MSFadeView)
    }(jQuery),
    function(t) {
        "use strict";
        window.MSScaleView = function(t) {
            MSBasicView.call(this, t), this.$element.removeClass("ms-basic-view").addClass("ms-scale-view"), this.controller.renderCallback(this.__update, this)
        }, MSScaleView.extend(MSFadeView);
        var i = MSScaleView.prototype,
            e = MSFadeView.prototype;
        i.__updateSlides = function(t, i) {
            var e = Math.abs(i / this[this.__dimension]),
                s = t.$element[0];
            1 - e <= 0 ? (s.style.opacity = 0, s.style.visibility = "hidden", s.style[window._jcsspfx + "Transform"] = "") : (s.style.opacity = 1 - e, s.style.visibility = "", s.style[window._jcsspfx + "Transform"] = "perspective(2000px) translateZ(" + e * (i < 0 ? -.5 : .5) * 300 + "px)")
        }, i.create = function(t) {
            e.create.call(this, t), this.controller.options.minValidDist = .03
        }, MSSlideController.registerView("scale", MSScaleView)
    }(jQuery),
    function(t) {
        "use strict";
        window.MSStackView = function(t) {
            MSBasicView.call(this, t), this.$element.removeClass("ms-basic-view").addClass("ms-stack-view"), this.controller.renderCallback(this.__update, this), this.autoUpdateZIndex = !0
        }, MSStackView.extend(MSFadeView), MSStackView._3dreq = !0, MSStackView._fallback = MSFadeView;
        var i = MSStackView.prototype,
            e = MSFadeView.prototype;
        i.__updateSlidesZindex = function() {
            for (var t = this.viewSlidesList.length, i = 0; i !== t; i++) this.viewSlidesList[i], this.viewSlidesList[i].$element.css("z-index", t - i)
        }, i.__updateSlides = function(t, i) {
            var e = Math.abs(i / this[this.__dimension]),
                s = t.$element[0];
            1 - e <= 0 ? (s.style.opacity = 1, s.style.visibility = "hidden", s.style[window._jcsspfx + "Transform"] = "") : (s.style.visibility = "", s.style[window._jcsspfx + "Transform"] = i < 0 ? "perspective(2000px) translateZ(" + -300 * e + "px)" : this.__translate + "(" + -e * this[this.__dimension] + "px)")
        }, i.create = function(t) {
            e.create.call(this, t), this.controller.options.minValidDist = .03, this.__translate = "h" === this.dir ? "translateX" : "translateY"
        }, MSSlideController.registerView("stack", MSStackView)
    }(jQuery),
    function() {
        "use strict";
        window.MSFocusView = function(t) {
            MSWaveView.call(this, t), this.$element.removeClass("ms-wave-view").addClass("ms-focus-view"), this.options.centerSpace = this.options.centerSpace || 1
        }, MSFocusView.extend(MSWaveView), MSFocusView._3dreq = !0, MSFocusView._fallback = MSFadeBasicView;
        var t = MSFocusView.prototype;
        MSWaveView.prototype;
        t.__calcview = function(t, i) {
            return i / 2 * t / (t + 2e3) * (t + 2e3) / 2e3
        }, t.__updateSlidesHoriz = function(t, i) {
            var e = Math.abs(100 * i / this.__width);
            e = 15 * -Math.min(e, 100), t.$element.css(window._csspfx + "transform", "translateZ(" + (e + 1) + "px) rotateY(0.01deg) translateX(" + (i < 0 ? 1 : -1) * (-this.__calcview(e, this.__width) * this.options.centerSpace) + "px)")
        }, t.__updateSlidesVertic = function(t, i) {
            var e = Math.abs(100 * i / this.__width);
            e = 15 * -Math.min(e, 100), t.$element.css(window._csspfx + "transform", "translateZ(" + (e + 1) + "px) rotateY(0.01deg) translateY(" + (i < 0 ? 1 : -1) * (-this.__calcview(e, this.__width) * this.options.centerSpace) + "px)")
        }, MSSlideController.registerView("focus", MSFocusView)
    }(),
    function() {
        window.MSPartialWaveView = function(t) {
            MSWaveView.call(this, t), this.$element.removeClass("ms-wave-view").addClass("ms-partial-wave-view")
        }, MSPartialWaveView.extend(MSWaveView), MSPartialWaveView._3dreq = !0, MSPartialWaveView._fallback = MSFadeBasicView;
        var t = MSPartialWaveView.prototype;
        MSWaveView.prototype;
        t.__updateSlidesHoriz = function(t, i) {
            var e = Math.abs(100 * i / this.__width);
            t.hasBG && t.$bg_img.css("opacity", (100 - Math.abs(120 * i / this.__width / 3)) / 100), t.$element.css(window._csspfx + "transform", "translateZ(" + 3 * -e + "px) rotateY(0.01deg) translateX(" + .75 * i + "px)")
        }, t.__updateSlidesVertic = function(t, i) {
            var e = Math.abs(100 * i / this.__width);
            t.hasBG && t.$bg_img.css("opacity", (100 - Math.abs(120 * i / this.__width / 3)) / 100), t.$element.css(window._csspfx + "transform", "translateZ(" + 3 * -e + "px) rotateY(0.01deg) translateY(" + .75 * i + "px)")
        }, MSSlideController.registerView("partialWave", MSPartialWaveView)
    }(),
    function(t) {
        "use strict";
        window.MSBoxView = function(t) {
            MSBasicView.call(this, t), this.$element.removeClass("ms-basic-view").addClass("ms-box-view"), this.controller.renderCallback(this.__update, this)
        }, MSBoxView.extend(MSFadeView), MSBoxView._3dreq = !0;
        var i = MSBoxView.prototype,
            e = MSFadeView.prototype;
        i.__updateSlides = function(t, i) {
            var e = Math.abs(i / this[this.__dimension]),
                s = t.$element[0];
            1 - e <= 0 ? (s.style.visibility = "hidden", s.style[window._jcsspfx + "Transform"] = "") : (s.style.visibility = "", s.style[window._jcsspfx + "Transform"] = "rotate" + this._rotateDir + "(" + e * (i < 0 ? 1 : -1) * 90 * this._calcFactor + "deg)", s.style[window._jcsspfx + "TransformOrigin"] = "50% 50% -" + t[this.__dimension] / 2 + "px", s.style.zIndex = Math.ceil(2 * (1 - e)))
        }, i.create = function(t) {
            e.create.call(this, t), this.controller.options.minValidDist = .03, this._rotateDir = "h" === this.options.dir ? "Y" : "X", this._calcFactor = "h" === this.options.dir ? 1 : -1
        }, MSSlideController.registerView("box", MSBoxView)
    }(jQuery),
    function(t) {
        "use strict";
        var i = function() {
                this.options = {
                    prefix: "ms-",
                    autohide: !0,
                    overVideo: !0,
                    customClass: null
                }
            },
            e = i.prototype;
        e.slideAction = function(t) {}, e.setup = function() {
            this.cont = this.options.insertTo ? t(this.options.insertTo) : this.slider.$controlsCont, this.options.overVideo || this._hideOnvideoStarts()
        }, e.checkHideUnder = function() {
            this.options.hideUnder && (this.needsRealign = !this.options.insetTo && ("left" === this.options.align || "right" === this.options.align) && !1 === this.options.inset, t(window).bind("resize", {
                that: this
            }, this.onResize), this.onResize())
        }, e.onResize = function(t) {
            var i = t && t.data.that || this,
                e = window.innerWidth;
            e <= i.options.hideUnder && !i.detached ? (i.hide(!0), i.detached = !0, i.onDetach()) : e >= i.options.hideUnder && i.detached && (i.detached = !1, i.visible(), i.onAppend())
        }, e.create = function() {
            this.options.autohide && (this.hide(!0), this.slider.$controlsCont.mouseenter(t.proxy(this._onMouseEnter, this)).mouseleave(t.proxy(this._onMouseLeave, this)).mousedown(t.proxy(this._onMouseDown, this)), this.$element && this.$element.mouseenter(t.proxy(this._onMouseEnter, this)).mouseleave(t.proxy(this._onMouseLeave, this)).mousedown(t.proxy(this._onMouseDown, this)), t(document).mouseup(t.proxy(this._onMouseUp, this))), this.options.align && this.$element.addClass("ms-align-" + this.options.align), this.options.customClass && this.$element && this.$element.addClass(this.options.customClass)
        }, e._onMouseEnter = function() {
            this._disableAH || this.mdown || this.visible(), this.mleave = !1
        }, e._onMouseLeave = function() {
            this.mdown || this.hide(), this.mleave = !0
        }, e._onMouseDown = function() {
            this.mdown = !0
        }, e._onMouseUp = function() {
            this.mdown && this.mleave && this.hide(), this.mdown = !1
        }, e.onAppend = function() {
            this.needsRealign && this.slider._realignControls()
        }, e.onDetach = function() {
            this.needsRealign && this.slider._realignControls()
        }, e._hideOnvideoStarts = function() {
            var t = this;
            this.slider.api.addEventListener(MSSliderEvent.VIDEO_PLAY, function() {
                t._disableAH = !0, t.hide()
            }), this.slider.api.addEventListener(MSSliderEvent.VIDEO_CLOSE, function() {
                t._disableAH = !1, t.visible()
            })
        }, e.hide = function(t) {
            if (t) this.$element.css("opacity", 0), this.$element.css("display", "none");
            else {
                clearTimeout(this.hideTo);
                var i = this.$element;
                this.hideTo = setTimeout(function() {
                    CTween.fadeOut(i, 400, !1)
                }, 20)
            }
            this.$element.addClass("ms-ctrl-hide")
        }, e.visible = function() {
            this.detached || (clearTimeout(this.hideTo), this.$element.css("display", ""), CTween.fadeIn(this.$element, 400, !1), this.$element.removeClass("ms-ctrl-hide"))
        }, e.destroy = function() {
            this.options && this.options.hideUnder && t(window).unbind("resize", this.onResize)
        }, window.BaseControl = i
    }(jQuery),
    function(i) {
        "use strict";
        var t = function(t) {
            BaseControl.call(this), i.extend(this.options, t)
        };
        t.extend(BaseControl);
        var e = t.prototype,
            s = BaseControl.prototype;
        e.setup = function() {
            var t = this;
            this.$next = i("<div></div>").addClass(this.options.prefix + "nav-next").bind("click", function() {
                t.slider.api.next(!0)
            }), this.$prev = i("<div></div>").addClass(this.options.prefix + "nav-prev").bind("click", function() {
                t.slider.api.previous(!0)
            }), s.setup.call(this), this.cont.append(this.$next), this.cont.append(this.$prev), this.checkHideUnder()
        }, e.hide = function(t) {
            if (t) return this.$prev.css("opacity", 0).css("display", "none"), void this.$next.css("opacity", 0).css("display", "none");
            CTween.fadeOut(this.$prev, 400, !1), CTween.fadeOut(this.$next, 400, !1), this.$prev.addClass("ms-ctrl-hide"), this.$next.addClass("ms-ctrl-hide")
        }, e.visible = function() {
            this.detached || (CTween.fadeIn(this.$prev, 400), CTween.fadeIn(this.$next, 400), this.$prev.removeClass("ms-ctrl-hide").css("display", ""), this.$next.removeClass("ms-ctrl-hide").css("display", ""))
        }, e.destroy = function() {
            s.destroy(), this.$next.remove(), this.$prev.remove()
        }, window.MSArrows = t, MSSlideController.registerControl("arrows", t)
    }(jQuery),
    function(o) {
        "use strict";
        var t = function(t) {
            BaseControl.call(this), this.options.dir = "h", this.options.wheel = "v" === t.dir, this.options.arrows = !1, this.options.speed = 17, this.options.align = null, this.options.inset = !1, this.options.margin = 10, this.options.space = 10, this.options.width = 100, this.options.height = 100, this.options.type = "thumbs", this.options.hover = !1, o.extend(this.options, t), this.thumbs = [], this.index_count = 0, this.__dimen = "h" === this.options.dir ? "width" : "height", this.__alignsize = "h" === this.options.dir ? "height" : "width", this.__jdimen = "h" === this.options.dir ? "outerWidth" : "outerHeight", this.__pos = "h" === this.options.dir ? "left" : "top", this.click_enable = !0
        };
        t.extend(BaseControl);
        var i = t.prototype,
            e = BaseControl.prototype;
        i.setup = function() {
            if (this.$element = o("<div></div>").addClass(this.options.prefix + "thumb-list"), "tabs" === this.options.type && this.$element.addClass(this.options.prefix + "tabs"), this.$element.addClass("ms-dir-" + this.options.dir), e.setup.call(this), this.slider.$controlsCont === this.cont ? this.$element.appendTo(this.slider.$element) : this.$element.appendTo(this.cont), this.$thumbscont = o("<div></div>").addClass("ms-thumbs-cont").appendTo(this.$element), this.options.arrows) {
                var t = this;
                this.$fwd = o("<div></div>").addClass("ms-thumblist-fwd").appendTo(this.$element).click(function() {
                    t.controller.push(-15)
                }), this.$bwd = o("<div></div>").addClass("ms-thumblist-bwd").appendTo(this.$element).click(function() {
                    t.controller.push(15)
                })
            }
            if (!this.options.insetTo && this.options.align) {
                var i = this.options.align;
                this.options.inset ? this.$element.css(i, this.options.margin) : "top" === i ? this.$element.detach().prependTo(this.slider.$element).css({
                    "margin-bottom": this.options.margin,
                    position: "relative"
                }) : "bottom" === i ? this.$element.css({
                    "margin-top": this.options.margin,
                    position: "relative"
                }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align()), "v" === this.options.dir ? this.$element.width(this.options.width) : this.$element.height(this.options.height)
            }
            this.checkHideUnder()
        }, i.align = function(t) {
            if (!this.detached) {
                var i = this.options.align,
                    e = this.slider.reserveSpace(i, this.options[this.__alignsize] + 2 * this.options.margin);
                this.$element.css(i, -e - this.options[this.__alignsize] - this.options.margin)
            }
        }, i.slideAction = function(t) {
            var i = t.$element.find(".ms-thumb"),
                e = this,
                s = o("<div></div>").addClass("ms-thumb-frame").append(i).append(o('<div class="ms-thumb-ol"></div>')).bind(this.options.hover ? "hover" : "click", function() {
                    e.changeSlide(s)
                });
            if (this.options.align && s.width(this.options.width - ("v" === this.options.dir && "tabs" === this.options.type ? 12 : 0)).height(this.options.height).css("margin-" + ("v" === this.options.dir ? "bottom" : "right"), this.options.space), s[0].index = this.index_count++, this.$thumbscont.append(s), this.options.fillMode && i.is("img")) {
                var n = new window.MSAligner(this.options.fillMode, s, i);
                i[0].aligner = n, i.one("load", function(t) {
                    var i = o(this);
                    i[0].aligner.init(i.width(), i.height()), i[0].aligner.align()
                }).each(o.jqLoadFix)
            }
            o.browser.msie && i.on("dragstart", function(t) {
                t.preventDefault()
            }), this.thumbs.push(s)
        }, i.create = function() {
            e.create.call(this), this.__translate_end = window._css3d ? " translateZ(0px)" : "", this.controller = new Controller(0, 0, {
                snappingMinSpeed: 2,
                friction: (100 - .5 * this.options.speed) / 100
            }), this.controller.renderCallback("h" === this.options.dir ? this._hMove : this._vMove, this);
            var s = this;
            this.resize_listener = function() {
                s.__resize()
            }, o(window).bind("resize", this.resize_listener), this.thumbSize = this.thumbs[0][this.__jdimen](!0), this.setupSwipe(), this.__resize();
            s = this;
            this.options.wheel && (this.wheellistener = function(t) {
                var i = window.event || t.orginalEvent || t,
                    e = Math.max(-1, Math.min(1, i.wheelDelta || -i.detail));
                return s.controller.push(10 * -e), !1
            }, o.browser.mozilla ? this.$element[0].addEventListener("DOMMouseScroll", this.wheellistener) : this.$element.bind("mousewheel", this.wheellistener)), this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.slider.api.addEventListener(MSSliderEvent.HARD_UPDATE, this.realignThumbs, this), this.cindex = this.slider.api.index(), this.select(this.thumbs[this.cindex])
        }, i._hMove = function(t, i) {
            this.__contPos = i, window._cssanim ? this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "translateX(" + -i + "px)" + this.__translate_end : this.$thumbscont[0].style.left = -i + "px"
        }, i._vMove = function(t, i) {
            this.__contPos = i, window._cssanim ? this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "translateY(" + -i + "px)" + this.__translate_end : this.$thumbscont[0].style.top = -i + "px"
        }, i.setupSwipe = function() {
            this.swipeControl = new averta.TouchSwipe(this.$element), this.swipeControl.swipeType = "h" === this.options.dir ? "horizontal" : "vertical";
            var i = this;
            "h" === this.options.dir ? this.swipeControl.onSwipe = function(t) {
                i.horizSwipeMove(t)
            } : this.swipeControl.onSwipe = function(t) {
                i.vertSwipeMove(t)
            }
        }, i.vertSwipeMove = function(t) {
            if (!this.dTouch) {
                var i = t.phase;
                if ("start" === i) this.controller.stop();
                else if ("move" === i) this.controller.drag(t.moveY);
                else if ("end" === i || "cancel" === i) {.1 < Math.abs(t.distanceY / t.duration * 50 / 3) ? this.controller.push(-t.distanceY / t.duration * 50 / 3) : (this.click_enable = !0, this.controller.cancel())
                }
            }
        }, i.horizSwipeMove = function(t) {
            if (!this.dTouch) {
                var i = t.phase;
                if ("start" === i) this.controller.stop(), this.click_enable = !1;
                else if ("move" === i) this.controller.drag(t.moveX);
                else if ("end" === i || "cancel" === i) {.1 < Math.abs(t.distanceX / t.duration * 50 / 3) ? this.controller.push(-t.distanceX / t.duration * 50 / 3) : (this.click_enable = !0, this.controller.cancel())
                }
            }
        }, i.update = function() {
            var t = this.slider.api.index();
            this.cindex !== t && (null != this.cindex && this.unselect(this.thumbs[this.cindex]), this.cindex = t, this.select(this.thumbs[this.cindex]), this.dTouch || this.updateThumbscroll())
        }, i.realignThumbs = function() {
            this.$element.find(".ms-thumb").each(function(t, i) {
                i.aligner && i.aligner.align()
            })
        }, i.updateThumbscroll = function() {
            var t = this.thumbSize * this.cindex;
            if (NaN == this.controller.value && (this.controller.value = 0), t - this.controller.value < 0) this.controller.gotoSnap(this.cindex, !0);
            else if (t + this.thumbSize - this.controller.value > this.$element[this.__dimen]()) {
                var i = this.cindex - Math.floor(this.$element[this.__dimen]() / this.thumbSize) + 1;
                this.controller.gotoSnap(i, !0)
            } else;
        }, i.changeSlide = function(t) {
            this.click_enable && this.cindex !== t[0].index && this.slider.api.gotoSlide(t[0].index)
        }, i.unselect = function(t) {
            t.removeClass("ms-thumb-frame-selected")
        }, i.select = function(t) {
            t.addClass("ms-thumb-frame-selected")
        }, i.__resize = function() {
            var t = this.$element[this.__dimen]();
            if (this.ls !== t) {
                this.ls = t, this.thumbSize = this.thumbs[0][this.__jdimen](!0);
                var i = this.slider.api.count() * this.thumbSize;
                this.$thumbscont[0].style[this.__dimen] = i + "px", i <= t ? (this.dTouch = !0, this.controller.stop(), this.$thumbscont[0].style[this.__pos] = .5 * (t - i) + "px", this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "") : (this.dTouch = !1, this.click_enable = !0, this.$thumbscont[0].style[this.__pos] = "", this.controller._max_value = i - t, this.controller.options.snapsize = this.thumbSize, this.updateThumbscroll())
            }
        }, i.destroy = function() {
            e.destroy(), this.options.wheel && (o.browser.mozilla ? this.$element[0].removeEventListener("DOMMouseScroll", this.wheellistener) : this.$element.unbind("mousewheel", this.wheellistener), this.wheellistener = null), o(window).unbind("resize", this.resize_listener), this.$element.remove(), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.update, this)
        }, window.MSThumblist = t, MSSlideController.registerControl("thumblist", t)
    }(jQuery),
    function(s) {
        "use strict";
        var t = function(t) {
            BaseControl.call(this), this.options.dir = "h", this.options.inset = !0, this.options.margin = 10, this.options.space = 10, s.extend(this.options, t), this.bullets = []
        };
        t.extend(BaseControl);
        var i = t.prototype,
            n = BaseControl.prototype;
        i.setup = function() {
            if (n.setup.call(this), this.$element = s("<div></div>").addClass(this.options.prefix + "bullets").addClass("ms-dir-" + this.options.dir).appendTo(this.cont), this.$bullet_cont = s("<div></div>").addClass("ms-bullets-count").appendTo(this.$element), !this.options.insetTo && this.options.align) {
                var t = this.options.align;
                this.options.inset && this.$element.css(t, this.options.margin)
            }
            this.checkHideUnder()
        }, i.create = function() {
            n.create.call(this);
            var t = this;
            this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.cindex = this.slider.api.index();
            for (var i = 0; i < this.slider.api.count(); ++i) {
                var e = s("<div></div>").addClass("ms-bullet");
                e[0].index = i, e.on("click", function() {
                    t.changeSlide(this.index)
                }), this.$bullet_cont.append(e), this.bullets.push(e), "h" === this.options.dir ? e.css("margin", this.options.space / 2) : e.css("margin", this.options.space)
            }
            "h" === this.options.dir ? this.$element.width(e.outerWidth(!0) * this.slider.api.count()) : this.$element.css("margin-top", -this.$element.outerHeight(!0) / 2), this.select(this.bullets[this.cindex])
        }, i.update = function() {
            var t = this.slider.api.index();
            this.cindex !== t && (null != this.cindex && this.unselect(this.bullets[this.cindex]), this.cindex = t, this.select(this.bullets[this.cindex]))
        }, i.changeSlide = function(t) {
            this.cindex !== t && this.slider.api.gotoSlide(t)
        }, i.unselect = function(t) {
            t.removeClass("ms-bullet-selected")
        }, i.select = function(t) {
            t.addClass("ms-bullet-selected")
        }, i.destroy = function() {
            n.destroy(), this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.$element.remove()
        }, window.MSBulltes = t, MSSlideController.registerControl("bullets", t)
    }(jQuery),
    function(i) {
        "use strict";
        var t = function(t) {
            BaseControl.call(this), this.options.dir = "h", this.options.autohide = !0, this.options.width = 4, this.options.color = "#3D3D3D", this.options.margin = 10, i.extend(this.options, t), this.__dimen = "h" === this.options.dir ? "width" : "height", this.__jdimen = "h" === this.options.dir ? "outerWidth" : "outerHeight", this.__pos = "h" === this.options.dir ? "left" : "top", this.__translate_end = window._css3d ? " translateZ(0px)" : "", this.__translate_start = "h" === this.options.dir ? " translateX(" : "translateY("
        };
        t.extend(BaseControl);
        var e = t.prototype,
            s = BaseControl.prototype;
        e.setup = function() {
            if (this.$element = i("<div></div>").addClass(this.options.prefix + "sbar").addClass("ms-dir-" + this.options.dir), s.setup.call(this), this.slider.$controlsCont === this.cont ? this.$element.appendTo(this.slider.$element) : this.$element.appendTo(this.cont), this.$bar = i("<div></div>").addClass(this.options.prefix + "bar").appendTo(this.$element), this.slider.options.loop && (console.log("WARNING, MSScrollbar cannot work with looped slider."), this.disable = !0, this.$element.remove()), "v" === this.options.dir ? this.$bar.width(this.options.width) : this.$bar.height(this.options.width), this.$bar.css("background-color", this.options.color), !this.options.insetTo && this.options.align) {
                "v" === this.options.dir ? this.$element.css({
                    right: "auto",
                    left: "auto"
                }) : this.$element.css({
                    top: "auto",
                    bottom: "auto"
                });
                var t = this.options.align;
                this.options.inset ? this.$element.css(t, this.options.margin) : "top" === t ? this.$element.prependTo(this.slider.$element).css({
                    "margin-bottom": this.options.margin,
                    position: "relative"
                }) : "bottom" === t ? this.$element.css({
                    "margin-top": this.options.margin,
                    position: "relative"
                }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align())
            }
            this.checkHideUnder()
        }, e.align = function(t) {
            if (!this.detached) {
                var i = this.options.align,
                    e = this.slider.reserveSpace(i, 2 * this.options.margin + this.options.width);
                this.$element.css(i, -e - this.options.margin - this.options.width)
            }
        }, e.create = function() {
            if (!this.disable) {
                this.scroller = this.slider.api.scroller, this.slider.api.view.addEventListener(MSViewEvents.SCROLL, this._update, this), this.slider.api.addEventListener(MSSliderEvent.RESIZE, this._resize, this), this._resize(), this.options.autohide && this.$bar.css("opacity", "0")
            }
        }, e._resize = function() {
            this.vdimen = this.$element[this.__dimen](), this.bar_dimen = this.slider.api.view["__" + this.__dimen] * this.vdimen / this.scroller._max_value, this.$bar[this.__dimen](this.bar_dimen)
        }, e._update = function() {
            var t = this.scroller.value * (this.vdimen - this.bar_dimen) / this.scroller._max_value;
            if (this.lvalue !== t) {
                if (this.lvalue = t, this.options.autohide) {
                    clearTimeout(this.hto), this.$bar.css("opacity", "1");
                    var i = this;
                    this.hto = setTimeout(function() {
                        i.$bar.css("opacity", "0")
                    }, 150)
                }
                t < 0 ? this.$bar[0].style[this.__dimen] = this.bar_dimen + t + "px" : (t > this.vdimen - this.bar_dimen && (this.$bar[0].style[this.__dimen] = this.vdimen - t + "px"), window._cssanim ? this.$bar[0].style[window._jcsspfx + "Transform"] = this.__translate_start + t + "px)" + this.__translate_end : this.$bar[0].style[this.__pos] = t + "px")
            }
        }, e.destroy = function() {
            s.destroy(), this.slider.api.view.removeEventListener(MSViewEvents.SCROLL, this._update, this), this.slider.api.removeEventListener(MSSliderEvent.RESIZE, this._resize, this), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.$element.remove()
        }, window.MSScrollbar = t, MSSlideController.registerControl("scrollbar", t)
    }(jQuery),
    function(i) {
        "use strict";
        var t = function(t) {
            BaseControl.call(this), this.options.autohide = !1, this.options.width = 4, this.options.color = "#FFFFFF", this.options.inset = !0, this.options.margin = 0, i.extend(this.options, t)
        };
        t.extend(BaseControl);
        var e = t.prototype,
            s = BaseControl.prototype;
        e.setup = function() {
            if (s.setup.call(this), this.$element = i("<div></div>").addClass(this.options.prefix + "timerbar"), s.setup.call(this), this.slider.$controlsCont === this.cont ? this.$element.appendTo(this.slider.$element) : this.$element.appendTo(this.cont), this.$bar = i("<div></div>").addClass("ms-time-bar").appendTo(this.$element), "v" === this.options.dir ? (this.$bar.width(this.options.width), this.$element.width(this.options.width)) : (this.$bar.height(this.options.width), this.$element.height(this.options.width)), this.$bar.css("background-color", this.options.color), !this.options.insetTo && this.options.align) {
                this.$element.css({
                    top: "auto",
                    bottom: "auto"
                });
                var t = this.options.align;
                this.options.inset ? this.$element.css(t, this.options.margin) : "top" === t ? this.$element.prependTo(this.slider.$element).css({
                    "margin-bottom": this.options.margin,
                    position: "relative"
                }) : "bottom" === t ? this.$element.css({
                    "margin-top": this.options.margin,
                    position: "relative"
                }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align())
            }
            this.checkHideUnder()
        }, e.align = function(t) {
            if (!this.detached) {
                var i = this.options.align,
                    e = this.slider.reserveSpace(i, 2 * this.options.margin + this.options.width);
                this.$element.css(i, -e - this.options.margin - this.options.width)
            }
        }, e.create = function() {
            s.create.call(this), this.slider.api.addEventListener(MSSliderEvent.WAITING, this._update, this), this._update()
        }, e._update = function() {
            this.$bar[0].style.width = this.slider.api._delayProgress + "%"
        }, e.destroy = function() {
            s.destroy(), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.slider.api.removeEventListener(MSSliderEvent.WAITING, this._update, this), this.$element.remove()
        }, window.MSTimerbar = t, MSSlideController.registerControl("timebar", t)
    }(jQuery),
    function(i) {
        "use strict";
        var t = function(t) {
            BaseControl.call(this), this.options.color = "#A2A2A2", this.options.stroke = 10, this.options.radius = 4, this.options.autohide = !1, i.extend(this.options, t)
        };
        t.extend(BaseControl);
        var e = t.prototype,
            s = BaseControl.prototype;
        e.setup = function() {
            if (s.setup.call(this), this.$element = i("<div></div>").addClass(this.options.prefix + "ctimer").appendTo(this.cont), this.$canvas = i("<canvas></canvas>").addClass("ms-ctimer-canvas").appendTo(this.$element), this.$bar = i("<div></div>").addClass("ms-ctimer-bullet").appendTo(this.$element), !this.$canvas[0].getContext) return this.destroy(), void(this.disable = !0);
            this.ctx = this.$canvas[0].getContext("2d"), this.prog = 0, this.__w = 2 * (this.options.radius + this.options.stroke / 2), this.$canvas[0].width = this.__w, this.$canvas[0].height = this.__w, this.checkHideUnder()
        }, e.create = function() {
            if (!this.disable) {
                s.create.call(this), this.slider.api.addEventListener(MSSliderEvent.WAITING, this._update, this);
                var t = this;
                this.$element.click(function() {
                    t.slider.api.paused ? t.slider.api.resume() : t.slider.api.pause()
                }), this._update()
            }
        }, e._update = function() {
            var t = this;
            i(this).stop(!0).animate({
                prog: .01 * this.slider.api._delayProgress
            }, {
                duration: 200,
                step: function() {
                    t._draw()
                }
            })
        }, e._draw = function() {
            this.ctx.clearRect(0, 0, this.__w, this.__w), this.ctx.beginPath(), this.ctx.arc(.5 * this.__w, .5 * this.__w, this.options.radius, 1.5 * Math.PI, 1.5 * Math.PI + 2 * Math.PI * this.prog, !1), this.ctx.strokeStyle = this.options.color, this.ctx.lineWidth = this.options.stroke, this.ctx.stroke()
        }, e.destroy = function() {
            s.destroy(), this.disable || (i(this).stop(!0), this.slider.api.removeEventListener(MSSliderEvent.WAITING, this._update, this), this.$element.remove())
        }, window.MSCircleTimer = t, MSSlideController.registerControl("circletimer", t)
    }(jQuery),
    function(i) {
        "use strict";
        window.MSLightbox = function(t) {
            BaseControl.call(this, t), this.options.autohide = !1, i.extend(this.options, t), this.data_list = []
        }, MSLightbox.fadeDuratation = 400, MSLightbox.extend(BaseControl);
        var t = MSLightbox.prototype,
            e = BaseControl.prototype;
        t.setup = function() {
            e.setup.call(this), this.$element = i("<div></div>").addClass(this.options.prefix + "lightbox-btn").appendTo(this.cont), this.checkHideUnder()
        }, t.slideAction = function(t) {
            i("<div></div>").addClass(this.options.prefix + "lightbox-btn").appendTo(t.$element).append(i(t.$element.find(".ms-lightbox")))
        }, t.create = function() {
            e.create.call(this)
        }, MSSlideController.registerControl("lightbox", MSLightbox)
    }(jQuery),
    function(e) {
        "use strict";
        window.MSSlideInfo = function(t) {
            BaseControl.call(this, t), this.options.autohide = !1, this.options.align = null, this.options.inset = !1, this.options.margin = 10, this.options.size = 100, this.options.dir = "h", e.extend(this.options, t), this.data_list = []
        }, MSSlideInfo.fadeDuratation = 400, MSSlideInfo.extend(BaseControl);
        var t = MSSlideInfo.prototype,
            i = BaseControl.prototype;
        t.setup = function() {
            if (this.$element = e("<div></div>").addClass(this.options.prefix + "slide-info").addClass("ms-dir-" + this.options.dir), i.setup.call(this), this.slider.$controlsCont === this.cont ? this.$element.appendTo(this.slider.$element) : this.$element.appendTo(this.cont), !this.options.insetTo && this.options.align) {
                var t = this.options.align;
                this.options.inset ? this.$element.css(t, this.options.margin) : "top" === t ? this.$element.prependTo(this.slider.$element).css({
                    "margin-bottom": this.options.margin,
                    position: "relative"
                }) : "bottom" === t ? this.$element.css({
                    "margin-top": this.options.margin,
                    position: "relative"
                }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align()), "v" === this.options.dir ? this.$element.width(this.options.size) : this.$element.css("min-height", this.options.size)
            }
            this.checkHideUnder()
        }, t.align = function(t) {
            if (!this.detached) {
                var i = this.options.align,
                    e = this.slider.reserveSpace(i, this.options.size + 2 * this.options.margin);
                this.$element.css(i, -e - this.options.size - this.options.margin)
            }
        }, t.slideAction = function(t) {
            var i = e(t.$element.find(".ms-info"));
            i.detach(), this.data_list[t.index] = i
        }, t.create = function() {
            i.create.call(this), this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.cindex = this.slider.api.index(), this.switchEle(this.data_list[this.cindex])
        }, t.update = function() {
            var t = this.slider.api.index();
            this.switchEle(this.data_list[t]), this.cindex = t
        }, t.switchEle = function(t) {
            if (this.current_ele) {
                this.current_ele[0].tween && this.current_ele[0].tween.stop(!0), this.current_ele[0].tween = CTween.animate(this.current_ele, MSSlideInfo.fadeDuratation, {
                    opacity: 0
                }, {
                    complete: function() {
                        this.detach(), this[0].tween = null, t.css("position", "relative")
                    },
                    target: this.current_ele
                }), t.css("position", "absolute")
            }
            this.__show(t)
        }, t.__show = function(t) {
            t.appendTo(this.$element).css("opacity", "0"), this.current_ele && t.height(Math.max(t.height(), this.current_ele.height())), clearTimeout(this.tou), this.tou = setTimeout(function() {
                CTween.fadeIn(t, MSSlideInfo.fadeDuratation), t.css("height", "")
            }, MSSlideInfo.fadeDuratation), t[0].tween && t[0].tween.stop(!0), this.current_ele = t
        }, t.destroy = function() {
            i.destroy(), clearTimeout(this.tou), this.current_ele && this.current_ele[0].tween && this.current_ele[0].tween.stop("true"), this.$element.remove(), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.update, this)
        }, MSSlideController.registerControl("slideinfo", MSSlideInfo)
    }(jQuery),
    function(e) {
        window.MSGallery = function(t, i) {
            this.id = t, this.slider = i, this.telement = e("#" + t), this.botcont = e("<div></div>").addClass("ms-gallery-botcont").appendTo(this.telement), this.thumbcont = e("<div></div>").addClass("ms-gal-thumbcont hide-thumbs").appendTo(this.botcont), this.playbtn = e("<div></div>").addClass("ms-gal-playbtn").appendTo(this.botcont), this.thumbtoggle = e("<div></div>").addClass("ms-gal-thumbtoggle").appendTo(this.botcont), i.control("thumblist", {
                insertTo: this.thumbcont,
                autohide: !1,
                dir: "h"
            }), i.control("slidenum", {
                insertTo: this.botcont,
                autohide: !1
            }), i.control("slideinfo", {
                insertTo: this.botcont,
                autohide: !1
            }), i.control("timebar", {
                insertTo: this.botcont,
                autohide: !1
            }), i.control("bullets", {
                insertTo: this.botcont,
                autohide: !1
            })
        };
        var t = MSGallery.prototype;
        t._init = function() {
            var t = this;
            this.slider.api.paused || this.playbtn.addClass("btn-pause"), this.playbtn.click(function() {
                t.slider.api.paused ? (t.slider.api.resume(), t.playbtn.addClass("btn-pause")) : (t.slider.api.pause(), t.playbtn.removeClass("btn-pause"))
            }), this.thumbtoggle.click(function() {
                t.vthumbs ? (t.thumbtoggle.removeClass("btn-hide"), t.vthumbs = !1, t.thumbcont.addClass("hide-thumbs")) : (t.thumbtoggle.addClass("btn-hide"), t.thumbcont.removeClass("hide-thumbs"), t.vthumbs = !0)
            })
        }, t.setup = function() {
            var t = this;
            e(document).ready(function() {
                t._init()
            })
        }
    }(jQuery),
    function(d) {
        var e = function(t, i, e, s, n, o) {
            return "_o" === n && o ? o.url_o : "https://farm" + t + ".staticflickr.com/" + i + "/" + e + "_" + s + n + ".jpg"
        };
        window.MSFlickrV2 = function(t, i) {
            var e = {
                count: 10,
                type: "photoset",
                thumbSize: "q",
                imgSize: "c"
            };
            if (this.slider = t, this.slider.holdOn(), i.key) {
                d.extend(e, i), this.options = e;
                var s, n, o, a, r, h, l = this;
                "photoset" === this.options.type ? d.getJSON((a = this.options.key, r = this.options.id, h = this.options.count, "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" + a + "&photoset_id=" + r + "&per_page=" + h + "&extras=url_o,description,date_taken,owner_name,views&format=json&jsoncallback=?"), function(t) {
                    l._photosData(t)
                }) : d.getJSON((s = this.options.key, n = this.options.id, o = this.options.count, "https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=" + s + "&user_id=" + n + "&per_page=" + o + "&extras=url_o,description,date_taken,owner_name,views&format=json&jsoncallback=?"), function(t) {
                    l.options.type = "photos", l._photosData(t)
                }), "" !== this.options.imgSize && "-" !== this.options.imgSize && (this.options.imgSize = "_" + this.options.imgSize), this.options.thumbSize = "_" + this.options.thumbSize, this.slideTemplate = this.slider.$element.find(".ms-slide")[0].outerHTML, this.slider.$element.find(".ms-slide").remove()
            } else this.errMsg("Flickr API Key required. Please add it in settings.")
        };
        var t = MSFlickrV2.prototype;
        t._photosData = function(t) {
            if ("fail" !== t.stat) {
                var s = this;
                this.options.author || this.options.desc;
                d.each(t[this.options.type].photo, function(t, i) {
                    var e = s.slideTemplate.replace(/{{[\w-]+}}/g, function(t) {
                        return t = t.replace(/{{|}}/g, ""), n[t] ? n[t](i, s) : "{{" + t + "}}"
                    });
                    d(e).appendTo(s.slider.$element)
                }), s._initSlider()
            } else this.errMsg("Flickr API ERROR#" + t.code + ": " + t.message)
        }, t.errMsg = function(t) {
            this.slider.$element.css("display", "block"), this.errEle || (this.errEle = d('<div style="font-family:Arial; color:red; font-size:12px; position:absolute; top:10px; left:10px"></div>').appendTo(this.slider.$loading)), this.errEle.html(t)
        }, t._initSlider = function() {
            this.slider.release()
        };
        var n = {
            image: function(t, i) {
                return e(t.farm, t.server, t.id, t.secret, i.options.imgSize, t)
            },
            thumb: function(t, i) {
                return e(t.farm, t.server, t.id, t.secret, i.options.thumbSize)
            },
            title: function(t, i) {
                return t.title
            },
            "owner-name": function(t, i) {
                return t.ownername
            },
            "date-taken": function(t, i) {
                return t.datetaken
            },
            views: function(t, i) {
                return t.views
            },
            description: function(t, i) {
                return t.description._content
            }
        }
    }(jQuery),
    function(o) {
        window.MSFacebookGallery = function(t, i) {
            var e = {
                count: 10,
                type: "photostream",
                thumbSize: "320",
                imgSize: "orginal",
                https: !1,
                token: ""
            };
            this.slider = t, this.slider.holdOn(), o.extend(e, i), this.options = e, this.graph = "https://graph.facebook.com";
            var s = this;
            "photostream" === this.options.type ? o.getJSON(this.graph + "/" + this.options.username + "/photos/uploaded/?fields=source,name,link,images,from&limit=" + this.options.count + "&access_token=" + this.options.token, function(t) {
                s._photosData(t)
            }) : o.getJSON(this.graph + "/" + this.options.albumId + "/photos?fields=source,name,link,images,from&limit=" + this.options.count + "&access_token=" + this.options.token, function(t) {
                s._photosData(t)
            }), this.slideTemplate = this.slider.$element.find(".ms-slide")[0].outerHTML, this.slider.$element.find(".ms-slide").remove()
        };
        var t = MSFacebookGallery.prototype;
        t._photosData = function(i) {
            if (i.error) this.errMsg("Facebook API ERROR#" + i.error.code + "(" + i.error.type + "): " + i.error.message);
            else {
                for (var e = this, s = (this.options.author || this.options.desc, 0), t = i.data.length; s !== t; s++) {
                    var n = e.slideTemplate.replace(/{{[\w-]+}}/g, function(t) {
                        return t = t.replace(/{{|}}/g, ""), a[t] ? a[t](i.data[s], e) : "{{" + t + "}}"
                    });
                    o(n).appendTo(e.slider.$element)
                }
                e._initSlider()
            }
        }, t.errMsg = function(t) {
            this.slider.$element.css("display", "block"), this.errEle || (this.errEle = o('<div style="font-family:Arial; color:red; font-size:12px; position:absolute; top:10px; left:10px"></div>').appendTo(this.slider.$loading)), this.errEle.html(t)
        }, t._initSlider = function() {
            this.slider.release()
        };
        var e = function(t, i) {
                if ("orginal" === i) return t[0].source;
                for (var e = 0, s = t.length; e !== s; e++)
                    if (-1 !== t[e].source.indexOf(i + "x" + i)) return t[e].source;
                return t[0].source
            },
            a = {
                image: function(t, i) {
                    return e(t.images, i.options.imgSize)
                },
                thumb: function(t, i) {
                    return e(t.images, i.options.thumbSize)
                },
                name: function(t, i) {
                    return t.name
                },
                "owner-name": function(t, i) {
                    return t.from.name
                },
                link: function(t, i) {
                    return t.link
                }
            }
    }(jQuery),
    function(r) {
        "use strict";
        window.MSScrollParallax = function(t, i, e, s) {
            this.fade = s, this.slider = t, this.parallax = i / 100, this.bgparallax = e / 100, t.api.addEventListener(MSSliderEvent.INIT, this.init, this), t.api.addEventListener(MSSliderEvent.DESTROY, this.destory, this), t.api.addEventListener(MSSliderEvent.CHANGE_END, this.resetLayers, this), t.api.addEventListener(MSSliderEvent.CHANGE_START, this.updateCurrentSlide, this)
        }, window.MSScrollParallax.setup = function(t, i, e, s) {
            if (!window._mobile) return null == i && (i = 50), null == e && (e = 40), new MSScrollParallax(t, i, e, s)
        };
        var t = window.MSScrollParallax.prototype;
        t.init = function(t) {
            this.slider.$element.addClass("ms-scroll-parallax"), this.sliderOffset = this.slider.$element.offset().top, this.updateCurrentSlide();
            for (var i, e = this.slider.api.view.slideList, s = 0, n = e.length; s !== n; s++)(i = e[s]).hasLayers && (i.layerController.$layers.wrap('<div class="ms-scroll-parallax-cont"></div>'), i.$scrollParallaxCont = i.layerController.$layers.parent());
            r(window).on("scroll", {
                that: this
            }, this.moveParallax).trigger("scroll")
        }, t.resetLayers = function(t) {
            if (this.lastSlide) {
                var i = this.lastSlide.$scrollParallaxCont;
                window._css2d ? (i && (i[0].style[window._jcsspfx + "Transform"] = ""), this.lastSlide.hasBG && (this.lastSlide.$imgcont[0].style[window._jcsspfx + "Transform"] = "")) : (i && (i[0].style.top = ""), this.lastSlide.hasBG && (this.lastSlide.$imgcont[0].style.top = "0px"))
            }
        }, t.updateCurrentSlide = function(t) {
            this.lastSlide = this.currentSlide, this.currentSlide = this.slider.api.currentSlide, this.moveParallax({
                data: {
                    that: this
                }
            })
        }, t.moveParallax = function(t) {
            var i = t.data.that,
                e = i.slider,
                s = i.sliderOffset,
                n = r(window).scrollTop(),
                o = i.currentSlide.$scrollParallaxCont,
                a = s - n;
            a <= 0 ? (o && (window._css3d ? o[0].style[window._jcsspfx + "Transform"] = "translateY(" + -a * i.parallax + "px) translateZ(0.4px)" : window._css2d ? o[0].style[window._jcsspfx + "Transform"] = "translateY(" + -a * i.parallax + "px)" : o[0].style.top = -a * i.parallax + "px"), i.updateSlidesBG(-a * i.bgparallax + "px", !0), o && i.fade && o.css("opacity", 1 - Math.min(1, -a / e.api.height))) : (o && (window._css2d ? o[0].style[window._jcsspfx + "Transform"] = "" : o[0].style.top = ""), i.updateSlidesBG("0px", !1), o && i.fade && o.css("opacity", 1))
        }, t.updateSlidesBG = function(t, i) {
            for (var e = this.slider.api.view.slideList, s = !i || r.browser.msie || r.browser.opera ? "" : "fixed", n = 0, o = e.length; n !== o; n++) e[n].hasBG && (e[n].$imgcont[0].style.position = s, e[n].$imgcont[0].style.top = t), e[n].$bgvideocont && (e[n].$bgvideocont[0].style.position = s, e[n].$bgvideocont[0].style.top = t)
        }, t.destory = function() {
            slider.api.removeEventListener(MSSliderEvent.INIT, this.init, this), slider.api.removeEventListener(MSSliderEvent.DESTROY, this.destory, this), slider.api.removeEventListener(MSSliderEvent.CHANGE_END, this.resetLayers, this), slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.updateCurrentSlide, this), r(window).off("scroll", this.moveParallax)
        }
    }(jQuery),
    function(t, i, e) {
        var s = 0;
        if (e.MasterSlider) {
            var n = function(t) {
                this.slider = t, this.PId = s++, this.slider.options.keyboard && t.api.addEventListener(MSSliderEvent.INIT, this.init, this)
            };
            n.name = "MSKeyboardNav";
            var o = n.prototype;
            o.init = function() {
                var e = this.slider.api;
                t(i).on("keydown.kbnav" + this.PId, function(t) {
                    var i = t.which;
                    37 === i || 40 === i ? e.previous(!0) : 38 !== i && 39 !== i || e.next(!0)
                })
            }, o.destroy = function() {
                t(i).off("keydown.kbnav" + this.PId), this.slider.api.removeEventListener(MSSliderEvent.INIT, this.init, this)
            }, MasterSlider.registerPlugin(n)
        }
    }(jQuery, document, window),
    function(i, t, e) {
        var s = 0,
            n = i(e),
            o = i(t);
        if (e.MasterSlider) {
            var a = function(t) {
                this.PId = s++, this.slider = t, this.$slider = t.$element, this.slider.options.startOnAppear && (t.holdOn(), o.ready(i.proxy(this.init, this)))
            };
            a.name = "MSStartOnAppear";
            var r = a.prototype;
            r.init = function() {
                this.slider.api;
                n.on("scroll.soa" + this.PId, i.proxy(this._onScroll, this)).trigger("scroll")
            }, r._onScroll = function() {
                var t = n.scrollTop() + n.height();
                this.$slider.offset().top < t && (n.off("scroll.soa" + this.PId), this.slider.release())
            }, r.destroy = function() {}, MasterSlider.registerPlugin(a)
        }
    }(jQuery, document, window),
    function(t, i, e) {
        var s = {
                "hue-rotate": "deg",
                blur: "px"
            },
            n = {
                opacity: 1,
                contrast: 1,
                brightness: 1,
                saturate: 1,
                "hue-rotate": 0,
                invert: 0,
                sepia: 0,
                blur: 0,
                grayscale: 0
            };
        if (i.MasterSlider) {
            var o = function(t) {
                this.slider = t, this.slider.options.filters && t.api.addEventListener(MSSliderEvent.INIT, this.init, this)
            };
            o.name = "MSFilters";
            var a = o.prototype;
            a.init = function() {
                var t = this.slider.api.view;
                this.filters = this.slider.options.filters, this.slideList = t.slideList, this.slidesCount = t.slidesCount, this.dimension = t[t.__dimension], this.target = "slide" === this.slider.options.filterTarget ? "$element" : "$bg_img", this.filterName = $.browser.webkit ? "WebkitFilter" : "filter";
                var e = t.controller.__renderHook.fun,
                    s = t.controller.__renderHook.ref;
                t.controller.renderCallback(function(t, i) {
                    e.call(s, t, i), this.applyEffect(i)
                }, this), this.applyEffect(t.controller.value)
            }, a.applyEffect = function(t) {
                for (var i, e, s = 0; s < this.slidesCount; ++s) e = this.slideList[s], i = Math.min(1, Math.abs(t - e.position) / this.dimension), e[this.target] && ($.browser.msie ? null != this.filters.opacity && e[this.target].opacity(1 - this.filters.opacity * i) : e[this.target][0].style[this.filterName] = this.generateStyle(i))
            }, a.generateStyle = function(t) {
                var i = "";
                for (var e in this.filters) s[e] || "", i += e + "(" + (n[e] + (this.filters[e] - n[e]) * t) + ") ";
                return i
            }, a.destroy = function() {
                this.slider.api.removeEventListener(MSSliderEvent.INIT, this.init, this)
            }, MasterSlider.registerPlugin(o)
        }
    }(document, window, jQuery),
    function(e, t, i) {
        if (window.MasterSlider) {
            var s = function(t) {
                (this.slider = t).api.addEventListener(MSSliderEvent.INIT, this.init, this)
            };
            s.name = "MSScrollToAction";
            var n = s.prototype;
            n.init = function() {
                var t = this.slider.api;
                t.scrollToEnd = a, t.scrollTo = o
            }, n.destroy = function() {};
            var o = function(t, i) {
                    this.slider.$element;
                    0 !== (t = e(t).eq(0)).length && (console.log(t.offset().top, i), null == i && (i = 1.4), e("html, body").animate({
                        scrollTop: t.offset().top
                    }, 1e3 * i, "easeInOutQuad"))
                },
                a = function(t) {
                    var i = this.slider.$element;
                    null == t && (t = 1.4), e("html, body").animate({
                        scrollTop: i.offset().top + i.outerHeight(!1)
                    }, 1e3 * t, "easeInOutQuad")
                };
            MasterSlider.registerPlugin(s)
        }
    }(jQuery, document),
    function(t, i, e, s) {
        "use strict";
        if (i.MSReady)
            for (var n = 0, o = MSReady.length; n !== o; n++) MSReady[n].call(null, t)
    }(jQuery, window, document);