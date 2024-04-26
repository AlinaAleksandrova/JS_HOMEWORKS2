'use strict';
(function () {
    const funClosures = () => {
        let sum = 0;
        return (num) => sum += num;
    };

    const sum = funClosures();

    console.log(sum(3));
    console.log(sum(5));
    console.log(sum(20));
})();