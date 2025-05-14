
import { NextApiRequest, NextApiResponse } from 'next';
import { renderToStream } from '@react-pdf/renderer';
import { MyDocument } from '../../components/MyDocument';
import React from 'react'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Content-Type', 'application/pdf');
    const stream = await renderToStream(React.createElement(MyDocument));
    stream.pipe(res);
}
