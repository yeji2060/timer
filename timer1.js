const array = process.argv.slice(2);

const sortedArray = array.sort((a, b) => a - b)

for(let i = 0; i < array.length; i++) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, array[i] * 1000);

}

