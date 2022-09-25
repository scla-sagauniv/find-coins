const Coin =(props:any)=>{
    const closeCoin = () => {
        props.setShowCoin(false);
      };

      const overlay = {
        position:"fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };

      const modalContent = {
        background: "white",
        padding: "10px",
        borderRadius: "3px",
      };
    
      
      
      return (
        <>
          {props.showcoin ? ( // showFlagがtrueだったらModalを表示する
            <div  style={overlay}>
              <div style={modalContent}>
                <div id="contents_block">
                    <h1>ここにコインの情報を表示</h1>
                </div>
                <button onClick={closeCoin}>閉じる</button>
              </div>
            </div>
          ) : (
            <></>// showFlagがfalseの場合はModalは表示しない
          )}
        </>
      );
}





export default Coin;
