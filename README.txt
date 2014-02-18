Original repo and How to Page
==============================

https://github.com/shibbard/jQuery-modalPopLite

http://www.mywebdeveloperblog.com/my-jquery-plugins/modalpoplite


New Updates
--------------

1- **openCallback:** Function will be called after the Modal has been opened

2- **closeCallback:** Function will be called after the Modal has been closed

3- **$(elem).on('openPopLiteModal'):** Trigger open ModalPolite

4- **$(elem).on('closePopLiteModal'):** Trigger close ModalPolite

5- **openButton:** String or Array of open buttons

6- **closeButton:** String or Array of close buttons

7- **isModal** – true or false. If true the popup is modal and clicking the background will not close the popup. Only the ‘closeButton’ target will.


Usage
===============

Step 1: Include files
----------------------

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<link href="modalPopLite.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="modalPopLite.min.js"></script>


Step 2: Create the page with an element to click and open the popup and a close button.
----------------------------------------------------------------------------------------

<div id="clicker">Click Me!</div>
<div id="popup-wrapper" style="background-color: #ccc;">I am a popup box. Content can be anything.
<a id="close-btn" href="#">Close</a></div>
