//comment each function and understand them fully
//implement keyboard inputs
//do not display something other than enter, backspace, and keys 2022-12-01
//upload to real world 2022-11-30
//TODO: upload to github
//TODO: upload to my website
//make a pop up that explains how to play
//TODO: learn about objects/JSON more
//TODO: make everything responsive
//upload pictures and bio.
//when the game is complete, prompt to play it one more time
//don't allow user to click enter when row isn't filled
//TODO: don't accept names and words that don't exist (API??)
//TODO: center the tiles with calculations of number of letters
//TODO: when book icon is cliked, open a list of clickable teachers' names
//      when it is clicked, it prompts the teacher's modal
//TODO: link up the answerkey's teacher with the teacher modal 
//TODO: link teacher-popup with name list
//terminate the game when currentRow == 5
//prompt pop-up of replay
//learn how to implement cache

//assining the tile-container to tileDisplay
const tileDisplay = document.querySelector('.tile-container')
//assining the key-container to keyboard
const first_row = document.querySelector('.first-row');
const second_row = document.querySelector('.second-row');
const third_row = document.querySelector('.third-row');
//assining message-container to messageDisplay
const messageDisplay = document.querySelector('.message-container')
const closeMessage = document.querySelector('.close_message_container')
const openModalButtons = document.querySelector('.open_popup')
const closeModalButtons = document.querySelector('.close_popup')
const overlay = document.getElementById('overlay')
const openStats = document.querySelector('.open_stats')
const closeStats = document.querySelector('.close_stats-modal')
const openBooks = document.querySelector('.open_lists')
const closeBooks = document.querySelector('.close_books')
const closeTeaList = document.querySelector('.close_tea')
/* const teaBody = document.querySelector('.tea_body') */
const teaProf = document.querySelectorAll('.teaBody')
const play_again = document.querySelector('.button')

let play = false;
let popup = false;
let stats = false;
let books = false;
let profile = false;

let subject_val;
let fun_fact_val;
let comment_val;
let first_val;
let last_val; 
let email_val;


const getContents = (teacher) => {
    subject_val = profiles[teacher].subject;
    fun_fact_val = profiles[teacher].Fun_Fact;
    comment_val = profiles[teacher].comment;
    first_val = profiles[teacher].firstName;
    last_val = profiles[teacher].lastName;
    email_val = profiles[teacher].email;
}

const create_subject = () => {
    const subject = document.createElement('p')
    subject.className = "sub-para";
    subject.setAttribute('id','subject')
    const subject_content = document.createTextNode(subject_val)
    subject.append(subject_content)
    const subject_title = document.getElementById('subject_heading')
    subject_title.append(subject)
}

const create_fun = () => {
    const fun_fact = document.createElement('p')
    fun_fact.className = "sub-para";
    fun_fact.setAttribute('id','fun_fact')
    const fun_content = document.createTextNode(fun_fact_val)
    fun_fact.append(fun_content)
    const fun_title = document.getElementById('fun_heading')
    fun_title.append(fun_fact)
}

const create_comment = () => {
    const comment = document.createElement('p')
    comment.className = "paragraph-2";
    comment.setAttribute('id','paragraph-2')
    const comment_content = document.createTextNode(comment_val)
    comment.append(comment_content)
    const comment_title = document.getElementById('paragraph_heading')
    comment_title.append(comment)
}

const create_first = () => {
    const first_name = document.createElement('h1')
    first_name.className = "heading";
    const first_content = document.createTextNode(first_val)
    first_name.append(first_content)
    const first_title = document.getElementById('heading')
    first_title.append(first_name)
}

const create_last = () => {
    const last_name = document.createElement('h1')
    last_name.className = "heading-2";
    const last_content = document.createTextNode(last_val)
    last_name.append(last_content)
    const last_title = document.getElementById('heading-2')
    last_title.append(last_name)
}

const create_email = () => {
    const email_name = document.createElement('p')
    email_name.className = "paragraph";
    const email_content = document.createTextNode(email_val)
    email_name.append(email_content)
    const email_title = document.getElementById('email')
    email_title.append(email_name)
}

play_again.addEventListener('click', () => {
    location.reload()
})

teaProf.forEach(btn => {
    btn.addEventListener('click', () => {
    if (!profile){
        play_again.style.display = "none";
        const teacher = btn.id
        getContents(teacher)

        const modals = document.querySelector('.div-block-3')
        
        create_subject()
        create_fun()
        create_comment()
        create_first()
        create_last()
        create_email()
    
        profile = true;
        openModal(modals);
    }
})
});

closeTeaList.addEventListener('click', () => {
    const modals = document.querySelector('.teachers_list.active')
    books = false;
    closeModal(modals)
})

closeBooks.addEventListener('click', () => {
    console.log("closebook clicked")
    const modals = document.querySelector('.div-block-3.active')
    const subject = document.getElementById('subject')

    console.log(subject)
    const fun_fact = document.getElementById('fun_fact')
    const paragraph_2 = document.getElementById('paragraph-2')
    
    const heading = document.querySelector('.heading')
    const heading_2 = document.querySelector('.heading-2')
    const emails = document.querySelector('.paragraph')

    subject.remove() 
    fun_fact.remove()
    paragraph_2.remove()
    heading.remove()
    heading_2.remove()
    emails.remove()
    console.log(subject) 
    
    profile = false;
    closeModal(modals)
})

openBooks.addEventListener('click', () => {
    const modals = document.querySelector('.teachers_list')
    books = true;
    openModal(modals)
})

closeStats.addEventListener('click', () => {
    const modals = document.querySelector('.stats-modal.active')
    stats = false;
    closeModal(modals)
})

