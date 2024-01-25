import { render } from '@testing-library/react';

import MyProgress from './my-progress';

describe('MyProgress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyProgress />);
    expect(baseElement).toBeTruthy();
  });
});
