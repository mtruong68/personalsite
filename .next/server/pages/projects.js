module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RHEb");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FIap":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("biE2");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);





const TempLink = ({
  as,
  children,
  className,
  href
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    className: className,
    children: "\uD83D\uDCBB\uD83D\uDC2F\uD83D\uDD8D\uFE0F"
  })
});

const Navigation = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(TempLink)`
  color: white;
  text-decoration: none;
  font-size: 26px;
  padding-bottom: 2px;
  &:hover {
    color: #59feff;
  }
`;
/* harmony default export */ __webpack_exports__["a"] = (Navigation);

/***/ }),

/***/ "PM05":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"projectPageContainer": "projects_projectPageContainer__1GLWm",
	"filterTagContainer": "projects_filterTagContainer__2NjaJ",
	"filterOrder": "projects_filterOrder__Ma3Fh",
	"clearButton": "projects_clearButton__1FTH5",
	"filterTitle": "projects_filterTitle__1lcOo",
	"projectsContainer": "projects_projectsContainer__1EAJL",
	"topBar": "projects_topBar__VzSBy",
	"projectNameContainer": "projects_projectNameContainer__3D9JE",
	"projectName": "projects_projectName__KIwTv",
	"projectYear": "projects_projectYear__ThhYD",
	"projectDesc": "projects_projectDesc__3sIEq",
	"projectTextContainer": "projects_projectTextContainer__BTAVo",
	"projectContainer": "projects_projectContainer__LGzYh",
	"previewImage": "projects_previewImage__3tuZh",
	"filterButton": "projects_filterButton__RW5Rx",
	"removeIcon": "projects_removeIcon__bH5fD",
	"toggled": "projects_toggled__1xy15",
	"untoggled": "projects_untoggled__2lvLA"
};


/***/ }),

/***/ "RHEb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("biE2");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LoadingImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("SCq6");
/* harmony import */ var _components_Navigation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("FIap");
/* harmony import */ var _projects_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("PM05");
/* harmony import */ var _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_projects_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);










const Temp3Link = ({
  as,
  children,
  className,
  href
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: href,
  as: as,
  passHref: true,
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    className: className,
    children: children
  })
});