openStats.addEventListener('click', () => {
    const modals = document.querySelector('.stats-modal')
    stats = true;
    openModal(modals)
})

openModalButtons.addEventListener('click', () => {
    const modals = document.querySelector('.popup')
    popup = true;
    openModal(modals)
})

overlay.addEventListener('click', () => {
    let modals;
    if (popup){
        modals = document.querySelector('.popup.active')
        popup = false;
    }
    if (stats){
        modals = document.querySelector('.stats-modal.active')
        stats = false;
    }
    if (books){
        modals = document.querySelector('.teachers_list.active')
        books = false;
    }
    if (profile){
        modals = document.querySelector('.div-block-3.active')
        profile = false;
    }
    closeModal(modals)
})
  
closeModalButtons.addEventListener('click', () => {
      const modal = document.querySelector('.popup.active')
      popup = false;
      closeModal(modal)
})
  
function openModal(modal) {
    if (modal == null) return
    modal.classList.toggle('active')
    if (!books){
        if(!profile){
            overlay.classList.toggle('active')
        }
    }

};

(openModalFirst =>{
    const modals = document.querySelector('.popup')
    popup = true;
    openModal(modals) 
    if (!(window.localStorage.getItem("totalPlayed") != null)){
        window.localStorage.setItem('totalWins', 0);
        window.localStorage.setItem('currentStreak', 0);
        window.localStorage.setItem('totalPlayed', 0);
    }
    const totalWins = window.localStorage.getItem('totalWins');
    const totalGames = window.localStorage.getItem('totalPlayed');
    const winPct = Math.round((totalWins / totalGames) * 100) || 0;
        
    const messageElementPlay = window.localStorage.getItem('totalPlayed');
    const messageElementStreak = window.localStorage.getItem('currentStreak')

    document.getElementById('play_num').innerHTML = messageElementPlay.toString();
    document.getElementById('streak_num').innerHTML = messageElementStreak.toString();
    document.getElementById('win_num').innerHTML = winPct.toString();

    if (!(window.localStorage.getItem('guess-distribution1') != null)){
        window.localStorage.setItem('guess-distribution1', 0);
        window.localStorage.setItem('guess-distribution2', 0);
        window.localStorage.setItem('guess-distribution3', 0);
        window.localStorage.setItem('guess-distribution4', 0);
        window.localStorage.setItem('guess-distribution5', 0);
        window.localStorage.setItem('guess-distribution6', 0);
    }
    const guessBox1 = window.localStorage.getItem('guess-distribution1');
    const guessBox2 = window.localStorage.getItem('guess-distribution2');
    const guessBox3 = window.localStorage.getItem('guess-distribution3');
    const guessBox4 = window.localStorage.getItem('guess-distribution4');
    const guessBox5 = window.localStorage.getItem('guess-distribution5');
    const guessBox6 = window.localStorage.getItem('guess-distribution6');

    document.getElementById('stats-1').innerHTML = guessBox1.toString(); 
    document.getElementById('stats-2').innerHTML = guessBox2.toString();
    document.getElementById('stats-3').innerHTML = guessBox3.toString();
    document.getElementById('stats-4').innerHTML = guessBox4.toString();
    document.getElementById('stats-5').innerHTML = guessBox5.toString();
    document.getElementById('stats-6').innerHTML = guessBox6.toString();
})();
  
 function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  } 

//list of teacher's names
const pordle = [
"agius", "lisa", "baker", "jean", 
"baxter", "ian", "benson", "mara", "sonia", "blair", "brion", "pete",
"broadland", "holly", "carmichael", "marc", "cavin", "ed", "chan", 
"jennie", "chittenden", "kasey", "cordoni", "chris", "correia", "cristina", "daniel", "catherine", "dimas", "maria",
"dobie", "polly", "dodge", "heather", "douglas", "julie", "duey", 
"pierre", "ehn", "zsuzsanna", "ehns", "mike", "fleming", "stephen",
"foster", "jason", "foster", "jon", "fracca", "sandro", "hamilton",
"mori", "hansen", "carolyn", "humphries", "andrew", "ip", "annabelle",
"jones", "gabriel", "kefalas", "andy", "lai", "daniel", "ling", "karine", "liu", 
"michelle", "jessie", "mey","michel", "noguchi", "sachiko", "nussbaum", "jonathan", "oconnor", "sean", "petheriotis", "nick", "peters", "ginaya",
"richmond", "jeffrey", "rogers", "elizabeth", "schmitt", "stefan", 
"sim", "janice", "skarsgard", "paul", "smith", 
"davin", "umeki", "takuya", "wong", "sally", 
"yang", "aaron", "yip", "stacey", 
];

//this will store the answerkey
let answer;
let temp;


