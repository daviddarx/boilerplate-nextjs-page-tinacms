/* based on https://github.com/vercel/next.js/blob/canary/examples/active-class-name/components/ActiveLink.tsx */
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { PropsWithChildren, useEffect, useState } from 'react';

type ActiveLinkProps = LinkProps & {
  className?: string;
  activeClassName?: string;
  scroll?: boolean;
};

const ActiveLink = ({
  children,
  activeClassName = '',
  className = '',
  scroll = false,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const { asPath, isReady } = useRouter();
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    if (isReady) {
      const linkPathname = new URL((props.as || props.href) as string, location.href).pathname;

      const activePathname = new URL(asPath, location.href).pathname;

      const newClassName =
        linkPathname === activePathname ? `${className} ${activeClassName}`.trim() : className;

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName);
      }
    }
  }, [asPath, isReady, props.as, props.href, activeClassName, className, computedClassName]);

  return (
    <Link scroll={scroll} className={computedClassName} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;