const ProjectLink = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(Temp3Link)`
  font-family: 'Josefin Sans', sans-serif;
  letter-spacing: 2px;
  font-size: 24px;
  color: #0e19a9;
  &:hover {
    color: blue;
  }
`;
const allProjects = [{
  name: "Copy/Paste",
  year: "2018",
  desc: "Series of mixed media collages made from children's books then digitally altered",
  image: "https://res.cloudinary.com/dftvewldz/image/upload/h_250/v1538425934/collages/digital/c1.jpg",
  smallImage: "https://res.cloudinary.com/dftvewldz/image/upload/h_25/v1538425934/collages/digital/c1.jpg",
  alt: "collage",
  tags: ["art"],
  mary: '4',
  link: "/gallery"
}, {
  name: "ICT VR Research",
  year: "2019",
  desc: "VR Games created for the Institute of Creative Technology for physical therapy resesarch. Uses hand tracking to track how patients practice various arm motions.",
  image: "https://res.cloudinary.com/dftvewldz/image/upload//c_scale,w_667/v1609780336/games/make-it-neat-preview.gif",
  smallImage: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,h_25/v1609780336/games/make-it-neat-preview.gif",
  tags: ["code", "research", "game"],
  mary: '2',
  link: "https://www.youtube.com/watch?v=Dvz5tDsmNiM&feature=youtu.be"
}, {
  name: "Art-Discontent",
  year: "2020",
  desc: "Profiles on young artistic practices. Website, interviews, and articles all created by me.",
  image: "https://res.cloudinary.com/dftvewldz/image/upload//c_scale,w_667/v1609866701/previews/art-discontent-preview.gif",
  smallImage: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,h_25/v1609866701/previews/art-discontent-preview.gif",
  tags: ["art", "code", "writing"],
  mary: '1',
  link: "https://art-discontent.com/"
}, {
  name: "Off the Record",
  year: "2020",
  desc: "Text based game about the experience of journalists of color for Study Hall. Interface created by me.",
  image: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_667/v1609866836/off-the-record-preview.png",
  smallImage: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,h_25/v1609866836/off-the-record-preview.png",
  tags: ["freelance", "games", "code"],
  mary: '2',
  link: "https://studyhall.xyz/off-the-record/"
}, {
  name: "Vaporsquare",
  year: "2018",
  desc: "An interactive installation exploring promised technological paradise, obsolescense, and unknown systems.",
  image: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_667/v1535237063/vaporsquare/cmr2.gif",
  smallImage: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,h_25/v1535237063/vaporsquare/cmr2.gif",
  tags: ["art"],
  mary: '1',
  link: "/gallery"
}, {
  name: "Publications",
  year: "2020",
  desc: "Various prints, zines, and sketchbooks in an online format.",
  image: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_667/v1610603060/publicationsPreview.png",
  smallImage: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,h_25/v1610603060/publicationsPreview.png",
  tags: ["art", "writing"],
  mary: '3',
  link: "/projects/publications"
}, {
  name: "Alexa, the Acousmatic Voice",
  year: "2020",
  desc: "Web sound sequencer and essay about the source of Amazon's Alexa",
  image: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_667/v1609867855/games/acousmaticalexa.png",
  smallImage: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,h_25/v1609867855/games/acousmaticalexa.png",
  tags: ["art", "writing", "code"],
  mary: '5',
  link: "https://acousmatic-alexa.glitch.me/"
}, {
  name: "Vaporwave, the Eclectic Aesthetic about Time",
  year: "2019",
  desc: "Web Image Generator and essay about the visual inspirations of Vaporwave aesthetics",
  image: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,w_667/v1580524622/games/vaporwavegen.png",
  smallImage: "https://res.cloudinary.com/dftvewldz/image/upload/c_scale,h_25/v1580524622/games/vaporwavegen.png",
  tags: ["art", "writing", "code"],
  mary: '3',
  link: "https://vaporwave-generator.glitch.me/"
}];
const tags = ["art", "code", "freelance", "research", "games", "vr/ar", "writing"];

function init_filterTags(tag) {
  if (tag && tags.includes(tag)) {
    return [tag];
  } else {
    return [];
  }
}

function init_filters(tag) {
  if (tag && tags.includes(tag)) {
    let projs = allProjects.filter(p => p.tags.includes(tag));
    return projs;
  } else {
    return allProjects;
  }
}

function init_filterButtonStates(tag) {
  let a = new Array(tags.length);

  for (let i = 0; i < a.length; ++i) {
    a[i] = false;
  }

  if (tag && tags.includes(tag)) {
    a[tags.indexOf(tag)] = true;
  }

  return a;
}

