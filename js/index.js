const root = document.getElementById("root");
let cad = true;
let updateData = storeItemArray;
let pid = 1;
function loadPage(data) {
	//console.log(data);
	let content = data
		.map(item => {
			return `<li class="card">
      <img src="${item.img}" alt="${item.name}" />
      <div class="div-flex">
        <h4>ID:</h4>
        <p>PID${item.id}</p>
      </div>
      <div>
        <h4>Book Name:</h4>
        <p class="hideToPoint">${item.name}</p>
      </div>
      <div class="div-flex">
        <h4>Price:</h4>
        <p>$${cad ? item.price : (item.price / 1.33).toFixed(2) + "(USD)"}</p>
      </div>
      <div class="div-flex">
        <h4>Quantity on Hand:</h4>
        <p>${item.quantity}</p>
      </div>

      <div class="div-flex">
        <h4>Max:</h4>
        <p>${item.max}</p>
      </div>
      <div class="div-flex">
        <h4>Category:</h4>
        <p>${item.category}</p>
      </div>
      <div class="button-flex">
        <button><strong>Detail</strong></button>
        <button data-id=${item.id}><strong>Add to cart</strong></button>
      </div>
    </li>`;
		})
		.join("");

	root.innerHTML = content;
	detailButton();
	clicktoCart();
}

loadPage(updateData);

/* code for get the time difference */
function getTimeDiff() {
	const now = new Date();
	const end = new Date("December 25, 2023");
	let timeDiff = end - now;
	let dayDiff = parseInt(timeDiff / 1000 / 60 / 60 / 24);
	let hourDiff = parseInt((timeDiff / 1000 / 60 / 60) % 24);
	let minDiff = parseInt((timeDiff / 1000 / 60) % 60);
	let secondDiff = parseInt((timeDiff / 1000) % 60);
	document.getElementById("timeDiff").innerHTML = `From now to  end of promition(X-mass): ${dayDiff < 10 ? "0" + dayDiff : dayDiff}day ${
		hourDiff < 10 ? "0" + hourDiff : hourDiff
	}hours ${minDiff < 10 ? "0" + minDiff : minDiff}minutes ${secondDiff < 10 ? "0" + secondDiff : secondDiff}seconds`;
}
/* update the time diff erery one second */
setInterval(() => {
	getTimeDiff();
}, 1000);

/* date of today */
function getDateTime() {
	const now = new Date();
	let year = now.getFullYear();
	let month = now.getMonth() + 1;
	let date = now.getDate();
	let hour = now.getHours();
	let minutes = now.getMinutes();
	let second = now.getSeconds();
	document.getElementById("today").innerHTML = `${year}/${month < 10 ? "0" + month : month}/${date < 10 ? "0" + date : date} -- ${
		hour < 10 ? "0" + hour : hour
	}:${minutes < 10 ? "0" + minutes : minutes}:${second < 10 ? "0" + second : second}`;
}
/* update the date and time every second */
setInterval(() => {
	getDateTime();
}, 1000);

/* category option evenListener */
document.getElementById("displayFilter").addEventListener("change", function () {
	//console.log(this.value);
	if (this.value == "All") {
		updateData = storeItemArray;
		loadPage(updateData);
		loadDetail(pid, 1);
	} else if (this.value == "Art") {
		updateData = storeItemArray.filter(item => {
			return item.category == "Art";
		});
		//console.log(updateData);
		loadPage(updateData);
		loadDetail(pid, 1);
	} else if (this.value == "Education") {
		updateData = storeItemArray.filter(item => {
			return item.category == "Education";
		});
		loadPage(updateData);
		loadDetail(pid, 1);
	} else if (this.value == "Friction") {
		updateData = storeItemArray.filter(item => {
			return item.category == "Friction";
		});
		loadPage(updateData);
		loadDetail(pid, 1);
	}
});

/* dollar convert */
function dollarConvert() {
	document.getElementById("dollarConver").addEventListener("change", function () {
		//console.log(this.value);
		if (this.value == "true") {
			cad = true;
		} else if ((this.value = "false")) {
			cad = false;
		}
		loadPage(updateData);
		loadDetail(pid, 1);
		loadShopCart();
	});
}
dollarConvert();

loadDetail(pid, 1);

