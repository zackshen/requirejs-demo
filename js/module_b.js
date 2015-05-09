define(function() {
    console.log("module-b called");
    var ModuleB = function() {
        this.name = 'module_b';
    };
    ModuleB.prototype = {
        display: function() {
            console.log(this.name, 'displayed');
        }
    };
    return ModuleB;
});
