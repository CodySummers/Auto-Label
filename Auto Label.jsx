var panelGlobal = this;
var palette = (function () {

    //JSON
    "object" != typeof JSON && (JSON = {}), function () { "use strict"; function f(t) { return t < 10 ? "0" + t : t } var cx, escapable, gap, indent, meta, rep; function quote(t) { return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function (t) { var e = meta[t]; return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + t + '"' } function str(t, e) { var n, r, o, f, u, i = gap, p = e[t]; switch (p && "object" == typeof p && "function" == typeof p.toJSON && (p = p.toJSON(t)), "function" == typeof rep && (p = rep.call(e, t, p)), typeof p) { case "string": return quote(p); case "number": return isFinite(p) ? String(p) : "null"; case "boolean": case "null": return String(p); case "object": if (!p) return "null"; if (gap += indent, u = [], "[object Array]" === Object.prototype.toString.apply(p)) { for (f = p.length, n = 0; n < f; n += 1)u[n] = str(n, p) || "null"; return o = 0 === u.length ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + i + "]" : "[" + u.join(",") + "]", gap = i, o } if (rep && "object" == typeof rep) for (f = rep.length, n = 0; n < f; n += 1)"string" == typeof rep[n] && (o = str(r = rep[n], p)) && u.push(quote(r) + (gap ? ": " : ":") + o); else for (r in p) Object.prototype.hasOwnProperty.call(p, r) && (o = str(r, p)) && u.push(quote(r) + (gap ? ": " : ":") + o); return o = 0 === u.length ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + i + "}" : "{" + u.join(",") + "}", gap = i, o } } "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () { return this.valueOf() }), "function" != typeof JSON.stringify && (escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify = function (t, e, n) { var r; if (gap = "", indent = "", "number" == typeof n) for (r = 0; r < n; r += 1)indent += " "; else "string" == typeof n && (indent = n); if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify"); return str("", { "": t }) }), "function" != typeof JSON.parse && (cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, JSON.parse = function (text, reviver) { var j; function walk(t, e) { var n, r, o = t[e]; if (o && "object" == typeof o) for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (void 0 !== (r = walk(o, n)) ? o[n] = r : delete o[n]); return reviver.call(t, e, o) } if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j; throw new SyntaxError("JSON.parse") }) }();

    //Default Settings
    var settings = '{"composition":{"name":"Compostion","colour":"Comp Label Index 2","properties":{"matte":{"name":"Matte","colour":"Comp Label Index 2"},"parented":{"name":"Parented","colour":"Comp Label Index 2"},"child":{"name":"Child","colour":"Comp Label Index 2"},"parentChild":{"name":"Parent and Child","colour":"Comp Label Index 2"}}},"video":{"name":"Video","colour":"Video Label Index 2","properties":{"matte":{"name":"Matte","colour":"Video Label Index 2"},"parented":{"name":"Parented","colour":"Video Label Index 2"},"child":{"name":"Child","colour":"Video Label Index 2"},"parentChild":{"name":"Parent and Child","colour":"Video Label Index 2"}}},"still":{"name":"Still","colour":"Still Label Index 2","properties":{"matte":{"name":"Matte","colour":"Still Label Index 2"},"parented":{"name":"Parented","colour":"Still Label Index 2"},"child":{"name":"Child","colour":"Still Label Index 2"},"parentChild":{"name":"Parent and Child","colour":"Still Label Index 2"}}},"nullLayer":{"name":"Null","colour":"Null Label Index","properties":{"matte":{"name":"Matte","colour":"Null Label Index"},"parented":{"name":"Parented","colour":"Null Label Index"},"child":{"name":"Child","colour":"Null Label Index"},"parentChild":{"name":"Parent and Child","colour":"Null Label Index"}}},"solid":{"name":"Solid","colour":"Solid Label Index 2","properties":{"matte":{"name":"Matte","colour":"Solid Label Index 2"},"parented":{"name":"Parented","colour":"Solid Label Index 2"},"child":{"name":"Child","colour":"Solid Label Index 2"},"parentChild":{"name":"Parent and Child","colour":"Solid Label Index 2"}}},"camera":{"name":"Camera","colour":"Camera Label Index 2","properties":{"matte":{"name":"Matte","colour":"Camera Label Index 2"},"parented":{"name":"Parented","colour":"Camera Label Index 2"},"child":{"name":"Child","colour":"Camera Label Index 2"},"parentChild":{"name":"Parent and Child","colour":"Camera Label Index 2"}}},"light":{"name":"Light","colour":"Light Label Index 2","properties":{"matte":{"name":"Matte","colour":"Light Label Index 2"},"parented":{"name":"Parented","colour":"Light Label Index 2"},"child":{"name":"Child","colour":"Light Label Index 2"},"parentChild":{"name":"Parent and Child","colour":"Light Label Index 2"}}},"shape":{"name":"Shape","colour":"Shape Label Index 2","properties":{"matte":{"name":"Matte","colour":"Shape Label Index 2"},"parented":{"name":"Parented","colour":"Shape Label Index 2"},"child":{"name":"Child","colour":"Shape Label Index 2"},"parentChild":{"name":"Parent and Child","colour":"Shape Label Index 2"}}},"adjustment":{"name":"Adjustment","colour":"Adjustment Label Index 2","properties":{"matte":{"name":"Matte","colour":"Adjustment Label Index 2"},"parented":{"name":"Parented","colour":"Adjustment Label Index 2"},"child":{"name":"Child","colour":"Adjustment Label Index 2"},"parentChild":{"name":"Parent and Child","colour":"Adjustment Label Index 2"}}},"text":{"name":"Text","colour":"Text Label Index","properties":{"matte":{"name":"Matte","colour":"Text Label Index"},"parented":{"name":"Parented","colour":"Text Label Index"},"child":{"name":"Child","colour":"Text Label Index"},"parentChild":{"name":"Parent and Child","colour":"Text Label Index"}}}}'

    //Load Settings
    var scriptName = "Auto Label";
    var keyName = "Settings";

    if (app.settings.haveSetting(scriptName, keyName)) {
        settings = app.settings.getSetting(scriptName, keyName);
        settings = JSON.parse(settings);
    } else {
        settings = JSON.parse(settings);
    }

    //Perferences for label colours can't use normal app.preferences.getPrefAs method as it returns corrupt characters 
    var prefFile = File("C:/Users/grego/AppData/Roaming/Adobe/After Effects/17.6/Adobe After Effects 17.6 Prefs-indep-general.txt");

    //Load file and put into a variable 
    prefFile.open("r");
    var prefString = prefFile.read();
    prefFile.close();

    //Object to get all the different label settings needed
    var labels = {
        colourID: function (num, str) { return 'Label ' + str + ' ID 2 # ' + num.toString() },
        colourName: function (num) { return app.preferences.getPrefAsString("Label Preference Text Section 7", this.colourID(num, "Text"), PREFType.PREF_Type_MACHINE_INDEPENDENT) },
        colourHex: function (num) { return getHex('"' + this.colourID(num, "Color") + '" = ', "decoded"); },
        colourRGB: function (num) { return hexToRGB(this.colourHex(num)) },
        colourHexEncoded: function (num) { return getHex('"' + this.colourID(num, "Color") + '" = ', "encoded"); },
        propertyColour: function (str) { return app.preferences.getPrefAsString("Label Preference Indices Section 5", str, PREFType.PREF_Type_MACHINE_INDEPENDENT); },
        propertyColourName: function (str) { return this.colourName(this.propertyColour(str)); },
        propertyColourHex: function (str) { return this.colourHex(this.propertyColour(str)) },
        propertyColourRGB: function (str) { return this.colourRGB(this.propertyColour(str)) }
    };

    //Images for UI
    var arrowDown_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0D%00%00%00%08%08%06%00%00%00%22%26u%C3%8F%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%00MIDAT%18%C2%95c%C3%B8%C3%BF%C3%BF%3F%08%1B%C3%BC%C3%BF%C3%BF%7F%02%C2%94%C2%8D%0B'%401%03L%C3%81%C2%87%C3%BF%10%C2%B0%00%C2%8F%06%18p%C3%80%26%C2%88%C2%AE%11C%0E%C2%AF%24.%C3%83%C3%B09%C3%A3%00.%C3%9B%09%C2%B9%1F%C2%9Bs%C2%B1jB%C3%96%C2%885%60%C3%B0%051(%1A0%C3%85%C3%BF%C3%BFg%00%00W%C2%8AUe%19%3CAZ%00%00%00%00IEND%C2%AEB%60%C2%82";
    var arrowRight_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%08%00%00%00%0D%08%06%00%00%00%C2%94%C3%82%2F8%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%00MIDAT%18%C2%95c%C3%B8%C3%BF%C3%BF%3F%08%2B%40i%0C%0C%22%0C%C3%BE%C3%BF%C3%BF%C3%BF%C3%A1%C3%BF%C3%BF%C3%BF%0Bp)%08%C3%B8%C2%8F%00%18%C2%8A%60%C2%8C%04%5C%C2%8A%C2%90UcU%C2%84n'%C2%86%22l.%07I%C3%80%40%02I%26%C3%A0u%03%5E_%10%0C%07%C2%82!%C2%89%3B.%C3%BE%C3%BFg%00%00%C2%AE%3DUf%C2%8C%C2%B4%00%C3%A9%00%00%00%00IEND%C2%AEB%60%C2%82";

    //Colour Window, generated in an onclick function
    var window;

    //Main UI
    var palette = (panelGlobal instanceof Panel) ? panelGlobal : new Window("palette", undefined, undefined, { resizeable: true });
    if (!(panelGlobal instanceof Panel)) palette.text = "Auto Label";
    palette.orientation = "column";
    //palette.alignChildren = ["fill", "top"];
    palette.spacing = 10;

    //Panel for scroll bar, use margins to make room on the right for it    
    var scrollPanel = palette.add("panel");
    scrollPanel.maximumSize.width = 240;
    scrollPanel.minimumSize.width = 230;
    scrollPanel.margins = [10, 10, 40, 10]; //Give extra margin for scroll bar

    //Group sits in panel and moves    
    var scrollGroup = scrollPanel.add("group");
    scrollGroup.orientation = "column";
    scrollGroup.alignChildren = ["fill", "center"];
    scrollGroup.maximumSize.height = 10000; //So more buttons etc will fit
    scrollGroup.margins = 10;

    //Scrollbar
    var scrollBar = scrollPanel.add('scrollbar');
    scrollBar.onChanging = function () {
        scrollGroup.location.y = -this.value;
    }

    for (var i in settings) {
        addHeader(settings[i]);
    }

    function addHeader(headerSettings) {

        //Head and Properties group
        var group = scrollGroup.add("group");
        group.orientation = "column";
        group.alignChildren = ["fill", "center"]

        //Header    
        var header = group.add("group");
        header.orientation = "row";
        header.alignChildren = ["left", "center"];
        header.addEventListener('click', function () { expandGroup(this) });

        //Arrow
        var arrowGroup = header.add("group");
        arrowGroup.minimumSize.width = 15;
        var arrow = arrowGroup.add("image", undefined, File.decode(arrowRight_imgString));
        var arrowClicked = false;

        //Headertext
        var headerText = header.add("statictext", undefined, undefined);
        headerText.text = headerSettings.name;
        headerText.addEventListener('click', function () { expandGroup(this.parent) });

        //Header Colour    
        var headerColour = header.add("group")
        headerColour.graphics.backgroundColor = headerColour.graphics.newBrush(headerColour.graphics.BrushType.SOLID_COLOR, labels.propertyColourRGB(headerSettings.colour));
        headerColour.alignment = ["right", "centre"];
        headerColour.maximumSize = [25, 25];
        headerColour.minimumSize = [25, 25];
        headerColour.helpTip = "Change this colour in preferences\n then restart this script."

        //Property Group    
        var propertyGroup = group.add("group", undefined);
        propertyGroup.orientation = "column";
        propertyGroup.alignChildren = ["fill", "centre"];
        propertyGroup.maximumSize.height = 0;
        propertyGroup.margins = 5;
        propertyGroup.spacing = 15;

        for (i in headerSettings.properties) {
            addProperties(headerSettings.properties[i]);
        }


        function addProperties(propertySettings) {

            //Property
            var properties = propertyGroup.add("group", undefined);
            properties.orientation = "row";
            properties.margins = [25, 0, 0, 0];

            //Property Colour    
            var propertyColour = properties.add("group")
            var stringIntColour = (typeof propertySettings.colour == "string") ? labels.propertyColourRGB(propertySettings.colour) : labels.colourRGB(propertySettings.colour);
            propertyColour.graphics.backgroundColor = propertyColour.graphics.newBrush(propertyColour.graphics.BrushType.SOLID_COLOR, stringIntColour);
            propertyColour.maximumSize = [25, 25];
            propertyColour.minimumSize = [25, 25];
            propertyColour.addEventListener('click', function (mouse) {
                newWindow(propertySettings, this, mouse);
            });

            //Property Name    
            var propertiesText = properties.add("statictext", undefined, undefined, { name: "statictext2" });
            propertiesText.text = propertySettings.name;
            propertiesText.addEventListener('click', function () {
                newWindow(propertySettings, this.parent.children[0], mouse);
            });

        }

        function expandGroup(clickedHeader) {

            if (arrowClicked == false) {
                clickedHeader.children[0].remove(0);
                arrow = clickedHeader.children[0].add("image", undefined, File.decode(arrowDown_imgString));
                clickedHeader.parent.children[1].maximumSize.height = 1000;
                arrowClicked = true;

            } else {
                clickedHeader.children[0].remove(0);
                arrow = clickedHeader.children[0].add("image", undefined, File.decode(arrowRight_imgString));
                clickedHeader.parent.children[1].maximumSize.height = 0;
                arrowClicked = false;
            }

            scrollPanel.layout.layout(true); //Update panel, if update palette the windows will resize.

            scrollBarValues(); //Reset scroll bar value, without scroll bar disappears.

            var headerLocation = clickedHeader.parent.location.y;
            var headerSize = clickedHeader.size.height;
            var propGroupSize = clickedHeader.parent.children[1].size.height;
            var scrollPanelSize = scrollPanel.size.height;

            //Move scroll bar to account for opening/closing of groups
            if (headerLocation + propGroupSize - scrollBar.value > scrollPanelSize && arrowClicked == true) {
                if (scrollPanelSize >= propGroupSize + (headerSize * 3)) {
                    scrollBar.value += propGroupSize;
                    scrollGroup.location.y = -scrollBar.value;
                }
            }
            //Fixes bug if window is made small group expanded then made big again the panel would stay too big this resets it.
            if (scrollPanel.size.height > scrollGroup.size.height) {
                scrollPanel.size.height = scrollGroup.size.height;
                palette.layout.layout(true);
            }
        }

        function newWindow(propertySettings, clickedProperty, mouse) {

            //Colour Picker Window
            window = new Window("palette", undefined, undefined, { borderless: false });
            window.location = [mouse.clientX + palette.location.x, mouse.clientY + palette.location.y + clickedProperty.parent.location.y]; //Spawn window by mouse
            window.orientation = "row";
            window.alignChildren = ["fill", "center"];

            //Two Columns with same settings
            var leftGroup = window.add("group");
            var rightGroup = window.add("group");
            leftGroup.orientation = rightGroup.orientation = "column";
            leftGroup.alignChildren = rightGroup.alignChildren = ["fill", "center"];
            leftGroup.margins = rightGroup.margins = 10;
            leftGroup.spacing = rightGroup.spacing = 10;

            //Fill with colours
            for (var i = 1; i <= 16; i++) {
                var colour = labels.colourRGB(i);
                var colorRow = (i < 9) ? leftGroup.add("group") : rightGroup.add("group"); //left or right group
                var colourButtons = colorRow.add("group");
                colourButtons.number = i;
                colourButtons.graphics.backgroundColor = colourButtons.graphics.newBrush(colourButtons.graphics.BrushType.SOLID_COLOR, colour);
                colourButtons.preferredSize = [25, 25];
                var colourNames = colorRow.add("statictext");
                colourNames.text = labels.colourName(i);
                colourButtons.addEventListener('click', function () {
                    //Set new colour
                    clickedProperty.graphics.backgroundColor = clickedProperty.graphics.newBrush(clickedProperty.graphics.BrushType.SOLID_COLOR, this.graphics.backgroundColor.color);
                    propertySettings.colour = this.number;
                    app.settings.saveSetting(scriptName, keyName, JSON.stringify(settings));
                    window.close()
                });
            }

            window.show();

        }

    }

    //Run button
    var buttonGroup = palette.add("group");
    var runButton = buttonGroup.add("button");
    runButton.text = "Run";
    buttonGroup.margins = 15;
    runButton.onClick = function () {
        autoLabel();
    }

    // //Test Text
    // var text = palette.add("statictext");
    // text.text = "testing"

    //Reactive UI
    palette.onShow = palette.onResizing = palette.onResize = function () {

        this.layout.resize();
        scrollPanel.minimumSize.height = 205;
        scrollPanel.maximumSize.height = scrollGroup.size.height;
        scrollPanel.size.height = this.size.height - 100;
        scrollPanel.size.width = this.size.width - 100;

        scrollBarValues();

    }

    if (palette instanceof Window) palette.show();

    //If any UI changes are made run layout.layout(true) then this function to reset scrollBarValues
    function scrollBarValues() {

        scrollBar.size.height = scrollPanel.size.height - 20;
        scrollBar.size.width = 20;
        scrollBar.location = [scrollPanel.size.width - 30, 8];
        scrollBar.minvalue = 0;
        scrollBar.maxvalue = scrollGroup.size.height - scrollPanel.size.height;
        scrollGroup.location.y = -scrollBar.value;

    }

    //Not used
    function colourPicker() {

        var hexToRGB = function (hex) {
            var r = hex >> 16; var g = hex >> 8 & 0xFF; var b = hex & 0xFF;
            return [r, g, b];
        };

        var color_decimal = $.colorPicker();
        if (color_decimal < 0) return null;
        var color_hexadecimal = color_decimal.toString(16);
        var color_rgb = hexToRGB(parseInt(color_hexadecimal, 16));
        var result_color = [color_rgb[0] / 255, color_rgb[1] / 255, color_rgb[2] / 255, 1];
        return result_color;
    }

    function hexToRGB(hex) {

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return [
            parseInt(result[1], 16) / 255,
            parseInt(result[2], 16) / 255,
            parseInt(result[3], 16) / 255
        ]
    }

    //Get hex from preferences file
    function getHex(colourID, decoded) {

        var colorIndex = prefString.search(colourID);
        var colourHexEncoded = "";
        var colourHexDecoded = "";

        for (var i = colorIndex + colourID.length; prefString[i] != "\n"; i++) {
            colourHexEncoded += prefString[i];
        }

        for (var i = 0; i < colourHexEncoded.split("\"").length; i++) {
            if (i % 2) {
                for (var j = 0; j < colourHexEncoded.split("\"")[i].length; j++) {
                    colourHexDecoded += asciiToHex(colourHexEncoded.split("\"")[i][j]);
                }
            } else {
                colourHexDecoded += colourHexEncoded.split("\"")[i];
            }

        }
        colourHexDecoded = colourHexDecoded.split("FF")[1].toUpperCase();
        if (decoded == "encoded") {
            return colourHexEncoded;
        }

        return colourHexDecoded
    }

    //Decode ascii from preferences file
    function asciiToHex(str) {

        var arr1 = [];
        for (var n = 0, l = str.length; n < l; n++) {
            var hex = Number(str.charCodeAt(n)).toString(16);
            arr1.push(hex);
        }
        return arr1.join('');
    }

    //Run the actual script, check to see layer type then sub type and apply picked colours
    function autoLabel() {

        app.beginUndoGroup("Auto Label")

        var comp = app.project.activeItem;

        if (comp == null || !(comp instanceof CompItem)) {
            alert("Please pick a composition")
            return false
        }

        var layers = comp.selectedLayers;

        //If no layers selected apply to all layers.
        if (layers.length == 0) {
            for (var i = 1; i <= comp.numLayers; i++) {
                layers.push(comp.layers[i]);
            }
        }

        for (var i = 0; i < layers.length; i++) {

            var type = layerType(layers[i]);
            if (type === false) return false;
            applyLabel(layers[i], type);

        }

        function layerType(layer) {

            if (layer.source instanceof CompItem) {
                return "composition"
            } else if (layer instanceof ShapeLayer) {
                return "shape"
            } else if (layer instanceof CameraLayer) {
                return "camera"
            } else if (layer instanceof LightLayer) {
                return "light"
            } else if (layer instanceof TextLayer) {
                return "text"
            } else if (layer.nullLayer == true) {
                return "nullLayer"
            } else if (layer.adjustmentLayer == true) {
                return "adjustment"
            } else if (layer.source.mainSource instanceof SolidSource) {
                return "solid"
            } else if (layer.source instanceof FootageItem && layer.source.mainSource.isStill) {
                if (layer.hasVideo) {
                    return "still"
                } else return false
            } else if (layer.source instanceof FootageItem) {
                return "video"
            }

            return false

        }

        function applyLabel(layer, type) {

            var isChild = (layer.parent == null) ? false : true;
            var isParent = false;
            var subType;

            for (var j = 1; j <= comp.numLayers; j++) {
                if (comp.layers[j].parent == layer) {
                    isParent = true
                    break
                }
            }

            if (layer.isTrackMatte == true) {
                subType = "matte";
            } else if (isParent == true && isChild == true) {
                subType = "parentChild";
            } else if (isParent == true) {
                subType = "parented";
            } else if (isChild == true) {
                subType = "child";
            }

            if (subType == undefined) {
                layer.label = parseInt(labels.propertyColour(settings[type].colour));
                return false
            }

            var stringIntColour = (typeof settings[type].properties[subType].colour == "string")
                ? labels.propertyColour(settings[type].properties[subType].colour) :
                settings[type].properties[subType].colour;

            layer.label = parseInt(stringIntColour);

        }

        app.endUndoGroup()
    }

    return palette;

}());