/* detail button */
function detailButton() {
	document.querySelectorAll(".button-flex>button:nth-child(1)").forEach(item => {
		item.addEventListener("click", function () {
			/* get the pid from Dom */
			let id = item.parentNode.parentNode.childNodes[3].childNodes[3].innerText;
			pid = id.substring(3); // trim the pid to the format match the product ID
			////console.log(pid);
			document.getElementById("bookContainer").classList.add("blur"); // to make to booklist blur
			loadDetail(pid, 1);
			document.querySelector(".detail").classList.remove("showing"); // to show the detail page
		});
	});
}

/* loading the detail page and buttons function at detail page */
function loadDetail(id, amount) {
	let data = storeItemArray.filter(item => {
		return item.id == id;
	});
	data = data[0];
	//console.log(data);
	let str = "";
	if (data.reviews.length != 0) {
		data.reviews.forEach(item => {
			str += ` <p>${item.rating}star</p>
			<p>${item.review}</p>
			<br />`;
		});
	}
	let content = `
  <div class="upper">
					<img src="${data.img}" alt="${data.name}" />
					<div class="book-info">
						<h3>${data.name}</h3>
						<h4>Papeback</h4>
						<div>
							<span>price:</span>
							<span>$${cad ? data.price : (data.price / 1.33).toFixed(2) + "(USD)"}</span>
						</div>
						<div>
							<span>Category:</span>
							<span>${data.category}</span>
						</div>
						<div>
							<span>Available:</span>
							<span>${data.quantity}</span>
						</div>
						<div>
							<span>Quantity:</span>
							<button class="minus" disabled>-</button><input type="text" value="${amount}" /><button class="plus">+</button>
						</div>
						<div>
							<button class="addCart">Add to Cart</button>
						</div>
						<div>
							<button class="addReview">Add Reviews</button>
						</div>
					</div>
					<div class="closeTag">
						<img src="./imgs/close-line-circled.svg" alt="closetag" />
					</div>
				</div>

				<div class="down">
					<hr />
					<h3>Details</h3>
					<p>
						${data.description}
					</p>
					<hr />

						<h3>Review</h3>
					<div id='reviews'>	
					${data.reviews.length == 0 ? `<p>no comments yet, being the first person who make a review?</p>` : str}
					
					</div>
					<hr />
					
					
					
				</div>
  `;
	////console.log(content);
	document.querySelector(".detail").innerHTML = content;
	/* close tag at detail page */
	document.querySelector(".closeTag").addEventListener("click", function () {
		document.getElementById("bookContainer").classList.remove("blur");
		document.querySelector(".detail").classList.add("showing");
	});

	const minus = document.querySelector(".minus");
	const input = minus.nextSibling;
	const plus = document.querySelector(".plus");
	if (data.max == input.value) {
		plus.disabled = true;
	}
	/* update button disabled attribute */
	function updateButton() {
		minus.disabled = input.value <= 1;
		plus.disabled = input.value == data.max || input.value == data.quantity; // to limit the max input
	}
	/* minus button at detail page counter */
	minus.addEventListener("click", function () {
		input.value--;
		updateButton();
	});

	/* plus button at detail page counter */
	plus.addEventListener("click", function () {
		input.value++;
		updateButton();
	});
	/* user input validation */
	input.addEventListener("change", function () {
		//const regpattern = /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/;
		const regpattern = /^[0-9]+$/;
		let quantity = input.value;
		quantity = parseInt(quantity);
		if (regpattern.test(quantity)) {
			console.log(quantity);
			if (data.max > data.quantity) {
				if (quantity > data.quantity) {
					quantity = data.quantity;
					alert("enter an interger less than or equal to " + data.quantity);
					loadDetail(pid, quantity);
				} else {
					loadDetail(pid, quantity);
				}
			} else if (data.max < data.quantity) {
				if (quantity > data.max) {
					quantity = data.max;
					alert("enter an interger less than or equal to " + data.max);
					loadDetail(pid, quantity);
				} else {
					loadDetail(pid, quantity);
				}
			}

			/* add some code here */
			/* 	loadDetail(pid); */
			/* above hear f= */
		} else {
			alert("input only an integer!");
			quantity = 1;
			loadDetail(pid, quantity);
		}
	});

	/* add to cart funtion at detail page */
	function addToCart2() {
		let quantity = this.parentNode.parentNode.childNodes[11].childNodes[4].value * 1;

		let price = storeItemArray[id - 1].price;
		let shipping = storeItemArray[id - 1].shipping;
		let addProducts = new CartItem(id, price, quantity, shipping);
		this.parentNode.parentNode.childNodes[11].childNodes[4].value = 1;
		//console.log(addProducts);

		/* !!!! bugs here!!! when click the button, check if the obj.id exist in the cartItem.obj.id, if not push it in, if it is exist, update the cartItem.obj.quantity */
		let counter = 0;
		if (cartItem.length == 0) {
			cartItem.push(addProducts);
			//alert("add to cart success!");
		} else {
			cartItem.forEach(item => {
				if (item.id == id) {
					counter++;
					if (item.quantity + quantity <= data.max && item.quantity + quantity <= data.quantity) {
						item.quantity += quantity;
					} else {
						alert(`The max quantity of book is ${data.max < data.quantity ? data.max : data.quantity}, you cannot buy more than that number`);
					}
				}
			});
			if (counter == 0) {
				//meaning this book has not been pushed before
				cartItem.push(addProducts);
				//alert("add to cart success!");
			}
		}

		//organizeData();
		loadShopCart();
		updateAmountOfCart();
	}
	document.querySelector(".addCart").addEventListener("click", addToCart2);

	/* ADD review button at  detail page */
	document.querySelector(".addReview").addEventListener("click", function () {
		document.querySelector(".reviewInputPage").classList.remove("noShowCart");
		//console.log();
	});
}
// let organizedCartItem = [];
/* Add to cart funtion at homepage */
function clicktoCart() {
	document.querySelectorAll(".button-flex>button:nth-child(2)").forEach(item => {
		item.addEventListener("click", function () {
			let id = item.dataset.id;
			let max = storeItemArray.filter(item => {
				return item.id == id;
			})[0].max;

			let quantityAvailable = storeItemArray.filter(item => {
				return item.id == id;
			})[0].quantity;
			//console.log(id, max, quantityAvailable);
			////console.dir(id.dataset.id);
			let price = storeItemArray[id - 1].price;
			let quantity = 1;
			let shipping = storeItemArray[id - 1].shipping;
			let addProducts = new CartItem(id, price, quantity, shipping);
			//console.log(addProducts);

			/* @!!!!! bugs here!!! */
			/* !!!!!! */
			/* add some logic here: if obj.id exist in the organizedCartItem, do not push into the array */
			let counter = 0;
			if (cartItem.length == 0) {
				cartItem.push(addProducts);
				//organizeData();
				alert("add to cart success!");
				////console.log(cartItem);
				loadShopCart();
				updateAmountOfCart();
			} else {
				cartItem.forEach(item => {
					if (item.id == id) {
						counter++;
					}
				});
				if (counter == 0) {
					cartItem.push(addProducts);
					//console.log("cartItem:", cartItem);
					/* bugs here */
					// organizeData();
					// //console.log("organizedCartItem:", organizedCartItem);
					alert("add to cart success!");
					loadShopCart();
					updateAmountOfCart();
				} else {
					alert(
						"The product has been added to the cart, please do not add it again. To change the quantity, click the detail button, or click My Cart to modify."
					);
				}
			}
		});
	});
}

