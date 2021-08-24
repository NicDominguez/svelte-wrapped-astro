interface RuxTableHeaderRowProps {
}
interface RuxTableHeaderRowEvents {
}
interface RuxTableHeaderRowSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxTableHeaderRow extends SvelteComponent {
    $$prop_def: RuxTableHeaderRowProps;
    $$events_def: RuxTableHeaderRowEvents;
    $$slot_def: RuxTableHeaderRowSlots;
    $on<K extends keyof RuxTableHeaderRowEvents>(type: K, callback: (e: RuxTableHeaderRowEvents[K]) => any): () => void;
    $set($$props: Partial<RuxTableHeaderRowProps>): void;
    constructor(options: any);
    get getWebComponent(): HTMLRuxTableHeaderRowElement | undefined;
}
export default RuxTableHeaderRow;
