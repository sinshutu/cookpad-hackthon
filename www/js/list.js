$(document).ready(function(){
    data = [{
        img_path: "abokado.jpg",
        title: "カルボナーラトースト",
        foods: "食パン、卵、ベーコン、玉ねぎ、チーズ",
    },{
        img_path: "abokado.jpg",
        title: "モモ挽肉とひよこ豆のトースト",
        foods: "鶏挽肉、トマトベース、パセリ、ひよこ豆",
    },{
        img_path: "",
        title: "カレーチーズトースト",
        foods: "レトルトカレー、チーズ",
    },{
        img_path: "",
        title: "はちみつナッツバタートースト",
        foods: "ナッツ、バター、はちみつ",
    },{
        img_path: "",
        title: "アボカドトースト",
        foods: "アボカド、ゴマ油",
    },{
        img_path: "",
        title: "牛挽肉トースト",
        foods: "牛挽肉、パセリ、トマトケチャップ、塩胡椒",
    },{
        img_path: "",
        title: "マシュマロトースト",
        foods: "マシュマロ、シナモン",
    },{
        img_path: "",
        title: "ツナマヨトースト",
        foods: "ツナ、マヨネーズ、玉ねぎ、コーン",
    },{
        img_path: "",
        title: "納豆トースト",
        foods: "納豆、海苔、青ネギ、チーズ",
    },{
        img_path: "",
        title: "たまごベーコントースト",
        foods: "卵、ベーコン、玉ねぎ",
    },{
        img_path: "",
        title: "ポテトサラダのチーズトースト",
        foods: "ポテトサラダ、チーズ",
    },{
        img_path: "",
        title: "トマトとオニオントースト",
        foods: "トマト、オニオン、クリームチーズ",
    },{
        img_path: "",
        title: "チーズドームトースト",
        foods: "キャベツ、スライスチーズ、みりん、マヨネーズ",
    },{
        img_path: "",
        title: "ピザ風トースト",
        foods: "ハム、チーズ、ケチャップ、マヨネーズ、マスタード",
    },{
        img_path: "",
        title: "塩バナナトースト",
        foods: "バナナ、シナモン、塩、レモン汁",
    }]
    gen_list(data, "tost");
    data = [];
    data = [{
        img_path: "",
        title: "アボカドとツナのサンドイッチ",
        foods: "アボカド、ツナ、タマネギ、レモン汁、ブラックペッパー",
    },{
        img_path: "",
        title: "たまごとアスパラのサンドイッチ",
        foods: "卵、アスパラ、マヨネーズ、マーガリン、サラダ油、塩胡椒",
    },{
        img_path: "",
        title: "ポケットサンド",
        foods: "ゆで卵、ミニトマト、キュウリ、レタス、マヨネーズ",
    },{
        img_path: "",
        title: "はちみつナッツバタートースト",
        foods: "スモークサーモン、キュウリ、サラダ菜、玉ねぎ、マヨネーズ",
    },{
        img_path: "",
        title: "CULBサンドイッチ",
        foods: "卵、トマト、レタス、キュウリ、塩胡椒、マヨネーズ",
    },{
        img_path: "",
        title: "生姜焼きサンドイッチ",
        foods: "豚こま切れ肉、玉ねぎ、醤油、砂糖、酒、生姜",
    },{
        img_path: "",
        title: "サーモンとキュウリのオープンサンド",
        foods: "サーモン、玉ねぎ、トマト、クリームチーズ、レモン",
    },{
        img_path: "",
        title: "フルーツサンド",
        foods: "サワークリーム、イチジク、バナナ、キウイ",
    },{
        img_path: "",
        title: "ほうれん草サンド",
        foods: "ほうれん草、海苔、チーズ、醤油、マヨネーズ",
    },{
        img_path: "",
        title: "きんぴらサンド",
        foods: "きんぴらコボウ、ハム、レタス",
    },{
        img_path: "",
        title: "厚焼きたまごサンド",
        foods: "厚焼きたまご、マスタード",
    },{
        img_path: "",
        title: "キャベツと人参のサンド",
        foods: "キャベツ、人参、マヨネーズ、マーガリン、味塩",
    },{
        img_path: "",
        title: "コールスローハムサンド",
        foods: "コールスロー、ハム、マーガリン",
    },{
        img_path: "",
        title: "エビとアボカドのオープンサンド",
        foods: "エビ、アボカド、トマト、ゆで卵、バター、塩胡椒、レモン汁",
    },{
        img_path: "",
        title: "チョコバナナサンド",
        foods: "板チョコ、バター、バナナ",
    }]
    gen_list(data, "sand");
});

var gen_list = function(data, target){
    for(card in data){
        //var img = data[card].img_path;
        if(target == "sand"){
            var img = "sand/s" + (Number(card)+1) + ".png";
        }else{
            var img = "tost/t" + (Number(card)+1) + ".png";
        }
        var content = '\
        <div class="card">\
        <img src="img/' + img + '" alt="Card image cap">\
        <div class="card-block">\
        <h4 class="title">' + data[card].title + '</h4>\
        <p class="foods">\
        ' + data[card].foods + '\
        </p>\
        </div>\
        </div>';
        $('#'+target).append(content);
    }
}
