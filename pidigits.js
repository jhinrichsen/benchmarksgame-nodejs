// The Computer Language Benchmarks Game
// http://benchmarksgame.alioth.debian.org

// transliterated from Rick Branson's Ruby program
// contributed by Jochen Hinrichsen

"use strict";

const N = process.argv[2] || 27;

let i = 0,
  k = 0,
  ns = 0,
  k1 = 1,
  n = 1,
  a = 0,
  d = 1,
  t = 0,
  u = 0;

for (;;) {
  k += 1
  t = n<<1
  n *= k
  a += t
  k1 += 2
  a *= k1
  d *= k1
  if (a >= n) {
    let div = (n * 3 + a) / d;
    t = Math.floor(div / d);
    u = div % d;
    u += n
    if (d > u) {
      ns = ns*10 + t
      i += 1
      if (i % 10 == 0) {
        process.stdout.write(`${ns}    :${i}\n`);
        ns = 0
      }
      if (i >= N) break;
   
      a -= d*t
      a *= 10
      n *= 10
    }
  }
}
