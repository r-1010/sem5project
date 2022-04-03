// Options the user could type in
const prompts = [
    ["hi", "hey", "hello", "heya", "hi there!", "hey there!", "hello there!"], 
    ["good morning", "morning", "good afternoon", "afternoon", "noon", "good evening", "evening", "eve"],
    ["how are you", "how is life", "how are things"],
    ["not well","pretty good"],
    // ['My mental health is weakening','My friend cut me off',"Life is tough"],
    
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you"],
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what should i call you"
    ],
    // [

    //   "How did you do today?",
    //   "How did you work today",
    //   "How do you feel?",
    //   "How are you feeling?",
    //   "Are you doing okay?",
    // ],
    // [
    //   "How is your mental health lately?",
    //   "Do you feel happy or sad?",
    //   "What makes you happy?",
    //   "What makes you sad?",
    //   "What is bothering you",
    //   "Whats your daily routine?",
    //   "Why are you here?",
    //   "Describe yourself in 3 words!",
    //   "Do you see yourself as a dominating person(in general terms)?",
    //   "Do you think you deserve whatever you are going through right now?",
    //   "How often do you self-care?",
    //   "What are you suffering from?",
    //   "Have you tried anything to cope up with your issues?",
    //   "Do you drink or smoke?"
    // ],
    ["no","nope"],
    ["sad", "I feel sad", "gloomy", "vulnerable", "unhappy", "miserable"],
    ["Okay", "okay", "tired"],
    ["help me", "i need help", "i feel helpless"],
    ["My mental health is weakening", "I'm losing myself", "losing myself", "nice"],
    ["Can't figure out", "its complicated", "its confusing"],  
    ["so what should i do"],
    ["yes"],
    ["anxiety", "stress", "depression", "eating disorder", "substance abuse disorder"],
    ["i feel vulnerable","got to go now","gonna go","aight see ya!","goodbye"],
    ["haha","ha","lol","hehe","alright","joke"]
  ]
  
  // Possible responses, in corresponding order
  
  const replies = [
    ["Hello!", "Hi!", "Hey!", "Hey there!","Howdy."],
    ['greetings'],
    ["Fine... how are you?","Pretty well, how are you?","Fantastic, how are you?"],
    ["I'm your friend, you can tell me", "I'm listening..", "I'm all ears.."],
    // ["What is the issue?", "Tell me more..." ],
    // ["you can read a book", 'you can go out and hangout', 'you can go on a trip'],

     [
       "Nothing much, what are you feeling",
      //  "About to go to sleep",
      //  "Can you guess?",
      //  "I don't know actually"
     ],
     ["I am infinite"],
     ["I am just a bot", "I am a bot."],
     ["AI"],
     ["I am nameless", "I don't have a name"],
    //  ["my day was pretty good","Very productive"],
    ["Don't worry, we'll sort this out", "Its gonna be alright, be patient", "OK! Don't worry, I'll try to help you"],
     ["I love you too", "Me too"],
     ["do you feel you need someone?"],
     ["What happened?", "You can talk to me"],
     ["What are you suffering from?","What are you going through?"],
     ["I understand","That's ok, I can just talk to you to make you feel good"],
     ["I'd say, Book an appoitment and Go to the therapist"],
     ["Even I feel that way, What can I do for you?"],
     ["Oh! Did you had a talk about this with anybody? :("],
     ["It was lovely meeting you", "Goodbye and don't forget to visit the therapist"],
     ["My pleasure, stay safe!", "Thankyou for visiting, Take Care :)", "Everything is gonna get better."],
     ["I dont think this is the right place for you","This might be serious!"]
  ]
  
  // Random for any other user input
  
  const alternative = [
    // "Same",
    "I'm sorry?",
    // "Bro...",
    // "Try again",
    // "I'm listening...",
    "I don't understand :/"
  ]
  
  // Whatever else you want :)
  
  const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]