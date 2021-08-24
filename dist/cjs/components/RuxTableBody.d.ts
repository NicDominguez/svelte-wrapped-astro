interface RuxTableBodyProps {
}
interface RuxTableBodyEvents {
}
interface RuxTableBodySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxTableBody extends SvelteComponent {
    $$prop_def: RuxTableBodyProps;
    $$events_def: RuxTableBodyEvents;
    $$slot_def: RuxTableBodySlots;
    $on<K extends keyof RuxTableBodyEvents>(type: K, callback: (e: RuxTableBodyEvents[K]) => any): () => void;
    $set($$props: Partial<RuxTableBodyProps>): void;
    constructor(options: any);
    get getWebComponent(): HTMLRuxTableBodyElement | undefined;
}
export default RuxTableBody;
