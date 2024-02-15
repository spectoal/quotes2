const marvelQuo = [
    {
        text: "With great power comes great responsibility.",
        author: "-Uncle Ben"
    }, {
        text: "I AM IRONMAN.",
        author: "-Tony Stark" 
    }, {
        text: "I CAN DO THIS ALL DAY.",
        author: "-Steve Rogers"
    }, {
        text: "That's my secret Cap, I'm always angry.",
        author: "-Bruce Banner"
    }, {
        text: "NONE OF THIS MAKES SENSE, BUT IM GOING BACK OUT THERE BECAUSE ITS MY JOB.",
        author: "-Hawkeye"
    }, {
        text: "I'm here to pick up a fossil.",
        author: "-Black Widow"
    }, {
        text: "ANOTHER!!",
        author: "-Thor Odinson"
    }, {
        text: "Love is a dagger.",
        author: "-Loki"
    }, {
        text: "I DONT NEED YOU TO TELL ME WHO I AM.",
        author: "-Wanda"
    }, {
        text: "MAYBE HE WAS WRONG ABOUT YOU, AND IF HE WAS WRONG ABOUT YOU, THEN MAYBE HE WAS WRONG ABOUT ME.",
        author: "-Bucky Barnes"
    }, {
        text: "I AM INEVITABLE.",
        author: "-Thanos"
    }, {
        text: "NO MISTAKES. NO DO-OVERS. LOOK OUT FOR EACHOTHER. THIS IS THE FIGHT OF OUR LIVES.",
        author: "-Cap"
    }, {
        text: "It's an imperfect world, but it's the only one we've got.",
        author: "-Tony Stark"
    }, {
        text: "I would rather be a good man than a great king.",
        author: "-Thor Odinson"
    }, {
        text: "IM MARRY POPPINS YALL.",
        author: "-Yondu"
    }, {
        text: "I have nothing to prove to you.",
        author: "-Carol Danvers"
    }, {
        text: "YOU GET HURT, HURT EM BACK. YOU GET KILLED, WALK IT OFF.",
        author: "-Steve Rogers"
    }, {
        text: "As far as I'm concerned, THAT'S AMERICAS ASS.",
        author: "-Scott Lang"
    }
];

const HPQuo = [
    {
        text: "It does not do well to dwell on dreams and forget to live.",
        author: "-Albus Dumbledore"
    }, {
        text: "You're a little scary sometimes, you know that? Brilliant... but scary.",
        author: "-Ron Weasley" 
    }, {
        text: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
        author: "-Albus Dumbledore"
    }, {
        text: "Fear of a name only increases fear of the thing itself.",
        author: "-Hermione Granger"
    }, {
        text: "Training for the ballet, Potter?",
        author: "-Draco Malfoy"
    }, {
        text: "Dobby is free.",
        author: "-Dobby"
    }, {
        text: "I’ll be in my bedroom, making no noise and pretending I’m not there.",
        author: "-Harry Potter"
    }, {
        text: "I solemnly swear I am up to no good.",
        author: "-George Weasley"
    }, {
        text: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
        author: "-Albus Dumbledore"
    }, {
        text: "Mischief Managed!",
        author: "-Fred Weasley"
    }, {
        text: "Why, dear boy, we don’t send wizards to Azkaban just for blowing up their aunts.",
        author: "-Cornelius Fudge"
    }, {
        text: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
        author: "-Sirius Black"
    }, {
        text: "WICKED.",
        author: "-George and Fred Weasley "
    }, {
        text: "Just because you have the emotional range of a teaspoon doesn't mean we all have.",
        author: "-Hermione Granger"
    }, {
        text: "Things we lose have a way of coming back to us in the end, if not always in the way we expect.",
        author: "-Luna Lovegood"
    }, {
        text: "You’re just as sane as I am.",
        author: "-Luna Lovegood"
    }, {
        text: "Not my daughter, you bitch.",
        author: "-Molly Weasley"
    }, {
        text: "I've always wanted to use that spell.",
        author: "-Minerva McGonagall"
    }
];

const SWQuo = [
    {
        text: "Try not. Do or do not. There is no try.",
        author: "-Yoda"
    }, {
        text: "Great, kid, don't get cocky.",
        author: "-Han Solo" 
    }, {
        text: "Laugh it up, fuzzball!",
        author: "-Han Solo"
    }, {
        text: "In my experience, there's no such thing as luck.",
        author: "-Obi-Wan Kenobi"
    }, {
        text: "I am one with the Force and the Force is with me.",
        author: "-Chirrut"
    }, {
        text: "Never tell me the odds.",
        author: "-Han Solo"
    }, {
        text: "Stand together, die together. Let your death be the final word in the story of rebellion.",
        author: "-Emperor Palpatine"
    }, {
        text: "Let the past die. Kill it if you have to.",
        author: "-Kylo Ren"
    }, {
        text: "Once you start down the dark path, forever will it dominate your destiny.",
        author: "-Yoda"
    }, {
        text: "Hello there!",
        author: "-Obi-Wan Kenobi"
    }, {
        text: "No, I am your father.",
        author: "-Darth Vader"
    }, {
        text: "Help me Obi-Wan Kenobi. Your're my only hope.",
        author: "-Leia"
    }, {
        text: "It's over, Anakin. I have the high ground.",
        author: "-Obi-Wan Kenobi"
    }, {
        text: "I don't like sand. It's coarse and rough and irritating, and it gets everywhere.",
        author: "-Anakin Skywalker"
    }, {
        text: "RAWRGWAWGGR.",
        author: "-Chewbacca"
    }
];

function generate1() {

    let ranNum = Math.floor(Math.random() * marvelQuo.length);
    console.log(marvelQuo);
    
    document.querySelector("blockquote").innerText = marvelQuo[ranNum].text;
    document.querySelector("cite").innerText = marvelQuo[ranNum].author;
    };
    
function generate2() {

    let ranNum = Math.floor(Math.random() * HPQuo.length);
    console.log(HPQuo);
    
    document.querySelector("blockquote").innerText = HPQuo[ranNum].text;
    document.querySelector("cite").innerText = HPQuo[ranNum].author;
    };
        

 function generate3() {

    let ranNum = Math.floor(Math.random() * SWQuo.length);
    console.log(SWQuo);
    
    document.querySelector("blockquote").innerText = SWQuo[ranNum].text;
    document.querySelector("cite").innerText = SWQuo[ranNum].author;
    };
       



const button = document.querySelector('button');