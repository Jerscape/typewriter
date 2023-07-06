
const sentence = "hello there from lighthouse labs"
let count = 2000
for(const char of sentence){
  
  setTimeout(() => {
    process.stdout.write(char)
    //console.log(char)

  }, count)
  count+=50
  
}
console.log("\n")

