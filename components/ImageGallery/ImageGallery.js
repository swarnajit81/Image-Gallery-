import React, { useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "../ImageModal/ImageModal";

const ImageGallery = ({ imageList }) => {
  const [imageDetails, setImageDetails] = useState({});
  const [modal, setModal] = useState(false);

  const onClickImage = (el) => {
    console.log(el);
    setImageDetails(el);
    setModal(true);
  };

  return (
    <div className="mx-auto mt-[3rem]">
      <div className=" xl:columns-3 columns-2">
        {imageList &&
          imageList?.map((el, i) => (
            <motion.img
              onClick={() => onClickImage(el)}
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              layout
              alt={el?.id}
              key={el?.id}
              className="rounded-[30px] cursor-pointer borde object-cover w-full h-auto py-[10px] hover:grayscale transition-all duration-300"
              src={el?.data?.imageUrl}
            />
          ))}
        <ImageModal
          isModal={modal}
          setIsModal={setModal}
          picture={imageDetails?.data?.imageUrl}
        />
      </div>
    </div>
  );
};

export default ImageGallery;
