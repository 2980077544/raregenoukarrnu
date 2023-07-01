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
  var img = new Image();
  img.onload = function () {
    if (typeof config.success == "function") config.success(config.url);
  };
  img.onerror = function () {
    if (typeof config.error == "function") config.error(config.url);
  };
  img.src = config.url + (config.isImage ? "" : "/favicon.ico");
}
$_GET['keep']=='1'&&checkWebSiteOnline({
  url: "https://blog.genouka.rr.nu",
  success: function (url) {
    window.confirm("Rare系列的新网站可以访问，要跳转吗？") &&
      window.location.replace("https://blog.genouka.rr.nu/Rare-xi-lie-ye-mian");
  },
  error: function (url) {
    alert(url + "无法访问");
  },
});
