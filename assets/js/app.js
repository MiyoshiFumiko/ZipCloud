// // Ajacxを開始（郵便番号APIから住所の情報を取得）
//         // ajaxの書き方
//         $.ajax({
//             //通信の設定を書くブロック
            　 //項目名（決まった文言）：値,
            　 //項目名:値,
//         }).done((data) => {
//             //通信が成功した場合のブロック

//         }).fail((error) => {
//             //通信が失敗した場合のブロック

//         })

$(function(){
    // 検索ボタンがクリックされたら

    $('#search-btn').click(function(){
        
        // 入力された郵便番号を取得
        let val = $('#search-word').val();
         
        $.LoadingOverlay("show");
        
        // $('#prefecture').text(data.results[0].address1)
        
        // Ajacxを開始（郵便番号APIから住所の情報を取得）
        $.ajax({
            url:'https://zipcloud.ibsnet.co.jp/api/search', //通信先のURL
            type:'GET', //通信方法(GET or POST)
            dataType: 'jsonp',  //通信結果のデータ形式
            data: { //通信先の送信するパラメータ
               //パラメータ名:値
               zipcode: val
            }
        }).done((data) => {

            let prefecture = data.results[0].address1
            let city = data.results[0].address2
            let address = data.results[0].address3

            $('#prefecture').text(prefecture)
            $('#city').text(city)
            $('#address').text(address)

        }).fail((error) => {
            console.error(error)
           
        }).always(() => { 
            $.LoadingOverlay("hide");
        })            
       
    })
})


