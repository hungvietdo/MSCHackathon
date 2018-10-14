

function getUrlQueryParams() {
  var queryParameters = {}, queryString = location.search.substring(1),
  re = /([^&=]+)=([^&]*)/g, m;
  while (m = re.exec(queryString)) {
    queryParameters[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }
  return queryParameters;

}

$( document ).ready(function() {
  $('#createProject').on('click', function() {
    $.ajax({
      url: "/create",
      type: "POST",
      data: {
        "adId": "11"
      },
      success: function(result){
           
        setTimeout(function() {
          location.reload();
          $this.button('reset');
          $('#exampleModal').modal('hide');
          $("#sendMessageLabel").text("Your message has been sent! Seller will contact you shortly.");
        }, 2000);  
      }});



    $("#qrcodebox").show();
    $("#printButton").show();

  });

  $('#searchYourProject').on('click', function() {
    $("#searchproject").show();
  });






  function sendLeadInfo(data) {
    var urlParams = getUrlQueryParams();
    adId = urlParams['id'];
    $.ajax({
      url: "/sendlead", 
      data: {
        "adId": adId,
        "buyerName": data['buyerName'],
        "buyerEmail": data['buyerEmail'],
        "buyerPhone": data['buyerPhone'],
        "buyerMessage": data['buyerMessage']
      },
      success: function(result){
           
        setTimeout(function() {
          location.reload();
          $this.button('reset');
          $('#exampleModal').modal('hide');
          $("#sendMessageLabel").text("Your message has been sent! Seller will contact you shortly.");
        }, 2000);  
      }});
  };


  $('#leadSubmit').on('click', function() {
    $("#MissingLeadData").text("");
    var $this = $(this);
    data = [];
    data['buyerName'] = $("#buyer-name").val();
    data['buyerPhone'] = $("#buyer-phone").val();
    data['buyerEmail'] = $("#buyer-email").val();
    data['buyerMessage'] = $("#message-text").val();

    if (
      data['buyerName'] == '' ||
      data['buyerPhone'] == '' ||
      data['buyerEmail'] == '' ||
      data['buyerMessage'] == ''
   ) {
     $("#MissingLeadData").text("All fields are required.");
   } else {      
      sendLeadInfo(data);
      $this.button('loading');
      
    }
  });

  

  

  var urlParams = getUrlQueryParams();

  if (typeof urlParams['page'] == 'undefined') {
    document.cookie = "page=1";
  }
  
  // With JQuery
  $("#dataslide").slider();
  $("#dataslide").on("slide", function(slideEvt) {
      $("#minPrice").val(slideEvt.value[0]);
      $("#maxPrice").val(slideEvt.value[1]);
  });
});