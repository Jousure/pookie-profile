import AvatarCanvas from "./components/AvatarCanvas";

function App() {

  return (

    <div
      style={{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"#ffddee"
      }}
    >

      <div
        style={{
          width:"600px",
          padding:"20px",
          background:"#fff4f8",
          border:"4px solid black",
          borderRadius:"12px",
          textAlign:"center",
          boxShadow:"6px 6px 0px black"
        }}
      >

        <h1 style={{color:"black"}}>
          PookieProfile 🧸
        </h1>

        <AvatarCanvas/>

        <p style={{color:"#444"}}>
          Your Pookie
        </p>

      </div>

    </div>

  );

}

export default App;