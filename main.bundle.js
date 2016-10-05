var ac_main =
webpackJsonpac__name_([1],{

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// Angular 2
// rc2 workaround
var platform_browser_1 = __webpack_require__(84);
var core_1 = __webpack_require__(0);
// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function identity(value) { return value; };
if (false) {
    // Production
    platform_browser_1.disableDebugTools();
    core_1.enableProdMode();
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(core_1.ApplicationRef);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        platform_browser_1.enableDebugTools(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
exports.decorateModuleRef = _decorateModuleRef;
exports.ENV_PROVIDERS = PROVIDERS.slice();


/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(507));


/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(508));


/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(509));


/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// App
__export(__webpack_require__(502));


/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(84);
var forms_1 = __webpack_require__(234);
var http_1 = __webpack_require__(235);
var router_1 = __webpack_require__(236);
var hmr_1 = __webpack_require__(105);
var common_1 = __webpack_require__(73);
/*
 * Platform and Environment providers/directives/pipes
 */
var environment_1 = __webpack_require__(237);
var app_routes_1 = __webpack_require__(504);
// App is our top level component
var app_1 = __webpack_require__(506);
var app_resolver_1 = __webpack_require__(503);
var docs_1 = __webpack_require__(337);
var home_1 = __webpack_require__(336);
var policy_guide_1 = __webpack_require__(338);
// Application wide providers
var APP_PROVIDERS = app_resolver_1.APP_RESOLVER_PROVIDERS.slice();
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef) {
        this.appRef = appRef;
    }
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // recreate elements
        store.disposeOldHosts = hmr_1.createNewHosts(cmpLocation);
        // remove styles
        hmr_1.removeNgStyles();
    };
    AppModule.prototype.hmrOnInit = function (store) {
        console.log('HMR store', store);
    };
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true })
            ],
            declarations: [
                app_1.AppComponent,
                docs_1.DocsComponent,
                home_1.HomeComponent,
                policy_guide_1.PolicyGuideComponent
            ],
            providers: [
                environment_1.ENV_PROVIDERS,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                APP_PROVIDERS
            ],
            bootstrap: [app_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ApplicationRef !== 'undefined' && core_1.ApplicationRef) === 'function' && _a) || Object])
    ], AppModule);
    return AppModule;
    var _a;
}());
exports.AppModule = AppModule;


/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var Observable_1 = __webpack_require__(6);
__webpack_require__(665);
var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.of({ res: 'I am data' });
    };
    DataResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataResolver);
    return DataResolver;
}());
exports.DataResolver = DataResolver;
// an array of services to resolve routes with data
exports.APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var docs_1 = __webpack_require__(337);
var home_1 = __webpack_require__(336);
var policy_guide_1 = __webpack_require__(338);
exports.ROUTES = [
    { path: '', component: home_1.HomeComponent },
    {
        path: 'policy-guide',
        component: policy_guide_1.PolicyGuideComponent,
        children: [
            { path: 'docs', component: docs_1.DocsComponent }
        ]
    }
];


/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/*
 * Angular 2 decorators and services
 */
var core_1 = __webpack_require__(0);
/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(653)],
            template: __webpack_require__(657)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */


/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(505));


