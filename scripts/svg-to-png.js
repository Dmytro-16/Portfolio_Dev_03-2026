import sharp from "sharp";
import { readFileSync } from "fs";

sharp(readFileSync("./src/images/IMG_1.svg"))
  .resize(240)
  .png()
  .toFile("./public/assets/logo-email.png")
  .then(() => console.log("logo-email.png généré dans public/assets/"))
  .catch((err) => console.error(err));

// ++++++++ MAIL LOGO ++++++++
{
  /* <div style="margin-bottom:24px;">
  <img
    src="https://dsdeveloper.fr/assets/logo-email.png" > URL PROD
    src=shttp://localhost:5173/assets/logo-email.png > URL LOCAL
    width="160"
    alt="DS Developer"
    style="display:block;"
  />
</div> */
}
