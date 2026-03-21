import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom";
import axios from "axios"
import Card from "./Card"
import Loader from "./Loader";
const NearbyHos=(props)=>{
    // console.log("near by hos");
    const [coordinates,setCoordinates]=useState({lat:"",lan:""});
    const [hospitals,setHospitals]=useState([]);
    const location=useLocation();
    const [loading, setLoading] = useState(true);
    const specialist =
    location.state && location.state.specialist
        ? location.state.specialist
        : "General Medicine";

    const [dept, setDept] = useState(specialist);
    let data=[
          {
            "business_id": "0x3a395b95788e4d3f:0x93c8de64cd5e3956",
            "google_id": "0x3a395b95788e4d3f:0x93c8de64cd5e3956",
            "place_id": "ChIJP02OeJVbOToRVjlezWTeyJM",
            "google_mid": "/g/11b5pj7sqz",
            "phone_number": "+919394866688",
            "name": "UjhwalHospital",
            "latitude": 17.8130716,
            "longitude": 83.3556471,
            "full_address": "UjhwalHospital, Backside of Union Bank MS Ramaiah City Layout, 6-127/12, Chandrampalem, Srinivasa Nagar, Madhurawada, Madhuravada, Andhra Pradesh 530048, India",
            "review_count": 580,
            "rating": 4,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open 24 hours",
            "working_hours": {
              "Wednesday": [
                "Open 24 hours"
              ],
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
              ]
            },
            "website": "http://ujhwalhospital.com/index",
            "tld": "ujhwalhospital.com",
            "verified": true,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a395b95788e4d3f:0x93c8de64cd5e3956",
            "cid": "10649005843441138006",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJP02OeJVbOToRVjlezWTeyJM&authuser=0",
            "owner_id": "101243064933246809107",
            "owner_link": "https://maps.google.com/maps/contrib/101243064933246809107",
            "owner_name": "UjhwalHospital",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "General hospital",
            "subtypes": [
              "General hospital"
            ],
            "subtype_gcids": [
              "general_hospital",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "hospital",
              "potentially_sensitive_entity",
              "public_api_establishment",
              "services"
            ],
            "photos_sample": [
              {
                "photo_id": "CIHM0ogKEICAgIDstsCFdQ",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer_8XE0vYIpzq8o1oZcE_HmchaJW45PowqgWxKpmnUH6y9NJfOd3RHCDY2s16ozB0IHL--gOIzzzRG4o6x800RwOTNDja_gkBKJBnoQCvgo8J5vtkFAJ2F_0kfIzDse6aPJFGGT",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer_8XE0vYIpzq8o1oZcE_HmchaJW45PowqgWxKpmnUH6y9NJfOd3RHCDY2s16ozB0IHL--gOIzzzRG4o6x800RwOTNDja_gkBKJBnoQCvgo8J5vtkFAJ2F_0kfIzDse6aPJFGGT=w2646-h3068-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.81303097472386,
                "longitude": 83.35561902744928,
                "type": "photo",
                "photo_datetime_utc": "2020-04-03T00:00:00.000Z",
                "photo_timestamp": 1585872000
              }
            ],
            "reviews_per_rating": {
              "1": 119,
              "2": 7,
              "3": 12,
              "4": 53,
              "5": 389
            },
            "photo_count": 23,
            "about": {
              "summary": null,
              "details": {
                "Accessibility": {
                  "Wheelchair accessible entrance": true,
                  "Wheelchair accessible parking lot": true,
                  "Wheelchair accessible restroom": true,
                  "Wheelchair accessible seating": true
                }
              }
            },
            "address": "Backside of Union Bank MS Ramaiah City Layout, 6-127/12, Chandrampalem, Srinivasa Nagar, Madhurawada, Madhuravada, Andhra Pradesh 530048, India",
            "order_link": null,
            "price_level": null,
            "district": "Chandrampalem, Srinivasa Nagar, Madhurawada",
            "street_address": "Backside of Union Bank MS Ramaiah City Layout, 6-127/12",
            "city": "Madhuravada",
            "zipcode": "530048",
            "state": "Andhra Pradesh",
            "country": "IN"
          },
          {
            "business_id": "0x3a395babe2e7b1d3:0x276bb70e8a43be96",
            "google_id": "0x3a395babe2e7b1d3:0x276bb70e8a43be96",
            "place_id": "ChIJ07Hn4qtbOToRlr5Dig63ayc",
            "google_mid": "/g/11x964489w",
            "phone_number": "+917095925747",
            "name": "Ariya Hospital",
            "latitude": 17.8050581,
            "longitude": 83.3569517,
            "full_address": "Ariya Hospital, D.No. 4-20/6/1, near DTDC, Durganagar, Chandrampalem, Midhilapuri Vuda Colony, Madhurawada, Madhuravada, Andhra Pradesh 530041, India",
            "review_count": 344,
            "rating": 4.4,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open 24 hours",
            "working_hours": {
              "Wednesday": [
                "Open 24 hours"
              ],
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
              ]
            },
            "website": "https://www.ariyahospitals.com",
            "tld": "ariyahospitals.com",
            "verified": true,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a395babe2e7b1d3:0x276bb70e8a43be96",
            "cid": "2840565263064350358",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ07Hn4qtbOToRlr5Dig63ayc&authuser=0",
            "owner_id": "112829157161141740896",
            "owner_link": "https://maps.google.com/maps/contrib/112829157161141740896",
            "owner_name": "Ariya Hospital",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "Hospital",
            "subtypes": [
              "Hospital",
              "Private hospital"
            ],
            "subtype_gcids": [
              "hospital",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "potentially_sensitive_entity",
              "private_hospital",
              "public_api_establishment",
              "services"
            ],
            "photos_sample": [
              {
                "photo_id": "CIABIhAGbwNQrRfh4WgJ06AAB_fX",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoucXA-yb72yRMXsL9t5A4h5q4C0ZQWyImbQqAIMDIYtL7Tb_sXb0aX1xuI4WUhWMOS6OC_F3A17Um0jKHH6zEb2JXIomqx8aJWSLO8QmQ7wye4gayjBeng95SwE-uNKDHLCedIE7sx_Fc",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoucXA-yb72yRMXsL9t5A4h5q4C0ZQWyImbQqAIMDIYtL7Tb_sXb0aX1xuI4WUhWMOS6OC_F3A17Um0jKHH6zEb2JXIomqx8aJWSLO8QmQ7wye4gayjBeng95SwE-uNKDHLCedIE7sx_Fc=w3024-h4032-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.8050654,
                "longitude": 83.356921,
                "type": "photo",
                "photo_datetime_utc": "2025-05-24T00:00:00.000Z",
                "photo_timestamp": 1748044800
              }
            ],
            "reviews_per_rating": {
              "1": 45,
              "2": 5,
              "3": 1,
              "4": 7,
              "5": 286
            },
            "photo_count": 26,
            "about": {
              "summary": null,
              "details": {
                "Accessibility": {
                  "Wheelchair accessible entrance": true,
                  "Wheelchair accessible parking lot": true
                }
              }
            },
            "address": "D.No. 4-20/6/1, near DTDC, Durganagar, Chandrampalem, Midhilapuri Vuda Colony, Madhurawada, Madhuravada, Andhra Pradesh 530041, India",
            "order_link": null,
            "price_level": null,
            "district": "Durganagar, Chandrampalem, Midhilapuri Vuda Colony, Madhurawada",
            "street_address": "D.No. 4-20/6/1, near DTDC",
            "city": "Madhuravada",
            "zipcode": "530041",
            "state": "Andhra Pradesh",
            "country": "IN"
          },
          {
            "business_id": "0x3a395cc3bc04279b:0x3ceecaae17bedd99",
            "google_id": "0x3a395cc3bc04279b:0x3ceecaae17bedd99",
            "place_id": "ChIJmycEvMNcOToRmd2-F67K7jw",
            "google_mid": "/g/11bx42p1p1",
            "phone_number": "+918978889738",
            "name": "Pinnacle Hospitals, Visakhapatnam.",
            "latitude": 17.763272999999998,
            "longitude": 83.307881,
            "full_address": "Plot No. 17A, Pinnacle Hospitals, Visakhapatnam., Health City, Chinna Gadhili, Hanumanthavaka, Visakhapatnam, Andhra Pradesh 530040, India",
            "review_count": 701,
            "rating": 3.9,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open 24 hours",
            "working_hours": {
              "Wednesday": [
                "Open 24 hours"
              ],
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
              ]
            },
            "website": "https://www.pinnaclehospitals.com",
            "tld": "pinnaclehospitals.com",
            "verified": true,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a395cc3bc04279b:0x3ceecaae17bedd99",
            "cid": "4390669535804317081",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJmycEvMNcOToRmd2-F67K7jw&authuser=0",
            "owner_id": "100850809993297136432",
            "owner_link": "https://maps.google.com/maps/contrib/100850809993297136432",
            "owner_name": "Pinnacle Hospitals, Visakhapatnam.",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "General hospital",
            "subtypes": [
              "General hospital"
            ],
            "subtype_gcids": [
              "general_hospital",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "hospital",
              "potentially_sensitive_entity",
              "public_api_establishment",
              "services"
            ],
            "photos_sample": [
              {
                "photo_id": "CIHM0ogKEICAgID8zOe-bg",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepldecJfCCWUaoBR8gQrtG9gAWJuhmT6G33TJmyfcCuO6Yfbw2ThQgVp-xsDmtmHzx-y8yEPoKd-f1RqhPBu6yUeEuGEssd82JR_dkBHQ0tzuu_6dFtGOSGxr-zxB-TfAsTAjw0",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepldecJfCCWUaoBR8gQrtG9gAWJuhmT6G33TJmyfcCuO6Yfbw2ThQgVp-xsDmtmHzx-y8yEPoKd-f1RqhPBu6yUeEuGEssd82JR_dkBHQ0tzuu_6dFtGOSGxr-zxB-TfAsTAjw0=w1280-h960-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.7633059,
                "longitude": 83.3082909,
                "type": "photo",
                "photo_datetime_utc": "2017-01-12T00:00:00.000Z",
                "photo_timestamp": 1484179200
              }
            ],
            "reviews_per_rating": {
              "1": 119,
              "2": 26,
              "3": 50,
              "4": 98,
              "5": 408
            },
            "photo_count": 603,
            "about": {
              "summary": null,
              "details": {
                "Accessibility": {
                  "Wheelchair accessible entrance": true,
                  "Wheelchair accessible parking lot": true,
                  "Wheelchair accessible restroom": true
                }
              }
            },
            "address": "Plot No. 17A, Health City, Chinna Gadhili, Hanumanthavaka, Visakhapatnam, Andhra Pradesh 530040, India",
            "order_link": null,
            "price_level": null,
            "district": "Chinna Gadhili, Hanumanthavaka",
            "street_address": "Plot No. 17A, Health City",
            "city": "Visakhapatnam",
            "zipcode": "530040",
            "state": "Andhra Pradesh",
            "country": "IN"
          },
          {
            "business_id": "0x3a395bb10b65b83f:0x53156a8c9a299f1f",
            "google_id": "0x3a395bb10b65b83f:0x53156a8c9a299f1f",
            "place_id": "ChIJP7hlC7FbOToRH58pmoxqFVM",
            "google_mid": "/g/11lndrml0y",
            "phone_number": "+917013149921",
            "name": "Mayuran Multispeciality Clinic, Orthopaedic Dr, General Medicine Dr, Digital Xray, Diagnostics Lab & Home Sample-Madhurawada",
            "latitude": 17.8180832,
            "longitude": 83.3457902,
            "full_address": "Ground floor, R89W+88G Mayuran Multispeciality Clinic, Orthopaedic Dr, General Medicine Dr, Digital Xray, Diagnostics Lab & Home Sample-Madhurawada, Flora beau fort Apartment, Ravellapalem Chandrampalem, Revallapalem, Gandhi Nagar, Madhurawada, Madhuravada, Andhra Pradesh 530048, India",
            "review_count": 28,
            "rating": 4.9,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open · Closes 9:30 PM",
            "working_hours": {
              "Wednesday": [
                "9 AM–2 PM",
                "3–9:30 PM"
              ],
              "Thursday": [
                "9 AM–9:30 PM"
              ],
              "Friday": [
                "9 AM–2 PM",
                "3–9:30 PM"
              ],
              "Saturday": [
                "9 AM–2 PM",
                "3–9:30 PM"
              ],
              "Sunday": [
                "9 AM–2 PM",
                "3–9:30 PM"
              ],
              "Monday": [
                "9 AM–2 PM",
                "3–9:30 PM"
              ],
              "Tuesday": [
                "9 AM–2 PM",
                "3–9:30 PM"
              ]
            },
            "website": null,
            "verified": true,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a395bb10b65b83f:0x53156a8c9a299f1f",
            "cid": "5986808431773327135",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJP7hlC7FbOToRH58pmoxqFVM&authuser=0",
            "owner_id": "104365787509080401303",
            "owner_link": "https://maps.google.com/maps/contrib/104365787509080401303",
            "owner_name": "Mayuran Multispeciality Clinic, Orthopaedic Dr, General Medicine Dr, Digital Xray, Diagnostics Lab & Home Sample-Madhurawada",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "General hospital",
            "subtypes": [
              "General hospital",
              "Hospital",
              "Medical clinic",
              "Neurologist",
              "Women's health clinic",
              "Orthopedic clinic",
              "Pediatrician",
              "Physiatrist"
            ],
            "subtype_gcids": [
              "hospital",
              "doctor",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "general_hospital",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "medical_clinic",
              "neurologist",
              "obstetrics_gynecology_clinic",
              "orthopedic_clinic",
              "pediatrician",
              "physiatrist",
              "potentially_sensitive_entity",
              "practitioner_service_location",
              "professional_services",
              "public_api_establishment",
              "services",
              "specialized_clinic"
            ],
            "photos_sample": [
              {
                "photo_id": "CIHM0ogKEICAgID3m8GXaw",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepIHBOzbpnvHqP4qyNi6e3zY0j-WFFue90at4x-4Ur7lzrbtmETYVmIsHNwSCtN2DCTe1XyFzOFW7j8AyfCvxYLSj3h7wEDxXkX3nRYg8wqjoHRa61Oh0BMfG1Xz7nRhBjKsUiI",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepIHBOzbpnvHqP4qyNi6e3zY0j-WFFue90at4x-4Ur7lzrbtmETYVmIsHNwSCtN2DCTe1XyFzOFW7j8AyfCvxYLSj3h7wEDxXkX3nRYg8wqjoHRa61Oh0BMfG1Xz7nRhBjKsUiI=w4080-h3072-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.8180233,
                "longitude": 83.34572059999999,
                "type": "photo",
                "photo_datetime_utc": "2024-12-19T00:00:00.000Z",
                "photo_timestamp": 1734566400
              }
            ],
            "reviews_per_rating": {
              "1": 0,
              "2": 0,
              "3": 1,
              "4": 1,
              "5": 26
            },
            "photo_count": 15,
            "about": null,
            "address": "Ground floor, R89W+88G Flora beau fort Apartment, Ravellapalem Chandrampalem, Revallapalem, Gandhi Nagar, Madhurawada, Madhuravada, Andhra Pradesh 530048, India",
            "order_link": null,
            "price_level": null,
            "district": "Revallapalem, Gandhi Nagar, Madhurawada",
            "street_address": "Ground floor, R89W+88G Flora beau fort Apartment, Ravellapalem Chandrampalem",
            "city": "Madhuravada",
            "zipcode": "530048",
            "state": "Andhra Pradesh",
            "country": "IN"
          },
          {
            "business_id": "0x3a395b030b2026a7:0x32cecbd5e410321f",
            "google_id": "0x3a395b030b2026a7:0x32cecbd5e410321f",
            "place_id": "ChIJpyYgCwNbOToRHzIQ5NXLzjI",
            "google_mid": "/g/11bxg3j18g",
            "phone_number": "+918912866450",
            "name": "GITAM Hospital",
            "latitude": 17.784634399999998,
            "longitude": 83.3746242,
            "full_address": "GITAM Hospital, Rushikonda, Endada, Andhra Pradesh 530045, India",
            "review_count": 2876,
            "rating": 4.8,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open 24 hours",
            "working_hours": {
              "Wednesday": [
                "Open 24 hours"
              ],
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
              ]
            },
            "website": "https://gimsr.gitam.edu/Hospitals",
            "tld": "gitam.edu",
            "verified": true,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a395b030b2026a7:0x32cecbd5e410321f",
            "cid": "3661087666613531167",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJpyYgCwNbOToRHzIQ5NXLzjI&authuser=0",
            "owner_id": "100345106355559916495",
            "owner_link": "https://maps.google.com/maps/contrib/100345106355559916495",
            "owner_name": "GITAM Hospital",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "University hospital",
            "subtypes": [
              "University hospital"
            ],
            "subtype_gcids": [
              "university_hospital",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "hospital",
              "potentially_sensitive_entity",
              "public_api_establishment",
              "services"
            ],
            "photos_sample": [
              {
                "photo_id": "CIHM0ogKEICAgICe492vwwE",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerKy-t27364vdV6L6zFNV_XTtmrNZgInrcqPXoSBdrNQE6lxFu8h45Z5JYJFfIR3LMStIgJL7aNPC7X2bV5rcTqP3NY6wzInb_n_JJDAbVyrQR4SciQpUn2fzJvExGRMyAjuAnkHg",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerKy-t27364vdV6L6zFNV_XTtmrNZgInrcqPXoSBdrNQE6lxFu8h45Z5JYJFfIR3LMStIgJL7aNPC7X2bV5rcTqP3NY6wzInb_n_JJDAbVyrQR4SciQpUn2fzJvExGRMyAjuAnkHg=w4032-h2268-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.784634368562234,
                "longitude": 83.37462422863675,
                "type": "photo",
                "photo_datetime_utc": "2022-10-22T00:00:00.000Z",
                "photo_timestamp": 1666396800
              }
            ],
            "reviews_per_rating": {
              "1": 93,
              "2": 19,
              "3": 44,
              "4": 153,
              "5": 2567
            },
            "photo_count": 554,
            "about": {
              "summary": null,
              "details": {
                "Accessibility": {
                  "Wheelchair accessible entrance": true,
                  "Wheelchair accessible parking lot": true,
                  "Wheelchair accessible restroom": true
                }
              }
            },
            "address": "Rushikonda, Endada, Andhra Pradesh 530045, India",
            "order_link": null,
            "price_level": null,
            "district": "Rushikonda",
            "street_address": null,
            "city": "Endada",
            "zipcode": "530045",
            "state": "Andhra Pradesh",
            "country": "IN"
          },
          {
            "business_id": "0x3a395df8e5239ca3:0x5b1da95c046f219c",
            "google_id": "0x3a395df8e5239ca3:0x5b1da95c046f219c",
            "place_id": "ChIJo5wj5fhdOToRnCFvBFypHVs",
            "google_mid": "/g/11f9yd63vr",
            "phone_number": "+917995976666",
            "name": "GJ HOSPITALS & TRAUMA CENTRE",
            "latitude": 17.7640873,
            "longitude": 83.3104628,
            "full_address": "GJ HOSPITALS & TRAUMA CENTRE, Health City, Chinna Gadhili, Uma Palace, Arilova, Visakhapatnam, Andhra Pradesh 530040, India",
            "review_count": 216,
            "rating": 4.7,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open 24 hours",
            "working_hours": {
              "Wednesday": [
                "Open 24 hours"
              ],
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
              ]
            },
            "website": "http://www.gjhospitals.com",
            "tld": "gjhospitals.com",
            "verified": true,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a395df8e5239ca3:0x5b1da95c046f219c",
            "cid": "6565590044452528540",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJo5wj5fhdOToRnCFvBFypHVs&authuser=0",
            "owner_id": "114307288852077438642",
            "owner_link": "https://maps.google.com/maps/contrib/114307288852077438642",
            "owner_name": "GJ HOSPITALS & TRAUMA CENTRE",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "Hospital",
            "subtypes": [
              "Hospital"
            ],
            "subtype_gcids": [
              "hospital",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "potentially_sensitive_entity",
              "public_api_establishment",
              "services"
            ],
            "photos_sample": [
              {
                "photo_id": "CIHM0ogKEICAgIDOtrWQ5gE",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoGenAJgTl4aJG2YUV7CTw8Tdr0ZIFCj0qY_P0UZ1SQaqDZ8wB7B9KNTPmnkP6DNOS4Bu9Okt4CHWkyNbzZFA5ld1cwEqYcOONjTNMCP2EUxchEQnxMYKJOREIDOp59vbgqDvcP",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoGenAJgTl4aJG2YUV7CTw8Tdr0ZIFCj0qY_P0UZ1SQaqDZ8wB7B9KNTPmnkP6DNOS4Bu9Okt4CHWkyNbzZFA5ld1cwEqYcOONjTNMCP2EUxchEQnxMYKJOREIDOp59vbgqDvcP=w6000-h4000-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.763822300219836,
                "longitude": 83.31075177034599,
                "type": "photo",
                "photo_datetime_utc": "2022-08-05T00:00:00.000Z",
                "photo_timestamp": 1659657600
              }
            ],
            "reviews_per_rating": {
              "1": 16,
              "2": 1,
              "3": 0,
              "4": 1,
              "5": 198
            },
            "photo_count": 63,
            "about": {
              "summary": null,
              "details": {
                "Accessibility": {
                  "Wheelchair accessible entrance": true,
                  "Wheelchair accessible parking lot": true
                }
              }
            },
            "address": "Health City, Chinna Gadhili, Uma Palace, Arilova, Visakhapatnam, Andhra Pradesh 530040, India",
            "order_link": null,
            "price_level": null,
            "district": "Chinna Gadhili, Arilova",
            "street_address": "Health City, Chinna Gadhili, Uma Palace",
            "city": "Visakhapatnam",
            "zipcode": "530040",
            "state": "Andhra Pradesh",
            "country": "IN"
          },
          {
            "business_id": "0x3a395dca6bbd71cf:0xd6fcefa590cd2fe",
            "google_id": "0x3a395dca6bbd71cf:0xd6fcefa590cd2fe",
            "place_id": "ChIJz3G9a8pdOToR_tIMWfrObw0",
            "google_mid": "/g/11tjn4wgz5",
            "phone_number": "+914068106589",
            "name": "CARE Hospitals, Visakhapatnam | Best Hospital in Vizag",
            "latitude": 17.7614679,
            "longitude": 83.3153553,
            "full_address": "CARE Hospitals, Visakhapatnam | Best Hospital in Vizag, Care Hospitals Healthcity, Plot No : 3, near Sai Baba Temple, Chinna Gadhili, Arilova, Visakhapatnam, Andhra Pradesh 530040, India",
            "review_count": 1543,
            "rating": 4.9,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open 24 hours",
            "working_hours": {
              "Wednesday": [
                "Open 24 hours"
              ],
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
              ]
            },
            "website": "https://www.carehospitals.com/hospital-detail/care-hospitals-health-city-arilova",
            "tld": "carehospitals.com",
            "verified": true,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a395dca6bbd71cf:0xd6fcefa590cd2fe",
            "cid": "968220019539104510",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJz3G9a8pdOToR_tIMWfrObw0&authuser=0",
            "owner_id": "114310252072757073033",
            "owner_link": "https://maps.google.com/maps/contrib/114310252072757073033",
            "owner_name": "CARE Hospitals, Visakhapatnam | Best Hospital in Vizag",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "Hospital",
            "subtypes": [
              "Hospital"
            ],
            "subtype_gcids": [
              "hospital",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "potentially_sensitive_entity",
              "public_api_establishment",
              "services"
            ],
            "photos_sample": [
              {
                "photo_id": "CIHM0ogKEICAgICX_ruoPw",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoRDseh7EB39WDrpbaVM9z84T6Ed-I_P6_JwKo9G3O7Awr0Uw-M3hYF0hektG4-0oTaW9Qt6NTlLU5OLeABYdsbavlZiAoK6Gc0V0ZaD7m6Dd0eymA-hnVF_68-MZ3CbwvclGRM",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoRDseh7EB39WDrpbaVM9z84T6Ed-I_P6_JwKo9G3O7Awr0Uw-M3hYF0hektG4-0oTaW9Qt6NTlLU5OLeABYdsbavlZiAoK6Gc0V0ZaD7m6Dd0eymA-hnVF_68-MZ3CbwvclGRM=w704-h350-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.7607425,
                "longitude": 83.31525649999999,
                "type": "photo",
                "photo_datetime_utc": "2024-11-17T00:00:00.000Z",
                "photo_timestamp": 1731801600
              }
            ],
            "reviews_per_rating": {
              "1": 34,
              "2": 6,
              "3": 10,
              "4": 56,
              "5": 1437
            },
            "photo_count": 121,
            "about": {
              "summary": null,
              "details": {
                "Accessibility": {
                  "Wheelchair accessible entrance": true,
                  "Wheelchair accessible parking lot": true,
                  "Wheelchair accessible seating": true
                }
              }
            },
            "address": "Care Hospitals Healthcity, Plot No : 3, near Sai Baba Temple, Chinna Gadhili, Arilova, Visakhapatnam, Andhra Pradesh 530040, India",
            "order_link": null,
            "price_level": null,
            "district": "Chinna Gadhili, Arilova",
            "street_address": "Care Hospitals Healthcity, Plot No : 3, near Sai Baba Temple",
            "city": "Visakhapatnam",
            "zipcode": "530040",
            "state": "Andhra Pradesh",
            "country": "IN"
          },
          {
            "business_id": "0x3a395dd7d9ba1013:0xd413318d7391f81b",
            "google_id": "0x3a395dd7d9ba1013:0xd413318d7391f81b",
            "place_id": "ChIJExC62dddOToRG_iRc40xE9Q",
            "google_mid": "/g/11rrqfqyzk",
            "phone_number": "+914068334455",
            "name": "Medicover Hospitals - Best Hospital in Vizag",
            "latitude": 17.747937699999998,
            "longitude": 83.33199739999999,
            "full_address": "NH -16, Medicover Hospitals - Best Hospital in Vizag, Door No- 1-1-83, New Venkojipalem MVP, near Hp Petrol Bunk, Sector- 6, MVP Colony, Visakhapatnam, Andhra Pradesh 530022, India",
            "review_count": 16910,
            "rating": 4.6,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open 24 hours",
            "working_hours": {
              "Wednesday": [
                "Open 24 hours"
              ],
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
              ]
            },
            "website": "https://www.medicoverhospitals.in/hospitals/andhra-pradesh/visakhapatnam-mvp",
            "tld": "medicoverhospitals.in",
            "verified": true,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a395dd7d9ba1013:0xd413318d7391f81b",
            "cid": "15281612444197320731",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJExC62dddOToRG_iRc40xE9Q&authuser=0",
            "owner_id": "100147666737996667374",
            "owner_link": "https://maps.google.com/maps/contrib/100147666737996667374",
            "owner_name": "Medicover Hospitals - Best Hospital in Vizag",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "Hospital",
            "subtypes": [
              "Hospital"
            ],
            "subtype_gcids": [
              "hospital",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "potentially_sensitive_entity",
              "public_api_establishment",
              "services"
            ],
            "photos_sample": [
              {
                "photo_id": "CIHM0ogKEICAgICW14nQKA",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq0w6_eDrym8SSszvwoV1HeSCyVSYi0a5Grk-TpuP2XuE-K0150YV8PF5lTbF9c6vR4utDN33brdDJuraQ6PxzScSYVGB1nV6StFsU92yH4r1wJCx5ZjfezKFZNhN6noSkLjB3z",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq0w6_eDrym8SSszvwoV1HeSCyVSYi0a5Grk-TpuP2XuE-K0150YV8PF5lTbF9c6vR4utDN33brdDJuraQ6PxzScSYVGB1nV6StFsU92yH4r1wJCx5ZjfezKFZNhN6noSkLjB3z=w1366-h706-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.7479774,
                "longitude": 83.3318639,
                "type": "photo",
                "photo_datetime_utc": "2022-04-09T00:00:00.000Z",
                "photo_timestamp": 1649462400
              }
            ],
            "reviews_per_rating": {
              "1": 986,
              "2": 185,
              "3": 386,
              "4": 1426,
              "5": 13927
            },
            "photo_count": 1017,
            "about": {
              "summary": null,
              "details": {
                "Accessibility": {
                  "Assistive hearing loop": true,
                  "Wheelchair accessible entrance": true,
                  "Wheelchair accessible parking lot": true,
                  "Wheelchair accessible restroom": true,
                  "Wheelchair accessible seating": true
                }
              }
            },
            "address": "NH -16, Door No- 1-1-83, New Venkojipalem MVP, near Hp Petrol Bunk, Sector- 6, MVP Colony, Visakhapatnam, Andhra Pradesh 530022, India",
            "order_link": null,
            "price_level": null,
            "district": "Sector- 6, MVP Colony",
            "street_address": "NH -16, Door No- 1-1-83, New Venkojipalem MVP, near Hp Petrol Bunk",
            "city": "Visakhapatnam",
            "zipcode": "530022",
            "state": "Andhra Pradesh",
            "country": "IN"
          },
          {
            "business_id": "0x3a39435455555555:0x57b84d210a172074",
            "google_id": "0x3a39435455555555:0x57b84d210a172074",
            "place_id": "ChIJVVVVVVRDOToRdCAXCiFNuFc",
            "google_mid": "/g/1tct_vtv",
            "phone_number": "+918912578887",
            "name": "Tirumala Vijaya Hospital",
            "latitude": 17.7440365,
            "longitude": 83.3351936,
            "full_address": "Tirumala Vijaya Hospital, MVP Main Rd, Sector 2, MVP Colony, Visakhapatnam, Andhra Pradesh 530017, India",
            "review_count": 956,
            "rating": 4.8,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open 24 hours",
            "working_hours": {
              "Wednesday": [
                "Open 24 hours"
              ],
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
              ]
            },
            "website": null,
            "verified": true,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a39435455555555:0x57b84d210a172074",
            "cid": "6320886881313038452",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJVVVVVVRDOToRdCAXCiFNuFc&authuser=0",
            "owner_id": "106366147462452699900",
            "owner_link": "https://maps.google.com/maps/contrib/106366147462452699900",
            "owner_name": "Tirumala Vijaya Hospital",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "General hospital",
            "subtypes": [
              "General hospital"
            ],
            "subtype_gcids": [
              "general_hospital",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "hospital",
              "potentially_sensitive_entity",
              "public_api_establishment",
              "services"
            ],
            "photos_sample": [
              {
                "photo_id": "CIHM0ogKEICAgIDqwZjs6AE",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweonBE46JFLPGu2GuLfN9vk3_LLxoFdmQ9OKOLZnGzPCCiedXHSVN7O5-yNUti1Q2vzJ8zkbgz2DJJbGegIU0AzJfNbnUNMRdBP43FgH5iXfmZvmdN5CJwRJAhznfctvDB_7mKsdWQ",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweonBE46JFLPGu2GuLfN9vk3_LLxoFdmQ9OKOLZnGzPCCiedXHSVN7O5-yNUti1Q2vzJ8zkbgz2DJJbGegIU0AzJfNbnUNMRdBP43FgH5iXfmZvmdN5CJwRJAhznfctvDB_7mKsdWQ=w4192-h2358-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.7439027,
                "longitude": 83.3351522,
                "type": "photo",
                "photo_datetime_utc": "2021-08-10T00:00:00.000Z",
                "photo_timestamp": 1628553600
              }
            ],
            "reviews_per_rating": {
              "1": 51,
              "2": 2,
              "3": 2,
              "4": 10,
              "5": 891
            },
            "photo_count": 65,
            "about": {
              "summary": null,
              "details": {
                "Accessibility": {
                  "Wheelchair accessible entrance": true,
                  "Wheelchair accessible parking lot": true,
                  "Wheelchair accessible restroom": true
                }
              }
            },
            "address": "MVP Main Rd, Sector 2, MVP Colony, Visakhapatnam, Andhra Pradesh 530017, India",
            "order_link": null,
            "price_level": null,
            "district": "Sector 2, MVP Colony",
            "street_address": "MVP Main Rd",
            "city": "Visakhapatnam",
            "zipcode": "530017",
            "state": "Andhra Pradesh",
            "country": "IN"
          },
          {
            "business_id": "0x3a3943b20dcbda4b:0xb346954ec718ee2d",
            "google_id": "0x3a3943b20dcbda4b:0xb346954ec718ee2d",
            "place_id": "ChIJS9rLDbJDOToRLe4Yx06VRrM",
            "google_mid": "/g/11wr3y0h2k",
            "phone_number": "+919949098345",
            "name": "KIMS Hospitals, Seethammadhara | Best Multi-Speciality Hospital in Vizag",
            "latitude": 17.7407575,
            "longitude": 83.3079593,
            "full_address": "KIMS Hospitals, Seethammadhara | Best Multi-Speciality Hospital in Vizag, 50-53-14, Gurudwara Rd, Balayya Sastri Layout, Seethammadara, Visakhapatnam, Andhra Pradesh 530013, India",
            "review_count": 1299,
            "rating": 4.7,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open 24 hours",
            "working_hours": {
              "Wednesday": [
                "Open 24 hours"
              ],
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
              ]
            },
            "website": "https://www.kimshospitals.com/seethammadhara",
            "tld": "kimshospitals.com",
            "verified": true,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a3943b20dcbda4b:0xb346954ec718ee2d",
            "cid": "12918176746739133997",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJS9rLDbJDOToRLe4Yx06VRrM&authuser=0",
            "owner_id": "117323324171949736979",
            "owner_link": "https://maps.google.com/maps/contrib/117323324171949736979",
            "owner_name": "KIMS Hospitals, Seethammadhara | Best Multi-Speciality Hospital in Vizag",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "Private hospital",
            "subtypes": [
              "Private hospital"
            ],
            "subtype_gcids": [
              "private_hospital",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "hospital",
              "potentially_sensitive_entity",
              "public_api_establishment",
              "services"
            ],
            "photos_sample": [
              {
                "photo_id": "CIABIhB9eLVVCSjtb3tUjJiuGpRd",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoOBUQNhF10nztJlBp1pH52_jJkR5xj-8jPxE7fvR3Lnn88NGZHDrxUGNNzLExB6Yy96Rs4vluALmwvTHl_0f3M2Wex4d_f0XyJ-7lbaUKKZP82EKzSr9vPfRKSDE_CSYOPFQHlZ1WBqAr2",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoOBUQNhF10nztJlBp1pH52_jJkR5xj-8jPxE7fvR3Lnn88NGZHDrxUGNNzLExB6Yy96Rs4vluALmwvTHl_0f3M2Wex4d_f0XyJ-7lbaUKKZP82EKzSr9vPfRKSDE_CSYOPFQHlZ1WBqAr2=w1024-h883-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.7407473,
                "longitude": 83.307812,
                "type": "photo",
                "photo_datetime_utc": "2025-09-02T00:00:00.000Z",
                "photo_timestamp": 1756771200
              }
            ],
            "reviews_per_rating": {
              "1": 47,
              "2": 15,
              "3": 36,
              "4": 145,
              "5": 1056
            },
            "photo_count": 23,
            "about": {
              "summary": null,
              "details": {
                "Accessibility": {
                  "Wheelchair accessible entrance": true,
                  "Wheelchair accessible parking lot": true,
                  "Wheelchair accessible restroom": true,
                  "Wheelchair accessible seating": true
                }
              }
            },
            "address": "50-53-14, Gurudwara Rd, Balayya Sastri Layout, Seethammadara, Visakhapatnam, Andhra Pradesh 530013, India",
            "order_link": null,
            "price_level": null,
            "district": "Balayya Sastri Layout, Seethammadara",
            "street_address": "50-53-14, Gurudwara Rd",
            "city": "Visakhapatnam",
            "zipcode": "530013",
            "state": "Andhra Pradesh",
            "country": "IN"
          },
          {
            "business_id": "0x3a3943311226a1ed:0x2f12873df4d18d45",
            "google_id": "0x3a3943311226a1ed:0x2f12873df4d18d45",
            "place_id": "ChIJ7aEmEjFDOToRRY3R9D2HEi8",
            "google_mid": "/g/1td2fb18",
            "phone_number": "+918912827777",
            "name": "Queen's NRI Hospital",
            "latitude": 17.740678199999998,
            "longitude": 83.307974,
            "full_address": "d.no, Queen's NRI Hospital, KIMS Hospital, 50-53-14, Gurudwara Rd, Balayya Sastri Layout, Seethammadara, Visakhapatnam, Andhra Pradesh 530013, India",
            "review_count": 2107,
            "rating": 4.4,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open 24 hours",
            "working_hours": {
              "Wednesday": [
                "Open 24 hours"
              ],
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
              ]
            },
            "website": null,
            "verified": true,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a3943311226a1ed:0x2f12873df4d18d45",
            "cid": "3391922169533533509",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ7aEmEjFDOToRRY3R9D2HEi8&authuser=0",
            "owner_id": "110475576142267687443",
            "owner_link": "https://maps.google.com/maps/contrib/110475576142267687443",
            "owner_name": "Queen's NRI Hospital",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "General hospital",
            "subtypes": [
              "General hospital",
              "Cancer treatment center",
              "Dental clinic",
              "Hospital",
              "Obstetrician-gynecologist",
              "Heart hospital",
              "Orthopedic clinic",
              "Orthopedic surgeon",
              "Private hospital"
            ],
            "subtype_gcids": [
              "hospital",
              "cancer_treatment_center",
              "dental",
              "dental_clinic",
              "doctor",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "general_hospital",
              "gynecologist",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "heart_hospital",
              "medical_clinic",
              "oncology",
              "orthopedic_clinic",
              "orthopedic_surgeon",
              "potentially_sensitive_entity",
              "practitioner_service_location",
              "private_hospital",
              "public_api_establishment",
              "services",
              "specialized_clinic",
              "surgeon"
            ],
            "photos_sample": [
              {
                "photo_id": "CIHM0ogKEICAgICG_MGVrwE",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepiHcdj8n4Mw2Lit1E1Hb6QzQMjXWzzSEjkzPiPz7nHqajdJFMr7HSLEkPn2WtUEPXs46zO6AF27MWbaH1cHc57fjRU0wVhz2Ol0C42YCampNUXSL51mu08OpoTpsLpMXodPvzs",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepiHcdj8n4Mw2Lit1E1Hb6QzQMjXWzzSEjkzPiPz7nHqajdJFMr7HSLEkPn2WtUEPXs46zO6AF27MWbaH1cHc57fjRU0wVhz2Ol0C42YCampNUXSL51mu08OpoTpsLpMXodPvzs=w4000-h3000-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.740406475743118,
                "longitude": 83.30819289369838,
                "type": "photo",
                "photo_datetime_utc": "2021-11-23T00:00:00.000Z",
                "photo_timestamp": 1637625600
              }
            ],
            "reviews_per_rating": {
              "1": 182,
              "2": 41,
              "3": 61,
              "4": 212,
              "5": 1611
            },
            "photo_count": 364,
            "about": {
              "summary": null,
              "details": {
                "Accessibility": {
                  "Wheelchair accessible entrance": true,
                  "Wheelchair accessible parking lot": true
                }
              }
            },
            "address": "d.no, KIMS Hospital, 50-53-14, Gurudwara Rd, Balayya Sastri Layout, Seethammadara, Visakhapatnam, Andhra Pradesh 530013, India",
            "order_link": null,
            "price_level": null,
            "district": "Balayya Sastri Layout, Seethammadara",
            "street_address": "d.no, KIMS Hospital, 50-53-14, Gurudwara Rd",
            "city": "Visakhapatnam",
            "zipcode": "530013",
            "state": "Andhra Pradesh",
            "country": "IN"
          },
          {
            "business_id": "0x3a395cac9e3bd8c7:0x821de17eeee32630",
            "google_id": "0x3a395cac9e3bd8c7:0x821de17eeee32630",
            "place_id": "ChIJx9g7nqxcOToRMCbj7n7hHYI",
            "google_mid": "/g/1q62cym1b",
            "phone_number": "+919701218666",
            "name": "Amma Hospital",
            "latitude": 17.7468649,
            "longitude": 83.3307798,
            "full_address": "Amma Hospital, Main Road, beside Petrol Pump New, Isukathota, Venkojipalem, Visakhapatnam, Andhra Pradesh 530017, India",
            "review_count": 666,
            "rating": 4.4,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open 24 hours",
            "working_hours": {
              "Wednesday": [
                "Open 24 hours"
              ],
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
              ]
            },
            "website": "https://ammahospitalvizag.com",
            "tld": "ammahospitalvizag.com",
            "verified": true,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a395cac9e3bd8c7:0x821de17eeee32630",
            "cid": "9375897934545233456",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJx9g7nqxcOToRMCbj7n7hHYI&authuser=0",
            "owner_id": "103379491154991069423",
            "owner_link": "https://maps.google.com/maps/contrib/103379491154991069423",
            "owner_name": "Amma Hospital",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "General hospital",
            "subtypes": [
              "General hospital",
              "Obstetrician-gynecologist",
              "Women's health clinic",
              "Orthopedic clinic",
              "Orthopedic surgeon",
              "Radiologist"
            ],
            "subtype_gcids": [
              "general_hospital",
              "doctor",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "gastroenterologist",
              "gynecologist",
              "gynecologist_only",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "hospital",
              "medical_clinic",
              "obstetrics_gynecology_clinic",
              "orthopedic_clinic",
              "orthopedic_surgeon",
              "pediatric_gastroenterologist",
              "pediatric_surgeon",
              "pediatrician",
              "potentially_sensitive_entity",
              "practitioner_service_location",
              "professional_services",
              "public_api_establishment",
              "radiologist",
              "services",
              "specialized_clinic",
              "surgeon"
            ],
            "photos_sample": [
              {
                "photo_id": "CIHM0ogKEICAgIDUl66B4wE",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoob65gAZl878Vgpyn3m6WlLgGyWd5eIHwMVZ3W0oEDwqoR-qIKZQytgDXY1Qsz4yfaCu8DUNo_Xc3O2m_e7EoN1Ut3JUzBabmjvyLzkSg4R0y6Y82d_0PyKkS0xlZ6FRT9cQ8YNg",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoob65gAZl878Vgpyn3m6WlLgGyWd5eIHwMVZ3W0oEDwqoR-qIKZQytgDXY1Qsz4yfaCu8DUNo_Xc3O2m_e7EoN1Ut3JUzBabmjvyLzkSg4R0y6Y82d_0PyKkS0xlZ6FRT9cQ8YNg=w1920-h1080-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.74686492521597,
                "longitude": 83.33077983985788,
                "type": "photo",
                "photo_datetime_utc": "2019-10-07T00:00:00.000Z",
                "photo_timestamp": 1570406400
              }
            ],
            "reviews_per_rating": {
              "1": 72,
              "2": 12,
              "3": 15,
              "4": 48,
              "5": 519
            },
            "photo_count": 23,
            "about": {
              "summary": null,
              "details": {
                "Accessibility": {
                  "Wheelchair accessible entrance": true,
                  "Wheelchair accessible parking lot": true,
                  "Wheelchair accessible restroom": true
                }
              }
            },
            "address": "Main Road, beside Petrol Pump New, Isukathota, Venkojipalem, Visakhapatnam, Andhra Pradesh 530017, India",
            "order_link": null,
            "price_level": null,
            "district": "Isukathota, Venkojipalem",
            "street_address": "Main Road, beside Petrol Pump New",
            "city": "Visakhapatnam",
            "zipcode": "530017",
            "state": "Andhra Pradesh",
            "country": "IN"
          },
          {
            "business_id": "0x3a395d40872d5e2d:0x3787f1f3f6a9b1eb",
            "google_id": "0x3a395d40872d5e2d:0x3787f1f3f6a9b1eb",
            "place_id": "ChIJLV4th0BdOToR67Gp9vPxhzc",
            "google_mid": "/g/11f9zm045_",
            "phone_number": "+919704662266",
            "name": "Varma Hospitals",
            "latitude": 17.7638441,
            "longitude": 83.3113844,
            "full_address": "Varma Hospitals, health city, chinagadili, Chinna Gadhili, Hanumanthavaka, Visakhapatnam, Andhra Pradesh 530040, India",
            "review_count": 686,
            "rating": 4.8,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open 24 hours",
            "working_hours": {
              "Wednesday": [
                "Open 24 hours"
              ],
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
              ]
            },
            "website": "http://varmahospitals.in",
            "tld": "varmahospitals.in",
            "verified": true,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a395d40872d5e2d:0x3787f1f3f6a9b1eb",
            "cid": "4001432824059638251",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJLV4th0BdOToR67Gp9vPxhzc&authuser=0",
            "owner_id": "100577232344537129669",
            "owner_link": "https://maps.google.com/maps/contrib/100577232344537129669",
            "owner_name": "Varma Hospitals",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "Hospital",
            "subtypes": [
              "Hospital"
            ],
            "subtype_gcids": [
              "hospital",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "potentially_sensitive_entity",
              "public_api_establishment",
              "services"
            ],
            "photos_sample": [
              {
                "photo_id": "CIHM0ogKEICAgIDqsPabGg",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqVO28pnv0rMhQODplMD3ZzY_jGszjHXgy6L9r8L5SJfuUll00DvC3DjjktONxBXsrz4_ZBX6p10rpQmMzDCjxAIbvieMHynqHYt-5U9xDkgn4HXLA29-OdFufAstbx0xomX_4",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqVO28pnv0rMhQODplMD3ZzY_jGszjHXgy6L9r8L5SJfuUll00DvC3DjjktONxBXsrz4_ZBX6p10rpQmMzDCjxAIbvieMHynqHYt-5U9xDkgn4HXLA29-OdFufAstbx0xomX_4=w4624-h2136-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.76397906883408,
                "longitude": 83.31133186507418,
                "type": "photo",
                "photo_datetime_utc": "2021-07-26T00:00:00.000Z",
                "photo_timestamp": 1627257600
              }
            ],
            "reviews_per_rating": {
              "1": 27,
              "2": 1,
              "3": 8,
              "4": 43,
              "5": 607
            },
            "photo_count": 23,
            "about": {
              "summary": null,
              "details": {
                "Accessibility": {
                  "Wheelchair accessible entrance": true,
                  "Wheelchair accessible parking lot": true
                }
              }
            },
            "address": "health city, chinagadili, Chinna Gadhili, Hanumanthavaka, Visakhapatnam, Andhra Pradesh 530040, India",
            "order_link": null,
            "price_level": null,
            "district": "Chinna Gadhili, Hanumanthavaka",
            "street_address": "health city, chinagadili",
            "city": "Visakhapatnam",
            "zipcode": "530040",
            "state": "Andhra Pradesh",
            "country": "IN"
          },
          {
            "business_id": "0x3a39430fd9c85ff5:0x968bce337f0096bc",
            "google_id": "0x3a39430fd9c85ff5:0x968bce337f0096bc",
            "place_id": "ChIJ9V_I2Q9DOToRvJYAfzPOi5Y",
            "google_mid": "/m/0b6fw_1",
            "phone_number": null,
            "name": "King George Hospital",
            "latitude": 17.7087374,
            "longitude": 83.3060385,
            "full_address": "P854+FCV King George Hospital, KGH Down Rd, Opp KGH OP Gate, Maharani Peta, Visakhapatnam, Andhra Pradesh 530002, India",
            "review_count": 1017,
            "rating": 3.8,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open 24 hours",
            "working_hours": {
              "Wednesday": [
                "Open 24 hours"
              ],
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
              ]
            },
            "website": "http://www.kghvisakhapatnam.org",
            "tld": "kghvisakhapatnam.org",
            "verified": false,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a39430fd9c85ff5:0x968bce337f0096bc",
            "cid": "10847990848021370556",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ9V_I2Q9DOToRvJYAfzPOi5Y&authuser=0",
            "owner_id": "104534186544810602652",
            "owner_link": "https://maps.google.com/maps/contrib/104534186544810602652",
            "owner_name": "King George Hospital",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "Government hospital",
            "subtypes": [
              "Government hospital"
            ],
            "subtype_gcids": [
              "government_hospital",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "hospital",
              "potentially_sensitive_entity",
              "public_api_establishment",
              "services"
            ],
            "photos_sample": [
              {
                "photo_id": "CIHM0ogKEICAgIC0-8-SVQ",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo-bxbokQuNwGjY1s8BW7k6O6PNvr1oYSU_MHyrrIwQN4-rIxfgfTeO8LkJuEGg_ojzgJMNHo9rIaknA_ucPnlcYwI2MumXe1p3eeRfibvxLQT0WmRmG3IjWvOhEElOV_m3C77b",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo-bxbokQuNwGjY1s8BW7k6O6PNvr1oYSU_MHyrrIwQN4-rIxfgfTeO8LkJuEGg_ojzgJMNHo9rIaknA_ucPnlcYwI2MumXe1p3eeRfibvxLQT0WmRmG3IjWvOhEElOV_m3C77b=w4000-h2000-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.708737403995414,
                "longitude": 83.30603852107357,
                "type": "photo",
                "photo_datetime_utc": "2019-11-12T00:00:00.000Z",
                "photo_timestamp": 1573516800
              }
            ],
            "reviews_per_rating": {
              "1": 172,
              "2": 41,
              "3": 107,
              "4": 228,
              "5": 469
            },
            "photo_count": 1157,
            "about": {
              "summary": null,
              "details": {
                "Accessibility": {
                  "Wheelchair accessible entrance": true,
                  "Wheelchair accessible parking lot": true,
                  "Wheelchair accessible restroom": true
                }
              }
            },
            "address": "P854+FCV, KGH Down Rd, Opp KGH OP Gate, Maharani Peta, Visakhapatnam, Andhra Pradesh 530002, India",
            "order_link": null,
            "price_level": null,
            "district": "Opp KGH OP Gate, Maharani Peta",
            "street_address": "P854+FCV, KGH Down Rd",
            "city": "Visakhapatnam",
            "zipcode": "530002",
            "state": "Andhra Pradesh",
            "country": "IN"
          },
          {
            "business_id": "0x3a39430d7455ddd5:0x5cf8e7a965b1bbb7",
            "google_id": "0x3a39430d7455ddd5:0x5cf8e7a965b1bbb7",
            "place_id": "ChIJ1d1VdA1DOToRt7uxZann-Fw",
            "google_mid": "/g/1tpf5kjw",
            "phone_number": "+918914807502",
            "name": "A N Beach Hospital - Multi Speciality Hospital in Vizag",
            "latitude": 17.7078722,
            "longitude": 83.31230529999999,
            "full_address": "No. 15-9-13/24, A N Beach Hospital - Multi Speciality Hospital in Vizag, Door, Beach Rd, Srirangapuram, Krishna Nagar, Maharani Peta, Visakhapatnam, Andhra Pradesh 530002, India",
            "review_count": 83,
            "rating": 4.3,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open 24 hours",
            "working_hours": {
              "Wednesday": [
                "Open 24 hours"
              ],
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
              ]
            },
            "website": "http://www.sisyp.com/dir/vizag/hospitals-nursing-homes/a-n-beach-hospital",
            "tld": "sisyp.com",
            "verified": true,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a39430d7455ddd5:0x5cf8e7a965b1bbb7",
            "cid": "6699359160455248823",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ1d1VdA1DOToRt7uxZann-Fw&authuser=0",
            "owner_id": "111440010032854247071",
            "owner_link": "https://maps.google.com/maps/contrib/111440010032854247071",
            "owner_name": "A N Beach Hospital - Multi Speciality Hospital in Vizag",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "General hospital",
            "subtypes": [
              "General hospital",
              "Hospital",
              "Private hospital"
            ],
            "subtype_gcids": [
              "hospital",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "general_hospital",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "potentially_sensitive_entity",
              "private_hospital",
              "public_api_establishment",
              "services"
            ],
            "photos_sample": [
              {
                "photo_id": "CIHM0ogKEICAgID8-q7E5gE",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqb0bgkJqD9GFvimJkc4EKbyNBZ1v6ARh-2wo7heDjRHgvjp9qX34dfrYas6YGnQbE7oLK2y6OiwL73O1TF1h1E8BySNTRl3LlvUq4sKN1-zd8beVZZPr1SIPjaPA34NUSzdYhwjg",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqb0bgkJqD9GFvimJkc4EKbyNBZ1v6ARh-2wo7heDjRHgvjp9qX34dfrYas6YGnQbE7oLK2y6OiwL73O1TF1h1E8BySNTRl3LlvUq4sKN1-zd8beVZZPr1SIPjaPA34NUSzdYhwjg=w4160-h2080-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.707790499999998,
                "longitude": 83.31219399999999,
                "type": "photo",
                "photo_datetime_utc": "2019-04-25T00:00:00.000Z",
                "photo_timestamp": 1556150400
              }
            ],
            "reviews_per_rating": {
              "1": 8,
              "2": 1,
              "3": 7,
              "4": 7,
              "5": 60
            },
            "photo_count": 25,
            "about": {
              "summary": null,
              "details": {
                "Accessibility": {
                  "Wheelchair accessible entrance": true,
                  "Wheelchair accessible parking lot": true
                }
              }
            },
            "address": "No. 15-9-13/24, Door, Beach Rd, Srirangapuram, Krishna Nagar, Maharani Peta, Visakhapatnam, Andhra Pradesh 530002, India",
            "order_link": null,
            "price_level": null,
            "district": "Srirangapuram, Krishna Nagar, Maharani Peta",
            "street_address": "No. 15-9-13/24, Door, Beach Rd",
            "city": "Visakhapatnam",
            "zipcode": "530002",
            "state": "Andhra Pradesh",
            "country": "IN"
          },
          {
            "business_id": "0x3a394310106ab8a9:0xedb733dd49d7e3bd",
            "google_id": "0x3a394310106ab8a9:0xedb733dd49d7e3bd",
            "place_id": "ChIJqbhqEBBDOToRvePXSd0zt-0",
            "google_mid": "/g/1tl7m3yh",
            "phone_number": "+918912500079",
            "name": "ABC Hospitals",
            "latitude": 17.706194,
            "longitude": 83.309213,
            "full_address": "Door No.16, ABC Hospitals, 1-13, Coastal Battery Rd, opposite Naval, Srirangapuram, Krishna Nagar, Maharani Peta, Visakhapatnam, Andhra Pradesh 530002, India",
            "review_count": 125,
            "rating": 3.4,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open 24 hours",
            "working_hours": {
              "Wednesday": [
                "Open 24 hours"
              ],
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
              ]
            },
            "website": null,
            "verified": false,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a394310106ab8a9:0xedb733dd49d7e3bd",
            "cid": "17129216733246645181",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJqbhqEBBDOToRvePXSd0zt-0&authuser=0",
            "owner_id": "101730959687686153072",
            "owner_link": "https://maps.google.com/maps/contrib/101730959687686153072",
            "owner_name": "ABC Hospitals",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "General hospital",
            "subtypes": [
              "General hospital",
              "Hospital"
            ],
            "subtype_gcids": [
              "hospital",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "general_hospital",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "potentially_sensitive_entity",
              "public_api_establishment",
              "services"
            ],
            "photos_sample": [
              {
                "photo_id": "CIHM0ogKEICAgICEisD3Ww",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqfc8fJD3EMYO1ahTTZPQ4UDS06g8ComRALnqYhQ4J9o5OsklShJTgWwFYsb56UlwFfuWEiaMIIwJej2TcdvZiMD4XlqOvAXs2MWYOsZcpTqBo9WfNsCzOyh5QoCBWYImcdNiBP",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqfc8fJD3EMYO1ahTTZPQ4UDS06g8ComRALnqYhQ4J9o5OsklShJTgWwFYsb56UlwFfuWEiaMIIwJej2TcdvZiMD4XlqOvAXs2MWYOsZcpTqBo9WfNsCzOyh5QoCBWYImcdNiBP=w1936-h2592-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.706194035596734,
                "longitude": 83.30921301294558,
                "type": "photo",
                "photo_datetime_utc": "2016-06-06T00:00:00.000Z",
                "photo_timestamp": 1465171200
              }
            ],
            "reviews_per_rating": {
              "1": 34,
              "2": 4,
              "3": 15,
              "4": 20,
              "5": 52
            },
            "photo_count": 45,
            "about": {
              "summary": null,
              "details": {
                "Accessibility": {
                  "Wheelchair accessible entrance": true,
                  "Wheelchair accessible parking lot": true
                }
              }
            },
            "address": "Door No.16, 1-13, Coastal Battery Rd, opposite Naval, Srirangapuram, Krishna Nagar, Maharani Peta, Visakhapatnam, Andhra Pradesh 530002, India",
            "order_link": null,
            "price_level": null,
            "district": "Srirangapuram, Krishna Nagar, Maharani Peta",
            "street_address": "Door No.16, 1-13, Coastal Battery Rd, opposite Naval",
            "city": "Visakhapatnam",
            "zipcode": "530002",
            "state": "Andhra Pradesh",
            "country": "IN"
          },
          {
            "business_id": "0x3a395dbdf0a451bd:0x388341c1cdc67202",
            "google_id": "0x3a395dbdf0a451bd:0x388341c1cdc67202",
            "place_id": "ChIJvVGk8L1dOToRAnLGzcFBgzg",
            "google_mid": "/g/11s4tq56v1",
            "phone_number": "+919032937599",
            "name": "Shree Satya Health Centre",
            "latitude": 17.7646259,
            "longitude": 83.3072559,
            "full_address": "Plot Number 9, Shree Satya Health Centre, Health City, Chinna Gadhili, Arilova, Visakhapatnam, Andhra Pradesh 530040, India",
            "review_count": 228,
            "rating": 4.9,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open 24 hours",
            "working_hours": {
              "Wednesday": [
                "Open 24 hours"
              ],
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
              ]
            },
            "website": "http://www.shreesatyahealth.com",
            "tld": "shreesatyahealth.com",
            "verified": true,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a395dbdf0a451bd:0x388341c1cdc67202",
            "cid": "4072170788709888514",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJvVGk8L1dOToRAnLGzcFBgzg&authuser=0",
            "owner_id": "104209581640886402040",
            "owner_link": "https://maps.google.com/maps/contrib/104209581640886402040",
            "owner_name": "Shree Satya Health Centre",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "Hospital",
            "subtypes": [
              "Hospital"
            ],
            "subtype_gcids": [
              "hospital",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "potentially_sensitive_entity",
              "public_api_establishment",
              "services"
            ],
            "photos_sample": [
              {
                "photo_id": "CIHM0ogKEICAgICu3qneZA",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoS9KA74i5rlGqdvCPTbLq17uXpJD_YC48Y4MCilzAqF-cIqRydRMspnKaJQtAuOi7DPujRgAI7YyuAQecSylc0Y_mQ-tNYSIgnEcra-qvDZHMTNCj75-xBGOVMLwwGFNpNCb6w",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoS9KA74i5rlGqdvCPTbLq17uXpJD_YC48Y4MCilzAqF-cIqRydRMspnKaJQtAuOi7DPujRgAI7YyuAQecSylc0Y_mQ-tNYSIgnEcra-qvDZHMTNCj75-xBGOVMLwwGFNpNCb6w=w6000-h4000-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.764625924366676,
                "longitude": 83.30725591367612,
                "type": "photo",
                "photo_datetime_utc": "2022-08-29T00:00:00.000Z",
                "photo_timestamp": 1661731200
              }
            ],
            "reviews_per_rating": {
              "1": 1,
              "2": 0,
              "3": 1,
              "4": 6,
              "5": 220
            },
            "photo_count": 37,
            "about": {
              "summary": null,
              "details": {
                "Accessibility": {
                  "Wheelchair accessible entrance": true,
                  "Wheelchair accessible parking lot": true
                }
              }
            },
            "address": "Plot Number 9, Health City, Chinna Gadhili, Arilova, Visakhapatnam, Andhra Pradesh 530040, India",
            "order_link": null,
            "price_level": null,
            "district": "Chinna Gadhili, Arilova",
            "street_address": "Plot Number 9, Health City",
            "city": "Visakhapatnam",
            "zipcode": "530040",
            "state": "Andhra Pradesh",
            "country": "IN"
          },
          {
            "business_id": "0x3a3968ed11aaded3:0x5fe95f2024c0e6fd",
            "google_id": "0x3a3968ed11aaded3:0x5fe95f2024c0e6fd",
            "place_id": "ChIJ096qEe1oOToR_ebAJCBf6V8",
            "google_mid": "/g/1tf_fv2j",
            "phone_number": "+918913536379",
            "name": "KIMS-ICON Hospital, Vizag",
            "latitude": 17.7144317,
            "longitude": 83.1957044,
            "full_address": "KIMS-ICON Hospital, Vizag, Kim's Icon Hospital Rd, Sheela Nagar, Gajuvaka, Andhra Pradesh 530012, India",
            "review_count": 25825,
            "rating": 4.5,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open 24 hours",
            "working_hours": {
              "Wednesday": [
                "Open 24 hours"
              ],
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
              ]
            },
            "website": "https://www.kimshospitals.com/vizag",
            "tld": "kimshospitals.com",
            "verified": true,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a3968ed11aaded3:0x5fe95f2024c0e6fd",
            "cid": "6911159694836950781",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJ096qEe1oOToR_ebAJCBf6V8&authuser=0",
            "owner_id": "109242044406041523211",
            "owner_link": "https://maps.google.com/maps/contrib/109242044406041523211",
            "owner_name": "KIMS-ICON Hospital, Vizag",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "Private hospital",
            "subtypes": [
              "Private hospital",
              "Doctor"
            ],
            "subtype_gcids": [
              "private_hospital",
              "doctor",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "hospital",
              "potentially_sensitive_entity",
              "practitioner_service_location",
              "public_api_establishment",
              "services"
            ],
            "photos_sample": [
              {
                "photo_id": "CIABIhB0svWwKS4cLO0gbK1jELhq",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepHb7BYkUM-v5Td9-M0cKaHPhM8_IM_Exb_EUYXswXagRRntVeuGvYjIwWIZlSQ2ynj3JCY7O2cWt6H9jg1lHtutJeYsmYZS8uztU1Hr5DBwqQMrAY9CaUTmJRaCXjYafSh-pP_cDo93-E",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepHb7BYkUM-v5Td9-M0cKaHPhM8_IM_Exb_EUYXswXagRRntVeuGvYjIwWIZlSQ2ynj3JCY7O2cWt6H9jg1lHtutJeYsmYZS8uztU1Hr5DBwqQMrAY9CaUTmJRaCXjYafSh-pP_cDo93-E=w4080-h3072-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.7142739,
                "longitude": 83.19537969999999,
                "type": "photo",
                "photo_datetime_utc": "2026-03-18T00:00:00.000Z",
                "photo_timestamp": 1773792000
              }
            ],
            "reviews_per_rating": {
              "1": 739,
              "2": 182,
              "3": 1063,
              "4": 6528,
              "5": 17313
            },
            "photo_count": 614,
            "about": {
              "summary": null,
              "details": {
                "Accessibility": {
                  "Wheelchair accessible entrance": true,
                  "Wheelchair accessible parking lot": true
                }
              }
            },
            "address": "Kim's Icon Hospital Rd, Sheela Nagar, Gajuvaka, Andhra Pradesh 530012, India",
            "order_link": null,
            "price_level": null,
            "district": "Sheela Nagar",
            "street_address": "Kim's Icon Hospital Rd",
            "city": "Gajuvaka",
            "zipcode": "530012",
            "state": "Andhra Pradesh",
            "country": "IN"
          },
          {
            "business_id": "0x3a3943deb8219f29:0x1ec8e7c444237844",
            "google_id": "0x3a3943deb8219f29:0x1ec8e7c444237844",
            "place_id": "ChIJKZ8huN5DOToRRHgjRMTnyB4",
            "google_mid": "/g/11ydr2t1_j",
            "phone_number": "+917799707877",
            "name": "JDS Hospitals",
            "latitude": 17.7381744,
            "longitude": 83.3146184,
            "full_address": "JDS Hospitals, opposite State Bank, Nakkavanipalem, Visakhapatnam, Andhra Pradesh 530013, India",
            "review_count": 187,
            "rating": 4.9,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open 24 hours",
            "working_hours": {
              "Wednesday": [
                "Open 24 hours"
              ],
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
              ]
            },
            "website": "https://jdshospitals.com",
            "tld": "jdshospitals.com",
            "verified": true,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a3943deb8219f29:0x1ec8e7c444237844",
            "cid": "2218277646622750788",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJKZ8huN5DOToRRHgjRMTnyB4&authuser=0",
            "owner_id": "110905921334393257120",
            "owner_link": "https://maps.google.com/maps/contrib/110905921334393257120",
            "owner_name": "JDS Hospitals",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "Hospital",
            "subtypes": [
              "Hospital"
            ],
            "subtype_gcids": [
              "hospital",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "potentially_sensitive_entity",
              "public_api_establishment",
              "services"
            ],
            "photos_sample": [
              {
                "photo_id": "CIABIhAz1AHu8BSWOo9jd0W21cWX",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoB6Ma3wT9O6jmWFtr8BTdc58Z92gr4gOZK1BPd0SrsFp2QgbyEdWSaN8IWkcY6pYdo1bVhtuWUfV3HFGokbX2HepHGmWF5w1Q2a8yK8X_GRDX-iFQ4gNV7GaHDE9A8mFOg1mfjdMsIIY4",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoB6Ma3wT9O6jmWFtr8BTdc58Z92gr4gOZK1BPd0SrsFp2QgbyEdWSaN8IWkcY6pYdo1bVhtuWUfV3HFGokbX2HepHGmWF5w1Q2a8yK8X_GRDX-iFQ4gNV7GaHDE9A8mFOg1mfjdMsIIY4=w1600-h1128-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.7382775,
                "longitude": 83.3145483,
                "type": "photo",
                "photo_datetime_utc": "2025-07-09T00:00:00.000Z",
                "photo_timestamp": 1752019200
              }
            ],
            "reviews_per_rating": {
              "1": 4,
              "2": 0,
              "3": 2,
              "4": 8,
              "5": 173
            },
            "photo_count": 72,
            "about": {
              "summary": null,
              "details": {
                "Accessibility": {
                  "Wheelchair accessible entrance": true,
                  "Wheelchair accessible parking lot": true
                }
              }
            },
            "address": "opposite State Bank, Nakkavanipalem, Visakhapatnam, Andhra Pradesh 530013, India",
            "order_link": null,
            "price_level": null,
            "district": "Nakkavanipalem",
            "street_address": "opposite State Bank",
            "city": "Visakhapatnam",
            "zipcode": "530013",
            "state": "Andhra Pradesh",
            "country": "IN"
          },
          {
            "business_id": "0x3a3943df988c6cb1:0x55f6e61a0ccb5201",
            "google_id": "0x3a3943df988c6cb1:0x55f6e61a0ccb5201",
            "place_id": "ChIJsWyMmN9DOToRAVLLDBrm9lU",
            "google_mid": "/g/11khvy54_r",
            "phone_number": "+918912724777",
            "name": "ANDHRA HOSPITALS - VISAKHAPATNAM",
            "latitude": 17.7084273,
            "longitude": 83.3086184,
            "full_address": "ANDHRA HOSPITALS - VISAKHAPATNAM, 15-14-1/1, near Collector Office, Srirangapuram, Junction, Maharani Peta, Visakhapatnam, Andhra Pradesh 530002, India",
            "review_count": 624,
            "rating": 4.8,
            "timezone": "Asia/Calcutta",
            "opening_status": "Open 24 hours",
            "working_hours": {
              "Wednesday": [
                "Open 24 hours"
              ],
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
              ]
            },
            "website": "http://www.andhrahospitals.org",
            "tld": "andhrahospitals.org",
            "verified": true,
            "place_link": "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x3a3943df988c6cb1:0x55f6e61a0ccb5201",
            "cid": "6194391337052885505",
            "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJsWyMmN9DOToRAVLLDBrm9lU&authuser=0",
            "owner_id": "102751458813223941399",
            "owner_link": "https://maps.google.com/maps/contrib/102751458813223941399",
            "owner_name": "ANDHRA HOSPITALS - VISAKHAPATNAM",
            "booking_link": null,
            "reservations_link": null,
            "business_status": "OPEN",
            "type": "Hospital",
            "subtypes": [
              "Hospital"
            ],
            "subtype_gcids": [
              "hospital",
              "emergency_services",
              "establishment",
              "establishment_poi",
              "feature",
              "health",
              "health_and_beauty",
              "health_care_facility",
              "potentially_sensitive_entity",
              "public_api_establishment",
              "services"
            ],
            "photos_sample": [
              {
                "photo_id": "CIHM0ogKEICAgIDLgerLBA",
                "photo_url": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweraP1MMmc5Q3jwsM8IKRrgeGWSmGgo9FQ1fRPRsyD9vxj7ZJ_01MObS9Lzncwg07Iw-QgAT7qKOVTkwpIzua-QbqgUJG3dkO1zYYLxp9PkwTPn2SrMrsRze-5PyaV3RPyZqJYeD",
                "photo_url_large": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweraP1MMmc5Q3jwsM8IKRrgeGWSmGgo9FQ1fRPRsyD9vxj7ZJ_01MObS9Lzncwg07Iw-QgAT7qKOVTkwpIzua-QbqgUJG3dkO1zYYLxp9PkwTPn2SrMrsRze-5PyaV3RPyZqJYeD=w1256-h949-k-no",
                "video_thumbnail_url": null,
                "latitude": 17.708577299999998,
                "longitude": 83.30861259999999,
                "type": "photo",
                "photo_datetime_utc": "2024-07-28T00:00:00.000Z",
                "photo_timestamp": 1722124800
              }
            ],
            "reviews_per_rating": {
              "1": 13,
              "2": 1,
              "3": 3,
              "4": 59,
              "5": 548
            },
            "photo_count": 222,
            "about": {
              "summary": null,
              "details": {
                "Accessibility": {
                  "Wheelchair accessible entrance": true,
                  "Wheelchair accessible parking lot": true,
                  "Wheelchair accessible restroom": true,
                  "Wheelchair accessible seating": true
                }
              }
            },
            "address": "15-14-1/1, near Collector Office, Srirangapuram, Junction, Maharani Peta, Visakhapatnam, Andhra Pradesh 530002, India",
            "order_link": null,
            "price_level": null,
            "district": "Srirangapuram, Junction, Maharani Peta",
            "street_address": "15-14-1/1, near Collector Office",
            "city": "Visakhapatnam",
            "zipcode": "530002",
            "state": "Andhra Pradesh",
            "country": "IN"
          }
        ]
    const getLocation=()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showLocation);
        }
        else{
            console.log("error fetching coordinates");
           
        }
    }
    const showLocation=(position)=>{
        setCoordinates({lat:position.coords.latitude,lan:position.coords.longitude});
        console.log("coordinates fetched...",coordinates);
        localStorage.setItem("latitude",position.coords.latitude);
        localStorage.setItem("longitude",position.coords.longitude);
    }
    // const getHospitals = async () => {
    //     try {
    //       setLoading(true); // ✅ start loader
    //       const response = await axios.post(
    //         "http://localhost:3000/hospitals/",
    //         coordinates
    //       );
    
    //       setHospitals(response.data.data);
    //     } catch (error) {
    //       console.error("Error fetching hospitals:", error);
    //     } finally {
    //       setLoading(false); // ✅ stop loader
    //     }
    //   };
    
    //   useEffect(() => {
    //     getLocation();
    //   }, []);
    
    //   useEffect(() => {
    //     if (coordinates.lat && coordinates.lan) {
    //       getHospitals();
    //     }
    //   }, [coordinates]);
    
      return (
        <>
          {/* {loading && <Loader />}   */}
    
          <div
            id="hospitallist"
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {data.map((hospital, index) => (
              <Card
                key={index}
                name={hospital.name}
                district={hospital.district}
                rating={hospital.rating}
                url={hospital.photos_sample?.[0]?.photo_url}
                sidebar={props.sidebar}
                mobileno={hospital.phone_number}
                location={hospital.place_link}
                dept={dept}
                hospitalId={hospital.business_id}
              />
            ))}
          </div>
        </>
      );
    };
    
    export default NearbyHos;