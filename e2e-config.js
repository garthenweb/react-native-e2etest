import pkg from './package.json';

const { devices } = pkg.e2e;

if (!process.env.E2E_DEVICE) {
    throw new Error('E2E_DEVICE environment variable is not defined');
}

if (!devices[process.env.E2E_DEVICE]) {
    throw new Error(`No e2e device configuration found in package.json for E2E_DEVICE environment ${process.env.E2E_DEVICE}`);
}

export default devices[process.env.E2E_DEVICE];
