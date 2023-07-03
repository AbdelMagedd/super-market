AbdelMagedd
abdelmagedd
Online

Men3m — 05/29/2023 11:38 PM
https://github.com/Men3m10/dashboard
GitHub
GitHub - Men3m10/dashboard
Contribute to Men3m10/dashboard development by creating an account on GitHub.
GitHub - Men3m10/dashboard
Men3m — 05/29/2023 11:51 PM
Physiotherapy clinic
Category
Men3m — 05/30/2023 12:03 AM
clinc
"name": "infaramnnnnn GgyuuM",
    "description": "llllllllllllllllllllllllll",
    "location": {"governorate":"Alex","street":" Talaat harb"}
Men3m — 05/30/2023 12:14 AM
https://github.com/creativetimofficial/material-dashboard-react-nodejs
GitHub
GitHub - creativetimofficial/material-dashboard-react-nodejs: React...
React Material template connected to working Node API - GitHub - creativetimofficial/material-dashboard-react-nodejs: React Material template connected to working Node API
GitHub - creativetimofficial/material-dashboard-react-nodejs: React...
Men3m — 05/30/2023 12:51 AM
https://mui.com/material-ui/react-grid/
React Grid component - Material UI
The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.
Image
Men3m — 05/30/2023 1:02 AM
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
Expand
message.txt
8 KB
AbdelMagedd — 05/30/2023 1:34 AM
https://github.com/AbdelMagedd/kkkkkkkkkkkkkkkkkkkkk
GitHub
GitHub - AbdelMagedd/kkkkkkkkkkkkkkkkkkkkk
Contribute to AbdelMagedd/kkkkkkkkkkkkkkkkkkkkk development by creating an account on GitHub.
GitHub - AbdelMagedd/kkkkkkkkkkkkkkkkkkkkk
AbdelMagedd
 started a call that lasted an hour.
 — 05/30/2023 2:50 PM
Men3m — 05/30/2023 2:53 PM
https://github.com/Men3m10/jjjjjjjkkk
AbdelMagedd
 started a call that lasted 2 hours.
 — 05/30/2023 4:59 PM
AbdelMagedd — 05/30/2023 5:08 PM
create react model that has 4 inputs to edit club
Men3m — 05/30/2023 5:37 PM
import { useState, useEffect } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import axios from "axios";

export default function useClubData() {
Expand
message.txt
7 KB
AbdelMagedd
 started a call that lasted 3 hours.
 — 05/31/2023 12:26 AM
Men3m — 05/31/2023 12:30 AM
https://mui.com/material-ui/react-modal/#basic-modal
React Modal component - Material UI
The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.
Image
AbdelMagedd — 05/31/2023 12:44 AM
https://mui.com/material-ui/react-modal/#focus-trap
React Modal component - Material UI
The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.
Image
Men3m — 05/31/2023 12:49 AM
men3mreyad705@gmail.com
Men3m@565
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import axios from "axios";
Expand
message.txt
7 KB
AbdelMagedd — 05/31/2023 1:34 AM
https://www.creative-tim.com/learning-lab/bootstrap/modal/material-dashboard
Creative Tim
Modal | Material Dashboard Bootstrap @ Creative Tim
Bootstrap modals are lightweight and multi-purpose popups that are built with HTML, CSS, and JavaScript. The three primary sections of a Bootstrap modal are header, body, and footer. Modals are positioned over everything else in the document and remove scroll from the so that modal content scrolls instead. Use Bootstrap’s JavaScript modal plugi...
AbdelMagedd — 05/31/2023 2:14 AM
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
Expand
message.txt
21 KB
Men3m — 05/31/2023 2:34 AM
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
Expand
message.txt
21 KB
AbdelMagedd — 05/31/2023 3:15 AM
let isMounted = true;

  async function fetchClubData() {
    try {
      const response = await axios.get(
        "https://nutrigym.onrender.com/api/v1/club"
      );

      if (isMounted) {
        setClubData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching club data:", error);
    }
  }

  useEffect(() => {
    fetchClubData();

    return () => {
      isMounted = false;
    };
  }, []);
Men3m — 05/31/2023 3:16 AM
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import axios from "axios";
Expand
message.txt
11 KB
AbdelMagedd — 05/31/2023 3:18 AM
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import axios from "axios";
Expand
message.txt
11 KB
AbdelMagedd
 started a call that lasted 3 hours.
 — 05/31/2023 3:17 PM
AbdelMagedd — 05/31/2023 3:28 PM
const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
Men3m — 05/31/2023 3:40 PM
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
Expand
message.txt
21 KB
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import axios from "axios";
Expand
message.txt
13 KB
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import axios from "axios";
Expand
ccccc.txt
13 KB
AbdelMagedd — 05/31/2023 4:27 PM
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
Expand
message.txt
21 KB
AbdelMagedd — 05/31/2023 5:32 PM
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
Expand
message.txt
28 KB
AbdelMagedd
 started a call that lasted 11 minutes.
 — 05/31/2023 8:45 PM
You missed a call from 
Men3m
 that lasted a few seconds.
 — 05/31/2023 9:31 PM
AbdelMagedd
 started a call that lasted an hour.
 — 05/31/2023 9:31 PM
Men3m — 05/31/2023 9:37 PM
502 056 713
AbdelMagedd — 05/31/2023 9:37 PM
<Grid item xs={12} md={6} lg={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4}>
                  <MDBox mb={1.5}>
                    <ComplexStatisticsCard
                      color="primary"
Expand
message.txt
4 KB
Men3m — 05/31/2023 9:37 PM
p17mnhue
AbdelMagedd — 05/31/2023 9:37 PM
const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    quantity: "",
    price: "",
    image: "",
  });
