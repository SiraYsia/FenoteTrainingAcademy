import path from 'path';
import { BlobsServer } from '@netlify/blobs';
import { v4 as uuidv4 } from 'uuid';
import { log, NETLIFYDEVLOG } from '../../utils/command-helpers.js';
import { getPathInProject } from '../settings.js';
let hasPrintedLocalBlobsNotice = false;
const printLocalBlobsNotice = () => {
    if (hasPrintedLocalBlobsNotice) {
        return;
    }
    hasPrintedLocalBlobsNotice = true;
    log(`${NETLIFYDEVLOG} Netlify Blobs running in sandbox mode for local development. Refer to https://ntl.fyi/local-blobs for more information.`);
};
const startBlobsServer = async (debug, projectRoot, token) => {
    const directory = path.resolve(projectRoot, getPathInProject(['blobs-serves']));
    const server = new BlobsServer({
        debug,
        directory,
        onRequest: () => {
            printLocalBlobsNotice();
        },
        token,
    });
    const { port } = await server.start();
    return { port };
};
/**
 * Starts a local Blobs server and returns a context object that lets functions
 * connect to it.
 */
export const getBlobsContext = async ({ debug, projectRoot, siteID }) => {
    const token = uuidv4();
    const { port } = await startBlobsServer(debug, projectRoot, token);
    const context = {
        deployID: '0',
        edgeURL: `http://localhost:${port}`,
        siteID,
        token,
    };
    return context;
};
