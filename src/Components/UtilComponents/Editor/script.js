export default (function() {
    var orgLog = console.log;
    var loadInterval = setInterval(() => {
        let consoleElement = window.parent.document.querySelector('#consoleWindow ul');
        if( consoleElement ) {
            clearInterval( loadInterval );
            var liNode = document.createElement("li");
            window.parent.window.console.log = function(message) {
                var textnode = document.createTextNode(JSON.stringify(message));
                liNode.appendChild(textnode);
                consoleElement.appendChild(liNode);
                return orgLog(message);
            }
        }
    }, 300);
})();
