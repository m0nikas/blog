var days=[{
	name:"Northern Vietnam Package Tour",
	way:"Hanoi - Halong Bay - Ninh Binh",
	price:"50,000",
	duration:5,
	itinery:"Day 1Hanoi Arrival Day 2 Hanoi - Halong Bay Day 3 Halong Bay - Hanoi City Tour Day 4 Hanoi - Ninh Binh - Hoa Lu - Tam Coc Day 5 Hanoi - Departure Activities Hanoi arrival, hotel check-in Depart for Halong, embark on the overnight cruise Leaving Halong, come back to Hanoi Transfer to Ninh Binh, visit Hoa Lu ancient citadel, take a sampan in Tam Coc Free at your leisure, Depart for hometown",
    image:"images/1.jpg"

},
{
	name:"Fantastic Ho Chi Minh - Hanoi - Halong Bay Tour",
	way:"Ho Chi Minh - Hanoi - Halong Bay",
	price:"70,000",
	duration:6,
	itinery:"Day 1 Ho Chi Minh arrival Day 2 Ho Chi Minh City - Cu Chi Tunnels Day 3 Ho Chi Minh City - Hanoi Day 4 Hanoi City Tour Day 5 Hanoi - Halong Bay Day 6 Hanoi - Departure Activities Ho Chi Minh arrival, hotel check-in Depart for Cu Chi Tunnels, Ho Chi Minh city tour Depart Ho Chi Minh City, Fly to Hanoi Hanoi city Exploration Further exploration on Bay, transfer back to Hanoi, Hanoi Sightseeing Tour Depart Vietnam",
    image:"images/2.jpg"

},
{
	name:"Great Vietnam Honeymoon Beach Holiday",
	way:"Hanoi - Halong Bay - Phu Quoc Island - Ho Chi Minh",
	price:"1,50,000",
	duration:8,
	itinery:"Day 1 Hanoi arrival Day 2 Hanoi Sightseeing Day 3 Hanoi - Halong Bay Day 4 Halong Bay - Hanoi  Day 5 Hanoi - Phu Quoc Island Day 6 Phu Quoc Island - Free dayDay 7 Phu Quoc Island - Free day Day 8 Phu Quoc Island - Ho Chi Minh City Departure",
    image:"/images/3.jpg"
},
{
	name:"Best Vietnam and Cambodia Tourism",
	way:"Siem Reap - Hanoi - Halong Bay - Hanoi",
	price:"80,000",
	duration:10,
	itinery:" Day 1 Siem Reap Arrival - Angkor Wat Day 2 Siem Reap - Angkor Thom - Banteay Srey Day 3 Siem Reap - Tonle Sap Lake - Hanoi Day 4 Hanoi - Halong Bay Day 5 Halong Bay - Hanoi City Tour Day 6 Hanoi - Departure",
	image:"/images/4.jpg"
}]

function getAlerted(){
	var res=document.getElementById('user-search').value;
	for(var i = 0; i < days.length; i++){
		if(days[i].duration==res)
		{   
			document.getElementById('mon').innerHTML = days[i].name;
			document.getElementById('demo').innerHTML += days[i].way + '<br>'+ days[i].price + '<br>'+ days[i].duration + '<br>'+ days[i].itinery + '<br>' ;
			document.getElementById('img').src = days[i].image;
		}
		
	}
}