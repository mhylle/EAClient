"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var EpisodeOfCareElementService = (function () {
    function EpisodeOfCareElementService(http) {
        this.http = http;
        this.episodeOfCareElementUrl = "http://localhost:8080/EventArchitecture/episodeofcareelements/";
    }
    EpisodeOfCareElementService.prototype.getEpisodeOfCareElements = function () {
        return this.http.get(this.episodeOfCareElementUrl)
            .map(function (res) { return res.json(); });
    };
    EpisodeOfCareElementService.prototype.createEpisodeOfCareElement = function (episodeOfCareElement) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.episodeOfCareElementUrl, JSON.stringify(episodeOfCareElement), { headers: headers });
    };
    EpisodeOfCareElementService = __decorate([
        core_1.Injectable()
    ], EpisodeOfCareElementService);
    return EpisodeOfCareElementService;
}());
exports.EpisodeOfCareElementService = EpisodeOfCareElementService;
