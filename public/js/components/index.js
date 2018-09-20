webpackJsonp([0],{

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var elements = exports.elements = {
  searchForm: document.querySelector('.search'),
  searchInput: document.querySelector('.search__field'),
  searchRes: document.querySelector('.results'),
  searchResList: document.querySelector('.results__list'),
  searchResPages: document.querySelector('.results__pages'),
  recipe: document.querySelector('.recipe'),
  shopping: document.querySelector('.shopping__list'),
  likesMenu: document.querySelector('.likes__field'),
  likesList: document.querySelector('.likes__list')

};

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _searchView = __webpack_require__(157);

var _searchView2 = _interopRequireDefault(_searchView);

var _querystring = __webpack_require__(486);

var _Showcase = __webpack_require__(156);

var _Showcase2 = _interopRequireDefault(_Showcase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recipe = function (_Component) {
  _inherits(Recipe, _Component);

  function Recipe(props) {
    _classCallCheck(this, Recipe);

    var _this = _possibleConstructorReturn(this, (Recipe.__proto__ || Object.getPrototypeOf(Recipe)).call(this, props));

    _this.limitRecipeTitle = function (title) {
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 17;


      var recipeTitle = [];
      if (title.length > limit) {
        title.split(' ').reduce(function (acc, cur) {

          if (acc + cur.length <= limit) {
            recipeTitle.push(cur);
          }
          return acc + cur.length;
        }, 0);
        return recipeTitle.join(' ') + ' ...';
      }
      return title;
    };

    _this.captureRecipes = function (recipes, page, resPerPage) {

      if (_this.props.globalState.recipes != undefined) {
        var start = (page - 1) * resPerPage;
        var end = page * resPerPage;
        // recipes.slice(start, end).forEach(this.captureRecipes())
        var recipe = recipes.slice(start, end);
        var rec = Object.values(recipe);
        console.log(rec);
        console.log(_this.props.globalState.recipes);

        return rec.map(function (item, i) {
          return _react2.default.createElement(
            'div',
            { className: 'item', key: i, onClick: function onClick() {
                return _this.props.changeState(item.recipe_id);
              } },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { className: 'results__link', href: '#' + item.recipe_id },
                _react2.default.createElement(
                  'figure',
                  { className: 'results__fig' },
                  _react2.default.createElement('img', { src: '' + item.image_url, alt: '' + item.title })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'results__data' },
                  _react2.default.createElement(
                    'h4',
                    { className: 'results__name' },
                    _this.limitRecipeTitle(item.title)
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'results__author' },
                    item.publisher
                  )
                )
              )
            )
          );
        });
      }
    };

    _this.captureRecipes = _this.captureRecipes.bind(_this);
    // this.renderResults = this.renderResults.bind(this)
    _this.limitRecipeTitle = _this.limitRecipeTitle.bind(_this);
    _this.createButton = _this.createButton.bind(_this);
    // this.changePage = this.changePage.bind(this)
    _this.state = {
      name: 'ron'
    };
    return _this;
  }

  //  renderRecipe = (recipe)=>{
  //   return (<div>
  //     <li>
  //     <a class="results__link" >

  // {console.log(recipe.recipe_id)}
  //   </a>

  //   </li>


  //     </div>)

  //   }

  // captureRecipes(){
  // let arrayRecipes = this.props.globalState.recipes
  // for( let x = 0; x < arrayRecipes.length; x++){
  //  this.renderRecipe(arrayRecipes[x])
  // }


  // }


  _createClass(Recipe, [{
    key: 'createButton',
    value: function createButton(page, type) {
      var _this2 = this;

      var types = this.props.globalState.changePage;

      if (types == 2 || types == 3 || types == 4) {
        return this.props.globalState.pageType.map(function (item) {
          return _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                return item == 'prev' ? _this2.props.minPage() : _this2.props.addPage();
              }, className: 'btn-inline results__btn--' + item, 'data-goto': '' + (item === 'prev' ? page : page) },
            _react2.default.createElement(
              'span',
              null,
              'Page ',
              item === 'prev' ? page - 1 : page
            ),
            _react2.default.createElement(
              'svg',
              { className: 'search__icon' },
              _react2.default.createElement('use', { href: 'img/icons.svg#icon-triangle-' + (item === 'prev' ? 'left' : 'right') })
            )
          );
        });
      } else if (types == 1) {
        return _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.props.addPage();
            }, className: 'btn-inline results__btn--' + type[1], 'data-goto': '' + (type[1] === 'prev' ? page : page) },
          _react2.default.createElement(
            'span',
            null,
            'Page ',
            type[1] === 'prev' ? page : page
          ),
          _react2.default.createElement(
            'svg',
            { className: 'search__icon' },
            _react2.default.createElement('use', { href: 'img/icons.svg#icon-triangle-' + (type[1] === 'prev' ? 'left' : 'right') })
          )
        );
      } else if (types == 5) {
        return _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.props.minPage();
            }, className: 'btn-inline results__btn--' + type[0], 'data-goto': '' + (type[0] === 'prev' ? page : page) },
          _react2.default.createElement(
            'span',
            null,
            'Page ',
            type[0] === 'prev' ? page : page
          ),
          _react2.default.createElement(
            'svg',
            { className: 'search__icon' },
            _react2.default.createElement('use', { href: 'img/icons.svg#icon-triangle-' + (type[0] === 'prev' ? 'left' : 'right') })
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'col-xs-3 col-sm-3  col-md-3 col-lg-3 recipe' },
        _react2.default.createElement(
          'h1',
          { className: 'recipe__name' },
          'Recipes'
        ),
        _react2.default.createElement(
          'div',
          { className: 'results' },
          _react2.default.createElement(
            'ul',
            { className: 'results__list' },
            this.captureRecipes(this.props.globalState.recipes, this.props.globalState.changePage, this.props.globalState.resPage),
            this.props.globalState.recipes != '' ? this.createButton(this.props.globalState.changePage, this.props.globalState.pageType) : ''
          )
        )
      );
    }
  }]);

  return Recipe;
}(_react.Component);

