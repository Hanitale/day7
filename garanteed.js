var objectToPrintInOrder = {
    originalObject: {},
    arrayToTheRescue: [],
    addKey: function add(key, val) {
        objectToPrintInOrder.arrayToTheRescue.push(key);
        objectToPrintInOrder.originalObject[key] = val;
    },
    forEach: function forEach(callback) {
        objectToPrintInOrder.arrayToTheRescue.forEach(function(key) {
            callback(objectToPrintInOrder.originalObject[key]);
        }.bind(objectToPrintInOrder));          //do i still need "bind" if I am not using "this"?
    }
};

useThisCode();
// Usage
function useThisCode(){
    for(x = 0; x < 100; x++) {
        objectToPrintInOrder.addKey(x, x);
    }
        objectToPrintInOrder.forEach(function printIt(value) {
            console.log(value);
        });

}


