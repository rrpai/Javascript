"use strict";

let Worker = require('./Worker.js');

function main()
{
    let worker1 = new Worker('Worker1');
    let worker2 = new Worker('Worker2');

    worker1.work();
    worker2.work();
}

// main
main();
