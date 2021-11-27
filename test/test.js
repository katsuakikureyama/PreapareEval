const PrepareEval = require( "../index.js");
const jsString = "function(){return 'no error.'; }()";
try {
   PrepareEval.Check(jsString,[],["function","Function","console"]);
   console.log( '"use strict";return ' + jsString );
   const v =Function('"use strict";return (' + jsString + ')')();
      console.log(v);
}catch(e){
  console.log(e);
}