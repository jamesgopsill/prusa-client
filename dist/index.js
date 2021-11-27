"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrusaClient = void 0;
const is_ip_1 = __importDefault(require("is-ip"));
const printer = __importStar(require("./printer"));
// Exporting all the interface alongside.
__exportStar(require("./printer/interfaces"), exports);
/**
 * Prusae Client Class
 *
 *
 */
class PrusaClient {
    constructor(ip) {
        // Perform some checks on initialisation
        if (!is_ip_1.default.v4(ip)) {
            throw new TypeError("[PrusaClient] Invalid IP address");
        }
        this.ip = ip;
        this.baseURL = `http://${ip}`;
    }
    getPrinter() {
        return printer.getPrinter(this.baseURL);
    }
    getVersion() {
        return printer.getVersion(this.baseURL);
    }
    getFiles() {
        return printer.getFiles(this.baseURL);
    }
    getJob() {
        return printer.getJob(this.baseURL);
    }
    postGCode(command) {
        return printer.postGCode(this.baseURL, command);
    }
}
exports.PrusaClient = PrusaClient;