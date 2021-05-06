//var eightFire= '哎佰長炒坼侈炊佽徂耷妲沓岱宕到的狄底玓典店耵定咚侗抖妒咄剁佴昉炅昊戽姐咎抉炕昆剌來佬肋例戾兩冽囹呤侶侖旻奈呶妮念弩瘧妾炔乳侍帑弢忝佻帖投罔昕炎佯易找爭政知直制帙炙忠隹卓'
var eightFire = '典定昊旻念昕易'
// var eightEarth='艾坳坳坻坫礬附矸岣岵岬坷岢坤垃峁岷坭爬帕坢坯坪坡坦坨宛往旺委忤岫盱亞奄餚夜依抑佾詠呦侑於盂臾昀狁'
var eightEarth = '亞侑盂昀'

// var sevenFire='犴呈辵呔甙但低弟佃甸玎疔盯豆囤旰灸牢李利良吝伶呂卵免男吶佞弄努求忐忑町廷佟彤吞托佗妥巫妖佁佔志豸住灼姊足'
var sevenFire = '呈廷'
// var sevenEarth='岙岜阪坌辰坊坩均坎坑牡圻岐岍坍禿完位圬氙峴呀岈延冶矣佚役邑吲甬攸卣佑余歟璵址'
var sevenEarth = '辰均圻延佑'

// var tenFire='哧恥翀娖玳耽疸紞島倒娣玷爹瓞凍恫蚪躉耿烘恍疾晉玨倔烤朗烙哩娌倆涼料烈玲瓴凌留旅倫裸耄拿納肭衲孬能娘恧衄哦秦恁朊芮蚋偌曬晌恕朔趿肽唐倘討套特疼屜倜恬甜挑條庭挺徒彖庹挖撾倭烏娭夏畜烜訊迅秧烊窈舀旃展站珍朕肢值秩舯衷塚祝倬笫恣'
var tenFire = '耿晉凌夏展烜'
// var tenEarth='啊唉埃砹鵪俺按案盎敖芺峬城埕砥峨恩砝砩個埂堝砬埒埋砰破埔砌峭竊容埏砷堍砣娓翁唔阢峽軒蚜氬懨胭宴晏氧恙眙酏益殷氤蚓祐迂邘育彧眢員袁砸砟砧肫'
var tenEarth = '埕恩軒晏祐育'

// var sixteenFire='撤陳撐鴟熾儔輳達殫撣憚導道燈諦諜蹀都賭憝噸燉遁踱燔積撅獗賴襤螂撈擂縭璃罹歷璉撩獠燎廩陵遛龍瘺盧陸錄燜撓鯰噥諾遒燃燒燊遂鮐曇糖螗絛陶蹄醍頭暾鴕橐熹曉璇謔焰鴦曄燁燚燠璋瘴臻踵豬撰贅諮髭'
var sixteenFire = '道諦陵龍熹曉曄燁駱'
// var sixteenEarth='噯嬡諳聱螯懊磅壁磣慣衡墾垮磨甌磧牆融壇違謂憮歙遐鴨閹燕噫頤嶧殪陰壅餘豫鴛螈運鄆醞磚'
var sixteenEarth = '衡融頤'

// 中字 8，下字 7/10/16, 五行取 土火
const Evaluation = (name, a, b) => {
    console.log(name)
    var r = new Array(a.length * b.length)
    for (var i = 0; i < r.length; i++) {
        r[i] = new Array(2);
    }

    var count = 0
    var buf = []
    for (let i = 0; i < a.length; i++) {
        var m = a[i]
        for (let j = 0; j < b.length; j++) {
            const l = b[j];
            r[count][0] = m + l
            buf.push(m + l)
            count++
        }
    }

    buf.sort((a, b) => {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
    })

    buf.forEach((e, index) => {
        r[index][1] = e
    });

    r.forEach(element => {
        console.log(element[0], element[1])
    });
}

Evaluation('8火7土', eightFire, sevenEarth)
Evaluation('8土7火', eightEarth, sevenFire)

Evaluation('8火10土', eightFire, tenEarth)
Evaluation('8土10火', eightEarth, tenFire)

Evaluation('8火16土', eightFire, sixteenEarth)
Evaluation('8土16火', eightEarth, sixteenFire)


