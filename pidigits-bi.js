// The Computer Language Benchmarks Game
// http://benchmarksgame.alioth.debian.org

// transliterated from Rick Branson's Ruby program
// contributed by Jochen Hinrichsen

"use strict";

const BI = require("big-integer");

const N = new BI(process.argv[2] || 70);

const ZERO = new BI(0),
      ONE = new BI(1),
      TWO = new BI(2),
      THREE = new BI(3),
      TEN = new BI(10);

let i = new BI(0),
  k = new BI(0),
  ns = new BI(0),
  k1 = new BI(1),
  n = new BI(1),
  a = new BI(0),
  d = new BI(1),
  t = new BI(0),
  u = new BI(0);

for (;;) {
  k = k.add(ONE);
  t = n.times(TWO);
  n = n.times(k);
  a = a.add(t);
  k1 = k1.add(TWO);
  a = a.times(k1);
  d = d.times(k1);
  if (a.geq(n)) {
    let q = n.times(THREE).add(a);
    t = q.divide(d);
    u = q.mod(d);
    u = u.add(n);
    if (d.gt(u)) {
      ns = ns.times(TEN).add(t);
      i = i.add(ONE);
      if (i.mod(TEN).eq(ZERO)) {
        let s = ns.toString(10);
        process.stdout.write(`${"0".repeat(10 - s.length) + s}    :${i}\n`);
        ns = new BI(0);
      }
      if (i.geq(N)) break;
   
      a = a.minus(d.times(t));
      a = a.times(TEN);
      n = n.times(TEN);
    }
  }
}
