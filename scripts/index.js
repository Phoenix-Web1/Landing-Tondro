// index.js

import { createHeader, createDynamicButton } from "./modules/header/header.js";
import { createSection2 } from "./modules/footer/footer.js";
import { createSection3 } from "./modules/section-2/section-2.js";
import { createSection5 } from "./modules/section-5/section-5.js";
import { createFooter } from "./modules/footer/footer.js";

createFooter();
// Call createHeader function to create the header
createHeader();

// Call createDynamicButton function to create a dynamic button
const dynamicButton = createDynamicButton("My Dynamic Button");
// Append the dynamic button wherever you need it in your index.js or other files

// Call createSection2 function to generate section-2
createSection2();

// Call createSection3 function to generate section-3
createSection3();

// Call createSection5 function to generate section-5
createSection5();
