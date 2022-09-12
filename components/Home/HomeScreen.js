import React, { useState } from "react";
import UploadForm from "../UploadForm/UploadForm";
import { projectStorage } from "../../firebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 } from "uuid";
import ImageGallery from "../ImageGallery/ImageGallery";
import addImages from "../../firebase/addImages";
import useFireStore from "../../firebase/useFireStore";

const HomeScreen = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [percent, setPercent] = useState(0);
  const [imageList, setImageList] = useState([]);

  const { documents } = useFireStore("gallery");
  console.log(documents);

  const types = ["image/png", "image/jpeg", "image/gif", "image/avif"];

  const onUploadImage = (e) => {
    let selectedImage = e.target.files[0];
    if (selectedImage && types.includes(selectedImage.type)) {
      setFile(selectedImage);
      const imageRef = ref(
        projectStorage,
        `images/${selectedImage?.name + v4()}`
      );
      const uploadTask = uploadBytesResumable(imageRef, selectedImage);
      //   uploadBytes(imageRef, selectedImage).then((snap) => {
      //     alert("Image uploaded");
      //   });
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          // update progress
          console.log(percent);
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
            setFile("");

            addImages("gallery", { imageUrl: url }, selectedImage.name);
            setImageList((prevUrl) => [...prevUrl, url]);
          });
        }
      );
      setError(" ");
    } else {
      setFile(null);
      setError("Please select a valid image format");
    }
  };

  const header = (
    <>
      {" "}
      <h1 className="text-[40px] text-center font-medium">
        {" "}
        Pictures you like{" "}
      </h1>
      <p className="text-gray-300 text-[16px] pt-[3rem] text-center">
        pictures are love, affair with life!
      </p>
    </>
  );

  return (
    <>
      <div className="w-[80%] mx-auto py-[6rem] font-poppins">
        {header}
        <UploadForm
          onUploadImage={onUploadImage}
          error={error}
          file={file}
          percent={percent}
        />
        <ImageGallery imageList={documents} />
      </div>
    </>
  );
};

export default HomeScreen;
