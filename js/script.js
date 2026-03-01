const provincesData = [
    { name: "北京", content: "<h3>拜年、祭祖、庙会</h3><p>初一走亲访友，初二回娘家。</br>部分家庭保留除夕下午或晚上祭祖的习俗。</br>地坛、龙潭湖等地举办传统庙会，集民俗表演、小吃、工艺品展销于一体。</p>" },
    { name: "天津", content: "<h3>吊钱、素饺子、逛娘娘宫</h3><p>腊月二十九贴吊钱窗花，寓意财源滚滚。</br>初一绝大多数人家吃素馅饺子，寓意一年素净平安。</br>春节期间去天后宫（娘娘宫）祈福，求子求平安。</p>" },
    { name: "河北", content: "<h3>井陉拉花、武强年画、邯郸踩岁</h3><p>石家庄井陉地区有拉花民间艺术表演。</br>贴武强年画，题材多为吉祥如意。</br>邯郸地区除夕夜铺芝麻秆踩碎，寓意“踩岁（碎）”平安。</p>" },
    { name: "山西", content: "<h3>旺火、社火、平遥古城</h3><p>晋中等地除夕垒旺火（煤块塔状点燃），火苗越高越吉利。</br>初一至十五农村组织高跷、旱船、舞龙等社火表演。</br>平遥古城张灯结彩，举办“平遥中国年”活动。</p>" },
    { name: "内蒙古", content: "<h3>祭火、拜年、手把肉</h3><p>蒙古族腊月二十三或二十四举行祭火仪式，供奉羊胸叉。</br>初一早晨晚辈手捧哈达向长辈敬酒磕头拜年。</br>春节期间餐桌上必有手把羊肉，体现游牧文化。</p>" },
    { name: "辽宁", content: "<h3>杀年猪、点长寿灯、扭秧歌</h3><p>农村腊月杀年猪，吃杀猪菜宴请邻里。</br>大年三十至正月十五挂红灯笼，除夕夜通宵不灭。</br>春节期间城乡各地组织秧歌队巡演。</p>" },
    { name: "吉林", content: "<h3>冰灯雪雕、冻梨冻柿子、滑雪</h3><p>长春、吉林等地举办大型冰雕雪雕展。</br>年夜饭后吃冻梨冻柿子，解腻爽口。</br>越来越多家庭选择春节期间去滑雪场度假。</p>" },
    { name: "黑龙江", content: "<h3>冰雪大世界、冬捕、包饺子</h3><p>哈尔滨冰雪大世界春节期间游客如织。</br>在镜泊湖等地观看或参与冬季捕鱼，吃头鱼宴。</br>除夕夜全家包饺子，包入硬币糖块讨彩头。</p>" },
    { name: "上海", content: "<h3>烧头香、逛城隍庙、吃汤圆</h3><p>除夕夜去龙华寺、玉佛寺争烧头香撞钟祈福。</br>豫园举办新春灯会，赏灯猜谜。</br>初一早上吃汤圆，寓意团圆美满。</p>" },
    { name: "江苏", content: "<h3>寒山寺听钟、秦淮灯会、泰伯庙会</h3><p>苏州除夕夜去寒山寺聆听108响钟声消除烦恼。</br>南京正月初一至十八夫子庙举办大型灯会。</br>无锡正月初九泰伯庙会，有巡游民俗表演。</p>" },
    { name: "浙江", content: "<h3>长街宴、祝福、烧头香</h3><p>乌镇除夕夜举办长街宴，四方邻里同吃年夜饭。</br>绍兴腊月二十四前后举行“祝福”大典祭神祭祖。</br>杭州除夕夜灵隐寺香火鼎盛。</p>" },
    { name: "安徽", content: "<h3>打食桃、傩舞、逛花戏楼</h3><p>黟县歙县春节前制作米馃印上吉祥图案。</br>皖南部分乡村保留傩舞表演驱邪祈福。</br>亳州春节期间去花戏楼看地方戏曲表演。</p>" },
    { name: "福建", content: "<h3>游神、围炉、跳火群</h3><p>福州莆田村庄抬神像巡游祈求风调雨顺。</br>除夕夜全家围坐吃火锅，鱼丸象征团圆。</br>闽南部分地区除夕夜跳过火堆驱邪避灾。</p>" },
    { name: "江西", content: "<h3>万寿宫进香、抬阁、采茶戏</h3><p>南昌正月初一去万寿宫进香祈福。</br>婺源元宵节前后抬阁巡游，儿童扮戏曲人物。</br>赣南春节期间乡村常演采茶戏增添喜庆。</p>" },
    { name: "山东", content: "<h3>孔府过大年、花饽饽、磕头</h3><p>曲阜孔府举行春联门神张贴仪式和传统祭祀。</br>胶东地区制作造型各异的花饽饽用于祭祀食用。</br>鲁西南部分地区仍保留给长辈磕头拜年习俗。</p>" },
    { name: "河南", content: "<h3>太昊陵庙会、地坑院、灯会</h3><p>淮阳太昊陵正月初一至二月二庙会祭拜人祖伏羲。</br>陕州地坑院有剪窗花捶草画等传统年味活动。</br>安阳春节期间举办传统灯展。</p>" },
    { name: "湖北", content: "<h3>归元寺数罗汉、挑灯笼、祭祖</h3><p>武汉正月初一至初五去归元寺数罗汉卜吉凶。</br>荆州除夕夜长辈给孩子们点红灯笼照遍全家。</br>孝感作为孝文化之乡，春节期间祭祖隆重。</p>" },
    { name: "湖南", content: "<h3>湘西赶年、火宫殿庙会、抬故事</h3><p>湘西土家族过“赶年”比汉族提前一天。</br>长沙火宫殿春节期间举办小吃庙会戏曲表演。</br>岳阳地区抬阁巡游表演传统故事。</p>" },
    { name: "广东", content: "<h3>行花街、派利是、开年</h3><p>广州佛山腊月二十八起办花市买金桔桃花。</br>已婚人士给未婚人士发红包，金额不大重在祝福。</br>初二“开年”吃开年饭，必备生菜烧肉意头菜。</p>" },
    { name: "广西", content: "<h3>汲新水、舞春牛、长鼓舞</h3><p>壮族大年初一凌晨到河边打新水，最先打回的象征好运。</br>桂北地区春节期间舞春牛唱春牛歌祈求丰收。</br>瑶族村寨跳长鼓舞庆祝新年。</p>" },
    { name: "海南", content: "<h3>祭祖、吃斋菜煲、换花节</h3><p>除夕下午开始焚香点烛供上“斋菜煲”祭祖。</br>大年初一吃素菜火锅寓意清净吉祥。</br>海口府城元宵节举办换花节，青年男女互换鲜花。</p>" },
    { name: "重庆", content: "<h3>吃火锅、走人户、赏灯</h3><p>年夜饭或春节期间亲友团聚常选择热气腾腾的火锅。</br>初二开始“走人户”串门拜年。</br>在洪崖洞南滨路观赏城市夜景和春节灯饰。</p>" },
    { name: "四川", content: "<h3>逛灯会、吃腊肉香肠、游喜神方</h3><p>自贡灯会成都武侯祠大庙会赏花灯看表演。</br>腊月制作的腊肉香肠是春节期间主要肉食。</br>成都人初一去武侯祠拜喜神摸福字求好运。</p>" },
    { name: "贵州", content: "<h3>跳芦笙、唱大歌、地戏</h3><p>黔东南苗寨正月初二后跳芦笙踩铜鼓。</br>侗族村寨春节期间举行大歌对唱。</br>安顺屯堡人演出地戏驱邪纳吉。</p>" },
    { name: "云南", content: "<h3>接本主、跳菜、象脚鼓</h3><p>大理白族正月初接本主（村寨保护神）回村过节。</br>南涧彝族春节期间表演跳菜舞，上菜过程即舞蹈。</br>西双版纳傣族敲象脚鼓跳孔雀舞庆祝。</p>" },
    { name: "西藏", content: "<h3>古突、驱鬼、拜年</h3><p>藏历腊月二十九吃“古突”面疙瘩包有象征物品。</br>除夕夜举行“驱鬼”仪式点燃火把赶出鬼怪。</br>初一清晨背“吉祥水”后挨家拜年互敬“切玛”。</p>" },
    { name: "陕西", content: "<h3>打醋炭、社火、转九曲</h3><p>除夕夜将烧红炭放入醋中，蒸汽熏房间杀菌驱邪。</br>关中地区正月里办社火踩高跷芯子旱船。</br>陕北正月十五摆九曲黄河阵灯会，绕灯阵求平安。</p>" },
    { name: "甘肃", content: "<h3>兰州社火、伏羲庙会、河西宝卷</h3><p>兰州周边县区社火表演有太平鼓舞狮等。</br>天水正月初一至十五伏羲庙举办庙会祭祀人文始祖。</br>河西走廊农村春节期间念唱宝卷劝人向善。</p>" },
    { name: "青海", content: "<h3>酥油花展、社火、轮子秋</h3><p>正月十五塔尔寺举办酥油花展展出精美酥油花。</br>河湟地区农村组织社火队走村串户表演。</br>互助土族在春节期间玩轮子秋载歌载舞。</p>" },
    { name: "宁夏", content: "<h3>社火、赶集、滑雪</h3><p>银川及各县区农村社火表演包括高跷旱船秧歌。</br>年前最后几个大集购置年货热闹非凡。</br>年轻人选择春节期间去六盘山滑雪场体验冰雪运动。</p>" },
    { name: "新疆", content: "<h3>汉族社火、赛马、巴扎</h3><p>乌鲁木齐昌吉汉族聚居区办社火有舞龙腰鼓。</br>哈萨克族春节期间举行赛马叼羊活动。</br>维吾尔族春节前后赶巴扎购买干果工艺品。</p>" },
    { name: "台湾", content: "<h3>尾牙、围炉、拜天公</h3><p>腊月十六公司行号宴请员工吃“尾牙宴”抽奖。</br>除夕夜全家围坐吃火锅，鱼丸象征团圆。</br>正月初九凌晨祭拜天公（玉皇大帝）。</p>" },
    { name: "香港", content: "<h3>年宵花市、上头炷香、车公诞</h3><p>腊月二十四至除夕维园举办年宵花市买桃花水仙。</br>除夕夜市民去黄大仙祠争上头炷香。</br>正月初二车公诞去车公庙转风车打鼓求好运。</p>" },
    { name: "澳门", content: "<h3>妈阁庙祈福、舞龙巡游、花车巡游</h3><p>除夕夜及大年初一去妈阁庙上香祈福。</br>大三巴牌坊等地举办舞龙舞狮巡游。</br>农历新年期间举办花车巡游汇演增添气氛。</p>" }
];

