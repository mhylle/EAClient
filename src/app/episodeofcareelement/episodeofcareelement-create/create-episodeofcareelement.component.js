"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var episodeofcareelement_service_1 = require("../services/episodeofcareelement.service");
var CreateEpisodeOfCareElementComponent = (function () {
    function CreateEpisodeOfCareElementComponent(episodeOfCareElementService) {
        this.episodeOfCareElementService = episodeOfCareElementService;
    }
    CreateEpisodeOfCareElementComponent.prototype.onSubmit = function () {
        var _this = this;
        var episodeOfCareElement = {
            episodeOfCareLabel: this.episodeOfCareLabel,
            responsibleUnit: this.responsibleUnit,
            startTime: this.startTime,
        };
        this.episodeOfCareElementService.createEpisodeOfCareElement(episodeOfCareElement).subscribe(function (data) {
            _this.result = data;
        });
    };
    CreateEpisodeOfCareElementComponent = __decorate([
        core_1.Component({
            selector: 'create-episodeofcareelement',
            templateUrl: 'create-episodeofcareelement.component.html',
            styleUrls: ['create-episodeofcareelement.component.css'],
            providers: [episodeofcareelement_service_1.EpisodeOfCareElementService]
        })
    ], CreateEpisodeOfCareElementComponent);
    return CreateEpisodeOfCareElementComponent;
}());
exports.CreateEpisodeOfCareElementComponent = CreateEpisodeOfCareElementComponent;
