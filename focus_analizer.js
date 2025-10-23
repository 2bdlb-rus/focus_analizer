const days = ["Mon","Tue","Wed","Thu","Fri"];for (const d of days);
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
async function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}
async function main() {
    const Montime = await askQuestion('Cколько времени ты фокусировался в Понедельник? ');
    const Tuetime = await askQuestion("Сколько времени ты фокусировался во Вторник? ");
    const WedTime = await askQuestion("Сколько времени ты фокусировался в Среду? ");
    const ThuTime = await askQuestion("Сколько времени ты фокусировался в Четверг? ");
    const FriTime = await askQuestion("Сколько времени ты фокусировался в Пятницу? ");
let Average = (Montime + Tuetime + WedTime + ThuTime + FriTime) /5;
console.log("Average focus: "+ Average+ " hours/day");

}

main().catch(console.error)