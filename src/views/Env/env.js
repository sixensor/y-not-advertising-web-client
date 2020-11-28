import React from 'react';

class Env {
  static getURL(path) {
    return "http://167.99.174.148:8001" + path
  }
  static getStaticURL(path) {
    return "http://167.99.174.148:8003" + path
  }
}
export default Env;
