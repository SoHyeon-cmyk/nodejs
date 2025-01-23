var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var workwomen = {
    name: "졸려요",
    age: 24,
    position: "front-develpoer",
    work: function () {
        console.log("월 급 루 팡");
    }
};
var Workwomen = /** @class */ (function () {
    function Workwomen(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    Workwomen.prototype.work = function () {
        console.log("월 급 루 팡");
    };
    return Workwomen;
}());
var workwomenA = new Workwomen("마라탕", 20, "프론트개발자");
console.log(workwomenA);
var tiredwomen = /** @class */ (function () {
    function tiredwomen(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    tiredwomen.prototype.work = function () {
        console.log("환자");
    };
    return tiredwomen;
}());
var ExcutiveOfficer = /** @class */ (function (_super) {
    __extends(ExcutiveOfficer, _super);
    function ExcutiveOfficer(name, age, position, officeNumber) {
        var _this = _super.call(this, name, age, position) || this;
        _this.officeNumber = officeNumber;
        return _this;
    }
    return ExcutiveOfficer;
}(Workwomen));
var workwomenC = new ExcutiveOfficer("김소현", 23, "피곤함", 1);
var tiredwomenA = new tiredwomen("김소현", 23, "피곤함");
console.log(tiredwomenA);
