interface RuxTabPanelProps {
}
interface RuxTabPanelEvents {
}
interface RuxTabPanelSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxTabPanel extends SvelteComponent {
    $$prop_def: RuxTabPanelProps;
    $$events_def: RuxTabPanelEvents;
    $$slot_def: RuxTabPanelSlots;
    $on<K extends keyof RuxTabPanelEvents>(type: K, callback: (e: RuxTabPanelEvents[K]) => any): () => void;
    $set($$props: Partial<RuxTabPanelProps>): void;
    constructor(options: any);
    get getWebComponent(): HTMLRuxTabPanelElement | undefined;
}
export default RuxTabPanel;
