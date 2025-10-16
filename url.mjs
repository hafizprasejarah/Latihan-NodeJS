import { URL } from "url";

 const devun = new URL("https://www.youtube.com/channel/UCNJwer9sI6ydberzqIOGmBA");

 console.info(devun.toString());
 console.info(devun.protocol);
 console.info(devun.host);
 console.info(devun.pathname);
 console.info(devun.searchParams);
