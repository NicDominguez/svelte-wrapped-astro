interface RuxTreeProps {
}
interface RuxTreeEvents {
}
interface RuxTreeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxTree extends SvelteComponent {
    $$prop_def: RuxTreeProps;
    $$events_def: RuxTreeEvents;
    $$slot_def: RuxTreeSlots;
    $on<K extends keyof RuxTreeEvents>(type: K, callback: (e: RuxTreeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxTreeProps>): void;
    constructor(options: any);
    get getWebComponent(): HTMLRuxTreeElement | undefined;
}
export default RuxTree;
