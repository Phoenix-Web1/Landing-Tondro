// index.js

import { createHeader, createDynamicButton } from "/modules/header/header.js";
// index.js

import { createSection1 } from "/modules/section-1/section-1.js";
import { createSection2 } from "/modules/section-2/section-2.js";
import { createSection3 } from "/modules/section-3/section-3.js";
import { createSection4 } from "/modules/section-4/section-4.js";
import { createSection5 } from "/modules/section-5/section-5.js";
import { createSection6 } from "/modules/section-6/section-6.js";
import { createFooter } from "/modules/footer/footer.js";

// Call createDynamicButton function to create a dynamic button
const dynamicButton = createDynamicButton("My Dynamic Button");
// Append the dynamic button wherever you need it in your index.js or other files

createHeader();
// Call createSection2 function to generate section-2
createSection1();
createSection2();

// Call createSection3 function to generate section-3
createSection3();

createSection4();
// Call createSection5 function to generate section-5
createSection5();

createSection6();
createFooter();