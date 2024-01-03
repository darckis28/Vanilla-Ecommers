/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/data/data.js":
/*!*********************************!*\
  !*** ./src/assets/data/data.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCategory: () => (/* binding */ getCategory),\n/* harmony export */   getProductId: () => (/* binding */ getProductId),\n/* harmony export */   getProducts: () => (/* binding */ getProducts),\n/* harmony export */   getfromCategory: () => (/* binding */ getfromCategory)\n/* harmony export */ });\nconst getProducts = async () => {\r\n  const resul = await fetch(\"https://api.escuelajs.co/api/v1/products/\");\r\n  const data = await resul.json();\r\n  return data;\r\n};\r\nconst getProductId = async (id) => {\r\n  const resul = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);\r\n  const data = await resul.json();\r\n  return data;\r\n};\r\nconst getCategory = async () => {\r\n  const resul = await fetch(\"https://api.escuelajs.co/api/v1/categories\");\r\n  const data = await resul.json();\r\n  return data;\r\n};\r\nconst getfromCategory = async (id) => {\r\n  const resul = await fetch(\r\n    `https://api.escuelajs.co/api/v1/products/?categoryId=${id}`\r\n  );\r\n  const data = await resul.json();\r\n  return data;\r\n};\r\n\n\n//# sourceURL=webpack://ecommers-api/./src/assets/data/data.js?");

/***/ }),

/***/ "./src/components/Card-categoys.js":
/*!*****************************************!*\
  !*** ./src/components/Card-categoys.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   productoId: () => (/* binding */ productoId)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _content_flotante_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-flotante.js */ \"./src/components/content-flotante.js\");\nlet productoId = 0;\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((data) => {\r\n  const { id, title, price, images } = data;\r\n  const div = document.createElement(\"div\");\r\n  div.classList.add(\r\n    \"overflow-hidden\",\r\n    \"rounded-2xl\",\r\n    \"bg-gray-200\",\r\n    \"w-52\",\r\n    \"cursor-pointer\"\r\n  );\r\n  const content = `<img class=\"w-52 h-52 object-cover\" src=\"${\r\n    images[1]\r\n  }\" alt=\"${title}\"/>\r\n                    <h3 class=\"mx-2 text-center uppercase font-semibold text-ellipsis whitespace-nowrap overflow-hidden text-gray-600\"> ${title} </h3>\r\n                    <span class=\"block text-center font-semibold m-auto mb-4 text-gray-400\">\r\n                        ${(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.convert)(price)}</span>`;\r\n  div.innerHTML = content;\r\n  div.addEventListener(\"click\", () => {\r\n    (0,_content_flotante_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\r\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.active)(true);\r\n  });\r\n  return div;\r\n});\r\n\n\n//# sourceURL=webpack://ecommers-api/./src/components/Card-categoys.js?");

/***/ }),

/***/ "./src/components/Categorias.js":
/*!**************************************!*\
  !*** ./src/components/Categorias.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _List_Products_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List-Products.js */ \"./src/components/List-Products.js\");\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ name, id }) => {\r\n  const div = document.createElement(\"div\");\r\n  const content = `<header class=\"flex justify-between px-8 my-4\">\r\n  <h2 class=\"text-2xl font-extrabold text-white\">${name}</h2>\r\n  <buttom  class=\"btn-category text-1xl px-3 rounded-sm bg-green-500 cursor-pointer\">\r\n    ver mas <i class=\"fa-solid fa-plus\"></i>\r\n  </buttom>\r\n</header>`;\r\n  div.innerHTML = content;\r\n  const btn = div.querySelector(\".btn-category \");\r\n\r\n  btn.addEventListener(\"click\", () => {\r\n    location.href = \"./src/pages/products-category.html\";\r\n    localStorage.setItem(\"id\", id);\r\n    localStorage.setItem(\"category\", name);\r\n  });\r\n\r\n  div.appendChild((0,_List_Products_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, 5));\r\n  return div;\r\n});\r\n\n\n//# sourceURL=webpack://ecommers-api/./src/components/Categorias.js?");

/***/ }),

