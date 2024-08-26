const imageUpload = async (image: File) => {
  const formData = new FormData();
  formData.append("image", image);

  const response = await fetch(
    `https://api.imgbb.com/1/upload?key=1bdaaa38f74328b09cbb9edd361599b8`,
    {
      method: "POST",
      body: formData,
    }
  );
  console.log(process.env);
  if (!response.ok) {
    throw new Error(`Failed to upload image: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

export default imageUpload;
