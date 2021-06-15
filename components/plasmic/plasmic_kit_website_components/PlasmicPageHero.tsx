// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kjuFFTSZb8fanzCHT2C1jz
// Component: MaAtk98o9f
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
import GraphicIcon from "../../GraphicIcon"; // plasmic-import: TcXkT68Mp6/component
import ButtonLink from "../../ButtonLink"; // plasmic-import: jzdXOPDUzV/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_kit_website_components.module.css"; // plasmic-import: kjuFFTSZb8fanzCHT2C1jz/projectcss
import * as sty from "./PlasmicPageHero.module.css"; // plasmic-import: MaAtk98o9f/css

import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: mrC2Ljeqti/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: wTfucAc7Rr/icon

export type PlasmicPageHero__VariantMembers = {};

export type PlasmicPageHero__VariantsArgs = {};
type VariantPropType = keyof PlasmicPageHero__VariantsArgs;
export const PlasmicPageHero__VariantProps = new Array<VariantPropType>();

export type PlasmicPageHero__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPageHero__ArgsType;
export const PlasmicPageHero__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicPageHero__OverridesType = {
  root?: p.Flex<"section">;
  buttonLink?: p.Flex<typeof ButtonLink>;
  svg?: p.Flex<"svg">;
};

export interface DefaultPageHeroProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  className?: string;
}

function PlasmicPageHero__RenderFunc(props: {
  variants: PlasmicPageHero__VariantsArgs;
  args: PlasmicPageHero__ArgsType;
  overrides: PlasmicPageHero__OverridesType;
  dataFetches?: PlasmicPageHero__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__dso5W)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <GraphicIcon
              className={classNames("__wab_instance", sty.graphicIcon__tu9S5)}
              colors={"gray" as const}
            >
              <Icon12Icon
                className={classNames(defaultcss.all, sty.svg__yfuCz)}
                role={"img"}
              />
            </GraphicIcon>
          ),

          value: args.slot2
        })}

        <div className={classNames(defaultcss.all, sty.box__rb3Jg)}>
          {p.renderPlasmicSlot({
            defaultContents: "Site builder",
            value: args.children,
            className: classNames(sty.slotChildren)
          })}
        </div>

        <div className={classNames(defaultcss.all, sty.box__gEcB)}>
          {p.renderPlasmicSlot({
            defaultContents: "A free site builder that gives you React code.",
            value: args.slot,
            className: classNames(sty.slotSlot)
          })}
        </div>

        <ButtonLink
          data-plasmic-name={"buttonLink"}
          data-plasmic-override={overrides.buttonLink}
          className={classNames("__wab_instance", sty.buttonLink)}
          icon={
            <IconIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(defaultcss.all, sty.svg)}
              role={"img"}
            />
          }
          label={"Link"}
        />
      </p.Stack>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "buttonLink", "svg"],
  buttonLink: ["buttonLink", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  buttonLink: typeof ButtonLink;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPageHero__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPageHero__VariantsArgs;
    args?: PlasmicPageHero__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPageHero__Fetches;
  } & Omit<PlasmicPageHero__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPageHero__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPageHero__ArgProps,
      internalVariantPropNames: PlasmicPageHero__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicPageHero__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPageHero";
  } else {
    func.displayName = `PlasmicPageHero.${nodeName}`;
  }
  return func;
}

export const PlasmicPageHero = Object.assign(
  // Top-level PlasmicPageHero renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    buttonLink: makeNodeComponent("buttonLink"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicPageHero
    internalVariantProps: PlasmicPageHero__VariantProps,
    internalArgProps: PlasmicPageHero__ArgProps
  }
);

export default PlasmicPageHero;
/* prettier-ignore-end */
