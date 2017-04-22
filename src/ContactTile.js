import React from 'react';

function ContactTile({contact}) {
	return (
		<div> {contact.name.first} </div>
	)
};

export default ContactTile;