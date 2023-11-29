/* Add to cart funtion */
function clicktoCart() {
	document.querySelectorAll(".button-flex>button:nth-child(2)").forEach(item => {
		item.addEventListener("click", function () {
			// document.getElementById("bookContainer").classList.add("blur");
			// document.querySelector(".shippingCart").classList.remove("noShowCart");
			let id = item.parentNode.parentNode.childNodes[3].childNodes[3].innerText.substring(3);
			let price = storeItemArray[id - 1].price;
			let quanity = 1;
			let shipping = storeItemArray[id - 1].shipping;
			let addProducts = new CartItem(id, price, quanity, shipping);
			console.log(addProducts);

			let count = 0;
			for (item of cartItem) {
				if (item.id == addProducts.id) {
					count++;
				}
			}
			if (count == 0) {
				cartItem.push(addProducts);
			} else {
				for (item of cartItem) {
					if (item.id == addProducts.id) {
						item.quanity++;
					}
				}
			}

			// for (item of cartItem) {
			// 	if (item.id == addProducts.id) {
			// 		item.quanity++;
			// 	} else {
			// 		cartItem.push(addProducts);
			// 	}
			// }
			console.log(cartItem);
		});
	});
}
