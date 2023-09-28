/**
 * Print primes numbers from a number until 1
 */
function print(str) {
  console.log(str)
}

function isPrime(num) {
  for(let i = num - 1; i > 1; i--) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

function calculatePrimes(fromNum) {
  const primes = []
  for(let i = fromNum; i > 0; i--) {
    if (isPrime(i)) {
      primes.push(i)
    }
  }

  return primes
}

function printResult(primes) {
  primes.forEach(num => {
    print(`${num}`)
  })
}

function primesNumbers() {
  print('-- Prime numbers --')
  const from = 100
  print(`from ${from}`)
  const primes = calculatePrimes(from)
  printResult(primes)
  print('-- End --')
}

primesNumbers()
