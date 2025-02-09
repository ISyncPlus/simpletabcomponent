document.addEventListener("DOMContentLoaded", ()=>{
    const tabs = document.querySelectorAll('#nav-links li');
    const content = document.getElementById('content');

    // content to display(array)
    const tabContents ={
        tab1: "First Tab Content Displayed Here",
        tab2: "Second Tab, hot and crisp. ready to do stuff",
        tab3: "The Third Tab be doing warm ups innit",
        tab4: "This is where Fourth Tab takes over gng",
    };

    // Now define what happens when a tab is clicked
    function activateTab(selectedTab) {
        tabs.forEach(tab => { // loop through each tab and
            if(tab == selectedTab ) {
                tab.style.textDecoration = "underline";
                tab.querySelector("a").style.color = "black";
                tab.style.textDecorationColor = "black";
                tab.style.textDecorationOffset = "5px";
            } else {
                tab.querySelector("a").style.color = "rgb(183, 182, 182)";
                tab.style.textDecoration = "none";
            }
        });

        // Next, put in the content of the selected tab
    content.textContent = tabContents[selectedTab.id];
    };

    // make first tab default
    activateTab(tabs[0]);

    // add the event for each tab
    tabs.forEach(tab=> {
        tab.addEventListener("click", function () {
            activateTab(this)
        }
    )
    });
});


