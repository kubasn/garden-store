import React, { ChangeEvent, useState } from "react";
import { RiPlantFill } from "react-icons/ri";
import { GiPriceTag } from "react-icons/gi";
import { AiOutlineCloudDownload, AiFillDelete } from "react-icons/ai";
import { MdDescription } from "react-icons/md";
import { motion } from "framer-motion";
import { categories } from "../backend";
import Loader from "./UI/Loader";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firebase.config";
import { getItems, saveItem } from "./utils/functionsFirebase";
import { useDispatch } from "react-redux";
import { actionType } from "../state/actionType";

interface isItem {
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
}

const CreateItem = () => {
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState(false);
  const [alert, setAlert] = useState("");
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();

  const [item, setItem] = useState<isItem>({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });
  console.log(item);

  const fetchData = async () => {
    await getItems().then((data) => {
      console.log(data);
      dispatch({
        type: actionType.SET_ITEMS,
        payload: data,
      });
    });
  };

  const changeFunction = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    type: string
  ) => {
    setItem({ ...item, [type]: e.target.value });
    console.log(item);
  };

  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const imageFile = e.target.files![0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setMsg("Error while uploading, try again!");
        setFields(true);
        setAlert("danger");

        setTimeout(() => {
          setLoading(false);

          setFields(false);
        }, 5000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setItem({ ...item, image: downloadURL });
          console.log("ello");
          setLoading(false);
          setFields(true);
          setMsg("Image uploaded");
          setAlert("success");

          setTimeout(() => {
            setLoading(false);

            setFields(false);
          }, 5000);
        });
      }
    );
  };
  const deleteImage = () => {
    setLoading(true);
    const deleteRef = ref(storage, item.image);
    deleteObject(deleteRef).then(() => {
      item.image = "";
      setLoading(false);
      setFields(true);
      setMsg("Image deleted successfully");
      setAlert("success");
      setTimeout(() => {
        setFields(false);
      }, 400);
    });
  };
  const saveDetails = () => {
    setLoading(true);
    try {
      if (
        !item.title ||
        !item.category ||
        !item.description ||
        !item.image ||
        !item.price
      ) {
        console.log(item);
        setFields(true);
        setMsg("Fields cannot be empty");
        setAlert("danger");

        setLoading(false);
        setTimeout(() => {
          setFields(false);
          setLoading(false);
        }, 4000);
      } else {
        const data = {
          id: Math.floor(Math.random() * 100000),
          title: item.title,
          price: item.price,
          description: item.description,
          category: item.category,
          imageUrl: item.image,
        };
        saveItem(data);

        setLoading(false);
        clearData();
        setFields(true);
        setMsg("Fields uploaded successfully");
        setAlert("success");

        setTimeout(() => {
          setFields(false);
        }, 400);
      }
    } catch (err) {
      setFields(true);
      setMsg("Error while uploading: Try again");
      setAlert("danger");

      setTimeout(() => {
        setFields(false);
        setLoading(false);
      }, 4000);
    }

    fetchData();
  };

  const clearData = () => {
    setItem({ title: "", price: "", description: "", category: "", image: "" });
  };

  return (
    <div className="h-auto min-h-screen w-full p-4 flex items-center justify-center">
      <div className="w-[90%] md:w-[75%] border border-gray-200 rounded-lg p-4">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-xl font-semibold text-center ${
              alert == "danger"
                ? "bg-red-300 text-red-700"
                : "bg-green-300 text-green-700"
            }`}
          >
            {msg}
          </motion.p>
        )}
        <div className="w-full py-2 border-b border-gray-300  flex flex-col  gap-2 ">
          {/* icon */}
          <div className="relative w-full mx-auto flex   justify-center gap-2">
            <div className="relative w-1/2">
              <RiPlantFill className="absolute left-[-25px] top-1 text-xl text-gray-700" />
              <input
                type="text"
                required
                value={item.title}
                onChange={(e) => changeFunction(e, "title")}
                placeholder="Insert title"
                className=" w-full h-full text-lg p-1 px-2 outline-none  text-gray-700 "
              />
            </div>
          </div>

          <div className="w-full flex justify-center">
            <select
              onChange={(e) => changeFunction(e, "category")}
              className="w-1/2  outline-none p-2 text-gray-500"
            >
              <option value="other" className="bg-white">
                Select category
              </option>
              {categories &&
                categories.map((item) => {
                  return (
                    <option
                      className="text-base border-0 outline-none text-gray-600"
                      value={item.urlParamName}
                    >
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div className="mt-2 group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-[240px] md:h-[480px] cursor-pointer rounded-md">
          {loading ? (
            <Loader />
          ) : (
            <>
              {!item.image ? (
                <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                  <div className="w-full h-full flex flex-col items-center justify-center gap-1">
                    <AiOutlineCloudDownload className="text-[50px] text-gray-500 hover:text-gray-700" />
                    <p className="text-gray-500">Click here to upload image</p>
                  </div>
                  <input
                    type="file"
                    name="uploadImg"
                    accept="image/*"
                    className="w-0 h-0"
                    onChange={uploadImage}
                  />
                </label>
              ) : (
                <div className="relative h-full">
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt="uploaded image"
                  />
                  <button
                    onClick={deleteImage}
                    className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md transition-all ease-in-out duration-500 "
                  >
                    <AiFillDelete className="text-white" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
        <div className="mt-4">
          <div className="relative w-full mx-auto flex   justify-center gap-2">
            <div className="relative w-1/2">
              <GiPriceTag className="absolute left-[-25px] top-1 text-xl text-gray-700" />
              <input
                type="text"
                required
                value={item.price}
                onChange={(e) => changeFunction(e, "price")}
                placeholder="Insert price"
                className=" w-full h-full text-lg p-1 px-2  outline-none  text-gray-700 "
              />
            </div>
          </div>
          <div className="relative w-full mx-auto flex mt-2    justify-center gap-2">
            <div className="relative w-1/2">
              <MdDescription className="absolute left-[-25px] top-1 text-xl text-gray-700" />
              <textarea
                required
                value={item.description}
                onChange={(e) => changeFunction(e, "description")}
                placeholder="Description of item..."
                className=" w-full h-full text-lg p-1 px-2  outline-none  text-gray-700  "
              />
            </div>
          </div>
        </div>
        <button
          className=" w-1/2 md:w-1/5 flex mx-auto justify-center  py-1 rounded-sm hover:rounded-md   mt-4 text-white bg-emerald-600 hover:bg-emerald-700 transition-all ease-in-out duration-500"
          onClick={saveDetails}
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default CreateItem;
