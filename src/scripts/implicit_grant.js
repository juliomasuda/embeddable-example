const clientId = "1fa2763f-5cf4-4b6b-82a8-d3e1d52c2de4"; // LatamPS
var accessToken;
var state;

// getToken = () => {
if (window.location.hash) {
  accessToken = getParameterByName("access_token");
  state = getParameterByName("state");
  // location.hash = "";
} else {
  var queryStringData = {
    response_type: "token",
    client_id: clientId,
    redirect_uri: [
      window.location.protocol,
      "//",
      window.location.host,
      window.location.pathname,
    ].join(""),
    state: window.location.search,
  };
  var queryString = Object.keys(queryStringData)
    .map(function (key) {
      return (
        encodeURIComponent(key) + "=" + encodeURIComponent(queryStringData[key])
      );
    })
    .join("&");
  window.location.replace(
    "https://login.mypurecloud.com/oauth/authorize?" + queryString
  );
}
console.log("Token: " + accessToken);
// };
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\#&]" + name + "=([^&#]*)"),
    results = regex.exec(location.hash);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
\