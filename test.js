const API = 'xvPtwxRUg9BbHXSjGSdT0v33RHWOFiGPz7noUWg9Fuex2XjmydOEP7bqyUtz';
const ENDP = 'http://mlist.os3digitalpr.eu/api/v1/';

const AcelleMailConnector = require ( "./index" );

const amc = new AcelleMailConnector ( API, ENDP );


amc.lists ();
amc.list_details ( '5b8245842f273' );
