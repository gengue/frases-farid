
module.exports = {

  attributes: {
  	
  	frase: {
  		type: 'STRING',
  		minLength: 3,
  		maxLength: 300,
  		required: true  			
  	},  	
  	imagen: 'STRING',
  	usuario: {
  		model: 'Usuarios'
  	} 
  }

};