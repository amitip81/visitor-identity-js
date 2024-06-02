"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VisitorId = function () {
    var navigatorInfo = window.navigator;
    var screenInfo = window.screen;
    var _ = navigatorInfo.userAgent.replace(/\D+/g, '');
    _ += navigatorInfo.plugins.length || 0;
    _ += screenInfo.height || 0;
    _ += screenInfo.width || 0;
    _ += screenInfo.pixelDepth || 0;
    return _;
};
exports.default = VisitorId;
