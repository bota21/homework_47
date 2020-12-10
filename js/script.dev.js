"use strict";

$(function () {
  $('.burger_menu').on('click', function () {
    $('.menu').toggleClass('active');
  });
  $(document).ready(function () {
    $(".slider").slick({});
  });
});