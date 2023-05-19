"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CompanyModel = /** @class */ (function () {
    function CompanyModel(NIT, address, phone, name, articles) {
        this.NIT = NIT;
        this.address = address;
        this.phone = phone;
        this.name = name;
        this.articles = articles;
    }
    return CompanyModel;
}());
exports.default = CompanyModel;
