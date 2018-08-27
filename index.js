class AcelleMailConnector 
{

	constructor ( apikey, endpoint )
	{
		this.axios = require ( 'axios' );
		
		this.apikey = apikey;
		this.endpoint = endpoint;
	}

	lists () {
		this.axios.get ( this.endpoint + "lists", {
			params: {
				api_token: this.apikey
			}
		} )
			.then ( ( res ) => console.log ( res.data ) )
			.catch ( ( err ) => console.error ( err ) )
		;
	}

	list_details ( list_id )
	{
		this.axios.get ( this.endpoint + "lists/" + list_id, {
			params: {
				api_token: this.apikey
			}
		} )
			.then ( ( res ) => console.log ( res.data ) )
			.catch ( ( err ) => console.error ( err ) )
		;
	}
}

module.exports = AcelleMailConnector;
