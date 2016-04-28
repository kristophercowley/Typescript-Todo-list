var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var ToDoController = (function () {
            function ToDoController($scope, ngIscope) {
                this.scope = $scope;
                this.data = [];
            }
            ToDoController.prototype.getAll = function () {
            };
            return ToDoController;
        }());
        Controllers.ToDoController = ToDoController;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application || (Application = {}));
