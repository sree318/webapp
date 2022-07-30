'use strict';

define("foodapp/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f

  // This file exists to provide wrappers around ember-qunit's / ember-mocha's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.
  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options); // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }

  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options); // Additional setup for rendering tests can be done here.
  }

  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options); // Additional setup for unit tests can be done here.
  }
});
define("foodapp/tests/integration/components/accept-request-test", ["@ember/template-factory", "qunit", "foodapp/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | accept-request', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <AcceptRequest />
      */
      {
        "id": "ZOjjEE8u",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"accept-request\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <AcceptRequest>
              template block text
            </AcceptRequest>
          
      */
      {
        "id": "ghO6WFwN",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"accept-request\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("foodapp/tests/integration/components/addcart-test", ["@ember/template-factory", "qunit", "foodapp/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | addcart', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Addcart />
      */
      {
        "id": "g+1oJwlL",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"addcart\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Addcart>
              template block text
            </Addcart>
          
      */
      {
        "id": "Lv6PEFyn",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"addcart\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("foodapp/tests/integration/components/addf-test", ["@ember/template-factory", "qunit", "foodapp/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | addf', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Addf />
      */
      {
        "id": "S1ZrGtRV",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"addf\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Addf>
              template block text
            </Addf>
          
      */
      {
        "id": "WbINNWR+",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"addf\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("foodapp/tests/integration/components/addr-test", ["@ember/template-factory", "qunit", "foodapp/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | addr', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Addr />
      */
      {
        "id": "CD6orxlW",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"addr\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Addr>
              template block text
            </Addr>
          
      */
      {
        "id": "fhbNxsnE",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"addr\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("foodapp/tests/integration/components/auth-test", ["@ember/template-factory", "qunit", "foodapp/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | auth', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Auth />
      */
      {
        "id": "34fBvz01",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"auth\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Auth>
              template block text
            </Auth>
          
      */
      {
        "id": "9exXQbpA",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"auth\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("foodapp/tests/integration/components/confirm-test", ["@ember/template-factory", "qunit", "foodapp/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | confirm', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Confirm />
      */
      {
        "id": "G5R0/uhh",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"confirm\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Confirm>
              template block text
            </Confirm>
          
      */
      {
        "id": "9dn8wFuL",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"confirm\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("foodapp/tests/integration/components/deletef-test", ["@ember/template-factory", "qunit", "foodapp/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | deletef', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Deletef />
      */
      {
        "id": "toDwpKnU",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"deletef\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Deletef>
              template block text
            </Deletef>
          
      */
      {
        "id": "kwz325ad",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"deletef\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("foodapp/tests/integration/components/deleter-test", ["@ember/template-factory", "qunit", "foodapp/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | deleter', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Deleter />
      */
      {
        "id": "nuG2ET8j",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"deleter\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Deleter>
              template block text
            </Deleter>
          
      */
      {
        "id": "Z+0G3bnR",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"deleter\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("foodapp/tests/integration/components/editf-test", ["@ember/template-factory", "qunit", "foodapp/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | editf', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Editf />
      */
      {
        "id": "nF8Dtp8S",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"editf\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Editf>
              template block text
            </Editf>
          
      */
      {
        "id": "1azh6kNY",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"editf\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("foodapp/tests/integration/components/editr-test", ["@ember/template-factory", "qunit", "foodapp/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | editr', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Editr />
      */
      {
        "id": "P0pByJm3",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"editr\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Editr>
              template block text
            </Editr>
          
      */
      {
        "id": "NlHLbxfu",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"editr\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("foodapp/tests/integration/components/logoutpage-test", ["@ember/template-factory", "qunit", "foodapp/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | logoutpage', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Logoutpage />
      */
      {
        "id": "Amqnhyp7",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"logoutpage\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Logoutpage>
              template block text
            </Logoutpage>
          
      */
      {
        "id": "VQexQaDz",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"logoutpage\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("foodapp/tests/integration/components/sign-test", ["@ember/template-factory", "qunit", "foodapp/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | sign', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Sign />
      */
      {
        "id": "ge7RASat",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"sign\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Sign>
              template block text
            </Sign>
          
      */
      {
        "id": "RDDt1BHz",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"sign\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("foodapp/tests/integration/components/updatef-test", ["@ember/template-factory", "qunit", "foodapp/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | updatef', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Updatef />
      */
      {
        "id": "MkxjuGtx",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"updatef\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Updatef>
              template block text
            </Updatef>
          
      */
      {
        "id": "5O9tpIV9",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"updatef\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("foodapp/tests/integration/components/updatefp-test", ["@ember/template-factory", "qunit", "foodapp/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | updatefp', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Updatefp />
      */
      {
        "id": "GXgKOJ9w",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"updatefp\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Updatefp>
              template block text
            </Updatefp>
          
      */
      {
        "id": "Z59rFByS",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"updatefp\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("foodapp/tests/integration/components/updater-test", ["@ember/template-factory", "qunit", "foodapp/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | updater', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Updater />
      */
      {
        "id": "3AEMGwRu",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"updater\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Updater>
              template block text
            </Updater>
          
      */
      {
        "id": "IJCwO5mS",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"updater\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("foodapp/tests/integration/components/viewfood-test", ["@ember/template-factory", "qunit", "foodapp/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | viewfood', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Viewfood />
      */
      {
        "id": "gczHCObk",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"viewfood\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Viewfood>
              template block text
            </Viewfood>
          
      */
      {
        "id": "KZA5GcgT",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"viewfood\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("foodapp/tests/test-helper", ["foodapp/app", "foodapp/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"foodapp/app",0,"foodapp/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("foodapp/tests/unit/routes/adfoodlist-test", ["qunit", "foodapp/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | adfoodlist', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:adfoodlist');
      assert.ok(route);
    });
  });
});
define("foodapp/tests/unit/routes/adm-foodlist-test", ["qunit", "foodapp/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | adm-foodlist', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:adm-foodlist');
      assert.ok(route);
    });
  });
});
define("foodapp/tests/unit/routes/adm-welcome-test", ["qunit", "foodapp/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | adm-welcome', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:adm-welcome');
      assert.ok(route);
    });
  });
});
define("foodapp/tests/unit/routes/cartlist-test", ["qunit", "foodapp/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | cartlist', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:cartlist');
      assert.ok(route);
    });
  });
});
define("foodapp/tests/unit/routes/foodadd-test", ["qunit", "foodapp/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | foodadd', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:foodadd');
      assert.ok(route);
    });
  });
});
define("foodapp/tests/unit/routes/fooddelete-test", ["qunit", "foodapp/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | fooddelete', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:fooddelete');
      assert.ok(route);
    });
  });
});
define("foodapp/tests/unit/routes/foodlist-test", ["qunit", "foodapp/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | foodlist', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:foodlist');
      assert.ok(route);
    });
  });
});
define("foodapp/tests/unit/routes/foodupdate-test", ["qunit", "foodapp/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | foodupdate', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:foodupdate');
      assert.ok(route);
    });
  });
});
define("foodapp/tests/unit/routes/index-test", ["qunit", "foodapp/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("foodapp/tests/unit/routes/logout-test", ["qunit", "foodapp/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | logout', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:logout');
      assert.ok(route);
    });
  });
});
define("foodapp/tests/unit/routes/orderlist-test", ["qunit", "foodapp/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | orderlist', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:orderlist');
      assert.ok(route);
    });
  });
});
define("foodapp/tests/unit/routes/resadd-test", ["qunit", "foodapp/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | resadd', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:resadd');
      assert.ok(route);
    });
  });
});
define("foodapp/tests/unit/routes/resdelete-test", ["qunit", "foodapp/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | resdelete', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:resdelete');
      assert.ok(route);
    });
  });
});
define("foodapp/tests/unit/routes/signup-test", ["qunit", "foodapp/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | signup', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:signup');
      assert.ok(route);
    });
  });
});
define("foodapp/tests/unit/routes/total-test", ["qunit", "foodapp/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | total', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:total');
      assert.ok(route);
    });
  });
});
define("foodapp/tests/unit/routes/welcome-test", ["qunit", "foodapp/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"foodapp/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | welcome', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:welcome');
      assert.ok(route);
    });
  });
});
define('foodapp/config/environment', [], function() {
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

require('foodapp/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
