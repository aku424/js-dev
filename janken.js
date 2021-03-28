const promptStr = start();
    function start() {
        start_hand = prompt('ジャンケンをしましょう！何を出しますか？')
        return start_hand
    }
    //jsのて
    let js_hand = getRandom();
    //userのて
    let your_hand = promptStr;
    //ジャッジ
    let result = judge(js_hand,your_hand);
    //表示テキストの生成
    const text = `あなたが出した手は${your_hand}です。\nコンピューターの出した手は${js_hand}です。\n結果、あなたは${result}です。`;
    //他の文字が入力された場合の定数
    if (result == undefined) {
        alert(`グー・チョキ・パーのいずれかを入力してください。`)
        const secondPrompt = start();
    }else{
        //表示
        alert(text)
    }
    if (secondPrompt == null ) {
        alert("またよろしくお願いいたします");
    }
    function judge(js,your){
        let winLose;
        if (js == "グー") {
            if (your == "グー") {
                winLose ="あいこ";
            }else if (your == "パー") {
                winLose ="勝利";
            }else if (your == "チョキ") {
                winLose ="負け";
            }
        }else if (js == "パー") {
            if (your == "パー") {
                winLose ="あいこ"; 
            }else if (your == "グー") {
                winLose ="負け";
            }else if (your == "チョキ")  {
                winLose ="勝利";
            }
        }else if (js == "チョキ")  {
            if (your == "チョキ") {
                winLose ="あいこ";
            }else if (your == "パー") {
                winLose ="負け";
            }else if (your == "グー") {
                winLose ="勝利";
            }
        }
        return winLose;
    }
    //jsの手の生成
    function getRandom (){
        let num = Math.floor(Math.random()*3);
        let cp_hand;
        if (num == 0) {
            cp_hand = "グー";
        }else if(num == 1){
            cp_hand = "パー";
        }else　if(num == 2) {
            cp_hand = "チョキ";
        }
        return cp_hand;
    }
