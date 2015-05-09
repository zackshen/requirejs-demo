(function () {define('module_a',[],function() {
    console.log("module-a called");
    var ModuleA = function() {
        this.name = 'module_a';
    };
    ModuleA.prototype = {
        display: function() {
            console.log(this.name, 'displayed');
        }
    };
    return ModuleA;
});

define('module_b',[],function() {
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

define('lib',['require','exports','module','./module_a','./module_b'],function(require, exports, module) {
    exports.modulea = require("./module_a");
    exports.moduleb = require("./module_b");
});

}());