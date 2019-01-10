var puns = [
    'I lost my job at the bank on my very first day. A woman asked me to check her balance, so I pushed her over.',
    'I Googled \"How to start a Wildfire\", I got 48,500 matches.',
    'I accidentally drank a little food colouring last night. I ended up dying inside.',
    'I once ate a watch. It was time consuming.',
    'What do you call 100 rabbits walking backwards? A receding hare line.',
    'I\'ve just been fired from the clock making factory after all those extra hours I put in.',
    'How do trees get online? - They just log in.',
    'I know it\'s cheesy, but I feel grate.',
    'Why do cows have hooves instead of feet? Because they lactose.',
    'The past, the present, and the future walk into a bar...It was tense.',
    'I got hit in the head with a can of soda yesterday. Luckily for me, it was a soft drink.',
    'What do you call an alligator with a vest? An investigator.'
    
    
]

function newPun() {
    var randomNumber = Math.floor(Math.random() * (puns.length));
    document.getElementById('pun').innerHTML = puns[randomNumber];
}