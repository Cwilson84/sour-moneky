//let myFamArr = ['Chris','Nadi', 'Nat', 'Abby', 'Ollie', 'Logan', 'Michael', 'Jason', 'Sean', 'Preston', 'Jobe', 'Selah'];
//let myFamArrTwo = ['Nadi', 'Nat', 'Abby', 'Ollie', 'Logan', 'Michael', 'Jason', 'Sean', 'Preston', 'Jobe', 'Selah'];
//user = myFamArr[Math.floor(Math.random() * myFamArr.length)];
//userTwo = myFamArrTwo[Math.floor(Math.random() * myFamArrTwo.length)];
const whatHappenedArr = [` eats boogers. I've seen it! Don't even ask how they get 'em...`, 
' sits on the toilet facing the tank. Says it`s a shelf.',
' is actually pretty sweet...as fas as sour people go.', 
' probably can`t read this anyways, so who cares?', 
' walked into a glass door...twice!',  
' tried to party like it was 1999...didn`t go well. Will probably be missed.', 
' dropped it like it was hot...and is now $5 poorer. Who knew you could lose money?', 
' wanted to be in a talent show...guess how that went? It was bad; really, really bad.', 
' lost a lot of money in the stock market...but gained a new skill...call it adult swinging! (look ma, no hands...or breathing)', 
' is garbage at C.O.D. Just pure trash bag and trash bin bad.', 
' is like if the stuff on the bottom of your shoes could become some kind of sentient, amalgamous blob. Should change their name to Bob...closer to blob.', 
' is like that one friend that Jesus had.  You remeber...', 
' got locked inside the bathroom for over 12 minutes before realizing the door locks from the inside.', 
' would be winning basically everyday...if everyday were opposite day.', 
' is like a screen door on a submarine.', 
' is the life of every party...that they throw at a cemetary.', 
' is like living elevator music...just less upbeat and inspiring.', 
' only gives "high-fives" with their butt wiping hand. Paper is wasteful, bro.', 
' is a real hoot.  All their...friend...describes them as "Pretty much alright, I guess.".', 
' thinks mayo is hecka spicy...go figure.', 
' thinks the snozzberries taste like snozzberries...am I right, bro?', 
' is what you would get if you could bottle stupid.'];


function myFunction() {
    gotem = whatHappenedArr[Math.floor(Math.random() * whatHappenedArr.length)];
    let user = prompt("Enter a name");
    if (user.length > 0) {
        document.getElementById("insult-gen").innerHTML = (user + gotem);
    } else {
        document.getElementById("insult-gen").innerHTML = (`Let's try this again, enter a "valid" name`);

    }
}
