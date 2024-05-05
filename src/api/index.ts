export const detectFaces = async (file: File) => {
  const api_key = process.env.REACT_APP_API_KEY as string;
  const api_secret = process.env.REACT_APP_API_SECRET as string;

  const formData = new FormData();
  formData.append("api_key", api_key);
  formData.append("api_secret", api_secret);
  formData.append("urls", file);

  const response = await fetch(
    "https://api.skybiometry.com/fc/faces/detect.json",
    {
      method: "POST",
      body: formData,
    }
  );

  const body = await response.json();

  console.log(body);
};
