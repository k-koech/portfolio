// close the collapse class when nav-li is clicked
$('.nav-link').on('click',function() 
{
    $('.navbar-collapse').collapse('hide');
});

// My location map
function initMap() {
    // The location of Rongai
    
    const rongai = { lat: -1.2920658999999999, lng: 36.8219462 };
    // The map, centered at Rongai
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: rongai,
    });
    // The marker, positioned at Rongai
    const marker = new google.maps.Marker({
      position: rongai,
      map: map,
    });
  }

  