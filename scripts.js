var tabs = document.querySelectorAll(".lboard_tabs ul li");
var today = document.querySelector(".today");
var month = document.querySelector(".month");
var year = document.querySelector(".year");
var items = document.querySelectorAll(".lboard_item");

tabs.forEach(function(tab){
	tab.addEventListener("click", function(){
		var currenttab = tab.getAttribute("data-li");
		
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		})

		tab.classList.add("active");

		items.forEach(function(item){
			item.style.display = "none";
		})

		if(currenttab == "today"){
			today.style.display = "block";
		}
		else if(currenttab == "month"){
			month.style.display = "block";
		}
		else{
			year.style.display = "block";
		}

	})
})


data = [
    {
        "idx": "1",
		"name": "Shashank",
        "img": "./shanky.jfif",
        "points": "200"
    },
    {
        "idx": "2",
		"name": "Srijan",
        "img": "./srijan.jfif",
        "points": "200"   
    }, {
        "idx": "3",
		"name": "Shashank",
        "img": "./shanky.jfif",
        "points": "200"
    },
    {
        "idx": "4",
		"name": "Srijan",
        "img": "./srijan.jfif",
        "points": "200"   
    },
    {
        "idx": "5",
		"name": "Shashank",
        "img": "./shanky.jfif",
        "points": "200"
    },
    {
        "idx": "7",
		"name": "Srijan",
        "img": "./srijan.jfif",
        "points": "1000"   
    },
	{
        "idx": "8",
		"name": "Srijan",
        "img": "./srijan.jfif",
        "points": "1000"   
    },
	{
        "idx": "9",
		"name": "Srijan",
        "img": "./srijan.jfif",
        "points": "1000"   
    },
	{
        "idx": "10",
		"name": "Srijan",
        "img": "./srijan.jfif",
        "points": "1000"   
    },
	{
        "idx": "11",
		"name": "Srijan",
        "img": "./srijan.jfif",
        "points": "1000"   
    },
	{
        "idx": "12",
		"name": "Srijan Kumar Gupta",
        "img": "./srijan.jfif",
        "points": "1000"   
    },
	{
        "idx": "13",
		"name": "Srijan",
        "img": "./srijan.jfif",
        "points": "1000"   
    },
	{
        "idx": "14",
		"name": "Srijan",
        "img": "./srijan.jfif",
        "points": "1000"   
    }
]

var today = document.getElementById("today");
today.innerHTML="";
for (a of data) {
	today.innerHTML+=`<div class="lboard_mem">
<div class="img">
	<img src="${a.img}" alt="picture_1">
</div>
<div class="name_bar">
	<p><span>${a.idx}</span> ${a.name}</p>
	<div class="bar_wrap">
		<div class="inner_bar" style="width: 95%"></div>
	</div>
</div>
<div class="points">
	${a.points} points
</div>
</div>`;
	
}
