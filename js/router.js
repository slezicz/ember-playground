App.Router.map(function(){
    this.resource('search');
    this.resource('articles');
});

App.SearchController = Ember.Controller.extend({
   actions:{
       results:function(par){
           console.log(this.store.find('article', { title: par }));
            return this.store.find('article', { title: par });
       }
   }
});

App.ArticlesRoute = Ember.Route.extend({
   model:function(){
       return this.store.find('article');
   }
});
