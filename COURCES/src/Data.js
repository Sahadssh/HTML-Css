const data = [
    {
      id: 1,
      name: "Development",
      Category: "Development",
      info: "Learn programming languages, web development, app development, and software engineering from beginner to advanced levels.",
      image: "https://yandex.com/images/search?p=1&text=Devloment&pos=0&rpt=simage&img_url=https%3A%2F%2Fwww.imf.org%2F-%2Fmedia%2FImages%2FIMF%2FAbout%2FFactsheets%2F2022%2Fcd-images-03.ashx&lr=10571",
      price: 2999
    },
    {
      id: 2,
      name: "Business",
      Category: "Business",
      info: "Master entrepreneurship, finance, marketing, and business strategy to grow your startup or corporate career.",
      image: "https://yandex.com/images/search?pos=23&img_url=https%3A%2F%2Fmspvolga.ru%2Fnetcat_files%2F13%2F26%2Frazmeschenie_10.jpg&text=Business&rpt=simage&lr=10571",
      price: 3499
    },
    {
      id: 3,
      name: "Design",
      Category: "Design",
      info: "Explore UI/UX design, graphic design, branding, and creative tools like Photoshop, Figma, and Illustrator.",
      image: "https://yandex.com/images/search?pos=2&img_url=https%3A%2F%2Fi3.wp.com%2Favatars.mds.yandex.net%2Fget-altay%2F9663145%2F2a00000189e669eaa254042af3a471590a9c%2Forig%3Fssl%3D1&text=Design&rpt=simage&lr=10571",
      price: 2799
    },
    {
      id: 4,
      name: "Lifestyle",
      Category: "Lifestyle",
      info: "Improve your personal development, productivity, health, and wellness through expert-led courses.",
      image: "https://i.ytimg.com/vi/TYzafWg5eVo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgTyhGMA8=&rs=AOn4CLCs0ddAAoPmv88a_ok1WyJdLjzEXA",
      price: 1999
    },
    {
      id: 5,
      name: "Photography",
      Category: "Design",
      info: "Master the art of photography, including DSLR techniques, editing, and storytelling through visuals.",
      image: "https://yandex.com/images/search?p=1&text=Photography&pos=1&rpt=simage&img_url=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2F2%2F9%2Fa%2F700236-top-camera-wallpapers-2048x1214-cell-phone.jpg&lr=10571",
      price: 2599
    },
    {
      id: 6,
      name: "Marketing",
       Category: "Business",
      info: "Learn digital marketing, SEO, social media strategies, and branding to grow businesses online.",
      image: "https://yandex.com/images/search?pos=12&img_url=https%3A%2F%2Fxn----8sbedibbx1djfkj.xn--p1ai%2Fwp-content%2Fuploads%2F2021%2F03%2Fmarketing-starter-csomagok-header-img.png&text=Marketing&rpt=simage&lr=10571",
      price: 3199
    },
    {
      id: 7,
      name: "Personal Development",
      Category: "Business",
      info: "Enhance your soft skills, confidence, public speaking, and leadership abilities.",
      image: "https://yandex.com/images/search?p=1&text=Personal+Development&pos=8&rpt=simage&img_url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F5f%2F56%2F6f%2F5f566f5d2094400c35d6d2eb63a38434.jpg&lr=10571",
      price: 2799
    },
    {
      id: 8,
      name: "Music",
      Category: "Lifestyle",
      info: "Learn musical instruments, music production, and songwriting from experienced professionals.",
      image: "https://yandex.com/images/search?pos=3&img_url=https%3A%2F%2Ffsd.multiurok.ru%2Fhtml%2F2019%2F01%2F24%2Fs_5c4a1b6fb95d5%2F1064063_4.jpeg&text=music&rpt=simage&lr=10571",
      price: 2499
    },
    {
      id: 9,
      name: "Health & Fitness",
      Category: "Lifestyle",
      info: "Stay fit with courses on yoga, bodybuilding, nutrition, and mental wellness.",
      image: "https://yandex.com/images/search?pos=10&img_url=https%3A%2F%2Fst2.depositphotos.com%2F1144687%2F9520%2Fi%2F950%2Fdepositphotos_95206624-stock-photo-hand-put-coins.jpg&text=Finance+%26+Investing&rpt=simage&lr=10571",
      price: 1999
    },
    {
      id: 10,
      name: "Finance & Investing",
      Category: "Business",
      info: "Learn financial management, stock trading, cryptocurrency, and wealth building.",
      image: "https://yandex.com/images/search?pos=10&img_url=https%3A%2F%2Fst2.depositphotos.com%2F1144687%2F9520%2Fi%2F950%2Fdepositphotos_95206624-stock-photo-hand-put-coins.jpg&text=Finance+%26+Investing&rpt=simage&lr=10571",
      price: 3499
    },
    {
      id: 11,
      name: "Writing & Content Creation",
      Category: "Design",
      info: "Master creative writing, copywriting, blogging, and content marketing.",
      image: "https://yandex.com/images/search?pos=0&img_url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFKkR3yEaIAAsehX.jpg&text=Writing+%26+Content+Creation&rpt=simage&lr=10571",
      price: 2299
    },
    {
      id: 12,
      name: "Video Editing",
      Category: "Design",
      info: "Learn video editing with tools like Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve.",
      image: "https://yandex.com/images/search?p=1&text=video+editing&pos=0&rpt=simage&img_url=https%3A%2F%2Fdslrvideoshooter.com%2Fwp-content%2Fuploads%2F2017%2F10%2Fdell-4k-review-wp.jpg&lr=10571",
      price: 2899
    },
    {
      id: 13,
      name: "Artificial Intelligence",
      Category: "Development",
      info: "Dive into AI, machine learning, and deep learning with hands-on projects.",
      image: "https://yandex.com/images/search?pos=2&img_url=https%3A%2F%2F3.bp.blogspot.com%2F-GgbZGapjxqQ%2FVmazodnCzQI%2FAAAAAAAAA8w%2F5m6Jxg11ma0%2Fs1600%2Fdata%252Bscience.png&text=data+science&rpt=simage&lr=10571",
      price: 3999
    },
    {
      id: 14,
      name: "Cybersecurity",
      Category: "Development",
      info: "Learn ethical hacking, penetration testing, and cybersecurity fundamentals.",
      image: "https://yandex.com/images/search?pos=2&img_url=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEhA_p8ZMS6huURSxwJ91ti9UlLYP6QNnh0b3n2KWPBCZ8ugOliY0VCnDS82OJKe9J98AgZATaLayqiU-X27TWjU7xE_DNHC-JW7r-sBt72DxclcCj33-4czpNTMcQ1HIGnmTC39BlwZfl277MPcDBjBPR5IV97HPIcj_AS2dOOuQtTN6ImPnediqTMs59A%2Fs3840%2FMac%2520OS%2520Sonoma%2520%283%29.jpg&text=cyber+security+wallpaper&rpt=simage&lr=10571",
      price: 3799
    },
    {
      id: 15,
      name: "Game Development",
      Category: "Development",
      info: "Create your own video games with Unity, Unreal Engine, and C#.",
      image: "https://yandex.com/images/search?pos=3&img_url=https%3A%2F%2Fwww.articlestheme.com%2Fwp-content%2Fuploads%2F2022%2F02%2Fvideo-game.png&text=game+devlopment&rpt=simage&lr=10571",
      price: 3499
    },
    {
      id: 16,
      name: "Cooking & Baking",
      Category: "Lifestyle",
      info: "Master the art of cooking, baking, and gourmet recipes from top chefs.",
      image: "https://yandex.com/images/search?pos=23&img_url=https%3A%2F%2Flifepage2016.s3-ap-southeast-1.amazonaws.com%2Fpages%2F20180119-0004%2F20180119-0004.JPG&text=cooking+%26+baking&rpt=simage&lr=10571",
      price: 1899
    }
];

export default data;
// npx json-server --watch data.js --port 5000
