interface RuxTableHeaderCellProps {
}
interface RuxTableHeaderCellEvents {
}
interface RuxTableHeaderCellSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxTableHeaderCell extends SvelteComponent {
    $$prop_def: RuxTableHeaderCellProps;
    $$events_def: RuxTableHeaderCellEvents;
    $$slot_def: RuxTableHeaderCellSlots;
    $on<K extends keyof RuxTableHeaderCellEvents>(type: K, callback: (e: RuxTableHeaderCellEvents[K]) => any): () => void;
    $set($$props: Partial<RuxTableHeaderCellProps>): void;
    constructor(options: any);
    get getWebComponent(): HTMLRuxTableHeaderCellElement | undefined;
}
export default RuxTableHeaderCell;
