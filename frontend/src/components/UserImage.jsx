import { Box } from "@mui/material";

function UserImage({ image }) {
  const imagePath = `http://localhost:3001/assets/${image}`;
  console.log("Full Image path:", imagePath);
  return (
    <img
      src={imagePath}
      alt="User"
      style={{
        width: "100px",
        height: "100px",
        objectFit: "cover",
      }}
      onError={(e) => {
        console.error("Image load error", e);
        // Optional: set a default image or placeholder
        e.target.src = "path/to/default/image.jpg";
      }}
    />
  );
}

export default UserImage;
