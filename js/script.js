'use strict';

const complexArray = [
    [1, 2,
        [3.1, 3.2,
            [3.21, 3.22]
        ],
        4
    ],
    [5,
        [6,
            [7,
                [8, 9]
            ]
        ]
    ],
    [
        [10, 11],
        12, 13
    ]
];

const arrFunction = function (complexArray){
    if(arguments.length !== 1) {
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    }

    const res = [];

    const arrNew = function (arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                arrNew(arr[i]);
            } else {
                res.push(arr[i]);
            }
        }
    }

    arrNew(complexArray);
    return res;
}

console.log(arrFunction(complexArray));
