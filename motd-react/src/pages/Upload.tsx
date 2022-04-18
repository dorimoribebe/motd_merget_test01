import { useState } from "react";
import axios from "axios";

export default function Upload() {
  const url: string = "http://localhost:3216/fileUpload";
  const now = Date.now();
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");

  const onLoadFile = (e: any) => {
    const file = e.target.files[0];
    const fileName = e.target.files[0].name;
    setFile(file);
    setFileName(fileName);
    console.log(`file: ${file}, fileName: ${fileName}`);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    const data = {
      id: now,
    };

    formData.append("files", file);
    formData.append("fileName", fileName);
    formData.append("data", JSON.stringify(data));

    try {
      axios.post(url, formData).then((res) => {
        console.log(res);
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="upload">
      <h1>사진 업로드</h1>
      <h3>
        데일리룩 사진을 첨부하면, <br />
        ai 하두알룩이 오늘의 무드를 분석해줘요!
        <br />
        전신사진일 수록 정확도가 높아진답니다.
      </h3>
      <form onSubmit={handleSubmit}>
        <input id="file" type="file" name="file" onChange={onLoadFile} />
        <button type="submit" className="button">
          ai하두알룩에게 사진 보내기🤖
        </button>
      </form>
    </div>
  );
}
