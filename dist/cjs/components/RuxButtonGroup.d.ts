import { Components } from '@astrouxds/astro-web-components';
interface RuxButtonGroupProps {
    /** The horizontal alignment of buttons within the group */
    hAlign?: Components.RuxButtonGroup["hAlign"];
}
interface RuxButtonGroupEvents {
}
interface RuxButtonGroupSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxButtonGroup extends SvelteComponent {
    $$prop_def: RuxButtonGroupProps;
    $$events_def: RuxButtonGroupEvents;
    $$slot_def: RuxButtonGroupSlots;
    $on<K extends keyof RuxButtonGroupEvents>(type: K, callback: (e: RuxButtonGroupEvents[K]) => any): () => void;
    $set($$props: Partial<RuxButtonGroupProps>): void;
    constructor(options: any);
    get hAlign(): any;
    set hAlign(hAlign: any);
    get getWebComponent(): HTMLRuxButtonGroupElement | undefined;
}
export default RuxButtonGroup;
