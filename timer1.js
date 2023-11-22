const array =  process.argv.slice(2).sort((a, b) => a - b);

for(let i = 0; i < array.length; i++) {
  if (array[i] >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, array[i] * 1000);  
  }
}

