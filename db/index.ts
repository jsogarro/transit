/**
 * KDB Configuration
 */
import * as nodeq from "node-q";
import * as bluebird from "bluebird";

// const q = bluebird.promisifyAll(require('node-q'));

// const conn = q.connect({ host: "localhost", port: 5000 })

// conn.then(x => console.log('Result: ', x))
//   .catch(e => console.error(e));

// const main = async () => {
//   try {
//     const conn = await q.connect({ host: "localhost", port: 5000 });
//     const result = await conn.k('tables[]');

//     console.log('RESULT: ', result);
//   } catch (e) {
//     console.error('ERROR: ', e);
//   }
// };

// main();

nodeq.connect({ host: "localhost", port: 5000 }, (err, con) => {
  if (err) throw err;
  console.log("connected");

  con.k("sum 1 2 3", (err, res) => {
    if (err) throw err;
    console.log("result", res); // 6
  });

  con.k("tables[]", (err, res) => {
    if (err) throw err;
    console.log("result", res); // 6
  });

  con.k("1=1", (err, res) => {
    if (err) throw err;
    console.log("result", res);
  });

  con.k("1=2", (err, res) => {
    if (err) throw err;
    console.log("result", res);
  });

  con.k("5#t", (err, res) => {
    if (err) throw err;
    console.log("result", res);
  });

  const symbol = "aapl";
  const limit = 100;
  con.k(
    `${limit}#select date,time,sym,qty,px from t where sym=\`${symbol}`,
    (err, res) => {
      if (err) throw err;
      console.log("result: ", res);
    }
  );
});
