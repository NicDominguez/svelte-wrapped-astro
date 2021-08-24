interface RuxTableCellProps {
}
interface RuxTableCellEvents {
}
interface RuxTableCellSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxTableCell extends SvelteComponent {
    $$prop_def: RuxTableCellProps;
    $$events_def: RuxTableCellEvents;
    $$slot_def: RuxTableCellSlots;
    $on<K extends keyof RuxTableCellEvents>(type: K, callback: (e: RuxTableCellEvents[K]) => any): () => void;
    $set($$props: Partial<RuxTableCellProps>): void;
    constructor(options: any);
    get getWebComponent(): HTMLRuxTableCellElement | undefined;
}
export default RuxTableCell;