/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var HomeComponent = (function () {
    function HomeComponent() {
        this.url = 'https://pif.gov';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            // The selector is what angular internally uses
            // for `document.querySelectorAll(selector)` in our index.html
            // where, in this case, selector is the string 'home'
            selector: 'home',
            styles: [__webpack_require__(654)],
            template: __webpack_require__(658)
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var DocsComponent = (function () {
    function DocsComponent() {
    }
    DocsComponent.prototype.ngOnInit = function () {
    };
    DocsComponent = __decorate([
        core_1.Component({
            selector: 'docs',
            styles: [__webpack_require__(655)],
            template: __webpack_require__(659)
        }), 
        __metadata('design:paramtypes', [])
    ], DocsComponent);
    return DocsComponent;
}());
exports.DocsComponent = DocsComponent;


/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var PolicyGuideComponent = (function () {
    function PolicyGuideComponent() {
    }
    PolicyGuideComponent.prototype.ngOnInit = function () {
    };
    PolicyGuideComponent = __decorate([
        core_1.Component({
            selector: 'policy-guide',
            styles: [__webpack_require__(656)],
            template: __webpack_require__(660)
        }), 
        __metadata('design:paramtypes', [])
    ], PolicyGuideComponent);
    return PolicyGuideComponent;
}());
exports.PolicyGuideComponent = PolicyGuideComponent;


/***/ },

/***/ 653:
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\nbody {\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\n.app-links {\n  display: block;\n  float: right;\n  margin-top: 0.75em; }\n  .app-links a {\n    color: #5b616b;\n    text-decoration: none; }\n    .app-links a:hover {\n      border-bottom: 2px solid #1c4772;\n      color: #1c4772; }\n  .app-links li {\n    display: inline-block;\n    margin-left: 1em; }\n\n.app-logo {\n  float: left;\n  font-size: 2.15em; }\n  .app-logo a {\n    color: #1c4772; }\n\n.app-navigation {\n  padding: 1.75em 0; }\n  .app-navigation a {\n    text-decoration: none; }\n\n.usa-disclaimer {\n  height: auto;\n  padding: 0.5em 0; }\n  .usa-disclaimer img {\n    max-width: 1.5em; }\n"

/***/ },

/***/ 654:
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\nbody {\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nbody {\n  background-color: #ffffff; }\n"

/***/ },

/***/ 655:
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\nbody {\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\n.policy-guide-subnav a {\n  color: #f1f1f1;\n  font-size: 0.95em;\n  text-decoration: none; }\n  .policy-guide-subnav a:hover {\n    color: #ffffff; }\n"

/***/ },

/***/ 656:
/***/ function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\nbody {\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -ms-font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  font-feature-settings: \"kern\", \"liga\", \"pnum\";\n  -webkit-font-smoothing: antialiased; }\n\n.policy-guide-nav {\n  background-color: #f1f1f1; }\n  .policy-guide-nav a {\n    color: #5b616b;\n    display: inline-block;\n    font-size: 0.95em;\n    font-weight: bold;\n    padding: 0.75em 1.25em;\n    text-decoration: none; }\n    .policy-guide-nav a:hover {\n      background-color: #485568;\n      color: #ffffff; }\n  .policy-guide-nav li {\n    display: inline-block;\n    margin-right: 1.5em; }\n  .policy-guide-nav .active a {\n    background-color: #485568;\n    color: #ffffff; }\n\n.policy-guide-content {\n  background-color: #485568;\n  padding-top: 2em; }\n"

/***/ },

/***/ 657:
/***/ function(module, exports) {

module.exports = "<div class=\"usa-disclaimer\">\n  <div class=\"usa-grid\">\n    <span class=\"usa-disclaimer-official\">\n      <img src=\"assets/img/us_flag_small.png\" alt=\"U.S. flag\"/>\n      An official website of the United States Government\n    </span>\n    <span class=\"usa-disclaimer-stage\">\n      This site is currently in alpha.\n      <a href=\"https://18f.gsa.gov/dashboard/stages/#alpha\" target=\"_blank\">\n        Learn More\n      </a>\n    </span>\n  </div>\n</div>\n\n<nav class=\"app-navigation\" role=\"navigation\">\n  <div class=\"usa-grid\">\n    <div class=\"app-logo\">\n      <a [routerLink]=\" ['./'] \">\n        <strong>Code</strong>.gov\n      </a>\n    </div>\n    <ul class=\"app-links usa-unstyled-list\">\n      <li>\n        <a [routerLink]=\" ['./'] \">\n          Explore Code\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\" ['./'] \">\n          Policy Guide\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n\n<footer>\n</footer>\n"

/***/ },

/***/ 658:
/***/ function(module, exports) {

module.exports = "<section class=\"banner\">\n</section>\n"

/***/ },

/***/ 659:
/***/ function(module, exports) {

module.exports = "<nav class=\"policy-guide-subnav docs-nav\">\n  <ul class=\"usa-unstyled-list\">\n    <li>\n      <a>Overview</a>\n    </li>\n    <li>\n      <a>Introduction</a>\n    </li>\n    <li>\n      <a>Why It Was Created</a>\n    </li>\n    <li>\n      <a>Compliance</a>\n    </li>\n    <li>\n      <a>Licensing</a>\n    </li>\n  </ul>\n</nav>\n\n<section class=\"docs-content\">\n</section>\n"

/***/ },

/***/ 660:
/***/ function(module, exports) {

module.exports = "<nav class=\"policy-guide-nav\">\n  <div class=\"usa-grid\">\n    <ul class=\"usa-unstyled-list\">\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['docs']\">\n          Docs\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\" ['./'] \">\n          Read the Policy\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\" ['./'] \">\n          FAQs\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"policy-guide-content\">\n  <div class=\"usa-grid\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ },

/***/ 665:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(6);
var of_1 = __webpack_require__(83);
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ },

/***/ 691:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/*
 * Angular bootstraping
 */
var platform_browser_dynamic_1 = __webpack_require__(150);
var environment_1 = __webpack_require__(237);
var hmr_1 = __webpack_require__(105);
/*
 * App Module
 * our top level module that holds all of our components
 */
var app_1 = __webpack_require__(386);
/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(app_1.AppModule).then(function (MODULE_REF) {
        if (false) {
            module["hot"]["accept"]();
            if (MODULE_REF.instance["hmrOnInit"]) {
                MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
            }
            if (MODULE_REF.instance["hmrOnStatus"]) {
                module["hot"]["apply"](function (status) {
                    MODULE_REF.instance["hmrOnStatus"](status);
                });
            }
            if (MODULE_REF.instance["hmrOnCheck"]) {
                module["hot"]["check"](function (err, outdatedModules) {
                    MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
                });
            }
            if (MODULE_REF.instance["hmrOnDecline"]) {
                module["hot"]["decline"](function (dependencies) {
                    MODULE_REF.instance["hmrOnDecline"](dependencies);
                });
            }
            module["hot"]["dispose"](function (store) {
                MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
                MODULE_REF.destroy();
                MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
            });
        }
        return MODULE_REF;
    })
        .then(environment_1.decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
hmr_1.bootloader(main);


/***/ }

},[691]);
//# sourceMappingURL=main.map