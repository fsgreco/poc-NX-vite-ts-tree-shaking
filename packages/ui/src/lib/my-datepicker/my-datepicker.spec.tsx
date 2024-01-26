import { render } from '@testing-library/react';

import MyDatepicker from './my-datepicker';

describe('MyDatepicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyDatepicker />);
    expect(baseElement).toBeTruthy();
  });
});
