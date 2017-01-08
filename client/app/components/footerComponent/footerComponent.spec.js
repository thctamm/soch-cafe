import FooterComponentModule from './footerComponent'
import FooterComponentController from './footerComponent.controller';
import FooterComponentComponent from './footerComponent.component';
import FooterComponentTemplate from './footerComponent.html';

describe('FooterComponent', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FooterComponentModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FooterComponentController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(FooterComponentTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = FooterComponentComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FooterComponentTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FooterComponentController);
      });
  });
});
