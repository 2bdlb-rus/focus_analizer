
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
  let Average = (parseInt(Montime) + parseInt(Tuetime) + parseInt(WedTime) + parseInt(ThuTime) + parseInt(FriTime)) / 5;
  const day = new Map();
  day.set('Monday', parseInt(Montime));
  day.set('Tuesday', parseInt(Tuetime));
  day.set('Wednesday', parseInt(WedTime));
  day.set('Thursday', parseInt(ThuTime));
  day.set('Friday', parseInt(FriTime));


  console.log("Average focus: " + Average + " hours/day");

}

main().catch(console.error)