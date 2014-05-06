var provider = "http://mizu.yamishi.tk"

$("#rastrear").click(function(){
	$.ajax({
		url: provider +"/" + $("#numero").val(),
		dataType: "json",
		type: "get",
		success: function (data) {
			count = data.data.length;
			i = 0;
			while(count > i) {
				$("tbody").append('<tr id="row'+i+'"></tr>');
				$("#row"+i).html('<td id="col'+i+0+'">'+data.data[i].fecha+'</td>'+
					'<td id="col'+i+1+'">'+data.data[i].origen+'</td>'+
					'<td id="col'+i+2+'">'+data.data[i].accion+'</td>'+
					'<td id="col'+i+3+'">'+data.data[i].destino+'</td>');
				i++;
			}
		}
	});
});