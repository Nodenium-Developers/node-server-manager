// test that the app runs without crashing
import { render } from '@testing-library/react';
import {main} from './index';

describe('Main Tests', () => {
    it('should run without crashing', async () => {
        await main();
    });
});