import { render } from '@testing-library/react';

import MyTable from './my-table';

describe('MyTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyTable />);
    expect(baseElement).toBeTruthy();
  });
});
