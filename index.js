module.exports = function queryString(search) {
  var query = {};
  var queryString = search || typeof location !== 'undefined' && location.search;
  if (!queryString) {
    return query;
  } 

  queryString = queryString.trim().replace(/^(\?)/, '');
  queryString = queryString.split('&');

  queryString.forEach(function(q) {
    var segment = q.split('=');
    query[segment[0]] = segment.length > 1 ? segment[1] : true;
  });

  return query;
};
