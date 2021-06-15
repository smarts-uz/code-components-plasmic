// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: pDZtEWqRzT
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Testimonials from "../../Testimonials"; // plasmic-import: DJbGaLTtKAR/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicQuotesScroller.module.css"; // plasmic-import: pDZtEWqRzT/css

export type PlasmicQuotesScroller__VariantMembers = {};

export type PlasmicQuotesScroller__VariantsArgs = {};
type VariantPropType = keyof PlasmicQuotesScroller__VariantsArgs;
export const PlasmicQuotesScroller__VariantProps = new Array<VariantPropType>();

export type PlasmicQuotesScroller__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicQuotesScroller__ArgsType;
export const PlasmicQuotesScroller__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicQuotesScroller__OverridesType = {
  root?: p.Flex<"div">;
  box?: p.Flex<"div">;
};

export interface DefaultQuotesScrollerProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicQuotesScroller__RenderFunc(props: {
  variants: PlasmicQuotesScroller__VariantsArgs;
  args: PlasmicQuotesScroller__ArgsType;
  overrides: PlasmicQuotesScroller__OverridesType;
  dataFetches?: PlasmicQuotesScroller__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <Testimonials
            className={classNames("__wab_instance", sty.testimonials__eU30T)}
          />
        ),

        value: args.children
      })}

      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, sty.box)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "box"],
  box: ["box"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  box: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicQuotesScroller__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicQuotesScroller__VariantsArgs;
    args?: PlasmicQuotesScroller__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicQuotesScroller__Fetches;
  } & Omit<PlasmicQuotesScroller__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicQuotesScroller__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicQuotesScroller__ArgProps,
      internalVariantPropNames: PlasmicQuotesScroller__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicQuotesScroller__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicQuotesScroller";
  } else {
    func.displayName = `PlasmicQuotesScroller.${nodeName}`;
  }
  return func;
}

export const PlasmicQuotesScroller = Object.assign(
  // Top-level PlasmicQuotesScroller renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),

    // Metadata about props expected for PlasmicQuotesScroller
    internalVariantProps: PlasmicQuotesScroller__VariantProps,
    internalArgProps: PlasmicQuotesScroller__ArgProps
  }
);

export default PlasmicQuotesScroller;
/* prettier-ignore-end */
