const SERVER_URL = "http://localhost:8000";



export const sendVideo = async(base64) => {
  return fetch(`${SERVER_URL}/api/v1/videos/getVideo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"value":base64}),
  }).then((res) =>  res.json()).catch((err)=>"err");
};
