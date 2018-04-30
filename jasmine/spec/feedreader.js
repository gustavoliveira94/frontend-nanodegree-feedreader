/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Checking if url not is null */

        it('url checked', function () {
            for (const allFeed of allFeeds) {
                expect(allFeed.url).toBeDefined();
                expect(allFeed.url).not.toBe('');
            }
        });


        /* Checking if name not is null */

        it('name checked', function () {
            for (const allFeed of allFeeds) {
                expect(allFeed.url).toBeDefined();
                expect(allFeed.url).not.toBe('');
            }
        });
    });


    /* Create a new test suit called "The menu" */
    describe('The menu', function () {

        /* Test to verify if class menu-hidden is on tag body */
        it('menu default', function () {
            expect($('body').hasClass("menu-hidden")).toBe(true);
        });

        /* Test to verify if menu click is working */
        it('click menu', function () {
            $('.menu-icon-link').click();
            expect($('body').hasClass("menu-hidden")).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass("menu-hidden")).toBe(true);
        });

    });

    /* Create a new test suit to loadFeed */
    describe("Initial Entries", function () {
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        /* Checking if have one or more element in loadFeed */
        it('load feed', function () {
            expect($('.entry-link .entry').length > 0).toBe(true);
        });

    });

    /* Create a new test suit called "New Feed Selection" */
    describe('New Feed Selection', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

    /* Checking if has change element in loadFeed */
        it('update feed', function(){
            const feed1 = $(".entry-link .entry");
            const feed2 = $(".entry-link .entry");
            expect(feed1 === feed2).toBe(false);
        });
});
}());
