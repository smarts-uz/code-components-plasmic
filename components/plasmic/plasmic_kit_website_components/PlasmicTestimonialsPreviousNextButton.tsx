// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: 6947fPy0uC
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
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicTestimonialsPreviousNextButton.module.css"; // plasmic-import: 6947fPy0uC/css

import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: VMSgXilvsf/icon

export type PlasmicTestimonialsPreviousNextButton__VariantMembers = {};

export type PlasmicTestimonialsPreviousNextButton__VariantsArgs = {};
type VariantPropType =
  keyof PlasmicTestimonialsPreviousNextButton__VariantsArgs;
export const PlasmicTestimonialsPreviousNextButton__VariantProps =
  new Array<VariantPropType>();

export type PlasmicTestimonialsPreviousNextButton__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTestimonialsPreviousNextButton__ArgsType;
export const PlasmicTestimonialsPreviousNextButton__ArgProps =
  new Array<ArgPropType>("children");

export type PlasmicTestimonialsPreviousNextButton__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultTestimonialsPreviousNextButtonProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicTestimonialsPreviousNextButton__RenderFunc(props: {
  variants: PlasmicTestimonialsPreviousNextButton__VariantsArgs;
  args: PlasmicTestimonialsPreviousNextButton__ArgsType;
  overrides: PlasmicTestimonialsPreviousNextButton__OverridesType;
  dataFetches?: PlasmicTestimonialsPreviousNextButton__Fetches;
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
          <Icon2Icon
            className={classNames(defaultcss.all, sty.svg__vXWxP)}
            role={"img"}
          />
        ),

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
  PlasmicTestimonialsPreviousNextButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestimonialsPreviousNextButton__VariantsArgs;
    args?: PlasmicTestimonialsPreviousNextButton__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicTestimonialsPreviousNextButton__Fetches;
  } & Omit< // Specify variants directly as props
    PlasmicTestimonialsPreviousNextButton__VariantsArgs,
    ReservedPropsType
  > &
    // Specify args directly as props
    Omit<PlasmicTestimonialsPreviousNextButton__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTestimonialsPreviousNextButton__ArgProps,
      internalVariantPropNames:
        PlasmicTestimonialsPreviousNextButton__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTestimonialsPreviousNextButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestimonialsPreviousNextButton";
  } else {
    func.displayName = `PlasmicTestimonialsPreviousNextButton.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonialsPreviousNextButton = Object.assign(
  // Top-level PlasmicTestimonialsPreviousNextButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTestimonialsPreviousNextButton
    internalVariantProps: PlasmicTestimonialsPreviousNextButton__VariantProps,
    internalArgProps: PlasmicTestimonialsPreviousNextButton__ArgProps
  }
);

export default PlasmicTestimonialsPreviousNextButton;
/* prettier-ignore-end */