AbdelMagedd
 started a call that lasted an hour.
 — 06/01/2023 12:20 AM
Men3m — 06/01/2023 12:38 AM
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import axios from "axios";
Expand
message.txt
9 KB
AbdelMagedd
 started a call that lasted a minute.
 — 06/01/2023 11:43 PM
Men3m
 started a call that lasted 3 minutes.
 — 06/14/2023 7:27 PM
Men3m — 06/14/2023 7:29 PM
https://discord.gg/CWkaJF2u
Men3m
 started a call that lasted an hour.
 — 07/02/2023 2:07 AM
Men3m — 07/02/2023 2:23 AM
https://github.com/UsamaSarwar/reactnative-ecommerce-charlie
GitHub
GitHub - UsamaSarwar/reactnative-ecommerce-charlie: Open-Source Rea...
Open-Source React Native Ecommerce Cross Platform Mobile App - GitHub - UsamaSarwar/reactnative-ecommerce-charlie: Open-Source React Native Ecommerce Cross Platform Mobile App
GitHub - UsamaSarwar/reactnative-ecommerce-charlie: Open-Source Rea...
Men3m — 07/02/2023 2:51 AM
https://learn.mongodb.com/learn/learning-path/mongodb-nodejs-developer-path
MongoDB Node.js Developer Learning Path | MongoDB University
After completing the MongoDB Introduction course, learn how to use MongoDB with Node.js with the MongoDB Node.js Developer Path. Register now to get started.
https://www.youtube.com/watch?v=tHP5IWfqPKk&list=PLzNfs-3kBUJnY7Cy1XovLaAkgfjim05RR
YouTube
Tresmerge
Docker Practical Course in Arabic | #01 - Intro & Course Agenda | ب...
Image
AbdelMagedd — Today at 2:21 AM
ودي يخويا
AbdelMagedd
 started a call that lasted 32 minutes.
 — Yesterday at 8:14 PM
Clyde
BOT
 — Today at 8:47 PM
It appears you've been by yourself in this call for more than 3 minutes. The bandwidth patrol has asked me to disconnect you to save bandwidth. That stuff doesn't grow on trees!
Only you can see this • Dismiss message
Men3m
 started a call that lasted 2 hours.
 — Yesterday at 9:08 PM
