// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aPZu6epBt5EaEYRgMF1d6z
// Component: dIpIxA1IiY
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

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_code_component_examples.module.css"; // plasmic-import: aPZu6epBt5EaEYRgMF1d6z/projectcss
import * as sty from "./PlasmicColoredSection.module.css"; // plasmic-import: dIpIxA1IiY/css

export type PlasmicColoredSection__VariantMembers = {};

export type PlasmicColoredSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicColoredSection__VariantsArgs;
export const PlasmicColoredSection__VariantProps = new Array<VariantPropType>();

export type PlasmicColoredSection__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicColoredSection__ArgsType;
export const PlasmicColoredSection__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicColoredSection__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultColoredSectionProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicColoredSection__RenderFunc(props: {
  variants: PlasmicColoredSection__VariantsArgs;
  args: PlasmicColoredSection__ArgsType;
  overrides: PlasmicColoredSection__OverridesType;
  dataFetches?: PlasmicColoredSection__Fetches;
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
        defaultContents: null,
        value: args.children,
        className: classNames(sty.slotChildren)
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicColoredSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicColoredSection__VariantsArgs;
    args?: PlasmicColoredSection__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicColoredSection__Fetches;
  } & Omit<PlasmicColoredSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicColoredSection__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicColoredSection__ArgProps,
      internalVariantPropNames: PlasmicColoredSection__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicColoredSection__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicColoredSection";
  } else {
    func.displayName = `PlasmicColoredSection.${nodeName}`;
  }
  return func;
}

export const PlasmicColoredSection = Object.assign(
  // Top-level PlasmicColoredSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicColoredSection
    internalVariantProps: PlasmicColoredSection__VariantProps,
    internalArgProps: PlasmicColoredSection__ArgProps
  }
);

export default PlasmicColoredSection;
/* prettier-ignore-end */
