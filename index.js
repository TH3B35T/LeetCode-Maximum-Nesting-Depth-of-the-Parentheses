/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    // let current_depth = 0;
    let max_depth = 0;

    // for(let char of s){
    //     if(char === '('){
    //         current_depth ++;
    //         if(current_depth > max_depth){
    //             max_depth = current_depth;
    //         }

    //     } else if(char === ')'){
    //         current_depth --;
    //     }
    // }

    let stack = [];
    for(let char of s){
        if(char === '('){
            stack.push(char);
            // max_depth = max_depth > stack.length ? max_depth : stack.length;
            if(stack.length > max_depth){
                max_depth = stack.length;
            }
        } else if(char === ')'){
            stack.pop();
        }
    }
    return max_depth;
};