exports.default = Recipe;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Showcase = function (_Component) {
    _inherits(Showcase, _Component);

    function Showcase() {
        _classCallCheck(this, Showcase);

        var _this = _possibleConstructorReturn(this, (Showcase.__proto__ || Object.getPrototypeOf(Showcase)).call(this));

        _this.clickedBtn = function () {
            console.log('swag');
        };

        _this.renderMainFood = function (recipes) {

            var recipe = Object.values(recipes);

            return recipe.map(function (recipe, i) {

                if (_this.props.globalState.showbox == recipe.recipe_id) {

                    console.log(recipe);

                    return _react2.default.createElement(
                        'div',
                        { key: i },
                        _react2.default.createElement(
                            'figure',
                            { className: 'recipe__fig' },
                            _react2.default.createElement('img', { src: '' + recipe.image_url, alt: '' + recipe.title, className: 'recipe__img' }),
                            _react2.default.createElement(
                                'h1',
                                { className: 'recipe__title' },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    recipe.title
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'recipe__details' },
                            _react2.default.createElement(
                                'div',
                                { className: 'recipe__info' },
                                _react2.default.createElement(
                                    'svg',
                                    { className: 'recipe__info-icon' },
                                    _react2.default.createElement('use', { href: 'img/icons.svg#icon-stopwatch' })
                                ),
                                _react2.default.createElement('span', { className: 'recipe__info-data recipe__info-data--minutes' }),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'recipe__info-text' },
                                    ' minutes'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'recipe__info' },
                                _react2.default.createElement(
                                    'svg',
                                    { className: 'recipe__info-icon' },
                                    _react2.default.createElement('use', { href: 'img/icons.svg#icon-man' })
                                ),
                                _react2.default.createElement('span', { className: 'recipe__info-data recipe__info-data--people' }),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'recipe__info-text' },
                                    ' servings'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'recipe__info-buttons' },
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'btn-tiny btn-decrease' },
                                        _react2.default.createElement(
                                            'svg',
                                            null,
                                            _react2.default.createElement('use', { href: 'img/icons.svg#icon-circle-with-minus' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'btn-tiny btn-increase' },
                                        _react2.default.createElement(
                                            'svg',
                                            null,
                                            _react2.default.createElement('use', { href: 'image/icons.svg#icon-circle-with-plus' })
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'recipe__love', onClick: function onClick() {
                                        return _this.props.saveInfo(recipe);
                                    } },
                                _react2.default.createElement(
                                    'svg',
                                    { className: 'header__likes' },
                                    _react2.default.createElement('use', { href: 'img/icons.svg#icon-heart' })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'recipe__ingredients' },
                            _react2.default.createElement('ul', { className: 'recipe__ingredient-list' }),
                            _react2.default.createElement(
                                'button',
                                { className: 'btn-small recipe__btn recipe__btn--add' },
                                _react2.default.createElement(
                                    'svg',
                                    { className: 'search__icon' },
                                    _react2.default.createElement('use', { href: 'img/icons.svg#icon-shopping-cart' })
                                ),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Add to shopping list'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'recipe__directions' },
                            _react2.default.createElement(
                                'h2',
                                { className: 'heading-2' },
                                'How to cook it'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'recipe__directions-text' },
                                'This recipe was carefully designed and tested by',
                                _react2.default.createElement(
                                    'span',
                                    { className: 'recipe__by' },
                                    recipe.publisher
                                ),
                                '. Please check out directions at their website.'
                            ),
                            _react2.default.createElement(
                                'a',
                                { className: 'btn-small recipe__btn', href: '' + recipe.source_url, target: '_blank' },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Directions'
                                ),
                                _react2.default.createElement(
                                    'svg',
                                    { className: 'search__icon' },
                                    _react2.default.createElement('use', { href: 'img/icons.svg#icon-triangle-right' })
                                )
                            )
                        )
                    );
                }
            });
        };

        _this.renderMainFood = _this.renderMainFood.bind(_this);
        _this.state = {
            name: 'Joe'
        };
        return _this;
    }

    _createClass(Showcase, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'col-xs-6 col-sm-6  col-md-6 col-lg-6 show-case' },
                console.log(this.props.globalState),
                this.props.globalState.showbox != '' ? this.renderMainFood(this.props.globalState.recipes) : console.log('sorry')
            );
        }
    }]);

    return Showcase;
}(_react.Component);