//matches fname and lname
//TODO:deal with duplicated names
const name_match = {
    agius: {
        name: "Agius_Lisa",
    },
    lisa: {
        name: "Agius_Lisa",
    },
    baker: {
        name: "Jean_Baker",
    },
    jean: {
        name: "Jean_Baker",
    },
    baxter: {
        name: "Ian_Baxter",
    },
    ian: {
        name: "Ian_Baxter",
    },
    benson: {
        name: "Mara_Benson",
    },
    mara: {
        name: "Mara_Benson",
    },
    blair: {
        name: "Sonia_Blair",
    },
    sonia: {
        name: "Sonia_Blair",
    },
    brion: {
        name: "Pete_Brion",
    },
    pete:{
        name: "Pete_Brion",
    },
    broadland: {
        name: "Holly_Broadland",
    },
    holly: {
        name: "Holly_Broadland",
    },
    carmichael: {
        name: "Marc_Carmichael",
    },
    marc: {
        name: "Marc_Carmichael",
    },
    cavin: {
        name: "Ed_Cavin",
    },
    ed: {
        name: "Ed_Cavin",
    },
    chan: {
        name: "Jennie_Chan",
    },
    jennie: {
        name: "Jennie_Chan",
    },
    chittenden: {
        name: "Kasey_Chittenden",
    },
    kasey: {
        name: "Kasey_Chittenden",
    },
    cordoni: {
        name: "Chris_Cordoni",
    },
    chris: {
        name: "Chris_Cordoni",
    },
    correia: {
        name: "Cristina_Correia",
    },
    cristina: {
        name: "Cristina_Correia",
    },
    //TODO:two daniels will cause error/ maybe show both
    daniel: {
        name: "Catherine_Daniel",
    },
    catherine: {
        name: "Catherine_Daniel",
    },
    dimas: {
        name: "Maria_Dimas",
    },
    maria: {
        name: "Maria_Dimas",
    },
    dobie: {
        name: "Polly_Dobie",
    },
    polly: {
        name: "Polly_Dobie",
    },
    dodge: {
        name: "Heather_Dodge",
    },
    heather: {
        name: "Heather_Dodge",
    },
    douglas: {
        name: "Julie_Douglas",
    },
    julie: {
        name: "Julie_Douglas",
    },
    duey: {
        name: "Pierre_Duey",
    },
    pierre: {
        name: "Pierre_Duey",
    },
    ehn: {
        name: "Zsuzsanna_Ehn",
    },
    zsuzsanna: {
        name: "Zsuzsanna_Ehn",
    },
    ehns: {
        name: "Mike_Ehns",
    },
    mike: {
        name: "Mike_Ehns",
    },
    fleming: {
        name: "Stephen_Fleming",
    },
    stephen: {
        name: "Stephen_Fleming",
    },
    //TODO:two fosters
    foster: {
        name: "Jason_Foster",
    },
    jason: {
        name: "Jason_Foster",
    },
    foster: {
        name: "Jon_Foster",
    },
    jon: {
        name: "Jon_Foster",
    },
    fracca: {
        name: "Sandro_Fracca",
    },
    sandro: {
        name: "Sandro_Fracca",
    },
    hamilton: {
        name: "Mori_Hamilton",
    },
    mori: {
        name: "Mori_Hamilton",
    },
    hansen: {
        name: "Carolyn_Hansen",
    },
    carolyn: {
        name: "Carolyn_Hansen",
    },
    humphries: {
        name: "Andrew_Humphries",
    },
    andrew: {
        name: "Andrew_Humphries",
    },
    ip: {
        name: "Annabelle_Ip",
    },
    annabelle: {
        name: "Annabelle_Ip",
    },
    jones: {
        name: "Gabriel_Jones",
    },
    gabriel: {
        name: "Gabriel_Jones",
    },
    kefalas: {
        name: "Andy_Kefalas",
    },
    andy: {
        name: "Andy_Kefalas",
    },
    daniel: {
        name: "Daniel_Lai",
    },
    lai: {
        name: "Daniel_Lai",
    },
    ling: {
        name: "Karine_Ling",
    },
    karine: {
        name: "Karine_Ling",
    },
    lin: {
        name: "Teresa_Lin",
    },
    teresa: {
        name: "Teresa_Lin",
    },
    liu: {
        name: "Michelle_Liu",
    },
    michelle: {
        name: "Michelle_Liu",
    },
    dean: {
        name: "Long_Dean",
    },
    long: {
        name: "Long_Dean",
    },
    serge: {
        name: "Serge_Makarenko",
    },
    makarenko: {
        name: "Serge_Makarenko",
    },
    mey: {
        name: "Michel_Mey",
    },
    michel: {
        name: "Michel_Mey",
    },
    jessie: {
        name: "Jessie_Miller",
    },
    miller: {
        name: "Jessie_Miller",
    },
    sachiko: {
        name: "Sachiko_Noguchi",
    },
    noguchi: {
        name: "Sachiko_Noguchi",
    },
    nussbaum: {
        name: "Jonathan_Nussbaum",
    },
    jonathan: {
        name: "Jonathan_Nussbaum",
    },
    oconnor: {
        name: "Sean_OConnor",
    },
    sean: {
        name: "Sean_OConnor",
    },
    petheriotis: {
        name: "Nick_Petheriotis",
    },
    nick: {
        name: "Nick_Petheriotis",
    },
    peters: {
        name: "Ginaya_Peters",
    },
    ginaya: {
        name: "Ginaya_Peters", 
    },
    richmond: {
        name: "Jeffrey_Richmond",
    },
    jeffrey: {
        name: "Jeffrey_Richmond",
    },
    //TODO:
    elizabeth: {
        name: "Elizabeth_Rogers",
    },
    rogers: {
        name: "Elizabeth_Rogers",
    },
    schmitt: {
        name: "Stefan_Schmitt",
    },
    stefan: {
        name: "Stefan_Schmitt",
    },
    sim: {
        name: "Janice_Sim",
    },
    janice: {
        name: "Janice_Sim",
    },
    skarsgard: {
        name: "Paul_Skarsgard",
    },
    paul: {
        name: "Paul_Skarsgard",
    },
    smith: {
        name: "Davin_Smith",
    },
    davin: {
        name: "Davin_Smith",
    },
    umeki: {
        name: "Takuya_Umeki",
    },
    takuya: {
        name: "Takuya_Umeki",
    },
    violi: {
        name: "Paula_Violi",
    },
    paula: {
        name: "Paula_Violi",
    },
    wong: {
        name: "Sally_Wong",
    },
    sally: {
        name: "Sally_Wong",
    },
    yang: {
        name: "Aaron_Yang",
    },
    aaron: {
        name: "Aaron_Yang",
    },
    yip: {
        name: "Stacey_Yip",
    },
    stacey: {
        name: "Stacey_Yip",
    },
};

