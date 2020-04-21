requirejs.config({
    baseUrl: "js",
    paths: {
        "jquery": "https://dl.dropboxusercontent.com/s/fhmxotj8d5d4tef/jquery-3.5.0.min",
        "Phaser": "https://dl.dropboxusercontent.com/s/2pm8nqh44stlgra/phaser-3.22.0.min"
    }
});
requirejs(["Main"], function () { });
//# sourceMappingURL=RequireConfig.js.map