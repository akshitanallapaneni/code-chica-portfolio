document.getElementById("btn1").addEventListener("click", myName)
document.getElementById("btn2").addEventListener("click", mySchool)
document.getElementById("btn3").addEventListener("click", myCareer)
document.getElementById("btn4").addEventListener("click", myHobbies)


function myName() {
    document.getElementById("name").innerHTML = "My family contains of 4 people. My mom, dad, and younger brother. My mom and dad are very passionate about what they do and always support me in anyway possible. They are always trying to make me feel good about myself and what I do. My younger brother is a bit annoying but he is very caring and is always making me laugh. All in all, I love my family to the moon and back!";
}

function mySchool() {
    document.getElementById("school").innerHTML = " I love to so arts and crafts. I am always making things and painting things to make our house decorative. I also love to read and my favorite book is Out of Mind because it is so inspiring and makes you always strive for your goals. In general, anything that takes my mind of stress is usually what I like to do. ";
}

function myCareer() {
    document.getElementById("career").innerHTML = "Outside of school, I do a type of martial arts called Tae Kwon Do. I am black belt and I enjoy this class. It teaches you self defense and how to be responsible. This class is one of the classes that I love the most. A fun fact is that 4 more girls that are in this Code Chica Camp also do Tae Kwon Do with me and are in my class. Lastly, I also do a classical Indian dance called Bhartanatyam. This is one of my passions and I love to dance. ";
}

function myHobbies() {
    document.getElementById("hobbies").innerHTML = "I just finished 8th grade at Walsh Middle School and I will be entering my freshman year at Round Rock High School. I am excited to be a freshman at RRHS and to participate in all the clubs and classes at Round Rock.";
}