//TODO: create profiles for each teachers from email surveys
//add email address
//separate the first name and last name
const profiles = {
    Agius_Lisa: {
        subject: "Counsellor Grade 11/Career Life Connections 12",
        Fun_Fact: "test-fun fact",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi explicabo a autem dolorem cupiditate natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore molestiae vero distinctio, dolorum natus!",
        fullName: "Lisa Agius",
        firstName:"Lisa",
        lastName:"Agius",
        email:"lagius@vsb.bc.ca",
    },
    Jean_Baker: {
        subject: "Math",
        Fun_Fact: "test",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi explicabo a autem dolorem cupiditate natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore molestiae vero distinctio, dolorum natus!",
        fullName: "Jean Baker",
        firstName:"Jean",
        lastName:"Baker",
        email:"jnbaker@vsb.bc.ca",
    },
    Ian_Baxter: {
        subject: "Technical Studies",
        Fun_Fact: "test",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi explicabo a autem dolorem cupiditate natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore molestiae vero distinctio, dolorum natus!",
        fullName: "Ian Baxter",
        firstName:"Ian",
        lastName:"Baxter",
        email:"ibaxter@vsb.bc.ca",
    },
    Mara_Benson: {
        subject: "Mini/Math/Science",
        Fun_Fact: " ",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi explicabo a autem dolorem cupiditate natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore molestiae vero distinctio, dolorum natus!",
        fullName: "Mara Baxter",
        firstName:"Mara",
        lastName:"Baxter",
        email:"mbenson@vsb.bc.ca",
    },
    Sonia_Blair: {
        subject: "Principal/Supervision of Gr 9 & 12",
        Fun_Fact: " ",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi explicabo a autem dolorem cupiditate natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore molestiae vero distinctio, dolorum natus!",
        fullName: "Sonia Blair",
        firstName:"Sonia",
        lastName:"Blair",
        email:"sblair@vsb.bc.ca",
    },
    Pete_Brion: {
        subject: "Mini/PE",
        Fun_Fact: " ",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi explicabo a autem dolorem cupiditate natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore molestiae vero distinctio, dolorum natus!",
        fullName: "Pete Brion",
        firstName:"Pete",
        lastName:"Brion",
        email:"pbrion@vsb.bc.ca",
    },
    Holly_Broadland: {
        subject: "Librarian",
        Fun_Fact: " ",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi explicabo a autem dolorem cupiditate natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore molestiae vero distinctio, dolorum natus!",
        fullName: "Holly Broadland",
        firstName:"Holly",
        lastName:"Broadland",
        email:"hbroadland@vsb.bc.ca",
    },
    Marc_Carmichael: {
        subject: "Science",
        Fun_Fact: " ",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi explicabo a autem dolorem cupiditate natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore molestiae vero distinctio, dolorum natus!",
        fullName: "Marc Carmichael",
        firstName:"Marc",
        lastName:"Carmichael",
        email:"mcarmichae@vsb.bc.ca",
    },
    Ed_Cavin: {
        subject: "ELL/Modern Languages",
        Fun_Fact: " ",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi explicabo a autem dolorem cupiditate natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore molestiae vero distinctio, dolorum natus!",
        fullName: "Ed Cavin",
        firstName:"Ed",
        lastName:"Cavin",
        email:"ecavin@vsb.bc.ca",
    },
    Jennie_Chan: {
        subject: "Science",
        Fun_Fact: " ",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi explicabo a autem dolorem cupiditate natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore molestiae vero distinctio, dolorum natus!",
        fullName: "Jennie Chan",
        firstName: "Jennie",
        lastName: "Chan",
        email:"jtchan@vsb.bc.ca",
    },
    Kasey_Chittenden: {
        subject: "Counsellor Gr 8&10/Career Life Connections 12",
        Fun_Fact: " ",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi explicabo a autem dolorem cupiditate natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore molestiae vero distinctio, dolorum natus!",
        fullName: "Kasey Chittenden",
        firstName: "Kasey",
        lastName: "Chittenden",
        email:"kchitenden@vsb.bc.ca",
    },
    Chris_Cordoni: {
        subject: "Counsellor Gr 8&12/Career Life Connections 12",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Chris Cordoni",
        firstName: "Chris",
        lastName: "Cordoni",
        email:"ccordoni@vsb.bc.ca",
    },
    Cristina_Correia: {
        subject: "English/Performing Arts",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Cristina Correia",
        firstName: "Cristina",
        lastName: "Correia",
        email: "ccoreia@vsb.bc.ca",
    },
    Catherine_Daniel: {
        subject: "Science/Skills",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Catherine Daniel",
        firstName: "Catherine",
        lastName: "Daniel",
        email: "cdaniel@vsb.bc.ca",
    },
    Maria_Dimas: {
        subject: "Mini/Fine Arts/Socials",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Maria Dimas",
        firstName: "Maria",
        lastName: "Dimas",
        email: "mdimas@vsb.bc.ca",
    },
    Polly_Dobie: {
        subject: "English/French/Library",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Polly Dobie",
        firstName: "Polly",
        lastName: "Dobie",
        email: "pdobie@vsb.bc.ca",
    },
    Heather_Dodge: {
        subject: "Fine Arts",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Heather Dodge",
        firstName: "Heather",
        lastName: "Dodge",
        email: "hdodge@vsb.bc.ca",
    },
    Julie_Douglas: {
        subject: "PE/Social Studies",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Julie Douglas",
        firstName: "Julie",
        lastName: "Douglas",
        email: "jdouglas@vsb.bc.ca",
    },
    Pierre_Duey: {
        subject: "PE",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Pierre Duey",
        firstName: "Pierre",
        lastName: "Duey",
        email: "pduey@vsb.bc.ca",
    },
    Zsuzsanna_Ehn: {
        subject: "Social Studies",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Zsuzsanna Ehn",
        firstName: "Zsuzsanna",
        lastName: "Ehn",
        email: "zehn@vsb.bc.ca",
    },
    Mike_Ehns: {
        subject: "Performing Arts/Socials",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Mike Ehns",
        firstName: "Mike",
        lastName: "Ehns",
        email: "menns@vsb.bc.ca",
    },
    Stephen_Fleming: {
        subject: "Performing Arts",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Stephen Fleming",
        firstName: "Stephen",
        lastName: "Fleming",
        email: "sfleming@vsb.bc.ca",
    },
    Jason_Foster: {
        subject: "English",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Jason Foster",
        firstName:"Jason",
        lastName:"Foster",
        email: "jafoster@vsb.bc.ca",
    },
    Jon_Foster: {
        subject: "Math/Applied Skills",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Jon Foster",
        firstName:"Jon",
        lastName:"Foster",
        email: "jfoster@vsb.bc.ca",
    },
    Sandro_Fracca: {
        subject: "English",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Sandro Fracca",
        firstName:"Sandro",
        lastName:"Fracca",
        email:"sfracca@vsb.bc.ca",
    },
    Mori_Hamilton: {
        subject: "Mini English/Socials",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Mori Hamilton",
        firstName:"Mori",
        lastName:"Hamilton",
        email: "mhamilton@vsb.bc.ca",
    },
    Carolyn_Hansen: {
        subject: "PE/Science/International Ed Contact",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Carolyn Hansen",
        firstName:"Carolyn",
        lastName:"Hansen",
        email: "chansen@vsb.bc.ca",
    },
    Andrew_Humphries: {
        subject: "Vice Principal/ Supervision Gr. 8, 10, 11",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Andrew Humphries",
        firstName:"Andrew",
        lastName:"Humphries",
        email: "ahumphries@vsb.bc.ca",
    },
    Annabelle_Ip: {
        subject: "Performing Arts/Career Life Education 10",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Annabelle Ip",
        firstName:"Annabelle",
        lastName:"Ip",
        email: "aip@vsb.bc.ca",
    },
    Gabriel_Jones: {
        subject: "Information Technology",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Gabriel Jones",
        firstName:"Gabriel",
        lastName:"Jones",
        email: "gjones@vsb.bc.ca",
    },
    Andy_Kefalas: {
        subject: "ELL",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Andy Kefalas",
        firstName:"Andy",
        lastName:"Kefalas",
        email: "akefalas@vsb.bc.ca",
    },
    Daniel_Lai: {
        subject: "Math",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Daniel Lai",
        firstName: "Daniel",
        lastName: "Lai",
        email: "dlai@vsb.bc.ca",
    },
    Karine_Ling: {
        subject: "Lifeskills",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Karine Ling",
        firstName: "Karine",
        lastName: "Ling",
        email: "kling@vsb.bc.ca",
    },
    Teresa_Lin: {
        subject: "LA Lifeskills",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Teresa Lin",
        firstName: "Teresa",
        lastName: "Lin",
        email: "tylin@vsb.bc.ca",
    },
    Michelle_Liu: {
        subject: "Science",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Michelle Liu",
        firstName: "Michelle",
        lastName: "Liu",
        email: "myliu@vsb.bc.ca",
    },
    Dean_Long: {
        subject: "Fine Arts",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Dean Long",
        firstName: "Dean",
        lastName: "Long",
        email: "dlong@vsb.bc.ca",
    },
    Serge_Makarenko: {
        subject: "Science",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Serge Makarenko",
        firstName: "Serge",
        lastName: "Makarenko",
        email: "smakarenko@vsb.bc.ca",
    },
    Michel_Mey: {
        subject: "Social Studies",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Michel Mey",
        firstName: "Michel",
        lastName: "Mey",
        email: "mmey@vsb.bc.ca",
    },
    Jessie_Miller: {
        subject: "Learning Support Program/English",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Jessie Miller",
        firstName: "Jessie",
        lastName: "Miller",
        email: "jmiller@vsb.bc.ca",
    },
    Sachiko_Noguchi: {
        subject: "Modern Languages",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Sachiko Noguchi",
        firstName: "Sachiko",
        lastName: "Noguchi",
        email: "snoguchi@vsb.bc.ca",
    },
    Jonathan_Nussbaum: {
        subject: "English/Psychology",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Jonathan Nussbaum",
        firstName: "Jonathan",
        lastName: "Nussbaum",
        email: "jmnussbaum@vsb.bc.ca",
    },
    Sean_OConnor: {
        subject: "Social Studies",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Sean O'Connor",
        firstName: "Sean",
        lastName: "O'Connor",
        email: "soconnor@vsb.bc.ca",
    },
    Nick_Petheriotis: {
        subject: "Modern Languages",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Nick Petheriotis",
        firstName: "Nick",
        lastName: "Petheriotis",
        email: "npetheriot@vsb.bc.ca",
    },
    Ginaya_Peters: {
        subject: "Resource Teacher/Skills",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Ginaya Peters",
        firstName: "Ginaya",
        lastName: "Peters",
        email: "gpeters@vsb.bc.ca",
    },
    Jeffrey_Richmond: {
        subject: "English",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Jeffrey Richmond",
        firstName: "Jeffrey",
        lastName: "Richmond",
        email: "jwrichmond@vsb.bc.ca",
    },
    Elizabeth_Rogers: {
        subject: "Science",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Elizabeth Rogers",
        firstName: "Elizabeth",
        lastName: "Rogers",
        email: "erogers@vsb.bc.ca",
    },
    Stefan_Schmitt: {
        subject: "Mini/Learning Program/Science",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Stefan Schmitt",
        firstName: "Stefan",
        lastName: "Schmitt",
        email: "sschmitt@vsb.bc.ca",
    },
    Janice_Sim: {
        subject: "Counsellor Gr. 8 & 9/ Career Life Connections 12",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Janice Sim",
        firstName: "Janice",
        lastName: "Sim",
        email: "jsim@vsb.bc.ca",
    },
    Paul_Skarsgard: {
        subject: "Mini/PE/Modern Languages",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Paul Skarsgard",
        firstName: "Paul",
        lastName: "Skarsgard",
        email:"pskarsgard@vsb.bc.ca",
    },
    Davin_Smith: {
        subject: "Applied Skills/Business Education/Career Life Connections 10",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Davin Smith",
        firstName: "Davin",
        lastName: "Smith",
        email: "dtsmith@vsb.bc.ca",
    },
    Takuya_Umeki: {
        subject: "Math/Skills",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Takuya Umeki",
        firstName: "Takuya",
        lastName: "Umeki",
        email: "tumeki@vsb.bc.ca",
    },
    Paula_Violi: {
        subject: "Modern Languages",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Paula Violi",
        firstName: "Paula",
        lastName: "Violi",
        email: "pvioli@vsb.bc.ca",
    },
    Sally_Wong: {
        subject: "Home Economics/ Career Life Education 10",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Sally Wong",
        firstName: "Sally",
        lastName: "Wong",
        email: "sawong@vsb.bc.ca",
    },
    Aaron_Yang: {
        subject: "Social Studies/Skills",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Aaron Yang",
        firstName: "Aaron",
        lastName: "Yang",
        email: "ayang@vsb.bc.ca",
    },
    Stacey_Yip: {
        subject: "PE",
        Fun_Fact: " ",
        comment:"                                                                                                                                                                                                                                                 ",
        fullName: "Stacey Yip",
        firstName: "Stacey",
        lastName: "Yip",
        email: "syip@vsb.bc.ca",
    },
};

