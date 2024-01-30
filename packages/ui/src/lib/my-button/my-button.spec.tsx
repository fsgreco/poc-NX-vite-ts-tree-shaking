import React from 'react';
import MyButton from './my-button';

import { render, screen } from '@testing-library/react';
import { describe, it, test, expect } from 'vitest';

// @vitest-environment jsdom

describe('MyButton Component', () => {

	let buttonContent = 'ciaone'
	const { baseElement } = render(<MyButton label={buttonContent} />);

	// screen.debug(document.body);

  it('should render successfully', () => {
    expect(baseElement).toBeTruthy();
  });

	test('it contains the correct label', () => {
		let text = document.querySelector('button')?.textContent 
		expect(text).toBe(buttonContent)
	})
});
