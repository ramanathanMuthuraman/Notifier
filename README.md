# Notifier
A simple JS plugin to generate notification popups. Similar to [notifyjs] (https://notifyjs.com/) but without any dependencies like jQuery making it light weight.

## Usage
Include the notifier.css and notifier.js in the html file. Activate the plugin by adding the following JS snippet.

```
var notifier = new Notifier({
    text: "Notifier on load"
});
```

The text can be either a String or an Array which will be content of the Notifier. If the text is an Array, for each array element new notifiers will be creted.

# Demo 
[Click here] (http://rawgit.com/ramanathanmuthuraman/Notifier/master/index.html)
