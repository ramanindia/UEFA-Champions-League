# In the UEFA Champions League, the group stage comprises of 32 football clubs.
<p>Simple you run command npm install (install all required module).</p>
<p>config database change config/database.js.  </p>
<p>'url' : 'mongodb://username:password@hostname:post/database'. </p>
<p>example : 'url' : 'mongodb://test:123456/127.0.0.1:27017/test' . </p>
<p>Change port number in .env file.</p>
<p>HOST_NAME= http://localhost:3000/. </p>
<p>create database test then create collection clubs(Define in model) in mongodb.</p>
<p>insert documents in clubs collection. </p>
<p>
db.clubs.insert({
    "club" : "Anderlecht",
    "country" : "BEL",
     "color" :"",
     "logo":"no_image.png"
});</p>
<h1>Collection data examples</h1>
<p>{
    "club" : "APOEL",
    "country" : "CYP",
     "color" :"",
     "logo":"no_image.png"
}</p>
<p>{
    "club" : "Atlético​ ​Madri",
    "country" : "ESP",
     "color" :"",
     "logo":"no_image.png"
}</p>

<p>{
    "club" : "Barcelona",
    "country" : "ESP",
     "color" :"",
     "logo":"no_image.png"
}</p>

<p>{
    "club" : "Basel",
    "country" : "SUI",
     "color" :"",
     "logo":"no_image.png"
}</p>
<p>{
    "club" : "Bayern​ ​Münche",
    "country" : "GER",
    "color" :"red",
     "logo":"no_image.png"
}</p>


<p>{
    "club" : "Benfica",
    "country" : "POR",
    "color" :"red",
     "logo":"no_image.png"
}</p>


<p>{
    "club" : "Beşiktaş",
    "country" : "TUR",
     "color" :"",
     "logo":"no_image.png"
}</p>


<p>{
    "club" : "Borussia​ ​Dortmund​",
    "country" : "GER",
     "color" :"",
     "logo":"no_image.png"
}


<p>{
    "club" : "Celtic",
    "country" : "SCO",
     "color" :"",
     "logo":"no_image.png"
}</p>


<p>{
    "club" : "Chelsea",
    "country" : "ENG",
    "color" :"red",
     "logo":"no_image.png"
}</p>


<p>{
    "club" : "CSKA​ ​Moskva​",
    "country" : "RUS",
     "color" :"",
     "logo":"no_image.png"
}</p>


<p>{
    "club" : "Feyenoord",
    "country" : "NED",
     "color" :"",
     "logo":"no_image.png"
}</p>


<p>{
    "club" : "Juventus",
    "country" : "ITA",
    "color" :"red",
     "logo":"no_image.png"
}</p>


<p>{
    "club" : "Liverpool",
    "country" : "ENG",
     "color" :"",
     "logo":"no_image.png"
}</p>


<p>{
    "club" : "Manchester​ ​City​",
    "country" : "ENG",
     "color" :"",
     "logo":"no_image.png"
}</p>


<p>{
    "club" : "Manchester​ ​United​",
    "country" : "ENG",
     "color" :"",
     "logo":"no_image.png"
}</p>


<p>{
    "club" : "Maribor​",
    "country" : "SVN",
     "color" :"",
     "logo":"no_image.png"
}</p>


<p>{
    "club" : "Monaco",
    "country" : "FRA",
    "color" :"red",
     "logo":"no_image.png"
}

<p>{
    "club" : "Napoli",
    "country" : "ITA",
     "color" :"",
     "logo":"no_image.png"
}</p>

<p>{
    "club" : "Olympiacos",
    "country" : "GRE",
     "color" :"",
     "logo":"no_image.png"
}</p>

<p>{
    "club" : "Paris​ ​Saint-Germain​",
    "country" : "FRA",
     "color" :"",
     "logo":"no_image.png"
}</p>

<p>{
    "club" : "Porto",
    "country" : "POR",
     "color" :"",
     "logo":"no_image.png"
}</p>

<p>{
    "club" : "Qarabağ",
    "country" : "AZE",
     "color" :"",
     "logo":"no_image.png"
}</p>
<p>{
    "club" : "RB​ ​Leipzig​",
    "country" : "GER",
     "color" :"",
     "logo":"no_image.png"
}</p>

<p>{
    "club" : "Real​ ​Madrid",
    "country" : "ESP",
    "color" :"red",
     "logo":"no_image.png"
}</p>

<p>{
    "club" : "Roma",
    "country" : "ITA",
     "color" :"",
     "logo":"no_image.png"
}</p>

<p>{
    "club" : "Sevilla",
    "country" : "ESP",
     "color" :"",
     "logo":"no_image.png"
}</p>

<p>{
    "club" : "Shakhtar​ ​Donetsk​",
    "country" : "UKR",
    "color" :"red",
     "logo":"no_image.png"
}</p>
<p>{
    "club" : "Spartak​ ​Moskva​",
    "country" : "RUS",
    "color":"red",
     "logo":"no_image.png"
}</p>

<p>{
    "club" : "Sporting​ ​CP​",
    "country" : "POR",
     "color" :"",
     "logo":"no_image.png"
}</p>

<p>{
    "club" : "Tottenham​ ​Hotspur",
    "country" : "ENG",
     "color" :"",
     "logo":"no_image.png"</p>
}</p>
<p>Our goal is to create a program / website application which randomly generates 8 groups
with 4 teams each</p>

<h1>Rules & Instructions :</h1>
<p>● Use the list of teams given on Page 1.</p>
<p>● Group names will be “Group A”, “Group B”, “Group C” and so on.</p>
<p>● A group cannot have more than one team from the same country.</p>
<p>● The teams marked in red are domestic league champions. The first team of everygroup must be a domestic league champion.</p>
<p>● The program should be able to generate a fresh new list each time it is run.</p>
<p>● The program should output a list of teams under each group title.</p>

<p>you can run http://localhost:3000/club.</p>
<p>Application is running on aws server.</p>
<p>Live url http://13.126.89.183:3050/club </p>
 
