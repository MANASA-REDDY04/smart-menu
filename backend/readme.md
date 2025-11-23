vendor

POST: {{baseURL}}/vendor/register
{
    "name": "kandadi manasa",
    "email":"kandadimanasa12@gmail.com",
    "password":"manasa@1",
    "stallName":"Trios Stall",
    "location":"Tank Bund"
}
response:
{
    "statusCode": 201,
    "data": {
        "name": "kandadi manasa",
        "email": "kandadimanasa12@gmail.com",
        "password": "$2b$10$sh2H9UtQeesdnMwCPPHNEOPIt/IcESufe0KcvtRJePnE2vm5r4V4y",
        "stallName": "Trios Stall",
        "location": "Tank Bund",
        "resetPasswordOTP": null,
        "resetPasswordOTPExpires": null,
        "resetPasswordVerified": false,
        "categories": [],
        "_id": "69229506d752b55e59189d26",
        "createdAt": "2025-11-23T05:00:54.036Z",
        "updatedAt": "2025-11-23T05:00:54.036Z",
        "__v": 0
    },
    "message": "User registered successfully!",
    "success": true
}
POST: {{baseURL}}/vendor/login
{
    "email":"kandadimanasa03@gmail.com",
    "password":"manasa@1"
}
response:
{
    "statusCode": 200,
    "data": {
        "_id": "691ea507c77a731ea5265433",
        "name": "kandadi manasa",
        "email": "kandadimanasa03@gmail.com",
        "stallName": "Trio Stall",
        "location": "Tank Bund"
    },
    "message": "Login successful",
    "success": true
}
POST: {{baseURL}}/vendor/logout
{
    "statusCode": 200,
    "data": "Logout successful",
    "message": "Success",
    "success": true
}
GET: {{baseURL}}/vendor/profile
{
    "email":"kandadimanasa03@gmail.com",
    "password":"manasa@1"
}

