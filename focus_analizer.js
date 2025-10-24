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
let Average = (parseInt(Montime) + parseInt(Tuetime) + parseInt(WedTime) + parseInt(ThuTime) + parseInt(FriTime)) /5;
const day = new Map();
day.set(mon,parseInt(Montime));
day.set(tue,parseInt(Tuetime));
day.set(wed,parseInt(WedTime));
day.set(thu,parseInt(ThuTime));
day.set(fri,parseInt(FriTime));


console.log("Average focus: "+ Average+ " hours/day");

}

main().catch(console.error)