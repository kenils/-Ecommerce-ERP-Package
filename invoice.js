function createInvoice() {
  var data = getSampleData();
	easyinvoice.createInvoice(data, function(result) {
    document.getElementById('invoiceBase64').innerText = result.pdf;
    /* console.log(result.pdf); */
  });
}

function downloadInvoice() {
  var data = getSampleData();
	easyinvoice.createInvoice(data, function(result) {
  	easyinvoice.download('myInvoice.pdf', result.pdf);
    //	you can download like this as well:
    //	easyinvoice.download();
    //	easyinvoice.download('myInvoice.pdf');
  });
}

function renderInvoice(){
	var data = getSampleData();
  document.getElementById("pdf").innerHTML = "loading...";
	easyinvoice.createInvoice(data, function(result) {
  	easyinvoice.render('pdf', result.pdf);
  });
}

function getSampleData() {
  return {
  	//"documentTitle": "RECEIPT", //Defaults to INVOICE
    "currency": "INR",
    "taxNotation": "gst", //or gst
    "marginTop": 25,
    "marginRight": 25,
    "marginLeft": 25,
    "marginBottom": 25,
    "logo": "https://www.easyinvoice.cloud/img/logo.png", //or base64
    //"logoExtension": "png", //only when logo is base64
    "sender": {
      "company": "Sample Corp",
      "address": "Sample Street 123",
      "zip": "1234 AB",
      "city": "Sampletown",
      "country": "Samplecountry"
      //"custom1": "custom value 1",
      //"custom2": "custom value 2",
      //"custom3": "custom value 3"
    },
    "client": {
      "company": "Client Corp",
      "address": "Clientstreet 456",
      "zip": "4567 CD",
      "city": "Clientcity",
      "country": "Clientcountry"
      //"custom1": "custom value 1",
      //"custom2": "custom value 2",
      //"custom3": "custom value 3"
    },
    "invoiceNumber": "2020.0001",
    "invoiceDate": "05-01-2020",
    "products": [{
        "quantity": "2",
        "description": "Jeans",
        "tax": 6,
        "price": 33.87
      },
      {
        "quantity": "4",
        "description": "Shirt",
        "tax": 21,
        "price": 10.45
      },
      {
        "quantity": "2",
        "description": "TrackPants",
        "tax": 21,
        "price": 32.45
      }

    ],
    "bottomNotice": "Kindly pay your invoice within 15 days."
  };
}
