import PosterModule from './poster'
import PosterController from './poster.controller';
import PosterComponent from './poster.component';
import PosterTemplate from './poster.html';

describe('Poster', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PosterModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PosterController();
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
      expect(PosterTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PosterComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PosterTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PosterController);
      });
  });
});
