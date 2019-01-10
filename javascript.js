var puns = [
    'I lost my job at the bank on my very first day. A woman asked me to check her balance, so I pushed her over.',
    'I Googled \"How to start a Wildfire\", I got 48,500 matches.',
    'I accidentally drank a little food colouring last night. I ended up dying inside.',
    'I once ate a watch. It was time consuming.',
    'What do you call 100 rabbits walking backwards? A receding hare line.',
    'I\'ve just been fired from the clock making factory after all those extra hours I put in.'
]

function newPun() {
    var randomNumber = Math.floor(Math.random() * (puns.length));
    document.getElementById('pun').innerHTML = puns[randomNumber];
}