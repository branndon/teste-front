"use strict";var __decorate=this&&this.__decorate||function(e,o,r,t){var p,n=arguments.length,a=n<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,o,r,t);else for(var _=e.length-1;_>=0;_--)(p=e[_])&&(a=(n<3?p(a):n>3?p(o,r,a):p(o,r))||a);return n>3&&a&&Object.defineProperty(o,r,a),a};Object.defineProperty(exports,"__esModule",{value:!0});var platform_browser_1=require("@angular/platform-browser"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),http_1=require("@angular/common/http"),app_component_1=require("./app.component"),filter_pipe_1=require("./filter.pipe"),app_routing_1=require("./app.routing"),game_component_1=require("./game/game.component"),games_component_1=require("./games/games.component"),AppModule=function(){function e(){}return e=__decorate([core_1.NgModule({declarations:[app_component_1.AppComponent,filter_pipe_1.FilterPipe,game_component_1.GameComponent,games_component_1.GamesComponent],imports:[http_1.HttpClientModule,platform_browser_1.BrowserModule,forms_1.FormsModule,app_routing_1.routing],providers:[],bootstrap:[app_component_1.AppComponent]})],e)}();exports.AppModule=AppModule;