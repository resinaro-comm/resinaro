import * as React from "react";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props: React.ComponentPropsWithoutRef<'h1'>) => (
      <h1 className="text-3xl md:text-4xl font-bold text-green-900 my-6" {...props} />
    ),
    h2: (props: React.ComponentPropsWithoutRef<'h2'>) => (
      <h2 className="text-2xl md:text-3xl font-bold text-green-900 my-5" {...props} />
    ),
    p: (props: React.ComponentPropsWithoutRef<'p'>) => (
      <p className="text-gray-800 leading-7 my-4" {...props} />
    ),
    a: (props: React.ComponentPropsWithoutRef<'a'>) => (
      <a className="text-green-900 underline" {...props} />
    ),
    ul: (props: React.ComponentPropsWithoutRef<'ul'>) => (
      <ul className="list-disc pl-6 my-4" {...props} />
    ),
    li: (props: React.ComponentPropsWithoutRef<'li'>) => (
      <li className="my-1" {...props} />
    ),
    ...components,
  };
}
