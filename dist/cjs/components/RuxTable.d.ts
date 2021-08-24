interface RuxTableProps {
}
interface RuxTableEvents {
}
interface RuxTableSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxTable extends SvelteComponent {
    $$prop_def: RuxTableProps;
    $$events_def: RuxTableEvents;
    $$slot_def: RuxTableSlots;
    $on<K extends keyof RuxTableEvents>(type: K, callback: (e: RuxTableEvents[K]) => any): () => void;
    $set($$props: Partial<RuxTableProps>): void;
    constructor(options: any);
    get getWebComponent(): HTMLRuxTableElement | undefined;
}
export default RuxTable;
