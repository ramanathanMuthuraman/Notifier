# Notifier
A simple JS plugin to generate notification popups. Similar to [notifyjs] (https://notifyjs.com/) but without any dependencies like jQuery making it light weight.

## Usage
Include the notifier.css and notifier.js in the html file. Activate the plugin by adding the following JS snippet.

```
var notifier = new Notifier({
    actionElement: {any valid CSS selector}
});
```

The actionElement should be provided with any valid CSS selector whose click action is linked to the notification generation.

# Demo 
[Click here] (http://rawgit.com/ramanathanmuthuraman/Notifier/master/index.html)
