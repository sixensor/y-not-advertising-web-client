import React from 'react';



  const ServerURL = "http://167.99.174.148";// Production server
// const ServerURL = "http://127.0.0.1"; // Local host
// const ServerDNSURL = "http://localhost"; // Local host

class Env {

  static getURL(path) {
    return ServerURL+":8001" + path
  }
  static getStaticURL(path) {
    return ServerURL+":8003" + path
  }
  static redirectTo(path) {
    return ServerURL+":80" + path
  }
}
export default Env;
