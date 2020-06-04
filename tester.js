require('@babel/register');

require('./main.js')
    .main(process.argv)
    .catch(e => {
        console.error(`Error during boot ${e.message}\n${e.stack}`);
        process.exit(1);
    });