// DOM 元素
const container = document.getElementById('provinceList');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('detailModal');
const modalProvinceName = document.getElementById('modalProvinceName');
const modalProvinceContent = document.getElementById('modalProvinceContent');
const closeBtn = document.getElementById('closeModalBtn');

// 渲染省份网格
function renderProvinceList(filterText = '') {
    const keyword = filterText.trim().toLowerCase();
    const filtered = keyword === '' ? provincesData : provincesData.filter(p => p.name.toLowerCase().includes(keyword));

    if (filtered.length === 0) {
        container.innerHTML = `<div class="no-result">🏮 没有找到「${filterText}」，换个关键词试试~ 🏮</div>`;
        return;
    }

    let htmlStr = '';
    filtered.forEach(prov => {
        htmlStr += `<div class="province-card" data-name="${prov.name}">${prov.name}</div>`;
    });
    container.innerHTML = htmlStr;

    // 为每个卡片绑定点击事件
    document.querySelectorAll('.province-card').forEach(card => {
        card.addEventListener('click', () => {
            const provinceName = card.getAttribute('data-name');
            const province = provincesData.find(p => p.name === provinceName);
            if (province) {
                modalProvinceName.innerText = province.name;
                modalProvinceContent.innerHTML = province.content;
                modal.classList.add('show');
            }
        });
    });
}

// 搜索实时过滤
searchInput.addEventListener('input', (e) => {
    renderProvinceList(e.target.value);
});

// 关闭模态框
function closeModal() {
    modal.classList.remove('show');
}

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ESC 键关闭
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// 初始化渲染
renderProvinceList();