category
GET: {{baseURL}}/category
{
    "statusCode": 200,
    "data": [
        {
            "_id": "691eab926decdc06674ac29d",
            "vendorId": "691ea507c77a731ea5265433",
            "categoryType1": "Non-Veg",
            "categoryType2": "Starter",
            "items": [
                {
                    "_id": "69215179db998017108d2ee3",
                    "vendorId": "691ea507c77a731ea5265433",
                    "categoryId": "691eab926decdc06674ac29d",
                    "itemName": "Chicken tikka",
                    "description": "Tandoori chicken tikka",
                    "price": 250,
                    "isAvailable": false,
                    "createdAt": "2025-11-22T06:00:25.793Z",
                    "updatedAt": "2025-11-22T06:00:56.507Z",
                    "__v": 0
                },
                {
                    "_id": "69228d9d0764d17e659480dd",
                    "vendorId": "691ea507c77a731ea5265433",
                    "categoryId": "691eab926decdc06674ac29d",
                    "itemName": "Chicken meat balls",
                    "description": "hot and tender",
                    "price": 230,
                    "isAvailable": true,
                    "createdAt": "2025-11-23T04:29:17.055Z",
                    "updatedAt": "2025-11-23T04:29:17.055Z",
                    "__v": 0
                }
            ],
            "createdAt": "2025-11-20T05:48:02.728Z",
            "updatedAt": "2025-11-23T04:29:17.059Z",
            "__v": 1
        },
        {
            "_id": "691eabb46decdc06674ac2a3",
            "vendorId": "691ea507c77a731ea5265433",
            "categoryType1": "Non-Veg",
            "categoryType2": "Meals",
            "items": [
                {
                    "_id": "692152eadb998017108d2eff",
                    "vendorId": "691ea507c77a731ea5265433",
                    "categoryId": "691eabb46decdc06674ac2a3",
                    "itemName": "Chicken Biryani",
                    "description": "Hyderabadi chicken dum biryani authentic style",
                    "price": 250,
                    "isAvailable": true,
                    "createdAt": "2025-11-22T06:06:34.987Z",
                    "updatedAt": "2025-11-22T06:06:34.987Z",
                    "__v": 0
                }
            ],
            "createdAt": "2025-11-20T05:48:36.615Z",
            "updatedAt": "2025-11-22T06:06:34.989Z",
            "__v": 0
        },
        {
            "_id": "6921b2522ddc06b7df00fdd5",
            "vendorId": "691ea507c77a731ea5265433",
            "categoryType1": "Non-Veg",
            "categoryType2": "Breakfast",
            "items": [],
            "createdAt": "2025-11-22T12:53:38.920Z",
            "updatedAt": "2025-11-22T12:54:57.847Z",
            "__v": 0
        },
        {
            "_id": "6921b2f12ddc06b7df00fe05",
            "vendorId": "691ea507c77a731ea5265433",
            "categoryType1": "Non-Veg",
            "categoryType2": "Ice Cream",
            "items": [
                {
                    "_id": "6921b30a2ddc06b7df00fe0e",
                    "vendorId": "691ea507c77a731ea5265433",
                    "categoryId": "6921b2f12ddc06b7df00fe05",
                    "itemName": "Death by chocholate",
                    "description": "",
                    "price": 120,
                    "isAvailable": true,
                    "createdAt": "2025-11-22T12:56:42.819Z",
                    "updatedAt": "2025-11-22T12:56:58.113Z",
                    "__v": 0
                }
            ],
            "createdAt": "2025-11-22T12:56:17.033Z",
            "updatedAt": "2025-11-22T12:56:42.821Z",
            "__v": 0
        },
        {
            "_id": "69228a9d12a3e2f4cc2070bb",
            "vendorId": "691ea507c77a731ea5265433",
            "categoryType1": "Non-Veg",
            "categoryType2": "Starter",
            "items": [],
            "createdAt": "2025-11-23T04:16:29.252Z",
            "updatedAt": "2025-11-23T04:16:29.252Z",
            "__v": 0
        }
    ],
    "message": "Categories fetched",
    "success": true
}
DELETE: {{baseURL}}/category/691eab576decdc06674ac299
menu-items
POST: {{baseURL}}/item
{
    "categoryType1":"Non-Veg",
    "categoryType2":"Starter",
    "itemName":"Chicken meat balls",
    "price":"230",
    "description":"hot and tender"
}
{
    "statusCode": 201,
    "data": {
        "category": {
            "_id": "691eab926decdc06674ac29d",
            "vendorId": "691ea507c77a731ea5265433",
            "categoryType1": "Non-Veg",
            "categoryType2": "Starter",
            "items": [
                "691eb2971650c441268fdc7b",
                "69215179db998017108d2ee3",
                "69228d9d0764d17e659480dd",
                "692299ecd752b55e59189d31"
            ],
            "createdAt": "2025-11-20T05:48:02.728Z",
            "updatedAt": "2025-11-23T05:21:48.903Z",
            "__v": 2
        },
        "item": {
            "vendorId": "691ea507c77a731ea5265433",
            "categoryId": "691eab926decdc06674ac29d",
            "itemName": "Chicken meat balls",
            "description": "hot and tender",
            "price": 230,
            "isAvailable": true,
            "_id": "692299ecd752b55e59189d31",
            "createdAt": "2025-11-23T05:21:48.900Z",
            "updatedAt": "2025-11-23T05:21:48.900Z",
            "__v": 0
        }
    },
    "message": "Item added successfully",
    "success": true
}
get category items
GET: {{baseURL}}/item/691eab926decdc06674ac29d
{
    "statusCode": 200,
    "data": [
        {
            "_id": "69215179db998017108d2ee3",
            "vendorId": "691ea507c77a731ea5265433",
            "categoryId": "691eab926decdc06674ac29d",
            "itemName": "Chicken tikka",
            "description": "Tandoori chicken tikka",
            "price": 250,
            "isAvailable": false,
            "createdAt": "2025-11-22T06:00:25.793Z",
            "updatedAt": "2025-11-22T06:00:56.507Z",
            "__v": 0
        },
        {
            "_id": "69228d9d0764d17e659480dd",
            "vendorId": "691ea507c77a731ea5265433",
            "categoryId": "691eab926decdc06674ac29d",
            "itemName": "Chicken meat balls",
            "description": "hot and tender",
            "price": 230,
            "isAvailable": true,
            "createdAt": "2025-11-23T04:29:17.055Z",
            "updatedAt": "2025-11-23T04:29:17.055Z",
            "__v": 0
        },
        {
            "_id": "692299ecd752b55e59189d31",
            "vendorId": "691ea507c77a731ea5265433",
            "categoryId": "691eab926decdc06674ac29d",
            "itemName": "Chicken meat balls",
            "description": "hot and tender",
            "price": 230,
            "isAvailable": true,
            "createdAt": "2025-11-23T05:21:48.900Z",
            "updatedAt": "2025-11-23T05:21:48.900Z",
            "__v": 0
        }
    ],
    "message": "Items fetched",
    "success": true
}
PUT: {{baseURL}}/item/691eb23b1650c441268fdc76
DELETE: {{baseURL}}/item/691eb2d21650c441268fdc80
PATCH: {{baseURL}}/item/691eb23b1650c441268fdc76   => toggle availability
{
    "statusCode": 200,
    "data": {
        "_id": "692152eadb998017108d2eff",
        "vendorId": "691ea507c77a731ea5265433",
        "categoryId": "691eabb46decdc06674ac2a3",
        "itemName": "Chicken Biryani",
        "description": "Hyderabadi chicken dum biryani authentic style",
        "price": 250,
        "isAvailable": false,
        "createdAt": "2025-11-22T06:06:34.987Z",
        "updatedAt": "2025-11-23T05:24:06.088Z",
        "__v": 0
    },
    "message": "Availability toggled",
    "success": true
}
QR:
POST: {{baseURL}}/qr/generate
GET: {{baseURL}}/qr
{
    "statusCode": 200,
    "data": {
        "_id": "691eb648f8b19f7e9dd698b4",
        "vendorId": "691ea507c77a731ea5265433",
        "qrUrl": "data:image/png;base64,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",
        "createdAt": "2025-11-20T06:33:44.476Z",
        "updatedAt": "2025-11-22T12:55:15.234Z",
        "__v": 0
    },
    "message": "QR fetched",
    "success": true
}
Customer Menu:
GET: http://localhost:4000/api/public/menu/691ea507c77a731ea5265433
{
    "statusCode": 200,
    "data": {
        "vendor": {
            "name": "kandadi manasa",
            "stallName": "Trio Stall",
            "location": "Tank Bund",
            "_id": "691ea507c77a731ea5265433"
        },
        "categories": [
            {
                "_id": "691eab926decdc06674ac29d",
                "categoryType1": "Non-Veg",
                "categoryType2": "Starter",
                "items": [
                    {
                        "_id": "69215179db998017108d2ee3",
                        "vendorId": "691ea507c77a731ea5265433",
                        "categoryId": "691eab926decdc06674ac29d",
                        "itemName": "Chicken tikka",
                        "description": "Tandoori chicken tikka",
                        "price": 250,
                        "isAvailable": false,
                        "createdAt": "2025-11-22T06:00:25.793Z",
                        "updatedAt": "2025-11-22T06:00:56.507Z",
                        "__v": 0
                    },
                    {
                        "_id": "69228d9d0764d17e659480dd",
                        "vendorId": "691ea507c77a731ea5265433",
                        "categoryId": "691eab926decdc06674ac29d",
                        "itemName": "Chicken meat balls",
                        "description": "hot and tender",
                        "price": 230,
                        "isAvailable": true,
                        "createdAt": "2025-11-23T04:29:17.055Z",
                        "updatedAt": "2025-11-23T04:29:17.055Z",
                        "__v": 0
                    },
                    {
                        "_id": "692299ecd752b55e59189d31",
                        "vendorId": "691ea507c77a731ea5265433",
                        "categoryId": "691eab926decdc06674ac29d",
                        "itemName": "Chicken meat balls",
                        "description": "hot and tender",
                        "price": 230,
                        "isAvailable": true,
                        "createdAt": "2025-11-23T05:21:48.900Z",
                        "updatedAt": "2025-11-23T05:21:48.900Z",
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "691eabb46decdc06674ac2a3",
                "categoryType1": "Non-Veg",
                "categoryType2": "Meals",
                "items": [
                    {
                        "_id": "692152eadb998017108d2eff",
                        "vendorId": "691ea507c77a731ea5265433",
                        "categoryId": "691eabb46decdc06674ac2a3",
                        "itemName": "Chicken Biryani",
                        "description": "Hyderabadi chicken dum biryani authentic style",
                        "price": 250,
                        "isAvailable": false,
                        "createdAt": "2025-11-22T06:06:34.987Z",
                        "updatedAt": "2025-11-23T05:24:06.088Z",
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "6921b2522ddc06b7df00fdd5",
                "categoryType1": "Non-Veg",
                "categoryType2": "Breakfast",
                "items": []
            },
            {
                "_id": "6921b2f12ddc06b7df00fe05",
                "categoryType1": "Non-Veg",
                "categoryType2": "Ice Cream",
                "items": [
                    {
                        "_id": "6921b30a2ddc06b7df00fe0e",
                        "vendorId": "691ea507c77a731ea5265433",
                        "categoryId": "6921b2f12ddc06b7df00fe05",
                        "itemName": "Death by chocholate",
                        "description": "",
                        "price": 120,
                        "isAvailable": true,
                        "createdAt": "2025-11-22T12:56:42.819Z",
                        "updatedAt": "2025-11-22T12:56:58.113Z",
                        "__v": 0
                    }
                ]
            },
            {
                "_id": "69228a9d12a3e2f4cc2070bb",
                "categoryType1": "Non-Veg",
                "categoryType2": "Starter",
                "items": []
            }
        ]
    }
}

