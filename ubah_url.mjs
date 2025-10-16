import { URL } from "url";

const devun = new URL("https://www.youtube.com/channel/UCNJwer9sI6ydberzqIOGmBA");

devun.host = "www.hafiz.com";
const searchParam = devun.searchParams;
searchParam.append("status", "premium");

console.info(devun.toString());