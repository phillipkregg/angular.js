angularFiles = {
  'angularSrc': [
    'src/Angular.js',
    'src/loader.js',
    'src/AngularPublic.js',
    'src/jqLite.js',
    'src/apis.js',

    'src/auto/injector.js',

    'src/ng/anchorScroll.js',
    'src/ng/browser.js',
    'src/ng/cacheFactory.js',
    'src/ng/compile.js',
    'src/ng/controller.js',
    'src/ng/defer.js',
    'src/ng/document.js',
    'src/ng/exceptionHandler.js',
    'src/ng/interpolate.js',
    'src/ng/location.js',
    'src/ng/log.js',
    'src/ng/parse.js',
    'src/ng/q.js',
    'src/ng/route.js',
    'src/ng/routeParams.js',
    'src/ng/rootScope.js',
    'src/ng/sniffer.js',
    'src/ng/window.js',
    'src/ng/http.js',
    'src/ng/httpBackend.js',
    'src/ng/locale.js',

    'src/ng/filter.js',
    'src/ng/filter/filter.js',
    'src/ng/filter/filters.js',
    'src/ng/filter/limitTo.js',
    'src/ng/filter/orderBy.js',

    'src/ng/directive/directives.js',
    'src/ng/directive/a.js',
    'src/ng/directive/booleanAttrs.js',
    'src/ng/directive/form.js',
    'src/ng/directive/input.js',
    'src/ng/directive/ngBind.js',
    'src/ng/directive/ngClass.js',
    'src/ng/directive/ngCloak.js',
    'src/ng/directive/ngController.js',
    'src/ng/directive/ngCsp.js',
    'src/ng/directive/ngEventDirs.js',
    'src/ng/directive/ngInclude.js',
    'src/ng/directive/ngInit.js',
    'src/ng/directive/ngNonBindable.js',
    'src/ng/directive/ngPluralize.js',
    'src/ng/directive/ngRepeat.js',
    'src/ng/directive/ngShowHide.js',
    'src/ng/directive/ngStyle.js',
    'src/ng/directive/ngSwitch.js',
    'src/ng/directive/ngTransclude.js',
    'src/ng/directive/ngView.js',
    'src/ng/directive/script.js',
    'src/ng/directive/select.js',
    'src/ng/directive/style.js'
  ],

  'angularSrcModules': [
    'src/ngCookies/cookies.js',
    'src/ngResource/resource.js',
    'src/ngSanitize/sanitize.js',
    'src/ngSanitize/directive/ngBindHtml.js',
    'src/ngSanitize/filter/linky.js',
    'src/ngMock/angular-mocks.js',

    'src/bootstrap/bootstrap.js'
  ],

  'angularScenario': [
    'src/ngScenario/Scenario.js',
    'src/ngScenario/Application.js',
    'src/ngScenario/Describe.js',
    'src/ngScenario/Future.js',
    'src/ngScenario/ObjectModel.js',
    'src/ngScenario/Describe.js',
    'src/ngScenario/Runner.js',
    'src/ngScenario/SpecRunner.js',
    'src/ngScenario/dsl.js',
    'src/ngScenario/matchers.js',
    'src/ngScenario/output/Html.js',
    'src/ngScenario/output/Json.js',
    'src/ngScenario/output/Xml.js',
    'src/ngScenario/output/Object.js'
  ],

  'angularTest': [
    'test/testabilityPatch.js',
    'test/matchers.js',
    'test/ngScenario/*.js',
    'test/ngScenario/output/*.js',
    'test/ngScenario/jstd-scenario-adapter/*.js',
    'test/*.js',
    'test/auto/*.js',
    'test/bootstrap/*.js',
    'test/ng/*.js',
    'test/ng/directive/*.js',
    'test/ng/filter/*.js',
    'test/ngCookies/*.js',
    'test/ngResource/*.js',
    'test/ngSanitize/*.js',
    'test/ngSanitize/directive/*.js',
    'test/ngSanitize/filter/*.js',
    'test/ngMock/*.js'
  ],

  'jstd': [
    'lib/jasmine/jasmine.js',
    'lib/jasmine-jstd-adapter/JasmineAdapter.js',
    'lib/jquery/jquery.js',
    'test/jquery_remove.js',
    '@angularSrc',
    'src/publishExternalApis.js',
    '@angularSrcModules',
    '@angularScenario',
    'src/ngScenario/jstd-scenario-adapter/Adapter.js',
    '@angularTest',
    'example/personalLog/*.js',
    'example/personalLog/test/*.js'
  ],

  'jstdExclude': [
    'test/jquery_alias.js',
    'src/angular-bootstrap.js',
    'src/ngScenario/angular-bootstrap.js'
  ],

  'jstdScenario': [
    'build/angular-scenario.js',
    'build/jstd-scenario-adapter-config.js',
    'build/jstd-scenario-adapter.js',
    'build/docs/docs-scenario.js'
  ],

  "jstdModules": [
    'lib/jasmine/jasmine.js',
    'lib/jasmine-jstd-adapter/JasmineAdapter.js',
    'build/angular.js',
    'src/ngMock/angular-mocks.js',
    'src/ngCookies/cookies.js',
    'src/ngResource/resource.js',
    'src/ngSanitize/sanitize.js',
    'src/ngSanitize/directive/ngBindHtml.js',
    'src/ngSanitize/filter/linky.js',
    'test/matchers.js',
    'test/ngMock/*.js',
    'test/ngCookies/*.js',
    'test/ngResource/*.js',
    'test/ngSanitize/*.js',
    'test/ngSanitize/directive/*.js',
    'test/ngSanitize/filter/*.js'
  ],

  'jstdPerf': [
   'lib/jasmine/jasmine.js',
   'lib/jasmine-jstd-adapter/JasmineAdapter.js',
   '@angularSrc',
   '@angularSrcModules',
   'src/ngMock/angular-mocks.js',
   'perf/data/*.js',
   'perf/testUtils.js',
   'perf/*.js'
  ],

  'jstdPerfExclude': [
    'src/ng/angular-bootstrap.js',
    'src/ngScenario/angular-bootstrap.js'
  ],

  'jstdJquery': [
    'lib/jasmine/jasmine.js',
    'lib/jasmine-jstd-adapter/JasmineAdapter.js',
    'lib/jquery/jquery.js',
    'test/jquery_alias.js',
    '@angularSrc',
    'src/publishExternalApis.js',
    '@angularSrcModules',
    '@angularScenario',
    'src/ngScenario/jstd-scenario-adapter/Adapter.js',
    '@angularTest',
    'example/personalLog/*.js',

    'example/personalLog/test/*.js'
  ],

  'jstdJqueryExclude': [
    'src/angular-bootstrap.js',
    'src/ngScenario/angular-bootstrap.js',
    'test/jquery_remove.js'
  ]
};

// Execute only in slim-jim
if (typeof JASMINE_ADAPTER !== 'undefined') {
  // Testacular config
  var mergedFiles = [];
  angularFiles.jstd.forEach(function(file) {
    // replace @ref
    var match = file.match(/^\@(.*)/);
    if (match) {
      var deps = angularFiles[match[1]];
      if (!deps) {
        console.log('No dependency:' + file)
      }
      mergedFiles = mergedFiles.concat(deps);
    } else {
      mergedFiles.push(file);
    }
  });

  files = [JASMINE, JASMINE_ADAPTER];

  mergedFiles.forEach(function(file){
    if (/jstd|jasmine/.test(file)) return;
    files.push(file);
  });


  exclude = angularFiles.jstdExclude;

  autoWatch = true;
  autoWatchInterval = 1;
  logLevel = LOG_INFO;
  logColors = true;
}
