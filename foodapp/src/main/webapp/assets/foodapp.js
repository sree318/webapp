'use strict';



;define("foodapp/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("foodapp/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "foodapp/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"foodapp/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("foodapp/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("foodapp/components/addcart", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/object"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <a><input {{action "addCart" @name}} href="#" type="submit" value="Addto Cart"></a>
      
    
  */
  {
    "id": "XICWXJHi",
    "block": "[[[10,3],[12],[11,\"input\"],[24,6,\"#\"],[24,2,\"Addto Cart\"],[24,4,\"submit\"],[4,[38,0],[[30,0],\"addCart\",[30,1]],null],[12],[13],[13],[1,\"\\n    \\n  \"]],[\"@name\"],false,[\"action\"]]",
    "moduleName": "foodapp/components/addcart.hbs",
    "isStrictMode": false
  });

  let AddcartComponent = (_class = class AddcartComponent extends _component2.default {
    addCart(id) {
      var dummy = this;
      var usid = localStorage.getItem('userid');
      $.ajax({
        type: 'GET',
        url: '/foodapp/Cartlist/' + id,
        data: {
          id: id,
          usid: usid
        },
        dataType: 'text',
        success: function (data) {
          var result = JSON.parse(data);

          if (result == 1) {
            alert('successfully added item to cart');
          } else {
            alert('Something went wrong!! Please try later');
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log('error thrown: ' + testStatus);
        }
      });
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "addCart", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addCart"), _class.prototype)), _class);
  _exports.default = AddcartComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, AddcartComponent);
});
;define("foodapp/components/addf", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <form>
          <div class="text-field">
          <Input type="text" id="res_id" required />
          <span></span>
          <label>Restaurant id:</label>
      </div>
      
      <div class="text-field">
          <Input type="text" id="foodname" required />
          <span></span>
          <label>Foodname:</label>
      </div>
      <div class="text-field">
          <Input type="text" id="foodprice" required />
          <span></span>
          <label>Foodprice:</label>
      </div>
  
      <div id="result"></div>
      <input {{action "addFood"}} type="submit" value="Add">
  
  </form>
  */
  {
    "id": "tRtZIxLC",
    "block": "[[[10,\"form\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"text-field\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,1,\"res_id\"],[24,\"required\",\"\"],[24,4,\"text\"]],null,null],[1,\"\\n        \"],[10,1],[12],[13],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"Restaurant id:\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \\n    \"],[10,0],[14,0,\"text-field\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,1,\"foodname\"],[24,\"required\",\"\"],[24,4,\"text\"]],null,null],[1,\"\\n        \"],[10,1],[12],[13],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"Foodname:\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"text-field\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,1,\"foodprice\"],[24,\"required\",\"\"],[24,4,\"text\"]],null,null],[1,\"\\n        \"],[10,1],[12],[13],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"Foodprice:\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,1,\"result\"],[12],[13],[1,\"\\n    \"],[11,\"input\"],[24,2,\"Add\"],[24,4,\"submit\"],[4,[38,1],[[30,0],\"addFood\"],null],[12],[13],[1,\"\\n\\n\"],[13]],[],false,[\"input\",\"action\"]]",
    "moduleName": "foodapp/components/addf.hbs",
    "isStrictMode": false
  });

  let AddfComponent = (_class = class AddfComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    addFood() {
      let res_id = document.getElementById('res_id').value;
      let foodname = document.getElementById('foodname').value;
      let foodprice = document.getElementById('foodprice').value;
      var dummy = this;
      $.ajax({
        type: 'GET',
        url: '/foodapp/AddFood',
        data: {
          foodname: foodname,
          foodprice: foodprice,
          res_id: res_id
        },
        dataType: 'text',
        success: function (data) {
          console.log(data);
          var result = JSON.parse(data);
          console.log(result);

          if (result == 1) {
            alert('successfully added item to cart');
            console.log('hello');
            dummy.router.transitionTo('foodlist');
          } else {
            $('#result').html('Invalid username or password');
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log('error thrown: ' + testStatus);
        }
      });
    } // if ((username == "abc") && (password == "123")) {
    //     window.location.href = "home";
    // }
    // else {
    //     window.location.href = "authfailure";
    // }
    // })
    // }
    // @action
    // buttonClick() {
    //         $.ajax({
    //             type:"POST",
    //             url:"/home",
    //             data:{
    //                 username:this.username,
    //                 password:this.password
    //             },
    //             dataType:"text"
    //         })
    // console.log("hello");
    // var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState == 4 && this.status == 200) {
    //         console.log("hello" + username + password);
    //         var result = this.responseText;
    //         if (result == "valid") {
    //             window.location.href = "auth";
    //         }
    //         else {
    //             console.log(username + " or " + password + " is incorrect");
    //         }
    //     }
    // }
    // xhr.open('POST', 'auth', true);
    // xhr.send();
    // }


  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "addFood", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addFood"), _class.prototype)), _class);
  _exports.default = AddfComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, AddfComponent);
});
;define("foodapp/components/addr", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <form>
          <div class="text-field">
          <Input type="text" id="id" required />
          <span></span>
          <label>Restaurant id:</label>
      </div>
              <div class="text-field">
          <Input type="text" id="res_name" required />
          <span></span>
          <label>Restaurant Name:</label>
      </div>
      <div class="text-field">
          <Input type="text" id="type" required />
          <span></span>
          <label>Restaurant Type:</label>
      </div>
  
      <div id="result"></div>
      <input {{action "addRes"}} type="submit" value="Add">
  
  </form>
  */
  {
    "id": "Mamu8hpl",
    "block": "[[[10,\"form\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"text-field\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,1,\"id\"],[24,\"required\",\"\"],[24,4,\"text\"]],null,null],[1,\"\\n        \"],[10,1],[12],[13],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"Restaurant id:\"],[13],[1,\"\\n    \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"text-field\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,1,\"res_name\"],[24,\"required\",\"\"],[24,4,\"text\"]],null,null],[1,\"\\n        \"],[10,1],[12],[13],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"Restaurant Name:\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"text-field\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,1,\"type\"],[24,\"required\",\"\"],[24,4,\"text\"]],null,null],[1,\"\\n        \"],[10,1],[12],[13],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"Restaurant Type:\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,1,\"result\"],[12],[13],[1,\"\\n    \"],[11,\"input\"],[24,2,\"Add\"],[24,4,\"submit\"],[4,[38,1],[[30,0],\"addRes\"],null],[12],[13],[1,\"\\n\\n\"],[13]],[],false,[\"input\",\"action\"]]",
    "moduleName": "foodapp/components/addr.hbs",
    "isStrictMode": false
  });

  let AddrComponent = (_class = class AddrComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    addRes() {
      let res_name = document.getElementById('res_name').value;
      let type = document.getElementById('type').value;
      let id = document.getElementById('id').value;
      var dummy = this;
      $.ajax({
        type: 'GET',
        url: '/foodapp/AddRes',
        data: {
          res_name: res_name,
          type: type,
          id: id
        },
        dataType: 'text',
        success: function (data) {
          console.log(data);
          var result = JSON.parse(data);
          console.log(result);

          if (result == 1) {
            alert('successfully added item');
            console.log('hello');
            dummy.router.transitionTo('foodlist');
          } else {
            $('#result').html('Invalid username or password');
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log('error thrown: ' + testStatus);
        }
      });
    } // if ((username == "abc") && (password == "123")) {
    //     window.location.href = "home";
    // }
    // else {
    //     window.location.href = "authfailure";
    // }
    // })
    // }
    // @action
    // buttonClick() {
    //         $.ajax({
    //             type:"POST",
    //             url:"/home",
    //             data:{
    //                 username:this.username,
    //                 password:this.password
    //             },
    //             dataType:"text"
    //         })
    // console.log("hello");
    // var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState == 4 && this.status == 200) {
    //         console.log("hello" + username + password);
    //         var result = this.responseText;
    //         if (result == "valid") {
    //             window.location.href = "auth";
    //         }
    //         else {
    //             console.log(username + " or " + password + " is incorrect");
    //         }
    //     }
    // }
    // xhr.open('POST', 'auth', true);
    // xhr.send();
    // }


  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "addRes", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addRes"), _class.prototype)), _class);
  _exports.default = AddrComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, AddrComponent);
});
;define("foodapp/components/auth", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <center>
  <form style="text-align: center">
      <div class="text-field" >
          <Input type="text" id="username" required />
          <span></span>
          <label>UserName:</label>
      </div>
      <div class="text-field">
          <Input type="text" id="userid" required />
          <span></span>
          <label>UserId:</label>
      </div>
      <div class="text-field">
          <Input type="password" id="password" required />
          <span></span>
          <label>Password:</label>
      </div>
  
      <div id="result"></div>
      <input {{action "buttonClick"}} type="submit" value="Login">
      <div class="signup_link">
          New User?<LinkTo @route="signup">Signup</LinkTo>
      </div>
  </form>
  </center>
  */
  {
    "id": "raihR/Nd",
    "block": "[[[10,\"center\"],[12],[1,\"\\n\"],[10,\"form\"],[14,5,\"text-align: center\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"text-field\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,1,\"username\"],[24,\"required\",\"\"],[24,4,\"text\"]],null,null],[1,\"\\n        \"],[10,1],[12],[13],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"UserName:\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"text-field\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,1,\"userid\"],[24,\"required\",\"\"],[24,4,\"text\"]],null,null],[1,\"\\n        \"],[10,1],[12],[13],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"UserId:\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"text-field\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,1,\"password\"],[24,\"required\",\"\"],[24,4,\"password\"]],null,null],[1,\"\\n        \"],[10,1],[12],[13],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"Password:\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,1,\"result\"],[12],[13],[1,\"\\n    \"],[11,\"input\"],[24,2,\"Login\"],[24,4,\"submit\"],[4,[38,1],[[30,0],\"buttonClick\"],null],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"signup_link\"],[12],[1,\"\\n        New User?\"],[8,[39,2],null,[[\"@route\"],[\"signup\"]],[[\"default\"],[[[[1,\"Signup\"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[13]],[],false,[\"input\",\"action\",\"link-to\"]]",
    "moduleName": "foodapp/components/auth.hbs",
    "isStrictMode": false
  });

  let AuthComponent = (_dec = (0, _service.inject)('index'), (_class = class AuthComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);

      _initializerDefineProperty(this, "auth", _descriptor2, this);
    }

    buttonClick() {
      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;
      let userid = document.getElementById('userid').value;
      var dummy = this;
      $.ajax({
        type: 'GET',
        url: '/foodapp/LoginServlet',
        data: {
          username: username,
          password: password,
          userid: userid
        },
        dataType: 'text',
        success: function (data) {
          console.log(data);
          var result = JSON.parse(data);
          console.log(result);

          if (result == 1) {
            dummy.router.transitionTo('welcome');
          } else {
            $('#result').html('Invalid username or password');
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log('error thrown: ' + testStatus);
        }
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "auth", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "buttonClick", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "buttonClick"), _class.prototype)), _class));
  _exports.default = AuthComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, AuthComponent);
});
;define("foodapp/components/confirm", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
     <input {{action "buttonC"}} type="submit" value="Confirm Order">
  */
  {
    "id": "ZTvEAp8l",
    "block": "[[[1,\" \"],[11,\"input\"],[24,2,\"Confirm Order\"],[24,4,\"submit\"],[4,[38,0],[[30,0],\"buttonC\"],null],[12],[13]],[],false,[\"action\"]]",
    "moduleName": "foodapp/components/confirm.hbs",
    "isStrictMode": false
  });

  let ConfirmComponent = (_class = class ConfirmComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    buttonC() {
      var dummy = this;
      $.ajax({
        type: 'GET',
        url: '/foodapp/DeleteList',
        data: {},
        dataType: 'text',
        success: function (data) {
          console.log(data);
          var result = JSON.parse(data);
          console.log(result);

          if (result == 1) {
            dummy.router.transitionTo('logout');
            alert('order placed successfully');
          } else {
            $('#result').html('Invalid action');
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log('error thrown: ' + testStatus);
        }
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "buttonC", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "buttonC"), _class.prototype)), _class);
  _exports.default = ConfirmComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ConfirmComponent);
});
;define("foodapp/components/deletef", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <form>
          <div class="text-field">
          <Input type="text" id="foodid" required />
          <span></span>
          <label>Foodid:</label>
      </div>
      <div class="text-field">
          <Input type="text" id="foodname" required />
          <span></span>
          <label>Foodname:</label>
      </div>
      <div class="text-field">
          <Input type="text" id="foodprice" required />
          <span></span>
          <label>Foodprice:</label>
      </div>
  
      <div id="result"></div>
      <input {{action "deleteFood"}} type="submit" value="Delete">
  
  </form>
  */
  {
    "id": "uTH/MZcy",
    "block": "[[[10,\"form\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"text-field\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,1,\"foodid\"],[24,\"required\",\"\"],[24,4,\"text\"]],null,null],[1,\"\\n        \"],[10,1],[12],[13],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"Foodid:\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"text-field\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,1,\"foodname\"],[24,\"required\",\"\"],[24,4,\"text\"]],null,null],[1,\"\\n        \"],[10,1],[12],[13],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"Foodname:\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"text-field\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,1,\"foodprice\"],[24,\"required\",\"\"],[24,4,\"text\"]],null,null],[1,\"\\n        \"],[10,1],[12],[13],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"Foodprice:\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,1,\"result\"],[12],[13],[1,\"\\n    \"],[11,\"input\"],[24,2,\"Delete\"],[24,4,\"submit\"],[4,[38,1],[[30,0],\"deleteFood\"],null],[12],[13],[1,\"\\n\\n\"],[13]],[],false,[\"input\",\"action\"]]",
    "moduleName": "foodapp/components/deletef.hbs",
    "isStrictMode": false
  });

  let DeletefComponent = (_class = class DeletefComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    deleteFood() {
      let foodname = document.getElementById('foodname').value;
      let foodprice = document.getElementById('foodprice').value;
      let foodid = document.getElementById('foodid').value;
      var dummy = this;
      $.ajax({
        type: 'GET',
        url: '/foodapp/DeleteFood',
        data: {
          foodname: foodname,
          foodprice: foodprice,
          foodid: foodid
        },
        dataType: 'text',
        success: function (data) {
          console.log(data);
          var result = JSON.parse(data);
          console.log(result);

          if (result == 1) {
            alert('successfully deleted item');
            console.log('hello');
            dummy.router.transitionTo('foodlist');
          } else {
            $('#result').html('Invalid username or password');
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log('error thrown: ' + testStatus);
        }
      });
    } // if ((username == "abc") && (password == "123")) {
    //     window.location.href = "home";
    // }
    // else {
    //     window.location.href = "authfailure";
    // }
    // })
    // }
    // @action
    // buttonClick() {
    //         $.ajax({
    //             type:"POST",
    //             url:"/home",
    //             data:{
    //                 username:this.username,
    //                 password:this.password
    //             },
    //             dataType:"text"
    //         })
    // console.log("hello");
    // var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState == 4 && this.status == 200) {
    //         console.log("hello" + username + password);
    //         var result = this.responseText;
    //         if (result == "valid") {
    //             window.location.href = "auth";
    //         }
    //         else {
    //             console.log(username + " or " + password + " is incorrect");
    //         }
    //     }
    // }
    // xhr.open('POST', 'auth', true);
    // xhr.send();
    // }


  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "deleteFood", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "deleteFood"), _class.prototype)), _class);
  _exports.default = DeletefComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, DeletefComponent);
});
;define("foodapp/components/deleter", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <form>
          <div class="text-field">
          <Input type="text" id="id" required />
          <span></span>
          <label>Restaurant id:</label>
      </div>
              <div class="text-field">
          <Input type="text" id="res_name" required />
          <span></span>
          <label>Restaurant Name:</label>
      </div>
      <div class="text-field">
          <Input type="text" id="type" required />
          <span></span>
          <label>Restaurant Type:</label>
      </div>
  
      <div id="result"></div>
      <input {{action "deleteRes"}} type="submit" value="Delete">
  
  </form>
  */
  {
    "id": "RNH3lauP",
    "block": "[[[10,\"form\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"text-field\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,1,\"id\"],[24,\"required\",\"\"],[24,4,\"text\"]],null,null],[1,\"\\n        \"],[10,1],[12],[13],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"Restaurant id:\"],[13],[1,\"\\n    \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"text-field\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,1,\"res_name\"],[24,\"required\",\"\"],[24,4,\"text\"]],null,null],[1,\"\\n        \"],[10,1],[12],[13],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"Restaurant Name:\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"text-field\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,1,\"type\"],[24,\"required\",\"\"],[24,4,\"text\"]],null,null],[1,\"\\n        \"],[10,1],[12],[13],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"Restaurant Type:\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,1,\"result\"],[12],[13],[1,\"\\n    \"],[11,\"input\"],[24,2,\"Delete\"],[24,4,\"submit\"],[4,[38,1],[[30,0],\"deleteRes\"],null],[12],[13],[1,\"\\n\\n\"],[13]],[],false,[\"input\",\"action\"]]",
    "moduleName": "foodapp/components/deleter.hbs",
    "isStrictMode": false
  });

  let DeleterComponent = (_class = class DeleterComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    deleteRes() {
      let res_name = document.getElementById('res_name').value;
      let type = document.getElementById('type').value;
      let id = document.getElementById('id').value;
      var dummy = this;
      $.ajax({
        type: 'GET',
        url: '/foodapp/DeleteRes',
        data: {
          res_name: res_name,
          type: type,
          id: id
        },
        dataType: 'text',
        success: function (data) {
          console.log(data);
          var result = JSON.parse(data);
          console.log(result);

          if (result == 1) {
            alert('successfully deleted item');
            console.log('hello');
            dummy.router.transitionTo('foodlist');
          } else {
            $('#result').html('Invalid username or password');
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log('error thrown: ' + testStatus);
        }
      });
    } // if ((username == "abc") && (password == "123")) {
    //     window.location.href = "home";
    // }
    // else {
    //     window.location.href = "authfailure";
    // }
    // })
    // }
    // @action
    // buttonClick() {
    //         $.ajax({
    //             type:"POST",
    //             url:"/home",
    //             data:{
    //                 username:this.username,
    //                 password:this.password
    //             },
    //             dataType:"text"
    //         })
    // console.log("hello");
    // var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState == 4 && this.status == 200) {
    //         console.log("hello" + username + password);
    //         var result = this.responseText;
    //         if (result == "valid") {
    //             window.location.href = "auth";
    //         }
    //         else {
    //             console.log(username + " or " + password + " is incorrect");
    //         }
    //     }
    // }
    // xhr.open('POST', 'auth', true);
    // xhr.send();
    // }


  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "deleteRes", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "deleteRes"), _class.prototype)), _class);
  _exports.default = DeleterComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, DeleterComponent);
});
;define("foodapp/components/logoutpage", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
      <div id="result"></div>
    <input {{action "buttonCl"}} type="submit" value="logout">
  */
  {
    "id": "ONBa7IP+",
    "block": "[[[1,\"  \"],[10,0],[14,1,\"result\"],[12],[13],[1,\"\\n  \"],[11,\"input\"],[24,2,\"logout\"],[24,4,\"submit\"],[4,[38,0],[[30,0],\"buttonCl\"],null],[12],[13]],[],false,[\"action\"]]",
    "moduleName": "foodapp/components/logoutpage.hbs",
    "isStrictMode": false
  });

  let LogoutpageComponent = (_class = class LogoutpageComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    buttonCl() {
      var dummy = this;
      dummy.router.transitionTo('index');
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "buttonCl", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "buttonCl"), _class.prototype)), _class);
  _exports.default = LogoutpageComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, LogoutpageComponent);
});
;define("foodapp/components/sign", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <form>
  
      <div class="text-field">
          <Input type="text" id="username" required />
          <span></span>
          <label>username:</label>
      </div>
      <div class="text-field">
          <Input type="password" id="password" required />
          <span></span>
          <label>Password:</label>
      </div>
  
      <div id="result"></div>
      <input {{action "signupClick"}} type="submit" value="Signup">
  
  </form>
  */
  {
    "id": "/sXsAR/0",
    "block": "[[[10,\"form\"],[12],[1,\"\\n\\n    \"],[10,0],[14,0,\"text-field\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,1,\"username\"],[24,\"required\",\"\"],[24,4,\"text\"]],null,null],[1,\"\\n        \"],[10,1],[12],[13],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"username:\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"text-field\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,1,\"password\"],[24,\"required\",\"\"],[24,4,\"password\"]],null,null],[1,\"\\n        \"],[10,1],[12],[13],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"Password:\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,1,\"result\"],[12],[13],[1,\"\\n    \"],[11,\"input\"],[24,2,\"Signup\"],[24,4,\"submit\"],[4,[38,1],[[30,0],\"signupClick\"],null],[12],[13],[1,\"\\n\\n\"],[13]],[],false,[\"input\",\"action\"]]",
    "moduleName": "foodapp/components/sign.hbs",
    "isStrictMode": false
  });

  let SignComponent = (_class = class SignComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    signupClick() {
      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;
      var dummy = this;
      $.ajax({
        type: 'GET',
        url: '/foodapp/Signup',
        data: {
          username: username,
          password: password
        },
        dataType: 'text',
        success: function (data) {
          console.log(data);
          var result = JSON.parse(data);
          console.log(result);

          if (result > 0) {
            dummy.router.transitionTo('welcome'); //   alert('Your user id is'+result);
          } else {
            $('#result').html('Invalid username or password');
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log('error thrown: ' + testStatus);
        }
      });
    } // if ((username == "abc") && (password == "123")) {
    //     window.location.href = "home";
    // }
    // else {
    //     window.location.href = "authfailure";
    // }
    // })
    // }
    // @action
    // buttonClick() {
    //         $.ajax({
    //             type:"POST",
    //             url:"/home",
    //             data:{
    //                 username:this.username,
    //                 password:this.password
    //             },
    //             dataType:"text"
    //         })
    // console.log("hello");
    // var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState == 4 && this.status == 200) {
    //         console.log("hello" + username + password);
    //         var result = this.responseText;
    //         if (result == "valid") {
    //             window.location.href = "auth";
    //         }
    //         else {
    //             console.log(username + " or " + password + " is incorrect");
    //         }
    //     }
    // }
    // xhr.open('POST', 'auth', true);
    // xhr.send();
    // }


  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "signupClick", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "signupClick"), _class.prototype)), _class);
  _exports.default = SignComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, SignComponent);
});
;define("foodapp/components/viewfood", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component"], function (_exports, _component, _templateFactory, _component2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{yield}}
  */
  {
    "id": "rOdTfUjp",
    "block": "[[[18,1,null]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "foodapp/components/viewfood.hbs",
    "isStrictMode": false
  });

  class ViewfoodComponent extends _component2.default {}

  _exports.default = ViewfoodComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ViewfoodComponent);
});
;define("foodapp/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page.js"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page.js"eaimeta@70e063a35619d71f
});
;define("foodapp/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("foodapp/helpers/app-version", ["exports", "@ember/component/helper", "foodapp/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"foodapp/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = (0, _helper.helper)(appVersion);

  _exports.default = _default;
});
;define("foodapp/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util"eaimeta@70e063a35619d71f
});
;define("foodapp/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f

  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("foodapp/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f

  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("foodapp/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f

  var _default = _singularize.default;
  _exports.default = _default;
});
;define("foodapp/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "foodapp/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"foodapp/config/environment"eaimeta@70e063a35619d71f

  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("foodapp/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f

  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("foodapp/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("foodapp/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f

  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("foodapp/initializers/export-application-global", ["exports", "ember", "foodapp/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  0; //eaimeta@70e063a35619d71f0,"ember",0,"foodapp/config/environment"eaimeta@70e063a35619d71f

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("foodapp/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("foodapp/router", ["exports", "@ember/routing/router", "foodapp/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"foodapp/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends _router.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('index', {
      path: '/'
    });
    this.route('welcome', {
      path: '/home'
    });
    this.route('foodlist', {
      path: '/chat/:chat_id'
    });
    this.route('cartlist', {
      path: '/cart'
    });
    this.route('orderlist');
    this.route('logout');
    this.route('adm-welcome');
    this.route('adm-foodlist');
    this.route('foodadd');
    this.route('foodupdate');
    this.route('fooddelete');
    this.route('resadd');
    this.route('resdelete');
    this.route('signup');
  });
});
;define("foodapp/routes/adm-foodlist", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let AdmFoodlistRoute = (_class = class AdmFoodlistRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    model(params) {
      var dummy = this;
      const {
        chat_id
      } = params;
      localStorage.setItem('chat_id', chat_id);
      return fetch('/foodapp/FoodlistServlet/' + chat_id).then(function (response) {
        const isJson = response.headers.get('content-type').includes('application/json');
        const data = isJson ? response.json() : null;

        if (data == null) {
          console.log('no data');
        }

        return data;
      }).then(function (json) {
        return json;
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = AdmFoodlistRoute;
});
;define("foodapp/routes/adm-welcome", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let AdmWelcomeRoute = (_class = class AdmWelcomeRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    async model() {
      var dummy = this;
      return fetch('/foodapp/RestaurantServlet').then(function (response) {
        const isJson = response.headers.get('content-type').includes('application/json');
        const data = isJson ? response.json() : null;

        if (data == null) {
          console.log('no data');
        }

        return data;
      }).then(function (json) {
        return json;
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = AdmWelcomeRoute;
});
;define("foodapp/routes/cartlist", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let CartlistRoute = (_class = class CartlistRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    model() {
      var dummy = this;
      var usid = localStorage.getItem('userid');
      return fetch('/foodapp/OrderListServlet').then(function (response) {
        const isJson = response.headers.get('content-type').includes('application/json');
        const data = isJson ? response.json() : null;

        if (data == null) {
          console.log('no data');
        }

        return data;
      }).then(function (json) {
        return json;
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = CartlistRoute;
});
;define("foodapp/routes/foodadd", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class FoodaddRoute extends _route.default {}

  _exports.default = FoodaddRoute;
});
;define("foodapp/routes/fooddelete", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class FooddeleteRoute extends _route.default {}

  _exports.default = FooddeleteRoute;
});
;define("foodapp/routes/foodlist", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let FoodlistRoute = (_class = class FoodlistRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    model(params) {
      var dummy = this;
      const {
        chat_id
      } = params;
      localStorage.setItem('chat_id', chat_id);
      return fetch('/foodapp/FoodlistServlet/' + chat_id).then(function (response) {
        const isJson = response.headers.get('content-type').includes('application/json');
        const data = isJson ? response.json() : null;

        if (data == null) {
          console.log('no data');
        }

        return data;
      }).then(function (json) {
        return json;
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = FoodlistRoute;
});
;define("foodapp/routes/foodupdate", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class FoodupdateRoute extends _route.default {}

  _exports.default = FoodupdateRoute;
});
;define("foodapp/routes/index", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f

  class IndexRoute extends _route.default {//   async model() {
    //     var dummy = this;
    //     return fetch('/foodzapp/LoginServlet')
    //       .then(function (response) {
    //         const isJson = response.headers
    //           .get('content-type')
    //           .includes('application/json');
    //         const data = isJson || response.data == '[]' ? response.json() : null;
    //         if (data == null) {
    //           dummy.router.transitionTo('index');
    //         }
    //         return data;
    //       })
    //       .then(function (json) {
    //         return json;
    //       });
    //   }
  }

  _exports.default = IndexRoute;
});
;define("foodapp/routes/logout", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class LogoutRoute extends _route.default {}

  _exports.default = LogoutRoute;
});
;define("foodapp/routes/orderlist", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class OrderlistRoute extends _route.default {}

  _exports.default = OrderlistRoute;
});
;define("foodapp/routes/resadd", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class ResaddRoute extends _route.default {}

  _exports.default = ResaddRoute;
});
;define("foodapp/routes/resdelete", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class ResdeleteRoute extends _route.default {}

  _exports.default = ResdeleteRoute;
});
;define("foodapp/routes/signup", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class SignupRoute extends _route.default {}

  _exports.default = SignupRoute;
});
;define("foodapp/routes/welcome", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let WelcomeRoute = (_class = class WelcomeRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    async model() {
      var dummy = this;
      return fetch('/foodapp/RestaurantServlet').then(function (response) {
        const isJson = response.headers.get('content-type').includes('application/json');
        const data = isJson ? response.json() : null;

        if (data == null) {
          console.log('no data');
        }

        return data;
      }).then(function (json) {
        return json;
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = WelcomeRoute;
});
;define("foodapp/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("foodapp/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("foodapp/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("foodapp/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util/services/ensure-registered"eaimeta@70e063a35619d71f
});
;define("foodapp/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("foodapp/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("foodapp/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("foodapp/templates/adm-foodlist", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="box">
    <h3>
      Foods
    </h3>
    <ul class="people">
      {{#each @model as |food|}}
      <li class="person">
        <span class="title">RESTAURANT ID:{{food.res_id}}</span>
         <span class="title">FOOD ID:{{food.id}}</span>
          <span class="title">FOOD NAME:{{food.name}}</span>
               <span class="title">FOOD PRICE:{{food.price}}</span>
         
      </li>
      {{/each}}
  
    </ul>
   <LinkTo @route="foodadd">ADD FOODS
                  </LinkTo>
  
      <LinkTo @route="fooddelete">DELETE FOODS
                  </LinkTo>
     <LinkTo @route="logout">LOGOUT
                  </LinkTo>
  
  
  </div>
  */
  {
    "id": "X/Vhs9yO",
    "block": "[[[10,0],[14,0,\"box\"],[12],[1,\"\\n  \"],[10,\"h3\"],[12],[1,\"\\n    Foods\\n  \"],[13],[1,\"\\n  \"],[10,\"ul\"],[14,0,\"people\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,1]],null]],null],null,[[[1,\"    \"],[10,\"li\"],[14,0,\"person\"],[12],[1,\"\\n      \"],[10,1],[14,0,\"title\"],[12],[1,\"RESTAURANT ID:\"],[1,[30,2,[\"res_id\"]]],[13],[1,\"\\n       \"],[10,1],[14,0,\"title\"],[12],[1,\"FOOD ID:\"],[1,[30,2,[\"id\"]]],[13],[1,\"\\n        \"],[10,1],[14,0,\"title\"],[12],[1,\"FOOD NAME:\"],[1,[30,2,[\"name\"]]],[13],[1,\"\\n             \"],[10,1],[14,0,\"title\"],[12],[1,\"FOOD PRICE:\"],[1,[30,2,[\"price\"]]],[13],[1,\"\\n       \\n    \"],[13],[1,\"\\n\"]],[2]],null],[1,\"\\n  \"],[13],[1,\"\\n \"],[8,[39,2],null,[[\"@route\"],[\"foodadd\"]],[[\"default\"],[[[[1,\"ADD FOODS\\n                \"]],[]]]]],[1,\"\\n\\n    \"],[8,[39,2],null,[[\"@route\"],[\"fooddelete\"]],[[\"default\"],[[[[1,\"DELETE FOODS\\n                \"]],[]]]]],[1,\"\\n   \"],[8,[39,2],null,[[\"@route\"],[\"logout\"]],[[\"default\"],[[[[1,\"LOGOUT\\n                \"]],[]]]]],[1,\"\\n\\n\\n\"],[13]],[\"@model\",\"food\"],false,[\"each\",\"-track-array\",\"link-to\"]]",
    "moduleName": "foodapp/templates/adm-foodlist.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("foodapp/templates/adm-welcome", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="box">
    <h3>
      Restaurants
    </h3>
    <ul class="people">
      {{#each @model as |food|}}
      <li class="person">
    
        <span class="title">RESTAURANT NAME :{{food.res_name}}</span>
       <span class="title">TYPE :{{food.type}}</span>
        <LinkTo @route="foodlist"@model={{food.id}}>VIEW FOODS
                  </LinkTo>
      </li>
      {{/each}}
    </ul>
     <LinkTo @route="resadd">ADD RESTAURANT
                  </LinkTo>
  
      <LinkTo @route="resdelete">DELETE RESTAURANT
                  </LinkTo>
  
       <LinkTo @route="logout">LOG OUT
                  </LinkTo>
  </div>
  */
  {
    "id": "tfGuSkSG",
    "block": "[[[10,0],[14,0,\"box\"],[12],[1,\"\\n  \"],[10,\"h3\"],[12],[1,\"\\n    Restaurants\\n  \"],[13],[1,\"\\n  \"],[10,\"ul\"],[14,0,\"people\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,1]],null]],null],null,[[[1,\"    \"],[10,\"li\"],[14,0,\"person\"],[12],[1,\"\\n  \\n      \"],[10,1],[14,0,\"title\"],[12],[1,\"RESTAURANT NAME :\"],[1,[30,2,[\"res_name\"]]],[13],[1,\"\\n     \"],[10,1],[14,0,\"title\"],[12],[1,\"TYPE :\"],[1,[30,2,[\"type\"]]],[13],[1,\"\\n      \"],[8,[39,2],null,[[\"@route\",\"@model\"],[\"foodlist\",[30,2,[\"id\"]]]],[[\"default\"],[[[[1,\"VIEW FOODS\\n                \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[2]],null],[1,\"  \"],[13],[1,\"\\n   \"],[8,[39,2],null,[[\"@route\"],[\"resadd\"]],[[\"default\"],[[[[1,\"ADD RESTAURANT\\n                \"]],[]]]]],[1,\"\\n\\n    \"],[8,[39,2],null,[[\"@route\"],[\"resdelete\"]],[[\"default\"],[[[[1,\"DELETE RESTAURANT\\n                \"]],[]]]]],[1,\"\\n\\n     \"],[8,[39,2],null,[[\"@route\"],[\"logout\"]],[[\"default\"],[[[[1,\"LOG OUT\\n                \"]],[]]]]],[1,\"\\n\"],[13]],[\"@model\",\"food\"],false,[\"each\",\"-track-array\",\"link-to\"]]",
    "moduleName": "foodapp/templates/adm-welcome.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("foodapp/templates/cartlist", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="center">
    <h3>
      ORDER LIST
    </h3>
    <ul class="people">
      {{#each @model as |food|}}
      <li class="person">
        <span class="title">ID :{{food.id}}</span>
        <span class="title">NAME :{{food.name}}</span>
        <span class="title">PRICE :{{food.price}}</span>  
      </li>
      {{/each}}
  <Confirm></Confirm>  
    </ul>
  </div>
  */
  {
    "id": "1RNOLjh1",
    "block": "[[[10,0],[14,0,\"center\"],[12],[1,\"\\n  \"],[10,\"h3\"],[12],[1,\"\\n    ORDER LIST\\n  \"],[13],[1,\"\\n  \"],[10,\"ul\"],[14,0,\"people\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,1]],null]],null],null,[[[1,\"    \"],[10,\"li\"],[14,0,\"person\"],[12],[1,\"\\n      \"],[10,1],[14,0,\"title\"],[12],[1,\"ID :\"],[1,[30,2,[\"id\"]]],[13],[1,\"\\n      \"],[10,1],[14,0,\"title\"],[12],[1,\"NAME :\"],[1,[30,2,[\"name\"]]],[13],[1,\"\\n      \"],[10,1],[14,0,\"title\"],[12],[1,\"PRICE :\"],[1,[30,2,[\"price\"]]],[13],[1,\"  \\n    \"],[13],[1,\"\\n\"]],[2]],null],[8,[39,2],null,null,[[\"default\"],[[[],[]]]]],[1,\"  \\n  \"],[13],[1,\"\\n\"],[13]],[\"@model\",\"food\"],false,[\"each\",\"-track-array\",\"confirm\"]]",
    "moduleName": "foodapp/templates/cartlist.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("foodapp/templates/foodadd", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="center">
  <Addf></Addf>
  </div>
  */
  {
    "id": "YECcfdOl",
    "block": "[[[10,0],[14,0,\"center\"],[12],[1,\"\\n\"],[8,[39,0],null,null,[[\"default\"],[[[],[]]]]],[1,\"\\n\"],[13]],[],false,[\"addf\"]]",
    "moduleName": "foodapp/templates/foodadd.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("foodapp/templates/fooddelete", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="center">
  <Deletef></Deletef>
  </div>
  */
  {
    "id": "axJy8wvW",
    "block": "[[[10,0],[14,0,\"center\"],[12],[1,\"\\n\"],[8,[39,0],null,null,[[\"default\"],[[[],[]]]]],[1,\"\\n\"],[13]],[],false,[\"deletef\"]]",
    "moduleName": "foodapp/templates/fooddelete.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("foodapp/templates/foodlist", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="box">
    <h3>
      FOODS
    </h3>
    <table>
    <ul class="people">
      {{#each @model as |food|}}
      <li class="person">   
       <span class="title">NAME :{{food.name}}</span>
       <span class="title">PRICE :{{food.price}}</span>
       <Addcart @name={{food.id}}/>
      </li>
      {{/each}}
      </ul>  
       <LinkTo @route="cartlist">VIEW CART
                  </LinkTo>
      </table>
  <div class="bottom_link">
    
   
     <LinkTo @route="logout">LOG OUT 
                  </LinkTo>
   </div>
  </div >
  */
  {
    "id": "ltZYypmH",
    "block": "[[[10,0],[14,0,\"box\"],[12],[1,\"\\n  \"],[10,\"h3\"],[12],[1,\"\\n    FOODS\\n  \"],[13],[1,\"\\n  \"],[10,\"table\"],[12],[1,\"\\n  \"],[10,\"ul\"],[14,0,\"people\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,1]],null]],null],null,[[[1,\"    \"],[10,\"li\"],[14,0,\"person\"],[12],[1,\"   \\n     \"],[10,1],[14,0,\"title\"],[12],[1,\"NAME :\"],[1,[30,2,[\"name\"]]],[13],[1,\"\\n     \"],[10,1],[14,0,\"title\"],[12],[1,\"PRICE :\"],[1,[30,2,[\"price\"]]],[13],[1,\"\\n     \"],[8,[39,2],null,[[\"@name\"],[[30,2,[\"id\"]]]],null],[1,\"\\n    \"],[13],[1,\"\\n\"]],[2]],null],[1,\"    \"],[13],[1,\"  \\n     \"],[8,[39,3],null,[[\"@route\"],[\"cartlist\"]],[[\"default\"],[[[[1,\"VIEW CART\\n                \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"],[10,0],[14,0,\"bottom_link\"],[12],[1,\"\\n  \\n \\n   \"],[8,[39,3],null,[[\"@route\"],[\"logout\"]],[[\"default\"],[[[[1,\"LOG OUT \\n                \"]],[]]]]],[1,\"\\n \"],[13],[1,\"\\n\"],[13]],[\"@model\",\"food\"],false,[\"each\",\"-track-array\",\"addcart\",\"link-to\"]]",
    "moduleName": "foodapp/templates/foodlist.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("foodapp/templates/foodupdate", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Foodupdate"}}
  {{outlet}}
  */
  {
    "id": "ImGLITB8",
    "block": "[[[1,[28,[35,0],[\"Foodupdate\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "foodapp/templates/foodupdate.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("foodapp/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <head>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  </head>
  <div class="center">
      <div class=""box>
     <h1>
     Foodz
    </h1>
  </div>
  
  <Auth></Auth>
  </div>
    
  */
  {
    "id": "OBmQu7KI",
    "block": "[[[10,\"head\"],[12],[1,\"\\n    \"],[10,\"script\"],[14,\"src\",\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,0],[14,0,\"center\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"\"],[14,\"box\",\"\"],[12],[1,\"\\n   \"],[10,\"h1\"],[12],[1,\"\\n   Foodz\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,null,[[\"default\"],[[[],[]]]]],[1,\"\\n\"],[13],[1,\"\\n  \"]],[],false,[\"auth\"]]",
    "moduleName": "foodapp/templates/index.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("foodapp/templates/logout", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <Logoutpage></Logoutpage>
  */
  {
    "id": "GJoIn+Bz",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[],[]]]]]],[],false,[\"logoutpage\"]]",
    "moduleName": "foodapp/templates/logout.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("foodapp/templates/orderlist", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Orderlist"}}
  {{outlet}}
  */
  {
    "id": "ysJNoG0h",
    "block": "[[[1,[28,[35,0],[\"Orderlist\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "foodapp/templates/orderlist.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("foodapp/templates/resadd", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="center">
  <Addr></Addr>
  </div>
  */
  {
    "id": "vQTtO9nP",
    "block": "[[[10,0],[14,0,\"center\"],[12],[1,\"\\n\"],[8,[39,0],null,null,[[\"default\"],[[[],[]]]]],[1,\"\\n\"],[13]],[],false,[\"addr\"]]",
    "moduleName": "foodapp/templates/resadd.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("foodapp/templates/resdelete", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="center">
  <Deleter></Deleter>
  </div>
  */
  {
    "id": "TULEPrY4",
    "block": "[[[10,0],[14,0,\"center\"],[12],[1,\"\\n\"],[8,[39,0],null,null,[[\"default\"],[[[],[]]]]],[1,\"\\n\"],[13]],[],false,[\"deleter\"]]",
    "moduleName": "foodapp/templates/resdelete.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("foodapp/templates/signup", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <Sign></Sign>
  */
  {
    "id": "tmVr1u+6",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[],[]]]]]],[],false,[\"sign\"]]",
    "moduleName": "foodapp/templates/signup.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("foodapp/templates/welcome", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="box">
    <h3>
      RESTAURANTS
    </h3>
    <table>
    <ul class="people">
      {{#each @model as |res|}}
      <li class="person">
        
        <span class="title">RESTAURANT NAME :{{res.res_name}}</span>
       <span class="title">TYPE:{{res.type}}</span>
        
      </li>
  
     <div class="bottom_link">
        <LinkTo @route="foodlist"@model={{res.id}}>VIEW FOODS
                  </LinkTo>
      </div>
      {{/each}}
    </ul>
    </table>
  
  </div>
  <div class="bottom_link">
   <LinkTo @route="logout">Log out
                  </LinkTo>
              </div>
  
  */
  {
    "id": "aXrk+/xG",
    "block": "[[[10,0],[14,0,\"box\"],[12],[1,\"\\n  \"],[10,\"h3\"],[12],[1,\"\\n    RESTAURANTS\\n  \"],[13],[1,\"\\n  \"],[10,\"table\"],[12],[1,\"\\n  \"],[10,\"ul\"],[14,0,\"people\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,1]],null]],null],null,[[[1,\"    \"],[10,\"li\"],[14,0,\"person\"],[12],[1,\"\\n      \\n      \"],[10,1],[14,0,\"title\"],[12],[1,\"RESTAURANT NAME :\"],[1,[30,2,[\"res_name\"]]],[13],[1,\"\\n     \"],[10,1],[14,0,\"title\"],[12],[1,\"TYPE:\"],[1,[30,2,[\"type\"]]],[13],[1,\"\\n      \\n    \"],[13],[1,\"\\n\\n   \"],[10,0],[14,0,\"bottom_link\"],[12],[1,\"\\n      \"],[8,[39,2],null,[[\"@route\",\"@model\"],[\"foodlist\",[30,2,[\"id\"]]]],[[\"default\"],[[[[1,\"VIEW FOODS\\n                \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[2]],null],[1,\"  \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\"],[10,0],[14,0,\"bottom_link\"],[12],[1,\"\\n \"],[8,[39,2],null,[[\"@route\"],[\"logout\"]],[[\"default\"],[[[[1,\"Log out\\n                \"]],[]]]]],[1,\"\\n            \"],[13],[1,\"\\n\"]],[\"@model\",\"res\"],false,[\"each\",\"-track-array\",\"link-to\"]]",
    "moduleName": "foodapp/templates/welcome.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("foodapp/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("foodapp/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("foodapp/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("foodapp/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;

;define('foodapp/config/environment', [], function() {
  var prefix = 'foodapp';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("foodapp/app")["default"].create({"name":"foodapp","version":"0.0.0"});
          }
        
//# sourceMappingURL=foodapp.map
