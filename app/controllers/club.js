'use strict';
var Club       = require('../models/club');
exports.index = function(req, res) 
{

	/*function getObjects(obj, key, val)
	{
		var objects = [];
		for (var i in obj) {
		    if (!obj.hasOwnProperty(i)) continue;
		    if (typeof obj[i] == 'object') {
		        objects = objects.concat(getObjects(obj[i], key, val));    
		    } else 
		    //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
		    if (i == key && obj[i] == val || i == key && val == '') { //
		        objects.push(obj);
		    } else if (obj[i] == val && key == ''){
		        //only add if the object is not already in the array
		        if (objects.lastIndexOf(obj) == -1){
		            objects.push(obj);
		        }
		    }
		}
		return objects;
	}*/

Club.aggregate( [ { $sample: { size: 32 } } ], function(err, results) 
		{
			if(err)
				{
					 throw err;
				}
				else 
				{
					/*filter data without domestice team */
			       var filteredBYWithoutColor=results.filter(function(item)
			        { return item.color !="red";});

			       /*filter data with domestice color*/
			        var filteredBYColor=results.filter(function(item)
			        { return item.color=="red";});

			       var totalClubsWithoutDomestic = filteredBYWithoutColor;

			        var totalDomesticclubs = filteredBYColor;

			           /*create a arry with key index and store domestice and define finalresults array*/
			             var finalresults  = [];
			             var i=0;
			              totalDomesticclubs.forEach(function(item) 
			              {
			                finalresults[i] = [totalDomesticclubs[i]];

			                i++;
			              });

			        //Loop for without domestic club
			         totalClubsWithoutDomestic.forEach(function(item) 
			        { 
			              for (var j = 0;  j < finalresults.length; j++)
			               {
			                  var checkcountryIsAlreadyExits =  FUNCTIONS.getObjects(finalresults[j],'country',item.country);
			                if(checkcountryIsAlreadyExits.length == 0 &&  finalresults[j].length < 4)
			                 {
			                  //push data in finalresults array
			                   finalresults[j].push(item);
			                     break;
			                 }
			             
			              }
			          });
 
				     res.render('club/club.html',
							{
								data:{page_title:'Club league programme in nodejs with mongodb'},
								contentData:finalresults,
							});

				}	
		});
		
}