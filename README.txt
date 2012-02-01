This is a super simple and lightweight jQuery Modal Popup dialog box.

Demo can be found here: http://www.tpddesign.co.uk/projects/modalpoplite/demo/

Usage:

Include jquery and modalPopLite files:

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
	<link href="modalPopLite1.0.0/modalPopLite.css" rel="stylesheet" type="text/css" />
	<script src="modalPopLite1.0.0/modalPopLite1.0.0.min.js" type="text/javascript"></script>

Call modalPopLite on the element such as a div which will be the popup container:
- Specify the element to open the popup
- specify the element to close the popup

	<script type="text/javascript">
		$(function () {

		    $('#popup-wrapper').modalPopLite({ openButton: '#clicker', closeButton: '#close-btn' });

		});
	</script>

Add the container to your page ('popup-wrapper'):

<body>
	A Simple Lightweight Modal Popup Box.

	<div id="clicker">
		Click Me!
	</div>

	<div id="popup-wrapper">
		I am a popup box. Content can be anything.<br />
		<a href="#" id="close-btn">Close</a>
	</div>
</body>