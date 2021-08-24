import { Components } from '@astrouxds/astro-web-components';
interface RuxTableRowProps {
    /** Changes the background color of the row. Can be applied to multiple rows at once. */
    selected?: Components.RuxTableRow["selected"];
}
interface RuxTableRowEvents {
}
interface RuxTableRowSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxTableRow extends SvelteComponent {
    $$prop_def: RuxTableRowProps;
    $$events_def: RuxTableRowEvents;
    $$slot_def: RuxTableRowSlots;
    $on<K extends keyof RuxTableRowEvents>(type: K, callback: (e: RuxTableRowEvents[K]) => any): () => void;
    $set($$props: Partial<RuxTableRowProps>): void;
    constructor(options: any);
    get selected(): any;
    set selected(selected: any);
    get getWebComponent(): HTMLRuxTableRowElement | undefined;
}
export default RuxTableRow;