//randomly selects the answer in the answerkey
//self-invoked function, so the answer key is automatically selected
(chooseRandom => {
    //choosing a random index from answer key array.
    var num = Math.floor(Math.random()*pordle.length)
    console.log(num)//consoling to make sure it works
    //assginning the answer key with randomly selected index
    answer = pordle[num]
    //turining the answer key to upper case letters
    answer = answer.toUpperCase();
    console.log(answer) //consoling to make sure it works
})();

//keyboards's key
const key_first = [
    'Q','W','E','R','T','Y','U','I','O','P', //first row
]

const key_second = [
    'A','S','D','F','G','H','J','K','L','ENTER', //second row
]

const key_third = [
    'Z','X','C','V','B','N','M','<<', //third row
]

//Initiated nameLength
let nameLength = 0

//Initiates the input boxes of the first row.
const guessColumns = [[''],[''],[''],[''],[''],['']];

//makeTiles => {}
//Input: nothing
//Description: makes the guess tiles according to the answer key's 
//word's length self-invoked function, so the tiles are ready before 
//player plays the game.
//Output: tile boxes
(makeTiles => {
    //runs six times as player has six tries
    for (let i = 0; i < 6; i++){
        //runs answer's length - 2 as first column already exists
        for (let j = 1; j < answer.length; j++){
            //adds empty strings that will come empty boxes.
            guessColumns[i].push('');
        }
    }
    console.log(guessColumns)//consoling the columns for check
})();


