# Notifier
A simple JS plugin to generate notification popups. Similar to [notifyjs] (https://notifyjs.com/) but without any dependencies like jQuery making it light weight.

## Usage
Include the notifier.css and notifier.js in the html file. Activate the plugin by adding the following JS snippet.

```
var notifier = new Notifier({
    text: "Hi there !! Welcome to Notifier JS",
    cls: "custom-cls",
    manualDismiss: true
});
```
**Parameters**

*text*   :  Text to be displayed in the notifier

*cls*    :  Custom class to be added to the notifier

*manualDismiss*   : Set manaul dismiss to true, for closing the notifier manually 

# Demo 
[Click here] (http://rawgit.com/ramanathanmuthuraman/Notifier/master/index.html)
