/**
 * Created by slezicz on 23.4.14.
 */
window.App =  Ember.Application.create({LOG_TRANSITIONS: true});

// Mock data
App.ApplicationAdapter = DS.FixtureAdapter.extend({
    queryFixtures: function(fixtures, query, type) {
        console.log("fixture: ");
        console.log(fixtures);
        console.log("query: ");
        console.log(query);
        console.log("type: ");
        console.log(type);
        console.log("result ");
        //console.log(fixtures.filterProperty(query));
        var result = fixtures.filter(function(item, index, enumerable){
            console.log(item.title +" contains " + query.title + ' ' + item.title.toLowerCase().contains("ail"));
            return item.title.toLowerCase().contains(query.title);
        }, fixtures);
        return result;
    }
});

/*App.ApplicationAdapter = DS.LSAdapter.extend({
 namespace: 'articles-cz'
 });
 */


/* * UTILS **** */
// adding String.prototype.contains() function
if (typeof String.prototype.contains === 'undefined') {   String.prototype.contains = function(it) { return this.indexOf(it) != -1; }; }


