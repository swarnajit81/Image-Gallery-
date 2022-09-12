import { AiOutlineUpload } from "react-icons/ai";
const UploadForm = ({ onUploadImage, percent, error, file }) => {
  return (
    <form>
      <input
        type="file"
        name="image_upload"
        id="image_upload"
        className="hidden"
        onChange={onUploadImage}
      />
      <label
        htmlFor="image_upload"
        className={`bg-transparent hover:bg-red-200 hover:text-white transition-all duration-200 rounded-full cursor-pointer mx-auto flex mt-[3rem] items-center justify-center w-[50px] h-[50px] border-[3px] border-red-200 text-red-200`}
      >
        <AiOutlineUpload size={25} />
      </label>
       <p className="text-red-300 text-center pt-[1rem]"> {error} </p>

      
        <p className="text-red-300 text-center pt-[1rem]">{file?.name}</p>
      

      
        <div
          style={{ width: `${file ? percent : 0}%` }}
          className={`h-[2px] rounded-full bg-red-300 mt-[2rem] transition-all duration-300`}
        ></div>
      
    </form>
  );
};

export default UploadForm;
