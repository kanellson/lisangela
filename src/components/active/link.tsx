'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type ActiveLinkProps = {
	href: string;
	children: React.ReactNode;
}

export default function ActiveLink({ href, children} : ActiveLinkProps) {
	const pathname = usePathname();
	const isActive = pathname === href;

	console.log(isActive);
	
	
	return (
		<>
			<Link className={`${isActive ? 'bg-link' : 'href'}`} href={href}>{children}</Link>
		</>
	)
}