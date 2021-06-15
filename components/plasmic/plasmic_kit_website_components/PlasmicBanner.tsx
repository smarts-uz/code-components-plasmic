// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: QBF7nr-k8Wj
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
import * as sty from "./PlasmicBanner.module.css"; // plasmic-import: QBF7nr-k8Wj/css

export type PlasmicBanner__VariantMembers = {};

export type PlasmicBanner__VariantsArgs = {};
type VariantPropType = keyof PlasmicBanner__VariantsArgs;
export const PlasmicBanner__VariantProps = new Array<VariantPropType>();

export type PlasmicBanner__ArgsType = {};
type ArgPropType = keyof PlasmicBanner__ArgsType;
export const PlasmicBanner__ArgProps = new Array<ArgPropType>();

export type PlasmicBanner__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  img?: p.Flex<"img">;
};

export interface DefaultBannerProps {
  className?: string;
}

function PlasmicBanner__RenderFunc(props: {
  variants: PlasmicBanner__VariantsArgs;
  args: PlasmicBanner__ArgsType;
  overrides: PlasmicBanner__OverridesType;
  dataFetches?: PlasmicBanner__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={p.PlasmicLink}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
      component={Link}
      href={"https://www.producthunt.com/posts/plasmic" as const}
      platform={"nextjs"}
    >
      <img
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(defaultcss.img, sty.img)}
        role={"img"}
        src={"/plasmic/plasmic_kit_website_components/images/image59.svg"}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__oZexG)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__aYdCb
          )}
        >
          {"We're live on Product Hunt! Join the discussion."}
        </div>
      </p.Stack>

      <div
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.box__oMkyv
        )}
      >
        {"-->"}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  img: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBanner__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBanner__VariantsArgs;
    args?: PlasmicBanner__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicBanner__Fetches;
  } & Omit<PlasmicBanner__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBanner__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicBanner__ArgProps,
      internalVariantPropNames: PlasmicBanner__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicBanner__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBanner";
  } else {
    func.displayName = `PlasmicBanner.${nodeName}`;
  }
  return func;
}

export const PlasmicBanner = Object.assign(
  // Top-level PlasmicBanner renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicBanner
    internalVariantProps: PlasmicBanner__VariantProps,
    internalArgProps: PlasmicBanner__ArgProps
  }
);

export default PlasmicBanner;
/* prettier-ignore-end */