const Art = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: filterTags,
    1: setFilterTags
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(init_filterTags(router.query.filter));
  const {
    0: filterButtonStates,
    1: setFilterButtonStates
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(init_filterButtonStates(router.query.filter));
  const projects = allProjects;
  const {
    0: filteredProjects,
    1: setFilteredProjects
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(init_filters(router.query.filter));

  const filterResults = tag => {
    let copy = [...filterTags];
    let states = [...filterButtonStates];

    if (filterTags.includes(tag)) {
      let index = copy.indexOf(tag);
      copy.splice(index, 1);
      states[tags.indexOf(tag)] = false;
    } else {
      copy.push(tag);
      states[tags.indexOf(tag)] = true;
    }

    let projs = allProjects.filter(p => {
      return copy.every(t => p.tags.includes(t));
    });
    setFilterTags(copy);
    setFilterButtonStates(states);
    setFilteredProjects(projs);
  };

  const filterOrder = () => {
    let filter = document.getElementById('filterOrder');
    let orderedProjects = [...filteredProjects];

    switch (filter.value) {
      case "year_desc":
        orderedProjects = orderedProjects.sort(function (a, b) {
          return parseInt(b.year) - parseInt(a.year);
        });
        break;

      case "year_asc":
        orderedProjects = orderedProjects.sort(function (a, b) {
          return parseInt(a.year) - parseInt(b.year);
        });
        break;

      case "mary":
        orderedProjects = orderedProjects.sort(function (a, b) {
          return parseInt(a.mary) - parseInt(b.mary);
        });
        break;
    }

    setFilteredProjects(orderedProjects);
  };

  const clearFilters = () => {
    let a = [...filterButtonStates];

    for (let i = 0; i < a.length; ++i) {
      a[i] = false;
    }

    setFilterTags([]);
    setFilterButtonStates(a);
    setFilteredProjects(allProjects);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "navContainer",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Navigation_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {})
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.projectPageContainer,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.filterTagContainer,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.filterTitle,
          children: "Filter Projects"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          style: {
            margin: `12px 0px`,
            position: 'relative'
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("select", {
            className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.filterOrder,
            id: "filterOrder",
            onChange: () => filterOrder(),
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
              value: "year_desc",
              children: "Year \u25BC"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
              value: "year_asc",
              children: "Year \u25B2"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
              value: "mary",
              children: "Mary's Favs"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.clearButton,
            onClick: () => clearFilters(),
            children: "Clear Filters"
          })]
        }), tags.map((tag, i) => {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("button", {
            className: filterButtonStates[i] ? `${_projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.filterButton} ${_projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.toggled}` : `${_projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.filterButton} ${_projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.untoggled}`,
            onClick: () => filterResults(tag),
            children: [tag, filterButtonStates[i] && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              className: `material-icons ${_projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.removeIcon}`,
              children: "close"
            })]
          }, tag);
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.projectsContainer,
        children: filteredProjects.length == 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.topBar
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.projectContainer,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.projectTextContainer,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.projectNameContainer,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {})
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.projectDesc,
                children: "Yikes! No project matches these filters! Try adjusting the filters \u2B05 here \u2B05 !"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.previewImage,
              src: "https://res.cloudinary.com/dftvewldz/image/upload/v1610068685/cryingcat.jpg"
            })]
          })]
        }) : filteredProjects.map((project, i) => {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.topBar
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.projectContainer,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.projectTextContainer,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                  className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.projectNameContainer,
                  children: [project.link[0] === '/' ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ProjectLink, {
                    className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.projectName,
                    href: project.link,
                    children: project.name
                  }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                    className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.projectName,
                    href: project.link,
                    target: "_blank",
                    children: project.name
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
                    className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.projectYear,
                    children: ["  ", project.year]
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.projectDesc,
                  children: project.desc
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: _projects_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.previewImage,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_LoadingImage_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
                  largeImgSrc: project.image,
                  smallImgSrc: project.smallImage,
                  alt: project.alt
                })
              })]
            })]
          }, `${project.name}`);
        })
      })]
    })]
  });
};

Art.getInitialProps = async ({
  query
}) => {
  return {
    query: query
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Art);

/***/ }),

/***/ "SCq6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LoadingImage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qeXz");
/* harmony import */ var _LoadingImage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LoadingImage_module_css__WEBPACK_IMPORTED_MODULE_2__);





const LoadImage = props => {
  const [blur, setBlur] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);
  const loadingImage = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (loadingImage.current.complete) {
      setBlur(false);
    }

    loadingImage.current.addEventListener('load', () => {
      setBlur(false);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: `${_LoadingImage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image_container} ${props.className} ${blur ? _LoadingImage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.blur : _LoadingImage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.unblur}`,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
      className: _LoadingImage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.placeholder_image,
      src: props.smallImgSrc,
      alt: props.alt
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
      className: _LoadingImage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.real_image,
      ref: loadingImage,
      src: props.largeImgSrc,
      alt: props.alt
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (LoadImage);

/***/ }),

/***/ "biE2":
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "qeXz":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"image_container": "LoadingImage_image_container__1rPCH",
	"placeholder_image": "LoadingImage_placeholder_image__2b3yH",
	"real_image": "LoadingImage_real_image__W2lPT",
	"blur": "LoadingImage_blur__1Bo-M",
	"unblur": "LoadingImage_unblur__3-7Cn"
};


/***/ })

/******/ });