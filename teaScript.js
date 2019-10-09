//Document ready
$(function(){
    //set up array of tea objects
    const teas = [
        {   
            type: "Masala Chai",
            caffeine: "Yes",
            Strength: "Strong",
            flavourProfile: "Earthy",
        },
        {
            type: "Jasmine Green Tea",
            caffeine: "Yes",
            Strength: "Mild",
            flavourProfile: "Floral",
        },
        {
            type: "Earl Grey",
            caffeine: "Yes",
            Strength: "Strong",
            flavourProfile: "Floral",
        },
        {
            type: "English Breakfast",
            caffeine: "Yes",
            Strength: "Strong",
            flavourProfile: "Classic",
        },
        {
            type: "Green Tea",
            caffeine: "Yes",
            Strength: "Mild",
            flavourProfile: "Classic",
        },
        {
            type: "Darjeeling Tea",
            caffeine: "Yes",
            Strength: "Strong",
            flavourProfile: "Classic",
        },
        {
            type: "White Tea",
            caffeine: "Yes",
            Strength: "Mild",
            flavourProfile: "Classic",
        },
        {
            type: "Ceylon Black Tea",
            caffeine: "Yes",
            Strength: "Strong",
            flavourProfile: "Classic",
        },
        {
            type: "Genmaicha",
            caffeine: "Yes",
            Strength: "Mild",
            flavourProfile: "Earthy",
        },
        {
            type: "Assam Black Tea",
            caffeine: "Yes",
            Strength: "Strong",
            flavourProfile: "Classic",
        },
        {
            type: "Rooibos",
            caffeine: "No",
            Strength: "Strong",
            flavourProfile: "Classic",
        },
        {
            type: "Lavender Tea",
            caffeine: "No",
            Strength: "Mild",
            flavourProfile: "Floral",
        },
        {
            type: "Peppermint Tea",
            caffeine: "No",
            Strength: "Mild",
            flavourProfile: "Herbal",
        },
        {
            type: "Lemong Ginger Tea",
            caffeine: "No",
            Strength: "Mild",
            flavourProfile: "Fruity",
        },
        {
            type: "Chamomile Tea",
            caffeine: "No",
            Strength: "Mild",
            flavourProfile: "Floral",
        },
        {
            type: "Turmeric Chai",
            caffeine: "No",
            Strength: "Strong",
            flavourProfile: "Earthy",
        },
        {
            type: "Mulled Apple Tea",
            caffeine: "No",
            Strength: "Mild",
            flavourProfile: "Fruity",
        },
        {
            type: "Lemon Balm Tea",
            caffeine: "No",
            Strength: "Mild",
            flavourProfile: "Herbal",
        },
        {
            type: "Cranberry Tea",
            caffeine: "No",
            Strength: "Mild",
            flavourProfile: "Fruity",
        },
        {
            type: "Raspberry Leaf Tea",
            caffeine: "No",
            Strength: "Mild",
            flavourProfile: "Herbal",
        },
        {
            type: "Mint Guayusa Tea",
            caffeine: "Yes",
            Strength: "Mild",
            flavourProfile: "Herbal",
        }
    ];

    console.log(teas);


    //Display the random tea from filtered tea list in the h3 tag

    function results() {

        const randomTea = Math.floor(Math.random() * flavourFiltered.length)
        console.log(randomTea);

        if (flavourFiltered.length === 0){
            document.querySelector('h3').textContent = "No teas to suggest, please try again.";
        }
        else (document.querySelector('h3').textContent = `You should enjoy some ${flavourFiltered[randomTea].type} today.`);     
    }
    
    //set up filter based on Question 1

        $('input[name="caffeine"]').change(
            function(){
            console.log('change')
        // });
    // $('#formQ1').on('submit', function(event) {
        // event.preventDefault();

        //smooth scroll to next section
        $('html, body').animate({
            scrollTop: $('#Question2').offset().top
        },800)
    
        //check if energized or relaxed is selected
        if (document.getElementById('energized').checked){
            console.log('energized')
            caffeineFiltered = teas.filter(function(tea) {
                return tea.caffeine === "Yes";
            })          
        }        
        else if (document.getElementById('relaxed').checked){
            console.log('relaxed')
            caffeineFiltered = teas.filter(function(tea) {
                return tea.caffeine === "No";
            })  
        };

        console.log(caffeineFiltered);      
    });

    //set up next filter based on Question 2

    $('#formQ2').on('submit', function(event) {
        event.preventDefault();

         //smooth scroll to next section
         $('html, body').animate({
            scrollTop: $('#Question3').offset().top
        },800)

        //check if energized or relaxed is selected
        if (document.getElementById('bold').checked){
            console.log('bold')
            strengthFiltered = caffeineFiltered.filter(function(tea) {
                return tea.Strength === "Strong";
            })          
        }        
        else if (document.getElementById('mild').checked){
            console.log('mild')
            strengthFiltered = caffeineFiltered.filter(function(tea) {
                return tea.Strength === "Mild";
            })  
        };

        console.log(strengthFiltered);
         
    });

    //set up final filter based on Question 3

    $('#formQ3').on('submit', function(event) {
        event.preventDefault();

        //smooth scroll to next section
        $('html, body').animate({
            scrollTop: $('#result').offset().top
        },800)

        //check if energized or relaxed is selected
        if (document.getElementById('classic').checked){
            console.log('classic')
            flavourFiltered = strengthFiltered.filter(function(tea) {
                return tea.flavourProfile === "Classic";
            })          
        }        
        else if (document.getElementById('floral').checked){
            console.log('floral')
            flavourFiltered = strengthFiltered.filter(function(tea) {
                return tea.flavourProfile === "Floral";
            })  
        }
        else if (document.getElementById('herbal').checked){
            console.log('herbal')
            flavourFiltered = strengthFiltered.filter(function(tea) {
                return tea.flavourProfile === "Herbal";
            })  
        }
        else if (document.getElementById('earthy').checked){
            console.log('earthy')
            flavourFiltered = strengthFiltered.filter(function(tea) {
                return tea.flavourProfile === "Earthy";
            })  
        }

        console.log(flavourFiltered);
        results();
         
    });

    

     //start over button smooth scroll to top
     $('#reset').click(function() {
        $('html, body').animate({
            scrollTop: '0'
        },800);
        
        $('input[name="caffeine"]').prop('checked', false);
        $('input[name="strength"]').prop('checked', false);
        $('input[name="flavour"]').prop('checked', false);
    });

});