let currentRow = 0 //represents the row index in guess tiles
let currentTile = 0 //represents the current tile's location

//keys.forEach(key => {})
//Input: key
//Description calls an anonymous function for each element in keys
//Output: keyboards and output of handlClick(key)
key_first.forEach(key => {
    //creates button element in keys and append them.
    const buttonElement= document.createElement('button')
    //returns the text content of the buttonElement
    buttonElement.textContent = key 
    //document.textContent = key
    //sets attribute of id to each key elements
    buttonElement.setAttribute("id", key)
    //when each button element is clicked, handleClick() with text 
    //content of each button with argument is called.
    buttonElement.addEventListener("click", () => handleClick(key))
    //insert the content of buttonElement to keyboard.
    first_row.append(buttonElement)
})

key_second.forEach(key => {
    //creates button element in keys and append them.
    const buttonElement= document.createElement('button')
    //returns the text content of the buttonElement
    buttonElement.textContent = key 
    //document.textContent = key
    //sets attribute of id to each key elements
    buttonElement.setAttribute("id", key)
    //when each button element is clicked, handleClick() with text 
    //content of each button with argument is called.
    buttonElement.addEventListener("click", () => handleClick(key))
    //insert the content of buttonElement to keyboard.
    second_row.append(buttonElement)
})

