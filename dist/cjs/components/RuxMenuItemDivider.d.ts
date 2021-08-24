interface RuxMenuItemDividerProps {
}
interface RuxMenuItemDividerEvents {
}
interface RuxMenuItemDividerSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxMenuItemDivider extends SvelteComponent {
    $$prop_def: RuxMenuItemDividerProps;
    $$events_def: RuxMenuItemDividerEvents;
    $$slot_def: RuxMenuItemDividerSlots;
    $on<K extends keyof RuxMenuItemDividerEvents>(type: K, callback: (e: RuxMenuItemDividerEvents[K]) => any): () => void;
    $set($$props: Partial<RuxMenuItemDividerProps>): void;
    constructor(options: any);
    get getWebComponent(): HTMLRuxMenuItemDividerElement | undefined;
}
export default RuxMenuItemDivider;