/***/ "./src/components/List-Products.js":
/*!*****************************************!*\
  !*** ./src/components/List-Products.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/data/data.js */ \"./src/assets/data/data.js\");\n/* harmony import */ var _Card_categoys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card-categoys.js */ \"./src/components/Card-categoys.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((producID, max = Infinity) => {\r\n  const main = document.createElement(\"main\");\r\n  main.classList.add(\"p-10\", \"flex\", \"justify-evenly\", \"flex-wrap\", \"gap-5\");\r\n  (0,_assets_data_data_js__WEBPACK_IMPORTED_MODULE_0__.getfromCategory)(producID).then((data) =>\r\n    data.slice(0, max).forEach((element) => {\r\n      main.appendChild((0,_Card_categoys_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element));\r\n    })\r\n  );\r\n  return main;\r\n});\r\n\n\n//# sourceURL=webpack://ecommers-api/./src/components/List-Products.js?");

/***/ }),

/***/ "./src/components/content-flotante.js":
/*!********************************************!*\
  !*** ./src/components/content-flotante.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/data/data.js */ \"./src/assets/data/data.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((id) =>\r\n  (0,_assets_data_data_js__WEBPACK_IMPORTED_MODULE_0__.getProductId)(id).then(({ description, title, images, price }) => {\r\n    const content = `\r\n        <button onclick=\"${() =>\r\n          (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.active)(false)}\" id=\"close\" class=\"absolute top-1 right-3 \">\r\n          <i class=\"fa-solid fa-x \"></i>\r\n        </button>\r\n        <h3 class=\"my-2 text-xl font-semibold text-gray-500\">${title}</h3>\r\n        <img\r\n          class=\"rounded-xl w-full h-80 object-cover\"\r\n          src=\"${images[0]}\"\r\n          alt=\"\"\r\n        />\r\n        <p class=\"my-2 text-sm font-light text-gray-400\">${description}</p>\r\n        <span\r\n          class=\"absolute top-16 px-3 py-1 rounded-xl right-2 bg-red-500 text-white text-center rotate-45\"\r\n          >${(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.convert)(price)}</span\r\n        >\r\n        <button\r\n          class=\"text-center w-full my-3 py-2 bg-red-600 rounded-md text-white text-lg font-semibold\"\r\n        >\r\n          Añadir carrito\r\n        </button>\r\n\r\n  `;\r\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.details)(content);\r\n  }));\r\n\n\n//# sourceURL=webpack://ecommers-api/./src/components/content-flotante.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   active: () => (/* binding */ active),\n/* harmony export */   convert: () => (/* binding */ convert),\n/* harmony export */   details: () => (/* binding */ details)\n/* harmony export */ });\n/* harmony import */ var _components_Categorias_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Categorias.js */ \"./src/components/Categorias.js\");\n/* harmony import */ var _assets_data_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/data/data.js */ \"./src/assets/data/data.js\");\n\r\n\r\nconst $container = document.getElementById(\"container-content\");\r\nconst $flot = document.getElementById(\"flot-content\");\r\nif (!localStorage.getItem(\"id\")) {\r\n  localStorage.setItem(\"id\", \"0\");\r\n}\r\nif (!localStorage.getItem(\"category\")) {\r\n  localStorage.setItem(\"category\", \"0\");\r\n}\r\ntry {\r\n  (0,_assets_data_data_js__WEBPACK_IMPORTED_MODULE_1__.getCategory)().then(async (data) => {\r\n    data.slice(0, 5).forEach((category) => {\r\n      try {\r\n        $container.appendChild((0,_components_Categorias_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(category));\r\n      } catch (e) {\r\n        console.log(e);\r\n      }\r\n    });\r\n  });\r\n  $flot.addEventListener(\"click\", (e) => {\r\n    if (e.target && e.target.nodeName === \"I\") {\r\n      $flot.innerHTML = \"\";\r\n      active(false);\r\n    }\r\n  });\r\n} catch (e) {\r\n  console.log(e);\r\n}\r\nfunction active(interuptor) {\r\n  interuptor\r\n    ? document\r\n        .getElementById(\"flotante\")\r\n        .classList.replace(\"invisible\", \"visible\")\r\n    : document\r\n        .getElementById(\"flotante\")\r\n        .classList.replace(\"visible\", \"invisible\");\r\n}\r\nfunction convert(num) {\r\n  return num.toLocaleString(\"en-US\", {\r\n    style: \"currency\",\r\n    currency: \"USD\",\r\n  });\r\n}\r\nfunction details(content) {\r\n  $flot.innerHTML = content;\r\n}\r\n\n\n//# sourceURL=webpack://ecommers-api/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;