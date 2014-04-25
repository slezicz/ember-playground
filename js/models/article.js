/**
 * Created by slezicz on 24.4.14.
 */


App.Article = DS.Model.extend({
    title: DS.attr('string'),
    //target_url: DS.attr('string'),
    //description: DS.attr('string')
});


App.Article.FIXTURES = [
    {
        id: 0,
        title: "Ruby",
        target_url: "http://managementmania.com/cs/ruby",
        description: "Ruby je objektově orientovaný, dynamicky typový programovací jazyk vyšší úrovně. Ruby je zaměřené na jednoduchost a produktivitu, má elegantní syntaxi, kterou lze přirozeně číst a snadno psát. ",
    },
    {
        id: 1,
        title: "Ruby frameworky",
        target_url: "http://managementmania.com/cs/ruby-frameworky",
        description: "Ruby frameworky (Ruby Frameworks) jsou frameworky napsané v programovacím jazyku Ruby. Mezi nejznámější Ruby frameworky patří Camping, Merb, Ramaze, Ruby on Rails, Sinatra.",
    },
    {
        id: 2,
        title: "Ruby on Rails",
        target_url: "http://managementmania.com/cs/ruby-on-rails",
        description: "Ruby on Rails, také se používá zkráceně Rails, je open source framework pro pohodlné a rychlé vytváření moderních webových aplikací. Ruby on Rails je napsané v programovacím jazyku Ruby a v Ruby se také píše samotná Rails aplikace. ",
    }
];