//  function organizeData() {
// 	organizedCartItem = cartItem.reduce((accumulator, currentItem) => {
// 		const existingItemIndex = accumulator.findIndex(item => item.id === currentItem.id);

// 		if (existingItemIndex !== -1) {
// 			// If an item with the same ID exists, update its quantity
// 			accumulator[existingItemIndex].quantity += currentItem.quantity;
// 		} else {
// 			// If the item doesn't exist, add it to the accumulator
// 			accumulator.push({ ...currentItem }); // Use spread operator to create a copy
// 		}
// 		/* sort the array by ID from low to height */
// 		return accumulator.sort((a, b) => {
// 			return a.id - b.id;
// 		});
// 	}, []);

// }

/* toggle the shopping cart event */
document.getElementById("myCart").addEventListener("click", function () {
	let book = document.getElementById("bookContainer");
	let shoppingCart = document.querySelector(".shoppingCart");
	book.classList.toggle("blur");
	shoppingCart.classList.toggle("noShowCart");
});

/* update the amount of shopping cart */
function updateAmountOfCart() {
	let num = 0;
	cartItem.forEach(item => {
		num += item.quantity * 1;
	});
	document.querySelector(".shopCounter").innerText = num;
}

/* loading the shoppingcart page */
function loadShopCart() {
	////console.log("organizedCartItem,start at the funtion:", organizedCartItem);
	let content0 = "";

	let content2 = "";

	if (cartItem.length == 0) {
		content0 = `<p>NO item In Cart, add Item to Cart</p>
               <hr />
					<div><span>Items Subtotal: </span><span>$0.00</span></div>
					<div><span>Estimated Shipping:</span><span> $0.00</span></div>
					<br />
					<div><span>Total:</span><span>$0.00</span></div>
					<div><span>Estimated Tax:</span><span>$0.00</span></div>
					<div><span>Order Total:</span><span>$0.00</span></div>
				</div>`;
		document.getElementById("root2").innerHTML = content0;

		document.getElementById("root3").innerHTML = "";
		document.getElementById("subtotal").innerHTML = "";
		document.querySelector(".shopCounter").innerText = 0;
	} else if (cartItem.length) {
		let str = `<tr >
    <th>PID</th>
    <th>Book Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Subtotal(exclude tax)</th>
    <th>Tax</th>
    <th>Shipping</th>
    <th>Remove from Cart</th>
  </tr>`;
		let max;
		let itemsSubtotal = 0;
		let totalShipping = 0;
		let total;
		let totalTax;
		let orderTotal;

		cartItem.forEach(item => {
			let { id, price, quantity, shipping } = item;
			let bookName = storeItemArray.filter(item => {
				return item.id == id;
			})[0].name;
			/* some bugs here pay attention!!! */
			// max = storeItemArray.filter(item => {
			// 	return item.id == id;
			// })[0].max;
			// storeQuantity = storeItemArray.filter(item => {
			// 	return item.id == id;
			// })[0].quantity;
			/* above code get some scope bugs */
			itemsSubtotal += Number((price * quantity).toFixed(2));
			totalShipping += shipping;
			total = (itemsSubtotal + totalShipping).toFixed(2);
			totalTax = (total * 0.13).toFixed(2);
			orderTotal = (Number(totalTax) + Number(total)).toFixed(2);
			str += `
        <tr>
          <td>${id}</td>
          <td>${bookName}</td>
          <td>$${cad ? price : (price / 1.33).toFixed(2) + "(USD)"}</td>
          <td><button class='minusBtn' >-</button><input class=quantity value="${quantity}" ></input><button class='plusBtn'>+</button></td>
          <td>$${cad ? (price * quantity).toFixed(2) : ((price * quantity) / 1.33).toFixed(2) + "(USD)"}</td>
          <td>$${cad ? (price * quantity * 0.13).toFixed(2) : ((price * quantity * 0.13) / 1.33).toFixed(2) + "(USD)"}</td>
          <td>$${cad ? shipping : (shipping / 1.33).toFixed(2) + "(USD)"}</td>
          <td><button class='removeButton'>Remove</button></td>
        </tr>
        `;
		});
		/* !!!!!! */
		////console.log(str);
		document.getElementById("root3").innerHTML = str;
		content2 = `<div >
		  <div><span>Items Subtotal: </span><span>$${cad ? itemsSubtotal.toFixed(2) : (itemsSubtotal / 1.33).toFixed(2) + "(USD)"}</span></div>
		  <div><span>Estimated Shipping:</span><span> $${cad ? totalShipping.toFixed(2) : (totalShipping / 1.33).toFixed(2) + "(USD)"}</span></div>
		  <br />
		  <div><span>Total:</span><span>$${cad ? total : (total / 1.33).toFixed(2) + "(USD)"}</span></div>
		  <div><span>Estimated Tax:</span><span>$${cad ? totalTax : (totalTax / 1.33).toFixed(2) + "(USD)"}</span></div>
		  <div><span>Order Total:</span><span>$${
				cad ? orderTotal : (orderTotal / 1.33).toFixed(2) + "(USD)"
			}</span> <span><button id="confirmOrder">Confirm Order</button></span></div>
		</div>`;

		document.getElementById("root2").innerHTML = "";
		document.getElementById("subtotal").innerHTML = content2;

		/* plus and minus button at shopping cart */
		const minus = document.querySelectorAll(".minusBtn");
		const plus = document.querySelectorAll(".plusBtn");

		/* helper funtion for update cart quantity when the input number change */
		function updateCartItem(quantity, id) {
			cartItem.forEach(item => {
				if (item.id == id) {
					item.quantity = quantity;
				}
			});
			loadShopCart();
			updateAmountOfCart();
		}

		minus.forEach(item => {
			item.addEventListener("click", function () {
				////console.log("clicked - !");
				let id = this.parentNode.parentNode.childNodes[1].innerText;

				let input = this.nextSibling;
				input.value--;
				/* user input validation */
				if (input.value <= 1) {
					input.value = 1;
				}
				this.disabled = input.value <= 1;

				input.nextSibling.disabled = input.value == max;

				updateCartItem(input.value, id);
			});
		});

		plus.forEach(item => {
			item.addEventListener("click", function () {
				let id = this.parentNode.parentNode.childNodes[1].innerText;
				let theObectById = storeItemArray.filter(item => {
					return item.id == id;
				})[0];
				let max = theObectById.max;
				let storeQuantity = theObectById.quantity;
				let input = this.previousSibling;
				input.value++;

				if (max > storeQuantity) {
					if (input.value > storeQuantity) {
						input.value = storeQuantity;
					}
				} else if (max < storeQuantity) {
					if (input.value > max) {
						input.value = max;
					}
				}

				input.previousSibling.disabled = input.value <= 1;
				this.disabled = input.value == max;
				updateCartItem(input.value, id);
			});
		});

		/* update the shopping cart after the quantity change */
		const quantity = document.querySelectorAll(".quantity");
		quantity.forEach(item => {
			item.addEventListener("change", function () {
				//console.log(this.value);
				let id = this.parentNode.parentNode.childNodes[1].innerText;
				let theObectById = storeItemArray.filter(item => {
					return item.id == id;
				})[0];
				let quantity = parseInt(this.value);
				const regpattern = /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/;
				let max = theObectById.max;
				let storeQuantity = theObectById.quantity;
				if (quantity < 1) {
					quantity = 1;
				}
				/* user input validation*/
				if (regpattern.test(quantity)) {
					if (max > storeQuantity) {
						if (quantity > storeQuantity) {
							quantity = storeQuantity;
							updateCartItem(quantity, id);
						} else {
							updateCartItem(quantity, id);
						}
					} else if (max < storeQuantity) {
						if (quantity > max) {
							quantity = max;
							updateCartItem(quantity, id);
						} else {
							updateCartItem(quantity, id);
						}
					}
				} else {
					alert("invalied input, please enter an integer");
					quantity = 1;
					updateCartItem(quantity, id);
				}

				/* fixing */
			});
		});

		/* remove item button */
		const removeItem = document.querySelectorAll(".removeButton");
		removeItem.forEach(item => {
			item.addEventListener("click", function () {
				let id = this.parentNode.parentNode.childNodes[1].innerText;
				//console.log(id);
				cartItem = cartItem.filter(item => {
					return item.id != id;
				});
				////console.log("organizedCartItem,after remove:", organizedCartItem);
				cartItem = cartItem.filter(item => {
					return item.id != id;
				});
				loadShopCart();
				updateAmountOfCart();
			});
		});

		/* Confirm oroder button */
		document.getElementById("confirmOrder").addEventListener("click", function () {
			alert(`Thanks for choosing us, your order has been ordered, the detail information will send to your email soon`);
			location.reload();
		});
	}
}

