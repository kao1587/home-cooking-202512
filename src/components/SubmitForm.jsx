import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import styles from '../styles/SubmitForm.module.css';

const kikkomanProducts = {
    // soy sauce products
    "醤油": ["和心食研 いつでも新鮮 国産しょうゆ", "和心食研 いつでも新鮮 特選有機しょうゆ", "和心食研 いつでも新鮮 しぼりたて生しょうゆ", "和心食研 しょうゆ", "和心食研 いつでも新鮮 こく旨リッチ 特選 丸大豆しょうゆ", "和心食研 特選 丸大豆しょうゆ", "和心食研 減塩しょうゆ", "和心食研 いつでも新鮮 味わいリッチ減塩しょうゆ", "和心食研 特選有機しょうゆ", "和心食研 いつでも新鮮 九州うまくち まろやかしょうゆ", "和心食研 いつでも新鮮 削りたてかつお節香る だししょうゆ", "和心食研 いつでも新鮮 塩分ひかえめ丸大豆生しょうゆ", "和心食研 いつでも新鮮 おさしみ生しょうゆ 卓上ボトル", "和心食研 いつでも新鮮 しぼりたてうすくち生しょうゆ", "和心食研 いつでも新鮮 超特選 極旨しょうゆ", "和心食研 まろやか丸大豆 しょうゆ", "和心食研 特選 丸大豆減塩しょうゆ", "和心食研 いつでも新鮮 特選 丸大豆減塩しょうゆ", "和心食研 いつでも新鮮 超減塩しょうゆ 食塩分66%カット", "和心食研 うすくちしょうゆ", "和心食研 いつでも新鮮 超特選 九州あまくちさしみしょうゆ", "和心食研 いつでも新鮮 旨み広がる だししょうゆ", "和心食研 いつでも新鮮 旨み豊かな 昆布だししょうゆ", "和心食研 いつでも新鮮 旨みあふれる 牡蠣だししょうゆ", "和心食研 いつでも新鮮 あまうまいだししょうゆ", "和心食研 だししょうゆ こい色しょうゆ仕立て", "和心食研 北海道産真昆布しょうゆ 塩分カット", "和心食研 サクサクしょうゆ", "和心食研 いつでも新鮮 えんどうまめしょうゆ"],
    // mirin and cooking sake products
    "みりん・料理酒": ["マンジョウ 本みりん", "マンジョウ 国産米 濃厚熟成 本みりん", "マンジョウ 米麹こだわり仕込み 本みりん", "マンジョウ お米だけのあまさの本みりん", "和心食研 清酒風料理酒 （発酵調味料）", "マンジョウ 国産米こだわり仕込み 料理の清酒"],
    // tsuyu, ponzu, dashi products
    "つゆ・ぽんず・だし": ["和心食研 芯からぽっと 参鶏湯", "和心食研 芯からぽっと 麻辣火鍋", "和心食研 芯からぽっと 生姜みぞれ鍋", "和心食研 濃厚豆乳鍋 コク旨鶏白湯", "和心食研 濃厚豆乳鍋 旨辛キムチ", "和心食研 基本のおかずつゆ", "和心食研 濃いだし 本つゆ", "和心食研 だし重ね 本つゆ 塩分40%カット", "和心食研 旨みひろがる 香り白だし", "和心食研 めんみ （北海道限定）", "和心食研 いつでも新鮮 だし贅沢めんみ （北海道限定）", "和心食研 いつでも新鮮 料理人直伝 極み白だし", "和心食研 香る一番だし そうめんつゆ （夏季限定）", "和心食研 香る一番だし ざるそばつゆ", "和心食研 具麺 揚げなすおろしぶっかけ （夏季限定）", "和心食研 具麺 牛だし肉ぶっかけ", "和心食研 具麺 柚子鬼おろし（夏季限定）", "和心食研 具麺 博多明太子うどん", "和心食研 具麺 ツナトマトサラダそうめん（夏季限定）", "和心食研 具麺 ザクザクナッツごまだれ", "和心食研 柚子の香り ゆずか", "和心食研 しぼりたて生ぽんず", "和心食研 鰹だし清澄", "和心食研 昆布だし清澄"],
    // tare products
    "たれ": ["和心食研 クセになる 豚脂にんにく醤油だれ", "和心食研 クセになる ガーリックバター醤油だれ", "和心食研 粗おろし生姜たっぷり 生姜焼のたれ", "和心食研 てりやきのたれ", "和心食研 わが家は焼肉屋さん 甘口", "和心食研 わが家は焼肉屋さん 中辛", "和心食研 わが家は焼肉屋さん 旨辛", "和心食研 わが家は焼肉屋さん 濃厚だれ", "和心食研 わが家は焼肉屋さん 焦がしにんにく", "和心食研 わが家は焼肉屋さん 香味野菜たっぷり 塩だれ", "和心食研 わが家は焼肉屋さん すりたておろししょうゆ", "和心食研 わが家は焼肉屋さん 贅沢果実", "和心食研 超 焼肉のたれ 甘口", "和心食研 超 焼肉のたれ 中辛", "和心食研 超 生姜焼のたれ", "和心食研 超 おろしのたれ", "和心食研 クセになる 辛旨ラー醤だれ", "和心食研 ステーキしょうゆ にんにく風味", "和心食研 ステーキしょうゆ あらびきおろし", "和心食研 ステーキしょうゆ オニオン＆ガーリック", "和心食研 わが家はすき焼屋さん 熟成仕込割下"],
    // other products
    "ヒゲタしょうゆ・加工調味料": ["ヒゲタ 本膳", "ヒゲタ 本膳生", "ヒゲタ 減塩しょうゆ本膳", "ヒゲタ こいくちしょうゆ", "ヒゲタ 本膳つゆ", "ヒゲタ 江戸老舗 秘伝の蕎麦露", "ヒゲタ 江戸涼味 秘伝の素麺露", "ヒゲタ 特選つゆ", "ヒゲタ しじみ醤油", "ヒゲタ たまごかけご飯にどうぞ！"],
    // wafu
    "和風料理の素・うちのごはん": ["和心食研 うちのごはん 白菜とねぎのみぞれ炒め", "和心食研 うちのごはん 大根ともやしのバター醤油", "和心食研 うちのごはん 豚白菜の牡蠣だし醤油", "和心食研 うちのごはん 豆腐とろけるごま麻婆", "和心食研 うちのごはん スパイシー黒胡椒ふっくらチキン", "和心食研 うちのごはん てりたまチキン", "和心食研 うちのごはん 鮭ごはん", "和心食研 うちのごはん すきやき肉豆腐", "和心食研 うちのごはん 白菜のうま煮", "和心食研 うちのごはん キャベツのごま味噌炒め", "和心食研 うちのごはん 和風オムレツ", "和心食研 うちのごはん なすの肉みそ炒め", "和心食研 うちのごはん なすのみぞれ炒め", "和心食研 うちのごはん もやしのにんにく醤油炒め", "和心食研 うちのごはん 厚揚げのみぞれ煮", "和心食研 うちのごはん ジャーマンポテト", "和心食研 うちのごはん キャベツのガリバタ醤油炒め", "和心食研 うちのごはん 豚大根のてりうま炒め", "和心食研 うちのごはん 鶏キャベツのてりマヨ炒め", "和心食研 うちのごはん 豚バラもやしのごま担々", "和心食研 うちのごはん 豚と厚揚げの甘辛ガーリック", "和心食研 うちのごはん 豚バラなすの焦がしガーリック", "和心食研 うちのごはん 豚バラピーマン甘辛しょうゆ", "和心食研 うちのごはん 豚大根の旨辛煮", "和心食研 うちのごはん なすとピーマンの香味しょうゆ", "和心食研 うちのごはん ブロッコリーとキャベツの塩ガーリック", "和心食研 うちのごはん 香味ねぎだれふっくらチキン", "和心食研 うちのごはん コク旨トマトふっくらチキン", "和心食研 うちのごはん やみつきガーリックふっくらチキン", "和心食研 うちのごはん じゃがチキン のりバター醤油", "和心食研 うちのごはん 鶏なすタンドリー", "和心食研 うちのごはん トマトチキン 香ばしガーリック", "和心食研 うちのごはん 豚じゃが ガーリック醤油", "和心食研 うちのごはん 五目ごはん 旨だし仕立て", "和心食研 うちのごはん とうもろこしごはん", "和心食研 うちのごはん ビビンバ コチュジャンとごま油の風味", "和心食研 うちのごはん 牛ガーリック飯", "和心食研 うちのごはん 焼豚めし やみつき甘辛味", "和心食研 うちのごはん 鶏ごぼう"],
    // onigiri rich
    "おにぎリッチ": ["おにぎリッチ　焼肉味", "おにぎリッチ　きんぴらそぼろ", "おにぎリッチ　チャーシュー味"],
    // soy milk noodles products
    "大豆麺": ["和心食研 大豆麺 細麺 2人前", "和心食研 大豆麺 平麺 2人前", "和心食研 大豆麺 中華そば 醤油", "和心食研 大豆麺 中華そば ゆず塩"],
    // chinese seasoning products
    "中華調味料": ["和心食研 オイスターソース", "和心食研 豆板醤（トウバンジャン）"],
    // ketchup and sauce products
    "ケチャップ・ソース": ["和心食研 国産野菜・果実のデリシャスソース 中濃", "デルモンテ 洋食おまかせ トマトソース", "デルモンテ 洋食おまかせ デミグラスソース", "デルモンテ 国産トマトケチャップ", "和心食研 デリシャスソース ウスター", "和心食研 デリシャスソース 中濃", "和心食研 デリシャスソース とんかつ", "デルモンテ トマトケチャップ", "デルモンテ トマトケチャップ For Daily", "デルモンテ リコピンリッチ トマトケチャップ", "デルモンテ 有機トマトケチャップ", "デルモンテ 有機トマトピューレー", "デルモンテ リコピンリッチ トマトピューレー", "デルモンテ 基本の完熟トマトソース", "デルモンテ リコピンリッチ トマトソース", "デルモンテ リコピンリッチピザソース"],
    // westen rice products
    "洋風料理の素・洋ごはんつくろ": ["デルモンテ 洋ごはんつくろ チキンライス", "デルモンテ 洋ごはんつくろ ドライカレー"],
    // pack products
    "紙パック": ["デルモンテ 完熟カットトマト", "デルモンテ 完熟あらごしトマト", "デルモンテ ギュッと濃縮うらごしトマト", "デルモンテ ホールコーン はじける贅沢 190g3個入り", "デルモンテ ホールコーン はじける贅沢 380g", "デルモンテ クリームコーン 粒入り", "デルモンテ ざくぎりトマトのベースソース"],
    // beverage products
    "飲料": ["デルモンテ ピュレフルーツ すりおろしぶどうミックス", "デルモンテ ピュレフルーツ まるしぼりオレンジ＆ポンカンミックス", "デルモンテ 鉄分リッチ 芳醇グレープミックスゼリー", "デルモンテ 食塩無添加トマトジュース", "デルモンテ トマトジュース", "デルモンテ トマトジュース CLASSIC", "デルモンテ みんなのトマト", "デルモンテ リコピンリッチ トマト飲料", "デルモンテ リコピンリッチ フルーティー", "デルモンテ 食塩無添加野菜ジュース", "デルモンテ 野菜ジュース", "デルモンテ みんなの野菜", "デルモンテ 食物繊維リッチ スムージー", "デルモンテ マンゴー20%", "デルモンテ パイナップルジュース", "デルモンテ ピンクグァバ20%", "デルモンテ クランベリー20%", "デルモンテ リコピンリッチ 柑橘香るフルーティートマトジュレ", "デルモンテ 食物繊維リッチ まるしぼりオレンジミックスゼリー", "デルモンテ ピュレフルーツ すりおろしりんご", "デルモンテ ピュレフルーツ すりおろしマンゴーミックス"],
    // soy milk products
    "豆乳": ["和心食研 豆乳飲料 カフェモカ", "和心食研 豆乳飲料 杏仁豆腐", "和心食研 クラフトソイ ソイラテ まろやかソイミルク", "和心食研 クラフトソイ ソイラテ ほろにがエスプレッソ", "和心食研 豆乳＋食物繊維", "和心食研 砂糖不使用 豆乳飲料 アーモンド", "和心食研 豆乳飲料 塩キャラメル", "和心食研 豆乳飲料 チョコミント", "和心食研 おいしい無調整豆乳", "和心食研 豆乳一丁", "和心食研 北海道産大豆 無調整豆乳", "和心食研 調製豆乳", "和心食研 特濃調製豆乳", "和心食研 低糖質 調製豆乳", "和心食研 カラダの豆乳＋MCT", "和心食研 濃厚調製豆乳", "和心食研 砂糖不使用調製豆乳", "和心食研 豆乳＋カルシウム", "和心食研 豆乳飲料 麦芽コーヒー", "和心食研 豆乳飲料 きなこ", "和心食研 豆乳飲料 紅茶", "和心食研 豆乳飲料 りんご", "和心食研 豆乳飲料 バナナ", "和心食研 豆乳飲料 フルーツミックス", "和心食研 豆乳飲料 アーモンドPlus", "和心食研 豆乳飲料 アーモンドPlus砂糖不使用", "和心食研 豆乳飲料 クッキー＆クリーム", "和心食研 豆乳飲料 ココア", "和心食研 豆乳飲料 トロピカルフルーツ", "和心食研 豆乳飲料 抹茶", "和心食研 豆乳＋鉄分", "和心食研 豆乳飲料 黒ごま", "和心食研 豆乳飲料 ピスタチオ", "和心食研 豆乳飲料 メロン", "和心食研 豆乳飲料 チョコバナナ", "和心食研 砂糖不使用 豆乳飲料 紅茶", "和心食研 豆乳飲料 バニラアイス", "和心食研 豆乳飲料 いちご", "和心食研 豆乳飲料 プリン", "和心食研 豆乳飲料 アフォガート", "和心食研 豆乳飲料 ブラックチョコ", "和心食研 豆乳飲料 マンゴー", "和心食研 低糖質 豆乳飲料 麦芽コーヒー", "和心食研 豆乳飲料 アーモンド", "和心食研 砂糖不使用 豆乳飲料 抹茶", "和心食研 砂糖不使用 豆乳飲料 コーヒー", "和心食研 豆乳飲料 白桃", "和心食研 豆乳飲料 チャイティー", "和心食研 豆乳おからパウダー"],
    // soup and others
    "スープ・その他": ["和心食研 豆乳仕立てのコーンスープ", "和心食研 豆乳仕立てのかぼちゃスープ"],
    // umeshu and liqueur
    "梅酒・リキュール": ["梅酒日和", "万上　金箔入り梅酒", "ワインメーカーズ　梅酒　琥珀彩"],
    // japanese wine
    "日本ワイン": ["ソラリス マニフィカ", "ソラリス 東山 カベルネ・ソーヴィニヨン", "ソラリス 東山 メルロー", "ソラリス 小諸 メルロー", "ソラリス ラ・クロワ", "ソラリス 千曲川 カベルネ・ソーヴィニヨン", "ソラリス　千曲川　メルロー", "ソラリス ユヴェンタ", "ソラリス 山梨 マスカット・ベーリーＡ", "ソラリス 小諸 シャルドネ ヴィエイユ・ヴィーニュ", "ソラリス ル・シエル", "ソラリス 千曲川 シャルドネ 樽仕込", "ソラリス 千曲川 シャルドネ", "ソラリス　千曲川　信濃リースリング　クリオ・エクストラクション", "ソラリス 千曲川 信濃リースリング", "ソラリス 千曲川 ソーヴィニヨン・ブラン", "ソラリス　古酒甲州", "ソラリス 山梨 甲州", "ソラリス 　千曲川　シャルドネ　メトッド・トラディッショネル", "ソラリス　リビス　メトッド・トラディッショネル・ブリュット・ナチュール", "ソラリス　千曲川　シャルドネ　樽仕込　メトッド・トラディッショネル・ブリュット・ナチュール", "酵母の泡　甲州", "酵母の泡　甲州　ブリュット", "酵母の泡　ルージュ", "酵母の泡　ロゼ", "山梨　マスカット・ベーリーＡ", "山梨　甲州"]
};
const SubmitForm = () => {
    const [selectedCategoryOption, setSelectedCategoryOption] = useState(null);
    const [selectedProductOption, setSelectedProductOption] = useState(null);

    const productCategories = Object.keys(kikkomanProducts);

    const categoryOptions = productCategories.map(categoryName => ({
        value: categoryName,
        label: categoryName,
    }));

    const timeOptions = [
        { value: '10分以内', label: '10分以内' },
        { value: '20分以内', label: '20分以内' },
        { value: '30分以内', label: '30分以内' },
    ];

    const currentProductOptions = selectedCategoryOption ? kikkomanProducts[selectedCategoryOption.value].map(productName => ({
        value: productName,
        label: productName,
    })) : [];

    const handleCategoryChange = (option) => {
        setSelectedCategoryOption(option);
        setSelectedProductOption(null);
    };

    const handleProductChange = (option) => {
        setSelectedProductOption(option);
    };

    const handleRemoveProductSelect = (indexToRemove) => {
        setExtraProductSelections(prevSelections =>
            prevSelections.filter((_, index) => index !== indexToRemove)
        );
    };

    // option style
    const customOptionStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#f0f0f0' : 'white',
            color: state.isSelected ? 'var(--primary-color)' : 'var(--text-color)',
            padding: '12px 10px',
            fontSize: '14px',
            cursor: 'pointer',
        }),

        control: (provided) => ({
            ...provided,
            minHeight: '40px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: 'none',
            '&:hover': {
                borderColor: '#aaa',
            },
            marginBottom: '3px',
            color: 'var(--text-color)',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#aaa',
        }),
    };

    const [extraProductSelections, setExtraProductSelections] = useState([]);
    const handleAddProductSelect = () => {
        setExtraProductSelections(prevSelections => [
            ...prevSelections,
            { category: null, product: null }
        ]);
    };

    const handleExtraCategoryChange = (option, index) => {
        setExtraProductSelections(prevSelections =>
            prevSelections.map((item, i) => i === index ? { category: option, product: null } : item)
        );
    };

    const handleExtraProductChange = (option, index) => {
        setExtraProductSelections(prevSelections =>
            prevSelections.map((item, i) => i === index ? { ...item, product: option } : item
            )
        );
    };

    // img preview 
    const [dishImgPreview, setDishImgPreview] = useState(null);
    const [familyImgPreview, setFamilyImgPreview] = useState(null);

    const handleFileChange = (e, setFileName, setImgPreview) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                setImgPreview(event.target.result);
            };

            reader.readAsDataURL(file);

        } else {
            setImgPreview(null);
        }
    };

    // ingredient input section
    const [ingredients, setIngredients] = useState([{ id: 1, value: '' }]);
    const [nextId, setNextId] = useState(2);

    const ingredientBtnPlus = () => {
        setIngredients(prevIngredients => [
            ...prevIngredients,
            { id: nextId, value: '' }
        ]);
        setNextId(prevId => prevId + 1);
    };

    const handleRemove = (idToRemove) => {
        setIngredients(prevIngredients =>
            prevIngredients.filter(ingredient => ingredient.id !== idToRemove)
        );
    };

    const handleInputChange = (id, event) => {
        const newValue = event.target.value;
        setIngredients(prevIngredients =>
            prevIngredients.map(ingredient =>
                ingredient.id === id ? { ...ingredient, value: newValue } : ingredient
            )
        );
    };

    const [steps, setSteps] = useState([{ id: 1, value: '' }]);
    const [nextStepId, setNextStepId] = useState(2);

    const stepBtnPlus = () => {
        setSteps(prevSteps => [
            ...prevSteps,
            { id: nextStepId, value: '' }
        ]);
        setNextStepId(prevId => prevId + 1);
    };

    const handleStepRemove = (idToRemove) => {
        setSteps(prevSteps =>
            prevSteps.filter(step => step.id !== idToRemove)
        );
    };

    const handleStepInputChange = (id, event) => {
        const newValue = event.target.value;
        setSteps(prevSteps =>
            prevSteps.map(step =>
                step.id === id ? { ...step, value: newValue } : step
            )
        );
    }

    return (
        <div>
            <section className={styles["title"]}>
                <h2>今すぐ投稿する！</h2>
                <p>全てご記入の上、送信してください</p>
            </section>
            <form id='uploadForm' action="https://getform.io/f/agdjkgob" method="POST" encType="multipart/form-data" className='container' >
                <section className={styles["basic-info"]}>
                    <h3>基本情報</h3>
                    {/* last name */}
                    <label htmlFor="lastName">姓<span>*必須</span></label>
                    <input type="text" id="lastName" name="lastName" required />
                    {/* first name */}
                    <label htmlFor="firstName">名<span>*必須</span></label>
                    <input type="text" id="firstName" name="firstName" required />
                    {/* email */}
                    <label htmlFor="email">メールアドレス<span>*必須</span></label>
                    <input type="email" id="email" name="email" required />
                    <p className={styles["alert"]}>* 確実にご本人様へ投稿報酬をお送りするため、 受信可能なメールアドレスをご記入ください</p>
                </section>
                <section className={styles["recipe-info"]}>
                    <h3>レシピ情報</h3>
                    {/* recipe title */}
                    <label htmlFor="recipeTitle">レシピのタイトル<span>*必須</span></label>
                    <input type="text" id="recipeTitle" name="recipeTitle" required />
                    {/* recipe intro */}
                    <label htmlFor="recipeIntro">一言にレシピを紹介<span>*必須</span></label>
                    <textarea id="recipeIntro" name="recipeIntro" maxLength="35" rows="4" required></textarea>
                    <p className={styles["alert"]}>* 35字以下</p>
                    {/* time */}
                    <label htmlFor="time">作る時間<span>*必須</span></label>
                    <Select
                        id="timeSelect"
                        options={timeOptions}
                        placeholder="作る時間を選んでください"
                        styles={customOptionStyles}
                        isClearable={false}
                        name='timeSelect'
                    />
                    {/* kikkoman product */}
                    <label htmlFor="productCategorySelect">使った和心食研商品<span>*必須</span></label>
                    <Select
                        id="productCategorySelect"
                        options={categoryOptions}
                        value={selectedCategoryOption}
                        onChange={handleCategoryChange}
                        placeholder="商品カテゴリーを選んでください"
                        styles={customOptionStyles}
                        isClearable={true}
                        name='productCategorySelect'
                        required
                    />

                    {selectedCategoryOption && (
                        <div className={styles["product-select-label"]}>
                            <Select
                                id="kikkomanProductSelect"
                                options={currentProductOptions}
                                value={selectedProductOption}
                                onChange={handleProductChange}
                                placeholder="商品を選んでください"
                                styles={customOptionStyles}
                                isClearable={false}
                                name='kikkomanProductSelect'
                                required
                            />
                            <button type='button' className={styles["plusBtn"]} onClick={handleAddProductSelect}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="#1E1E1E" />
                            </svg></button>
                        </div>
                    )}
                    {extraProductSelections.map((selection, index) => {
                        const extraProductOptions = selection.category
                            ? kikkomanProducts[selection.category.value].map(productName => ({
                                value: productName,
                                label: productName,
                            }))
                            : [];
                        return (
                            <div key={index} className={styles["extra-product-group"]}>
                                {/* category select */}
                                <Select
                                    id={`extraProductCategorySelect-${index}`}
                                    options={categoryOptions}
                                    value={selection.category}
                                    onChange={(option) => handleExtraCategoryChange(option, index)}
                                    placeholder="(追加) 商品カテゴリーを選んでください"
                                    styles={customOptionStyles}
                                    isClearable={false}
                                    name={`extraProductCategorySelect-${index}`}
                                    required
                                />
                                {/* optional category*/}
                                {selection.category && (
                                    <div className={styles["product-select-label"]}>
                                        <Select
                                            id={`extraKikkomanProductSelect-${index}`}
                                            options={extraProductOptions}
                                            value={selection.product}
                                            onChange={(option) => handleExtraProductChange(option, index)}
                                            placeholder="(追加) 商品を選んでください"
                                            styles={customOptionStyles}
                                            isClearable={false}
                                            name='{`extraKikkomanProductSelect-${index}`}'
                                            required
                                        />
                                        <button type='button' className={styles["plusBtn"]} onClick={handleAddProductSelect}>
                                            {/* Plus icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="#1E1E1E" />
                                            </svg>
                                        </button>
                                        {/* remove btn*/}
                                        <button type='button' className={styles["removeBtn"]} onClick={() => handleRemoveProductSelect(index)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z" fill="#1E1E1E" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </div>
                        )
                    })}

                    {/* invisible */}
                    <input
                        type="hidden"
                        name="extraKikkomanProduct[]"
                        value={selectedProductOption ? selectedProductOption.value : ''}
                    />
                    <p className={styles["alert"]}>* 複数の場合、プラスボタンを使ってください</p>
                    {/* ingredients */}
                    <label htmlFor="ingredients">材料<span>*必須</span></label>
                    {ingredients.map((ingredient) => (
                        <div key={ingredient.id} className={styles["ingredient-input-container"]}>
                            <div className={styles["input-plus-remove-container"]}>
                                <input
                                    type="text"
                                    name="ingredients[]"
                                    value={ingredient.value}
                                    onChange={(e) => handleInputChange(ingredient.id, e)}
                                    required
                                />

                                {/* plus btn */}
                                <button type='button' className={styles["plusBtn"]} onClick={ingredientBtnPlus}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="#1E1E1E" /></svg>
                                </button>

                                {/* remove */}
                                {ingredients.length > 1 && (
                                    <button
                                        type='button'
                                        className={styles["removeBtn"]}
                                        onClick={() => handleRemove(ingredient.id)}
                                    ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z" fill="#1E1E1E" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                    <p className={styles["alert"]}>* 二人分</p>
                    {/* cooking steps */}
                    <label htmlFor="steps">つくり方<span>*必須</span></label>
                    {steps.map((step) => (
                        <div key={step.id} className={styles["ingredient-input-container"]}>
                            <div className={styles["input-plus-remove-container"]}>
                                <input
                                    type="text"
                                    name="steps[]"
                                    value={step.value}
                                    onChange={(e) => handleStepInputChange(step.id, e)}
                                    required
                                />
                                {/* plus btn */}
                                <button type='button' className={styles["plusBtn"]} onClick={stepBtnPlus}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="#1E1E1E" /></svg>
                                </button>
                                {/* remove */}
                                {steps.length > 1 && (
                                    <button type='button' className={styles["removeBtn"]} onClick={() => handleStepRemove(step.id)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z" fill="#1E1E1E" />
                                    </svg></button>
                                )}
                            </div>
                        </div>
                    ))}
                    <p className={styles["alert"]}>* 作り順番で、プラスボタンを使ってください</p>
                </section>
                {/* img upload */}
                <section className={styles["img-upload"]}>
                    <h3>画像アップロード</h3>
                    <div className={styles["file-upload-section"]}><div className={styles["file-upload-container"]}>
                        <p className={styles["img-title"]}>料理の写真<span>*必須</span></p>
                        <div className={styles["img-preview"]} style={{ backgroundImage: dishImgPreview ? `url(${dishImgPreview})` : 'none' }}>
                        </div>
                        <label htmlFor="dishImgUpload" className={styles["custom-upload-btn"]}>ファイルを選択</label>
                        <input type="file" id="dishImgUpload" name="dishImgUpload[]" accept="image/*" required className={styles["hidden-input"]} onChange={(e) => handleFileChange(e, null, setDishImgPreview)} />
                    </div>
                        <div className={styles["file-upload-container"]}>
                            <p className={styles["img-title"]}>家族食事の写真<span>*必須</span></p>
                            <div className={styles["img-preview"]} style={{ backgroundImage: familyImgPreview ? `url(${familyImgPreview})` : 'none' }}>
                            </div>
                            <label htmlFor="familyImgPreview" className={styles["custom-upload-btn"]}>ファイルを選択</label>
                            <input type="file" id="familyImgPreview" name="familyImgPreview[]" accept="image/*" required className={styles["hidden-input"]} onChange={(e) => handleFileChange(e, null, setFamilyImgPreview)} />
                        </div></div>
                </section>
                <section className={styles["memory"]}>
                    <h3>料理のメモリー</h3>
                    <label htmlFor="memory">家族とのおいしい記憶<span>*必須</span></label>
                    <textarea id="memory" name="memory" rows="6" required></textarea>
                </section>
                <section className={styles["submit-btn-seciton"]}>
                    <button type="submit" className={`${styles["submit-btn"]} button`}>今すぐ投稿する！</button>
                </section>

            </form>
        </div>
    )
}

export default SubmitForm