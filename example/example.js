/***
 * Created by adrianbrowning on 2018-11-30
 */
"use strict";

require("../index")("http://127.0.0.1:8888");

const axios = require("axios"),
      qs = require('qs');

axios.get("http://some/url/")
     .then(res => console.log(res.data))
     .catch(e => console.error(e));

axios.get("https://some/url/")
     .then(res => console.log(res.data))
     .catch(e => console.error(e));

axios.post("https://some/url", qs.stringify({ 'bar': 123 }))
     .then(res => console.log(res.data))
     .catch(e => console.error(e));