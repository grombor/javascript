$("document").ready(function(){
  
// Global variables
  var output=0;

// Functions
  function getOddsF (Obj){
    // Get input value
    let value = Obj.val();
    // Find "/" position
    let slashPos = value.indexOf("/");
    // Slice fractional to numerato and denumerator by slash position
    let numerator = value.slice(0,slashPos);
    let denumerator = value.slice(slashPos+1,value.length);
    // Return result as decimal fraction
    let result = (numerator/denumerator)+1;
    let result2 = (result*100)-100;
    result2 = "+"+result2;
    let odds = {
      "fractional": value,
      "decimal": result,
      "moneyline": result2
    };
    return odds;
  }

  function getOddsD (Obj){
    let value = parseFloat(Obj.val())-1;
    let fracionalString = value.toString()+"/"+"1";
    let moneyLine = "+"+(value)*100;
    let odds = {
      "fractional": fracionalString,
      "decimal": Obj.val(),
      "moneyline": moneyLine
    };
    return odds;
  }

  function getOddsM (Obj){
    let value = Obj.val();
    let balance = value.slice(0,1);
    value = parseInt(Obj.val());
    let odds, decimal, fractional = "";
    if (balance==="+"){
      console.log("+");
      decimal = (value/100)+1;
      fractional = (decimal - 1)+"/1";
      odds = {
        "fractional": fractional,
        "decimal": decimal,
        "moneyline": Obj.val()
      }
      return odds;
    }
    else {
      console.log("-");
      decimal = (100/value)+1;
      fractional = (decimal - 1)+"/1";
      odds = {
        "fractional": fractional,
        "decimal": decimal,
        "moneyline": Obj.val()
      }
      return odds;
    };
  }

  function hasValue(Obj){
    if (Obj.val()===""){
      return false;
    }
    return true;
  };

// Code
  $('#reset').click(function(){
    $('#input1').removeAttr("disabled", "disabled");
    $('#input2').removeAttr("disabled", "disabled");
    $('#input3').removeAttr("disabled", "disabled");
  });

  $("input[value='Calculate']").click(function(){
    console.log(output);
    if (hasValue($('#input1'))) {
      console.log("test input1img");
      $('#input2').attr("disabled", "disabled").val(output.decimal);
      $('#input3').attr("disabled", "disabled").val(output.moneyline);
    }
    else if (hasValue($('#input2'))) {
      $('#input1').attr("disabled", "disabled");
      $('#input1').val(""+output.fractional.toString());
      $('#input3').attr("disabled", "disabled");
      $('#input3').val(""+output.moneyline);
    }
    else if (hasValue($('#input3'))){
      $('#input2').attr("disabled", "disabled");
      $('#input2').val(output.decimal);
      $('#input1').attr("disabled", "disabled");
      $('#input1').val(output.fractional);
    };

    $(".output").html("<strong>Result: </strong><br><p>Fractional: "
    +output.fractional+"<br>Decimal: "
      +output.decimal+"<br>American: "
      +output.moneyline+"</p>");
  });

  $('#input1').blur(function(){
    let Obj = $('#input1');
    output = getOddsF(Obj);
    $('#input2').attr("disabled", "disabled");
    $('#input3').attr("disabled", "disabled");
  });
  $('#input2').blur(function(){
    let Obj = $('#input2');
    output = getOddsD(Obj);
    $('#input1').attr("disabled", "disabled");
    $('#input3').attr("disabled", "disabled");
  });
  $('#input3').blur(function(){
    let Obj = $('#input3');
    output = getOddsM($('#input3'));
    $('#input2').attr("disabled", "disabled");
    $('#input1').attr("disabled", "disabled");
  });
});
