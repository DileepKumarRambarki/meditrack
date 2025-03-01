import { useEffect, useState } from "react";
import axios from "axios"
import Card from "./Card"
const NearbyHos=(props)=>{
    console.log("near by hos");
    const [location,setLocation]=useState({lat:"",lan:""});
    const [hospitals,setHospitals]=useState([]);
    let data={
        "status": "OK",
        "request_id": "7d5a3b0b-c633-4080-8bf8-61038e46a28d",
        "parameters": {
            "query": "hospitals",
            "language": "en",
            "region": "in",
            "lat": 18.5748202,
            "lng": 83.3522594,
            "limit": 10,
            "extract_emails_and_contacts": true
        },
        "data": [
            {
                "business_id": "0x3a3b9be7da465699:0xf7634b4760637b58",
                "google_id": "0x3a3b9be7da465699:0xf7634b4760637b58",
                "place_id": "ChIJmVZG2uebOzoRWHtjYEdLY_c",
                "google_mid": "/g/11cn94vm9j",
                "phone_number": "+918944255661",
                "name": "Sri Venkateswara Hospital",
                "latitude": 18.5737159,
                "longitude": 83.3464856,
                "full_address": "Sri Venkateswara Hospital, Vizianagaram, SH-36, Bobbili Road, Bobbili, Bobbili, Andhra Pradesh 535558",
                "review_count": 3,
                "rating": 4.7,
                "timezone": "Asia/Calcutta",
                "opening_status": "Open 24 hours",
                "working_hours": {
                    "Thursday": [
                        "Open 24 hours"
                    ],
                    "Friday": [
                        "Open 24 hours"
                    ],
                    "Saturday": [
                        "Open 24 hours"
                    ],
                    "Sunday": [
                        "Open 24 hours"
                    ],
                    "Monday": [
                        "Open 24 hours"
                    ],
                    "Tuesday": [
                        "Open 24 hours"
                    ],
                    "Wednesday": [
                        "Open 24 hours"
                    ]
                },
                "website": null,
                "verified": false,
                "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a3b9be7da465699:0xf7634b4760637b58",
                "cid": "17826174519994448728",
                "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJmVZG2uebOzoRWHtjYEdLY_c&q=hospitals&authuser=0&hl=en&gl=IN",
                "owner_id": "105930809675115986828",
                "owner_link": "https://maps.google.com/maps/contrib/105930809675115986828",
                "owner_name": "Sri Venkateswara Hospital",
                "booking_link": null,
                "reservations_link": null,
                "business_status": "OPEN",
                "type": "Hospital",
                "subtypes": [
                    "Hospital"
                ],
                "photos_sample": [
                    {
                        "photo_id": "Jl7LB5NO9valm4hLURJymQ",
                        "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Jl7LB5NO9valm4hLURJymQ&cb_client=search.gws-prod.gps&w=86&h=86&yaw=260.98795&pitch=0&thumbfov=100",
                        "photo_url_large": null,
                        "video_thumbnail_url": null,
                        "latitude": 18.57376312800987,
                        "longitude": 83.34679974296525,
                        "type": "street_view",
                        "photo_datetime_utc": "2022-08-25T00:00:00.000Z",
                        "photo_timestamp": 1661385600
                    }
                ],
                "reviews_per_rating": {
                    "1": 0,
                    "2": 0,
                    "3": 0,
                    "4": 1,
                    "5": 2
                },
                "photo_count": 1,
                "about": {
                    "summary": null,
                    "details": {
                        "Accessibility": {
                            "Wheelchair-accessible car park": true,
                            "Wheelchair-accessible entrance": true
                        }
                    }
                },
                "address": "Vizianagaram, SH-36, Bobbili Road, Bobbili, Bobbili, Andhra Pradesh 535558",
                "order_link": null,
                "price_level": null,
                "district": "Old City",
                "street_address": "Vizianagaram, SH-36, Bobbili Road, Bobbili",
                "city": "Bobbili",
                "zipcode": "535558",
                "state": "Andhra Pradesh",
                "country": "IN",
                "emails_and_contacts": {
                    "emails": [],
                    "phone_numbers": [],
                    "facebook": null,
                    "instagram": null,
                    "yelp": null,
                    "tiktok": null,
                    "snapchat": null,
                    "twitter": null,
                    "linkedin": null,
                    "github": null,
                    "youtube": null,
                    "pinterest": null
                }
            },
            {
                "business_id": "0x3a3b9b74793dc0b1:0xdd6e4006b1272374",
                "google_id": "0x3a3b9b74793dc0b1:0xdd6e4006b1272374",
                "place_id": "ChIJscA9eXSbOzoRdCMnsQZAbt0",
                "google_mid": "/g/11shtg6x96",
                "phone_number": "+918944255411",
                "name": "Queens NRI Hospital",
                "latitude": 18.5734785,
                "longitude": 83.3470313,
                "full_address": "Queens NRI Hospital, Old City Of Bobbili, Old City, Bobbili, Andhra Pradesh 535558",
                "review_count": 14,
                "rating": 3.7,
                "timezone": "Asia/Calcutta",
                "opening_status": "Open 24 hours",
                "working_hours": {
                    "Thursday": [
                        "Open 24 hours"
                    ],
                    "Friday": [
                        "Open 24 hours"
                    ],
                    "Saturday": [
                        "Open 24 hours"
                    ],
                    "Sunday": [
                        "Open 24 hours"
                    ],
                    "Monday": [
                        "Open 24 hours"
                    ],
                    "Tuesday": [
                        "Open 24 hours"
                    ],
                    "Wednesday": [
                        "Open 24 hours"
                    ]
                },
                "website": null,
                "verified": true,
                "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a3b9b74793dc0b1:0xdd6e4006b1272374",
                "cid": "15955760927306359668",
                "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJscA9eXSbOzoRdCMnsQZAbt0&q=hospitals&authuser=0&hl=en&gl=IN",
                "owner_id": "114645290549595694617",
                "owner_link": "https://maps.google.com/maps/contrib/114645290549595694617",
                "owner_name": "Queens NRI Hospital",
                "booking_link": null,
                "reservations_link": null,
                "business_status": "OPEN",
                "type": "Hospital",
                "subtypes": [
                    "Hospital"
                ],
                "photos_sample": [
                    {
                        "photo_id": "AF1QipO6pSXVn67m7c2p3CdBYl-CmGyyVCo8m4aAWuQ6",
                        "photo_url": "https://lh5.googleusercontent.com/p/AF1QipO6pSXVn67m7c2p3CdBYl-CmGyyVCo8m4aAWuQ6",
                        "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipO6pSXVn67m7c2p3CdBYl-CmGyyVCo8m4aAWuQ6=w4624-h3468-k-no",
                        "video_thumbnail_url": null,
                        "latitude": 18.573478523632428,
                        "longitude": 83.34703127620021,
                        "type": "photo",
                        "photo_datetime_utc": "2023-05-06T00:00:00.000Z",
                        "photo_timestamp": 1683331200
                    }
                ],
                "reviews_per_rating": {
                    "1": 3,
                    "2": 0,
                    "3": 1,
                    "4": 4,
                    "5": 6
                },
                "photo_count": 28,
                "about": {
                    "summary": null,
                    "details": {
                        "Accessibility": {
                            "Wheelchair-accessible car park": true,
                            "Wheelchair-accessible entrance": true
                        }
                    }
                },
                "address": "Old City Of Bobbili, Old City, Bobbili, Andhra Pradesh 535558",
                "order_link": null,
                "price_level": null,
                "district": "Old City Of Bobbili, Old City",
                "street_address": null,
                "city": "Bobbili",
                "zipcode": "535558",
                "state": "Andhra Pradesh",
                "country": "IN",
                "emails_and_contacts": {
                    "emails": [],
                    "phone_numbers": [],
                    "facebook": null,
                    "instagram": null,
                    "yelp": null,
                    "tiktok": null,
                    "snapchat": null,
                    "twitter": null,
                    "linkedin": null,
                    "github": null,
                    "youtube": null,
                    "pinterest": null
                }
            },
            {
                "business_id": "0x3a3b9be8027e70c7:0x9b1f635f4f3e6f9",
                "google_id": "0x3a3b9be8027e70c7:0x9b1f635f4f3e6f9",
                "place_id": "ChIJx3B-AuibOzoR-ebz9DX2sQk",
                "google_mid": "/g/119ww_y_g",
                "phone_number": "+918944295075",
                "name": "Gopinath Hospital",
                "latitude": 18.5712618,
                "longitude": 83.3474782,
                "full_address": "H8CW+GX5 Gopinath Hospital, Bazaar Rd, Naidu Colony, Bobbili, Andhra Pradesh 535558",
                "review_count": 45,
                "rating": 3.6,
                "timezone": "Asia/Calcutta",
                "opening_status": "Open ⋅ Closes 8 pm",
                "working_hours": {
                    "Thursday": [
                        "10 am–8 pm"
                    ],
                    "Friday": [
                        "10 am–8 pm"
                    ],
                    "Saturday": [
                        "10 am–8 pm"
                    ],
                    "Sunday": [
                        "10 am–8 pm"
                    ],
                    "Monday": [
                        "10 am–8 pm"
                    ],
                    "Tuesday": [
                        "10 am–8 pm"
                    ],
                    "Wednesday": [
                        "10 am–8 pm"
                    ]
                },
                "website": null,
                "verified": false,
                "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a3b9be8027e70c7:0x9b1f635f4f3e6f9",
                "cid": "698610128822462201",
                "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJx3B-AuibOzoR-ebz9DX2sQk&q=hospitals&authuser=0&hl=en&gl=IN",
                "owner_id": "111813328298122712148",
                "owner_link": "https://maps.google.com/maps/contrib/111813328298122712148",
                "owner_name": "Gopinath Hospital",
                "booking_link": null,
                "reservations_link": null,
                "business_status": "OPEN",
                "type": "Hospital",
                "subtypes": [
                    "Hospital"
                ],
                "photos_sample": [
                    {
                        "photo_id": "AF1QipP43aBy2y5oP_bnTBO859HG_XlWryLNkvRogfsP",
                        "photo_url": "https://lh5.googleusercontent.com/p/AF1QipP43aBy2y5oP_bnTBO859HG_XlWryLNkvRogfsP",
                        "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipP43aBy2y5oP_bnTBO859HG_XlWryLNkvRogfsP=w4160-h2340-k-no",
                        "video_thumbnail_url": null,
                        "latitude": 18.571261803790797,
                        "longitude": 83.3474781925156,
                        "type": "photo",
                        "photo_datetime_utc": "2017-08-04T00:00:00.000Z",
                        "photo_timestamp": 1501804800
                    }
                ],
                "reviews_per_rating": {
                    "1": 8,
                    "2": 2,
                    "3": 7,
                    "4": 12,
                    "5": 16
                },
                "photo_count": 23,
                "about": {
                    "summary": null,
                    "details": {
                        "Accessibility": {
                            "Wheelchair-accessible car park": true,
                            "Wheelchair-accessible entrance": true
                        }
                    }
                },
                "address": "H8CW+GX5, Bazaar Rd, Naidu Colony, Bobbili, Andhra Pradesh 535558",
                "order_link": null,
                "price_level": null,
                "district": "Naidu Colony",
                "street_address": "H8CW+GX5, Bazaar Rd",
                "city": "Bobbili",
                "zipcode": "535558",
                "state": "Andhra Pradesh",
                "country": "IN",
                "emails_and_contacts": {
                    "emails": [],
                    "phone_numbers": [],
                    "facebook": null,
                    "instagram": null,
                    "yelp": null,
                    "tiktok": null,
                    "snapchat": null,
                    "twitter": null,
                    "linkedin": null,
                    "github": null,
                    "youtube": null,
                    "pinterest": null
                }
            },
            {
                "business_id": "0x3a3b9bea3716bceb:0xb9dd720e98dc14ca",
                "google_id": "0x3a3b9bea3716bceb:0xb9dd720e98dc14ca",
                "place_id": "ChIJ67wWN-qbOzoRyhTcmA5y3bk",
                "google_mid": "/g/11c1xgp5tz",
                "phone_number": "+918008937637",
                "name": "Sai Sankara Hospital",
                "latitude": 18.5740347,
                "longitude": 83.3534397,
                "full_address": "Sai Sankara Hospital, Cheepurupalli street, Old City Of Bobbili, Old City, Bobbili, Andhra Pradesh 535558",
                "review_count": 13,
                "rating": 4.2,
                "timezone": "Asia/Calcutta",
                "opening_status": "Open ⋅ Closes 8 pm",
                "working_hours": {
                    "Thursday": [
                        "8 am–8 pm"
                    ],
                    "Friday": [
                        "8 am–8 pm"
                    ],
                    "Saturday": [
                        "8 am–8 pm"
                    ],
                    "Sunday": [
                        "8 am–12 pm"
                    ],
                    "Monday": [
                        "8 am–8 pm"
                    ],
                    "Tuesday": [
                        "8 am–8 pm"
                    ],
                    "Wednesday": [
                        "8 am–8 pm"
                    ]
                },
                "website": null,
                "verified": true,
                "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a3b9bea3716bceb:0xb9dd720e98dc14ca",
                "cid": "13392986273889391818",
                "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ67wWN-qbOzoRyhTcmA5y3bk&q=hospitals&authuser=0&hl=en&gl=IN",
                "owner_id": "117449543992743846690",
                "owner_link": "https://maps.google.com/maps/contrib/117449543992743846690",
                "owner_name": "Sai Sankara Hospital",
                "booking_link": null,
                "reservations_link": null,
                "business_status": "OPEN",
                "type": "Hospital",
                "subtypes": [
                    "Hospital"
                ],
                "photos_sample": [
                    {
                        "photo_id": "DtwiQsJK70N4iHyasDS7GA",
                        "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=DtwiQsJK70N4iHyasDS7GA&cb_client=search.gws-prod.gps&w=86&h=86&yaw=203.50409&pitch=0&thumbfov=100",
                        "photo_url_large": null,
                        "video_thumbnail_url": null,
                        "latitude": 18.57419422440048,
                        "longitude": 83.35351288896621,
                        "type": "street_view",
                        "photo_datetime_utc": "2022-09-13T00:00:00.000Z",
                        "photo_timestamp": 1663027200
                    },
                    {
                        "photo_id": "AF1QipP9NaOurpA1Y4y_mB4O7BhCYNxZu02xAvHwiqFm",
                        "photo_url": "https://lh5.googleusercontent.com/p/AF1QipP9NaOurpA1Y4y_mB4O7BhCYNxZu02xAvHwiqFm",
                        "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipP9NaOurpA1Y4y_mB4O7BhCYNxZu02xAvHwiqFm=w4000-h3000-k-no",
                        "video_thumbnail_url": null,
                        "latitude": 18.5741901,
                        "longitude": 83.3535216,
                        "type": "photo",
                        "photo_datetime_utc": "2023-11-03T00:00:00.000Z",
                        "photo_timestamp": 1698969600
                    }
                ],
                "reviews_per_rating": {
                    "1": 1,
                    "2": 0,
                    "3": 2,
                    "4": 3,
                    "5": 7
                },
                "photo_count": 4,
                "about": {
                    "summary": null,
                    "details": {
                        "Accessibility": {
                            "Wheelchair-accessible car park": true,
                            "Wheelchair-accessible entrance": true
                        }
                    }
                },
                "address": "Cheepurupalli street, Old City Of Bobbili, Old City, Bobbili, Andhra Pradesh 535558",
                "order_link": null,
                "price_level": null,
                "district": "Old City Of Bobbili, Old City",
                "street_address": "Cheepurupalli street",
                "city": "Bobbili",
                "zipcode": "535558",
                "state": "Andhra Pradesh",
                "country": "IN",
                "emails_and_contacts": {
                    "emails": [],
                    "phone_numbers": [],
                    "facebook": null,
                    "instagram": null,
                    "yelp": null,
                    "tiktok": null,
                    "snapchat": null,
                    "twitter": null,
                    "linkedin": null,
                    "github": null,
                    "youtube": null,
                    "pinterest": null
                }
            },
            {
                "business_id": "0x3a3b9bc0e7d01639:0x7ef3568c90fba8f3",
                "google_id": "0x3a3b9bc0e7d01639:0x7ef3568c90fba8f3",
                "place_id": "ChIJORbQ58CbOzoR86j7kIxW834",
                "google_mid": "/g/11h96v9py8",
                "phone_number": "+917036891246",
                "name": "Bharathi Hospital",
                "latitude": 18.5714476,
                "longitude": 83.3455735,
                "full_address": "H8CW+H6G Bharathi Hospital, Naidu Colony, Bobbili, Andhra Pradesh 535558",
                "review_count": 9,
                "rating": 4.4,
                "timezone": "Asia/Calcutta",
                "opening_status": "Open ⋅ Closes 8 pm",
                "working_hours": {
                    "Thursday": [
                        "12 am–8 pm"
                    ],
                    "Friday": [
                        "12 am–8 pm"
                    ],
                    "Saturday": [
                        "12 am–8 pm"
                    ],
                    "Sunday": [
                        "9 am–5 pm"
                    ],
                    "Monday": [
                        "9 am–5 pm"
                    ],
                    "Tuesday": [
                        "12 am–8 pm"
                    ],
                    "Wednesday": [
                        "12 am–8 pm"
                    ]
                },
                "website": null,
                "verified": false,
                "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a3b9bc0e7d01639:0x7ef3568c90fba8f3",
                "cid": "9147750429847431411",
                "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJORbQ58CbOzoR86j7kIxW834&q=hospitals&authuser=0&hl=en&gl=IN",
                "owner_id": "117318992478274664267",
                "owner_link": "https://maps.google.com/maps/contrib/117318992478274664267",
                "owner_name": "Bharathi Hospital",
                "booking_link": null,
                "reservations_link": null,
                "business_status": "OPEN",
                "type": "Hospital",
                "subtypes": [
                    "Hospital"
                ],
                "photos_sample": [
                    {
                        "photo_id": "AF1QipMXWDD1oHUPH8B7O7fKIOQOaTFOt3N0Ui7lSNQh",
                        "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMXWDD1oHUPH8B7O7fKIOQOaTFOt3N0Ui7lSNQh",
                        "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMXWDD1oHUPH8B7O7fKIOQOaTFOt3N0Ui7lSNQh=w3024-h4032-k-no",
                        "video_thumbnail_url": null,
                        "latitude": 18.571487299999998,
                        "longitude": 83.3455097,
                        "type": "photo",
                        "photo_datetime_utc": "2023-05-17T00:00:00.000Z",
                        "photo_timestamp": 1684281600
                    }
                ],
                "reviews_per_rating": {
                    "1": 1,
                    "2": 0,
                    "3": 0,
                    "4": 1,
                    "5": 7
                },
                "photo_count": 9,
                "about": {
                    "summary": null,
                    "details": {
                        "Accessibility": {
                            "Wheelchair-accessible car park": true,
                            "Wheelchair-accessible entrance": true
                        }
                    }
                },
                "address": "H8CW+H6G, Naidu Colony, Bobbili, Andhra Pradesh 535558",
                "order_link": null,
                "price_level": null,
                "district": "Naidu Colony",
                "street_address": "H8CW+H6G",
                "city": "Bobbili",
                "zipcode": "535558",
                "state": "Andhra Pradesh",
                "country": "IN",
                "emails_and_contacts": {
                    "emails": [],
                    "phone_numbers": [],
                    "facebook": null,
                    "instagram": null,
                    "yelp": null,
                    "tiktok": null,
                    "snapchat": null,
                    "twitter": null,
                    "linkedin": null,
                    "github": null,
                    "youtube": null,
                    "pinterest": null
                }
            },
            {
                "business_id": "0x3a3b9be944ca816d:0xc71e511a1370ca34",
                "google_id": "0x3a3b9be944ca816d:0xc71e511a1370ca34",
                "place_id": "ChIJbYHKROmbOzoRNMpwExpRHsc",
                "google_mid": "/g/11c4bfry8n",
                "phone_number": null,
                "name": "GOVT Hospital, BOBBILI",
                "latitude": 18.5768941,
                "longitude": 83.35037249999999,
                "full_address": "H9G2+Q45 GOVT Hospital, BOBBILI, Old, Old City Of Bobbili, Old City, Bobbili, Andhra Pradesh 535558",
                "review_count": 24,
                "rating": 2.8,
                "timezone": "Asia/Calcutta",
                "opening_status": "Open 24 hours",
                "working_hours": {
                    "Thursday": [
                        "Open 24 hours"
                    ],
                    "Friday": [
                        "Open 24 hours"
                    ],
                    "Saturday": [
                        "Open 24 hours"
                    ],
                    "Sunday": [
                        "Open 24 hours"
                    ],
                    "Monday": [
                        "Open 24 hours"
                    ],
                    "Tuesday": [
                        "Open 24 hours"
                    ],
                    "Wednesday": [
                        "Open 24 hours"
                    ]
                },
                "website": null,
                "verified": false,
                "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a3b9be944ca816d:0xc71e511a1370ca34",
                "cid": "14347994635286137396",
                "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJbYHKROmbOzoRNMpwExpRHsc&q=hospitals&authuser=0&hl=en&gl=IN",
                "owner_id": "101927488449159673572",
                "owner_link": "https://maps.google.com/maps/contrib/101927488449159673572",
                "owner_name": "GOVT Hospital, BOBBILI",
                "booking_link": null,
                "reservations_link": null,
                "business_status": "OPEN",
                "type": "Hospital",
                "subtypes": [
                    "Hospital"
                ],
                "photos_sample": [
                    {
                        "photo_id": "AF1QipN-Bpqz5ap9ZT0fCKwNbG7zKYc_Jt6sf7425z_v",
                        "photo_url": "https://lh5.googleusercontent.com/p/AF1QipN-Bpqz5ap9ZT0fCKwNbG7zKYc_Jt6sf7425z_v",
                        "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipN-Bpqz5ap9ZT0fCKwNbG7zKYc_Jt6sf7425z_v=w4080-h2296-k-no",
                        "video_thumbnail_url": null,
                        "latitude": 18.576895621205317,
                        "longitude": 83.35047326702119,
                        "type": "photo",
                        "photo_datetime_utc": "2023-05-27T00:00:00.000Z",
                        "photo_timestamp": 1685145600
                    }
                ],
                "reviews_per_rating": {
                    "1": 8,
                    "2": 2,
                    "3": 4,
                    "4": 7,
                    "5": 3
                },
                "photo_count": 11,
                "about": {
                    "summary": null,
                    "details": {
                        "Accessibility": {
                            "Wheelchair-accessible car park": true,
                            "Wheelchair-accessible entrance": true
                        }
                    }
                },
                "address": "H9G2+Q45, Old, Old City Of Bobbili, Old City, Bobbili, Andhra Pradesh 535558",
                "order_link": null,
                "price_level": null,
                "district": "Old City Of Bobbili, Old City",
                "street_address": "H9G2+Q45, Old",
                "city": "Bobbili",
                "zipcode": "535558",
                "state": "Andhra Pradesh",
                "country": "IN",
                "emails_and_contacts": {
                    "emails": [],
                    "phone_numbers": [],
                    "facebook": null,
                    "instagram": null,
                    "yelp": null,
                    "tiktok": null,
                    "snapchat": null,
                    "twitter": null,
                    "linkedin": null,
                    "github": null,
                    "youtube": null,
                    "pinterest": null
                }
            },
            {
                "business_id": "0x3a3b9b5ffdbf7da3:0x4ebc059c3e075d8c",
                "google_id": "0x3a3b9b5ffdbf7da3:0x4ebc059c3e075d8c",
                "place_id": "ChIJo32__V-bOzoRjF0HPpwFvE4",
                "google_mid": "/g/11v03y7yw2",
                "phone_number": "+919347569038",
                "name": "Sri Sadasiva Speciality Hospital",
                "latitude": 18.5763261,
                "longitude": 83.3476201,
                "full_address": "Sri Sadasiva Speciality Hospital, Railway Station Rd, Old City, Bobbili, Andhra Pradesh 535558",
                "review_count": 8,
                "rating": 4.9,
                "timezone": "Asia/Calcutta",
                "opening_status": "Open ⋅ Closes 9 pm",
                "working_hours": {
                    "Thursday": [
                        "8 am–9 pm"
                    ],
                    "Friday": [
                        "8 am–9 pm"
                    ],
                    "Saturday": [
                        "8 am–9 pm"
                    ],
                    "Sunday": [
                        "8 am–2 pm"
                    ],
                    "Monday": [
                        "8 am–9 pm"
                    ],
                    "Tuesday": [
                        "8 am–9 pm"
                    ],
                    "Wednesday": [
                        "8 am–9 pm"
                    ]
                },
                "website": null,
                "verified": true,
                "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a3b9b5ffdbf7da3:0x4ebc059c3e075d8c",
                "cid": "5673415799193689484",
                "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJo32__V-bOzoRjF0HPpwFvE4&q=hospitals&authuser=0&hl=en&gl=IN",
                "owner_id": "112188161167866223850",
                "owner_link": "https://maps.google.com/maps/contrib/112188161167866223850",
                "owner_name": "Sri Sadasiva Speciality Hospital",
                "booking_link": null,
                "reservations_link": null,
                "business_status": "OPEN",
                "type": "Medical clinic",
                "subtypes": [
                    "Medical clinic"
                ],
                "photos_sample": [
                    {
                        "photo_id": "AF1QipMvqA_VY2dWxYoxyYuSzdV-wrvmt5p_VHQiOQyp",
                        "photo_url": "https://lh5.googleusercontent.com/p/AF1QipMvqA_VY2dWxYoxyYuSzdV-wrvmt5p_VHQiOQyp",
                        "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipMvqA_VY2dWxYoxyYuSzdV-wrvmt5p_VHQiOQyp=w3072-h4096-k-no",
                        "video_thumbnail_url": null,
                        "latitude": 18.576307399999997,
                        "longitude": 83.3476208,
                        "type": "photo",
                        "photo_datetime_utc": "2023-08-15T00:00:00.000Z",
                        "photo_timestamp": 1692057600
                    }
                ],
                "reviews_per_rating": {
                    "1": 0,
                    "2": 0,
                    "3": 0,
                    "4": 1,
                    "5": 7
                },
                "photo_count": 3,
                "about": {
                    "summary": null,
                    "details": {
                        "Accessibility": {
                            "Wheelchair-accessible entrance": true
                        },
                        "Amenities": {
                            "Toilets": true
                        }
                    }
                },
                "address": "Railway Station Rd, Old City, Bobbili, Andhra Pradesh 535558",
                "order_link": null,
                "price_level": null,
                "district": "Old City",
                "street_address": "Railway Station Rd",
                "city": "Bobbili",
                "zipcode": "535558",
                "state": "Andhra Pradesh",
                "country": "IN",
                "emails_and_contacts": {
                    "emails": [],
                    "phone_numbers": [],
                    "facebook": null,
                    "instagram": null,
                    "yelp": null,
                    "tiktok": null,
                    "snapchat": null,
                    "twitter": null,
                    "linkedin": null,
                    "github": null,
                    "youtube": null,
                    "pinterest": null
                }
            },
            {
                "business_id": "0x3a3b9b7914cf9abb:0x51e44a595413867b",
                "google_id": "0x3a3b9b7914cf9abb:0x51e44a595413867b",
                "place_id": "ChIJu5rPFHmbOzoRe4YTVFlK5FE",
                "google_mid": "/g/11vcm_ywrb",
                "phone_number": "+918944357318",
                "name": "NAARAYANI HEART CENTRE",
                "latitude": 18.5730701,
                "longitude": 83.3550509,
                "full_address": "NAARAYANI HEART CENTRE, Cheepurupalli street, near state bank, beside Ambedkar statue, State Bank, Maharanipeta, Bobbili, Andhra Pradesh 535558",
                "review_count": 18,
                "rating": 4.8,
                "timezone": "Asia/Calcutta",
                "opening_status": "Open 24 hours",
                "working_hours": {
                    "Thursday": [
                        "Open 24 hours"
                    ],
                    "Friday": [
                        "Open 24 hours"
                    ],
                    "Saturday": [
                        "Open 24 hours"
                    ],
                    "Sunday": [
                        "Open 24 hours"
                    ],
                    "Monday": [
                        "Open 24 hours"
                    ],
                    "Tuesday": [
                        "Open 24 hours"
                    ],
                    "Wednesday": [
                        "Open 24 hours"
                    ]
                },
                "website": null,
                "verified": true,
                "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a3b9b7914cf9abb:0x51e44a595413867b",
                "cid": "5900923159285302907",
                "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJu5rPFHmbOzoRe4YTVFlK5FE&q=hospitals&authuser=0&hl=en&gl=IN",
                "owner_id": "112802896173823849383",
                "owner_link": "https://maps.google.com/maps/contrib/112802896173823849383",
                "owner_name": "NAARAYANI HEART CENTRE",
                "booking_link": null,
                "reservations_link": null,
                "business_status": "OPEN",
                "type": "Hospital",
                "subtypes": [
                    "Hospital"
                ],
                "photos_sample": [
                    {
                        "photo_id": "AF1QipON2MVUtnv3kspt0Gj2nQPTb2FRJ3lFeKVSo8j4",
                        "photo_url": "https://lh5.googleusercontent.com/p/AF1QipON2MVUtnv3kspt0Gj2nQPTb2FRJ3lFeKVSo8j4",
                        "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipON2MVUtnv3kspt0Gj2nQPTb2FRJ3lFeKVSo8j4=w2273-h1518-k-no",
                        "video_thumbnail_url": null,
                        "latitude": 18.5729683,
                        "longitude": 83.3550276,
                        "type": "photo",
                        "photo_datetime_utc": "2023-09-22T00:00:00.000Z",
                        "photo_timestamp": 1695340800
                    },
                    {
                        "photo_id": "2KZZqcuXZHqXkfjacSNVfQ",
                        "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=2KZZqcuXZHqXkfjacSNVfQ&cb_client=search.gws-prod.gps&w=80&h=92&yaw=10.9877&pitch=0&thumbfov=100",
                        "photo_url_large": null,
                        "video_thumbnail_url": null,
                        "latitude": 18.572967841820603,
                        "longitude": 83.35502995495388,
                        "type": "street_view",
                        "photo_datetime_utc": "2022-09-13T00:00:00.000Z",
                        "photo_timestamp": 1663027200
                    }
                ],
                "reviews_per_rating": {
                    "1": 1,
                    "2": 0,
                    "3": 0,
                    "4": 0,
                    "5": 17
                },
                "photo_count": 9,
                "about": null,
                "address": "Cheepurupalli street, near state bank, beside Ambedkar statue, State Bank, Maharanipeta, Bobbili, Andhra Pradesh 535558",
                "order_link": null,
                "price_level": null,
                "district": "State Bank, Maharanipeta",
                "street_address": "Cheepurupalli street, near state bank, beside Ambedkar statue",
                "city": "Bobbili",
                "zipcode": "535558",
                "state": "Andhra Pradesh",
                "country": "IN",
                "emails_and_contacts": {
                    "emails": [],
                    "phone_numbers": [],
                    "facebook": null,
                    "instagram": null,
                    "yelp": null,
                    "tiktok": null,
                    "snapchat": null,
                    "twitter": null,
                    "linkedin": null,
                    "github": null,
                    "youtube": null,
                    "pinterest": null
                }
            },
            {
                "business_id": "0x3a3b9be7f4491503:0x3521b1f896101f07",
                "google_id": "0x3a3b9be7f4491503:0x3521b1f896101f07",
                "place_id": "ChIJAxVJ9OebOzoRBx8QlvixITU",
                "google_mid": "/g/11f1f7vm5z",
                "phone_number": null,
                "name": "Chaithanya Medical Center",
                "latitude": 18.571794699999998,
                "longitude": 83.3457889,
                "full_address": "H8CW+P87 Chaithanya Medical Center, Naidu Colony, Bobbili, Andhra Pradesh 535558",
                "review_count": 16,
                "rating": 2.1,
                "timezone": "Asia/Calcutta",
                "opening_status": "Open 24 hours",
                "working_hours": {
                    "Thursday": [
                        "Open 24 hours"
                    ],
                    "Friday": [
                        "Open 24 hours"
                    ],
                    "Saturday": [
                        "Open 24 hours"
                    ],
                    "Sunday": [
                        "Open 24 hours"
                    ],
                    "Monday": [
                        "Open 24 hours"
                    ],
                    "Tuesday": [
                        "Open 24 hours"
                    ],
                    "Wednesday": [
                        "Open 24 hours"
                    ]
                },
                "website": null,
                "verified": false,
                "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a3b9be7f4491503:0x3521b1f896101f07",
                "cid": "3828536839469276935",
                "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJAxVJ9OebOzoRBx8QlvixITU&q=hospitals&authuser=0&hl=en&gl=IN",
                "owner_id": "103783491856989461164",
                "owner_link": "https://maps.google.com/maps/contrib/103783491856989461164",
                "owner_name": "Chaithanya Medical Center",
                "booking_link": null,
                "reservations_link": null,
                "business_status": "OPEN",
                "type": "Private hospital",
                "subtypes": [
                    "Private hospital"
                ],
                "photos_sample": [
                    {
                        "photo_id": "_PYY1Nc18qQnm1EpJolCUw",
                        "photo_url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_PYY1Nc18qQnm1EpJolCUw&cb_client=search.gws-prod.gps&w=86&h=86&yaw=133.29663&pitch=0&thumbfov=100",
                        "photo_url_large": null,
                        "video_thumbnail_url": null,
                        "latitude": 18.57183690765386,
                        "longitude": 83.34574164420542,
                        "type": "street_view",
                        "photo_datetime_utc": "2022-09-13T00:00:00.000Z",
                        "photo_timestamp": 1663027200
                    }
                ],
                "reviews_per_rating": {
                    "1": 10,
                    "2": 1,
                    "3": 1,
                    "4": 2,
                    "5": 2
                },
                "photo_count": 1,
                "about": {
                    "summary": null,
                    "details": {
                        "Accessibility": {
                            "Wheelchair-accessible car park": true,
                            "Wheelchair-accessible entrance": true
                        }
                    }
                },
                "address": "H8CW+P87, Naidu Colony, Bobbili, Andhra Pradesh 535558",
                "order_link": null,
                "price_level": null,
                "district": "Naidu Colony",
                "street_address": "H8CW+P87",
                "city": "Bobbili",
                "zipcode": "535558",
                "state": "Andhra Pradesh",
                "country": "IN",
                "emails_and_contacts": {
                    "emails": [],
                    "phone_numbers": [],
                    "facebook": null,
                    "instagram": null,
                    "yelp": null,
                    "tiktok": null,
                    "snapchat": null,
                    "twitter": null,
                    "linkedin": null,
                    "github": null,
                    "youtube": null,
                    "pinterest": null
                }
            },
            {
                "business_id": "0x3a3b9b0a43c34977:0x2edf75eda29b72e4",
                "google_id": "0x3a3b9b0a43c34977:0x2edf75eda29b72e4",
                "place_id": "ChIJd0nDQwqbOzoR5HKbou113y4",
                "google_mid": "/g/11g0kbnq8s",
                "phone_number": null,
                "name": "Anil Multi Speciality Dental clinic",
                "latitude": 18.5736488,
                "longitude": 83.3571362,
                "full_address": "Anil Multi Speciality Dental clinic, Bazaar Rd, Maharanipeta, Bobbili, Andhra Pradesh 535558",
                "review_count": 27,
                "rating": 4.8,
                "timezone": "Asia/Calcutta",
                "opening_status": "Open ⋅ Closes 9 pm",
                "working_hours": {
                    "Thursday": [
                        "9 am–9 pm"
                    ],
                    "Friday": [
                        "9 am–9 pm"
                    ],
                    "Saturday": [
                        "9 am–9 pm"
                    ],
                    "Sunday": [
                        "9 am–2 pm"
                    ],
                    "Monday": [
                        "9 am–9 pm"
                    ],
                    "Tuesday": [
                        "9 am–9 pm"
                    ],
                    "Wednesday": [
                        "9 am–9 pm"
                    ]
                },
                "website": null,
                "verified": true,
                "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a3b9b0a43c34977:0x2edf75eda29b72e4",
                "cid": "3377547909046956772",
                "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJd0nDQwqbOzoR5HKbou113y4&q=hospitals&authuser=0&hl=en&gl=IN",
                "owner_id": "110643895805023853813",
                "owner_link": "https://maps.google.com/maps/contrib/110643895805023853813",
                "owner_name": "Anil Multi Speciality Dental clinic",
                "booking_link": null,
                "reservations_link": null,
                "business_status": "OPEN",
                "type": "Medical clinic",
                "subtypes": [
                    "Medical clinic"
                ],
                "photos_sample": [
                    {
                        "photo_id": "AF1QipPN-KODudwxtmOnawwb4zdQgIjptV0Wttcx2jt0",
                        "photo_url": "https://lh5.googleusercontent.com/p/AF1QipPN-KODudwxtmOnawwb4zdQgIjptV0Wttcx2jt0",
                        "photo_url_large": "https://lh5.googleusercontent.com/p/AF1QipPN-KODudwxtmOnawwb4zdQgIjptV0Wttcx2jt0=w2316-h3088-k-no",
                        "video_thumbnail_url": null,
                        "latitude": 18.5735064,
                        "longitude": 83.3573183,
                        "type": "photo",
                        "photo_datetime_utc": "2025-02-24T00:00:00.000Z",
                        "photo_timestamp": 1740355200
                    }
                ],
                "reviews_per_rating": {
                    "1": 1,
                    "2": 0,
                    "3": 0,
                    "4": 2,
                    "5": 24
                },
                "photo_count": 27,
                "about": {
                    "summary": null,
                    "details": {
                        "Accessibility": {
                            "Wheelchair-accessible car park": true,
                            "Wheelchair-accessible entrance": true
                        },
                        "Amenities": {
                            "Gender-neutral toilets": true
                        }
                    }
                },
                "address": "Bazaar Rd, Maharanipeta, Bobbili, Andhra Pradesh 535558",
                "order_link": null,
                "price_level": null,
                "district": "Maharanipeta",
                "street_address": "Bazaar Rd",
                "city": "Bobbili",
                "zipcode": "535558",
                "state": "Andhra Pradesh",
                "country": "IN",
                "emails_and_contacts": {
                    "emails": [],
                    "phone_numbers": [],
                    "facebook": null,
                    "instagram": null,
                    "yelp": null,
                    "tiktok": null,
                    "snapchat": null,
                    "twitter": null,
                    "linkedin": null,
                    "github": null,
                    "youtube": null,
                    "pinterest": null
                }
            }
        ]
    }.data;
    // const getLocation=()=>{
    //     if(navigator.geolocation){
    //         navigator.geolocation.getCurrentPosition(showLocation);
    //     }
    //     else{
    //         console.log("error fetching location");
           
    //     }
    // }
    // const showLocation=(position)=>{
    //     setLocation({lat:position.coords.latitude,lan:position.coords.longitude});
    //     console.log("location fetched...");
    //     localStorage.setItem("latitude",position.coords.latitude);
    //     localStorage.setItem("longitude",position.coords.longitude);
    // }
    // const getHospitals=async()=>{
    //     const response=await axios.post("http://localhost:3000/hospitals/",location);
    //     setHospitals(response["data"].data);
    // }
    // useEffect(()=>{
    //     getLocation();
    // },[ ]);
    // useEffect(()=>{
    //      getHospitals()

    //  },[location]);
     return(
        <div id="hospitallist" style={{display:"flex", gap:"10px", flexWrap:"wrap", justifyContent:"space-evenly"}}>
            {  data.map((hospital,index)=>{
                return (<Card key={index} 
                    name={hospital.name}
                    district={hospital.district}
                    rating={hospital.rating}
                    url={hospital.photos_sample[0].photo_url}
                    sidebar={props.sidebar}
                    mobileno={hospital.phone_number}
                    location={hospital.place_link}
                    />)
            })}
        </div>
     )
}
export default NearbyHos;