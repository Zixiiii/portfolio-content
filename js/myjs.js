let learn_more = document.getElementById("learn_more");
let intro =  document.getElementById("intro");
learn_more.addEventListener("click", showtheintro);


function showtheintro(){
    document.getElementById("intro").innerHTML ="<p>Shanghai Jiao Tong University is a public research university in Shanghai, China. The university is funded by the Ministry of Education of China. The university was established on April 8, 1896 as Nanyang Public School by an imperial edict.</p>"
}