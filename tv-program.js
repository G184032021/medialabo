let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
}; 

/////////////////// 課題3-2 はここから書き始めよう
//REQUEST
function sendRequest(service,genre) {
	// URL を設定
	let url = `https://www.nishita-lab.org/web-contents/jsons/nhk/${service}-${genre}-j.json`;

	// 通信開始
	// axios.get(url)
	// 	.then(showResult)
	// 	.catch(showError)
	// 	.then(finish);

  let get_api_data = async () => {
    const res = await axios.get(url)
    console.log(res.data.list);
    return res.data.list;
  }
  let data = get_api_data();
  return data;

}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data.list;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

	// data をコンソールに出力
	console.log(data);
  return data;
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}


function handleSearch(event) {
  let user_input = '';
  user_input = document.querySelector('input#search-input').value;
  console.log(user_input);
  let setKey = switchCaseForUserInput(user_input);
  console.log('genre is ' + setKey.genre + '. service is ' + setKey.service);

  if(setKey.genre.length === 1){
    for(let i=0; i<setKey.service.length; i++){
      sendRequest(setKey.service[i],setKey.genre);
    }
  }else{
    for(let i=0; i<setKey.genre.length;i++){
      sendRequest(setKey.service,setKey.genre[i]);
    }
  }
  let display_result_indow = window.open('./display-result.html','displayDataWindow','width=700,height=700');
  

  // sendRequest(setKey.service,setKey.genre);
  event.preventDefault();
}

function createTable(genre){
  let genre_number = switchCaseForUserInput(genre).genre[0];
  let table = document.querySelector('table#table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  table.appendChild(thead);
  table.appendChild(tbody);
  let row_1 = document.createElement('tr');
  let heading_1 = document.createElement('th');
  heading_1.innerHTML = '番組'
  let heading_2 = document.createElement('th');
  heading_2.innerHTML = "ジャンル";
  let heading_3 = document.createElement('th');
  heading_3.innerHTML = "チャンネル";
  let heading_4 = document.createElement('th');
  heading_4.innerHTML = "開始";
  let heading_5 = document.createElement('th');
  heading_5.innerHTML = "終了";

  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);
  row_1.appendChild(heading_3);
  row_1.appendChild(heading_4);
  row_1.appendChild(heading_5);
  thead.appendChild(row_1);
  async function get_api_data() {
	  let url_g1 = `https://www.nishita-lab.org/web-contents/jsons/nhk/g1-${genre_number}-j.json`;
    const res_g1 = await axios.get(url_g1);
    console.log(res_g1);
    for(let i=0; i<res_g1.data.list.g1.length; i++){
      let row_i = document.createElement('tr');
      let row_i_show_i = document.createElement('td');
      let row_i_genre_i = document.createElement('td');
      let row_i_channel_i = document.createElement('td');
      let row_i_start_i = document.createElement('td');
      let row_i_end_i = document.createElement('td');
      row_i_show_i.innerHTML = res_g1.data.list.g1[i].title;
      row_i_genre_i.innerHTML = genre;
      row_i_channel_i.innerHTML = 'ＮＨＫ総合１';
      row_i_start_i.innerHTML = res_g1.data.list.g1[i].start_time;
      row_i_end_i.innerHTML = res_g1.data.list.g1[i].end_time;
  
      row_i.appendChild(row_i_show_i);
      row_i.appendChild(row_i_genre_i);
      row_i.appendChild(row_i_channel_i);
      row_i.appendChild(row_i_start_i);
      row_i.appendChild(row_i_end_i);
      tbody.appendChild(row_i);
    }
	  let url_e1 = `https://www.nishita-lab.org/web-contents/jsons/nhk/e1-${genre_number}-j.json`;
    const res_e1 = await axios.get(url_e1);
    console.log(res_e1);
    for(let i=0; i<res_e1.data.list.e1.length; i++){
      let row_i = document.createElement('tr');
      let row_i_show_i = document.createElement('td');
      let row_i_genre_i = document.createElement('td');
      let row_i_channel_i = document.createElement('td');
      let row_i_start_i = document.createElement('td');
      let row_i_end_i = document.createElement('td');
      row_i_show_i.innerHTML = res_e1.data.list.e1[i].title;
      row_i_genre_i.innerHTML = genre;
      row_i_channel_i.innerHTML = 'ＮＨＫＥテレ１';
      row_i_start_i.innerHTML = res_e1.data.list.e1[i].start_time;
      row_i_end_i.innerHTML = res_e1.data.list.e1[i].end_time;
  
      row_i.appendChild(row_i_show_i);
      row_i.appendChild(row_i_genre_i);
      row_i.appendChild(row_i_channel_i);
      row_i.appendChild(row_i_start_i);
      row_i.appendChild(row_i_end_i);
      tbody.appendChild(row_i);
    }

  }
  get_api_data();
  
}

function handleClickNews(event) {
  document.getElementById('new-show').remove();
  createTable('ニュース');
  event.preventDefault();
}
function handleClickDrama(event) {
  document.getElementById('new-show').remove();
  createTable('ドラマ');
  event.preventDefault();
}
function handleClickMovie(event) {
  document.getElementById('new-show').remove();
  createTable('映画');
  event.preventDefault();
}
function handleClickAnimation(event) {
  document.getElementById('new-show').remove();
  createTable('アニメ');
  event.preventDefault();
}
function handleClickMusic(event) {
  document.getElementById('new-show').remove();
  createTable('音楽');
  event.preventDefault();
}


document.querySelector('form#header-searchBar').addEventListener('submit', handleSearch);
document.querySelector('ls#news').addEventListener('click',handleClickNews);
document.querySelector('ls#drama').addEventListener('click',handleClickDrama);
document.querySelector('ls#movie').addEventListener('click',handleClickMovie);
document.querySelector('ls#animation').addEventListener('click',handleClickAnimation);
document.querySelector('ls#music').addEventListener('click',handleClickMusic);

//switch-case: user_input
function switchCaseForUserInput(x){
  let setKey = {
    genre: [],
    service: [],
  }
  switch (x) {
    //genre
    case 'ニュース':
      setKey.genre = ['0000'];
      setKey.service = ['g1','e1'];
      break;
    case 'ドラマ':
      setKey.genre = ['0300'];
      setKey.service = ['g1','e1'];
      break;
    case '映画':
      setKey.genre = ['0600'];
      setKey.service = ['g1','e1'];
      break;
    case 'アニメ':
      setKey.genre = ['0700'];
      setKey.service = ['g1','e1'];
      break;
    case '音楽':
      setKey.genre = ['0409'];
      setKey.service = ['g1','e1'];
    //channel
    case 'ＮＨＫ総合１':
      setKey.service = ['g1'];
      setKey.genre = ['0000','0300','0600','0700'];
      break;
    case 'ＮＨＫＥテレ１':
      setKey.service = ['e1'];
      setKey.genre = ['0000','0300','0600','0700'];
      break;
    default:
      break;
  }
  return setKey;
}

setTimeout(()=>{
  console.log('HELLO A');
  document.getElementById('target_1').classList.contains('display-none');
  document.getElementById('target_2').classList.remove('display-none');
},3000);

setTimeout(()=>{
  console.log('HELLO B');
  document.getElementById('target_2').classList.add('display-none');
  document.getElementById('target_1').classList.remove('display-none');
},6000);
