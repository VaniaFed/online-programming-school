import React from 'react';

import Link from 'next/link';

export const SSRLink = ({ children, href, as }: any) => (
    <Link href={href} as={as}>
        <a>{children}</a>
    </Link>
);
