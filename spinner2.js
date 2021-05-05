const spinnersentence = "|/-\|/-\|";
let modifier = 200;
let delay = 100;
for (const char of spinnersentence) {
  
  setTimeout(() => {
    process.stdout.write('\r'+char);
  }, delay)
  delay += modifier;
}
