let key = opener.document.getElementById('search-input').value;
console.log(key);

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
        setKey.genre = ['0000','0300','0600','0700','0409'];
        break;
      case 'ＮＨＫＥテレ１':
        setKey.service = ['e1'];
        setKey.genre = ['0000','0300','0600','0700','0409'];
        break;
      default:
        break;
    }
    return setKey;
}

function changeGenreNumberToGenre(arr){
    let output_arr = []
    for(let i=0; i<arr.length;i++){
        switch(arr[i]){
            case '0000':
                output_arr.push('ニュース');
                break;
            case '0300':
                output_arr.push('ドラマ');
                break;
            case '0600':
                output_arr.push('映画');
                break;
            case '0700':
                output_arr.push('アニメ');
                break;
            case '0409':
                output_arr.push('音楽');
                break;
        }
    }

    return output_arr;
}

function createTable(key){
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
    if((switchCaseForUserInput(key)).genre.length === 1){
        let genre_number = switchCaseForUserInput(key).genre[0];
        console.log(genre_number);
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
                row_i_genre_i.innerHTML = key;
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
                row_i_genre_i.innerHTML = key;
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
        
    }else {
        let service_number = switchCaseForUserInput(key).service[0];
        console.log(service_number);
        let genre_numbers = switchCaseForUserInput(key).genre;
        console.log(genre_numbers);
        for(let i=0; i<genre_numbers.length;i++){
            async function get_api_data(){
                console.log(genre_numbers[i])
                let url = `https://www.nishita-lab.org/web-contents/jsons/nhk/${service_number}-${genre_numbers[i]}-j.json`;
                console.log(url);
                const res = await axios.get(url);
                console.log(res);
                if(service_number==='g1'){
                    for(let j=0; j<res.data.list.g1.length; j++){
                        let row_i = document.createElement('tr');
                        let row_i_show_i = document.createElement('td');
                        let row_i_genre_i = document.createElement('td');
                        let row_i_channel_i = document.createElement('td');
                        let row_i_start_i = document.createElement('td');
                        let row_i_end_i = document.createElement('td');
        
                        row_i_show_i.innerHTML = res.data.list.g1[j].title;
                        row_i_genre_i.innerHTML = changeGenreNumberToGenre(res.data.list.g1[j].genres);
                        row_i_channel_i.innerHTML = key;
                        row_i_start_i.innerHTML = res.data.list.g1[j].start_time;
                        row_i_end_i.innerHTML = res.data.list.g1[j].end_time;
        
                        row_i.appendChild(row_i_show_i);
                        row_i.appendChild(row_i_genre_i);
                        row_i.appendChild(row_i_channel_i);
                        row_i.appendChild(row_i_start_i);
                        row_i.appendChild(row_i_end_i);
                        tbody.appendChild(row_i);
                    }
                }else {
                    for(let j=0; j<res.data.list.e1.length; j++){
                        let row_i = document.createElement('tr');
                        let row_i_show_i = document.createElement('td');
                        let row_i_genre_i = document.createElement('td');
                        let row_i_channel_i = document.createElement('td');
                        let row_i_start_i = document.createElement('td');
                        let row_i_end_i = document.createElement('td');
        
                        row_i_show_i.innerHTML = res.data.list.e1[j].title;
                        row_i_genre_i.innerHTML = changeGenreNumberToGenre(res.data.list.e1[j].genres);
                        row_i_channel_i.innerHTML = key;
                        row_i_start_i.innerHTML = res.data.list.e1[j].start_time;
                        row_i_end_i.innerHTML = res.data.list.e1[j].end_time;
        
                        row_i.appendChild(row_i_show_i);
                        row_i.appendChild(row_i_genre_i);
                        row_i.appendChild(row_i_channel_i);
                        row_i.appendChild(row_i_start_i);
                        row_i.appendChild(row_i_end_i);
                        tbody.appendChild(row_i);
                    }
                    
                }
            }
            get_api_data();
        }
    }
    
}

createTable(key);