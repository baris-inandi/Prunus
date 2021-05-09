var jsonObj = JSON.parse(`
{
	"tr": {
		"nav-about": "BİZ KİMİZ?",
		"nav-request": "İSTEYİN, ÜRETELİM",
		"nav-contact": "İLETİŞİM",
		"greet": "PRUNUS'A HOŞGELDİNİZ",
		"about-p1": "Prunus, Ocak 2008’de 34 ortakla kurulmuş bir anonim şirket. Ege bölgesinde tarımsal üretim amacıyla kurulan şirket, organik meyve - sebze yetiştiriyor ve Türkiye çapında satıyor. Şirketin merkezi İstanbul'da. Tarımsal faaliyet ise Manisa ilinin Gördes ilçesinde yürütülüyor. Prunus'un yegane faaliyet alanı, meyve- sebze üretimi ve pazarlaması.",
		"about-p2": "Şirketin başta badem, ceviz, ayva olmak üzere meyve yetiştiriciliği yatırımları bulunuyor. Prunus, aynı zamanda genç yaştaki meyve ağaçlarının arasında çok çeşitli tek yıllık meyve ve sebze üreterek pazara sunuyor. İletişim sayfasındaki irtibat bilgilerinden bize ulaşabilirsiniz.",
		"request-p1": "Prunus olarak, tarım gibi doğası gereği uzun vadeli bir sektörde ancak uzun vadeli sağlam ilişkilerle iş yapılabileceğine inanıyoruz. Bu yüzden, ciddi meyve - sebze alıcıları ile uzun vadeli çalışmaya çok sıcak bakıyoruz.",
		"request-p2": "Şimdiden önümüzdeki yılların alımlarını planlıyor ve yüklü miktarda meyve - sebze alımı yapıyorsanız görüşelim. Biz satış güvencesiyle üretime odaklanalım, ürün tam sizin istediğiniz şekilde üretilsin. İrtibat bilgilerini aşağıda bulabilirsiniz.",
		"address": "\
        Söğütlüçeşme Caddesi<br>\
        No: 82/402<br>\
        Kadıköy 34714,<br>\
        İstanbul",
		"about-title": "BİZ KİMİZ?",
		"request-title": "İSTEYİN, ÜRETELİM",
		"contact-title-top": "İLETİŞİM",
		"contact-title": "İLETİŞİM",
		"hq-title": "MERKEZ",
        "footer-text": "\
        PRUNUS TARIM YATIRIMLARI SAN. ve TİC. A.Ş, 2021 | Websitesi:\
        <a target='_blank' rel='noopener noreferrer' href='https://github.com/baris-inandi/'>@baris-inandi</a>",
        "footer-text-mobile": "\
        PRUNUS TARIM YATIRIMLARI SAN. ve TİC. A.Ş, 2021\
        <p class='baris-inandi'>\
        Websitesi: <a target='_blank' rel='noopener noreferrer'\
        href='https://github.com/baris-inandi/'>@baris-inandi</a>\
        </p>"
	},
	"en": {
		"nav-about": "ABOUT US",
		"nav-request": "YOU REQUEST, WE PRODUCE",
		"nav-contact": "CONTACT US",
		"greet": "WELCOME TO PRUNUS",
		"about-p1": "Prunus was founded in January 2008 for vegetable and fruit production in the Aegean Region of Turkey. The headquarters are in Istanbul and all production takes place in Gördes, Manisa.",
		"about-p2": "The company's sole activity is production and marketing of fruits and vegetables. We have long term investments in almond, walnut and quince production.",
		"request-p1": "Prunus is very keen to create long term relationships with serious fruit and vegetable buyers worldwide. If you plan your wholesale purchases at least one season ahead, let's get in touch.",
		"request-p2": "We will grow your order the way you prefer. Please see the Contact Us section below for contact information.",
		"address": "\
        Söğütlüçeşme Street<br>\
        No: 82/402<br>\
        Kadıköy 34714,<br>\
        Istanbul",
		"about-title": "ABOUT US",
		"request-title": "YOU REQUEST, WE PRODUCE",
		"contact-title-top": "CONTACT US",
		"contact-title": "CONTACT US",
		"hq-title": "PRUNUS HQ",
        "footer-text": "\
        PRUNUS TARIM YATIRIMLARI SAN. ve TİC. A.Ş, 2021 | Website:\
        <a target='_blank' rel='noopener noreferrer' href='https://github.com/baris-inandi/'>@baris-inandi</a>",
        "footer-text-mobile": "\
        PRUNUS TARIM YATIRIMLARI SAN. ve TİC. A.Ş, 2021\
        <p class='baris-inandi'>\
        Website: <a target='_blank' rel='noopener noreferrer'\
        href='https://github.com/baris-inandi/'>@baris-inandi</a>\
        </p>"
	}
}
`);
var ids = [
    "nav-about",
    "nav-request",
    "nav-contact",
    "greet",
    "about-p1",
    "about-p2",
    "request-p1",
    "request-p2",
    "address",
    "about-title",
    "request-title",
    "contact-title-top",
    "contact-title",
    "hq-title",
    "footer-text",
    "footer-text-mobile"
];

function changeContentLang(lang) {
    for (var i = 0; i < ids.length; i++) {
        var currentID = (ids[i]);
        document.getElementById(String(currentID)).innerHTML = (jsonObj[lang][String(currentID)]);
    }
    localStorage.setItem('lang', lang);
}

window.addEventListener('load', (event) => {
    if (localStorage.getItem('lang') === 'en') {
        changeContentLang("en", ids, jsonObj);
    } else {
        localStorage.setItem('lang', "tr");
        changeContentLang("tr", ids, jsonObj);
    }
});