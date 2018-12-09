jQuery(function($) {
var $bodyEl = $('body'),
    $sidedrawerEl = $('#sidedrawer');

//SHOW
function showSidedrawer() {
  // show overlay
  var options = {
    onclose: function() {
      $sidedrawerEl
        .removeClass('active')
        .appendTo(document.body);
    }
  };

  var $overlayEl = $(mui.overlay('on', options));

  // show element
  $sidedrawerEl.appendTo($overlayEl);
  setTimeout(function() {
    $sidedrawerEl.addClass('active');
  }, 40);
}

//HIDE
function hideSidedrawer() {
  $bodyEl.toggleClass('hide-sidedrawer');
}

$( document ).ready(function() {
  hideSidedrawer();
});

$('.js-show-sidedrawer').on('click', showSidedrawer);
$('.js-hide-sidedrawer').on('click', hideSidedrawer);
});

var $titleEls = $('strong', $sidedrawerEl);
  $titleEls
  .next()
  .hide();

  $titleEls.on('click', function() {
  $(this).next().slideToggle(200);
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15.00; 
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;
  
  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
  
  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;
  
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
  
  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}


/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}

function myMap() {
  var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }
  