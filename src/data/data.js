// const channelFive = "י נשמעות"
//  schema of the data below 
// data = [
// {
//     "id": "id of the Radio category",
//     "channelCategoryName": "name of the Radio category",   
//     "channels": [
//         {
//             "id": "id of the station",
//             "channelName": "name of the station",
//             "link": "link to the url of the station",
//             "image": "path to the first Station image",
//             "secondImage": "path to the second station image",
//             "isLiked": "can be used to set dafault liked Stations by setting it to true",
//             "engName": "theEnglishName",
//             "stationNote": "Notes for each channel goes here" 
        
//         },
//     ]
// }


// ]



const data = [
    {
        "id": "1",
        "channelCategoryName": "רדיו דתי",
        "channels": [
            {
                "id": "a1",
                "channelName": "רדיו קול חי",
                "link": "https://glzwizzlv.bynetcdn.com/glglz_mp3",
                "image": "/images/stations/100fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": true,
                "engName": "Flametv",
                "stationNote": 'Description for channel a'          
            },
            {
                "id": "a2",
                "channelName": "רדיו קול ברמה",
                "link": "https://cdn.cybercdn.live/Galei_Israel/Live/icecast.audio",
                "image": "/images/stations/70s.png",
                "isLiked": true,
                "secondImage": "imageUrl/ imagePath",
                "engName": "TheFireFm",
                "stationNote": "Description for channel b"            },
            {
                "id": "a3",
                "channelName": "ערוץ 7",
                "link": "https://kanliveicy.media.kan.org.il/icy/kan88_mp3",
                "image": "/images/stations/80s.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "vision",
                "stationNote": "Description for channel c"
            },
            {
                "id": "a4",
                "channelName": "כאן מורשת",
                "link": "https://playerservices.streamtheworld.com/api/livestream-redirect/KAN_BET.mp3",
                "image": "/images/stations/91fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": true,
                "engName": "placefm",
                "stationNote": "Description for channel d"            },
            {
                "id": "a5",
                "channelName": "רדיו ברסלב",
                "link": "https://eco01.livecdn.biz/ecolive/99fm/icecast.audio",
                "image": "/images/stations/100fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "sweetfm",
                "stationNote": "Description for channel e"
            },
            {
                "id": "a6",
                "channelName": "רדיו 2000",
                "link": "https://cdn88.mediacast.co.il/102fm-tlv/102fm_aac/icecast.audio",
                "image": "/images/stations/103fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "2000s-fm",
                "stationNote": "Description for channel f"
            },
            {
                "id": "a7",
                "channelName": "רדיו עידן תשובה",
                "link": "https://cdn.cybercdn.live/103FM/Live/icecast.audio",
                "image": "/images/stations/100fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "wake-up-fm",
                "stationNote": "Anoter descritpion"
            },
            {
                "id": "a8",
                "channelName": "רדיו קבלה",
                "link": "https://cdn.cybercdn.live/103FM/Live/icecast.audio",
                "image":"/images/stations/classicfm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": true,
                "engName": "bunchfm",    
                "stationNote": "Notes for each channel goes  he"            },
            {
                "id": "a9",
                "channelName": "הרדיו של מנחם טוקר",
                "link": "https://glzwizzlv.bynetcdn.com/glglz_mp3",
                "image": "/images/stations/eco99fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "smartfm",
                "stationNote": "Notes for each channel goes  he"
            }
        ]

    },
    {
        "id": "2",
        "channelCategoryName": "רדיו אזורי",
        "channels": [
            {
                "id": "b1",
                "channelName": "רדיו דרום",
                "link": "https://player.gl.bynetcdn.com/Redirector/glz/glglz_med/ICE-live",
                "image": "/images/stations/100fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": true,
                "engName": "100FM",
                "stationNote": "Notes for each channel goes  he"            },
            {
                "id": "b2",
                "channelName": "רדיו דרום" ,
                "link": "https://player.gl.bynetcdn.com/Redirector/glz/glglz_med/ICE-live",
                "image": "/images/stations/glgltz.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": true,
                "engName": "glgltz",
                "stationNote": "Notes for each channel goes  he"            },
            {
                "id": "b3",
                "channelName": "רדיו אקו 99FM",
                "link": "https://player.gl.bynetcdn.com/Redirector/glz/glglz_hits/ICE-live",
                "image": "/images/stations/glglz-rock.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "glglz-rock",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "b4",
                "channelName": "רדיוס 100FM",
                "link": "/images/stations/100fm.png",
                "image": "/images/stations/eco99fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": true,
                "engName": "glglz-rock",        
                "stationNote": "Notes for each channel goes  he"            },
            {
                "id": "b5",
                "channelName": "רדיו תל אביב 102FM",
                "link": "url",
                "image": "/images/stations/100fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": true,
                "engName": "glglz-rocks",
                "stationNote": "Notes for each channel goes  he"            },
            {
                "id": "b6",
                "channelName": "רדיו ללא הפסקה 103FM",
                "link": "url",
                "image": "/images/stations/100fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "glglz-rocking",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "b7",
                "channelName": "רדיו ירושלים 101FM",
                "link": "url",
                "image": "/images/stations/100fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": true,
                "engName": "glglz-roc",
                "stationNote": "Notes for each channel goes  he"            },
            {
                "id": "b8",
                "channelName": "רדיו לב המדינה 91FM",
                "link": "url",
                "image": "/images/stations/100fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "100fm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "b9",
                "channelName": "רדיו אמצע הדרך 90FM",
                "link": "url",
                "image": "/images/stations/100fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "90fm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "b10",
                "channelName": "רדיו קול רגע",
                "link": "url",
                "image": "/images/stations/100fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "israel-fm",
                "stationNote": "Notes for each channel goes  he"
            }
        ]
    },
    {
        "id": "3",
        "channelCategoryName": "רדיו ישראלי",
        "channels": [
            {
                "id": "c1",
                "channelName": "גלגלצ",
                "link": "url",
                "image": "/images/stations/100fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": true,
                "engName": "thefm",
                "stationNote": "Notes for each channel goes  he"   
                     },
            {
                "id": "c2",
                "channelName": "כאן 88",
                "link": "url",
                "image": "/images/stations/classicfm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "classicfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "c3",
                "channelName": "גלי ישראל",
                "link": "url",
                "image": "/images/stations/88fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "88fm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "c4",
                "channelName": "כאן ב' (רשת ב')",
                "link": "url",
                "image": "/images/stations/100fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "89fm-real",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "c5",
                "channelName": "גלי צ",
                "link": "url",
                "image": "/images/stations/88fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "realfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "c6",
                "channelName": "כאן קול המוסיקה",
                "link": "url",
                "image": "/images/stations/classicfm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "goodisraelfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "c7",
                "channelName": "כאן תרבות (רשת א')",
                "link": "url",
                "image": "/images/stations/glgltz.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": true,
                "engName": "rock-isreal",
                "stationNote": "Notes for each channel goes  he"            },
            {
                "id": "c8",
                "channelName": "כאן מכאן רדיו בערבית (רשת ד')",
                "link": "url",
                "image": "/images/stations/88fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "israel-rock",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "c9",
                "channelName": "גלגלצ סופשבוע רגוע",
                "link": "url",
                "image": "/images/stations/100fm.png",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "rightfm",
                "stationNote": "Notes for each channel goes  he"
            }
        ]
    },

    {
        "id": "4",
        "channelCategoryName": "רדיו בינלאומי",
        "channels": [
            {
                "id": "d1",
                "channelName": "BBC World Service",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "sunfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "d2",
                "channelName": "VOA (Voice of America)",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "Voicefm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "d3",
                "channelName": "רדיו פראנס בינלאומי (RFI)",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "RFifm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "d4",
                "channelName": "רדיו קול אירופה החופשית",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "themainfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "d5",
                "channelName": "רדיו אסיה החופשית",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "solofm",
                "stationNote": "Notes for each channel goes  he"
            }
        ]
    },
    {
        "id": "5",
        "channelCategoryName": "מוסיקה י נשמעות",
        "channels": [
            {
                "id": "e1",
                "channelName": "רדיו 101FM מוסיקה עולמית",
                "link": "https://glzwizzlv.bynetcdn.com/glglz_mp3",
                "image": "url",
                "secondImage": "imageUrl/ imagePath",            
                "isLiked": false,
                "engName": "urban-israelfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "e2",
                "channelName": "רדיו נוגה י שירים לועזיים",
                "link": "https://cdn.cybercdn.live/Galei_Israel/Live/icecast.audio",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "techfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "e3",
                "channelName": "רדיו להיטים מהעבר",
                "link": "https://kanliveicy.media.kan.org.il/icy/kan88_mp3",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "voguefm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "e4",
                "channelName": "רדיו רוק ישראלי",
                "link": "https://playerservices.streamtheworld.com/api/livestream-redirect/KAN_BET.mp3",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "ruggedfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "e5",
                "channelName": "רדיו ג'אז ומוסיקת נשמה",
                "link": "https://eco01.livecdn.biz/ecolive/99fm/icecast.audio",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "ecofm",
                "stationNote": "Notes for each channel goes  he"
            }
        ]
    },
    {
        "id": "6",
        "channelCategoryName": "חדשות ואקטואליה",
        "channels": [
            {
                "id": "f1",
                "channelName": "כאן חדשות",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "lolfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "f2",
                "channelName": "רשת ב' חדשות",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "tenfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "f3",
                "channelName": "רדיו ישראלי י חדשות עכשיו",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "truthfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "f4",
                "channelName": "רדיו בינלאומי י חדשות עולם",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "seekfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "f5",
                "channelName": "רדיו מקומי י חדשות האזור",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "explorefm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "f6",
                "channelName": "גלגלצ אלטרנטיבי",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "pinkfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "f7",
                "channelName": "רדיו שירי אהבה",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "Radfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "f8",
                "channelName": "רדיו ביטלס",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "Plainfm",
                "stationNote": "Notes for each channel goes  he"
            }
        ]
    },
    {
        "id": "7",
        "channelCategoryName": "רדיו קלאסי",
        "channels": [
            {
                "id": "g1",
                "channelName": "רדיו קלאסיק FM",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "arisefm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "g2",
                "channelName": "רדיו סימפוניה",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "choicefm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "g3",
                "channelName": "רדיו ברוק קלאסי",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "differencefm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "g4",
                "channelName": "רדיו אופרה עולמית",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "unforgettablefm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "g5",
                "channelName": "רדיו מוזיקה עתיקה",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "brunofm",
                "stationNote": "Notes for each channel goes  he"
            }
        ]
    },
    {
        "id": "8",
        "channelCategoryName": "רדיו דת ותרבות",
        "channels": [
            {
                "id": "h1",
                "channelName": "רדיו קול האמונה",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "sportsfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "h2",
                "channelName": "רדיו יהדות עולמית",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "suifm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "h3",
                "channelName": "רדיו תרבות יהודית",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "DefiFm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "h4",
                "channelName": "רדיו סיפור התנ״ך",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "tastefm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "h5",
                "channelName": "רדיו מסורת ישראל",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "Foodiefm",
                "stationNote": "Notes for each channel goes  he"
            }
        ]
    },
    {
        "id": "9",
        "channelCategoryName": "ספורט ומגזין",
        "channels": [
            {
                "id": "i1",
                "channelName": "רדיו ספורט ישראלי",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "all-new-fm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "i2",
                "channelName": "רדיו ספורט עולמי",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "LaHotfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "i3",
                "channelName": "רדיו מגזין טיולים",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "TheBoysfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "i4",
                "channelName": "רדיו תחביבים ותרבות",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "Pwoerfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "i5",
                "channelName": "רדיו בריאות וספורט",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "strengthfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "i6",
                "channelName": "BeatFM",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "unityfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "i7",
                "channelName": "רדיו מהות החיים",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "moviefm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "i8",
                "channelName": "רדיו קול הילדים",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "musicfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "i9",
                "channelName": "רדיו המחירון",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "remafm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "i10",
                "channelName": "רדיו אוממו",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "slowfimusic",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "i11",
                "channelName": "רדיו קול החיות",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "Hipfm",
                "stationNote": "Notes for each channel goes  he"
            }
        ]
        
    },
    {
        "id": 10,
        "channelCategoryName": "רדיו מזרחית",
        "channels": [
            {
                "id": "j1",
                "channelName": "רדיו נושמים מזרחית",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "Sharpfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "j2",
                "channelName": "רדיו שירי דיכאון",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "Hot-spicyfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "j3",
                "channelName": "רדיו מזרחית",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "Idanfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "j4",
                "channelName": "רדיו מנטה",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "Softfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "j5",
                "channelName": "רדיו עידן המזרח",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "Dancefm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "j6",
                "channelName": "רדיו יאסו",
                "link": "url",
                "image": "vibefm",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "theEnglishName",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "j7",
                "channelName": "חגיגה מזרחית",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "Bazefm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "j8",
                "channelName": "רדיו גל",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "afromusic",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "j9",
                "channelName": "רדיו פאן",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "talkfm",
                "stationNote": "Notes for each channel goes  he"
            },
            {
                "id": "j10",
                "channelName": "גלגלצ ים תיכוני",
                "link": "url",
                "image": "imageUrl",
                "secondImage": "imageUrl/ imagePath",
                "isLiked": false,
                "engName": "Completefm",
                "stationNote": "Notes for each channel goes  he"
            }
        ]
        
        
    },
]
export default data;