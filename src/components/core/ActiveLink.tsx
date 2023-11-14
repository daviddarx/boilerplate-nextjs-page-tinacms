'use client';

import { PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

type ActiveLinkProps = LinkProps & {
  className: string;
  activeClassName: string;
};

export default function NavLink({
  children,
  className = '',
  activeClassName = '',
  ...props
}: PropsWithChildren<ActiveLinkProps>) {
  const currentRoute = usePathname();

  let computedClass = className;

  if (props.href === currentRoute) {
    computedClass += ` ${activeClassName}`;
  }

  return (
    <Link scroll={false} className={computedClass} {...props}>
      {children}
    </Link>
  );
}
