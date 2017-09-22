var Venus;
(function (Venus) {
    var Boot = (function () {
        function Boot() {
        }
        Boot.prototype.create = function () {
            console.log("boot/create");
        };
        return Boot;
    }());
    Venus.Boot = Boot;
})(Venus || (Venus = {}));
var v = new Venus.Boot();
v.create();
//# sourceMappingURL=app.js.map