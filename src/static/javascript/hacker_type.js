let request = new httpRequest({
    URL: "./sort_random_language_script",

})

request.get((err,result) => {
    if(!err){
        let /* String */ script_text = JSON.parse(result.text).text;


        
        let text_area = document.getElementById("hacker_type_terminal_text");

        let final_cut = 0;

        let body = document.getElementsByTagName("body")[0];
        
        body.addEventListener("keydown",(e) => {
            text_area.textContent = script_text.substring(0,final_cut);
            final_cut += 3;
            text_area.scrollBy(0,text_area.scrollHeight);
        })
    }   
    else{
        window.alert("Error on get text from server");
    }
});