import { Components, JSX } from '@astrouxds/astro-web-components';
interface RuxTreeNodeProps {
    /** Sets the expanded state */
    expanded?: Components.RuxTreeNode["expanded"];
    /** Sets the selected state */
    selected?: Components.RuxTreeNode["selected"];
}
interface RuxTreeNodeEvents {
    /** Emit when user selects a tree node */
    "rux-tree-node-selected": Parameters<JSX.RuxTreeNode["onRux-tree-node-selected"]>[0];
}
interface RuxTreeNodeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxTreeNode extends SvelteComponent {
    $$prop_def: RuxTreeNodeProps;
    $$events_def: RuxTreeNodeEvents;
    $$slot_def: RuxTreeNodeSlots;
    $on<K extends keyof RuxTreeNodeEvents>(type: K, callback: (e: RuxTreeNodeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxTreeNodeProps>): void;
    constructor(options: any);
    get expanded(): any;
    set expanded(expanded: any);
    get selected(): any;
    set selected(selected: any);
    /** Sets the expanded state */
    get setExpanded(): Components.RuxTreeNode["setExpanded"];
    /** Sets the selected state */
    get setSelected(): Components.RuxTreeNode["setSelected"];
    get getWebComponent(): HTMLRuxTreeNodeElement | undefined;
}
export default RuxTreeNode;
