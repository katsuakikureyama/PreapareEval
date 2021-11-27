# Idea

If the user can execute a small script, a lot of work may become easier .

For example, It is also possible to register the script in the server and execute it later.

But it basically involves dangerous implementations.

Therefore , I adopted defining a vulnerable function name.

However, it is a difficult task.

Please let me know if you have a good method or idea.


### Example Code
```

const PrepareEval = require( "../index.js");
const jsString = "function(){return 'no error.'; }()";
try {
    
        PrepareEval.Check(jsString,[]  /* disables */ ,["function","Function","console"] /* enables */);
        console.log( '"use strict";return ' + jsString );
        
        const v =Function('"use strict";return (' + jsString + ')')();
        console.log(v);
    
    } catch(e){
    
        console.log(e);
}

```
