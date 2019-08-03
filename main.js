const MSDN_DOMAIN = ["msdn.microsoft.com", "docs.microsoft.com"];
const url = window.location.toString();
const scheme = url.substr(0, url.indexOf("://"));
const x = url.substr(scheme.length + 3).split("/");

if (x[1] !== "en-us") {
    // 英語版URLの生成
    let str = "/en-us";
    for (let i = 2; i < x.length; i++) {
        str += "/" + x[i];
    }
    const eng_url = scheme + "://" + x[0] + str;
    console.log("[MSDN English Redirect] redirect to " + eng_url);
    window.location = eng_url;
}
