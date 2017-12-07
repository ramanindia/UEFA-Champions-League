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
				     		var key = domesticArrayKey-1;
				     		temp.push(totalDomesticclubs[key]);
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
 
				     res.render('club/club.html',
							{
								data:{page_title:'Club league programme in nodejs with mongodb'},
								contentData:result,
							});

				}	
		});
		
}