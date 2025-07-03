# FreeBreathing

A full-stack Books E-commerce App where you can view all books. Users can explore a wide range of topics, request books, add or remove them from favorites and carts, and place orders at zero cost.
Built with React frontend, Express/Node, MongoDB database and JWT-based authentication.

---

## Demo Link

[Live Demo](https://free-breathing-library.vercel.app/)

---


## Quick start

```
git clone https://github.com/KishorLangote/FreeBreathing.git
cd backend
npm install
npm run dev

cd frontend
npm install
npm run dev

```

---

## Technologies
- React JS
- Bootstrap
- React Router
- Node JS
- Express
- MongoDB

---

## Demo Video
[Loom Video]()

---


## Features

**Authentication**
- User signup and login with JWT.
- Protected routes for add to cart, and profile.

**Home**
- Enables users to search books by name or author.
- Showcases a list of recently added books.

**All Books Page**
- Displays all available books in the collection.
- Allows users to filter books by genre for easier browsing.
- Includes pagination to navigate through large sets of books efficiently.

**Book Details Page**
- Displays detailed information about the selected book.
- Allows users to add the book to favorites and cart for easy access and ordering.

**Profile Page**
- Showcases the user’s favorite books with the ability to remove books from favorites.
- Displays the user’s complete order history.y.
- Allows users to request new books not currently available.
- Provides an option to update delivery address.

**Cart Page**
- Displays the user’s cart books, allows removing books from the cart, and enables users to place orders.

---
## API Reference

### **POST /api/v1/sign-up**<br>
Register New User<br>
```
request: 

{
    "username": "admin",
    "email": "admin@gmail.com",
    "password": "admin@1234$$",
    "address": "street 456"
}

response: 

[
  {
    "message": "SignUp Successfully."
  }
]
```

### **POST /api/v1/sign-in**<br>
```
request: 

{
    "email": "rajesh@gmail.com",
    "password": "rajesh123"
}

response:

[
  {
    "id": "67c6772e337bad7f25d01f5a",
    "role": "user",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhamVzaCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzUxNTQxMTQ0LCJleHAiOjE3NTQxMzMxNDR9.bV90ZlU5pQCmI8HTJ8sfC212Qf6PEf3Nu9G8W_IplKE"
  }
]

```
### **PUT /api/v1/update-address**<br>
Get All Books endpoint, include a valid Bearer token in the request's Authorization header for authentication.<br>
Update Address<br>
```
request:

{
    "address":"street 789"
}

response:

[
  {
    "message": "Address updated successfully.",
    "updatedAddress": "street 789"
  }
]

```
### **GET /api/v1/get-user-information**<br>
Get User Information<br>
```
response:

[
  {
    "requests": [
        "67d3da38e73d3d4ce24ad985"
    ],
    "accepetedTerm": false,
    "_id": "67c6772e337bad7f25d01f5a",
    "username": "rajesh",
    "email": "rajesh@gmail.com",
    "address": "Street 987, Green Park Haveli, Near Mahadeo Temple, Pin - 456 125 .",
    "avatar": "https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
    "role": "user",
    "favorites": [
        "67c6e2dd14e7bec6241d8a6b",
        "67ca768d7784dcfb2834015a",
    ],
    "orders": [
        "67cecb037f7660000f321a79",
        "67cecb037f7660000f321a7d",
        
    ],
    "createdAt": "2025-03-04T03:44:46.050Z",
    "updatedAt": "2025-07-03T11:15:24.094Z",
    "__v": 0,
    "cart": [
        "67c6b6e0eff099c12c365c2d",
        "67c6b6caeff099c12c365c2a",
    ]
  }
]

```
### **GET /api/v1/todo/get-recent-books**<br>
Recent Books<br>
```
response:

[ 
  {
            "_id": "67d3da38e73d3d4ce24ad985",
            "title": "Man Nirabra Vhava | मन निरभ्र व्हावं",
            "author": [
                "Dr. A H Salunkhe"
            ],
            "genre": "Social",
            "publishedYear": 2010,
            "publisher": "Lokayat Prakashan",
            "bookType": "hardcopy",
            "price": "80",
            "description": " मानवी समाजानं विकासाचा आजच्या इतका सर्व अंशांनी प्रगत टप्पा गाठलेला नव्हता, तेव्हा माहितीचं प्रमाण कमी होतं. माहितीची देवाण-घेवाण करणारी साधनं कमीही आणि आजच्या तुलनेनं अप्रगतही होती. स्वाभाविकच, माहिती पोचण्याचा वेगही कमी होता. त्याबरोबरच, माहितीची चिकित्सा करण्याच्या बाबतीतही भरपूर अडथळे होते.\n       आज परिस्थिती आरपार बदलली आहे. माणसावर माहितीचा प्रचंड मारा होत आहे. प्रगत साधनांची विपुलता थक्क करणारी आहे. माहिती पोचण्याचा वेग चकित करणारा आहे. पण त्याबरोबरच माहितीची चिकित्सा करण्यासाठी आवश्यक असलेलं वातावरण मोठ्या प्रमाणात अनुकूलही झालं आहे.\n      अशा स्थितीत आपण काय करणार आहोत, हा खरा प्रश्न आहे. *माहितीच्या महापुरात निष्क्रियपणे वहात जाणार आहोत, की आपल्या चिकित्सक बुद्धीच्या जोरावर सक्रियपणे त्या महापुराच्या प्रवाहाला उचित दिशेनं वळवणार आहोत? पूर्वी, छापून आलंय् म्हणजे खरंच असलं पाहिजे असं काही लोक म्हणायचे (अजूनही काही जण तसं म्हणतातच), आता वृत्तवाहिनीवर वा महाजालावर (इंटरनेटवर) आहे मग ते खोटं कसं असेल, असं तर आपण म्हणणार नाही ना?*\n*डॉ आ ह साळुंखे*",
            "pages": 48,
            "language": "Marathi",
            "isbn": ".",
            "totalCopies": 1,
            "availableCopies": 1,
            "condition": "new",
            "section": ".",
            "coverImageUrl": "https://sanaybooks.com/wp-content/uploads/2022/08/man-nirabhra-whave-book-cover-01.jpg",
            "requests": [],
            "createdAt": "2025-03-14T07:26:48.963Z",
            "updatedAt": "2025-03-24T14:23:19.779Z",
            "__v": 0
        }
]

```

### **GET /api/v1/get-all-books**<br>
All Books<br>
```
response: 

[
  {
            "_id": "67d3da38e73d3d4ce24ad985",
            "title": "Man Nirabra Vhava | मन निरभ्र व्हावं",
            "author": [
                "Dr. A H Salunkhe"
            ],
            "genre": "Social",
            "publishedYear": 2010,
            "publisher": "Lokayat Prakashan",
            "bookType": "hardcopy",
            "price": "80",
            "description": " मानवी समाजानं विकासाचा आजच्या इतका सर्व अंशांनी प्रगत टप्पा गाठलेला नव्हता, तेव्हा माहितीचं प्रमाण कमी होतं. माहितीची देवाण-घेवाण करणारी साधनं कमीही आणि आजच्या तुलनेनं अप्रगतही होती. स्वाभाविकच, माहिती पोचण्याचा वेगही कमी होता. त्याबरोबरच, माहितीची चिकित्सा करण्याच्या बाबतीतही भरपूर अडथळे होते. आज परिस्थिती आरपार बदलली आहे. माणसावर माहितीचा प्रचंड मारा होत आहे. प्रगत साधनांची विपुलता थक्क करणारी आहे. माहिती पोचण्याचा वेग चकित करणारा आहे. पण त्याबरोबरच माहितीची चिकित्सा करण्यासाठी आवश्यक असलेलं वातावरण मोठ्या प्रमाणात अनुकूलही झालं आहे. अशा स्थितीत आपण काय करणार आहोत, हा खरा प्रश्न आहे. *माहितीच्या महापुरात निष्क्रियपणे वहात जाणार आहोत, की आपल्या चिकित्सक बुद्धीच्या जोरावर सक्रियपणे त्या महापुराच्या प्रवाहाला उचित दिशेनं वळवणार आहोत? पूर्वी, छापून आलंय् म्हणजे खरंच असलं पाहिजे असं काही लोक म्हणायचे (अजूनही काही जण तसं म्हणतातच), आता वृत्तवाहिनीवर वा महाजालावर (इंटरनेटवर) आहे मग ते खोटं कसं असेल, असं तर आपण म्हणणार नाही ना? डॉ आ ह साळुंखे*",
            "pages": 48,
            "language": "Marathi",
            "isbn": ".",
            "totalCopies": 1,
            "availableCopies": 1,
            "condition": "new",
            "section": ".",
            "coverImageUrl": "https://sanaybooks.com/wp-content/uploads/2022/08/man-nirabhra-whave-book-cover-01.jpg",
            "requests": [],
            "createdAt": "2025-03-14T07:26:48.963Z",
            "updatedAt": "2025-03-24T14:23:19.779Z",
            "__v": 0
        },
        {
            "_id": "67d3d77ae73d3d4ce24ad97c",
            "title": "Chatrapati Shivaji Maharaj Jivan - Rahasya",
            "author": [
                "Narhar Kurundkar | नरहर कुरुंदकर"
            ],
            "genre": "History",
            "publishedYear": 2016,
            "publisher": "देशमुख अ‍ॅन्ड कंपनी पब्लिशर्स",
            "bookType": "hardcopy",
            "price": "60",
            "description": "खानवधात एक प्रश्न नेहमी विचारला जातो ते म्हणजे दगा कोणी दिला? राजांनी की खानाने? समजा खान सुरक्षित परतला असता तर पुढच्या भेटीत शिष्टाचार म्हणुन राजांना खानभेटीस त्याच्या गोटात जाणे भाग पडले असते. प्रतापगडाच्या पायथ्याशी आलेला नव्हे आणलेला खान परत जिवंत जाणे शक्य नव्हते. ती व्यवस्था शिवरायांनी करून ठेवली होती. खानवधापाठोपाठ त्याच्या फौजेवर बांदल - शिळीमकर यांनी हल्ला चढवणे, वाई तळावर नेताजी पालकरने विध्वंस करणे, मोरोपंतांनी पारघाटावर हल्ला करणे आणि पूर्ण ताकदीनिशी शक्य तितक्या लवकर कोल्हापुर प्रांती धडक मारणे एवढा व्यापक दृष्टिकोन आणि नेमके नियोजन ह्यामागे आहे. अनापेक्षित घाव घालून जग थक्क करता येते पण त्या थक्क अवस्थेतून बाहेर येईस्तोवर शिवराय काही स्थिर कामे करत असतात. ते विजयोस्तव साजरे करत बसत नाहीत. खानवधापाठोपाठ कोल्हापुर - पन्हाळा जिंकणे, कुडाळ मारून विजापुर प्रांती धडक मारणे आणि पुढच्या १८ दिवसात १२०००च्या फौजेचा पराभव करून लूट मारणे व ती फौजा दुप्पट करण्यात वापरणे, आणि ह्या सर्वातून आदिलशाही सावरेपर्यंत जास्तीत जास्त प्रदेश जिंकणे, हे सैनिकी कौशल्य. स्थायी यश मिळणार्‍या मोहिमेचा आरंभ म्हणुन अनपेक्षित धक्याला अर्थ असतो पण तो धक्का देऊन थक्क करणे आणि भानावर येण्यापूर्वी स्थिर विजय मिळवणे हा राजकीय वास्तववाद म्हणजे छत्रपति शिवराय",
            "pages": 63,
            "language": "Marathi",
            "isbn": "B07V853LF8",
            "totalCopies": 1,
            "availableCopies": 1,
            "condition": "new",
            "section": ".",
            "coverImageUrl": "https://www.bookganga.com/eBooks/Content/images/books/ddf77cc96f1a4e5794ae5d7f4ee70fbd.jpg",
            "requests": [],
            "createdAt": "2025-03-14T07:15:06.090Z",
            "updatedAt": "2025-03-14T07:15:06.090Z",
            "__v": 0
        }
]
```
### **DELETE /api/v1/delete-book/:bookId**<br>
Delete Book<br>
```
response: 

[
  {
    "message": "Book deleted successfully",
    "book": {
        "_id": "67d111da2d9cc7a3e4a5cc44",
        "title": "ChakavaChandan | चकवाचांदण ",
        "author": [
            "Maruti Chittampalli | मारुती चितमपल्ली"
        ],
        "genre": "Environment",
        "publishedYear": 2016,
        "publisher": "Mouj Prakashan Gruh",
        "bookType": "hardcopy",
        "price": "1000",
        "description": "\"...तुम्ही जेव्हा वर्षानुवर्षं जंगलात राहता, तिथल्या नादब्रह्माशी लय साधता, तेव्हा जंगल म्हणजे नुसतीच झाडं व रानटी जनावरं नाहीत, तर ते त्यापेक्षा काही तरी अधिक आहे असा अनुभव येतो. त्याच्या सजीव अस्तित्वाचा जेव्हा तुम्हांला अनुभव येईल तेव्हाच जंगलाची खरी ओळख पटेल. एखादा अजस्त्र वॄक्ष तुम्हांला वैभवशाली वाटेल; पण तो वनापासून अलिप्त नसतो. माणसाच्या हात, पाय आणि मेंदू यांना तसं स्वतंत्र्य अस्तित्व नसतंच. जेव्हा ते सारं देहाच्या रूपानं पुढं ठाकतं तेव्हा ते सजीव वाटतं. तसंच काही तरी जंगलाचं असावं. सारं जंगलच एक सजीव अस्तित्व आहे. म्हणूनच ते अदभुतरम्य वाटतं...\"",
        "pages": 689,
        "language": "Marathi",
        "isbn": "9788174868206",
        "totalCopies": 1,
        "availableCopies": 1,
        "condition": "new",
        "section": ".",
        "coverImageUrl": "https://akshardhara.com/cdn/shop/products/31509_1.jpg?v=1691651309&width=493",
        "requests": [],
        "createdAt": "2025-03-12T04:47:22.927Z",
        "updatedAt": "2025-03-12T04:47:22.927Z",
        "__v": 0
    }
  }
]

```
### **POST /api/v1/add-book**<br>
Add Book<br>
```
request: 

{
    "title": "The Start-up of You: Adapt, Take Risks, Grow Your Network, and Transform Your Life",
    "author": ["Reid Hoffman", "Ben Casnocha"],
    "genre": "EdTech",
    "publishedYear": 2012,
    "publisher": "Cornerstone Digital",
    "bookType": "hardCopy",
    "price": "990",
    "description": "Co-founder and chairman of LinkedIn, Reid Hoffman, and author Ben Casnocha offer a revolutionary method to accelerate your life and career. The secret is to think like an entrepreneur - to run the 'start-up of you'. Entrepreneurs are nimble. They invest in themselves. They build their networks. They take intelligent risks. They make uncertainty and volatility work to their advantage. These are the very same skills we all need to get ahead. Hoffman and Casnocha show how you can create opportunities where others see dead-ends, and when to take proactive risks where others may seek safety. They reveal how to maintain a competitive advantage so you can stand-out from others. They explain how you can build your network. Above all, they share the insights and strategies you need to succeed in the most important venture of all - your own life.",
    "language": "English",
    "pages": 249,
    "isbn": "B09L5JQWF2",
    "totalCopies": "1",
    "availableCopies": "1",
    "condition": "new",
    "section": "",
    "coverImageUrl": "https://res.cloudinary.com/dzuydzr7l/image/upload/v1741228115/The_Start-up_of_You_aizaqa.jpg"
  }

  response: 

  [
    { message: "Book added successfully" }
  ]
```
### **GET /api/v1/get-order-history**<br>
 Get orders history of Particular User.<br>
```
response: 

[
  {
            "user": "67c6772e337bad7f25d01f5a",
            "book": [
                {
                    "_id": "67d3d77ae73d3d4ce24ad97c",
                    "title": "Chatrapati Shivaji Maharaj Jivan - Rahasya",
                    "author": [
                        "Narhar Kurundkar | नरहर कुरुंदकर"
                    ],
                    "genre": "History",
                    "publishedYear": 2016,
                    "publisher": "देशमुख अ‍ॅन्ड कंपनी पब्लिशर्स",
                    "bookType": "hardcopy",
                    "price": "60",
                    "description": "\"खानवधात एक प्रश्न नेहमी विचारला जातो ते म्हणजे दगा कोणी दिला? राजांनी की खानाने? समजा खान सुरक्षित परतला असता तर पुढच्या भेटीत शिष्टाचार म्हणुन राजांना खानभेटीस त्याच्या गोटात जाणे भाग पडले असते. प्रतापगडाच्या पायथ्याशी आलेला नव्हे आणलेला खान परत जिवंत जाणे शक्य नव्हते. ती व्यवस्था शिवरायांनी करून ठेवली होती. खानवधापाठोपाठ त्याच्या फौजेवर बांदल - शिळीमकर यांनी हल्ला चढवणे, वाई तळावर नेताजी पालकरने विध्वंस करणे, मोरोपंतांनी पारघाटावर हल्ला करणे आणि पूर्ण ताकदीनिशी शक्य तितक्या लवकर कोल्हापुर प्रांती धडक मारणे एवढा व्यापक दृष्टिकोन आणि नेमके नियोजन ह्यामागे आहे. अनापेक्षित घाव घालून जग थक्क करता येते पण त्या थक्क अवस्थेतून बाहेर येईस्तोवर शिवराय काही स्थिर कामे करत असतात. ते विजयोस्तव साजरे करत बसत नाहीत. खानवधापाठोपाठ कोल्हापुर - पन्हाळा जिंकणे, कुडाळ मारून विजापुर प्रांती धडक मारणे आणि पुढच्या १८ दिवसात १२०००च्या फौजेचा पराभव करून लूट मारणे व ती फौजा दुप्पट करण्यात वापरणे, आणि ह्या सर्वातून आदिलशाही सावरेपर्यंत जास्तीत जास्त प्रदेश जिंकणे, हे सैनिकी कौशल्य.\" \"स्थायी यश मिळणार्‍या मोहिमेचा आरंभ म्हणुन अनपेक्षित धक्याला अर्थ असतो पण तो धक्का देऊन थक्क करणे आणि भानावर येण्यापूर्वी स्थिर विजय मिळवणे हा राजकीय वास्तववाद म्हणजे छत्रपति शिवराय\".",
                    "pages": 63,
                    "language": "Marathi",
                    "isbn": "B07V853LF8",
                    "totalCopies": 1,
                    "availableCopies": 1,
                    "condition": "new",
                    "section": ".",
                    "coverImageUrl": "https://www.bookganga.com/eBooks/Content/images/books/ddf77cc96f1a4e5794ae5d7f4ee70fbd.jpg",
                    "requests": [],
                    "createdAt": "2025-03-14T07:15:06.090Z",
                    "updatedAt": "2025-03-14T07:15:06.090Z",
                    "__v": 0
                }
            ],
            "status": "Order Placed",
            "_id": "686683a2cf8728f87f30a621",
            "createdAt": "2025-07-03T13:20:34.474Z",
            "updatedAt": "2025-07-03T13:20:34.474Z",
            "__v": 0
        }
]
```
### **POST /api/v1/place-order**<br>
Place Order<br>
```
request: 

{
    "order": [
        {
            "id": "67c960edc2bec49616c57330"
        },

        {
            "id": "67c962451d69b06fc3f26d26"
        }
        
    ]
}

response: 

[
  {
    "status": "Success",
    "message": "Order Placed Successfully"
  }
]
```
### **GET /api/v1/all-order**<br>
All Orders<br>
```
response: 

[
  {
            "_id": "67cf529ba9d67e05b86abec5",
            "user": null,
            "book": [
                {
                    "requests": [],
                    "_id": "67c960edc2bec49616c57330",
                    "title": "The Start-up of You",
                    "author": [
                        "Reid Hoffman",
                        "Ben Casnocha"
                    ],
                    "genre": "Business",
                    "publishedYear": 2012,
                    "publisher": "Cornerstone Digital",
                    "bookType": "hardCopy",
                    "price": "990",
                    "description": "Co-founder and chairman of LinkedIn, Reid Hoffman, and author Ben Casnocha offer a revolutionary method to accelerate your life and career. The secret is to think like an entrepreneur - to run the 'start-up of you'. Entrepreneurs are nimble. They invest in themselves. They build their networks. They take intelligent risks. They make uncertainty and volatility work to their advantage. These are the very same skills we all need to get ahead. Hoffman and Casnocha show how you can create opportunities where others see dead-ends, and when to take proactive risks where others may seek safety. They reveal how to maintain a competitive advantage so you can stand-out from others. They explain how you can build your network. Above all, they share the insights and strategies you need to succeed in the most important venture of all - your own life.",
                    "pages": 249,
                    "language": "English",
                    "ISBN": "B09L5JQWF2",
                    "totalCopies": 1,
                    "availableCopies": 1,
                    "condition": "new",
                    "coverImageUrl": "https://res.cloudinary.com/dzuydzr7l/image/upload/v1741228115/The_Start-up_of_You_aizaqa.jpg",
                    "createdAt": "2025-03-06T08:46:37.345Z",
                    "updatedAt": "2025-03-06T08:46:37.345Z",
                    "__v": 0,
                    "section": ""
                }
            ],
            "status": "Order Placed",
            "createdAt": "2025-03-10T20:59:07.203Z",
            "updatedAt": "2025-03-10T20:59:07.203Z",
            "__v": 0
        }
]
```
### **PUT /api/v1/update-order-status**<br>
Update Order Status<br>
```
request: 

{
  "status": "Out for delivery"
}

response: 

[
  {
    "success": true,
    "message": "Status Updated Successfully",
    "data": {
        "_id": "67cfba4cb62f1ef40ddcc315",
        "user": "67c6772e337bad7f25d01f5a",
        "book": [
            "67ca81e9058acff20fc7303d"
        ],
        "status": "Out for delivery",
        "createdAt": "2025-03-11T04:21:32.565Z",
        "updatedAt": "2025-07-03T09:45:45.887Z",
        "__v": 0
    }
  }
]
```
### **PUT /api/v1/add-to-cart**<br>
Add Book to Cart<br>
```
request: 

{ 
    "bookId": "67c6b6caeff099c12c365c2a",
    "id": "67c6772e337bad7f25d01f5a"
}

response: 

[
  {
    "status": "Success",
    "message": "Book added to cart"
  }
]
```
### **PUT /api/v1/remove-from-cart/:bookId**<br>
Remove Book From Cart<br>
```
response:

[
  {
    "status": "Success",
    "message": "Book removed from cart"
  }
]
```
### **GET /api/v1/get-user-cart**<br>
Get User Cart<br>
```
response: 

[
  {
    "status": "Success",
    "data": [
        {
            "_id": "67d3d77ae73d3d4ce24ad97c",
            "title": "Chatrapati Shivaji Maharaj Jivan - Rahasya",
            "author": [
                "Narhar Kurundkar | नरहर कुरुंदकर"
            ],
            "genre": "History",
            "publishedYear": 2016,
            "publisher": "देशमुख अ‍ॅन्ड कंपनी पब्लिशर्स",
            "bookType": "hardcopy",
            "price": "60",
            "description": "\"खानवधात एक प्रश्न नेहमी विचारला जातो ते म्हणजे दगा कोणी दिला? राजांनी की खानाने? समजा खान सुरक्षित परतला असता तर पुढच्या भेटीत शिष्टाचार म्हणुन राजांना खानभेटीस त्याच्या गोटात जाणे भाग पडले असते. प्रतापगडाच्या पायथ्याशी आलेला नव्हे आणलेला खान परत जिवंत जाणे शक्य नव्हते. ती व्यवस्था शिवरायांनी करून ठेवली होती. खानवधापाठोपाठ त्याच्या फौजेवर बांदल - शिळीमकर यांनी हल्ला चढवणे, वाई तळावर नेताजी पालकरने विध्वंस करणे, मोरोपंतांनी पारघाटावर हल्ला करणे आणि पूर्ण ताकदीनिशी शक्य तितक्या लवकर कोल्हापुर प्रांती धडक मारणे एवढा व्यापक दृष्टिकोन आणि नेमके नियोजन ह्यामागे आहे. अनापेक्षित घाव घालून जग थक्क करता येते पण त्या थक्क अवस्थेतून बाहेर येईस्तोवर शिवराय काही स्थिर कामे करत असतात. ते विजयोस्तव साजरे करत बसत नाहीत. खानवधापाठोपाठ कोल्हापुर - पन्हाळा जिंकणे, कुडाळ मारून विजापुर प्रांती धडक मारणे आणि पुढच्या १८ दिवसात १२०००च्या फौजेचा पराभव करून लूट मारणे व ती फौजा दुप्पट करण्यात वापरणे, आणि ह्या सर्वातून आदिलशाही सावरेपर्यंत जास्तीत जास्त प्रदेश जिंकणे, हे सैनिकी कौशल्य.\" \"स्थायी यश मिळणार्‍या मोहिमेचा आरंभ म्हणुन अनपेक्षित धक्याला अर्थ असतो पण तो धक्का देऊन थक्क करणे आणि भानावर येण्यापूर्वी स्थिर विजय मिळवणे हा राजकीय वास्तववाद म्हणजे छत्रपति शिवराय\".",
            "pages": 63,
            "language": "Marathi",
            "isbn": "B07V853LF8",
            "totalCopies": 1,
            "availableCopies": 1,
            "condition": "new",
            "section": ".",
            "coverImageUrl": "https://www.bookganga.com/eBooks/Content/images/books/ddf77cc96f1a4e5794ae5d7f4ee70fbd.jpg",
            "requests": [],
            "createdAt": "2025-03-14T07:15:06.090Z",
            "updatedAt": "2025-03-14T07:15:06.090Z",
            "__v": 0
        }
    ]
  }
]
```
### **PUT /api/v1/remove-favorite**<br>
Remove Book From Favorite<br>
```
request: 

{
    "bookId": "67c6b6caeff099c12c365c2a"
}

response: 

[
  {
    "message": "Book removed from favorites"
  }
]
```
### **PUT /api/v1/add-book-to-favorite**<br>
Add Book to Favorite<br>
```
request: 

{
     "bookId": "67c6e2dd14e7bec6241d8a6b",
}

response: 

[
  {
    "message": "Book added to favorites"
  }
]
```
### **GET /api/v1/get-favorite-books**<br>
Get Favorites Books<br>
```
response: 

[
  {
    "status": "Success",
    "data": [
        {
            "_id": "67d3da38e73d3d4ce24ad985",
            "title": "Man Nirabra Vhava | मन निरभ्र व्हावं",
            "author": [
                "Dr. A H Salunkhe"
            ],
            "genre": "Social",
            "publishedYear": 2010,
            "publisher": "Lokayat Prakashan",
            "bookType": "hardcopy",
            "price": "80",
            "description": " मानवी समाजानं विकासाचा आजच्या इतका सर्व अंशांनी प्रगत टप्पा गाठलेला नव्हता, तेव्हा माहितीचं प्रमाण कमी होतं. माहितीची देवाण-घेवाण करणारी साधनं कमीही आणि आजच्या तुलनेनं अप्रगतही होती. स्वाभाविकच, माहिती पोचण्याचा वेगही कमी होता. त्याबरोबरच, माहितीची चिकित्सा करण्याच्या बाबतीतही भरपूर अडथळे होते.\n       आज परिस्थिती आरपार बदलली आहे. माणसावर माहितीचा प्रचंड मारा होत आहे. प्रगत साधनांची विपुलता थक्क करणारी आहे. माहिती पोचण्याचा वेग चकित करणारा आहे. पण त्याबरोबरच माहितीची चिकित्सा करण्यासाठी आवश्यक असलेलं वातावरण मोठ्या प्रमाणात अनुकूलही झालं आहे.\n      अशा स्थितीत आपण काय करणार आहोत, हा खरा प्रश्न आहे. *माहितीच्या महापुरात निष्क्रियपणे वहात जाणार आहोत, की आपल्या चिकित्सक बुद्धीच्या जोरावर सक्रियपणे त्या महापुराच्या प्रवाहाला उचित दिशेनं वळवणार आहोत? पूर्वी, छापून आलंय् म्हणजे खरंच असलं पाहिजे असं काही लोक म्हणायचे (अजूनही काही जण तसं म्हणतातच), आता वृत्तवाहिनीवर वा महाजालावर (इंटरनेटवर) आहे मग ते खोटं कसं असेल, असं तर आपण म्हणणार नाही ना?*\n*डॉ आ ह साळुंखे*",
            "pages": 48,
            "language": "Marathi",
            "isbn": ".",
            "totalCopies": 1,
            "availableCopies": 1,
            "condition": "new",
            "section": ".",
            "coverImageUrl": "https://sanaybooks.com/wp-content/uploads/2022/08/man-nirabhra-whave-book-cover-01.jpg",
            "requests": [],
            "createdAt": "2025-03-14T07:26:48.963Z",
            "updatedAt": "2025-03-24T14:23:19.779Z",
            "__v": 0
        }
    ]
  }
]
```
### **POST /api/v1/request-book**<br>
Request New Book<br>
```
request: 

{
    "userId": "67c6772e337bad7f25d01f5a",
    "title": "test",
    "author": "test",
    "genre": "test",
    "publication": "test",
    "language": "test", 
    "reason": "test"
}

response: 

[
  {
    "message": "Request submitted successfully!"
  }
]

```
---

## Contact
For bugs or feature request, please react out to kishorlangote2@gmail.com

