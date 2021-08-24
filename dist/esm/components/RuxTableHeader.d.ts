interface RuxTableHeaderProps {
}
interface RuxTableHeaderEvents {
}
interface RuxTableHeaderSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxTableHeader extends SvelteComponent {
    $$prop_def: RuxTableHeaderProps;
    $$events_def: RuxTableHeaderEvents;
    $$slot_def: RuxTableHeaderSlots;
    $on<K extends keyof RuxTableHeaderEvents>(type: K, callback: (e: RuxTableHeaderEvents[K]) => any): () => void;
    $set($$props: Partial<RuxTableHeaderProps>): void;
    constructor(options: any);
    get getWebComponent(): HTMLRuxTableHeaderElement | undefined;
}
export default RuxTableHeader;
