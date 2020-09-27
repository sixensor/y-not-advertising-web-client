import React from 'react';

class Env {
  static getURL(path) {
    return "http://127.0.0.1:8001" + path
  }
}
export default Env;
