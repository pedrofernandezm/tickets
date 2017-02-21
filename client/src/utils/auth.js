import { local } from 'storage.io';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

module.exports = {

  loggedIn(){
    var token = local.get('token');
    if ( Boolean(token) ) {
      var expirationTime = new Date(local.get('expiresAt'));
      var currentTime = new Date();
      return expirationTime > currentTime;
    }
    return false;
  },

  login(email, password){
    return axios.post(
      '/api/sessions',
      { headers: {'Content-Type': 'application/json'},
        session: { email: email, password: password }
      }
    ).then((response) => {
      var data = response.data.data.attributes
      var session = jwtDecode(data['access-token']);
      var token = session.token;
      var expiresAt = session.expiresAt;
      var userType = session.type;
      local.set('token', token);
      local.set('expiresAt', expiresAt);
      local.set('userType', userType);
    });
  }

}