loadShopCart();

/* shopping cart close button */
document.querySelector("#topCart>img").addEventListener("click", function () {
	let book = document.getElementById("bookContainer");
	let shoppingCart = document.querySelector(".shoppingCart");
	book.classList.toggle("blur");
	shoppingCart.classList.toggle("noShowCart");
});

/* reviewInputPage close tag  */

document.getElementById("reviewCloseTag").addEventListener("click", closeReviewPage);
function closeReviewPage() {
	document.querySelector(".reviewInputPage").classList.add("noShowCart");
}
/* Submit button at reviewInput page */
document.getElementById("submit").addEventListener("click", function (evt) {
	evt.preventDefault();
	let review = document.getElementById("review");
	let rating = document.getElementById("rating");
	if (review.value == "") {
		return alert("the review area cannot be empty!");
	}
	let reviewItem = new ReviewItem(rating.value, review.value);
	//console.log(pid);
	let arrayToBeModify = storeItemArray.filter(item => {
		return item.id == pid;
	});
	arrayToBeModify[0].reviews.push(reviewItem);
	let restOfArray = storeItemArray.filter(item => {
		return item.id != pid;
	});
	restOfArray.push(arrayToBeModify[0]);
	restOfArray.sort((a, b) => {
		return a.id - b.id;
	});

	updateData = restOfArray;
	//console.log(updateData);
	review.value = "";
	alert("add review success!");
	closeReviewPage();
	loadDetail(pid, 1);
});
