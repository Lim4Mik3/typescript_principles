"use strict";
/**
 * name - string
 * duration - string
 * instructor - string
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCourseService = /** @class */ (function () {
    function CreateCourseService() {
    }
    CreateCourseService.prototype.execute = function (name, duration, instructor) {
        console.log(name, duration, instructor);
    };
    return CreateCourseService;
}());
exports.default = new CreateCourseService();
