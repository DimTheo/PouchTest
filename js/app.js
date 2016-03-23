var db = new PouchDB("gatakia");
var remotedb = new PouchDB("https://nikatlas.cloudant.com/test") ;
var login = remotedb.login("rombefildrelagiriathersu","0537a37990c7b78b2a5db5775cd3b0342d8c9406") ;

function sync(){
	return db.sync(remotedb);
}
function getData(){
		return db.allDocs({include_docs:true});
}
function showData(response){
		console.log(response);
}
login
	.then(sync)
	.then(getData)
	.then(showData);