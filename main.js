import { info } from './logger';

 function delay(secs) {
    return new Promise(resolve => setTimeout(resolve, secs * 1000));
}


export async function main(argv) {
    const [, , n] = argv;
    const count = parseInt(n);

    let now = Date.now();
    const before = now;
    info(`Wait for ${count} seconds`);
    await delay(count);

    const duration = Date.now() - before;
    info(`Done ${duration / 1000} secs`);
}
