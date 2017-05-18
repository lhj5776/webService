function recalculate() {
	var sum = 0;
  $("#tab tbody tr").each(function(idx, row) {
    var $el = $(row);
		var unitPrice = parseInt($el.find(".unit-price").val(), 10);
		var discountRate = parseFloat($el.find(".discount-rate").val(),10);
		var qty = parseInt($el.find(".qty").val());

		if(discountRate >= 100.0){
			alert("할인율은 100%를 넘을 수 없습니다.");
			discountRate = 0.0;
		}
		if (!isNaN(unitPrice) && !isNaN(qty) && !isNaN(discountRate)) {
			var discount = 1-discountRate/100;
			var price = (unitPrice * qty) * discount;
			$el.find(".price").text(price);
			sum = sum + price;
		}
	});
	$("#sum").text(sum);
}

function initCalculator() {
	$('#add').click(function() {
		$("#tab tbody").append($('#rowTemplate').html());
	});
	$('#del').click(function() {
		if (confirm("정말 삭제하시겠습니까?")) {
			var $els = $("tr input[type='checkbox']:checked");
      $els.each(function(idx, el) {
        $(el).parents("tr").empty();
      });
			recalculate();
		}
	});
	$('#add').click();
}
