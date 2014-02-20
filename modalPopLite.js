﻿/*
* jQuery modalPopLite
* Copyright (c) 2012 Simon Hibbard
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:

* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

/*
* Version: V1.4
* Release: 20-02-2014
* Based on jQuery from 1.7 to 1.11.0 / 2.1.0
*/

(function ($, window) {
    var popID = 0,
        modalPopLite_mask = "#modalPopLite-mask",
        modalPopLite_wrapper = "#modalPopLite-wrapper";

    $.fn.modalPopLite = function (settings) {
        var options = $.extend({}, {
                openButton: "modalPopLite-open-btn",
                closeButton: "modalPopLite-close-btn",
                isModal: false,
                openCallback: null,
                closeCallback: null
            }, settings);

        return this.each(function () {
            popID++;
            var thisPopID = popID,
                isOpen = false,

                obj = $(this),
                openObj = options.openButton,
                closeObj = options.closeButton,
                isReallyModel = options.isModal,
                openCallback = options.openCallback,
                closeCallback = options.closeCallback,

                resizeBox = function () {
                    var winW = $(window).width(),
                        winH = $(window).height(),
                        objW = $('.modalPopLite-child-' + thisPopID).outerWidth(),
                        objH = $('.modalPopLite-child-' + thisPopID).outerHeight(),
                        left = (winW / 2) - (objW / 2),
                        top = (winH / 2) - (objH / 2);

                    $(modalPopLite_wrapper + thisPopID).css({ 'left': left + "px", 'top': top });
                    $(modalPopLite_mask + thisPopID).css('height', winH + "px");
                },
                openPopLiteModal = function (btn) {
                    $(document).on("click", btn, function (e) {
                        e.preventDefault();
                        resizeBox();
                        $(modalPopLite_mask + thisPopID).fadeTo('slow', 0.6);
                        $(modalPopLite_wrapper + thisPopID).fadeIn('slow');
                        isOpen = true;

                        if (typeof openCallback === 'function') {
                            openCallback.call(this);
                        }
                    });
                },
                closePopLiteModal = function (btn) {
                    $(document).on("click", btn, function (e) {
                        e.preventDefault();
                        $(modalPopLite_mask + thisPopID).hide();
                        $(modalPopLite_wrapper + thisPopID).css('left', "-10000px");

                        isOpen = false;

                        if (typeof closeCallback === 'function') {
                            closeCallback.call(this);
                        }
                    });
                };

            obj.before('<div id="modalPopLite-mask' + thisPopID + '" style="width:100%" class="modalPopLite-mask" />');
            obj.wrap('<div id="modalPopLite-wrapper' + thisPopID + '" style="left: -10000px;" class="modalPopLite-wrapper" />');
            obj.addClass('modalPopLite-child-' + thisPopID);

            // Check if we have array of open buttons
            if ($.isArray(openObj)) {
                for (var i = 0, len = openObj.length; i < len; i++) {
                    openPopLiteModal(openObj[i]);
                }
            } else {
                openPopLiteModal(openObj);
            }

            // Check if we have array of close buttons
            if ($.isArray(closeObj)) {
                for (var v = 0, closeLen = closeObj.length; v < closeLen; v++) {
                    closePopLiteModal(closeObj[v]);
                }
            } else {
                closePopLiteModal(closeObj);
            }

            // Bind an event listener on object to trigger open without need to
            // click on open button

            obj.bind('openPopLiteModal', function () {
                openPopLiteModal();
            });

            // Bind an event listener on object to trigger close without need to
            // click on open button

            obj.bind('closePopLiteModal', function () {
                closePopLiteModal();
            });


            //if mask is clicked
            if (!isReallyModel) {
                $(modalPopLite_mask + thisPopID).click(function (e) {
                    e.preventDefault();
                    $(this).hide();
                    closePopLiteModal();
                });
            }
            $(window).resize(function () {
                if (isOpen) {
                    resizeBox();
                }
            });
        });

    };

})(jQuery, window);
