/* this is an object constrution function to create 16 prodcuts object and push them inside of a array called storeItemArray, which stimulates the data fetch from server */

function StoreItem(id, name, price, quantity, max, category, shipping, reviews, description, img) {
	this.id = id;
	this.name = name;
	this.price = price;
	this.quantity = quantity;
	this.max = max;
	this.category = category;
	this.shipping = shipping;
	this.reviews = reviews;
	this.description = description;
	this.img = img;
}

const storeItem1 = new StoreItem(
	1,
	"Painting Happiness: Creativity With Watercolors",
	9.59,
	50,
	10,
	"Art",
	9.9,
	[],
	"In this simple and vibrant guide, hugely popular Instagram muse @TerryRunyan explores the art of watercolour through the lens of mindfulness, presenting activities and projects which you can paint along with as you allow your creative side to flourish.",
	"./imgs/book_images/art/Painting_Happiness.jpg"
);
const storeItem2 = new StoreItem(
	2,
	"The Master Guide to Drawing Anime",
	9.59,
	5,
	10,
	"Art",
	9.9,
	[{ rating: 4, review: "it is a good book!" }],
	"Nothing brings anime artists more satisfaction than creating original characters to use in a comic strip or graphic novel. Bestselling how-to-draw author Christopher Hart helps them reach this goal by providing insight into the six most popular anime types: schoolgirls, schoolboys, preteens, vengeful bad guys, humorous personalities, and fantasy figures.",
	"./imgs/book_images/art/Drawing_Anime.png"
);
const storeItem3 = new StoreItem(
	3,
	"The Animator's Survival Kit",
	16.79,
	15,
	2,
	"Art",
	9.9,
	[],
	"Animation is one of the hottest areas of filmmaking today--and the master animator who bridges the old generation and the new is Richard Williams. During his fifty years in the business, Williams has been one of the true innovators, winning three Academy Awards and serving as the link between Disney's golden age of animation by hand and the new computer animation exemplified by Toy Story.",
	"./imgs/book_images/art/Animator_Survival_Kit.jpg"
);
const storeItem4 = new StoreItem(
	4,
	"Cute Chibi Mythical Beasts & Magical Monsters",
	10.39,
	50,
	5,
	"Art",
	19.9,
	[],
	"Create your own chibi world with fun and adorable step-by-step drawing exercises, including over 60 fantasy creatures and characters featuring different accessories, clothing, facial expressions, and poses.",
	"./imgs/book_images/art/Cute_chibi.jpg"
);
const storeItem5 = new StoreItem(
	5,
	"The Master Guide to Drawing Anime",
	11.59,
	40,
	20,
	"Art",
	2.9,
	[],
	"Chris Hart delves deep into the specifics of drawing anime characters and scenes and explores every aspect of anime forms. He reveals his secrets for composing a complete picture, and discusses rarely covered topics. Entirely new tutorials include instruction on drawing hands and feet in different gestures or positions, arranging characters within the action, and creating nuanced expressions. Fans of The Master Guide books will find this title to be invaluable in strengthening their drawing skills, while newcomers will see this as a perfect introduction to the series.",
	"./imgs/book_images/art/Mater_guide_drawing_anime.jpg"
);
const storeItem6 = new StoreItem(
	6,
	"Harry Potter Film Wizardry (Updated Edition)",
	19.99,
	16,
	2,
	"Art",
	19.9,
	[],
	"New York Times bestselling Harry Potter Film Wizardry was the first book to delve into the fascinating and intriguing world of an enormously successful film franchise. The book features interviews with cast members, including: Daniel Radcliffe (Harry Potter), Emma Watson (Hermione Granger), Rupert Grint (Ron Weasley), and Alan Rickman (Severus Snape), as well as exclusive behind-the-scenes stories from the producer on all eight films, David Heyman, director David Yates, and production designer Stuart Craig. In this new, updated edition, readers will now be able to explore all eight of the films.",
	"./imgs/book_images/art/Harry_potter.jpg"
);
const storeItem7 = new StoreItem(
	7,
	"Grit: The Power of Passion and Perseverance",
	8.79,
	20,
	5,
	"Education",
	4.9,
	[],
	"The daughter of a scientist who frequently noted her lack of “genius,” Angela Duckworth is now a celebrated researcher and professor. It was her early eye-opening stints in teaching, business consulting, and neuroscience that led to her hypothesis about what really drives success: not genius, but a unique combination of passion and long-term perseverance.",
	"./imgs/book_images/education/Power_of_passion_and_perseverance.jpg"
);
const storeItem8 = new StoreItem(
	8,
	"Cards Against Anxiety: A Guidebook and Cards to Help You Stress Less",
	8.79,
	50,
	5,
	"Education",
	19.9,
	[],
	"This guidebook and card deck provide strategies for standing up to anxiety, understanding it, and cutting it down to size.",
	"./imgs/book_images/education/Cards_against.jpg"
);
const storeItem9 = new StoreItem(
	9,
	"Battle for the American Mind: Uprooting a Century of Miseducation",
	8.79,
	30,
	5,
	"Education",
	29.9,
	[],
	"Battle for the American Mind is more than a book; it’s a field guide for remaking school in the United States. We’ve ceded our kids’ minds to the left for far too long—this book gives patriotic parents the ammunition to join an insurgency that gives America a fighting chance.",
	"./imgs/book_images/education/Battle_for_American.jpg"
);
const storeItem10 = new StoreItem(
	10,
	"Daily 6-Trait Writing (Grade 3)",
	10.99,
	30,
	10,
	"Education",
	29.9,
	[],
	"Provide your students with frequent, focused skills practice with this Reproducible Teacher's Edition. The reproducible format and additional teacher resources give you everything you need to help students master and retain basic skills. Give your third-graders the fun and focused writing practice they need to become strong and successful writers. The 125 engaging, 10- to 15-minute lessons support any writing program. 25 weeks of instruction cover trait-based writing skills.",
	"./imgs/book_images/education/Daily_writing.jpg"
);
const storeItem11 = new StoreItem(
	11,
	"Lessons Learned and Cherished: The Teacher Who Changed My Life",
	9.99,
	20,
	1,
	"Education",
	9.9,
	[],
	"In this simple and vibrant guide, hugely popular Instagram muse @TerryRunyan explores the art of watercolour through the lens of mindfulness, presenting activities and projects which you can paint along with as you allow your creative side to flourish.",
	"./imgs/book_images/education/Lessons_Learn.jpg"
);
const storeItem12 = new StoreItem(
	12,
	"A Day of Fallen Night (The Roots of Chaos, Bk. 2)",
	7.99,
	88,
	10,
	"Friction",
	9.9,
	[],
	"Tunuva Melim is a sister of the Priory. For fifty years, she has trained to slay wyrms - but none have appeared since the Nameless One, and the younger generation is starting to question the Priory's purpose.",
	"./imgs/book_images/friction/Fallen_night.jpg"
);
const storeItem13 = new StoreItem(
	13,
	"Every Summer After",
	7.59,
	150,
	10,
	"Friction",
	29.9,
	[],
	"They say you can never go home again, and for Persephone Fraser, ever since she made the biggest mistake of her life a decade ago, that has felt too true. Instead of glittering summers on the lakeshore of her childhood, she spends them in a stylish apartment in the city, going out with friends, and keeping everyone a safe distance from her heart.",
	"./imgs/book_images/friction/Every_summer.jpg"
);
const storeItem14 = new StoreItem(
	14,
	"It Ends With Us (Exclusive Collector's Edition)",
	7.99,
	150,
	20,
	"Friction",
	39.9,
	[],
	"A special hardcover collector’s edition of It Ends with Us, featuring an exclusive Q&A between Colleen Hoover and her mother, a beautiful foil cover, and newly designed endpapers—from the #1 New York Times bestselling author of It Starts with Us and soon to be a major motion picture starring Blake Lively and Justin Baldoni.",
	"./imgs/book_images/friction/It_ends.jpg"
);
const storeItem15 = new StoreItem(
	15,
	"One True Loves",
	6.59,
	150,
	10,
	"Friction",
	9.9,
	[],
	"In her twenties, Emma Blair marries her high school sweetheart, Jesse. They build a life for themselves, far away from the expectations of their parents and the people of their hometown in Massachusetts. They travel the world together, living life to the fullest and seizing every opportunity for adventure.",
	"./imgs/book_images/friction/One_true_loves.jpg"
);
const storeItem16 = new StoreItem(
	16,
	"The Seven Year Slip",
	7.99,
	50,
	2,
	"Friction",
	19.9,
	[],
	"Sometimes, the worst day of your life happens, and you have to figure out how to live after it.So Clementine forms a plan to keep her heart safe: work hard, find someone decent to love, and try to remember to chase the moon. The last one is silly and obviously metaphorical, but her aunt always told her that you needed at least one big dream to keep going. And for the last year, that plan has gone off without a hitch. Mostly. The love part is hard because she doesn’t want to get too close to anyone—she isn’t sure her heart can take it.",
	"./imgs/book_images/friction/Seven_year.jpg"
);

let storeItemArray = [];
storeItemArray.push(storeItem1);
storeItemArray.push(storeItem2);
storeItemArray.push(storeItem3);
storeItemArray.push(storeItem4);
storeItemArray.push(storeItem5);
storeItemArray.push(storeItem6);
storeItemArray.push(storeItem7);
storeItemArray.push(storeItem8);
storeItemArray.push(storeItem9);
storeItemArray.push(storeItem10);
storeItemArray.push(storeItem11);
storeItemArray.push(storeItem12);
storeItemArray.push(storeItem13);
storeItemArray.push(storeItem14);
storeItemArray.push(storeItem15);
storeItemArray.push(storeItem16);
//console.log(storeItemArray);

/* Obejct constructor for cart item */
function CartItem(id, price, quantiy, shipping) {
	this.id = id;
	this.price = price;
	this.quantity = quantiy;
	this.shipping = shipping;
}

/* an array to store cartItem */
let cartItem = [];

/* Object constrcutor for revew item */
function ReviewItem(rating, review) {
	this.rating = rating;
	this.review = review;
}