exports.default = Showcase;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(146);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Top = __webpack_require__(253);

var _Top2 = _interopRequireDefault(_Top);

var _axios = __webpack_require__(148);

var _axios2 = _interopRequireDefault(_axios);

var _Recipe = __webpack_require__(155);

var _Recipe2 = _interopRequireDefault(_Recipe);

var _base = __webpack_require__(154);

var _searchRecipe = __webpack_require__(254);

var _searchRecipe2 = _interopRequireDefault(_searchRecipe);

var _searchView = __webpack_require__(157);

var searchView = _interopRequireWildcard(_searchView);

var _Showcase = __webpack_require__(156);

var _Showcase2 = _interopRequireDefault(_Showcase);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this2 = this;

    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.handleKeyPress = function (e) {
      if (e.key === 'Enter') {
        _this.setState({ food: e.target.value });
        _this.controlSearch();
      }
    };

    _this.controlSearch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var query, search;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = _this.state.food;

              console.log(query);

              if (!query) {
                _context.next = 10;
                break;
              }

              // 2) New search object and add it to state
              search = new _searchRecipe2.default(query);

              //3)Prepare UI for results


              //4)Search for recipes

              _context.next = 6;
              return search.getResults();

            case 6:

              //5) Render results on UI
              // console.log(searchView.renderResults(search.result))   
              console.log(search.result);

              _this.setState({ recipes: search.result });
              //  console.log(searchView.renderRecipe(search.result))
              console.log(_this.state);

              _this.clearInput();

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    _this.clearInput = function () {
      _this.setState({ food: '' });
    };

    _this.controlSearch = _this.controlSearch.bind(_this);
    _this.getRecipes = _this.getRecipes.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.clearInput = _this.clearInput.bind(_this);
    _this.changeState = _this.changeState.bind(_this);
    _this.saveInfo = _this.saveInfo.bind(_this);
    _this.showItem = _this.showItem.bind(_this);
    _this.addPage = _this.addPage.bind(_this);
    _this.minPage = _this.minPage.bind(_this);
    _this.pageFunc = _this.pageFunc.bind(_this);
    _this.pageMinFunc = _this.pageMinFunc.bind(_this);

    _this.state = {
      food: '',
      name: 'Joe',
      recipes: '',
      showbox: '',
      savedItems: '',
      showItems: false,
      changePage: 1,
      pageType: ['prev', 'next'],
      resPage: 5

    };
    return _this;
  }

  _createClass(Index, [{
    key: 'addPage',
    value: function addPage() {

      this.setState(function (prevState) {
        return {
          changePage: prevState.changePage + 1
        };
      });
    }
  }, {
    key: 'minPage',
    value: function minPage() {
      this.setState(function (prevState) {
        return {
          changePage: prevState.changePage - 1
        };
      });
    }
  }, {
    key: 'pageFunc',
    value: function pageFunc() {}
  }, {
    key: 'pageMinFunc',
    value: function pageMinFunc() {}

    /////////////////////////////////////////////////

  }, {
    key: 'changeState',
    value: function changeState(change) {
      this.setState({ showbox: change });
    }
  }, {
    key: 'saveInfo',
    value: function saveInfo(info) {
      this.setState(function (prevState) {
        return {
          savedItems: [].concat(_toConsumableArray(prevState.savedItems), [info])
        };
      });
    }
  }, {
    key: 'showItem',
    value: function showItem() {
      this.setState(function (prevState) {
        return {
          showItems: !prevState.showItems
        };
      });
    }
  }, {
    key: 'getRecipes',
    value: function getRecipes(e) {
      this.setState({ food: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        console.log(this.state.recipes),
        _react2.default.createElement(_Top2.default, { globalState: this.state, controlSearch: this.controlSearch, showItem: this.showItem, getRecipes: this.getRecipes, handleKeyPress: this.handleKeyPress }),
        _react2.default.createElement(
          'div',
          { className: 'box' },
          _react2.default.createElement(_Recipe2.default, { pageMinFunc: this.pageMinFunc, pageFunc: this.pageFunc, minPage: this.minPage, pageType: this.pageType, addPage: this.addPage, resPage: this.resPage, globalState: this.state, changeState: this.changeState, getRecipes: this.getRecipes, controlSearch: this.controlSearch, renderMainFood: this.renderMainFood }),
          _react2.default.createElement(_Showcase2.default, { globalState: this.state, saveInfo: this.saveInfo })
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Index, null), app);

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _base = __webpack_require__(154);

var _Recipe = __webpack_require__(155);

var _Recipe2 = _interopRequireDefault(_Recipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Top = function (_Component) {
  _inherits(Top, _Component);

  function Top(props) {
    _classCallCheck(this, Top);

    var _this = _possibleConstructorReturn(this, (Top.__proto__ || Object.getPrototypeOf(Top)).call(this, props));

    _this.limitTitle = function (title) {
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 17;

      if (title) {
        var recipeTitle = [];
        if (title.length > limit) {
          title.split(' ').reduce(function (acc, cur) {

            if (acc + cur.length <= limit) {
              recipeTitle.push(cur);
            }
            return acc + cur.length;
          }, 0);
          return recipeTitle.join(' ') + ' ...';
        }
        return title;
      }
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.savedRecipes = _this.savedRecipes.bind(_this);
    _this.limitTitle = _this.limitTitle.bind(_this);
    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Top, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: 'savedRecipes',
    value: function savedRecipes() {
      var _this2 = this;

      var recipes = this.props.globalState.savedItems;
      return recipes.map(function (recipe, i) {
        return _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { className: 'likes_link', href: '#' + recipe.recipe_id },
            _react2.default.createElement(
              'figure',
              { className: 'likes__fig' },
              _react2.default.createElement('img', { src: '' + recipe.image_url, alt: '' + recipe.title })
            ),
            _react2.default.createElement(
              'div',
              { className: 'likes_data' },
              _react2.default.createElement(
                'h4',
                { className: 'results__name item__likes' },
                _this2.limitTitle(recipe.title)
              ),
              _react2.default.createElement(
                'p',
                { className: 'results__author item__likes' },
                recipe.publisher
              )
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'header',
          { className: ' row header' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-4 col-sm-4 col-md-4 col-lg-4' },
            _react2.default.createElement(
              'h1',
              { className: ' header__logo' },
              'RecipeFinder'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-4 col-sm-4 col-md-4 col-lg-4' },
            _react2.default.createElement(
              'form',
              { className: 'search', onSubmit: this.handleSubmit },
              _react2.default.createElement('input', { type: 'text', ref: 'Recipes', value: this.props.globalState.food, onChange: this.props.getRecipes, onKeyPress: this.props.handleKeyPress, className: 'search__field', placeholder: 'Search over 1,000,000 recipes...' }),
              _react2.default.createElement(
                'div',
                { className: ' search__btn-header', onClick: this.props.controlSearch },
                console.log(this.props.globalState.food),
                _react2.default.createElement(
                  'div',
                  { className: 'search__icon' },
                  _react2.default.createElement('i', { className: 'icon-search fas fa-search' })
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-4 col-sm-4 col-md-4 col-lg-4' },
            _react2.default.createElement(
              'div',
              { className: '  likes' },
              _react2.default.createElement('div', { className: 'likes__field' }),
              _react2.default.createElement(
                'div',
                { className: 'likes__panel' },
                _react2.default.createElement(
                  'div',
                  { className: 'likes__icon', onClick: function onClick() {
                      return _this3.props.showItem();
                    } },
                  _react2.default.createElement('i', { className: ' icon-heart far fa-heart' })
                ),
                _react2.default.createElement(
                  'ul',
                  { className: 'likes__list' },
                  this.props.globalState.showItems == true && this.props.globalState.savedItems !== '' ? this.savedRecipes() : console.log('nope')
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Top;
}(_react.Component);

exports.default = Top;

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(148);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchRecipes = function () {
  function SearchRecipes(query) {
    _classCallCheck(this, SearchRecipes);

    this.query = query;
  }

  _createClass(SearchRecipes, [{
    key: 'getResults',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var proxy, key, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                proxy = 'https://cors-anywhere.herokuapp.com/';
                key = '235a55eb9def0283a2cc292f3b6b82da';
                _context.prev = 2;
                _context.next = 5;
                return (0, _axios2.default)(proxy + 'http://food2fork.com/api/search?key=' + key + '&q=' + this.query);

              case 5:
                res = _context.sent;

                this.result = res.data.recipes;
                // console.log(this.result);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](2);

                alert(_context.t0);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9]]);
      }));

      function getResults() {
        return _ref.apply(this, arguments);
      }

      return getResults;
    }()
  }]);

  return SearchRecipes;
}();

exports.default = SearchRecipes;

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(234);
module.exports = __webpack_require__(233);


/***/ })

},[585]);