key_third.forEach(key => {
    //creates button element in keys and append them.
    const buttonElement= document.createElement('button')
    //returns the text content of the buttonElement
    buttonElement.textContent = key 
    //document.textContent = key
    //sets attribute of id to each key elements
    buttonElement.setAttribute("id", key)
    //when each button element is clicked, handleClick() with text 
    //content of each button with argument is called.
    buttonElement.addEventListener("click", () => handleClick(key))
    //insert the content of buttonElement to keyboard.
    third_row.append(buttonElement)
})

//document.addEventListener()
//Input: keyboard objects
//Description: takes input from keyboard and appends to tileDisplay
//Output: the keyboard
document.addEventListener("keydown", (e) => {
    //get the keyboard button that was pressed
    let a = e.key;
    //converts it to uppercase
    a = a.toUpperCase()
    //makes sure it was pressed and convereted to an array
    console.log(a)
    //calls the function with the key
    handleClick(a)
})

//guessColumns.forEach((guessRow, guessRowIndex) => {})
//Input: number guessRow, guessRowIndex
//Description: calls an anonymous function with two arguments and 
//             assigns the value to guessColumns 
//Output: textboxes that shows guesses
guessColumns.forEach((guessRow, guessRowIndex) =>{
    //creates a div that contains rowElement
    const rowElement = document.createElement('div') 
    //sets the attribute of id with the value of guessRow and index
    rowElement.setAttribute("id", 'guessRow-' + guessRowIndex)
    //calls annoymous function with two arguments, assining to each
    //content of guessRow
    guessRow.forEach((guess, guessIndex) => {
        //create tileElement element with 'div'
        const tileElement = document.createElement('div')
        //sets each tileElement's attribute with id, guessRowindex,
        //tile index
        tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
        //ads tile class
        tileElement.classList.add('tile')
        //adds the tileElement in the row
        rowElement.append(tileElement)
    })
    //displays the each row
    tileDisplay.append(rowElement)
})


//handleClick
//Input: text letter
//handles the effect of clicking the button
//Output: textDisplay will display letters
const handleClick = (letter) => {
    //making sure handleClick works
    console.log("clicked", letter)
    //deletes letter if << was clicked
    if (letter === '<<' || letter === 'BACKSPACE'){
        //calls deleteLetter function
        deleteLetter()
        //making sure delteLetter works
        console.log('guessColumns', guessColumns)
        //ends the function
        return
    }  
    //compares with answerkey if ENTER button was clicked
    else if (letter === 'ENTER'){ 
        //checks if user typed enough letters
        if (currentTile == answer.length) {
            checkRow() //calls checkRow function
        }
        //checks if checkRow was called and worked
        console.log('check row')
        console.log('guessColumns', guessColumns)
        //ends the function
        return
    }
    //displays only the letter by calling addLetter
    else if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90 && letter.length < 2){
        //adds the letters to tileDisplay
        addLetter(letter)
        //checks if letters are correctly stored
        console.log('letter', letter)
        console.log(guessColumns)
        //ends the function
        return
    }
    //makes sure letter was added
    console.log('guessColumns', guessColumns)
}

//addLetter = (letter)
//Input: text letter
//Description: takes in the input, assigns to the column in the row
//Output: letters are shown in the tiles.
const addLetter = (letter) => {
    //loops throgh each column in the row
    if (currentTile < answer.length && currentRow < 6) {
        //assigns guess row elements to tiles 
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        //gets the text data of tiles
        tile.textContent = letter
        //assgings the text data to the tile Display
        guessColumns[currentRow][currentTile] = letter
        //sets attribute to each letter as data with the letter
        tile.setAttribute('data', letter)
        //increments current Tile index
        currentTile++
    }
}

//deleteLetter ()
//Input: none
//Description:deletes the letter in the tile by replacing it with ''
//Output: none but tile is deleted.
const deleteLetter = () => {
    //deletes the letter in the tiles 
    if (currentTile > 0){
        //decrement the column index
        currentTile--
        //assign the guess row element to tile
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        //deletes the tile
        tile.textContent = ''
        //deletes the guessColumns
        guessColumns[currentRow][currentTile] = ''
        //set's the attribute of the tile to ''
        tile.setAttribute('data', '')
    }
}

