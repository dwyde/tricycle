var STORAGE = (function() {
    
    var storageKey = 'tricycle';
    
    function loadData() {
        return JSON.parse(localStorage[storageKey] || '{}');
    }
    
    function saveData(data) {
        localStorage[storageKey] = JSON.stringify(data);
    }
    
    return {
        markCorrect: function(name) {
            var data = loadData();
            data[name] = true;
            saveData(data);
        },
        isCorrect: function(name) {
            data = loadData();
            return name in data
        },
        clearAll: function() {
            delete localStorage[storageKey];
        },
    }
}());
