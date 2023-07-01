var $_GET = (function () {
  var url = window.document.location.href.toString();
  var u = url.split("?");
  if (typeof u[1] == "string") {
    u = u[1].split("&");
    var get = {};
    for (var i in u) {
      var j = u[i].split("=");
      get[j[0]] = j[1];
    }
    return get;
  } else {
    return {};
  }
})();
function checkWebSiteOnline(config) {
  function getURL(url) {
    function getXmlHttpRequest() {
      if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
      }
    }
    var xmlhttp = getXmlHttpRequest();
    xmlhttp.open("GET", url, false); //第三个参数表示是否异步
    xmlhttp.send();
    if (xmlhttp.readyState == 4) {
      if (xmlhttp.status == 200) {
        return true;
      } else {
        return false;
      }
    }
  }
  getURL(config.url)&&config.success()||config.ertor();
}
$_GET["keep"] != "1" &&
  checkWebSiteOnline({
    url: "https://blog.genouka.rr.nu",
    success: function (url) {
      window.confirm("Rare系列的新网站可以访问，要跳转吗？") &&
        window.location.replace(
          "https://blog.genouka.rr.nu/Rare-xi-lie-ye-mian"
        );
    },
    error: function (url) {
      alert(url + "无法访问");
    },
  });
