'use strict';

Function.prototype.myApply = function(context, argsArray) {
    return this.call(context, ...argsArray);
};