//
const checkRow = () => {
    //assigns the text values in the row with no commas separated
    const guess = guessColumns[currentRow].join('')
    //making sure guess is assgined right
    console.log('guess is', guess)
    //calling fliptile()
    flipTile()
    //chekcks if user typed right amount letters in guessRow
    //terminate the game when currentRow == 5
    //prompt pop-up of replay with bio of answer key
    if (currentTile > answer.length - 1){
        //making sure guess and answer is correctly stored
        console.log('guess is ' + guess, 'pordle is ' + answer)
        //shows pop up message when answer is right
        if (answer == guess){            
            const totalWins = window.localStorage.getItem('totalWins') || 0;
            updatePlayed();
            window.localStorage.setItem('totalWins', Number(totalWins) + 1);

            const currentStreak = window.localStorage.getItem('currentStreak') || 0;
            window.localStorage.setItem('currentStreak', Number(currentStreak) + 1);
            if(currentRow + 1 == 1){
                let currentGuess = window.localStorage.getItem('guess-distribution1') || 0;
                window.localStorage.setItem('guess-distribution1', Number(currentGuess) + 1);
                currentGuess = window.localStorage.getItem('guess-distribution1') || 0;
                document.getElementById('stats-1').innerHTML = currentGuess.toString();
            }else if (currentRow + 1 == 2){
                let currentGuess = window.localStorage.getItem('guess-distribution2') || 0;
                window.localStorage.setItem('guess-distribution2', Number(currentGuess) + 1);
                currentGuess = window.localStorage.getItem('guess-distribution2') || 0;
                document.getElementById('stats-2').innerHTML = currentGuess.toString();
            }else if (currentRow + 1 == 3){
                let currentGuess = window.localStorage.getItem('guess-distribution3') || 0;
                window.localStorage.setItem('guess-distribution3', Number(currentGuess) + 1);
                currentGuess = window.localStorage.getItem('guess-distribution3') || 0;
                document.getElementById('stats-3').innerHTML = currentGuess.toString();
            }else if (currentRow + 1 == 4){
                let currentGuess = window.localStorage.getItem('guess-distribution4') || 0;
                window.localStorage.setItem('guess-distribution4', Number(currentGuess) + 1);
                currentGuess = window.localStorage.getItem('guess-distribution4') || 0;
                document.getElementById('stats-4').innerHTML = currentGuess.toString();
            }else if (currentRow + 1 == 5){
                let currentGuess = window.localStorage.getItem('guess-distribution5') || 0;
                window.localStorage.setItem('guess-distribution5', Number(currentGuess) + 1);
                currentGuess = window.localStorage.getItem('guess-distribution5') || 0;
                document.getElementById('stats-5').innerHTML = currentGuess.toString();
            }else{
                let currentGuess = window.localStorage.getItem('guess-distribution6') || 0;
                window.localStorage.setItem('guess-distribution6', Number(currentGuess) + 1);
                currentGuess = window.localStorage.getItem('guess-distribution6') || 0;
                document.getElementById('stats-6').innerHTML = currentGuess.toString();
            }
            //show a bio page instead of a message
            showMessage(answer)
            //finishes the function
            return
        }else {
            //if user guessed six times, ends the game
            //prompts bio page + replay
            if (currentRow >= 5){
                console.log("gameOver")
                updatePlayed()
                window.localStorage.setItem('currentStreak', 0);
                //prints game over on the top
                showMessage(answer)         
                //finishes the function
                return
            }
            //if the user still has tries left
            if(currentRow < 5){
                //increments the number of tries
                currentRow++
                //resets the column location
                currentTile = 0
                
            }
        }
    } 
}

function updatePlayed() {
    const totalPlayed = window.localStorage.getItem('totalPlayed') || 0;
    window.localStorage.setItem('totalPlayed', Number(totalPlayed) + 1);
}
//prompts pop-up page
//showMessage = (message)
//Input: text message
//Description: Appends the name fromt he answer key
//append/link the bio with the answer key.
//correctly call answer_key of objects
const showMessage = (message) => {
    getContents(find_fullname(message))
    const modals = document.querySelector('.div-block-3')
    create_subject()
    create_fun()
    create_comment()
    create_first()
    create_last()
    create_email()
    profile = true;
    const delayInMilliseconds = 600*message.length; //1 second
    setTimeout(function() {
        openModal(modals);
    }, delayInMilliseconds);

    const messageElementWin = document.createElement('p')
    const messageElementPlay  = window.localStorage.getItem('totalPlayed')
    messageElementWin.textContent = window.localStorage.getItem('totalWins')
    const messageElementStreak = window.localStorage.getItem('currentStreak')
    console.log("streak: " + window.localStorage.getItem('currentStreak'))
    const totalWins = window.localStorage.getItem('totalWins');
    const totalGames = window.localStorage.getItem('totalPlayed');
    const winPct = Math.round((totalWins / totalGames) * 100);

    document.getElementById('play_num').innerHTML = messageElementPlay.toString();
    document.getElementById('win_num').innerHTML = winPct.toString();
    document.getElementById('streak_num').innerHTML = messageElementStreak.toString();

}

//addColorToKey(keyLetter, color)
//Input: keyLetter, color
//Description: adds colors to each tile
//Output: tiles colors changed
const addColorToKey = (keyLetter, color) => {
    //assigns keyLetter to key
    const key = document.getElementById(keyLetter)
    //add color class to key
    key.classList.add(color)
}

//flipTile()
//Input: none
//Description:
const flipTile = () => {
    //assign guessRow's childNodes to rowTiles
    const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes
    //assigns answer to checkPordle
    let checkPordle = answer
    //initialize empty guess array
    const guess = []
    //for each content of rowTiles, naming tiles, get the value with attribute data and name it letter, with color 'grey-overlay'
    //and then insert it to guess.
    rowTiles.forEach(tile => {
        guess.push({ letter: tile.getAttribute('data'), color: 'grey-overlay'})
    })
    //for each content of guess, guess and index,
    //if the letter matches the letter in the index, 
    //turn the color in to blue, and empty the answerkey
    guess.forEach((guess, index) => {
        if(guess.letter == answer[index]){
            guess.color = 'blue-overlay'
            checkPordle = checkPordle.replace(guess.letter, '')
        }
    })
    //for each content of guess in guess,
    //if answerkey contains letter turn the color to yellow
    guess.forEach(guess => {
        if (checkPordle.includes(guess.letter)){
            guess.color = 'yellow-overlay'
            checkPordle = checkPordle.replace(guess.letter, '')
        }
    })
    //flip each tiles while changing color
    //each column flips after previous flips
    rowTiles.forEach((tile,index) => {
        setTimeout(() => {
            tile.classList.add('flip')
            tile.classList.add(guess[index].color)
            addColorToKey(guess[index].letter, guess[index].color)
        }, 500 * index)
    })
}

const find_fullname = (ans) => {
    for (let x in name_match){
        if (x == ans.toLocaleLowerCase()){
            return name_match[x].name;
        }
    }
}