var data = {
  rsvp: ['ixd@ucsd.edu']
};

exports.addRSVP = function(request,response) {
	var rsvpEmail = request.body.rsvpEmail;
	console.log(rsvpEmail);

	data.rsvp.push(rsvpEmail);

	response.send(rsvpEmail);
}

exports.adminView = function(request, response){
  response.render('rsvp', data);
};
