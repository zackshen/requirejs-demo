define("moduleA", function() {
    console.log("module-a called");
    var ModuleA = function() {
        this.name = 'module_a';
    };
    ModuleA.prototype = {
        display: function() {
            console.log(this.name, 'displayed');
        }
    }
    return ModuleA;
});
