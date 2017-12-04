'use strict';
var Club       = require('../models/club');
exports.index = function(req, res) 
{
Club.aggregate( [ { $sample: { size: 32 } } ], function(err, results) 
		{
			if(err)
				{
					 throw err;
				}
				else 
				{
					var totalclubs = results;
					var filteredBYWithoutColor=results.filter(function(item)
					 { return item.color !="red";});

					 var filteredBYColor=results.filter(function(item)
					 { return item.color=="red";});
					var totalClubsWithoutDomestic = filteredBYWithoutColor;
					 var totalDomesticclubs = filteredBYColor;

					 	var j=1;
					 	var clubData = {}
				     var i=0;
				     var j=1;
				     var temp =[];
				     var result= [];
				     totalClubsWithoutDomestic.forEach(function(item) 
				     { 
				      	if(j%3==0)
				     	{
				     		var domesticArrayKey =  j/3;
				     		//console.log("domesticArrayKey=======",domesticArrayKey-1);
				     		var key = domesticArrayKey-1;
				     		temp.push(totalDomesticclubs[key]);
				     		//console.log("Domestic team is",totalDomesticclubs[key]);
				     	}
				     	 if(j%3!=0)
	                	 {
							temp.push(item);
	                	 }
	                	 else
	                	 {
	                	 	temp.push(item);
	                	 	result.push(temp);
	                	 	temp = [];
	                	 }
	                	 j++;
				       i++;
				    });

				    // console.log(result);


				     /*var temp =[];
				     var result= [];

				     //console.log("Length==="+totalClubsWithoutDomestic.length);
				     var j=1;
		               for (var i =0; i < totalClubsWithoutDomestic.length; i++)
		                {
		                	 if(j%3!=0)
		                	 {
								temp.push(totalClubsWithoutDomestic[i]);
		                	 }
		                	 else
		                	 {
		                	 	temp.push(totalClubsWithoutDomestic[i]);
		                	 	result.push(temp);
		                	 	 //console.log(temp);
		                	 	 //console.log("@@@@@@@@");
		                	 	temp = [];
		                	 }
		                	 //console.log(result);
		                	//var totali =  i/3;
		                	//console.log("totali====="+totali);
		                	//var totalj = totali%3;
		                	//console.log("totalj====="+totalj);
		                   //console.log(totalClubsWithoutDomestic[i]);
		                	//console.log(i);
		                	/*data.push(totalClubsWithoutDomestic[i]);*/
		                	/*if(i%4==0)
						     {
						     	console.log('not divide');
						     	console.log(i);
						     }
						     else
						     {
						     	console.log(' divide');
						     	console.log(i);
						     }*/
						    // j++;
		               //}
				/*for (var value in result)
				{
					result[value].forEach(function(item)
					{
						console.log(item);
					});
				}*/
 
				     res.render('club/club.html',
							{
								data:{page_title:'Club league programme in nodejs with mongodb'},
								contentData:result,
							});

				}	
		});
		
}