AbdelMagedd — Today at 9:32 PM
import {
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
Expand
message.txt
9 KB
AbdelMagedd — Today at 9:52 PM
categories
Men3m — Yesterday at 10:10 PM
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  StatusBar,
Expand
message.txt
11 KB
AbdelMagedd — Today at 10:15 PM
import {
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
Expand
message.txt
15 KB
Men3m — Yesterday at 10:28 PM
import {
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  RefreshControl,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import cartIcon from "../../assets/icons/cart_beg.png";
import scanIcon from "../../assets/icons/scan_icons.png";
import easybuylogo from "../../assets/logo/logo.png";
import { colors } from "../../constants";
import CustomIconButton from "../../components/CustomIconButton/CustomIconButton";
import ProductCard from "../../components/ProductCard/ProductCard";
import { network } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreaters from "../../states/actionCreaters/actionCreaters";
import SearchableDropdown from "react-native-searchable-dropdown";
import { SliderBox } from "react-native-image-slider-box";

const slides = [
  require("../../assets/image/banners/banner.png"),
  require("../../assets/image/banners/banner.png"),
];

const HomeScreen = ({ navigation, route }) => {
  const cartproduct = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const { addCartItem } = bindActionCreators(actionCreaters, dispatch);

  const { user } = route.params;
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [refeshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [searchItems, setSearchItems] = useState([]);

  //method to convert the authUser to json object
  const convertToJSON = (obj) => {
    try {
      setUserInfo(JSON.parse(obj));
    } catch (e) {
      setUserInfo(obj);
    }
  };

  //method to navigate to product detail screen of a specific product
  const handleProductPress = (product) => {
    navigation.navigate("productdetail", { product: product });
  };

  //method to add to cart (redux)
  const handleAddToCat = (product) => {
    addCartItem(product);
  };

  var headerOptions = {
    method: "GET",
    redirect: "follow",
  };
  const fetchCategory = () => {
    fetch(`${network.serverip}/categories`, headerOptions) //API call
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setCategories(result.categories);
          setError("");
          let payload = [];
          result.data.forEach((cat, index) => {
            let searchableItem = { ...cat, id: ++index, name: cat.title };
            payload.push(searchableItem);
          });
          setSearchItems(payload);
        } else {
          setError(result.message);
        }
      })
      .catch((error) => {
        setError(error.message);
        console.log("error", error);
      });
  };

  const fetchProduct = () => {
    fetch(`${network.serverip}/products`, headerOptions) //API call
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setProducts(result.data);
          setError("");
          let payload = [];
          result.data.forEach((cat, index) => {
... (315 lines left)
Collapse
message.txt
12 KB
Men3m — Yesterday at 10:41 PM
const path = require("path");
const multer = require("multer");
const ApiError = require("../utils/apiError");

const MulterProps = () => {
  //////////////////////////////////////////////////////
  // disk storage==>لو انت مش عايز تعدل حاجه هنكتفي ب دي
  const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  ////////////////////////////////////////////////////////////////////
  // const multerStorage = multer.diskStorage();

  // const multerFilter = function (req, file, cb) {
  //   console.log(file);
  //   if (file.mimetype.startsWith("image") || file.mimetype === "image/gif") {
  //     cb(null, true);
  //   } else {
  //     cb(new ApiError("Onley Images Allowed", 400), false);
  //   }
  // };

  const upload = multer({ storage: multerStorage });
  return upload;
};

module.exports = {
  /لو انت محتاج تعمل (image proccessing)للصور  اللي هو تعدل طول عرض جوده  ==>هنستخدم ميموري ستوريج/
  //memory storage
  uploadSingleImage: (fieldName) => MulterProps().single(fieldName),

  uploadMixOfImages: (arrOfFields) => MulterProps().fields(arrOfFields),
};
var cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dj3uyodvz",
  api_key: "955235792318767",
  api_secret: "Eertp4kTJO_6SP4Nlb67QRD69EM",
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

// const uploadImageCloudinary = (image) => {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.upload(image, opts, (err, res) => {
//       if (res && res.secure_url) {
//         console.log(res.secure_url);
//         return resolve(res.secure_url);
//       }
//       console.log(err.message);
//       return reject({ message: err.message });
//     });
//   });
// };

module.exports = cloudinary;
uploadimgcloudinary
Clyde
BOT
 — Today at 10:47 PM
It appears you've been by yourself in this call for more than 3 minutes. The bandwidth patrol has asked me to disconnect you to save bandwidth. That stuff doesn't grow on trees!
Only you can see this • Dismiss message
Men3m
 started a call.
 — Yesterday at 10:51 PM
Men3m — Yesterday at 10:53 PM
const cloudinary = require("../middlewares/uploadImageCloudnary");
const { uploadSingleImage } = require("../middlewares/uploadImageMiddleware");
AbdelMagedd — Today at 10:58 PM
سامعككككككككككككك
Men3m — Yesterday at 10:59 PM
"cloudinary": "^1.37.2",
"nodemailer": "^6.8.0",
uploadExerciseImage: uploadSingleImage("image"),
  uploadImgCloud: asyncHandler(async (req, res, next) => {
    const result = await cloudinary.uploader.upload(req.file.path);
    req.body.image = result.url;
    next();
  }),
AbdelMagedd — Today at 11:06 PM
const express = require("express");
const app = express();
const port = process.env.PORT;
var bodyParser = require("body-parser");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
Expand
message.txt
5 KB
Men3m — Yesterday at 11:10 PM
jj
const express = require("express");
const app = express();
const port = process.env.PORT;
var bodyParser = require("body-parser");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
Expand
message.txt
4 KB
AbdelMagedd — Today at 11:16 PM
const productModel = require("../../models/product")

module.exports.addProduct = async (req, res) => {
    try{

        const {title, sku, price, image} = req.body;
Expand
message.txt
4 KB
Men3m — Yesterday at 11:19 PM
f
////////////////////////////////////////
const productModel = require("../../models/product")


module.exports.uploadProductImage = uploadSingleImage("image"),
module.exports.uploadImgCloud = async (req, res) => {
Expand
message.txt
4 KB
AbdelMagedd — Yesterday at 11:53 PM
https://github.com/AbdelMagedd/super-market
GitHub
GitHub - AbdelMagedd/super-market
Contribute to AbdelMagedd/super-market development by creating an account on GitHub.
GitHub - AbdelMagedd/super-market
AbdelMagedd — Today at 12:04 AM
https://github.com/AbdelMagedd/super-market
GitHub
GitHub - AbdelMagedd/super-market
Contribute to AbdelMagedd/super-market development by creating an account on GitHub.
GitHub - AbdelMagedd/super-market
Men3m — Today at 12:38 AM
f
const productModel = require("../../models/product");
const cloudinary = require("../../uploadimgcloudinary");
const { uploadSingleImage } = require("../../uploadImage");
(module.exports.uploadProductImage = uploadSingleImage("image")),
  (module.exports.uploadImgCloud = async (req, res, next) => {
    try {
Expand
message.txt
4 KB
﻿
const productModel = require("../../models/product");
const cloudinary = require("../../uploadimgcloudinary");
const { uploadSingleImage } = require("../../uploadImage");
(module.exports.uploadProductImage = uploadSingleImage("image")),
  (module.exports.uploadImgCloud = async (req, res, next) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      req.body.image = result.url;
      next();
    } catch (error) {
      return res.send(error.message);
    }
  });

module.exports.addProduct = async (req, res) => {
  try {
    const { title, sku, price, image } = req.body;

    if (!title || !sku || !price) return res.send("Fields are empty");

    let product = new productModel(req.body);
    product.save();

    return res.json({
      success: true,
      message: "Product inserted successfully",
      data: product,
      image,
    });
  } catch (error) {
    return res.send(error.message);
  }
};

module.exports.getProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    const productsCount = await productModel.find().count();

    return res.json({
      success: true,
      status: 400,
      message: "list of all products",
      products,
      count: productsCount,
    });
  } catch (error) {
    return res.send(error.message);
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const { title, sku, price, image } = req.body;
    const { id } = req.query;

    // check if product exist with the given product id
    const product = await productModel.findOne({ _id: id });

    if (product) {
      const updatedProduct = await productModel.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      );

      return res.json({
        success: true,
        status: 200,
        message: "product updated successfully",
        data: updatedProduct,
      });
    } else {
      return res.json({
        success: false,
        status: 400,
        message: "product does not exist",
      });
    }
  } catch (error) {
    return res.send(error.message);
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.query;

    // check if product exist with the given product id
    const product = await productModel.findOneAndDelete({ _id: id });
    if (!product) {
      return res.json({
        success: false,
        message: "product does not exist",
      });
    }
    return res.json({
      success: true,
      message: "product deleted successfully",
    });
  } catch (error) {
    return res.send(error.message);
  }
};

module.exports.getAllProducts = async (req, res) => {
  try {
    // Search through title names
    var { search } = req.query;
    if (!search) search = "";

    const products = await productModel
      .find({ title: { $regex: search, $options: "i" } })
      .populate("category");

    return res.json({
      success: true,
      status: 200,
      message: "list of products",
      data: products,
    });
  } catch (error) {
    return res.json({
      success: false,
      status: 400,
      message: error.message,
    });
  }
};
message.txt
4 KB
