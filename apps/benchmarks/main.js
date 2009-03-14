// ==========================================================================
// Benchmarks
// ==========================================================================

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
function main() {

  // Step 1: Load Your Model Data
  // The default code here will load the fixtures you have defined.
  // Comment out the preload line and add something to refresh from the server
  // when you are ready to pull data from your server.
  Benchmarks.server.preload(Benchmarks.FIXTURES) ;

  // TODO: refresh() any collections you have created to get their records.
  // ex: Benchmarks.contacts.refresh() ;

  // Step 2: Instantiate Your Views
  // The default code just activates all the views you have on the page. If
  // your app gets any level of complexity, you should just get the views you
  // need to show the app in the first place, to speed things up.
  SC.page.awake() ;

  // Step 3. Set the content property on your primary controller.
  // This will make your app come alive!

  // TODO: Set the content property on your primary controller
  // ex: Benchmarks.contactsController.set('content',Benchmarks.contacts);
  (function() {
    var benchmarks = Benchmarks.Benchmark.findAll() ;
    var idx = benchmarks.length;
    SC.page.get('report').set('value', "Beginning Benchmarks") ;
    while(--idx>=0) {
      var benchmark = benchmarks[idx] ;
      benchmark.run() ;
    }

    SC.page.get('report').set('value', SC.Benchmark.report()) ;
  }).invokeLater(null, 100) ;
  
} ;
