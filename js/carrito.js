$(function() {
  var jsonData = [
    {
      title: "Holly",
      price: 15999.00,
      quantity: 1,
      total: 15999.00
    },
    {
      title: "El problema final",
      price: 10699.00,
      quantity: 1,
      total: 10699.00
    },
    {
      title: "Horóscopo chino 2024",
      price: 7999.00,
      quantity: 1,
      total: 7999.00
    },
    {
      title: "Roger Waters",
      price: 9999.00,
      quantity: 1,
      total: 9999.00
    },
    {
      title: "Un mundo de ensueño",
      price: 10999.00,
      quantity: 1,
      total: 10999.00
    },
    {
      title: "Óxido",
      price: 12999.00,
      quantity: 1,
      total: 12999.00
    }
    
  ];
  var html = "<tbody>";
  $.each(jsonData, function() {
    html +=
      '<tr class="cart-item tabla">' +
      "        <td class='div1'>" +
      '          <input type="checkbox" class="cart-item-check" checked />' +
      "        </td>" +
      "        <td class='div2'>" +
      "          " +
      this.title +
      "        </td>" +
      "        <td class='div3'>$" +
      this.price +
      "</td>" +
      "        <td class='div4'>" +
      '          <input class="input is-primary cart-item-qty" style="width:100px" type="number" min="1" value="' +
      this.quantity +
      '" data-price="' +
      this.price +
      '">' +
      "        </td>" +
      '        <td class="cart-item-total div5">$' +
      this.total +
      "</td>" +
      "        <td class='div6'>" +
      '          <a class="button is-small">Quitar</a>' +
      "        </td>" +
      "      </tr>";
  });
  html += "</tbody>";
  $(".shopping-cart").append(html);
  
  recalculateCart();

  $(".cart-item-check").change(function() {
    recalculateCart();
  });

  $(".cart-item-qty").change(function() {
    var $this = $(this);
    var parent = $this.parent().parent();
    parent.find(".cart-item-check").prop("checked", "checked");
    var price = $this.attr("data-price");
    var quantity = $this.val();
    var total = price * quantity;
    parent.find(".cart-item-total").html(total.toFixed(2));
    recalculateCart();
  });

  $(".button").click(function() {
    var parent = $(this)
      .parent()
      .parent();
    parent.remove();
    recalculateCart();
  });
});

function recalculateCart() {
  var total = 0;
  var items = $(".cart-item");
  $.each(items, function() {
    var itemCheck = $(this).find(".cart-item-check");
    var itemQuantity = $(this).find(".cart-item-qty");
    if (itemCheck.prop("checked")) {
      var itemTotal = itemQuantity.val() * itemQuantity.attr("data-price");
      total += itemTotal;
    }
  });
  
  $("#cart-total").html(total.toFixed(2));
}