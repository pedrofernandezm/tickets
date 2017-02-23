import { local } from 'storage.io';

module.exports = {

  loggedIn(){
    var token = local.get('token');
    if ( Boolean(token) ) {
      var expirationTime = new Date(local.get('expires-at'));
      var currentTime = new Date();
      return expirationTime > currentTime;
    }
    return false;
  }

}
