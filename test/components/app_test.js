import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/App/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
