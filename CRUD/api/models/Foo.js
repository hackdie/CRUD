/**
 * Foo
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    schema : true,

  attributes: {
  	
  	nombre : {
  		type : 'string',
  		required : true
  	},
  	email : {
  		type : 'string',
  		required : true	
  	},
      toJSON: function(){
          var obj = this.toObject();
          //delete obj.createdAt;
          delete obj.updatedAt;
          //delete obj.id;
          return obj;
      }
    
  }

};
