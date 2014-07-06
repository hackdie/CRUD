
module.exports = {
  
    'new' : function(req, res){
  	    res.view();
    },
    create: function(req,res,next){
        Foo.create(req.params.all(), function fooCreated (err,foo){

            if(err){
                console.log(err);
                req.session.flash = {
                    err : err
                }
                return res.redirect('/foo/new');
            }

            //res.json(foo);
            res.redirect('/foo/show/'+foo.id)
        });
    },
    show : function(req, res, next){
        Foo.findOne(req.param('id'),function foundFoo(err,foo){
            if(err) return next(err);
            if(!foo) return next();

            res.view({
                user:foo
            });
        });
    },
    index : function(req,res, next){
        Foo.find(function foundFoos(err,foo){
            if(err) return next(err);

            res.view({
                users: foo
            });
        });
    },
    edit : function (req, res, next){
        Foo.findOne(req.param('id'),function foundFoo(err, foo){
            if(err) return next(err);
            if(!foo) return next();

            res.view({
                user:foo
            });
        });
    },
    update : function (req, res, next){
        Foo.update(req.param('id'), req.params.all(), function FooUpdate(err){
            if(err){
                return res.redirect('/foo/edit/' + req.param('id'));
            }

            res.redirect('/foo/show/' + req.param('id'));

        });
    },
    destroy: function(req, res, next){
        Foo.findOne(req.param('id'), function foundUser(err,foo){

            if(err) return next(err);
            if(!foo) return next('No se encuentra ese usuario');


            Foo.destroy(req.param('id'),function FooDestroy(err){
                if(err) return next(err);
            });

            res.redirect('/foo');

        });
    }
};
