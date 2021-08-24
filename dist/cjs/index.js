"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css");
const loader_1 = require("@astrouxds/astro-web-components/loader");
// Export all the auto-generated compiled Svelte components.
__exportStar(require("./proxies"), exports);
if (typeof window !== 'undefined') {
    loader_1.defineCustomElements(window);
}
//# sourceMappingURL=index.js.map