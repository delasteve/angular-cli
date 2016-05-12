/* tslint:disable:no-unused-variable */

import { addProviders, inject } from '@angular/core/testing';
import {<%= classifiedModuleName %>} from './<%= fileName %>';

describe('<%= classifiedModuleName %>', () => {
  it('should create an instance', () => {
    expect(new <%= classifiedModuleName %>()).toBeTruthy();
  });
});
