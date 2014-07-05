/**
 * Usuario
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	nombre: 'STRING',
  	apellido: 'STRING',
    email:{
    	type: 'email',
    	required: true
    },
    password: {
    	type: 'STRING',
    	minLength: 5,
    	required: true	
    },
    activo: {
    	type: 'BINARY',
    },
    frases: {
    	collection: "Frases",
    	via: "usuario"
    } 
  }

};