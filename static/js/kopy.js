(function() {
    var Kopy, root;

    Kopy = {
        _createTextArea: function() {
            var textArea = document.createElement("textarea");
            textArea.style.position = "absolute";
            textArea.style.left = "-100%";
            return textArea;
        },
        copy: function(data) {
            if (window.clipboardData && window.clipboardData.setData) {
                window.clipboardData.clearData("text");
                window.clipboardData.setData("text", data);
            } else {
                var textArea = this._createTextArea();
                textArea.value = data;
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand("copy");
                document.body.removeChild(textArea);
            }
        },
        paste: function() {
            var value = '';
            if (window.clipboardData && window.clipboardData.getData) {
                value = window.clipboardData.getData("text");
            } else {
                var textArea = this._createTextArea();
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                if (document.execCommand('paste')) {
                    document.execCommand("paste");
                    value = textArea.value;
                }
                document.body.removeChild(textArea);
            }
            return value;
        }
    };

    root = typeof exports !== "undefined" && exports !== null ? exports : window;

    root.Kopy = Kopy;

}).call(this);
