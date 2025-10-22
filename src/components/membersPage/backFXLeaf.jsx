import fxVideo from "../../assets/fx/final_loop_leaf.webm";

const BackFXLeaf = () => {
  return (
    <div >
      <video autoPlay loop muted playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
      >
        <source src={fxVideo} type="video/webm" />
      </video>
    </div>
  );
};

export default BackFXLeaf;
